(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime-types.d.ts" />
/// <reference path="../../runtime/base/dev-globals.d.ts" />
/// <reference path="../../runtime/base/dev-protocol.d.ts" />
/// <reference path="../../runtime/base/dev-extensions.ts" />
__turbopack_context__.s([
    "connect",
    ()=>connect,
    "setHooks",
    ()=>setHooks,
    "subscribeToUpdate",
    ()=>subscribeToUpdate
]);
function connect(param) {
    let { addMessageListener, sendMessage, onUpdateError = console.error } = param;
    addMessageListener((msg)=>{
        switch(msg.type){
            case 'turbopack-connected':
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: (param)=>{
            let [chunkPath, callback] = param;
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: 'turbopack-subscribe',
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: 'turbopack-unsubscribe',
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        const added = [];
        const deleted = [];
        var _updateA_modules;
        const deletedModules = new Set((_updateA_modules = updateA.modules) !== null && _updateA_modules !== void 0 ? _updateA_modules : []);
        var _updateB_modules;
        const addedModules = new Set((_updateB_modules = updateB.modules) !== null && _updateB_modules !== void 0 ? _updateB_modules : []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added,
            deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        var _updateA_added, _updateB_added;
        const added = new Set([
            ...(_updateA_added = updateA.added) !== null && _updateA_added !== void 0 ? _updateA_added : [],
            ...(_updateB_added = updateB.added) !== null && _updateB_added !== void 0 ? _updateB_added : []
        ]);
        var _updateA_deleted, _updateB_deleted;
        const deleted = new Set([
            ...(_updateA_deleted = updateA.deleted) !== null && _updateA_deleted !== void 0 ? _updateA_deleted : [],
            ...(_updateB_deleted = updateB.deleted) !== null && _updateB_deleted !== void 0 ? _updateB_deleted : []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: 'partial',
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        var _updateA_modules1, _updateB_added1;
        const modules = new Set([
            ...(_updateA_modules1 = updateA.modules) !== null && _updateA_modules1 !== void 0 ? _updateA_modules1 : [],
            ...(_updateB_added1 = updateB.added) !== null && _updateB_added1 !== void 0 ? _updateB_added1 : []
        ]);
        var _updateB_deleted1;
        for (const moduleId of (_updateB_deleted1 = updateB.deleted) !== null && _updateB_deleted1 !== void 0 ? _updateB_deleted1 : []){
            modules.delete(moduleId);
        }
        return {
            type: 'added',
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        var _updateB_modules1;
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set((_updateB_modules1 = updateB.modules) !== null && _updateB_modules1 !== void 0 ? _updateB_modules1 : []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: 'deleted',
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error("Invariant: ".concat(message));
}
const CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
const CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
"[project]/components/ThemeProvider.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const initialState = {
    theme: "light",
    setTheme: ()=>null,
    toggleTheme: ()=>null
};
const ThemeProviderContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"])(initialState);
function ThemeProvider(param) {
    let { children, ...props } = param;
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("light");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            const storedTheme = localStorage.getItem("theme");
            if (storedTheme) {
                setTheme(storedTheme);
            } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setTheme("dark");
            }
        }
    }["ThemeProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            const root = window.document.documentElement;
            root.classList.remove("light", "dark");
            root.classList.add(theme);
            localStorage.setItem("theme", theme);
        }
    }["ThemeProvider.useEffect"], [
        theme
    ]);
    const value = {
        theme,
        setTheme: (theme)=>{
            setTheme(theme);
        },
        toggleTheme: ()=>{
            setTheme(theme === "light" ? "dark" : "light");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeProviderContext.Provider, {
        ...props,
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ThemeProvider.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(ThemeProvider, "+6C7zX0KFXKdtXxqQH7LMHLz9vo=");
_c = ThemeProvider;
const useTheme = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeProviderContext);
    if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider");
    return context;
};
_s1(useTheme, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Header.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ThemeProvider.tsx [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Header() {
    _s();
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 rounded z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-border-light dark:border-border-dark",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between py-4 px-4 md:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 text-text-light dark:text-text-dark",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "size-8 text-primary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    fill: "none",
                                    viewBox: "0 0 48 48",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        clipRule: "evenodd",
                                        d: "M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z",
                                        fill: "currentColor",
                                        fillRule: "evenodd"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 22,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold tracking-[-0.015em]",
                                children: "Picp"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "hidden md:flex items-center gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "flex items-center gap-2 text-sm font-medium text-muted-light dark:text-muted-dark hover:text-primary transition-colors",
                                        href: "#",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 41,
                                                columnNumber: 15
                                            }, this),
                                            "خانه"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "flex items-center gap-2 text-sm font-medium text-muted-light dark:text-muted-dark hover:text-primary transition-colors",
                                        href: "#features",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 48,
                                                columnNumber: 15
                                            }, this),
                                            "ویژگی‌ها"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "flex items-center gap-2 text-sm font-medium text-muted-light dark:text-muted-dark hover:text-primary transition-colors",
                                        href: "#",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 55,
                                                columnNumber: 15
                                            }, this),
                                            "راهنما"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleTheme,
                                className: "flex items-center justify-center rounded-lg h-9 w-9 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-muted-light dark:text-muted-dark hover:text-primary hover:border-primary/30 transition-all duration-200",
                                "aria-label": theme === "dark" ? "فعال کردن حالت روشن" : "فعال کردن حالت تاریک",
                                children: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                className: "md:hidden flex items-center justify-center rounded-lg h-9 w-9 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-muted-light dark:text-muted-dark hover:text-primary transition-all duration-200",
                                "aria-label": "منو",
                                children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden border-t border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex flex-col p-4 space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "flex items-center gap-3 py-2 px-3 text-sm font-medium text-muted-light dark:text-muted-dark hover:text-primary hover:bg-surface-light dark:hover:bg-surface-dark rounded-lg transition-colors",
                            href: "#",
                            onClick: ()=>setIsMobileMenuOpen(false),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this),
                                "خانه"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "flex items-center gap-3 py-2 px-3 text-sm font-medium text-muted-light dark:text-muted-dark hover:text-primary hover:bg-surface-light dark:hover:bg-surface-dark rounded-lg transition-colors",
                            href: "#features",
                            onClick: ()=>setIsMobileMenuOpen(false),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this),
                                "ویژگی‌ها"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "flex items-center gap-3 py-2 px-3 text-sm font-medium text-muted-light dark:text-muted-dark hover:text-primary hover:bg-surface-light dark:hover:bg-surface-dark rounded-lg transition-colors",
                            href: "#",
                            onClick: ()=>setIsMobileMenuOpen(false),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, this),
                                "راهنما"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 93,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(Header, "HBvBnWkiApatp5phqH5UAkyzQX8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/pdfConverter.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/pdfConverter.ts
__turbopack_context__.s([
    "PDFConverter",
    ()=>PDFConverter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [client] (ecmascript)");
;
class PDFConverter {
    static async convertImagesToPDF(images, settings, onProgress) {
        const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]({
            orientation: settings.orientation,
            unit: "mm",
            format: settings.paperSize.toLowerCase()
        });
        const margin = this.getMargin(settings.margin);
        const pageSize = pdf.internal.pageSize;
        const contentW = pageSize.getWidth() - margin * 2;
        const contentH = pageSize.getHeight() - margin * 2;
        for(let i = 0; i < images.length; i++){
            const img = images[i];
            onProgress({
                current: i + 1,
                total: images.length,
                status: "در حال پردازش ".concat(i + 1, " از ").concat(images.length)
            });
            try {
                // استفاده از File به جای URL
                const base64 = await this.fileToBase64(img.file, settings.quality);
                const dims = await this.getImageDimensionsFromFile(img.file);
                const scaled = this.scaleToFit(dims.width, dims.height, contentW, contentH);
                pdf.addImage(base64, "JPEG", margin + (contentW - scaled.width) / 2, margin + (contentH - scaled.height) / 2, scaled.width, scaled.height);
                if (i < images.length - 1) pdf.addPage();
            } catch (error) {
                console.error("Error processing ".concat(img.name, ":"), error);
                throw new Error("خطا در پردازش تصویر: ".concat(img.name));
            }
        }
        onProgress({
            current: images.length,
            total: images.length,
            status: "در حال تولید PDF..."
        });
        const arrayBuffer = pdf.output("arraybuffer");
        return new Blob([
            arrayBuffer
        ], {
            type: "application/pdf"
        });
    }
    // تبدیل File به Base64
    static fileToBase64(file, quality) {
        return new Promise((resolve, reject)=>{
            const reader = new FileReader();
            reader.onload = ()=>{
                const img = new Image();
                img.onload = ()=>{
                    const canvas = document.createElement("canvas");
                    const ctx = canvas.getContext("2d");
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0);
                    resolve(canvas.toDataURL("image/jpeg", quality === "high" ? 0.95 : 0.8));
                };
                img.onerror = reject;
                img.src = reader.result;
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }
    // گرفتن ابعاد از File
    static getImageDimensionsFromFile(file) {
        return new Promise((resolve, reject)=>{
            const img = new Image();
            const url = URL.createObjectURL(file);
            img.onload = ()=>{
                URL.revokeObjectURL(url);
                resolve({
                    width: img.width,
                    height: img.height
                });
            };
            img.onerror = ()=>{
                URL.revokeObjectURL(url);
                reject();
            };
            img.src = url;
        });
    }
    static scaleToFit(w, h, maxW, maxH) {
        const ratio = Math.min(maxW / w, maxH / h);
        return {
            width: w * ratio,
            height: h * ratio
        };
    }
    static getMargin(m) {
        return m === "none" ? 0 : m === "large" ? 20 : 10;
    }
    static async createZipFromImages(images) {
        const JSZip = (await __turbopack_context__.A("[project]/node_modules/jszip/lib/index.js [client] (ecmascript, async loader)")).default;
        const zip = new JSZip();
        for (const img of images){
            zip.file(img.name, img.file);
        }
        return zip.generateAsync({
            type: "blob"
        });
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ImagePreview.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// // // // // // // //components/ImagePreview.tsx
// // // // // // // "use client";
// // // // // // // import { ImageFile } from "@/types";
// // // // // // // interface ImagePreviewProps {
// // // // // // //   image: ImageFile;
// // // // // // //   index: number;
// // // // // // //   onNameChange: (id: string, name: string) => void;
// // // // // // //   onDelete: (id: string) => void;
// // // // // // //   onMove: (id: string, direction: "up" | "down") => void;
// // // // // // //   canMoveUp: boolean;
// // // // // // //   canMoveDown: boolean;
// // // // // // // }
// // // // // // // export default function ImagePreview({
// // // // // // //   image,
// // // // // // //   index,
// // // // // // //   onNameChange,
// // // // // // //   onDelete,
// // // // // // //   onMove,
// // // // // // //   canMoveUp,
// // // // // // //   canMoveDown,
// // // // // // // }: ImagePreviewProps) {
// // // // // // //   return (
// // // // // // //     <div className="flex flex-col gap-3 pb-3 group relative">
// // // // // // //       <div className="absolute top-2 right-2 z-10 text-sm font-bold bg-black/50 text-white rounded-full h-6 w-6 flex items-center justify-center backdrop-blur-sm">
// // // // // // //         {index + 1}
// // // // // // //       </div>
// // // // // // //       <div
// // // // // // //         className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg relative overflow-hidden ring-1 ring-border-light dark:ring-border-dark"
// // // // // // //         style={{ backgroundImage: `url("${image.url}")` }}
// // // // // // //       >
// // // // // // //         <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
// // // // // // //           <div className="flex flex-col gap-1">
// // // // // // //             <button
// // // // // // //               onClick={() => onMove(image.id, "up")}
// // // // // // //               disabled={!canMoveUp}
// // // // // // //               className="h-7 w-7 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
// // // // // // //               title="جابجایی به بالا"
// // // // // // //             >
// // // // // // //               <span className="material-symbols-outlined text-sm">
// // // // // // //                 arrow_upward
// // // // // // //               </span>
// // // // // // //             </button>
// // // // // // //             <button
// // // // // // //               onClick={() => onMove(image.id, "down")}
// // // // // // //               disabled={!canMoveDown}
// // // // // // //               className="h-7 w-7 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
// // // // // // //               title="جابجایی به پایین"
// // // // // // //             >
// // // // // // //               <span className="material-symbols-outlined text-sm">
// // // // // // //                 arrow_downward
// // // // // // //               </span>
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //           <button
// // // // // // //             onClick={() => onDelete(image.id)}
// // // // // // //             className="h-9 w-9 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-red-500/50 transition-colors"
// // // // // // //             title="حذف"
// // // // // // //           >
// // // // // // //             <span className="material-symbols-outlined text-xl">delete</span>
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //       <input
// // // // // // //         aria-label="نام صفحه"
// // // // // // //         className="w-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-md text-sm px-2 py-1 focus:ring-primary focus:border-primary"
// // // // // // //         placeholder="نام صفحه (اختیاری)"
// // // // // // //         type="text"
// // // // // // //         value={image.name}
// // // // // // //         onChange={(e) => onNameChange(image.id, e.target.value)}
// // // // // // //       />
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }
// // // // // // // components/ImagePreview.tsx
// // // // // // "use client";
// // // // // // import { ImageFile } from "@/types";
// // // // // // import { ArrowUp, ArrowDown, Trash2, GripVertical } from "lucide-react";
// // // // // // import { useSortable } from "@dnd-kit/sortable";
// // // // // // import { CSS } from "@dnd-kit/utilities";
// // // // // // interface ImagePreviewProps {
// // // // // //   image: ImageFile;
// // // // // //   index: number;
// // // // // //   onNameChange: (id: string, name: string) => void;
// // // // // //   onDelete: (id: string) => void;
// // // // // //   onMove: (id: string, direction: "up" | "down") => void;
// // // // // //   canMoveUp: boolean;
// // // // // //   canMoveDown: boolean;
// // // // // // }
// // // // // // export default function ImagePreview({
// // // // // //   image,
// // // // // //   index,
// // // // // //   onNameChange,
// // // // // //   onDelete,
// // // // // //   onMove,
// // // // // //   canMoveUp,
// // // // // //   canMoveDown,
// // // // // // }: ImagePreviewProps) {
// // // // // //   const {
// // // // // //     attributes,
// // // // // //     listeners,
// // // // // //     setNodeRef,
// // // // // //     transform,
// // // // // //     transition,
// // // // // //     isDragging,
// // // // // //   } = useSortable({ id: image.id });
// // // // // //   const style = {
// // // // // //     transform: CSS.Transform.toString(transform),
// // // // // //     transition,
// // // // // //     opacity: isDragging ? 0.5 : 1,
// // // // // //   };
// // // // // //   return (
// // // // // //     <div
// // // // // //       ref={setNodeRef}
// // // // // //       style={style}
// // // // // //       className="flex flex-col gap-3 pb-3 group relative"
// // // // // //     >
// // // // // //       {/* Drag Handle */}
// // // // // //       <div
// // // // // //         {...attributes}
// // // // // //         {...listeners}
// // // // // //         className="absolute top-2 left-2 z-20 h-6 w-6 flex items-center justify-center bg-black/50 text-white rounded cursor-grab active:cursor-grabbing backdrop-blur-sm"
// // // // // //       >
// // // // // //         <GripVertical className="w-4 h-4" />
// // // // // //       </div>
// // // // // //       {/* Image Number */}
// // // // // //       <div className="absolute top-2 right-2 z-10 text-sm font-bold bg-black/50 text-white rounded-full h-6 w-6 flex items-center justify-center backdrop-blur-sm">
// // // // // //         {index + 1}
// // // // // //       </div>
// // // // // //       {/* Image Container */}
// // // // // //       <div
// // // // // //         className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg relative overflow-hidden ring-1 ring-gray-300 dark:ring-gray-600"
// // // // // //         style={{ backgroundImage: `url("${image.url}")` }}
// // // // // //       >
// // // // // //         <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
// // // // // //           <div className="flex flex-col gap-1">
// // // // // //             <button
// // // // // //               onClick={() => onMove(image.id, "up")}
// // // // // //               disabled={!canMoveUp}
// // // // // //               className="h-7 w-7 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
// // // // // //               title="جابجایی به بالا"
// // // // // //             >
// // // // // //               <ArrowUp className="w-4 h-4" />
// // // // // //             </button>
// // // // // //             <button
// // // // // //               onClick={() => onMove(image.id, "down")}
// // // // // //               disabled={!canMoveDown}
// // // // // //               className="h-7 w-7 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
// // // // // //               title="جابجایی به پایین"
// // // // // //             >
// // // // // //               <ArrowDown className="w-4 h-4" />
// // // // // //             </button>
// // // // // //           </div>
// // // // // //           <button
// // // // // //             onClick={() => onDelete(image.id)}
// // // // // //             className="h-9 w-9 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-red-500/50 transition-colors"
// // // // // //             title="حذف"
// // // // // //           >
// // // // // //             <Trash2 className="w-5 h-5" />
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //       {/* Name Input */}
// // // // // //       <input
// // // // // //         aria-label="نام صفحه"
// // // // // //         className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-sm px-2 py-1 focus:ring-blue-500 focus:border-blue-500"
// // // // // //         placeholder="نام صفحه (اختیاری)"
// // // // // //         type="text"
// // // // // //         value={image.name}
// // // // // //         onChange={(e) => onNameChange(image.id, e.target.value)}
// // // // // //       />
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // // components/ImagePreview.tsx
// // // // // "use client";
// // // // // import { ImageFile } from "@/types";
// // // // // import { ArrowUp, ArrowDown, Trash2, GripVertical } from "lucide-react";
// // // // // import { useSortable } from "@dnd-kit/sortable";
// // // // // import { CSS } from "@dnd-kit/utilities";
// // // // // interface ImagePreviewProps {
// // // // //   image: ImageFile;
// // // // //   index: number;
// // // // //   onNameChange: (id: string, name: string) => void;
// // // // //   onDelete: (id: string) => void;
// // // // //   onMove: (id: string, direction: "up" | "down") => void;
// // // // //   canMoveUp: boolean;
// // // // //   canMoveDown: boolean;
// // // // // }
// // // // // export default function ImagePreview({
// // // // //   image,
// // // // //   index,
// // // // //   onNameChange,
// // // // //   onDelete,
// // // // //   onMove,
// // // // //   canMoveUp,
// // // // //   canMoveDown,
// // // // // }: ImagePreviewProps) {
// // // // //   const {
// // // // //     attributes,
// // // // //     listeners,
// // // // //     setNodeRef,
// // // // //     transform,
// // // // //     transition,
// // // // //     isDragging,
// // // // //   } = useSortable({ id: image.id });
// // // // //   const style = {
// // // // //     transform: CSS.Transform.toString(transform),
// // // // //     transition,
// // // // //     opacity: isDragging ? 0.5 : 1,
// // // // //   };
// // // // //   return (
// // // // //     <div
// // // // //       ref={setNodeRef}
// // // // //       style={style}
// // // // //       className="flex flex-col gap-2 sm:gap-3 pb-2 sm:pb-3 group relative"
// // // // //     >
// // // // //       {/* Drag Handle - Now the entire image is draggable */}
// // // // //       <div
// // // // //         {...attributes}
// // // // //         {...listeners}
// // // // //         className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing rounded-lg"
// // // // //       >
// // // // //         {/* Small drag icon in corner for visual indication */}
// // // // //         <div className="absolute top-1 left-1 sm:top-2 sm:left-2 h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center bg-black/50 text-white rounded backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
// // // // //           <GripVertical className="w-3 h-3 sm:w-4 sm:h-4" />
// // // // //         </div>
// // // // //       </div>
// // // // //       {/* Image Number */}
// // // // //       <div className="absolute top-1 right-1 sm:top-2 sm:right-2 z-10 text-xs sm:text-sm font-bold bg-black/50 text-white rounded-full h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center backdrop-blur-sm">
// // // // //         {index + 1}
// // // // //       </div>
// // // // //       {/* Image Container */}
// // // // //       <div
// // // // //         className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg relative overflow-hidden ring-1 ring-gray-300 dark:ring-gray-600"
// // // // //         style={{ backgroundImage: `url("${image.url}")` }}
// // // // //       >
// // // // //         <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1 sm:gap-2">
// // // // //           <div className="flex flex-col gap-1">
// // // // //             <button
// // // // //               onClick={(e) => {
// // // // //                 e.stopPropagation();
// // // // //                 onMove(image.id, "up");
// // // // //               }}
// // // // //               disabled={!canMoveUp}
// // // // //               className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
// // // // //               title="جابجایی به بالا"
// // // // //             >
// // // // //               <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4" />
// // // // //             </button>
// // // // //             <button
// // // // //               onClick={(e) => {
// // // // //                 e.stopPropagation();
// // // // //                 onMove(image.id, "down");
// // // // //               }}
// // // // //               disabled={!canMoveDown}
// // // // //               className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
// // // // //               title="جابجایی به پایین"
// // // // //             >
// // // // //               <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4" />
// // // // //             </button>
// // // // //           </div>
// // // // //           <button
// // // // //             onClick={(e) => {
// // // // //               e.stopPropagation();
// // // // //               onDelete(image.id);
// // // // //             }}
// // // // //             className="h-7 w-7 sm:h-9 sm:w-9 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-red-500/50 transition-colors"
// // // // //             title="حذف"
// // // // //           >
// // // // //             <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //       {/* Name Input */}
// // // // //       <input
// // // // //         aria-label="نام صفحه"
// // // // //         className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-xs sm:text-sm px-2 py-1 focus:ring-blue-500 focus:border-blue-500"
// // // // //         placeholder="نام صفحه (اختیاری)"
// // // // //         type="text"
// // // // //         value={image.name}
// // // // //         onChange={(e) => onNameChange(image.id, e.target.value)}
// // // // //       />
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // // components/ImagePreview.tsx -
// // // // "use client";
// // // // import { ImageFile } from "@/types";
// // // // import { ArrowUp, ArrowDown, Trash2, GripVertical, Hand } from "lucide-react";
// // // // import { useSortable } from "@dnd-kit/sortable";
// // // // import { CSS } from "@dnd-kit/utilities";
// // // // interface ImagePreviewProps {
// // // //   image: ImageFile;
// // // //   index: number;
// // // //   onNameChange: (id: string, name: string) => void;
// // // //   onDelete: (id: string) => void;
// // // //   onMove: (id: string, direction: "up" | "down") => void;
// // // //   canMoveUp: boolean;
// // // //   canMoveDown: boolean;
// // // // }
// // // // export default function ImagePreview({
// // // //   image,
// // // //   index,
// // // //   onNameChange,
// // // //   onDelete,
// // // //   onMove,
// // // //   canMoveUp,
// // // //   canMoveDown,
// // // // }: ImagePreviewProps) {
// // // //   const {
// // // //     attributes,
// // // //     listeners,
// // // //     setNodeRef,
// // // //     transform,
// // // //     transition,
// // // //     isDragging,
// // // //   } = useSortable({ id: image.id });
// // // //   const style = {
// // // //     transform: CSS.Transform.toString(transform),
// // // //     transition,
// // // //     opacity: isDragging ? 0.5 : 1,
// // // //   };
// // // //   return (
// // // //     <div
// // // //       ref={setNodeRef}
// // // //       style={style}
// // // //       className="flex flex-col gap-2 sm:gap-3 pb-2 sm:pb-3 group relative"
// // // //     >
// // // //       {/* Drag Handle - Only the grip icon */}
// // // //       <div
// // // //         {...attributes}
// // // //         {...listeners}
// // // //         className="absolute top-1 left-1 sm:top-2 sm:left-2 z-20 h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center bg-black/50 text-white rounded cursor-grab active:cursor-grabbing backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
// // // //       >
// // // //         {/* <GripVertical className="w-3 h-3 sm:w-4 sm:h-4" /> */}
// // // //         <Hand className="w-3 h-3 sm:w-4 sm:h-4" />
// // // //       </div>
// // // //       {/* Image Number */}
// // // //       <div className="absolute top-1 right-1 sm:top-2 sm:right-2 z-10 text-xs sm:text-sm font-bold bg-black/50 text-white rounded-full h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center backdrop-blur-sm">
// // // //         {index + 1}
// // // //       </div>
// // // //       {/* Image Container */}
// // // //       <div
// // // //         className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg relative overflow-hidden ring-1 ring-gray-300 dark:ring-gray-600"
// // // //         style={{ backgroundImage: `url("${image.url}")` }}
// // // //       >
// // // //         <div
// // // //           className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1 sm:gap-2"
// // // //           onClick={(e) => e.stopPropagation()} // Prevent drag when clicking buttons
// // // //         >
// // // //           <div className="flex flex-col gap-1">
// // // //             <button
// // // //               onClick={() => onMove(image.id, "up")}
// // // //               disabled={!canMoveUp}
// // // //               className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
// // // //               title="جابجایی به بالا"
// // // //             >
// // // //               <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4" />
// // // //             </button>
// // // //             <button
// // // //               onClick={() => onMove(image.id, "down")}
// // // //               disabled={!canMoveDown}
// // // //               className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
// // // //               title="جابجایی به پایین"
// // // //             >
// // // //               <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4" />
// // // //             </button>
// // // //           </div>
// // // //           <button
// // // //             onClick={() => onDelete(image.id)}
// // // //             className="h-7 w-7 sm:h-9 sm:w-9 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-red-500/50 transition-colors"
// // // //             title="حذف"
// // // //           >
// // // //             <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //       {/* Name Input */}
// // // //       <input
// // // //         aria-label="نام صفحه"
// // // //         className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-xs sm:text-sm px-2 py-1 focus:ring-blue-500 focus:border-blue-500"
// // // //         placeholder="نام صفحه (اختیاری)"
// // // //         type="text"
// // // //         value={image.name}
// // // //         onChange={(e) => onNameChange(image.id, e.target.value)}
// // // //       />
// // // //     </div>
// // // //   );
// // // // }
// // // // components/ImagePreview.tsx
// // // "use client";
// // // import { ImageFile } from "@/types";
// // // import { ArrowUp, ArrowDown, Trash2, Hand } from "lucide-react";
// // // import { useSortable } from "@dnd-kit/sortable";
// // // import { CSS } from "@dnd-kit/utilities";
// // // interface ImagePreviewProps {
// // //   image: ImageFile;
// // //   index: number;
// // //   onNameChange: (id: string, name: string) => void;
// // //   onDelete: (id: string) => void;
// // //   onMove: (id: string, direction: "up" | "down") => void;
// // //   canMoveUp: boolean;
// // //   canMoveDown: boolean;
// // // }
// // // export default function ImagePreview({
// // //   image,
// // //   index,
// // //   onNameChange,
// // //   onDelete,
// // //   onMove,
// // //   canMoveUp,
// // //   canMoveDown,
// // // }: ImagePreviewProps) {
// // //   const {
// // //     attributes,
// // //     listeners,
// // //     setNodeRef,
// // //     transform,
// // //     transition,
// // //     isDragging,
// // //   } = useSortable({ id: image.id });
// // //   const style = {
// // //     transform: CSS.Transform.toString(transform),
// // //     transition,
// // //     opacity: isDragging ? 0.5 : 1,
// // //   };
// // //   return (
// // //     <div
// // //       ref={setNodeRef}
// // //       style={style}
// // //       className="flex flex-col gap-2 sm:gap-3 group relative"
// // //     >
// // //       {/* Drag Handle - Entire image area */}
// // //       <div
// // //         {...attributes}
// // //         {...listeners}
// // //         className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing rounded-lg"
// // //       >
// // //         {/* Drag indicator */}
// // //         <div className="absolute top-2 left-2 h-6 w-6 flex items-center justify-center bg-black/50 text-white rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
// // //           <Hand className="w-3 h-3" />
// // //         </div>
// // //       </div>
// // //       {/* Image Number */}
// // //       <div className="absolute top-2 right-2 z-20 text-xs sm:text-sm font-bold bg-black/50 text-white rounded-full h-6 w-6 flex items-center justify-center backdrop-blur-sm">
// // //         {index + 1}
// // //       </div>
// // //       {/* Delete Button - Outside the image */}
// // //       <button
// // //         onClick={() => onDelete(image.id)}
// // //         className="absolute -top-2 -right-2 z-30 h-6 w-6 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
// // //         title="حذف"
// // //       >
// // //         <Trash2 className="w-3 h-3" />
// // //       </button>
// // //       {/* Image Container */}
// // //       <div
// // //         className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg relative overflow-hidden border-2 border-gray-200 dark:border-gray-600"
// // //         style={{ backgroundImage: `url("${image.url}")` }}
// // //       >
// // //         <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
// // //           <div className="flex flex-col gap-1 bg-black/50 backdrop-blur-sm rounded-lg p-2">
// // //             <button
// // //               onClick={(e) => {
// // //                 e.stopPropagation();
// // //                 onMove(image.id, "up");
// // //               }}
// // //               disabled={!canMoveUp}
// // //               className="h-7 w-7 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
// // //               title="جابجایی به بالا"
// // //             >
// // //               <ArrowUp className="w-4 h-4" />
// // //             </button>
// // //             <button
// // //               onClick={(e) => {
// // //                 e.stopPropagation();
// // //                 onMove(image.id, "down");
// // //               }}
// // //               disabled={!canMoveDown}
// // //               className="h-7 w-7 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
// // //               title="جابجایی به پایین"
// // //             >
// // //               <ArrowDown className="w-4 h-4" />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       {/* File name display (read-only) */}
// // //       <div className="text-xs text-gray-600 dark:text-gray-400 truncate px-1 text-center">
// // //         {image.name}
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // // components/ImagePreview.tsx
// // "use client";
// // import { ImageFile } from "@/types";
// // import { ArrowUp, ArrowDown, Trash2, Hand } from "lucide-react";
// // import { useSortable } from "@dnd-kit/sortable";
// // import { CSS } from "@dnd-kit/utilities";
// // interface ImagePreviewProps {
// //   image: ImageFile;
// //   index: number;
// //   onNameChange: (id: string, name: string) => void;
// //   onDelete: (id: string) => void;
// //   onMove: (id: string, direction: "up" | "down") => void;
// //   canMoveUp: boolean;
// //   canMoveDown: boolean;
// // }
// // export default function ImagePreview({
// //   image,
// //   index,
// //   onNameChange,
// //   onDelete,
// //   onMove,
// //   canMoveUp,
// //   canMoveDown,
// // }: ImagePreviewProps) {
// //   const {
// //     attributes,
// //     listeners,
// //     setNodeRef,
// //     transform,
// //     transition,
// //     isDragging,
// //   } = useSortable({ id: image.id });
// //   const style = {
// //     transform: CSS.Transform.toString(transform),
// //     transition,
// //     opacity: isDragging ? 0.5 : 1,
// //   };
// //   return (
// //     <div
// //       ref={setNodeRef}
// //       style={style}
// //       className="flex flex-col gap-2 sm:gap-3 group relative"
// //     >
// //       {/* Drag Handle - Entire image area */}
// //       <div
// //         {...attributes}
// //         {...listeners}
// //         className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing rounded-lg"
// //       >
// //         {/* Drag indicator */}
// //         <div className="absolute top-2 left-2 h-6 w-6 flex items-center justify-center bg-black/50 text-white rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity glass-effect">
// //           <Hand className="w-3 h-3" />
// //         </div>
// //       </div>
// //       {/* Image Number */}
// //       <div className="absolute top-2 right-2 z-20 text-xs sm:text-sm font-bold bg-black/50 text-white rounded-full h-6 w-6 flex items-center justify-center backdrop-blur-sm glass-effect">
// //         {index + 1}
// //       </div>
// //       {/* Delete Button - Outside the image */}
// //       <button
// //         onClick={() => onDelete(image.id)}
// //         className="absolute -top-2 -right-2 z-30 h-6 w-6 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg glass-effect"
// //         title="حذف"
// //       >
// //         <Trash2 className="w-3 h-3" />
// //       </button>
// //       {/* Image Container */}
// //       <div
// //         className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg relative overflow-hidden border-2 border-gray-200/50 dark:border-gray-600/50 glass-effect"
// //         style={{ backgroundImage: `url("${image.url}")` }}
// //       >
// //         <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
// //           <div className="flex flex-col gap-1 bg-black/50 backdrop-blur-sm rounded-lg p-2 glass-effect">
// //             <button
// //               onClick={(e) => {
// //                 e.stopPropagation();
// //                 onMove(image.id, "up");
// //               }}
// //               disabled={!canMoveUp}
// //               className="h-7 w-7 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed glass-effect"
// //               title="جابجایی به بالا"
// //             >
// //               <ArrowUp className="w-4 h-4" />
// //             </button>
// //             <button
// //               onClick={(e) => {
// //                 e.stopPropagation();
// //                 onMove(image.id, "down");
// //               }}
// //               disabled={!canMoveDown}
// //               className="h-7 w-7 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed glass-effect"
// //               title="جابجایی به پایین"
// //             >
// //               <ArrowDown className="w-4 h-4" />
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //       {/* File name display (read-only) */}
// //       <div className="text-xs text-gray-600 dark:text-gray-400 truncate px-1 text-center">
// //         {image.name}
// //       </div>
// //     </div>
// //   );
// // }
// "use client";
// import { ImageFile } from "@/types";
// import { ArrowUp, ArrowDown, Trash2, Hand } from "lucide-react";
// import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
// interface ImagePreviewProps {
//   image: ImageFile;
//   index: number;
//   onNameChange: (id: string, name: string) => void;
//   onDelete: (id: string) => void;
//   onMove: (id: string, direction: "up" | "down") => void;
//   canMoveUp: boolean;
//   canMoveDown: boolean;
// }
// export default function ImagePreview({
//   image,
//   index,
//   onNameChange,
//   onDelete,
//   onMove,
//   canMoveUp,
//   canMoveDown,
// }: ImagePreviewProps) {
//   const {
//     attributes,
//     listeners,
//     setNodeRef,
//     transform,
//     transition,
//     isDragging,
//   } = useSortable({ id: image.id });
//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//     opacity: isDragging ? 0.3 : 1,
//   };
//   return (
//     <div
//       ref={setNodeRef}
//       style={style}
//       className={`flex flex-col   gap-2 group relative select-none ${
//         isDragging ? "scale-[0.97] shadow-2xl" : "scale-100"
//       } transition-all`}
//     >
//       {/* Drag Overlay */}
//       <div
//         {...attributes}
//         {...listeners}
//         className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing rounded-lg"
//       >
//         {/* drag icon */}
//         <div
//           className="absolute top-2 left-2 h-6 w-6 flex items-center justify-center
//         bg-black/40 text-white rounded-full backdrop-blur-md opacity-0
//         group-hover:opacity-100 transition-all"
//         >
//           <Hand className="w-3 h-3" />
//         </div>
//       </div>
//       {/* Image Number */}
//       <div
//         className="absolute top-2 right-2 z-20 text-xs sm:text-sm font-bold
//       bg-black/50 text-white rounded-full h-6 w-6 flex items-center justify-center
//       backdrop-blur-sm"
//       >
//         {index + 1}
//       </div>
//       {/* Delete Icon */}
//       <button
//         onClick={() => onDelete(image.id)}
//         className="absolute -top-2 -right-2 z-30 h-7 w-7 rounded-full bg-red-500 text-white
//         flex items-center justify-center hover:bg-red-600 transition shadow-lg"
//         title="حذف"
//       >
//         <Trash2 className="w-3.5 h-3.5" />
//       </button>
//       {/* Image Box */}
//       <div
//         className="w-full aspect-[4/3] bg-center bg-no-repeat bg-cover rounded-xl relative overflow-hidden
//         border border-white/20 backdrop-blur-md shadow-md"
//         style={{ backgroundImage: `url("${image.url}")` }}
//       >
//         {/* Hover overlay */}
//         <div
//           className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100
//         transition-opacity flex items-center justify-center"
//         >
//           <div className="flex flex-col gap-2 bg-black/30 backdrop-blur-lg rounded-xl p-2">
//             {/* Move Up */}
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 onMove(image.id, "up");
//               }}
//               disabled={!canMoveUp}
//               className="h-8 w-8 rounded-full bg-white/20 text-white flex items-center justify-center
//               hover:bg-white/30 transition disabled:opacity-30 disabled:cursor-not-allowed"
//             >
//               <ArrowUp className="w-4 h-4" />
//             </button>
//             {/* Move Down */}
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 onMove(image.id, "down");
//               }}
//               disabled={!canMoveDown}
//               className="h-8 w-8 rounded-full bg-white/20 text-white flex items-center justify-center
//               hover:bg-white/30 transition disabled:opacity-30 disabled:cursor-not-allowed"
//             >
//               <ArrowDown className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* Image Name */}
//       <div className="text-center text-xs sm:text-sm text-gray-600 dark:text-gray-300 truncate">
//         {image.name}
//       </div>
//     </div>
//   );
// }
//components/ImagePreview.tsx
__turbopack_context__.s([
    "default",
    ()=>ImagePreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [client] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hand$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hand.js [client] (ecmascript) <export default as Hand>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/utilities/dist/utilities.esm.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ImagePreview(param) {
    let { image, index, onNameChange, onDelete, onMove, canMoveUp, canMoveDown } = param;
    _s();
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSortable"])({
        id: image.id,
        transition: {
            duration: 150,
            easing: "cubic-bezier(0.25, 1, 0.5, 1)"
        }
    });
    const style = {
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["CSS"].Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.6 : 1,
        zIndex: isDragging ? 999 : 1
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: setNodeRef,
        style: style,
        className: "flex flex-col  gap-2 group relative select-none ".concat(isDragging ? "scale-105 shadow-2xl ring-2 ring-primary/50" : "scale-100 hover:shadow-lg", " transition-all duration-200 bg-white/5 dark:bg-black/5 rounded-xl p-2 backdrop-blur-sm"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ...attributes,
                ...listeners,
                className: "absolute top-2 left-2 z-20 cursor-grab active:cursor-grabbing",
                onClick: (e)=>e.stopPropagation(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-8 w-8 flex items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md opacity-80  hover:opacity-100 hover:bg-black/60 transition-all touch-manipulation",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hand$3e$__["Hand"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/components/ImagePreview.tsx",
                        lineNumber: 853,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ImagePreview.tsx",
                    lineNumber: 847,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ImagePreview.tsx",
                lineNumber: 841,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-2 right-2 z-20 text-xs sm:text-sm font-bold bg-black/60 text-white rounded-full h-6 w-6 flex items-center justify-center  backdrop-blur-sm",
                children: index + 1
            }, void 0, false, {
                fileName: "[project]/components/ImagePreview.tsx",
                lineNumber: 858,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: (e)=>{
                    e.stopPropagation();
                    onDelete(image.id);
                },
                className: "absolute -top-2 -right-2 z-30 h-7 w-7 rounded-full bg-red-500 text-white  flex items-center justify-center hover:bg-red-600 transition-all shadow-lg active:scale-95",
                title: "حذف",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                    className: "w-3.5 h-3.5"
                }, void 0, false, {
                    fileName: "[project]/components/ImagePreview.tsx",
                    lineNumber: 877,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ImagePreview.tsx",
                lineNumber: 867,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full aspect-[4/3] min-h-[150px] min-w- bg-center bg-no-repeat bg-cover rounded-lg relative overflow-hidden border border-white/20 shadow-md transition-all group-hover:shadow-lg",
                style: {
                    backgroundImage: 'url("'.concat(image.url, '")')
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent  opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity flex items-end justify-center pb-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 bg-black/50 backdrop-blur-lg rounded-xl p-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onMove(image.id, "up");
                                },
                                disabled: !canMoveUp,
                                className: "h-9 w-9 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 active:bg-white/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-95",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/ImagePreview.tsx",
                                    lineNumber: 904,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ImagePreview.tsx",
                                lineNumber: 894,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onMove(image.id, "down");
                                },
                                disabled: !canMoveDown,
                                className: "h-9 w-9 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 active:bg-white/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-95",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/ImagePreview.tsx",
                                    lineNumber: 918,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ImagePreview.tsx",
                                lineNumber: 908,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ImagePreview.tsx",
                        lineNumber: 892,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ImagePreview.tsx",
                    lineNumber: 887,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ImagePreview.tsx",
                lineNumber: 881,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-xs sm:text-sm text-gray-600 dark:text-gray-300 truncate px-1",
                children: image.name
            }, void 0, false, {
                fileName: "[project]/components/ImagePreview.tsx",
                lineNumber: 925,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ImagePreview.tsx",
        lineNumber: 831,
        columnNumber: 5
    }, this);
}
_s(ImagePreview, "iTIyvp0X9kMGpdHRsWsr2+tGbVI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSortable"]
    ];
});
_c = ImagePreview;
var _c;
__turbopack_context__.k.register(_c, "ImagePreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "generateId",
    ()=>generateId,
    "validateFile",
    ()=>validateFile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.m.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$m$2e$js__$5b$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function generateId() {
    return Math.random().toString(36).substr(2, 9);
}
function validateFile(file) {
    const validTypes = [
        "image/jpeg",
        "image/png",
        "image/webp"
    ];
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (!validTypes.includes(file.type)) {
        return {
            isValid: false,
            error: "فرمت فایل پشتیبانی نمی‌شود"
        };
    }
    if (file.size > maxSize) {
        return {
            isValid: false,
            error: "حجم فایل باید کمتر از 10MB باشد"
        };
    }
    return {
        isValid: true
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ImageToPDFConverter.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// // // // // // // app/components/ImageToPDFConverter.tsx
// // // // // // "use client";
// // // // // // import { useState, useRef, useCallback, useEffect } from "react";
// // // // // // import {
// // // // // //   ImageFile,
// // // // // //   PDFSettings,
// // // // // //   ConversionStatus,
// // // // // //   ConversionProgress,
// // // // // //   AppStep,
// // // // // // } from "@/types";
// // // // // // import { PDFConverter } from "@/lib/pdfConverter";
// // // // // // import ImagePreview from "./ImagePreview";
// // // // // // import { generateId, validateFile } from "@/lib/utils";
// // // // // // import {
// // // // // //   Upload,
// // // // // //   CheckCircle,
// // // // // //   Circle,
// // // // // //   Settings,
// // // // // //   FileImage,
// // // // // //   Download,
// // // // // //   Folder,
// // // // // //   RefreshCw,
// // // // // //   ChevronLeft,
// // // // // //   ChevronRight,
// // // // // //   Plus,
// // // // // //   AlertCircle,
// // // // // //   Loader2,
// // // // // //   ArrowUp,
// // // // // //   ArrowDown,
// // // // // //   X,
// // // // // //   Edit2,
// // // // // // } from "lucide-react";
// // // // // // const initialSettings: PDFSettings = {
// // // // // //   orientation: "portrait",
// // // // // //   paperSize: "A4",
// // // // // //   margin: "medium",
// // // // // //   quality: "standard",
// // // // // // };
// // // // // // export default function ImageToPDFConverter() {
// // // // // //   const [currentStep, setCurrentStep] = useState<AppStep>("upload");
// // // // // //   const [images, setImages] = useState<ImageFile[]>([]);
// // // // // //   const [settings, setSettings] = useState<PDFSettings>(initialSettings);
// // // // // //   const [conversionStatus, setConversionStatus] =
// // // // // //     useState<ConversionStatus>("idle");
// // // // // //   const [conversionProgress, setConversionProgress] =
// // // // // //     useState<ConversionProgress>({
// // // // // //       current: 0,
// // // // // //       total: 0,
// // // // // //       status: "",
// // // // // //     });
// // // // // //   const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);
// // // // // //   const fileInputRef = useRef<HTMLInputElement>(null);
// // // // // //   const [isDragging, setIsDragging] = useState(false);
// // // // // //   // Clean up object URLs
// // // // // //   useEffect(() => {
// // // // // //     return () => {
// // // // // //       images.forEach((img) => URL.revokeObjectURL(img.url));
// // // // // //     };
// // // // // //   }, [images]);
// // // // // //   // Handlers
// // // // // //   const handleNameChange = (id: string, name: string) => {
// // // // // //     setImages((prev) =>
// // // // // //       prev.map((img) => (img.id === id ? { ...img, name } : img))
// // // // // //     );
// // // // // //   };
// // // // // //   const handleDelete = (id: string) => {
// // // // // //     setImages((prev) => {
// // // // // //       const filtered = prev.filter((img) => img.id !== id);
// // // // // //       URL.revokeObjectURL(prev.find((i) => i.id === id)?.url || "");
// // // // // //       return filtered;
// // // // // //     });
// // // // // //   };
// // // // // //   const handleMove = (id: string, direction: "up" | "down") => {
// // // // // //     setImages((prev) => {
// // // // // //       const index = prev.findIndex((img) => img.id === id);
// // // // // //       if (index === -1) return prev;
// // // // // //       const newIndex = direction === "up" ? index - 1 : index + 1;
// // // // // //       if (newIndex < 0 || newIndex >= prev.length) return prev;
// // // // // //       const updated = [...prev];
// // // // // //       const [moved] = updated.splice(index, 1);
// // // // // //       updated.splice(newIndex, 0, moved);
// // // // // //       return updated;
// // // // // //     });
// // // // // //   };
// // // // // //   const handleFileSelect = (files: FileList | null) => {
// // // // // //     if (!files) return;
// // // // // //     const newImages: ImageFile[] = [];
// // // // // //     Array.from(files).forEach((file) => {
// // // // // //       const validation = validateFile(file);
// // // // // //       if (validation.isValid) {
// // // // // //         const url = URL.createObjectURL(file);
// // // // // //         newImages.push({ id: generateId(), url, name: file.name, file });
// // // // // //       } else {
// // // // // //         alert(validation.error);
// // // // // //       }
// // // // // //     });
// // // // // //     if (newImages.length > 0) {
// // // // // //       setImages((prev) => [...prev, ...newImages]);
// // // // // //     }
// // // // // //   };
// // // // // //   const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // // // //     handleFileSelect(e.target.files);
// // // // // //     if (fileInputRef.current) fileInputRef.current.value = "";
// // // // // //   };
// // // // // //   const handleDragOver = useCallback((e: React.DragEvent) => {
// // // // // //     e.preventDefault();
// // // // // //     setIsDragging(true);
// // // // // //   }, []);
// // // // // //   const handleDragLeave = useCallback((e: React.DragEvent) => {
// // // // // //     e.preventDefault();
// // // // // //     setIsDragging(false);
// // // // // //   }, []);
// // // // // //   const handleDrop = useCallback((e: React.DragEvent) => {
// // // // // //     e.preventDefault();
// // // // // //     setIsDragging(false);
// // // // // //     handleFileSelect(e.dataTransfer.files);
// // // // // //   }, []);
// // // // // //   const handleAddMoreClick = () => fileInputRef.current?.click();
// // // // // //   const handleSettingChange = (key: keyof PDFSettings, value: string) => {
// // // // // //     setSettings((prev) => ({ ...prev, [key]: value }));
// // // // // //   };
// // // // // //   const handleConvert = useCallback(async () => {
// // // // // //     if (images.length === 0) return;
// // // // // //     setConversionStatus("converting");
// // // // // //     setConversionProgress({
// // // // // //       current: 0,
// // // // // //       total: images.length,
// // // // // //       status: "شروع تبدیل...",
// // // // // //     });
// // // // // //     try {
// // // // // //       const blob = await PDFConverter.convertImagesToPDF(
// // // // // //         images,
// // // // // //         settings,
// // // // // //         setConversionProgress
// // // // // //       );
// // // // // //       setPdfBlob(blob);
// // // // // //       setConversionStatus("completed");
// // // // // //     } catch (error) {
// // // // // //       console.error("Conversion error:", error);
// // // // // //       setConversionStatus("error");
// // // // // //       alert("خطا در تبدیل. لطفاً دوباره تلاش کنید.");
// // // // // //     }
// // // // // //   }, [images, settings]);
// // // // // //   const handleDownloadPDF = useCallback(() => {
// // // // // //     if (!pdfBlob) return;
// // // // // //     const url = URL.createObjectURL(pdfBlob);
// // // // // //     const a = document.createElement("a");
// // // // // //     a.href = url;
// // // // // //     a.download = `images-to-pdf-${Date.now()}.pdf`;
// // // // // //     a.click();
// // // // // //     URL.revokeObjectURL(url);
// // // // // //   }, [pdfBlob]);
// // // // // //   const handleDownloadZIP = useCallback(async () => {
// // // // // //     if (images.length === 0) return;
// // // // // //     setConversionStatus("converting");
// // // // // //     setConversionProgress({
// // // // // //       current: 0,
// // // // // //       total: images.length,
// // // // // //       status: "در حال ساخت ZIP...",
// // // // // //     });
// // // // // //     try {
// // // // // //       const zipBlob = await PDFConverter.createZipFromImages(images);
// // // // // //       const url = URL.createObjectURL(zipBlob);
// // // // // //       const a = document.createElement("a");
// // // // // //       a.href = url;
// // // // // //       a.download = `images-${Date.now()}.zip`;
// // // // // //       a.click();
// // // // // //       URL.revokeObjectURL(url);
// // // // // //       setConversionStatus("idle");
// // // // // //     } catch (error) {
// // // // // //       alert("خطا در ساخت ZIP");
// // // // // //       setConversionStatus("idle");
// // // // // //     }
// // // // // //   }, [images]);
// // // // // //   const goToNextStep = () => {
// // // // // //     if (currentStep === "upload" && images.length > 0)
// // // // // //       setCurrentStep("settings");
// // // // // //     else if (currentStep === "settings") setCurrentStep("convert");
// // // // // //   };
// // // // // //   const goToPreviousStep = () => {
// // // // // //     if (currentStep === "settings") setCurrentStep("upload");
// // // // // //     else if (currentStep === "convert") setCurrentStep("settings");
// // // // // //   };
// // // // // //   const resetConverter = () => {
// // // // // //     images.forEach((img) => URL.revokeObjectURL(img.url));
// // // // // //     setImages([]);
// // // // // //     setSettings(initialSettings);
// // // // // //     setCurrentStep("upload");
// // // // // //     setConversionStatus("idle");
// // // // // //     setPdfBlob(null);
// // // // // //   };
// // // // // //   return (
// // // // // //     <div className="flex flex-col gap-8 w-full  mx-auto p-4">
// // // // // //       {/* Progress Steps */}
// // // // // //       <div className="flex justify-center items-center gap-4 md:gap-8">
// // // // // //         {/* Step 1 */}
// // // // // //         <div className="flex flex-col items-center">
// // // // // //           <div
// // // // // //             className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border-2 ${
// // // // // //               currentStep === "upload"
// // // // // //                 ? "bg-blue-600 border-blue-600 text-white"
// // // // // //                 : images.length > 0
// // // // // //                 ? "bg-green-500 border-green-500 text-white"
// // // // // //                 : "border-gray-300 text-gray-500"
// // // // // //             }`}
// // // // // //           >
// // // // // //             {images.length > 0 ? (
// // // // // //               <CheckCircle className="w-6 h-6" />
// // // // // //             ) : (
// // // // // //               <span className="text-lg font-bold">1</span>
// // // // // //             )}
// // // // // //           </div>
// // // // // //           <span className="mt-2 text-sm font-medium">آپلود</span>
// // // // // //         </div>
// // // // // //         <div
// // // // // //           className={`h-1 flex-1 transition-colors ${
// // // // // //             currentStep === "settings" || currentStep === "convert"
// // // // // //               ? "bg-blue-600"
// // // // // //               : "bg-gray-300"
// // // // // //           }`}
// // // // // //         />
// // // // // //         {/* Step 2 */}
// // // // // //         <div className="flex flex-col items-center">
// // // // // //           <div
// // // // // //             className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border-2 ${
// // // // // //               currentStep === "settings"
// // // // // //                 ? "bg-blue-600 border-blue-600 text-white"
// // // // // //                 : currentStep === "convert"
// // // // // //                 ? "bg-green-500 border-green-500 text-white"
// // // // // //                 : "border-gray-300 text-gray-500"
// // // // // //             }`}
// // // // // //           >
// // // // // //             {currentStep === "convert" ? (
// // // // // //               <CheckCircle className="w-6 h-6" />
// // // // // //             ) : (
// // // // // //               <span className="text-lg font-bold">2</span>
// // // // // //             )}
// // // // // //           </div>
// // // // // //           <span className="mt-2 text-sm font-medium">تنظیمات</span>
// // // // // //         </div>
// // // // // //         <div
// // // // // //           className={`h-1 flex-1 transition-colors ${
// // // // // //             currentStep === "convert" ? "bg-blue-600" : "bg-gray-300"
// // // // // //           }`}
// // // // // //         />
// // // // // //         {/* Step 3 */}
// // // // // //         <div className="flex flex-col items-center">
// // // // // //           <div
// // // // // //             className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border-2 ${
// // // // // //               currentStep === "convert"
// // // // // //                 ? "bg-blue-600 border-blue-600 text-white"
// // // // // //                 : "border-gray-300 text-gray-500"
// // // // // //             }`}
// // // // // //           >
// // // // // //             <span className="text-lg font-bold">3</span>
// // // // // //           </div>
// // // // // //           <span className="mt-2 text-sm font-medium">دانلود</span>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //       {/* Content */}
// // // // // //       <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
// // // // // //         {/* Upload Step */}
// // // // // //         {currentStep === "upload" && (
// // // // // //           <div className="space-y-6">
// // // // // //             <div className="flex items-center justify-between">
// // // // // //               <h2 className="text-2xl font-bold">آپلود و چیدمان عکس‌ها</h2>
// // // // // //               <span className="text-sm text-gray-500">{images.length} عکس</span>
// // // // // //             </div>
// // // // // //             <div
// // // // // //               className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
// // // // // //                 isDragging
// // // // // //                   ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
// // // // // //                   : "border-gray-300 dark:border-gray-600"
// // // // // //               }`}
// // // // // //               onDragOver={handleDragOver}
// // // // // //               onDragLeave={handleDragLeave}
// // // // // //               onDrop={handleDrop}
// // // // // //             >
// // // // // //               <input
// // // // // //                 ref={fileInputRef}
// // // // // //                 type="file"
// // // // // //                 multiple
// // // // // //                 accept=".jpg,.jpeg,.png,.webp"
// // // // // //                 onChange={handleFileInputChange}
// // // // // //                 className="hidden"
// // // // // //               />
// // // // // //               <Upload className="w-12 h-12 mx-auto text-blue-600 mb-4" />
// // // // // //               <p className="text-lg font-semibold">عکس‌ها را اینجا بکشید</p>
// // // // // //               <p className="text-sm text-gray-500 mt-1">یا</p>
// // // // // //               <button
// // // // // //                 onClick={() => fileInputRef.current?.click()}
// // // // // //                 className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
// // // // // //               >
// // // // // //                 انتخاب از دستگاه
// // // // // //               </button>
// // // // // //               <p className="text-xs text-gray-500 mt-3">
// // // // // //                 JPG, PNG, WEBP • حداکثر 10MB
// // // // // //               </p>
// // // // // //             </div>
// // // // // //             {images.length > 0 && (
// // // // // //               <>
// // // // // //                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
// // // // // //                   {images.map((img, i) => (
// // // // // //                     <ImagePreview
// // // // // //                       key={img.id}
// // // // // //                       image={img}
// // // // // //                       index={i}
// // // // // //                       onNameChange={handleNameChange}
// // // // // //                       onDelete={handleDelete}
// // // // // //                       onMove={handleMove}
// // // // // //                       canMoveUp={i > 0}
// // // // // //                       canMoveDown={i < images.length - 1}
// // // // // //                     />
// // // // // //                   ))}
// // // // // //                   <button
// // // // // //                     onClick={handleAddMoreClick}
// // // // // //                     className="aspect-[4/3] border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-2 hover:border-blue-500 hover:bg-blue-50 transition"
// // // // // //                   >
// // // // // //                     <Plus className="w-8 h-8 text-gray-400" />
// // // // // //                     <span className="text-sm font-medium text-gray-500">
// // // // // //                       افزودن
// // // // // //                     </span>
// // // // // //                   </button>
// // // // // //                 </div>
// // // // // //                 <div className="flex justify-end">
// // // // // //                   <button
// // // // // //                     onClick={goToNextStep}
// // // // // //                     className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
// // // // // //                   >
// // // // // //                     ادامه
// // // // // //                     <ChevronLeft className="w-5 h-5" />
// // // // // //                   </button>
// // // // // //                 </div>
// // // // // //               </>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         )}
// // // // // //         {/* Settings Step */}
// // // // // //         {currentStep === "settings" && (
// // // // // //           <div className="space-y-6">
// // // // // //             <div>
// // // // // //               <h2 className="text-2xl font-bold">تنظیمات PDF</h2>
// // // // // //               <p className="text-gray-500">خروجی را سفارشی کنید</p>
// // // // // //             </div>
// // // // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
// // // // // //               <div>
// // // // // //                 <label className="block font-medium mb-2">جهت صفحه</label>
// // // // // //                 <select
// // // // // //                   value={settings.orientation}
// // // // // //                   onChange={(e) =>
// // // // // //                     handleSettingChange("orientation", e.target.value)
// // // // // //                   }
// // // // // //                   className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
// // // // // //                 >
// // // // // //                   <option value="portrait">عمودی</option>
// // // // // //                   <option value="landscape">افقی</option>
// // // // // //                 </select>
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <label className="block font-medium mb-2">اندازه کاغذ</label>
// // // // // //                 <select
// // // // // //                   value={settings.paperSize}
// // // // // //                   onChange={(e) =>
// // // // // //                     handleSettingChange("paperSize", e.target.value)
// // // // // //                   }
// // // // // //                   className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
// // // // // //                 >
// // // // // //                   <option value="A4">A4</option>
// // // // // //                   <option value="Letter">Letter</option>
// // // // // //                   <option value="A5">A5</option>
// // // // // //                 </select>
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <label className="block font-medium mb-2">حاشیه</label>
// // // // // //                 <select
// // // // // //                   value={settings.margin}
// // // // // //                   onChange={(e) =>
// // // // // //                     handleSettingChange("margin", e.target.value)
// // // // // //                   }
// // // // // //                   className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
// // // // // //                 >
// // // // // //                   <option value="none">بدون حاشیه</option>
// // // // // //                   <option value="medium">متوسط</option>
// // // // // //                   <option value="large">زیاد</option>
// // // // // //                 </select>
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <label className="block font-medium mb-2">کیفیت</label>
// // // // // //                 <select
// // // // // //                   value={settings.quality}
// // // // // //                   onChange={(e) =>
// // // // // //                     handleSettingChange("quality", e.target.value)
// // // // // //                   }
// // // // // //                   className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
// // // // // //                 >
// // // // // //                   <option value="standard">استاندارد</option>
// // // // // //                   <option value="high">بالا</option>
// // // // // //                 </select>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //             <div className="flex justify-between">
// // // // // //               <button
// // // // // //                 onClick={goToPreviousStep}
// // // // // //                 className="flex items-center gap-2 px-6 py-3 border rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700"
// // // // // //               >
// // // // // //                 <ChevronRight className="w-5 h-5" />
// // // // // //                 بازگشت
// // // // // //               </button>
// // // // // //               <button
// // // // // //                 onClick={goToNextStep}
// // // // // //                 className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
// // // // // //               >
// // // // // //                 تبدیل
// // // // // //                 <ChevronLeft className="w-5 h-5" />
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         )}
// // // // // //         {/* Convert Step */}
// // // // // //         {currentStep === "convert" && (
// // // // // //           <div className="space-y-6 text-center">
// // // // // //             <div>
// // // // // //               <h2 className="text-2xl font-bold">تبدیل و دانلود</h2>
// // // // // //               <p className="text-gray-500">کلیک کنید تا PDF ساخته شود</p>
// // // // // //             </div>
// // // // // //             <button
// // // // // //               onClick={handleConvert}
// // // // // //               disabled={conversionStatus === "converting"}
// // // // // //               className="flex items-center gap-2 mx-auto px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-bold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
// // // // // //             >
// // // // // //               <FileImage className="w-6 h-6" />
// // // // // //               تبدیل به PDF
// // // // // //             </button>
// // // // // //             {conversionStatus === "converting" && (
// // // // // //               <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl space-y-4">
// // // // // //                 <Loader2 className="w-12 h-12 mx-auto animate-spin text-blue-600" />
// // // // // //                 <div className="w-full bg-gray-200 rounded-full h-3">
// // // // // //                   <div
// // // // // //                     className="bg-blue-600 h-3 rounded-full transition-all duration-300"
// // // // // //                     style={{
// // // // // //                       width: `${
// // // // // //                         (conversionProgress.current /
// // // // // //                           conversionProgress.total) *
// // // // // //                         100
// // // // // //                       }%`,
// // // // // //                     }}
// // // // // //                   />
// // // // // //                 </div>
// // // // // //                 <p className="font-bold">{conversionProgress.status}</p>
// // // // // //                 <p className="text-sm text-gray-500">
// // // // // //                   {conversionProgress.current} از {conversionProgress.total}
// // // // // //                 </p>
// // // // // //               </div>
// // // // // //             )}
// // // // // //             {conversionStatus === "completed" && (
// // // // // //               <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl space-y-4">
// // // // // //                 <CheckCircle className="w-12 h-12 mx-auto text-green-600" />
// // // // // //                 <h3 className="text-xl font-bold">PDF با موفقیت ساخته شد!</h3>
// // // // // //                 <p className="text-gray-600 dark:text-gray-300">
// // // // // //                   {images.length} صفحه
// // // // // //                 </p>
// // // // // //                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
// // // // // //                   <button
// // // // // //                     onClick={handleDownloadPDF}
// // // // // //                     className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
// // // // // //                   >
// // // // // //                     <Download className="w-5 h-5" />
// // // // // //                     دانلود PDF
// // // // // //                   </button>
// // // // // //                   <button
// // // // // //                     onClick={handleDownloadZIP}
// // // // // //                     className="flex items-center gap-2 px-6 py-3 border rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700"
// // // // // //                   >
// // // // // //                     <Folder className="w-5 h-5" />
// // // // // //                     دانلود ZIP
// // // // // //                   </button>
// // // // // //                 </div>
// // // // // //                 <button
// // // // // //                   onClick={resetConverter}
// // // // // //                   className="text-sm text-gray-600 hover:text-gray-800 flex items-center gap-1 mx-auto mt-4"
// // // // // //                 >
// // // // // //                   <RefreshCw className="w-4 h-4" />
// // // // // //                   تبدیل جدید
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             )}
// // // // // //             {conversionStatus === "error" && (
// // // // // //               <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl space-y-4">
// // // // // //                 <AlertCircle className="w-12 h-12 mx-auto text-red-600" />
// // // // // //                 <h3 className="text-xl font-bold text-red-600">خطا در تبدیل</h3>
// // // // // //                 <div className="flex gap-3 justify-center">
// // // // // //                   <button
// // // // // //                     onClick={handleConvert}
// // // // // //                     className="pxhamber-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700"
// // // // // //                   >
// // // // // //                     تلاش مجدد
// // // // // //                   </button>
// // // // // //                   <button
// // // // // //                     onClick={goToPreviousStep}
// // // // // //                     className="px-6 py-3 border rounded-lg font-medium hover:bg-gray-50"
// // // // // //                   >
// // // // // //                     بازگشت
// // // // // //                   </button>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             )}
// // // // // //             <div className="flex justify-start">
// // // // // //               <button
// // // // // //                 onClick={goToPreviousStep}
// // // // // //                 className="flex items-center gap-2 px-6 py-3 border rounded-lg font-medium hover:bg-gray-50"
// // // // // //               >
// // // // // //                 <ChevronRight className="w-5 h-5" />
// // // // // //                 بازگشت
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // // app/components/ImageToPDFConverter.tsx
// // // // // "use client";
// // // // // import { useState, useRef, useCallback, useEffect } from "react";
// // // // // import {
// // // // //   ImageFile,
// // // // //   PDFSettings,
// // // // //   ConversionStatus,
// // // // //   ConversionProgress,
// // // // //   AppStep,
// // // // // } from "@/types";
// // // // // import { PDFConverter } from "@/lib/pdfConverter";
// // // // // import ImagePreview from "./ImagePreview";
// // // // // import { generateId, validateFile } from "@/lib/utils";
// // // // // import {
// // // // //   Upload,
// // // // //   CheckCircle,
// // // // //   Settings,
// // // // //   FileImage,
// // // // //   Download,
// // // // //   Folder,
// // // // //   RefreshCw,
// // // // //   ChevronLeft,
// // // // //   ChevronRight,
// // // // //   Plus,
// // // // //   AlertCircle,
// // // // //   Loader2,
// // // // // } from "lucide-react";
// // // // // import {
// // // // //   DndContext,
// // // // //   closestCenter,
// // // // //   KeyboardSensor,
// // // // //   PointerSensor,
// // // // //   useSensor,
// // // // //   useSensors,
// // // // //   DragEndEvent,
// // // // // } from "@dnd-kit/core";
// // // // // import {
// // // // //   arrayMove,
// // // // //   SortableContext,
// // // // //   sortableKeyboardCoordinates,
// // // // //   rectSortingStrategy,
// // // // // } from "@dnd-kit/sortable";
// // // // // const initialSettings: PDFSettings = {
// // // // //   orientation: "portrait",
// // // // //   paperSize: "A4",
// // // // //   margin: "medium",
// // // // //   quality: "standard",
// // // // // };
// // // // // export default function ImageToPDFConverter() {
// // // // //   const [currentStep, setCurrentStep] = useState<AppStep>("upload");
// // // // //   const [images, setImages] = useState<ImageFile[]>([]);
// // // // //   const [settings, setSettings] = useState<PDFSettings>(initialSettings);
// // // // //   const [conversionStatus, setConversionStatus] =
// // // // //     useState<ConversionStatus>("idle");
// // // // //   const [conversionProgress, setConversionProgress] =
// // // // //     useState<ConversionProgress>({
// // // // //       current: 0,
// // // // //       total: 0,
// // // // //       status: "",
// // // // //     });
// // // // //   const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);
// // // // //   const fileInputRef = useRef<HTMLInputElement>(null);
// // // // //   const [isDragging, setIsDragging] = useState(false);
// // // // //   const sensors = useSensors(
// // // // //     useSensor(PointerSensor),
// // // // //     useSensor(KeyboardSensor, {
// // // // //       coordinateGetter: sortableKeyboardCoordinates,
// // // // //     })
// // // // //   );
// // // // //   // Clean up object URLs
// // // // //   useEffect(() => {
// // // // //     return () => {
// // // // //       images.forEach((img) => URL.revokeObjectURL(img.url));
// // // // //     };
// // // // //   }, [images]);
// // // // //   // Handlers
// // // // //   const handleNameChange = (id: string, name: string) => {
// // // // //     setImages((prev) =>
// // // // //       prev.map((img) => (img.id === id ? { ...img, name } : img))
// // // // //     );
// // // // //   };
// // // // //   const handleDelete = (id: string) => {
// // // // //     setImages((prev) => {
// // // // //       const filtered = prev.filter((img) => img.id !== id);
// // // // //       URL.revokeObjectURL(prev.find((i) => i.id === id)?.url || "");
// // // // //       return filtered;
// // // // //     });
// // // // //   };
// // // // //   const handleMove = (id: string, direction: "up" | "down") => {
// // // // //     setImages((prev) => {
// // // // //       const index = prev.findIndex((img) => img.id === id);
// // // // //       if (index === -1) return prev;
// // // // //       const newIndex = direction === "up" ? index - 1 : index + 1;
// // // // //       if (newIndex < 0 || newIndex >= prev.length) return prev;
// // // // //       const updated = [...prev];
// // // // //       const [moved] = updated.splice(index, 1);
// // // // //       updated.splice(newIndex, 0, moved);
// // // // //       return updated;
// // // // //     });
// // // // //   };
// // // // //   const handleDragEnd = (event: DragEndEvent) => {
// // // // //     const { active, over } = event;
// // // // //     if (over && active.id !== over.id) {
// // // // //       setImages((items) => {
// // // // //         const oldIndex = items.findIndex((item) => item.id === active.id);
// // // // //         const newIndex = items.findIndex((item) => item.id === over.id);
// // // // //         return arrayMove(items, oldIndex, newIndex);
// // // // //       });
// // // // //     }
// // // // //   };
// // // // //   const handleFileSelect = (files: FileList | null) => {
// // // // //     if (!files) return;
// // // // //     const newImages: ImageFile[] = [];
// // // // //     Array.from(files).forEach((file) => {
// // // // //       const validation = validateFile(file);
// // // // //       if (validation.isValid) {
// // // // //         const url = URL.createObjectURL(file);
// // // // //         newImages.push({ id: generateId(), url, name: file.name, file });
// // // // //       } else {
// // // // //         alert(validation.error);
// // // // //       }
// // // // //     });
// // // // //     if (newImages.length > 0) {
// // // // //       setImages((prev) => [...prev, ...newImages]);
// // // // //     }
// // // // //   };
// // // // //   const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // // //     handleFileSelect(e.target.files);
// // // // //     if (fileInputRef.current) fileInputRef.current.value = "";
// // // // //   };
// // // // //   const handleDragOver = useCallback((e: React.DragEvent) => {
// // // // //     e.preventDefault();
// // // // //     setIsDragging(true);
// // // // //   }, []);
// // // // //   const handleDragLeave = useCallback((e: React.DragEvent) => {
// // // // //     e.preventDefault();
// // // // //     setIsDragging(false);
// // // // //   }, []);
// // // // //   const handleDrop = useCallback((e: React.DragEvent) => {
// // // // //     e.preventDefault();
// // // // //     setIsDragging(false);
// // // // //     handleFileSelect(e.dataTransfer.files);
// // // // //   }, []);
// // // // //   const handleAddMoreClick = () => fileInputRef.current?.click();
// // // // //   const handleSettingChange = (key: keyof PDFSettings, value: string) => {
// // // // //     setSettings((prev) => ({ ...prev, [key]: value }));
// // // // //   };
// // // // //   const handleConvert = useCallback(async () => {
// // // // //     if (images.length === 0) return;
// // // // //     setConversionStatus("converting");
// // // // //     setConversionProgress({
// // // // //       current: 0,
// // // // //       total: images.length,
// // // // //       status: "شروع تبدیل...",
// // // // //     });
// // // // //     try {
// // // // //       const blob = await PDFConverter.convertImagesToPDF(
// // // // //         images,
// // // // //         settings,
// // // // //         setConversionProgress
// // // // //       );
// // // // //       setPdfBlob(blob);
// // // // //       setConversionStatus("completed");
// // // // //     } catch (error) {
// // // // //       console.error("Conversion error:", error);
// // // // //       setConversionStatus("error");
// // // // //       alert("خطا در تبدیل. لطفاً دوباره تلاش کنید.");
// // // // //     }
// // // // //   }, [images, settings]);
// // // // //   const handleDownloadPDF = useCallback(() => {
// // // // //     if (!pdfBlob) return;
// // // // //     const url = URL.createObjectURL(pdfBlob);
// // // // //     const a = document.createElement("a");
// // // // //     a.href = url;
// // // // //     a.download = `images-to-pdf-${Date.now()}.pdf`;
// // // // //     a.click();
// // // // //     URL.revokeObjectURL(url);
// // // // //   }, [pdfBlob]);
// // // // //   const handleDownloadZIP = useCallback(async () => {
// // // // //     if (images.length === 0) return;
// // // // //     setConversionStatus("converting");
// // // // //     setConversionProgress({
// // // // //       current: 0,
// // // // //       total: images.length,
// // // // //       status: "در حال ساخت ZIP...",
// // // // //     });
// // // // //     try {
// // // // //       const zipBlob = await PDFConverter.createZipFromImages(images);
// // // // //       const url = URL.createObjectURL(zipBlob);
// // // // //       const a = document.createElement("a");
// // // // //       a.href = url;
// // // // //       a.download = `images-${Date.now()}.zip`;
// // // // //       a.click();
// // // // //       URL.revokeObjectURL(url);
// // // // //       setConversionStatus("idle");
// // // // //     } catch (error) {
// // // // //       alert("خطا در ساخت ZIP");
// // // // //       setConversionStatus("idle");
// // // // //     }
// // // // //   }, [images]);
// // // // //   const goToNextStep = () => {
// // // // //     if (currentStep === "upload" && images.length > 0)
// // // // //       setCurrentStep("settings");
// // // // //     else if (currentStep === "settings") setCurrentStep("convert");
// // // // //   };
// // // // //   const goToPreviousStep = () => {
// // // // //     if (currentStep === "settings") setCurrentStep("upload");
// // // // //     else if (currentStep === "convert") setCurrentStep("settings");
// // // // //   };
// // // // //   const resetConverter = () => {
// // // // //     images.forEach((img) => URL.revokeObjectURL(img.url));
// // // // //     setImages([]);
// // // // //     setSettings(initialSettings);
// // // // //     setCurrentStep("upload");
// // // // //     setConversionStatus("idle");
// // // // //     setPdfBlob(null);
// // // // //   };
// // // // //   return (
// // // // //     <div className="flex flex-col gap-8 w-full mx-auto p-4">
// // // // //       {/* Progress Steps */}
// // // // //       <div className="flex justify-center items-center gap-4 md:gap-8">
// // // // //         {/* Step 1 */}
// // // // //         <div className="flex flex-col items-center">
// // // // //           <div
// // // // //             className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border-2 ${
// // // // //               currentStep === "upload"
// // // // //                 ? "bg-blue-600 border-blue-600 text-white"
// // // // //                 : images.length > 0
// // // // //                 ? "bg-green-500 border-green-500 text-white"
// // // // //                 : "border-gray-300 text-gray-500"
// // // // //             }`}
// // // // //           >
// // // // //             {images.length > 0 ? (
// // // // //               <CheckCircle className="w-6 h-6" />
// // // // //             ) : (
// // // // //               <span className="text-lg font-bold">1</span>
// // // // //             )}
// // // // //           </div>
// // // // //           <span className="mt-2 text-sm font-medium">آپلود</span>
// // // // //         </div>
// // // // //         <div
// // // // //           className={`h-1 flex-1 transition-colors ${
// // // // //             currentStep === "settings" || currentStep === "convert"
// // // // //               ? "bg-blue-600"
// // // // //               : "bg-gray-300"
// // // // //           }`}
// // // // //         />
// // // // //         {/* Step 2 */}
// // // // //         <div className="flex flex-col items-center">
// // // // //           <div
// // // // //             className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border-2 ${
// // // // //               currentStep === "settings"
// // // // //                 ? "bg-blue-600 border-blue-600 text-white"
// // // // //                 : currentStep === "convert"
// // // // //                 ? "bg-green-500 border-green-500 text-white"
// // // // //                 : "border-gray-300 text-gray-500"
// // // // //             }`}
// // // // //           >
// // // // //             {currentStep === "convert" ? (
// // // // //               <CheckCircle className="w-6 h-6" />
// // // // //             ) : (
// // // // //               <span className="text-lg font-bold">2</span>
// // // // //             )}
// // // // //           </div>
// // // // //           <span className="mt-2 text-sm font-medium">تنظیمات</span>
// // // // //         </div>
// // // // //         <div
// // // // //           className={`h-1 flex-1 transition-colors ${
// // // // //             currentStep === "convert" ? "bg-blue-600" : "bg-gray-300"
// // // // //           }`}
// // // // //         />
// // // // //         {/* Step 3 */}
// // // // //         <div className="flex flex-col items-center">
// // // // //           <div
// // // // //             className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border-2 ${
// // // // //               currentStep === "convert"
// // // // //                 ? "bg-blue-600 border-blue-600 text-white"
// // // // //                 : "border-gray-300 text-gray-500"
// // // // //             }`}
// // // // //           >
// // // // //             <span className="text-lg font-bold">3</span>
// // // // //           </div>
// // // // //           <span className="mt-2 text-sm font-medium">دانلود</span>
// // // // //         </div>
// // // // //       </div>
// // // // //       {/* Content */}
// // // // //       <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
// // // // //         {/* Upload Step */}
// // // // //         {currentStep === "upload" && (
// // // // //           <div className="space-y-6">
// // // // //             <div className="flex items-center justify-between">
// // // // //               <h2 className="text-2xl font-bold">آپلود و چیدمان عکس‌ها</h2>
// // // // //               <span className="text-sm text-gray-500">{images.length} عکس</span>
// // // // //             </div>
// // // // //             <div
// // // // //               className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
// // // // //                 isDragging
// // // // //                   ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
// // // // //                   : "border-gray-300 dark:border-gray-600"
// // // // //               }`}
// // // // //               onDragOver={handleDragOver}
// // // // //               onDragLeave={handleDragLeave}
// // // // //               onDrop={handleDrop}
// // // // //             >
// // // // //               <input
// // // // //                 ref={fileInputRef}
// // // // //                 type="file"
// // // // //                 multiple
// // // // //                 accept=".jpg,.jpeg,.png,.webp"
// // // // //                 onChange={handleFileInputChange}
// // // // //                 className="hidden"
// // // // //               />
// // // // //               <Upload className="w-12 h-12 mx-auto text-blue-600 mb-4" />
// // // // //               <p className="text-lg font-semibold">عکس‌ها را اینجا بکشید</p>
// // // // //               <p className="text-sm text-gray-500 mt-1">یا</p>
// // // // //               <button
// // // // //                 onClick={() => fileInputRef.current?.click()}
// // // // //                 className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
// // // // //               >
// // // // //                 انتخاب از دستگاه
// // // // //               </button>
// // // // //               <p className="text-xs text-gray-500 mt-3">
// // // // //                 JPG, PNG, WEBP • حداکثر 10MB
// // // // //               </p>
// // // // //             </div>
// // // // //             {images.length > 0 && (
// // // // //               <>
// // // // //                 <DndContext
// // // // //                   sensors={sensors}
// // // // //                   collisionDetection={closestCenter}
// // // // //                   onDragEnd={handleDragEnd}
// // // // //                 >
// // // // //                   <SortableContext
// // // // //                     items={images.map((img) => img.id)}
// // // // //                     strategy={rectSortingStrategy}
// // // // //                   >
// // // // //                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
// // // // //                       {images.map((img, i) => (
// // // // //                         <ImagePreview
// // // // //                           key={img.id}
// // // // //                           image={img}
// // // // //                           index={i}
// // // // //                           onNameChange={handleNameChange}
// // // // //                           onDelete={handleDelete}
// // // // //                           onMove={handleMove}
// // // // //                           canMoveUp={i > 0}
// // // // //                           canMoveDown={i < images.length - 1}
// // // // //                         />
// // // // //                       ))}
// // // // //                     </div>
// // // // //                   </SortableContext>
// // // // //                 </DndContext>
// // // // //                 <div className="flex justify-between items-center">
// // // // //                   <button
// // // // //                     onClick={handleAddMoreClick}
// // // // //                     className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition"
// // // // //                   >
// // // // //                     <Plus className="w-5 h-5" />
// // // // //                     افزودن عکس بیشتر
// // // // //                   </button>
// // // // //                   <button
// // // // //                     onClick={goToNextStep}
// // // // //                     className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
// // // // //                   >
// // // // //                     ادامه
// // // // //                     <ChevronLeft className="w-5 h-5" />
// // // // //                   </button>
// // // // //                 </div>
// // // // //               </>
// // // // //             )}
// // // // //           </div>
// // // // //         )}
// // // // //         {/* Settings Step */}
// // // // //         {currentStep === "settings" && (
// // // // //           <div className="space-y-6">
// // // // //             <div>
// // // // //               <h2 className="text-2xl font-bold">تنظیمات PDF</h2>
// // // // //               <p className="text-gray-500">خروجی را سفارشی کنید</p>
// // // // //             </div>
// // // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
// // // // //               <div>
// // // // //                 <label className="block font-medium mb-2">جهت صفحه</label>
// // // // //                 <select
// // // // //                   value={settings.orientation}
// // // // //                   onChange={(e) =>
// // // // //                     handleSettingChange("orientation", e.target.value)
// // // // //                   }
// // // // //                   className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
// // // // //                 >
// // // // //                   <option value="portrait">عمودی</option>
// // // // //                   <option value="landscape">افقی</option>
// // // // //                 </select>
// // // // //               </div>
// // // // //               <div>
// // // // //                 <label className="block font-medium mb-2">اندازه کاغذ</label>
// // // // //                 <select
// // // // //                   value={settings.paperSize}
// // // // //                   onChange={(e) =>
// // // // //                     handleSettingChange("paperSize", e.target.value)
// // // // //                   }
// // // // //                   className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
// // // // //                 >
// // // // //                   <option value="A4">A4</option>
// // // // //                   <option value="Letter">Letter</option>
// // // // //                   <option value="A5">A5</option>
// // // // //                 </select>
// // // // //               </div>
// // // // //               <div>
// // // // //                 <label className="block font-medium mb-2">حاشیه</label>
// // // // //                 <select
// // // // //                   value={settings.margin}
// // // // //                   onChange={(e) =>
// // // // //                     handleSettingChange("margin", e.target.value)
// // // // //                   }
// // // // //                   className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
// // // // //                 >
// // // // //                   <option value="none">بدون حاشیه</option>
// // // // //                   <option value="medium">متوسط</option>
// // // // //                   <option value="large">زیاد</option>
// // // // //                 </select>
// // // // //               </div>
// // // // //               <div>
// // // // //                 <label className="block font-medium mb-2">کیفیت</label>
// // // // //                 <select
// // // // //                   value={settings.quality}
// // // // //                   onChange={(e) =>
// // // // //                     handleSettingChange("quality", e.target.value)
// // // // //                   }
// // // // //                   className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
// // // // //                 >
// // // // //                   <option value="standard">استاندارد</option>
// // // // //                   <option value="high">بالا</option>
// // // // //                 </select>
// // // // //               </div>
// // // // //             </div>
// // // // //             <div className="flex justify-between">
// // // // //               <button
// // // // //                 onClick={goToPreviousStep}
// // // // //                 className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition"
// // // // //               >
// // // // //                 <ChevronRight className="w-5 h-5" />
// // // // //                 بازگشت
// // // // //               </button>
// // // // //               <button
// // // // //                 onClick={goToNextStep}
// // // // //                 className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
// // // // //               >
// // // // //                 تبدیل
// // // // //                 <ChevronLeft className="w-5 h-5" />
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         )}
// // // // //         {/* Convert Step */}
// // // // //         {currentStep === "convert" && (
// // // // //           <div className="space-y-6 text-center">
// // // // //             <div>
// // // // //               <h2 className="text-2xl font-bold">تبدیل و دانلود</h2>
// // // // //               <p className="text-gray-500">کلیک کنید تا PDF ساخته شود</p>
// // // // //             </div>
// // // // //             <button
// // // // //               onClick={handleConvert}
// // // // //               disabled={conversionStatus === "converting"}
// // // // //               className="flex items-center gap-2 mx-auto px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-bold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
// // // // //             >
// // // // //               <FileImage className="w-6 h-6" />
// // // // //               تبدیل به PDF
// // // // //             </button>
// // // // //             {conversionStatus === "converting" && (
// // // // //               <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl space-y-4">
// // // // //                 <Loader2 className="w-12 h-12 mx-auto animate-spin text-blue-600" />
// // // // //                 <div className="w-full bg-gray-200 rounded-full h-3">
// // // // //                   <div
// // // // //                     className="bg-blue-600 h-3 rounded-full transition-all duration-300"
// // // // //                     style={{
// // // // //                       width: `${
// // // // //                         (conversionProgress.current /
// // // // //                           conversionProgress.total) *
// // // // //                         100
// // // // //                       }%`,
// // // // //                     }}
// // // // //                   />
// // // // //                 </div>
// // // // //                 <p className="font-bold">{conversionProgress.status}</p>
// // // // //                 <p className="text-sm text-gray-500">
// // // // //                   {conversionProgress.current} از {conversionProgress.total}
// // // // //                 </p>
// // // // //               </div>
// // // // //             )}
// // // // //             {conversionStatus === "completed" && (
// // // // //               <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl space-y-4">
// // // // //                 <CheckCircle className="w-12 h-12 mx-auto text-green-600" />
// // // // //                 <h3 className="text-xl font-bold">PDF با موفقیت ساخته شد!</h3>
// // // // //                 <p className="text-gray-600 dark:text-gray-300">
// // // // //                   {images.length} صفحه
// // // // //                 </p>
// // // // //                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
// // // // //                   <button
// // // // //                     onClick={handleDownloadPDF}
// // // // //                     className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
// // // // //                   >
// // // // //                     <Download className="w-5 h-5" />
// // // // //                     دانلود PDF
// // // // //                   </button>
// // // // //                   <button
// // // // //                     onClick={handleDownloadZIP}
// // // // //                     className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition"
// // // // //                   >
// // // // //                     <Folder className="w-5 h-5" />
// // // // //                     دانلود ZIP
// // // // //                   </button>
// // // // //                 </div>
// // // // //                 <button
// // // // //                   onClick={resetConverter}
// // // // //                   className="text-sm text-gray-600 hover:text-gray-800 flex items-center gap-1 mx-auto mt-4"
// // // // //                 >
// // // // //                   <RefreshCw className="w-4 h-4" />
// // // // //                   تبدیل جدید
// // // // //                 </button>
// // // // //               </div>
// // // // //             )}
// // // // //             {conversionStatus === "error" && (
// // // // //               <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl space-y-4">
// // // // //                 <AlertCircle className="w-12 h-12 mx-auto text-red-600" />
// // // // //                 <h3 className="text-xl font-bold text-red-600">خطا در تبدیل</h3>
// // // // //                 <div className="flex gap-3 justify-center">
// // // // //                   <button
// // // // //                     onClick={handleConvert}
// // // // //                     className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition"
// // // // //                   >
// // // // //                     تلاش مجدد
// // // // //                   </button>
// // // // //                   <button
// // // // //                     onClick={goToPreviousStep}
// // // // //                     className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition"
// // // // //                   >
// // // // //                     بازگشت
// // // // //                   </button>
// // // // //                 </div>
// // // // //               </div>
// // // // //             )}
// // // // //             <div className="flex justify-start">
// // // // //               <button
// // // // //                 onClick={goToPreviousStep}
// // // // //                 className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition"
// // // // //               >
// // // // //                 <ChevronRight className="w-5 h-5" />
// // // // //                 بازگشت
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // // app/components/ImageToPDFConverter.tsx
// // // // "use client";
// // // // import { useState, useRef, useCallback, useEffect } from "react";
// // // // import {
// // // //   ImageFile,
// // // //   PDFSettings,
// // // //   ConversionStatus,
// // // //   ConversionProgress,
// // // //   AppStep,
// // // // } from "@/types";
// // // // import { PDFConverter } from "@/lib/pdfConverter";
// // // // import ImagePreview from "./ImagePreview";
// // // // import { generateId, validateFile } from "@/lib/utils";
// // // // import {
// // // //   Upload,
// // // //   CheckCircle,
// // // //   Settings,
// // // //   FileImage,
// // // //   Download,
// // // //   Folder,
// // // //   RefreshCw,
// // // //   ChevronLeft,
// // // //   ChevronRight,
// // // //   Plus,
// // // //   AlertCircle,
// // // //   Loader2,
// // // // } from "lucide-react";
// // // // import {
// // // //   DndContext,
// // // //   closestCenter,
// // // //   KeyboardSensor,
// // // //   PointerSensor,
// // // //   useSensor,
// // // //   useSensors,
// // // //   DragEndEvent,
// // // // } from "@dnd-kit/core";
// // // // import {
// // // //   arrayMove,
// // // //   SortableContext,
// // // //   sortableKeyboardCoordinates,
// // // //   rectSortingStrategy,
// // // // } from "@dnd-kit/sortable";
// // // // const initialSettings: PDFSettings = {
// // // //   orientation: "portrait",
// // // //   paperSize: "A4",
// // // //   margin: "medium",
// // // //   quality: "standard",
// // // // };
// // // // export default function ImageToPDFConverter() {
// // // //   const [currentStep, setCurrentStep] = useState<AppStep>("upload");
// // // //   const [images, setImages] = useState<ImageFile[]>([]);
// // // //   const [settings, setSettings] = useState<PDFSettings>(initialSettings);
// // // //   const [conversionStatus, setConversionStatus] =
// // // //     useState<ConversionStatus>("idle");
// // // //   const [conversionProgress, setConversionProgress] =
// // // //     useState<ConversionProgress>({
// // // //       current: 0,
// // // //       total: 0,
// // // //       status: "",
// // // //     });
// // // //   const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);
// // // //   const fileInputRef = useRef<HTMLInputElement>(null);
// // // //   const [isDragging, setIsDragging] = useState(false);
// // // //   const sensors = useSensors(
// // // //     useSensor(PointerSensor, {
// // // //       activationConstraint: {
// // // //         distance: 8,
// // // //       },
// // // //     }),
// // // //     useSensor(KeyboardSensor, {
// // // //       coordinateGetter: sortableKeyboardCoordinates,
// // // //     })
// // // //   );
// // // //   // Clean up object URLs
// // // //   useEffect(() => {
// // // //     return () => {
// // // //       images.forEach((img) => URL.revokeObjectURL(img.url));
// // // //     };
// // // //   }, [images]);
// // // //   // Handlers
// // // //   const handleNameChange = (id: string, name: string) => {
// // // //     setImages((prev) =>
// // // //       prev.map((img) => (img.id === id ? { ...img, name } : img))
// // // //     );
// // // //   };
// // // //   const handleDelete = (id: string) => {
// // // //     setImages((prev) => {
// // // //       const filtered = prev.filter((img) => img.id !== id);
// // // //       URL.revokeObjectURL(prev.find((i) => i.id === id)?.url || "");
// // // //       return filtered;
// // // //     });
// // // //   };
// // // //   const handleMove = (id: string, direction: "up" | "down") => {
// // // //     setImages((prev) => {
// // // //       const index = prev.findIndex((img) => img.id === id);
// // // //       if (index === -1) return prev;
// // // //       const newIndex = direction === "up" ? index - 1 : index + 1;
// // // //       if (newIndex < 0 || newIndex >= prev.length) return prev;
// // // //       const updated = [...prev];
// // // //       const [moved] = updated.splice(index, 1);
// // // //       updated.splice(newIndex, 0, moved);
// // // //       return updated;
// // // //     });
// // // //   };
// // // //   const handleDragEnd = (event: DragEndEvent) => {
// // // //     const { active, over } = event;
// // // //     if (over && active.id !== over.id) {
// // // //       setImages((items) => {
// // // //         const oldIndex = items.findIndex((item) => item.id === active.id);
// // // //         const newIndex = items.findIndex((item) => item.id === over.id);
// // // //         return arrayMove(items, oldIndex, newIndex);
// // // //       });
// // // //     }
// // // //   };
// // // //   const handleFileSelect = (files: FileList | null) => {
// // // //     if (!files) return;
// // // //     const newImages: ImageFile[] = [];
// // // //     Array.from(files).forEach((file) => {
// // // //       const validation = validateFile(file);
// // // //       if (validation.isValid) {
// // // //         const url = URL.createObjectURL(file);
// // // //         newImages.push({ id: generateId(), url, name: file.name, file });
// // // //       } else {
// // // //         alert(validation.error);
// // // //       }
// // // //     });
// // // //     if (newImages.length > 0) {
// // // //       setImages((prev) => [...prev, ...newImages]);
// // // //     }
// // // //   };
// // // //   const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // //     handleFileSelect(e.target.files);
// // // //     if (fileInputRef.current) fileInputRef.current.value = "";
// // // //   };
// // // //   const handleDragOver = useCallback((e: React.DragEvent) => {
// // // //     e.preventDefault();
// // // //     setIsDragging(true);
// // // //   }, []);
// // // //   const handleDragLeave = useCallback((e: React.DragEvent) => {
// // // //     e.preventDefault();
// // // //     setIsDragging(false);
// // // //   }, []);
// // // //   const handleDrop = useCallback((e: React.DragEvent) => {
// // // //     e.preventDefault();
// // // //     setIsDragging(false);
// // // //     handleFileSelect(e.dataTransfer.files);
// // // //   }, []);
// // // //   const handleAddMoreClick = () => fileInputRef.current?.click();
// // // //   const handleSettingChange = (key: keyof PDFSettings, value: string) => {
// // // //     setSettings((prev) => ({ ...prev, [key]: value }));
// // // //   };
// // // //   const handleConvert = useCallback(async () => {
// // // //     if (images.length === 0) return;
// // // //     setConversionStatus("converting");
// // // //     setConversionProgress({
// // // //       current: 0,
// // // //       total: images.length,
// // // //       status: "شروع تبدیل...",
// // // //     });
// // // //     try {
// // // //       const blob = await PDFConverter.convertImagesToPDF(
// // // //         images,
// // // //         settings,
// // // //         setConversionProgress
// // // //       );
// // // //       setPdfBlob(blob);
// // // //       setConversionStatus("completed");
// // // //     } catch (error) {
// // // //       console.error("Conversion error:", error);
// // // //       setConversionStatus("error");
// // // //       alert("خطا در تبدیل. لطفاً دوباره تلاش کنید.");
// // // //     }
// // // //   }, [images, settings]);
// // // //   const handleDownloadPDF = useCallback(() => {
// // // //     if (!pdfBlob) return;
// // // //     const url = URL.createObjectURL(pdfBlob);
// // // //     const a = document.createElement("a");
// // // //     a.href = url;
// // // //     a.download = `images-to-pdf-${Date.now()}.pdf`;
// // // //     a.click();
// // // //     URL.revokeObjectURL(url);
// // // //   }, [pdfBlob]);
// // // //   const handleDownloadZIP = useCallback(async () => {
// // // //     if (images.length === 0) return;
// // // //     setConversionStatus("converting");
// // // //     setConversionProgress({
// // // //       current: 0,
// // // //       total: images.length,
// // // //       status: "در حال ساخت ZIP...",
// // // //     });
// // // //     try {
// // // //       const zipBlob = await PDFConverter.createZipFromImages(images);
// // // //       const url = URL.createObjectURL(zipBlob);
// // // //       const a = document.createElement("a");
// // // //       a.href = url;
// // // //       a.download = `images-${Date.now()}.zip`;
// // // //       a.click();
// // // //       URL.revokeObjectURL(url);
// // // //       setConversionStatus("idle");
// // // //     } catch (error) {
// // // //       alert("خطا در ساخت ZIP");
// // // //       setConversionStatus("idle");
// // // //     }
// // // //   }, [images]);
// // // //   const goToNextStep = () => {
// // // //     if (currentStep === "upload" && images.length > 0)
// // // //       setCurrentStep("settings");
// // // //     else if (currentStep === "settings") setCurrentStep("convert");
// // // //   };
// // // //   const goToPreviousStep = () => {
// // // //     if (currentStep === "settings") setCurrentStep("upload");
// // // //     else if (currentStep === "convert") setCurrentStep("settings");
// // // //   };
// // // //   const resetConverter = () => {
// // // //     images.forEach((img) => URL.revokeObjectURL(img.url));
// // // //     setImages([]);
// // // //     setSettings(initialSettings);
// // // //     setCurrentStep("upload");
// // // //     setConversionStatus("idle");
// // // //     setPdfBlob(null);
// // // //   };
// // // //   return (
// // // //     <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6">
// // // //       {/* Progress Steps - Responsive */}
// // // //       <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
// // // //         {/* Step 1 */}
// // // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // // //           <div
// // // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 ${
// // // //               currentStep === "upload"
// // // //                 ? "bg-blue-600 border-blue-600 text-white"
// // // //                 : images.length > 0
// // // //                 ? "bg-green-500 border-green-500 text-white"
// // // //                 : "border-gray-300 text-gray-500"
// // // //             }`}
// // // //           >
// // // //             {images.length > 0 ? (
// // // //               <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
// // // //             ) : (
// // // //               <span className="text-sm sm:text-base md:text-lg font-bold">
// // // //                 1
// // // //               </span>
// // // //             )}
// // // //           </div>
// // // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center">
// // // //             آپلود
// // // //           </span>
// // // //         </div>
// // // //         <div
// // // //           className={`h-1 flex-1 transition-colors ${
// // // //             currentStep === "settings" || currentStep === "convert"
// // // //               ? "bg-blue-600"
// // // //               : "bg-gray-300"
// // // //           }`}
// // // //         />
// // // //         {/* Step 2 */}
// // // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // // //           <div
// // // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 ${
// // // //               currentStep === "settings"
// // // //                 ? "bg-blue-600 border-blue-600 text-white"
// // // //                 : currentStep === "convert"
// // // //                 ? "bg-green-500 border-green-500 text-white"
// // // //                 : "border-gray-300 text-gray-500"
// // // //             }`}
// // // //           >
// // // //             {currentStep === "convert" ? (
// // // //               <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
// // // //             ) : (
// // // //               <span className="text-sm sm:text-base md:text-lg font-bold">
// // // //                 2
// // // //               </span>
// // // //             )}
// // // //           </div>
// // // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center">
// // // //             تنظیمات
// // // //           </span>
// // // //         </div>
// // // //         <div
// // // //           className={`h-1 flex-1 transition-colors ${
// // // //             currentStep === "convert" ? "bg-blue-600" : "bg-gray-300"
// // // //           }`}
// // // //         />
// // // //         {/* Step 3 */}
// // // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // // //           <div
// // // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 ${
// // // //               currentStep === "convert"
// // // //                 ? "bg-blue-600 border-blue-600 text-white"
// // // //                 : "border-gray-300 text-gray-500"
// // // //             }`}
// // // //           >
// // // //             <span className="text-sm sm:text-base md:text-lg font-bold">3</span>
// // // //           </div>
// // // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center">
// // // //             دانلود
// // // //           </span>
// // // //         </div>
// // // //       </div>
// // // //       {/* Content */}
// // // //       <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6">
// // // //         {/* Upload Step */}
// // // //         {currentStep === "upload" && (
// // // //           <div className="space-y-4 sm:space-y-6">
// // // //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// // // //               <h2 className="text-xl sm:text-2xl font-bold">
// // // //                 آپلود و چیدمان عکس‌ها
// // // //               </h2>
// // // //               <span className="text-xs sm:text-sm text-gray-500">
// // // //                 {images.length} عکس
// // // //               </span>
// // // //             </div>
// // // //             <div
// // // //               className={`border-2 border-dashed rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 text-center transition-all ${
// // // //                 isDragging
// // // //                   ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
// // // //                   : "border-gray-300 dark:border-gray-600"
// // // //               }`}
// // // //               onDragOver={handleDragOver}
// // // //               onDragLeave={handleDragLeave}
// // // //               onDrop={handleDrop}
// // // //             >
// // // //               <input
// // // //                 ref={fileInputRef}
// // // //                 type="file"
// // // //                 multiple
// // // //                 accept=".jpg,.jpeg,.png,.webp"
// // // //                 onChange={handleFileInputChange}
// // // //                 className="hidden"
// // // //               />
// // // //               <Upload className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-blue-600 mb-2 sm:mb-3 md:mb-4" />
// // // //               <p className="text-base sm:text-lg md:text-xl font-semibold">
// // // //                 عکس‌ها را اینجا بکشید
// // // //               </p>
// // // //               <p className="text-xs sm:text-sm text-gray-500 mt-1">یا</p>
// // // //               <button
// // // //                 onClick={() => fileInputRef.current?.click()}
// // // //                 className="mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition text-sm sm:text-base"
// // // //               >
// // // //                 انتخاب از دستگاه
// // // //               </button>
// // // //               <p className="text-xs text-gray-500 mt-2 sm:mt-3">
// // // //                 JPG, PNG, WEBP • حداکثر 10MB
// // // //               </p>
// // // //             </div>
// // // //             {images.length > 0 && (
// // // //               <>
// // // //                 <DndContext
// // // //                   sensors={sensors}
// // // //                   collisionDetection={closestCenter}
// // // //                   onDragEnd={handleDragEnd}
// // // //                 >
// // // //                   <SortableContext
// // // //                     items={images.map((img) => img.id)}
// // // //                     strategy={rectSortingStrategy}
// // // //                   >
// // // //                     <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
// // // //                       {images.map((img, i) => (
// // // //                         <ImagePreview
// // // //                           key={img.id}
// // // //                           image={img}
// // // //                           index={i}
// // // //                           onNameChange={handleNameChange}
// // // //                           onDelete={handleDelete}
// // // //                           onMove={handleMove}
// // // //                           canMoveUp={i > 0}
// // // //                           canMoveDown={i < images.length - 1}
// // // //                         />
// // // //                       ))}
// // // //                       {/* Add More Button as last item in grid */}
// // // //                       <button
// // // //                         onClick={handleAddMoreClick}
// // // //                         className="aspect-[4/3] border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-1 sm:gap-2 hover:border-blue-500 hover:bg-blue-50 transition"
// // // //                       >
// // // //                         <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
// // // //                         <span className="text-xs sm:text-sm font-medium text-gray-500">
// // // //                           افزودن عکس
// // // //                         </span>
// // // //                       </button>
// // // //                     </div>
// // // //                   </SortableContext>
// // // //                 </DndContext>
// // // //                 <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-gray-200">
// // // //                   <div className="flex items-center gap-2 text-sm text-gray-600">
// // // //                     <span className="text-xs sm:text-sm">
// // // //                       برای جابجایی: عکس را بکشید یا از دکمه‌ها استفاده کنید
// // // //                     </span>
// // // //                   </div>
// // // //                   <div className="flex gap-2 w-full sm:w-auto">
// // // //                     <button
// // // //                       onClick={handleAddMoreClick}
// // // //                       className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition text-sm"
// // // //                     >
// // // //                       <Plus className="w-4 h-4" />
// // // //                       افزودن بیشتر
// // // //                     </button>
// // // //                     <button
// // // //                       onClick={goToNextStep}
// // // //                       className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition text-sm"
// // // //                     >
// // // //                       ادامه
// // // //                       <ChevronLeft className="w-4 h-4" />
// // // //                     </button>
// // // //                   </div>
// // // //                 </div>
// // // //               </>
// // // //             )}
// // // //           </div>
// // // //         )}
// // // //         {/* Settings Step */}
// // // //         {currentStep === "settings" && (
// // // //           <div className="space-y-4 sm:space-y-6">
// // // //             <div>
// // // //               <h2 className="text-xl sm:text-2xl font-bold">تنظیمات PDF</h2>
// // // //               <p className="text-sm sm:text-base text-gray-500">
// // // //                 خروجی را سفارشی کنید
// // // //               </p>
// // // //             </div>
// // // //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
// // // //               <div>
// // // //                 <label className="block font-medium mb-2 text-sm sm:text-base">
// // // //                   جهت صفحه
// // // //                 </label>
// // // //                 <select
// // // //                   value={settings.orientation}
// // // //                   onChange={(e) =>
// // // //                     handleSettingChange("orientation", e.target.value)
// // // //                   }
// // // //                   className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm sm:text-base"
// // // //                 >
// // // //                   <option value="portrait">عمودی</option>
// // // //                   <option value="landscape">افقی</option>
// // // //                 </select>
// // // //               </div>
// // // //               <div>
// // // //                 <label className="block font-medium mb-2 text-sm sm:text-base">
// // // //                   اندازه کاغذ
// // // //                 </label>
// // // //                 <select
// // // //                   value={settings.paperSize}
// // // //                   onChange={(e) =>
// // // //                     handleSettingChange("paperSize", e.target.value)
// // // //                   }
// // // //                   className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm sm:text-base"
// // // //                 >
// // // //                   <option value="A4">A4</option>
// // // //                   <option value="Letter">Letter</option>
// // // //                   <option value="A5">A5</option>
// // // //                 </select>
// // // //               </div>
// // // //               <div>
// // // //                 <label className="block font-medium mb-2 text-sm sm:text-base">
// // // //                   حاشیه
// // // //                 </label>
// // // //                 <select
// // // //                   value={settings.margin}
// // // //                   onChange={(e) =>
// // // //                     handleSettingChange("margin", e.target.value)
// // // //                   }
// // // //                   className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm sm:text-base"
// // // //                 >
// // // //                   <option value="none">بدون حاشیه</option>
// // // //                   <option value="medium">متوسط</option>
// // // //                   <option value="large">زیاد</option>
// // // //                 </select>
// // // //               </div>
// // // //               <div>
// // // //                 <label className="block font-medium mb-2 text-sm sm:text-base">
// // // //                   کیفیت
// // // //                 </label>
// // // //                 <select
// // // //                   value={settings.quality}
// // // //                   onChange={(e) =>
// // // //                     handleSettingChange("quality", e.target.value)
// // // //                   }
// // // //                   className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm sm:text-base"
// // // //                 >
// // // //                   <option value="standard">استاندارد</option>
// // // //                   <option value="high">بالا</option>
// // // //                 </select>
// // // //               </div>
// // // //             </div>
// // // //             <div className="flex flex-col sm:flex-row justify-between gap-3">
// // // //               <button
// // // //                 onClick={goToPreviousStep}
// // // //                 className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition order-2 sm:order-1"
// // // //               >
// // // //                 <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
// // // //                 بازگشت
// // // //               </button>
// // // //               <button
// // // //                 onClick={goToNextStep}
// // // //                 className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition order-1 sm:order-2"
// // // //               >
// // // //                 تبدیل
// // // //                 <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //         {/* Convert Step */}
// // // //         {currentStep === "convert" && (
// // // //           <div className="space-y-4 sm:space-y-6 text-center">
// // // //             <div>
// // // //               <h2 className="text-xl sm:text-2xl font-bold">تبدیل و دانلود</h2>
// // // //               <p className="text-sm sm:text-base text-gray-500">
// // // //                 کلیک کنید تا PDF ساخته شود
// // // //               </p>
// // // //             </div>
// // // //             <button
// // // //               onClick={handleConvert}
// // // //               disabled={conversionStatus === "converting"}
// // // //               className="flex items-center justify-center gap-2 mx-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg text-base sm:text-lg font-bold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition w-full sm:w-auto"
// // // //             >
// // // //               <FileImage className="w-5 h-5 sm:w-6 sm:h-6" />
// // // //               تبدیل به PDF
// // // //             </button>
// // // //             {conversionStatus === "converting" && (
// // // //               <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-700 rounded-xl space-y-3 sm:space-y-4">
// // // //                 <Loader2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto animate-spin text-blue-600" />
// // // //                 <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
// // // //                   <div
// // // //                     className="bg-blue-600 h-2 sm:h-3 rounded-full transition-all duration-300"
// // // //                     style={{
// // // //                       width: `${
// // // //                         (conversionProgress.current /
// // // //                           conversionProgress.total) *
// // // //                         100
// // // //                       }%`,
// // // //                     }}
// // // //                   />
// // // //                 </div>
// // // //                 <p className="font-bold text-sm sm:text-base">
// // // //                   {conversionProgress.status}
// // // //                 </p>
// // // //                 <p className="text-xs sm:text-sm text-gray-500">
// // // //                   {conversionProgress.current} از {conversionProgress.total}
// // // //                 </p>
// // // //               </div>
// // // //             )}
// // // //             {conversionStatus === "completed" && (
// // // //               <div className="p-4 sm:p-6 bg-green-50 dark:bg-green-900/20 rounded-xl space-y-3 sm:space-y-4">
// // // //                 <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-green-600" />
// // // //                 <h3 className="text-lg sm:text-xl font-bold">
// // // //                   PDF با موفقیت ساخته شد!
// // // //                 </h3>
// // // //                 <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
// // // //                   {images.length} صفحه
// // // //                 </p>
// // // //                 <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
// // // //                   <button
// // // //                     onClick={handleDownloadPDF}
// // // //                     className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition flex-1 sm:flex-none"
// // // //                   >
// // // //                     <Download className="w-4 h-4 sm:w-5 sm:h-5" />
// // // //                     دانلود PDF
// // // //                   </button>
// // // //                   <button
// // // //                     onClick={handleDownloadZIP}
// // // //                     className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition flex-1 sm:flex-none"
// // // //                   >
// // // //                     <Folder className="w-4 h-4 sm:w-5 sm:h-5" />
// // // //                     دانلود ZIP
// // // //                   </button>
// // // //                 </div>
// // // //                 <button
// // // //                   onClick={resetConverter}
// // // //                   className="text-xs sm:text-sm text-gray-600 hover:text-gray-800 flex items-center gap-1 mx-auto mt-2 sm:mt-4"
// // // //                 >
// // // //                   <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4" />
// // // //                   تبدیل جدید
// // // //                 </button>
// // // //               </div>
// // // //             )}
// // // //             {conversionStatus === "error" && (
// // // //               <div className="p-4 sm:p-6 bg-red-50 dark:bg-red-900/20 rounded-xl space-y-3 sm:space-y-4">
// // // //                 <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-red-600" />
// // // //                 <h3 className="text-lg sm:text-xl font-bold text-red-600">
// // // //                   خطا در تبدیل
// // // //                 </h3>
// // // //                 <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
// // // //                   <button
// // // //                     onClick={handleConvert}
// // // //                     className="px-4 sm:px-6 py-2 sm:py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition flex-1 sm:flex-none"
// // // //                   >
// // // //                     تلاش مجدد
// // // //                   </button>
// // // //                   <button
// // // //                     onClick={goToPreviousStep}
// // // //                     className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition flex-1 sm:flex-none"
// // // //                   >
// // // //                     بازگشت
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             )}
// // // //             <div className="flex justify-start">
// // // //               <button
// // // //                 onClick={goToPreviousStep}
// // // //                 className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition"
// // // //               >
// // // //                 <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
// // // //                 بازگشت
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
// // // //components/ImageToPDFConverter.tsx
// // // "use client";
// // // import { useState, useRef, useCallback, useEffect } from "react";
// // // import {
// // //   ImageFile,
// // //   PDFSettings,
// // //   ConversionStatus,
// // //   ConversionProgress,
// // //   AppStep,
// // // } from "@/types";
// // // import { PDFConverter } from "@/lib/pdfConverter";
// // // import ImagePreview from "./ImagePreview";
// // // import { generateId, validateFile } from "@/lib/utils";
// // // import {
// // //   Upload,
// // //   CheckCircle,
// // //   Settings,
// // //   FileImage,
// // //   Download,
// // //   Folder,
// // //   RefreshCw,
// // //   ChevronLeft,
// // //   ChevronRight,
// // //   Plus,
// // //   AlertCircle,
// // //   Loader2,
// // // } from "lucide-react";
// // // import {
// // //   DndContext,
// // //   closestCenter,
// // //   KeyboardSensor,
// // //   PointerSensor,
// // //   useSensor,
// // //   useSensors,
// // //   DragEndEvent,
// // // } from "@dnd-kit/core";
// // // import {
// // //   arrayMove,
// // //   SortableContext,
// // //   sortableKeyboardCoordinates,
// // //   rectSortingStrategy,
// // // } from "@dnd-kit/sortable";
// // // const initialSettings: PDFSettings = {
// // //   orientation: "portrait",
// // //   paperSize: "A4",
// // //   margin: "medium",
// // //   quality: "standard",
// // // };
// // // export default function ImageToPDFConverter() {
// // //   const [currentStep, setCurrentStep] = useState<AppStep>("upload");
// // //   const [images, setImages] = useState<ImageFile[]>([]);
// // //   const [settings, setSettings] = useState<PDFSettings>(initialSettings);
// // //   const [conversionStatus, setConversionStatus] =
// // //     useState<ConversionStatus>("idle");
// // //   const [conversionProgress, setConversionProgress] =
// // //     useState<ConversionProgress>({
// // //       current: 0,
// // //       total: 0,
// // //       status: "",
// // //     });
// // //   const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);
// // //   const fileInputRef = useRef<HTMLInputElement>(null);
// // //   const [isDragging, setIsDragging] = useState(false);
// // //   const sensors = useSensors(
// // //     useSensor(PointerSensor, {
// // //       activationConstraint: {
// // //         distance: 8,
// // //       },
// // //     }),
// // //     useSensor(KeyboardSensor, {
// // //       coordinateGetter: sortableKeyboardCoordinates,
// // //     })
// // //   );
// // //   // Clean up object URLs
// // //   useEffect(() => {
// // //     return () => {
// // //       images.forEach((img) => URL.revokeObjectURL(img.url));
// // //     };
// // //   }, [images]);
// // //   // Handlers
// // //   const handleNameChange = (id: string, name: string) => {
// // //     setImages((prev) =>
// // //       prev.map((img) => (img.id === id ? { ...img, name } : img))
// // //     );
// // //   };
// // //   const handleDelete = (id: string) => {
// // //     setImages((prev) => {
// // //       const filtered = prev.filter((img) => img.id !== id);
// // //       URL.revokeObjectURL(prev.find((i) => i.id === id)?.url || "");
// // //       return filtered;
// // //     });
// // //   };
// // //   const handleMove = (id: string, direction: "up" | "down") => {
// // //     setImages((prev) => {
// // //       const index = prev.findIndex((img) => img.id === id);
// // //       if (index === -1) return prev;
// // //       const newIndex = direction === "up" ? index - 1 : index + 1;
// // //       if (newIndex < 0 || newIndex >= prev.length) return prev;
// // //       const updated = [...prev];
// // //       const [moved] = updated.splice(index, 1);
// // //       updated.splice(newIndex, 0, moved);
// // //       return updated;
// // //     });
// // //   };
// // //   const handleDragEnd = (event: DragEndEvent) => {
// // //     const { active, over } = event;
// // //     if (over && active.id !== over.id) {
// // //       setImages((items) => {
// // //         const oldIndex = items.findIndex((item) => item.id === active.id);
// // //         const newIndex = items.findIndex((item) => item.id === over.id);
// // //         return arrayMove(items, oldIndex, newIndex);
// // //       });
// // //     }
// // //   };
// // //   const handleFileSelect = (files: FileList | null) => {
// // //     if (!files) return;
// // //     const newImages: ImageFile[] = [];
// // //     Array.from(files).forEach((file) => {
// // //       const validation = validateFile(file);
// // //       if (validation.isValid) {
// // //         const url = URL.createObjectURL(file);
// // //         newImages.push({ id: generateId(), url, name: file.name, file });
// // //       } else {
// // //         alert(validation.error);
// // //       }
// // //     });
// // //     if (newImages.length > 0) {
// // //       setImages((prev) => [...prev, ...newImages]);
// // //     }
// // //   };
// // //   const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // //     handleFileSelect(e.target.files);
// // //     if (fileInputRef.current) fileInputRef.current.value = "";
// // //   };
// // //   const handleDragOver = useCallback((e: React.DragEvent) => {
// // //     e.preventDefault();
// // //     setIsDragging(true);
// // //   }, []);
// // //   const handleDragLeave = useCallback((e: React.DragEvent) => {
// // //     e.preventDefault();
// // //     setIsDragging(false);
// // //   }, []);
// // //   const handleDrop = useCallback((e: React.DragEvent) => {
// // //     e.preventDefault();
// // //     setIsDragging(false);
// // //     handleFileSelect(e.dataTransfer.files);
// // //   }, []);
// // //   const handleAddMoreClick = () => fileInputRef.current?.click();
// // //   const handleSettingChange = (key: keyof PDFSettings, value: string) => {
// // //     setSettings((prev) => ({ ...prev, [key]: value }));
// // //   };
// // //   const handleConvert = useCallback(async () => {
// // //     if (images.length === 0) return;
// // //     setConversionStatus("converting");
// // //     setConversionProgress({
// // //       current: 0,
// // //       total: images.length,
// // //       status: "شروع تبدیل...",
// // //     });
// // //     try {
// // //       const blob = await PDFConverter.convertImagesToPDF(
// // //         images,
// // //         settings,
// // //         setConversionProgress
// // //       );
// // //       setPdfBlob(blob);
// // //       setConversionStatus("completed");
// // //     } catch (error) {
// // //       console.error("Conversion error:", error);
// // //       setConversionStatus("error");
// // //       alert("خطا در تبدیل. لطفاً دوباره تلاش کنید.");
// // //     }
// // //   }, [images, settings]);
// // //   const handleDownloadPDF = useCallback(() => {
// // //     if (!pdfBlob) return;
// // //     const url = URL.createObjectURL(pdfBlob);
// // //     const a = document.createElement("a");
// // //     a.href = url;
// // //     a.download = `images-to-pdf-${Date.now()}.pdf`;
// // //     a.click();
// // //     URL.revokeObjectURL(url);
// // //   }, [pdfBlob]);
// // //   const handleDownloadZIP = useCallback(async () => {
// // //     if (images.length === 0) return;
// // //     setConversionStatus("converting");
// // //     setConversionProgress({
// // //       current: 0,
// // //       total: images.length,
// // //       status: "در حال ساخت ZIP...",
// // //     });
// // //     try {
// // //       const zipBlob = await PDFConverter.createZipFromImages(images);
// // //       const url = URL.createObjectURL(zipBlob);
// // //       const a = document.createElement("a");
// // //       a.href = url;
// // //       a.download = `images-${Date.now()}.zip`;
// // //       a.click();
// // //       URL.revokeObjectURL(url);
// // //       setConversionStatus("idle");
// // //     } catch (error) {
// // //       alert("خطا در ساخت ZIP");
// // //       setConversionStatus("idle");
// // //     }
// // //   }, [images]);
// // //   const goToNextStep = () => {
// // //     if (currentStep === "upload" && images.length > 0)
// // //       setCurrentStep("settings");
// // //     else if (currentStep === "settings") setCurrentStep("convert");
// // //   };
// // //   const goToPreviousStep = () => {
// // //     if (currentStep === "settings") setCurrentStep("upload");
// // //     else if (currentStep === "convert") setCurrentStep("settings");
// // //   };
// // //   const resetConverter = () => {
// // //     images.forEach((img) => URL.revokeObjectURL(img.url));
// // //     setImages([]);
// // //     setSettings(initialSettings);
// // //     setCurrentStep("upload");
// // //     setConversionStatus("idle");
// // //     setPdfBlob(null);
// // //   };
// // //   return (
// // //     <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6">
// // //       {/* Progress Steps - Responsive */}
// // //       <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
// // //         {/* Step 1 */}
// // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // //           <div
// // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm ${
// // //               currentStep === "upload"
// // //                 ? "bg-primary border-primary text-white"
// // //                 : images.length > 0
// // //                 ? "bg-green-500 border-green-500 text-white"
// // //                 : "border-border-light dark:border-border-dark text-muted-light dark:text-muted-dark"
// // //             }`}
// // //           >
// // //             {images.length > 0 ? (
// // //               <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
// // //             ) : (
// // //               <span className="text-sm sm:text-base md:text-lg font-bold">
// // //                 1
// // //               </span>
// // //             )}
// // //           </div>
// // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-text-light dark:text-text-dark">
// // //             آپلود
// // //           </span>
// // //         </div>
// // //         <div
// // //           className={`h-1 flex-1 transition-colors ${
// // //             currentStep === "settings" || currentStep === "convert"
// // //               ? "bg-primary"
// // //               : "bg-border-light dark:bg-border-dark"
// // //           }`}
// // //         />
// // //         {/* Step 2 */}
// // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // //           <div
// // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm ${
// // //               currentStep === "settings"
// // //                 ? "bg-primary border-primary text-white"
// // //                 : currentStep === "convert"
// // //                 ? "bg-green-500 border-green-500 text-white"
// // //                 : "border-border-light dark:border-border-dark text-muted-light dark:text-muted-dark"
// // //             }`}
// // //           >
// // //             {currentStep === "convert" ? (
// // //               <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
// // //             ) : (
// // //               <span className="text-sm sm:text-base md:text-lg font-bold">
// // //                 2
// // //               </span>
// // //             )}
// // //           </div>
// // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-text-light dark:text-text-dark">
// // //             تنظیمات
// // //           </span>
// // //         </div>
// // //         <div
// // //           className={`h-1 flex-1 transition-colors ${
// // //             currentStep === "convert"
// // //               ? "bg-primary"
// // //               : "bg-border-light dark:bg-border-dark"
// // //           }`}
// // //         />
// // //         {/* Step 3 */}
// // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // //           <div
// // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm ${
// // //               currentStep === "convert"
// // //                 ? "bg-primary border-primary text-white"
// // //                 : "border-border-light dark:border-border-dark text-muted-light dark:text-muted-dark"
// // //             }`}
// // //           >
// // //             <span className="text-sm sm:text-base md:text-lg font-bold">3</span>
// // //           </div>
// // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-text-light dark:text-text-dark">
// // //             دانلود
// // //           </span>
// // //         </div>
// // //       </div>
// // //       {/* Content */}
// // //       <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg p-4 sm:p-6 backdrop-blur-sm border border-border-light dark:border-border-dark">
// // //         {/* Upload Step */}
// // //         {currentStep === "upload" && (
// // //           <div className="space-y-4 sm:space-y-6">
// // //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// // //               <h2 className="text-xl sm:text-2xl font-bold text-text-light dark:text-text-dark">
// // //                 آپلود و چیدمان عکس‌ها
// // //               </h2>
// // //               <span className="text-xs sm:text-sm text-muted-light dark:text-muted-dark">
// // //                 {images.length} عکس
// // //               </span>
// // //             </div>
// // //             <div
// // //               className={`border-2 border-dashed rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 text-center transition-all backdrop-blur-sm ${
// // //                 isDragging
// // //                   ? "border-primary bg-background-light dark:bg-background-dark"
// // //                   : "border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark"
// // //               }`}
// // //               onDragOver={handleDragOver}
// // //               onDragLeave={handleDragLeave}
// // //               onDrop={handleDrop}
// // //             >
// // //               <input
// // //                 ref={fileInputRef}
// // //                 type="file"
// // //                 multiple
// // //                 accept=".jpg,.jpeg,.png,.webp"
// // //                 onChange={handleFileInputChange}
// // //                 className="hidden"
// // //               />
// // //               <Upload className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-primary mb-2 sm:mb-3 md:mb-4" />
// // //               <p className="text-base sm:text-lg md:text-xl font-semibold text-text-light dark:text-text-dark">
// // //                 عکس‌ها را اینجا بکشید
// // //               </p>
// // //               <p className="text-xs sm:text-sm text-muted-light dark:text-muted-dark mt-1">
// // //                 یا
// // //               </p>
// // //               <button
// // //                 onClick={() => fileInputRef.current?.click()}
// // //                 className="mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition text-sm sm:text-base backdrop-blur-sm"
// // //               >
// // //                 انتخاب از دستگاه
// // //               </button>
// // //               <p className="text-xs text-muted-light dark:text-muted-dark mt-2 sm:mt-3">
// // //                 JPG, PNG, WEBP • حداکثر 10MB
// // //               </p>
// // //             </div>
// // //             {images.length > 0 && (
// // //               <>
// // //                 <DndContext
// // //                   sensors={sensors}
// // //                   collisionDetection={closestCenter}
// // //                   onDragEnd={handleDragEnd}
// // //                 >
// // //                   <SortableContext
// // //                     items={images.map((img) => img.id)}
// // //                     strategy={rectSortingStrategy}
// // //                   >
// // //                     <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
// // //                       {images.map((img, i) => (
// // //                         <ImagePreview
// // //                           key={img.id}
// // //                           image={img}
// // //                           index={i}
// // //                           onNameChange={handleNameChange}
// // //                           onDelete={handleDelete}
// // //                           onMove={handleMove}
// // //                           canMoveUp={i > 0}
// // //                           canMoveDown={i < images.length - 1}
// // //                         />
// // //                       ))}
// // //                       {/* Add More Button as last item in grid */}
// // //                       <button
// // //                         onClick={handleAddMoreClick}
// // //                         className="aspect-[4/3] border-2 border-dashed border-border-light dark:border-border-dark rounded-lg flex flex-col items-center justify-center gap-1 sm:gap-2 hover:border-primary hover:bg-background-light dark:hover:bg-background-dark transition backdrop-blur-sm"
// // //                       >
// // //                         <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-muted-light dark:text-muted-dark" />
// // //                         <span className="text-xs sm:text-sm font-medium text-muted-light dark:text-muted-dark">
// // //                           افزودن عکس
// // //                         </span>
// // //                       </button>
// // //                     </div>
// // //                   </SortableContext>
// // //                 </DndContext>
// // //                 <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-border-light dark:border-border-dark">
// // //                   <div className="flex items-center gap-2 text-sm text-muted-light dark:text-muted-dark">
// // //                     <span className="text-xs sm:text-sm">
// // //                       برای جابجایی: عکس را بکشید یا از دکمه‌ها استفاده کنید
// // //                     </span>
// // //                   </div>
// // //                   <div className="flex gap-2 w-full sm:w-auto">
// // //                     <button
// // //                       onClick={handleAddMoreClick}
// // //                       className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-border-light dark:border-border-dark rounded-lg font-medium hover:bg-background-light dark:hover:bg-background-dark transition text-sm backdrop-blur-sm"
// // //                     >
// // //                       <Plus className="w-4 h-4" />
// // //                       افزودن بیشتر
// // //                     </button>
// // //                     <button
// // //                       onClick={goToNextStep}
// // //                       className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition text-sm backdrop-blur-sm"
// // //                     >
// // //                       ادامه
// // //                       <ChevronLeft className="w-4 h-4" />
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               </>
// // //             )}
// // //           </div>
// // //         )}
// // //         {/* Settings Step */}
// // //         {currentStep === "settings" && (
// // //           <div className="space-y-4 sm:space-y-6">
// // //             <div>
// // //               <h2 className="text-xl sm:text-2xl font-bold text-text-light dark:text-text-dark">
// // //                 تنظیمات PDF
// // //               </h2>
// // //               <p className="text-sm sm:text-base text-muted-light dark:text-muted-dark">
// // //                 خروجی را سفارشی کنید
// // //               </p>
// // //             </div>
// // //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 bg-background-light dark:bg-background-dark rounded-xl backdrop-blur-sm">
// // //               <div>
// // //                 <label className="block font-medium mb-2 text-sm sm:text-base text-text-light dark:text-text-dark">
// // //                   جهت صفحه
// // //                 </label>
// // //                 <select
// // //                   value={settings.orientation}
// // //                   onChange={(e) =>
// // //                     handleSettingChange("orientation", e.target.value)
// // //                   }
// // //                   className="w-full p-2 sm:p-3 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-sm sm:text-base text-text-light dark:text-text-dark backdrop-blur-sm"
// // //                 >
// // //                   <option value="portrait">عمودی</option>
// // //                   <option value="landscape">افقی</option>
// // //                 </select>
// // //               </div>
// // //               <div>
// // //                 <label className="block font-medium mb-2 text-sm sm:text-base text-text-light dark:text-text-dark">
// // //                   اندازه کاغذ
// // //                 </label>
// // //                 <select
// // //                   value={settings.paperSize}
// // //                   onChange={(e) =>
// // //                     handleSettingChange("paperSize", e.target.value)
// // //                   }
// // //                   className="w-full p-2 sm:p-3 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-sm sm:text-base text-text-light dark:text-text-dark backdrop-blur-sm"
// // //                 >
// // //                   <option value="A4">A4</option>
// // //                   <option value="Letter">Letter</option>
// // //                   <option value="A5">A5</option>
// // //                 </select>
// // //               </div>
// // //               <div>
// // //                 <label className="block font-medium mb-2 text-sm sm:text-base text-text-light dark:text-text-dark">
// // //                   حاشیه
// // //                 </label>
// // //                 <select
// // //                   value={settings.margin}
// // //                   onChange={(e) =>
// // //                     handleSettingChange("margin", e.target.value)
// // //                   }
// // //                   className="w-full p-2 sm:p-3 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-sm sm:text-base text-text-light dark:text-text-dark backdrop-blur-sm"
// // //                 >
// // //                   <option value="none">بدون حاشیه</option>
// // //                   <option value="medium">متوسط</option>
// // //                   <option value="large">زیاد</option>
// // //                 </select>
// // //               </div>
// // //               <div>
// // //                 <label className="block font-medium mb-2 text-sm sm:text-base text-text-light dark:text-text-dark">
// // //                   کیفیت
// // //                 </label>
// // //                 <select
// // //                   value={settings.quality}
// // //                   onChange={(e) =>
// // //                     handleSettingChange("quality", e.target.value)
// // //                   }
// // //                   className="w-full p-2 sm:p-3 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-sm sm:text-base text-text-light dark:text-text-dark backdrop-blur-sm"
// // //                 >
// // //                   <option value="standard">استاندارد</option>
// // //                   <option value="high">بالا</option>
// // //                 </select>
// // //               </div>
// // //             </div>
// // //             <div className="flex flex-col sm:flex-row justify-between gap-3">
// // //               <button
// // //                 onClick={goToPreviousStep}
// // //                 className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-border-light dark:border-border-dark rounded-lg font-medium hover:bg-background-light dark:hover:bg-background-dark transition order-2 sm:order-1 backdrop-blur-sm text-text-light dark:text-text-dark"
// // //               >
// // //                 <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
// // //                 بازگشت
// // //               </button>
// // //               <button
// // //                 onClick={goToNextStep}
// // //                 className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition order-1 sm:order-2 backdrop-blur-sm"
// // //               >
// // //                 تبدیل
// // //                 <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
// // //               </button>
// // //             </div>
// // //           </div>
// // //         )}
// // //         {/* Convert Step */}
// // //         {currentStep === "convert" && (
// // //           <div className="space-y-4 sm:space-y-6 text-center">
// // //             <div>
// // //               <h2 className="text-xl sm:text-2xl font-bold text-text-light dark:text-text-dark">
// // //                 تبدیل و دانلود
// // //               </h2>
// // //               <p className="text-sm sm:text-base text-muted-light dark:text-muted-dark">
// // //                 کلیک کنید تا PDF ساخته شود
// // //               </p>
// // //             </div>
// // //             <button
// // //               onClick={handleConvert}
// // //               disabled={conversionStatus === "converting"}
// // //               className="flex items-center justify-center gap-2 mx-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-lg text-base sm:text-lg font-bold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition w-full sm:w-auto backdrop-blur-sm"
// // //             >
// // //               <FileImage className="w-5 h-5 sm:w-6 sm:h-6" />
// // //               تبدیل به PDF
// // //             </button>
// // //             {conversionStatus === "converting" && (
// // //               <div className="p-4 sm:p-6 bg-background-light dark:bg-background-dark rounded-xl space-y-3 sm:space-y-4 backdrop-blur-sm">
// // //                 <Loader2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto animate-spin text-primary" />
// // //                 <div className="w-full bg-border-light dark:bg-border-dark rounded-full h-2 sm:h-3">
// // //                   <div
// // //                     className="bg-primary h-2 sm:h-3 rounded-full transition-all duration-300"
// // //                     style={{
// // //                       width: `${
// // //                         (conversionProgress.current /
// // //                           conversionProgress.total) *
// // //                         100
// // //                       }%`,
// // //                     }}
// // //                   />
// // //                 </div>
// // //                 <p className="font-bold text-sm sm:text-base text-text-light dark:text-text-dark">
// // //                   {conversionProgress.status}
// // //                 </p>
// // //                 <p className="text-xs sm:text-sm text-muted-light dark:text-muted-dark">
// // //                   {conversionProgress.current} از {conversionProgress.total}
// // //                 </p>
// // //               </div>
// // //             )}
// // //             {conversionStatus === "completed" && (
// // //               <div className="p-4 sm:p-6 bg-green-50 dark:bg-green-900/20 rounded-xl space-y-3 sm:space-y-4 backdrop-blur-sm">
// // //                 <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-green-600" />
// // //                 <h3 className="text-lg sm:text-xl font-bold text-text-light dark:text-text-dark">
// // //                   PDF با موفقیت ساخته شد!
// // //                 </h3>
// // //                 <p className="text-sm sm:text-base text-muted-light dark:text-muted-dark">
// // //                   {images.length} صفحه
// // //                 </p>
// // //                 <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
// // //                   <button
// // //                     onClick={handleDownloadPDF}
// // //                     className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition flex-1 sm:flex-none backdrop-blur-sm"
// // //                   >
// // //                     <Download className="w-4 h-4 sm:w-5 sm:h-5" />
// // //                     دانلود PDF
// // //                   </button>
// // //                   <button
// // //                     onClick={handleDownloadZIP}
// // //                     className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-border-light dark:border-border-dark rounded-lg font-medium hover:bg-background-light dark:hover:bg-background-dark transition flex-1 sm:flex-none backdrop-blur-sm text-text-light dark:text-text-dark"
// // //                   >
// // //                     <Folder className="w-4 h-4 sm:w-5 sm:h-5" />
// // //                     دانلود ZIP
// // //                   </button>
// // //                 </div>
// // //                 <button
// // //                   onClick={resetConverter}
// // //                   className="text-xs sm:text-sm text-muted-light dark:text-muted-dark hover:text-text-light dark:hover:text-text-dark flex items-center gap-1 mx-auto mt-2 sm:mt-4"
// // //                 >
// // //                   <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4" />
// // //                   تبدیل جدید
// // //                 </button>
// // //               </div>
// // //             )}
// // //             {conversionStatus === "error" && (
// // //               <div className="p-4 sm:p-6 bg-red-50 dark:bg-red-900/20 rounded-xl space-y-3 sm:space-y-4 backdrop-blur-sm">
// // //                 <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-red-600" />
// // //                 <h3 className="text-lg sm:text-xl font-bold text-red-600">
// // //                   خطا در تبدیل
// // //                 </h3>
// // //                 <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
// // //                   <button
// // //                     onClick={handleConvert}
// // //                     className="px-4 sm:px-6 py-2 sm:py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition flex-1 sm:flex-none backdrop-blur-sm"
// // //                   >
// // //                     تلاش مجدد
// // //                   </button>
// // //                   <button
// // //                     onClick={goToPreviousStep}
// // //                     className="px-4 sm:px-6 py-2 sm:py-3 border border-border-light dark:border-border-dark rounded-lg font-medium hover:bg-background-light dark:hover:bg-background-dark transition flex-1 sm:flex-none backdrop-blur-sm text-text-light dark:text-text-dark"
// // //                   >
// // //                     بازگشت
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             )}
// // //             <div className="flex justify-start">
// // //               <button
// // //                 onClick={goToPreviousStep}
// // //                 className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-border-light dark:border-border-dark rounded-lg font-medium hover:bg-background-light dark:hover:bg-background-dark transition backdrop-blur-sm text-text-light dark:text-text-dark"
// // //               >
// // //                 <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
// // //                 بازگشت
// // //               </button>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // //components/ImageToPDFConverter.tsx
// // "use client";
// // import { useState, useRef, useCallback, useEffect } from "react";
// // import {
// //   ImageFile,
// //   PDFSettings,
// //   ConversionStatus,
// //   ConversionProgress,
// //   AppStep,
// // } from "@/types";
// // import { PDFConverter } from "@/lib/pdfConverter";
// // import ImagePreview from "./ImagePreview";
// // import { generateId, validateFile } from "@/lib/utils";
// // import {
// //   Upload,
// //   CheckCircle,
// //   Settings,
// //   FileImage,
// //   Download,
// //   Folder,
// //   RefreshCw,
// //   ChevronLeft,
// //   ChevronRight,
// //   Plus,
// //   AlertCircle,
// //   Loader2,
// // } from "lucide-react";
// // import {
// //   DndContext,
// //   closestCenter,
// //   KeyboardSensor,
// //   PointerSensor,
// //   useSensor,
// //   useSensors,
// //   DragEndEvent,
// // } from "@dnd-kit/core";
// // import {
// //   arrayMove,
// //   SortableContext,
// //   sortableKeyboardCoordinates,
// //   rectSortingStrategy,
// // } from "@dnd-kit/sortable";
// // const initialSettings: PDFSettings = {
// //   orientation: "portrait",
// //   paperSize: "A4",
// //   margin: "medium",
// //   quality: "standard",
// // };
// // export default function ImageToPDFConverter() {
// //   const [currentStep, setCurrentStep] = useState<AppStep>("upload");
// //   const [images, setImages] = useState<ImageFile[]>([]);
// //   const [settings, setSettings] = useState<PDFSettings>(initialSettings);
// //   const [conversionStatus, setConversionStatus] =
// //     useState<ConversionStatus>("idle");
// //   const [conversionProgress, setConversionProgress] =
// //     useState<ConversionProgress>({
// //       current: 0,
// //       total: 0,
// //       status: "",
// //     });
// //   const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);
// //   const fileInputRef = useRef<HTMLInputElement>(null);
// //   const [isDragging, setIsDragging] = useState(false);
// //   const sensors = useSensors(
// //     useSensor(PointerSensor, {
// //       activationConstraint: {
// //         distance: 8,
// //       },
// //     }),
// //     useSensor(KeyboardSensor, {
// //       coordinateGetter: sortableKeyboardCoordinates,
// //     })
// //   );
// //   // Clean up object URLs
// //   useEffect(() => {
// //     return () => {
// //       images.forEach((img) => URL.revokeObjectURL(img.url));
// //     };
// //   }, [images]);
// //   // Handlers
// //   const handleNameChange = (id: string, name: string) => {
// //     setImages((prev) =>
// //       prev.map((img) => (img.id === id ? { ...img, name } : img))
// //     );
// //   };
// //   const handleDelete = (id: string) => {
// //     setImages((prev) => {
// //       const filtered = prev.filter((img) => img.id !== id);
// //       URL.revokeObjectURL(prev.find((i) => i.id === id)?.url || "");
// //       return filtered;
// //     });
// //   };
// //   const handleMove = (id: string, direction: "up" | "down") => {
// //     setImages((prev) => {
// //       const index = prev.findIndex((img) => img.id === id);
// //       if (index === -1) return prev;
// //       const newIndex = direction === "up" ? index - 1 : index + 1;
// //       if (newIndex < 0 || newIndex >= prev.length) return prev;
// //       const updated = [...prev];
// //       const [moved] = updated.splice(index, 1);
// //       updated.splice(newIndex, 0, moved);
// //       return updated;
// //     });
// //   };
// //   const handleDragEnd = (event: DragEndEvent) => {
// //     const { active, over } = event;
// //     if (over && active.id !== over.id) {
// //       setImages((items) => {
// //         const oldIndex = items.findIndex((item) => item.id === active.id);
// //         const newIndex = items.findIndex((item) => item.id === over.id);
// //         return arrayMove(items, oldIndex, newIndex);
// //       });
// //     }
// //   };
// //   const handleFileSelect = (files: FileList | null) => {
// //     if (!files) return;
// //     const newImages: ImageFile[] = [];
// //     Array.from(files).forEach((file) => {
// //       const validation = validateFile(file);
// //       if (validation.isValid) {
// //         const url = URL.createObjectURL(file);
// //         newImages.push({ id: generateId(), url, name: file.name, file });
// //       } else {
// //         alert(validation.error);
// //       }
// //     });
// //     if (newImages.length > 0) {
// //       setImages((prev) => [...prev, ...newImages]);
// //     }
// //   };
// //   const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     handleFileSelect(e.target.files);
// //     if (fileInputRef.current) fileInputRef.current.value = "";
// //   };
// //   const handleDragOver = useCallback((e: React.DragEvent) => {
// //     e.preventDefault();
// //     setIsDragging(true);
// //   }, []);
// //   const handleDragLeave = useCallback((e: React.DragEvent) => {
// //     e.preventDefault();
// //     setIsDragging(false);
// //   }, []);
// //   const handleDrop = useCallback((e: React.DragEvent) => {
// //     e.preventDefault();
// //     setIsDragging(false);
// //     handleFileSelect(e.dataTransfer.files);
// //   }, []);
// //   const handleAddMoreClick = () => fileInputRef.current?.click();
// //   const handleSettingChange = (key: keyof PDFSettings, value: string) => {
// //     setSettings((prev) => ({ ...prev, [key]: value }));
// //   };
// //   const handleConvert = useCallback(async () => {
// //     if (images.length === 0) return;
// //     setConversionStatus("converting");
// //     setConversionProgress({
// //       current: 0,
// //       total: images.length,
// //       status: "شروع تبدیل...",
// //     });
// //     try {
// //       const blob = await PDFConverter.convertImagesToPDF(
// //         images,
// //         settings,
// //         setConversionProgress
// //       );
// //       setPdfBlob(blob);
// //       setConversionStatus("completed");
// //     } catch (error) {
// //       console.error("Conversion error:", error);
// //       setConversionStatus("error");
// //       alert("خطا در تبدیل. لطفاً دوباره تلاش کنید.");
// //     }
// //   }, [images, settings]);
// //   const handleDownloadPDF = useCallback(() => {
// //     if (!pdfBlob) return;
// //     const url = URL.createObjectURL(pdfBlob);
// //     const a = document.createElement("a");
// //     a.href = url;
// //     a.download = `images-to-pdf-${Date.now()}.pdf`;
// //     a.click();
// //     URL.revokeObjectURL(url);
// //   }, [pdfBlob]);
// //   const handleDownloadZIP = useCallback(async () => {
// //     if (images.length === 0) return;
// //     setConversionStatus("converting");
// //     setConversionProgress({
// //       current: 0,
// //       total: images.length,
// //       status: "در حال ساخت ZIP...",
// //     });
// //     try {
// //       const zipBlob = await PDFConverter.createZipFromImages(images);
// //       const url = URL.createObjectURL(zipBlob);
// //       const a = document.createElement("a");
// //       a.href = url;
// //       a.download = `images-${Date.now()}.zip`;
// //       a.click();
// //       URL.revokeObjectURL(url);
// //       setConversionStatus("idle");
// //     } catch (error) {
// //       alert("خطا در ساخت ZIP");
// //       setConversionStatus("idle");
// //     }
// //   }, [images]);
// //   const goToNextStep = () => {
// //     if (currentStep === "upload" && images.length > 0)
// //       setCurrentStep("settings");
// //     else if (currentStep === "settings") setCurrentStep("convert");
// //   };
// //   const goToPreviousStep = () => {
// //     if (currentStep === "settings") setCurrentStep("upload");
// //     else if (currentStep === "convert") setCurrentStep("settings");
// //   };
// //   const resetConverter = () => {
// //     images.forEach((img) => URL.revokeObjectURL(img.url));
// //     setImages([]);
// //     setSettings(initialSettings);
// //     setCurrentStep("upload");
// //     setConversionStatus("idle");
// //     setPdfBlob(null);
// //   };
// //   return (
// //     <div className="flex glass-card flex-col gap-6 w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6">
// //       {/* Progress Steps - Responsive */}
// //       <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
// //         {/* Step 1 */}
// //         <div className="flex flex-col items-center flex-1 max-w-24">
// //           <div
// //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// //               currentStep === "upload"
// //                 ? "bg-primary/20 border-primary/50 text-primary"
// //                 : images.length > 0
// //                 ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400"
// //                 : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
// //             }`}
// //           >
// //             {images.length > 0 ? (
// //               <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
// //             ) : (
// //               <span className="text-sm sm:text-base md:text-lg font-bold">
// //                 1
// //               </span>
// //             )}
// //           </div>
// //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// //             آپلود
// //           </span>
// //         </div>
// //         <div
// //           className={`h-1 flex-1 transition-colors glass-effect ${
// //             currentStep === "settings" || currentStep === "convert"
// //               ? "bg-primary/50"
// //               : "bg-gray-300/50 dark:bg-gray-600/50"
// //           }`}
// //         />
// //         {/* Step 2 */}
// //         <div className="flex flex-col  items-center flex-1 max-w-24">
// //           <div
// //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// //               currentStep === "settings"
// //                 ? "bg-primary/20 border-primary/50 text-primary"
// //                 : currentStep === "convert"
// //                 ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400"
// //                 : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
// //             }`}
// //           >
// //             {currentStep === "convert" ? (
// //               <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
// //             ) : (
// //               <span className="text-sm sm:text-base md:text-lg font-bold">
// //                 2
// //               </span>
// //             )}
// //           </div>
// //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// //             تنظیمات
// //           </span>
// //         </div>
// //         <div
// //           className={`h-1 flex-1 transition-colors glass-effect ${
// //             currentStep === "convert"
// //               ? "bg-primary/50"
// //               : "bg-gray-300/50 dark:bg-gray-600/50"
// //           }`}
// //         />
// //         {/* Step 3 */}
// //         <div className="flex flex-col items-center flex-1 max-w-24">
// //           <div
// //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// //               currentStep === "convert"
// //                 ? "bg-primary/20 border-primary/50 text-primary"
// //                 : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
// //             }`}
// //           >
// //             <span className="text-sm sm:text-base md:text-lg font-bold">3</span>
// //           </div>
// //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// //             دانلود
// //           </span>
// //         </div>
// //       </div>
// //       {/* Content */}
// //       <div className="glass-card rounded-2xl shadow-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/20">
// //         {/* Upload Step */}
// //         {currentStep === "upload" && (
// //           <div className="space-y-4 sm:space-y-6">
// //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// //                 آپلود و چیدمان عکس‌ها
// //               </h2>
// //               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// //                 {images.length} عکس
// //               </span>
// //             </div>
// //             <div
// //               className={`border-2 border-dashed rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center transition-all backdrop-blur-sm glass-effect ${
// //                 isDragging
// //                   ? "border-primary/50 bg-primary/5"
// //                   : "border-gray-300/50 dark:border-gray-600/50 bg-white/10 dark:bg-black/10"
// //               }`}
// //               onDragOver={handleDragOver}
// //               onDragLeave={handleDragLeave}
// //               onDrop={handleDrop}
// //             >
// //               <input
// //                 ref={fileInputRef}
// //                 type="file"
// //                 multiple
// //                 accept=".jpg,.jpeg,.png,.webp"
// //                 onChange={handleFileInputChange}
// //                 className="hidden"
// //               />
// //               <Upload className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-primary mb-2 sm:mb-3 md:mb-4" />
// //               <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
// //                 عکس‌ها را اینجا بکشید
// //               </p>
// //               <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
// //                 یا
// //               </p>
// //               <button
// //                 onClick={() => fileInputRef.current?.click()}
// //                 className="mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition text-sm sm:text-base backdrop-blur-sm glass-effect"
// //               >
// //                 انتخاب از دستگاه
// //               </button>
// //               <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 sm:mt-3">
// //                 JPG, PNG, WEBP • حداکثر 10MB
// //               </p>
// //             </div>
// //             {images.length > 0 && (
// //               <div className="flex flex-col md:flex-row flex-wrap flex-1 items-center justify-center md:justify-start gap-3 sm:gap-4">
// //                 <DndContext
// //                   sensors={sensors}
// //                   collisionDetection={closestCenter}
// //                   onDragEnd={handleDragEnd}
// //                 >
// //                   <SortableContext
// //                     items={images.map((img) => img.id)}
// //                     strategy={rectSortingStrategy}
// //                   >
// //                     {/* تغییر در کلاس‌های grid */}
// //                     <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
// //                       {images.map((img, i) => (
// //                         <ImagePreview
// //                           key={img.id}
// //                           image={img}
// //                           index={i}
// //                           onNameChange={handleNameChange}
// //                           onDelete={handleDelete}
// //                           onMove={handleMove}
// //                           canMoveUp={i > 0}
// //                           canMoveDown={i < images.length - 1}
// //                         />
// //                       ))}
// //                       {/* Add More Button as last item in grid */}
// //                       <button
// //                         onClick={handleAddMoreClick}
// //                         className="aspect-[4/3] border-2 border-dashed border-gray-300/50 dark:border-gray-600/50 rounded-lg flex flex-col items-center justify-center gap-1 sm:gap-2 hover:border-primary/50 hover:bg-primary/5 transition backdrop-blur-sm glass-effect"
// //                       >
// //                         <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 dark:text-gray-400" />
// //                         <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
// //                           افزودن عکس
// //                         </span>
// //                       </button>
// //                     </div>
// //                   </SortableContext>
// //                 </DndContext>
// //                 <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
// //                   <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
// //                     <span className="text-xs sm:text-sm">
// //                       برای جابجایی: عکس را بکشید یا از دکمه‌ها استفاده کنید
// //                     </span>
// //                   </div>
// //                   <div className="flex gap-2 w-full sm:w-auto">
// //                     <button
// //                       onClick={handleAddMoreClick}
// //                       className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition text-sm backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// //                     >
// //                       <Plus className="w-4 h-4" />
// //                       افزودن بیشتر
// //                     </button>
// //                     <button
// //                       onClick={goToNextStep}
// //                       className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition text-sm backdrop-blur-sm glass-effect"
// //                     >
// //                       ادامه
// //                       <ChevronLeft className="w-4 h-4" />
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }
// // // <div className="flex glass-card flex-col gap-6 w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6">
// // //   {/* Progress Steps - Responsive */}
// // //   <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
// // //     {/* Step 1 */}
// // //     <div className="flex flex-col items-center flex-1 max-w-24">
// // //       <div
// // //         className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// // //           currentStep === "upload"
// // //             ? "bg-primary/20 border-primary/50 text-primary"
// // //             : images.length > 0
// // //             ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400"
// // //             : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
// // //         }`}
// // //       >
// // //         {images.length > 0 ? (
// // //           <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
// // //         ) : (
// // //           <span className="text-sm sm:text-base md:text-lg font-bold">
// // //             1
// // //           </span>
// // //         )}
// // //       </div>
// // //       <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// // //         آپلود
// // //       </span>
// // //     </div>
// // //     <div
// // //       className={`h-1 flex-1 transition-colors glass-effect ${
// // //         currentStep === "settings" || currentStep === "convert"
// // //           ? "bg-primary/50"
// // //           : "bg-gray-300/50 dark:bg-gray-600/50"
// // //       }`}
// // //     />
// // //     {/* Step 2 */}
// // //     <div className="flex flex-col  items-center flex-1 max-w-24">
// // //       <div
// // //         className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// // //           currentStep === "settings"
// // //             ? "bg-primary/20 border-primary/50 text-primary"
// // //             : currentStep === "convert"
// // //             ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400"
// // //             : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
// // //         }`}
// // //       >
// // //         {currentStep === "convert" ? (
// // //           <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
// // //         ) : (
// // //           <span className="text-sm sm:text-base md:text-lg font-bold">
// // //             2
// // //           </span>
// // //         )}
// // //       </div>
// // //       <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// // //         تنظیمات
// // //       </span>
// // //     </div>
// // //     <div
// // //       className={`h-1 flex-1 transition-colors glass-effect ${
// // //         currentStep === "convert"
// // //           ? "bg-primary/50"
// // //           : "bg-gray-300/50 dark:bg-gray-600/50"
// // //       }`}
// // //     />
// // //     {/* Step 3 */}
// // //     <div className="flex flex-col items-center flex-1 max-w-24">
// // //       <div
// // //         className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// // //           currentStep === "convert"
// // //             ? "bg-primary/20 border-primary/50 text-primary"
// // //             : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
// // //         }`}
// // //       >
// // //         <span className="text-sm sm:text-base md:text-lg font-bold">3</span>
// // //       </div>
// // //       <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// // //         دانلود
// // //       </span>
// // //     </div>
// // //   </div>
// // //   {/* Content */}
// // //   <div className="glass-card rounded-2xl shadow-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/20">
// // //     {/* Upload Step */}
// // //     {currentStep === "upload" && (
// // //       <div className="space-y-4 sm:space-y-6">
// // //         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// // //           <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// // //             آپلود و چیدمان عکس‌ها
// // //           </h2>
// // //           <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// // //             {images.length} عکس
// // //           </span>
// // //         </div>
// // //         <div
// // //           className={`border-2 border-dashed rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center transition-all backdrop-blur-sm glass-effect ${
// // //             isDragging
// // //               ? "border-primary/50 bg-primary/5"
// // //               : "border-gray-300/50 dark:border-gray-600/50 bg-white/10 dark:bg-black/10"
// // //           }`}
// // //           onDragOver={handleDragOver}
// // //           onDragLeave={handleDragLeave}
// // //           onDrop={handleDrop}
// // //         >
// // //           <input
// // //             ref={fileInputRef}
// // //             type="file"
// // //             multiple
// // //             accept=".jpg,.jpeg,.png,.webp"
// // //             onChange={handleFileInputChange}
// // //             className="hidden"
// // //           />
// // //           <Upload className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-primary mb-2 sm:mb-3 md:mb-4" />
// // //           <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
// // //             عکس‌ها را اینجا بکشید
// // //           </p>
// // //           <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
// // //             یا
// // //           </p>
// // //           <button
// // //             onClick={() => fileInputRef.current?.click()}
// // //             className="mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition text-sm sm:text-base backdrop-blur-sm glass-effect"
// // //           >
// // //             انتخاب از دستگاه
// // //           </button>
// // //           <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 sm:mt-3">
// // //             JPG, PNG, WEBP • حداکثر 10MB
// // //           </p>
// // //         </div>
// // //         {images.length > 0 && (
// // //           <>
// // //             <DndContext
// // //               sensors={sensors}
// // //               collisionDetection={closestCenter}
// // //               onDragEnd={handleDragEnd}
// // //             >
// // //               <SortableContext
// // //                 items={images.map((img) => img.id)}
// // //                 strategy={rectSortingStrategy}
// // //               >
// // //                 <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
// // //                   {images.map((img, i) => (
// // //                     <ImagePreview
// // //                       key={img.id}
// // //                       image={img}
// // //                       index={i}
// // //                       onNameChange={handleNameChange}
// // //                       onDelete={handleDelete}
// // //                       onMove={handleMove}
// // //                       canMoveUp={i > 0}
// // //                       canMoveDown={i < images.length - 1}
// // //                     />
// // //                   ))}
// // //                   {/* Add More Button as last item in grid */}
// // //                   <button
// // //                     onClick={handleAddMoreClick}
// // //                     className="aspect-[4/3] border-2 border-dashed border-gray-300/50 dark:border-gray-600/50 rounded-lg flex flex-col items-center justify-center gap-1 sm:gap-2 hover:border-primary/50 hover:bg-primary/5 transition backdrop-blur-sm glass-effect"
// // //                   >
// // //                     <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 dark:text-gray-400" />
// // //                     <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
// // //                       افزودن عکس
// // //                     </span>
// // //                   </button>
// // //                 </div>
// // //               </SortableContext>
// // //             </DndContext>
// // //             <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
// // //               <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
// // //                 <span className="text-xs sm:text-sm">
// // //                   برای جابجایی: عکس را بکشید یا از دکمه‌ها استفاده کنید
// // //                 </span>
// // //               </div>
// // //               <div className="flex gap-2 w-full sm:w-auto">
// // //                 <button
// // //                   onClick={handleAddMoreClick}
// // //                   className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition text-sm backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // //                 >
// // //                   <Plus className="w-4 h-4" />
// // //                   افزودن بیشتر
// // //                 </button>
// // //                 <button
// // //                   onClick={goToNextStep}
// // //                   className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition text-sm backdrop-blur-sm glass-effect"
// // //                 >
// // //                   ادامه
// // //                   <ChevronLeft className="w-4 h-4" />
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </>
// // //         )}
// // //       </div>
// // //     )}
// // //     {/* Settings Step */}
// // //     {currentStep === "settings" && (
// // //       <div className="space-y-4 sm:space-y-6">
// // //         <div>
// // //           <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// // //             تنظیمات PDF
// // //           </h2>
// // //           <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
// // //             خروجی را سفارشی کنید
// // //           </p>
// // //         </div>
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 bg-white/10 dark:bg-black/10 rounded-2xl backdrop-blur-sm glass-effect">
// // //           <div>
// // //             <label className="block font-medium mb-2 text-sm sm:text-base text-gray-800 dark:text-white">
// // //               جهت صفحه
// // //             </label>
// // //             <select
// // //               value={settings.orientation}
// // //               onChange={(e) =>
// // //                 handleSettingChange("orientation", e.target.value)
// // //               }
// // //               className="w-full p-2 sm:p-3 rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-white/20 dark:bg-black/20 text-sm sm:text-base text-gray-800 dark:text-white backdrop-blur-sm glass-effect"
// // //             >
// // //               <option value="portrait">عمودی</option>
// // //               <option value="landscape">افقی</option>
// // //             </select>
// // //           </div>
// // //           <div>
// // //             <label className="block font-medium mb-2 text-sm sm:text-base text-gray-800 dark:text-white">
// // //               اندازه کاغذ
// // //             </label>
// // //             <select
// // //               value={settings.paperSize}
// // //               onChange={(e) =>
// // //                 handleSettingChange("paperSize", e.target.value)
// // //               }
// // //               className="w-full p-2 sm:p-3 rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-white/20 dark:bg-black/20 text-sm sm:text-base text-gray-800 dark:text-white backdrop-blur-sm glass-effect"
// // //             >
// // //               <option value="A4">A4</option>
// // //               <option value="Letter">Letter</option>
// // //               <option value="A5">A5</option>
// // //             </select>
// // //           </div>
// // //           <div>
// // //             <label className="block font-medium mb-2 text-sm sm:text-base text-gray-800 dark:text-white">
// // //               حاشیه
// // //             </label>
// // //             <select
// // //               value={settings.margin}
// // //               onChange={(e) =>
// // //                 handleSettingChange("margin", e.target.value)
// // //               }
// // //               className="w-full p-2 sm:p-3 rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-white/20 dark:bg-black/20 text-sm sm:text-base text-gray-800 dark:text-white backdrop-blur-sm glass-effect"
// // //             >
// // //               <option value="none">بدون حاشیه</option>
// // //               <option value="medium">متوسط</option>
// // //               <option value="large">زیاد</option>
// // //             </select>
// // //           </div>
// // //           <div>
// // //             <label className="block font-medium mb-2 text-sm sm:text-base text-gray-800 dark:text-white">
// // //               کیفیت
// // //             </label>
// // //             <select
// // //               value={settings.quality}
// // //               onChange={(e) =>
// // //                 handleSettingChange("quality", e.target.value)
// // //               }
// // //               className="w-full p-2 sm:p-3 rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-white/20 dark:bg-black/20 text-sm sm:text-base text-gray-800 dark:text-white backdrop-blur-sm glass-effect"
// // //             >
// // //               <option value="standard">استاندارد</option>
// // //               <option value="high">بالا</option>
// // //             </select>
// // //           </div>
// // //         </div>
// // //         <div className="flex flex-col sm:flex-row justify-between gap-3">
// // //           <button
// // //             onClick={goToPreviousStep}
// // //             className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition order-2 sm:order-1 backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // //           >
// // //             <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
// // //             بازگشت
// // //           </button>
// // //           <button
// // //             onClick={goToNextStep}
// // //             className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition order-1 sm:order-2 backdrop-blur-sm glass-effect"
// // //           >
// // //             تبدیل
// // //             <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
// // //           </button>
// // //         </div>
// // //       </div>
// // //     )}
// // //     {/* Convert Step */}
// // //     {currentStep === "convert" && (
// // //       <div className="space-y-4 sm:space-y-6 text-center">
// // //         <div>
// // //           <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// // //             تبدیل و دانلود
// // //           </h2>
// // //           <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
// // //             کلیک کنید تا PDF ساخته شود
// // //           </p>
// // //         </div>
// // //         <button
// // //           onClick={handleConvert}
// // //           disabled={conversionStatus === "converting"}
// // //           className="flex items-center justify-center gap-2 mx-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary/80 text-white rounded-lg text-base sm:text-lg font-bold hover:bg-primary disabled:opacity-50 disabled:cursor-not-allowed transition w-full sm:w-auto backdrop-blur-sm glass-effect"
// // //         >
// // //           <FileImage className="w-5 h-5 sm:w-6 sm:h-6" />
// // //           تبدیل به PDF
// // //         </button>
// // //         {conversionStatus === "converting" && (
// // //           <div className="p-4 sm:p-6 bg-white/10 dark:bg-black/10 rounded-2xl space-y-3 sm:space-y-4 backdrop-blur-sm glass-effect">
// // //             <Loader2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto animate-spin text-primary" />
// // //             <div className="w-full bg-gray-300/50 dark:bg-gray-600/50 rounded-full h-2 sm:h-3">
// // //               <div
// // //                 className="bg-primary h-2 sm:h-3 rounded-full transition-all duration-300"
// // //                 style={{
// // //                   width: `${
// // //                     (conversionProgress.current /
// // //                       conversionProgress.total) *
// // //                     100
// // //                   }%`,
// // //                 }}
// // //               />
// // //             </div>
// // //             <p className="font-bold text-sm sm:text-base text-gray-800 dark:text-white">
// // //               {conversionProgress.status}
// // //             </p>
// // //             <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// // //               {conversionProgress.current} از {conversionProgress.total}
// // //             </p>
// // //           </div>
// // //         )}
// // //         {conversionStatus === "completed" && (
// // //           <div className="p-4 sm:p-6 bg-green-500/10 rounded-2xl space-y-3 sm:space-y-4 backdrop-blur-sm glass-effect border border-green-500/20">
// // //             <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-green-600 dark:text-green-400" />
// // //             <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
// // //               PDF با موفقیت ساخته شد!
// // //             </h3>
// // //             <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
// // //               {images.length} صفحه
// // //             </p>
// // //             <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
// // //               <button
// // //                 onClick={handleDownloadPDF}
// // //                 className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition flex-1 sm:flex-none backdrop-blur-sm glass-effect"
// // //               >
// // //                 <Download className="w-4 h-4 sm:w-5 sm:h-5" />
// // //                 دانلود PDF
// // //               </button>
// // //               <button
// // //                 onClick={handleDownloadZIP}
// // //                 className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition flex-1 sm:flex-none backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // //               >
// // //                 <Folder className="w-4 h-4 sm:w-5 sm:h-5" />
// // //                 دانلود ZIP
// // //               </button>
// // //             </div>
// // //             <button
// // //               onClick={resetConverter}
// // //               className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white flex items-center gap-1 mx-auto mt-2 sm:mt-4"
// // //             >
// // //               <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4" />
// // //               تبدیل جدید
// // //             </button>
// // //           </div>
// // //         )}
// // //         {conversionStatus === "error" && (
// // //           <div className="p-4 sm:p-6 bg-red-500/10 rounded-2xl space-y-3 sm:space-y-4 backdrop-blur-sm glass-effect border border-red-500/20">
// // //             <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-red-600 dark:text-red-400" />
// // //             <h3 className="text-lg sm:text-xl font-bold text-red-600 dark:text-red-400">
// // //               خطا در تبدیل
// // //             </h3>
// // //             <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
// // //               <button
// // //                 onClick={handleConvert}
// // //                 className="px-4 sm:px-6 py-2 sm:py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition flex-1 sm:flex-none backdrop-blur-sm glass-effect"
// // //               >
// // //                 تلاش مجدد
// // //               </button>
// // //               <button
// // //                 onClick={goToPreviousStep}
// // //                 className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition flex-1 sm:flex-none backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // //               >
// // //                 بازگشت
// // //               </button>
// // //             </div>
// // //           </div>
// // //         )}
// // //         <div className="flex justify-start">
// // //           <button
// // //             onClick={goToPreviousStep}
// // //             className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // //           >
// // //             <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
// // //             بازگشت
// // //           </button>
// // //         </div>
// // //       </div>
// // //     )}
// // //   </div>
// // // </div>
// //components/ImageToPDFConverter.tsx
// "use client";
// import { useState, useRef, useCallback, useEffect } from "react";
// import {
//   ImageFile,
//   PDFSettings,
//   ConversionStatus,
//   ConversionProgress,
//   AppStep,
// } from "@/types";
// import { PDFConverter } from "@/lib/pdfConverter";
// import ImagePreview from "./ImagePreview";
// import { generateId, validateFile } from "@/lib/utils";
// import {
//   Upload,
//   CheckCircle,
//   Settings,
//   FileImage,
//   Download,
//   Folder,
//   RefreshCw,
//   ChevronLeft,
//   ChevronRight,
//   Plus,
//   AlertCircle,
//   Loader2,
// } from "lucide-react";
// import {
//   DndContext,
//   closestCenter,
//   KeyboardSensor,
//   PointerSensor,
//   useSensor,
//   useSensors,
//   DragEndEvent,
//   TouchSensor,
// } from "@dnd-kit/core";
// import {
//   arrayMove,
//   SortableContext,
//   sortableKeyboardCoordinates,
//   rectSortingStrategy,
// } from "@dnd-kit/sortable";
// const initialSettings: PDFSettings = {
//   orientation: "portrait",
//   paperSize: "A4",
//   margin: "medium",
//   quality: "standard",
// };
// export default function ImageToPDFConverter() {
//   const [currentStep, setCurrentStep] = useState<AppStep>("upload");
//   const [images, setImages] = useState<ImageFile[]>([]);
//   const [settings, setSettings] = useState<PDFSettings>(initialSettings);
//   const [conversionStatus, setConversionStatus] =
//     useState<ConversionStatus>("idle");
//   const [conversionProgress, setConversionProgress] =
//     useState<ConversionProgress>({
//       current: 0,
//       total: 0,
//       status: "",
//     });
//   const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const [isDragging, setIsDragging] = useState(false);
//   // بهبود سنسورها برای موبایل
//   const sensors = useSensors(
//     useSensor(PointerSensor, {
//       activationConstraint: {
//         distance: 5, // کاهش distance برای حساسیت بهتر
//       },
//     }),
//     useSensor(TouchSensor, {
//       activationConstraint: {
//         delay: 250, // تاخیر برای تشخیص بهتر تاچ
//         tolerance: 5,
//       },
//     }),
//     useSensor(KeyboardSensor, {
//       coordinateGetter: sortableKeyboardCoordinates,
//     })
//   );
//   // Clean up object URLs
//   useEffect(() => {
//     return () => {
//       images.forEach((img) => URL.revokeObjectURL(img.url));
//     };
//   }, [images]);
//   // Handlers
//   const handleNameChange = useCallback((id: string, name: string) => {
//     setImages((prev) =>
//       prev.map((img) => (img.id === id ? { ...img, name } : img))
//     );
//   }, []);
//   const handleDelete = useCallback((id: string) => {
//     setImages((prev) => {
//       const imageToDelete = prev.find((img) => img.id === id);
//       if (imageToDelete) {
//         URL.revokeObjectURL(imageToDelete.url);
//       }
//       return prev.filter((img) => img.id !== id);
//     });
//   }, []);
//   const handleMove = useCallback((id: string, direction: "up" | "down") => {
//     setImages((prev) => {
//       const index = prev.findIndex((img) => img.id === id);
//       if (index === -1) return prev;
//       const newIndex = direction === "up" ? index - 1 : index + 1;
//       if (newIndex < 0 || newIndex >= prev.length) return prev;
//       const updated = [...prev];
//       const [moved] = updated.splice(index, 1);
//       updated.splice(newIndex, 0, moved);
//       return updated;
//     });
//   }, []);
//   const handleDragEnd = useCallback((event: DragEndEvent) => {
//     const { active, over } = event;
//     if (over && active.id !== over.id) {
//       setImages((items) => {
//         const oldIndex = items.findIndex((item) => item.id === active.id);
//         const newIndex = items.findIndex((item) => item.id === over.id);
//         return arrayMove(items, oldIndex, newIndex);
//       });
//     }
//   }, []);
//   const handleFileSelect = useCallback((files: FileList | null) => {
//     if (!files) return;
//     const newImages: ImageFile[] = [];
//     Array.from(files).forEach((file) => {
//       const validation = validateFile(file);
//       if (validation.isValid) {
//         const url = URL.createObjectURL(file);
//         newImages.push({ id: generateId(), url, name: file.name, file });
//       } else {
//         alert(validation.error);
//       }
//     });
//     if (newImages.length > 0) {
//       setImages((prev) => [...prev, ...newImages]);
//     }
//   }, []);
//   const handleFileInputChange = useCallback(
//     (e: React.ChangeEvent<HTMLInputElement>) => {
//       handleFileSelect(e.target.files);
//       if (fileInputRef.current) fileInputRef.current.value = "";
//     },
//     [handleFileSelect]
//   );
//   const handleDragOver = useCallback((e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragging(true);
//   }, []);
//   const handleDragLeave = useCallback((e: React.DragEvent) => {
//     e.preventDefault();
//     // فقط زمانی که از روی المان اصلی خارج می‌شویم isDragging را false کنیم
//     if (e.currentTarget === e.target) {
//       setIsDragging(false);
//     }
//   }, []);
//   const handleDrop = useCallback(
//     (e: React.DragEvent) => {
//       e.preventDefault();
//       setIsDragging(false);
//       handleFileSelect(e.dataTransfer.files);
//     },
//     [handleFileSelect]
//   );
//   const handleAddMoreClick = useCallback(() => {
//     fileInputRef.current?.click();
//   }, []);
//   const handleSettingChange = useCallback(
//     (key: keyof PDFSettings, value: string) => {
//       setSettings((prev) => ({ ...prev, [key]: value }));
//     },
//     []
//   );
//   const handleConvert = useCallback(async () => {
//     if (images.length === 0) return;
//     setConversionStatus("converting");
//     setConversionProgress({
//       current: 0,
//       total: images.length,
//       status: "شروع تبدیل...",
//     });
//     try {
//       const blob = await PDFConverter.convertImagesToPDF(
//         images,
//         settings,
//         setConversionProgress
//       );
//       setPdfBlob(blob);
//       setConversionStatus("completed");
//     } catch (error) {
//       console.error("Conversion error:", error);
//       setConversionStatus("error");
//       alert("خطا در تبدیل. لطفاً دوباره تلاش کنید.");
//     }
//   }, [images, settings]);
//   const handleDownloadPDF = useCallback(() => {
//     if (!pdfBlob) return;
//     const url = URL.createObjectURL(pdfBlob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `images-to-pdf-${Date.now()}.pdf`;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   }, [pdfBlob]);
//   const handleDownloadZIP = useCallback(async () => {
//     if (images.length === 0) return;
//     setConversionStatus("converting");
//     setConversionProgress({
//       current: 0,
//       total: images.length,
//       status: "در حال ساخت ZIP...",
//     });
//     try {
//       const zipBlob = await PDFConverter.createZipFromImages(images);
//       const url = URL.createObjectURL(zipBlob);
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = `images-${Date.now()}.zip`;
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
//       URL.revokeObjectURL(url);
//       setConversionStatus("idle");
//     } catch (error) {
//       console.error("ZIP creation error:", error);
//       alert("خطا در ساخت ZIP");
//       setConversionStatus("idle");
//     }
//   }, [images]);
//   const goToNextStep = useCallback(() => {
//     if (currentStep === "upload" && images.length > 0)
//       setCurrentStep("settings");
//     else if (currentStep === "settings") setCurrentStep("convert");
//   }, [currentStep, images.length]);
//   const goToPreviousStep = useCallback(() => {
//     if (currentStep === "settings") setCurrentStep("upload");
//     else if (currentStep === "convert") setCurrentStep("settings");
//   }, [currentStep]);
//   const resetConverter = useCallback(() => {
//     images.forEach((img) => URL.revokeObjectURL(img.url));
//     setImages([]);
//     setSettings(initialSettings);
//     setCurrentStep("upload");
//     setConversionStatus("idle");
//     setPdfBlob(null);
//   }, [images]);
//   return (
//     <div className="flex  flex-col gap-6 w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6    backdrop-blur-sm ">
//       {/* Progress Steps - Responsive */}
//       <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
//         {/* Step 1 */}
//         <div className="flex flex-col items-center flex-1 max-w-24">
//           <div
//             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
//               currentStep === "upload"
//                 ? "bg-primary/20 border-primary/50 text-primary"
//                 : images.length > 0
//                 ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400"
//                 : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
//             }`}
//           >
//             {images.length > 0 ? (
//               <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
//             ) : (
//               <span className="text-sm sm:text-base md:text-lg font-bold">
//                 1
//               </span>
//             )}
//           </div>
//           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
//             آپلود
//           </span>
//         </div>
//         <div
//           className={`h-1 flex-1 transition-colors glass-effect ${
//             currentStep === "settings" || currentStep === "convert"
//               ? "bg-primary/50"
//               : "bg-gray-300/50 dark:bg-gray-600/50"
//           }`}
//         />
//         {/* Step 2 */}
//         <div className="flex flex-col items-center flex-1 max-w-24">
//           <div
//             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
//               currentStep === "settings"
//                 ? "bg-primary/20 border-primary/50 text-primary"
//                 : currentStep === "convert"
//                 ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400"
//                 : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
//             }`}
//           >
//             {currentStep === "convert" ? (
//               <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
//             ) : (
//               <span className="text-sm sm:text-base md:text-lg font-bold">
//                 2
//               </span>
//             )}
//           </div>
//           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
//             تنظیمات
//           </span>
//         </div>
//         <div
//           className={`h-1 flex-1 transition-colors glass-effect ${
//             currentStep === "convert"
//               ? "bg-primary/50"
//               : "bg-gray-300/50 dark:bg-gray-600/50"
//           }`}
//         />
//         {/* Step 3 */}
//         <div className="flex flex-col items-center flex-1 max-w-24">
//           <div
//             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
//               currentStep === "convert"
//                 ? "bg-primary/20 border-primary/50 text-primary"
//                 : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
//             }`}
//           >
//             <span className="text-sm sm:text-base md:text-lg font-bold">3</span>
//           </div>
//           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
//             دانلود
//           </span>
//         </div>
//       </div>
//       {/* Content */}
//       <div className=" rounded-2xl shadow-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/20">
//         {/* Upload Step */}
//         {currentStep === "upload" && (
//           <div className="space-y-4 sm:space-y-6">
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
//               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
//                 آپلود
//               </h2>
//               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
//                 {images.length} عکس
//               </span>
//             </div>
//             <div
//               className={`border-2 border-dashed rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center transition-all backdrop-blur-sm ${
//                 isDragging
//                   ? "border-primary/50 bg-primary/5"
//                   : "border-gray-300/50 dark:border-gray-600/50 bg-white/10 dark:bg-black/10"
//               }`}
//               onDragOver={handleDragOver}
//               onDragLeave={handleDragLeave}
//               onDrop={handleDrop}
//             >
//               <input
//                 ref={fileInputRef}
//                 type="file"
//                 multiple
//                 accept=".jpg,.jpeg,.png,.webp"
//                 onChange={handleFileInputChange}
//                 className="hidden"
//               />
//               <Upload className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-primary mb-2 sm:mb-3 md:mb-4" />
//               <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
//                 عکس‌ها را اینجا بکشید
//               </p>
//               <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
//                 یا
//               </p>
//               <button
//                 onClick={() => fileInputRef.current?.click()}
//                 className="mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary transition text-sm sm:text-base backdrop-blur-sm glass-effect"
//               >
//                 انتخاب از دستگاه
//               </button>
//               <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 sm:mt-3">
//                 JPG, PNG, WEBP • حداکثر 10MB
//               </p>
//             </div>
//             {images.length > 0 && (
//               <div className="flex flex-col gap-5">
//                 <DndContext
//                   sensors={sensors}
//                   collisionDetection={closestCenter}
//                   onDragEnd={handleDragEnd}
//                   modifiers={[]} // حذف مودیفایرها برای عملکرد بهتر در موبایل
//                 >
//                   <SortableContext
//                     items={images.map((img) => img.id)}
//                     strategy={rectSortingStrategy}
//                   >
//                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
//                       {images.map((img, i) => (
//                         <ImagePreview
//                           key={img.id}
//                           image={img}
//                           index={i}
//                           onNameChange={handleNameChange}
//                           onDelete={handleDelete}
//                           onMove={handleMove}
//                           canMoveUp={i > 0}
//                           canMoveDown={i < images.length - 1}
//                         />
//                       ))}
//                       {/* Add More Button as last item in grid */}
//                       <button
//                         onClick={handleAddMoreClick}
//                         className="aspect-[4/3] border-2 border-dashed border-gray-300/50 dark:border-gray-600/50 rounded-lg flex flex-col items-center justify-center gap-1 sm:gap-2 hover:border-primary/50 hover:bg-primary/5 transition backdrop-blur-sm glass-effect"
//                       >
//                         <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 dark:text-gray-400" />
//                         <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
//                           افزودن عکس
//                         </span>
//                       </button>
//                     </div>
//                   </SortableContext>
//                 </DndContext>
//                 <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
//                   <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
//                     <span className="text-xs sm:text-sm">
//                       برای جابجایی: عکس را بکشید یا از دکمه‌ها استفاده کنید
//                     </span>
//                   </div>
//                   <div className="flex gap-2 w-full sm:w-auto">
//                     <button
//                       onClick={handleAddMoreClick}
//                       className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition text-sm backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
//                     >
//                       <Plus className="w-4 h-4" />
//                       افزودن بیشتر
//                     </button>
//                     <button
//                       onClick={goToNextStep}
//                       disabled={images.length === 0}
//                       className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition text-sm backdrop-blur-sm glass-effect disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                       ادامه
//                       <ChevronLeft className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//         {/* Settings Step */}
//         {currentStep === "settings" && (
//           <div className="space-y-6">
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
//               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
//                 تنظیمات PDF
//               </h2>
//               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
//                 {images.length} عکس
//               </span>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                     جهت کاغذ
//                   </label>
//                   <select
//                     value={settings.orientation}
//                     onChange={(e) =>
//                       handleSettingChange("orientation", e.target.value)
//                     }
//                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm"
//                   >
//                     <option value="portrait">عمودی</option>
//                     <option value="landscape">افقی</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                     سایز کاغذ
//                   </label>
//                   <select
//                     value={settings.paperSize}
//                     onChange={(e) =>
//                       handleSettingChange("paperSize", e.target.value)
//                     }
//                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm"
//                   >
//                     <option value="A4">A4</option>
//                     <option value="A3">A3</option>
//                     <option value="letter">Letter</option>
//                     <option value="legal">Legal</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                     حاشیه
//                   </label>
//                   <select
//                     value={settings.margin}
//                     onChange={(e) =>
//                       handleSettingChange("margin", e.target.value)
//                     }
//                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm"
//                   >
//                     <option value="small">کوچک</option>
//                     <option value="medium">متوسط</option>
//                     <option value="large">بزرگ</option>
//                     <option value="none">بدون حاشیه</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                     کیفیت
//                   </label>
//                   <select
//                     value={settings.quality}
//                     onChange={(e) =>
//                       handleSettingChange("quality", e.target.value)
//                     }
//                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm"
//                   >
//                     <option value="low">پایین</option>
//                     <option value="standard">استاندارد</option>
//                     <option value="high">بالا</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
//               <button
//                 onClick={goToPreviousStep}
//                 className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
//               >
//                 <ChevronRight className="w-4 h-4" />
//                 بازگشت
//               </button>
//               <button
//                 onClick={goToNextStep}
//                 className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
//               >
//                 ادامه به تبدیل
//                 <ChevronLeft className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         )}
//         {/* Convert Step */}
//         {currentStep === "convert" && (
//           <div className="space-y-6">
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
//               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
//                 تبدیل و دانلود
//               </h2>
//               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
//                 {images.length} عکس
//               </span>
//             </div>
//             {conversionStatus === "idle" && (
//               <div className="text-center space-y-4">
//                 <FileImage className="w-16 h-16 mx-auto text-primary" />
//                 <p className="text-lg text-gray-700 dark:text-gray-300">
//                   آماده برای تبدیل {images.length} عکس به PDF
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
//                   <button
//                     onClick={handleConvert}
//                     className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
//                   >
//                     <Settings className="w-5 h-5" />
//                     شروع تبدیل
//                   </button>
//                   <button
//                     onClick={handleDownloadZIP}
//                     className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
//                   >
//                     <Folder className="w-5 h-5" />
//                     دانلود ZIP
//                   </button>
//                 </div>
//               </div>
//             )}
//             {conversionStatus === "converting" && (
//               <div className="text-center space-y-4">
//                 <Loader2 className="w-12 h-12 mx-auto text-primary animate-spin" />
//                 <div className="space-y-2">
//                   <p className="text-lg text-gray-700 dark:text-gray-300">
//                     در حال تبدیل...
//                   </p>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">
//                     {conversionProgress.status}
//                   </p>
//                   <div className="w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-2">
//                     <div
//                       className="bg-primary h-2 rounded-full transition-all duration-300"
//                       style={{
//                         width: `${
//                           (conversionProgress.current /
//                             conversionProgress.total) *
//                           100
//                         }%`,
//                       }}
//                     />
//                   </div>
//                   <p className="text-xs text-gray-500 dark:text-gray-400">
//                     {conversionProgress.current} از {conversionProgress.total}
//                   </p>
//                 </div>
//               </div>
//             )}
//             {conversionStatus === "completed" && pdfBlob && (
//               <div className="text-center space-y-4">
//                 <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
//                 <p className="text-lg text-gray-700 dark:text-gray-300">
//                   تبدیل با موفقیت انجام شد!
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
//                   <button
//                     onClick={handleDownloadPDF}
//                     className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500/80 text-white rounded-lg font-medium hover:bg-green-500 transition backdrop-blur-sm glass-effect"
//                   >
//                     <Download className="w-5 h-5" />
//                     دانلود PDF
//                   </button>
//                   <button
//                     onClick={resetConverter}
//                     className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
//                   >
//                     <RefreshCw className="w-5 h-5" />
//                     شروع جدید
//                   </button>
//                 </div>
//               </div>
//             )}
//             {conversionStatus === "error" && (
//               <div className="text-center space-y-4">
//                 <AlertCircle className="w-16 h-16 mx-auto text-red-500" />
//                 <p className="text-lg text-red-600 dark:text-red-400">
//                   خطا در تبدیل
//                 </p>
//                 <div className="flex gap-3 justify-center">
//                   <button
//                     onClick={handleConvert}
//                     className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
//                   >
//                     <RefreshCw className="w-5 h-5" />
//                     تلاش مجدد
//                   </button>
//                   <button
//                     onClick={goToPreviousStep}
//                     className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
//                   >
//                     بازگشت
//                   </button>
//                 </div>
//               </div>
//             )}
//             <div className="flex justify-center pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
//               <button
//                 onClick={goToPreviousStep}
//                 className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
//               >
//                 <ChevronRight className="w-4 h-4" />
//                 بازگشت به تنظیمات
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
//components/ImageToPDFConverter.tsx
__turbopack_context__.s([
    "default",
    ()=>ImageToPDFConverter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdfConverter$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdfConverter.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ImagePreview$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ImagePreview.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-image.js [client] (ecmascript) <export default as FileImage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [client] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/core/dist/core.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const initialSettings = {
    orientation: "portrait",
    paperSize: "A4",
    margin: "medium",
    quality: "standard"
};
function ImageToPDFConverter() {
    _s();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("upload");
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(initialSettings);
    const [conversionStatus, setConversionStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [conversionProgress, setConversionProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        current: 0,
        total: 0,
        status: ""
    });
    const [pdfBlob, setPdfBlob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // بهبود سنسورها برای موبایل
    const sensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSensors"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["PointerSensor"], {
        activationConstraint: {
            distance: 5
        }
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["TouchSensor"], {
        activationConstraint: {
            delay: 250,
            tolerance: 5
        }
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["KeyboardSensor"], {
        coordinateGetter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["sortableKeyboardCoordinates"]
    }));
    // Clean up object URLs
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageToPDFConverter.useEffect": ()=>{
            return ({
                "ImageToPDFConverter.useEffect": ()=>{
                    images.forEach({
                        "ImageToPDFConverter.useEffect": (img)=>URL.revokeObjectURL(img.url)
                    }["ImageToPDFConverter.useEffect"]);
                }
            })["ImageToPDFConverter.useEffect"];
        }
    }["ImageToPDFConverter.useEffect"], [
        images
    ]);
    // Handlers
    const handleNameChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageToPDFConverter.useCallback[handleNameChange]": (id, name)=>{
            setImages({
                "ImageToPDFConverter.useCallback[handleNameChange]": (prev)=>prev.map({
                        "ImageToPDFConverter.useCallback[handleNameChange]": (img)=>img.id === id ? {
                                ...img,
                                name
                            } : img
                    }["ImageToPDFConverter.useCallback[handleNameChange]"])
            }["ImageToPDFConverter.useCallback[handleNameChange]"]);
        }
    }["ImageToPDFConverter.useCallback[handleNameChange]"], []);
    const handleDelete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageToPDFConverter.useCallback[handleDelete]": (id)=>{
            setImages({
                "ImageToPDFConverter.useCallback[handleDelete]": (prev)=>{
                    const imageToDelete = prev.find({
                        "ImageToPDFConverter.useCallback[handleDelete].imageToDelete": (img)=>img.id === id
                    }["ImageToPDFConverter.useCallback[handleDelete].imageToDelete"]);
                    if (imageToDelete) {
                        URL.revokeObjectURL(imageToDelete.url);
                    }
                    return prev.filter({
                        "ImageToPDFConverter.useCallback[handleDelete]": (img)=>img.id !== id
                    }["ImageToPDFConverter.useCallback[handleDelete]"]);
                }
            }["ImageToPDFConverter.useCallback[handleDelete]"]);
        }
    }["ImageToPDFConverter.useCallback[handleDelete]"], []);
    const handleMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageToPDFConverter.useCallback[handleMove]": (id, direction)=>{
            setImages({
                "ImageToPDFConverter.useCallback[handleMove]": (prev)=>{
                    const index = prev.findIndex({
                        "ImageToPDFConverter.useCallback[handleMove].index": (img)=>img.id === id
                    }["ImageToPDFConverter.useCallback[handleMove].index"]);
                    if (index === -1) return prev;
                    const newIndex = direction === "up" ? index - 1 : index + 1;
                    if (newIndex < 0 || newIndex >= prev.length) return prev;
                    const updated = [
                        ...prev
                    ];
                    const [moved] = updated.splice(index, 1);
                    updated.splice(newIndex, 0, moved);
                    return updated;
                }
            }["ImageToPDFConverter.useCallback[handleMove]"]);
        }
    }["ImageToPDFConverter.useCallback[handleMove]"], []);
    const handleDragEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageToPDFConverter.useCallback[handleDragEnd]": (event)=>{
            const { active, over } = event;
            if (over && active.id !== over.id) {
                setImages({
                    "ImageToPDFConverter.useCallback[handleDragEnd]": (items)=>{
                        const oldIndex = items.findIndex({
                            "ImageToPDFConverter.useCallback[handleDragEnd].oldIndex": (item)=>item.id === active.id
                        }["ImageToPDFConverter.useCallback[handleDragEnd].oldIndex"]);
                        const newIndex = items.findIndex({
                            "ImageToPDFConverter.useCallback[handleDragEnd].newIndex": (item)=>item.id === over.id
                        }["ImageToPDFConverter.useCallback[handleDragEnd].newIndex"]);
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["arrayMove"])(items, oldIndex, newIndex);
                    }
                }["ImageToPDFConverter.useCallback[handleDragEnd]"]);
            }
        }
    }["ImageToPDFConverter.useCallback[handleDragEnd]"], []);
    const handleFileSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageToPDFConverter.useCallback[handleFileSelect]": (files)=>{
            if (!files) return;
            const newImages = [];
            Array.from(files).forEach({
                "ImageToPDFConverter.useCallback[handleFileSelect]": (file)=>{
                    const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["validateFile"])(file);
                    if (validation.isValid) {
                        const url = URL.createObjectURL(file);
                        newImages.push({
                            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["generateId"])(),
                            url,
                            name: file.name,
                            file
                        });
                    } else {
                        alert(validation.error);
                    }
                }
            }["ImageToPDFConverter.useCallback[handleFileSelect]"]);
            if (newImages.length > 0) {
                setImages({
                    "ImageToPDFConverter.useCallback[handleFileSelect]": (prev)=>[
                            ...prev,
                            ...newImages
                        ]
                }["ImageToPDFConverter.useCallback[handleFileSelect]"]);
            }
        }
    }["ImageToPDFConverter.useCallback[handleFileSelect]"], []);
    const handleFileInputChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageToPDFConverter.useCallback[handleFileInputChange]": (e)=>{
            handleFileSelect(e.target.files);
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    }["ImageToPDFConverter.useCallback[handleFileInputChange]"], [
        handleFileSelect
    ]);
    const handleDragOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageToPDFConverter.useCallback[handleDragOver]": (e)=>{
            e.preventDefault();
            setIsDragging(true);
        }
    }["ImageToPDFConverter.useCallback[handleDragOver]"], []);
    const handleDragLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageToPDFConverter.useCallback[handleDragLeave]": (e)=>{
            e.preventDefault();
            // فقط زمانی که از روی المان اصلی خارج می‌شویم isDragging را false کنیم
            if (e.currentTarget === e.target) {
                setIsDragging(false);
            }
        }
    }["ImageToPDFConverter.useCallback[handleDragLeave]"], []);
    const handleDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageToPDFConverter.useCallback[handleDrop]": (e)=>{
            e.preventDefault();
            setIsDragging(false);
            handleFileSelect(e.dataTransfer.files);
        }
    }["ImageToPDFConverter.useCallback[handleDrop]"], [
        handleFileSelect
    ]);
    const handleAddMoreClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageToPDFConverter.useCallback[handleAddMoreClick]": ()=>{
            var _fileInputRef_current;
            (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();
        }
    }["ImageToPDFConverter.useCallback[handleAddMoreClick]"], []);
    const handleSettingChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageToPDFConverter.useCallback[handleSettingChange]": (key, value)=>{
            setSettings({
                "ImageToPDFConverter.useCallback[handleSettingChange]": (prev)=>({
                        ...prev,
                        [key]: value
                    })
            }["ImageToPDFConverter.useCallback[handleSettingChange]"]);
        }
    }["ImageToPDFConverter.useCallback[handleSettingChange]"], []);
    const handleConvert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageToPDFConverter.useCallback[handleConvert]": async ()=>{
            if (images.length === 0) return;
            setConversionStatus("converting");
            setConversionProgress({
                current: 0,
                total: images.length,
                status: "شروع تبدیل..."
            });
            try {
                const blob = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdfConverter$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["PDFConverter"].convertImagesToPDF(images, settings, setConversionProgress);
                setPdfBlob(blob);
                setConversionStatus("completed");
            } catch (error) {
                console.error("Conversion error:", error);
                setConversionStatus("error");
                alert("خطا در تبدیل. لطفاً دوباره تلاش کنید.");
            }
        }
    }["ImageToPDFConverter.useCallback[handleConvert]"], [
        images,
        settings
    ]);
    const handleDownloadPDF = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageToPDFConverter.useCallback[handleDownloadPDF]": ()=>{
            if (!pdfBlob) return;
            const url = URL.createObjectURL(pdfBlob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "images-to-pdf-".concat(Date.now(), ".pdf");
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }
    }["ImageToPDFConverter.useCallback[handleDownloadPDF]"], [
        pdfBlob
    ]);
    const handleDownloadZIP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageToPDFConverter.useCallback[handleDownloadZIP]": async ()=>{
            if (images.length === 0) return;
            setConversionStatus("converting");
            setConversionProgress({
                current: 0,
                total: images.length,
                status: "در حال ساخت ZIP..."
            });
            try {
                const zipBlob = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdfConverter$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["PDFConverter"].createZipFromImages(images);
                const url = URL.createObjectURL(zipBlob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "images-".concat(Date.now(), ".zip");
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                setConversionStatus("idle");
            } catch (error) {
                console.error("ZIP creation error:", error);
                alert("خطا در ساخت ZIP");
                setConversionStatus("idle");
            }
        }
    }["ImageToPDFConverter.useCallback[handleDownloadZIP]"], [
        images
    ]);
    const goToNextStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageToPDFConverter.useCallback[goToNextStep]": ()=>{
            if (currentStep === "upload" && images.length > 0) setCurrentStep("settings");
            else if (currentStep === "settings") setCurrentStep("convert");
        }
    }["ImageToPDFConverter.useCallback[goToNextStep]"], [
        currentStep,
        images.length
    ]);
    const goToPreviousStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageToPDFConverter.useCallback[goToPreviousStep]": ()=>{
            if (currentStep === "settings") setCurrentStep("upload");
            else if (currentStep === "convert") setCurrentStep("settings");
        }
    }["ImageToPDFConverter.useCallback[goToPreviousStep]"], [
        currentStep
    ]);
    const resetConverter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageToPDFConverter.useCallback[resetConverter]": ()=>{
            images.forEach({
                "ImageToPDFConverter.useCallback[resetConverter]": (img)=>URL.revokeObjectURL(img.url)
            }["ImageToPDFConverter.useCallback[resetConverter]"]);
            setImages([]);
            setSettings(initialSettings);
            setCurrentStep("upload");
            setConversionStatus("idle");
            setPdfBlob(null);
        }
    }["ImageToPDFConverter.useCallback[resetConverter]"], [
        images
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-6 w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6 backdrop-blur-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center flex-1 max-w-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ".concat(currentStep === "upload" ? "bg-primary/20 border-primary/50 text-primary" : images.length > 0 ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400" : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"),
                                children: images.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                    className: "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 4423,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm sm:text-base md:text-lg font-bold",
                                    children: "1"
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 4425,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 4413,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300",
                                children: images.length > 0 ? "چیدمان" : "آپلود"
                            }, void 0, false, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 4430,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                        lineNumber: 4412,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-1 flex-1 transition-colors glass-effect ".concat(currentStep === "settings" || currentStep === "convert" ? "bg-primary/50" : "bg-gray-300/50 dark:bg-gray-600/50")
                    }, void 0, false, {
                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                        lineNumber: 4435,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center flex-1 max-w-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ".concat(currentStep === "settings" ? "bg-primary/20 border-primary/50 text-primary" : currentStep === "convert" ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400" : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"),
                                children: currentStep === "convert" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                    className: "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 4455,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm sm:text-base md:text-lg font-bold",
                                    children: "2"
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 4457,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 4445,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300",
                                children: "تنظیمات"
                            }, void 0, false, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 4462,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                        lineNumber: 4444,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-1 flex-1 transition-colors glass-effect ".concat(currentStep === "convert" ? "bg-primary/50" : "bg-gray-300/50 dark:bg-gray-600/50")
                    }, void 0, false, {
                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                        lineNumber: 4467,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center flex-1 max-w-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ".concat(currentStep === "convert" ? "bg-primary/20 border-primary/50 text-primary" : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm sm:text-base md:text-lg font-bold",
                                    children: "3"
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 4484,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 4477,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300",
                                children: "دانلود"
                            }, void 0, false, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 4486,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                        lineNumber: 4476,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ImageToPDFConverter.tsx",
                lineNumber: 4410,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl shadow-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/20",
                children: [
                    currentStep === "upload" && images.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 sm:space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl sm:text-2xl font-bold text-gray-800 dark:text-white",
                                    children: "آپلود عکس‌ها"
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 4498,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 4497,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-2 border-dashed rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center transition-all backdrop-blur-sm ".concat(isDragging ? "border-primary/50 bg-primary/5" : "border-gray-300/50 dark:border-gray-600/50 bg-white/10 dark:bg-black/10"),
                                onDragOver: handleDragOver,
                                onDragLeave: handleDragLeave,
                                onDrop: handleDrop,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: fileInputRef,
                                        type: "file",
                                        multiple: true,
                                        accept: ".jpg,.jpeg,.png,.webp",
                                        onChange: handleFileInputChange,
                                        className: "hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4513,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-primary mb-2 sm:mb-3 md:mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4521,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white",
                                        children: "عکس‌ها را اینجا بکشید"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4522,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1",
                                        children: "یا"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4525,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            var _fileInputRef_current;
                                            return (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();
                                        },
                                        className: "mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary transition text-sm sm:text-base backdrop-blur-sm glass-effect",
                                        children: "انتخاب از دستگاه"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4528,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-600 dark:text-gray-400 mt-2 sm:mt-3",
                                        children: "JPG, PNG, WEBP • حداکثر 10MB"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4534,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 4503,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                        lineNumber: 4496,
                        columnNumber: 11
                    }, this),
                    currentStep === "upload" && images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 sm:space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl sm:text-2xl font-bold text-gray-800 dark:text-white",
                                        children: "چیدمان عکس‌ها"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4545,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs sm:text-sm text-gray-600 dark:text-gray-400",
                                        children: [
                                            images.length,
                                            " عکس"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4548,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 4544,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["DndContext"], {
                                        sensors: sensors,
                                        collisionDetection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["closestCenter"],
                                        onDragEnd: handleDragEnd,
                                        modifiers: [],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["SortableContext"], {
                                            items: images.map((img)=>img.id),
                                            strategy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["rectSortingStrategy"],
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4",
                                                children: [
                                                    images.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ImagePreview$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                            image: img,
                                                            index: i,
                                                            onNameChange: handleNameChange,
                                                            onDelete: handleDelete,
                                                            onMove: handleMove,
                                                            canMoveUp: i > 0,
                                                            canMoveDown: i < images.length - 1
                                                        }, img.id, false, {
                                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                            lineNumber: 4566,
                                                            columnNumber: 23
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleAddMoreClick,
                                                        className: "aspect-[4/3] border-2 border-dashed border-gray-300/50 dark:border-gray-600/50 rounded-lg flex flex-col items-center justify-center gap-1 sm:gap-2 hover:border-primary/50 hover:bg-primary/5 transition backdrop-blur-sm glass-effect",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                className: "w-6 h-6 sm:w-8 sm:h-8 text-gray-500 dark:text-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 4582,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400",
                                                                children: "افزودن عکس"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 4583,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 4578,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4564,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 4560,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4554,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-gray-300/50 dark:border-gray-600/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs sm:text-sm",
                                                    children: "برای جابجایی: عکس را بکشید یا از دکمه‌ها استفاده کنید"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                    lineNumber: 4593,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4592,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 w-full sm:w-auto",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleAddMoreClick,
                                                        className: "flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition text-sm backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 4603,
                                                                columnNumber: 21
                                                            }, this),
                                                            "افزودن بیشتر"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 4599,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: goToNextStep,
                                                        disabled: images.length === 0,
                                                        className: "flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition text-sm backdrop-blur-sm glass-effect disabled:opacity-50 disabled:cursor-not-allowed",
                                                        children: [
                                                            "ادامه",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 4612,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 4606,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4598,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4591,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 4553,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                        lineNumber: 4543,
                        columnNumber: 11
                    }, this),
                    currentStep === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl sm:text-2xl font-bold text-gray-800 dark:text-white",
                                        children: "تنظیمات PDF"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4624,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs sm:text-sm text-gray-600 dark:text-gray-400",
                                        children: [
                                            images.length,
                                            " عکس"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4627,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 4623,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                        children: "جهت کاغذ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 4635,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: settings.orientation,
                                                        onChange: (e)=>handleSettingChange("orientation", e.target.value),
                                                        className: "w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "portrait",
                                                                children: "عمودی"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 4645,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "landscape",
                                                                children: "افقی"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 4646,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 4638,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4634,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                        children: "سایز کاغذ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 4651,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: settings.paperSize,
                                                        onChange: (e)=>handleSettingChange("paperSize", e.target.value),
                                                        className: "w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "A4",
                                                                children: "A4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 4661,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "A3",
                                                                children: "A3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 4662,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "letter",
                                                                children: "Letter"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 4663,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "legal",
                                                                children: "Legal"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 4664,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 4654,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4650,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4633,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                        children: "حاشیه"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 4671,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: settings.margin,
                                                        onChange: (e)=>handleSettingChange("margin", e.target.value),
                                                        className: "w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "small",
                                                                children: "کوچک"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 4681,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "medium",
                                                                children: "متوسط"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 4682,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "large",
                                                                children: "بزرگ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 4683,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "none",
                                                                children: "بدون حاشیه"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 4684,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 4674,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4670,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                        children: "کیفیت"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 4689,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: settings.quality,
                                                        onChange: (e)=>handleSettingChange("quality", e.target.value),
                                                        className: "w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "low",
                                                                children: "پایین"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 4699,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "standard",
                                                                children: "استاندارد"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 4700,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "high",
                                                                children: "بالا"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 4701,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 4692,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4688,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4669,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 4632,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-300/50 dark:border-gray-600/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: goToPreviousStep,
                                        className: "flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4712,
                                                columnNumber: 17
                                            }, this),
                                            "بازگشت"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4708,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: goToNextStep,
                                        className: "flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect",
                                        children: [
                                            "ادامه به تبدیل",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4720,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4715,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 4707,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                        lineNumber: 4622,
                        columnNumber: 11
                    }, this),
                    currentStep === "convert" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl sm:text-2xl font-bold text-gray-800 dark:text-white",
                                        children: "تبدیل و دانلود"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4730,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs sm:text-sm text-gray-600 dark:text-gray-400",
                                        children: [
                                            images.length,
                                            " عکس"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4733,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 4729,
                                columnNumber: 13
                            }, this),
                            conversionStatus === "idle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__["FileImage"], {
                                        className: "w-16 h-16 mx-auto text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4740,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-gray-700 dark:text-gray-300",
                                        children: [
                                            "آماده برای تبدیل ",
                                            images.length,
                                            " عکس به PDF"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4741,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row gap-3 justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleConvert,
                                                className: "flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 4749,
                                                        columnNumber: 21
                                                    }, this),
                                                    "شروع تبدیل"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4745,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleDownloadZIP,
                                                className: "flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 4756,
                                                        columnNumber: 21
                                                    }, this),
                                                    "دانلود ZIP"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4752,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4744,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 4739,
                                columnNumber: 15
                            }, this),
                            conversionStatus === "converting" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "w-12 h-12 mx-auto text-primary animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4765,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg text-gray-700 dark:text-gray-300",
                                                children: "در حال تبدیل..."
                                            }, void 0, false, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4767,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 dark:text-gray-400",
                                                children: conversionProgress.status
                                            }, void 0, false, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4770,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-primary h-2 rounded-full transition-all duration-300",
                                                    style: {
                                                        width: "".concat(conversionProgress.current / conversionProgress.total * 100, "%")
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                    lineNumber: 4774,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4773,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 dark:text-gray-400",
                                                children: [
                                                    conversionProgress.current,
                                                    " از ",
                                                    conversionProgress.total
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4785,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4766,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 4764,
                                columnNumber: 15
                            }, this),
                            conversionStatus === "completed" && pdfBlob && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                        className: "w-16 h-16 mx-auto text-green-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4794,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-gray-700 dark:text-gray-300",
                                        children: "تبدیل با موفقیت انجام شد!"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4795,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row gap-3 justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleDownloadPDF,
                                                className: "flex items-center justify-center gap-2 px-6 py-3 bg-green-500/80 text-white rounded-lg font-medium hover:bg-green-500 transition backdrop-blur-sm glass-effect",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 4803,
                                                        columnNumber: 21
                                                    }, this),
                                                    "دانلود PDF"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4799,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: resetConverter,
                                                className: "flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 4810,
                                                        columnNumber: 21
                                                    }, this),
                                                    "شروع جدید"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4806,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4798,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 4793,
                                columnNumber: 15
                            }, this),
                            conversionStatus === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "w-16 h-16 mx-auto text-red-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4819,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-red-600 dark:text-red-400",
                                        children: "خطا در تبدیل"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4820,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleConvert,
                                                className: "flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 4828,
                                                        columnNumber: 21
                                                    }, this),
                                                    "تلاش مجدد"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4824,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: goToPreviousStep,
                                                className: "flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300",
                                                children: "بازگشت"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4831,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4823,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 4818,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center pt-4 border-t border-gray-300/50 dark:border-gray-600/50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: goToPreviousStep,
                                    className: "flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 4846,
                                            columnNumber: 17
                                        }, this),
                                        "بازگشت به تنظیمات"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 4842,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 4841,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                        lineNumber: 4728,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ImageToPDFConverter.tsx",
                lineNumber: 4493,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ImageToPDFConverter.tsx",
        lineNumber: 4408,
        columnNumber: 5
    }, this);
}
_s(ImageToPDFConverter, "7ro4EUXhpEzKOh0v+JS+hlhClYA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSensors"]
    ];
});
_c = ImageToPDFConverter;
var _c;
__turbopack_context__.k.register(_c, "ImageToPDFConverter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Hero.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.js [client] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ImageToPDFConverter$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ImageToPDFConverter.tsx [client] (ecmascript)");
"use client";
;
;
;
function Hero(param) {
    let { onUploadClick } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "@container ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex  flex-col-reverse gap-8 px-4 py-12 @[864px]:flex-row @[864px]:items-center @[864px]:py-16 z-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex  flex-col  gap-6 text-center @[864px]:text-right @[864px]:w-1/2 z-30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold leading-tight tracking-[-0.033em] md:text-3xl text-slate-900 dark:text-white",
                                    children: [
                                        "تبدیل ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary",
                                            children: "عکس به PDF"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 19,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 20,
                                            columnNumber: 15
                                        }, this),
                                        "سریع و آسان"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base font-normal leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg max-w-2xl mx-auto @[864px]:mx-0",
                                    children: [
                                        "آپلود کن، مرتب کن، تبدیل کن — به همین سادگی!",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block mt-2 text-sm text-slate-500 dark:text-slate-500",
                                            children: "پشتیبانی از JPG, PNG, WebP • کیفیت بالا • رایگان"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 25,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center @[864px]:justify-start gap-3 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-slate-600 dark:text-slate-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                            className: "w-4 h-4 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "تبدیل فوری"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-slate-600 dark:text-slate-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                            className: "w-4 h-4 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "امن و خصوصی"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-slate-600 dark:text-slate-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                            className: "w-4 h-4 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "واکنش‌گرا"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row justify-center @[864px]:justify-start items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onUploadClick,
                                    className: "group flex items-center justify-center gap-2 min-w-[180px] h-12 px-6 bg-primary text-white rounded-lg font-bold text-base hover:bg-primary/90 transition-colors duration-200 shadow-lg shadow-primary/25",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                            className: "w-4 h-4 group-hover:scale-110 transition-transform duration-200"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "شروع تبدیل رایگان"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors duration-200 py-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "نمایش راهنما"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center @[864px]:justify-start items-center gap-4 text-xs text-slate-500 dark:text-slate-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 text-base font-bold text-primary",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "+۱۰K"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Hero.tsx",
                                                lineNumber: 67,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: "تبدیل موفق"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-px h-6 bg-slate-300 dark:bg-slate-600"
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 text-base font-bold text-primary",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "۱۰۰٪"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Hero.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: "رضایت کاربران"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-px h-6 bg-slate-300 dark:bg-slate-600"
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 text-base font-bold text-primary",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    className: "w-3 h-3 fill-current"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Hero.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "۵"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Hero.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: "امتیاز کاربران"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Hero.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center relative justify-center w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " md:min-w-2xl  dark:bg-slate-800 rounded-xl shadow-lg  overflow-hidden w-full max-w-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ImageToPDFConverter$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Hero.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Hero.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Hero.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/FeaturesSection.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeaturesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
;
function FeaturesSection() {
    const mainFeatures = [
        {
            image: "/images/speed.png",
            title: "تبدیل عکس به PDF با سرعت بالا",
            description: "تبدیل فوری و بدون تأخیر عکس‌های شما به PDF."
        },
        {
            image: "/images/quality.png",
            title: "خروجی PDF با بالاترین کیفیت تصاویر",
            description: "خروجی PDF با همان کیفیت تصویر اصلی بدون هیچ افتی."
        },
        {
            image: "/images/secure.png",
            title: "تبدیل عکس به PDF با امنیت و حفظ حریم خصوصی",
            description: "فایل‌های شما پس از مدت کوتاهی به‌طور خودکار حذف می‌شوند."
        }
    ];
    const featureList = [
        {
            title: "تبدیل عکس به پی دی اف",
            description: "سریع‌ترین روش برای تبدیل هر تصویر به فایل PDF بدون افت کیفیت."
        },
        {
            title: "تبدیل عکس به پی دی اف آنلاین در گوشی",
            description: "بدون نصب برنامه، تنها با مرورگر گوشی عکس را به PDF تبدیل کنید."
        },
        {
            title: "تبدیل چند عکس به یک فایل پی دی اف آنلاین",
            description: "چندین تصویر را انتخاب کنید و یک PDF منظم و مرتب خروجی بگیرید."
        },
        {
            title: "تبدیل عکس به پی دی اف در گوشی سامسونگ",
            description: "کاملاً سازگار با گوشی‌های سامسونگ و مرورگرهای موبایل."
        },
        {
            title: "تبدیل عکس به پی دی اف در آیفون",
            description: "سازگار با Safari — بدون نیاز به برنامه جانبی."
        },
        {
            title: "تبدیل عکس به پی دی اف رایگان",
            description: "بدون هزینه — بدون ساخت حساب — بدون محدودیت."
        },
        {
            title: "تبدیل عکس به PDF آنلاین",
            description: "از هر دستگاهی، فقط با یک کلیک عکس خود را PDF کنید."
        },
        {
            title: "تبدیل چند عکس به PDF",
            description: "چند عکس را در یک فایل PDF ترکیب و مرتب کنید."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "features",
        className: "flex flex-col gap-14 p-4 scroll-mt-24 max-w-6xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                children: mainFeatures.map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center text-center gap-4 p-6 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:shadow-lg transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-50 w-50 items-center justify-center rounded-full bg-primary/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: feature.image,
                                    alt: feature.title,
                                    className: "h-38 w-38 object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/components/FeaturesSection.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/FeaturesSection.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold",
                                children: feature.title
                            }, void 0, false, {
                                fileName: "[project]/components/FeaturesSection.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base text-muted-light dark:text-muted-dark leading-relaxed",
                                children: feature.description
                            }, void 0, false, {
                                fileName: "[project]/components/FeaturesSection.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/components/FeaturesSection.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/FeaturesSection.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold tracking-tight",
                        children: "تبدیل عکس به پی دی اف"
                    }, void 0, false, {
                        fileName: "[project]/components/FeaturesSection.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold tracking-tight",
                        children: "تبدیل چند عکس به یک فایل PDF آنلاین"
                    }, void 0, false, {
                        fileName: "[project]/components/FeaturesSection.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold tracking-tight",
                        children: "تبدیل عکس به PDF (سریع، آنلاین و رایگان)"
                    }, void 0, false, {
                        fileName: "[project]/components/FeaturesSection.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base text-muted-light dark:text-muted-dark max-w-2xl mx-auto leading-relaxed",
                        children: "با Picp به راحتی عکس‌های خود را در کمترین زمان و بدون افت کیفیت به PDF تبدیل کنید. ابزار ما برای موبایل، سامسونگ و آیفون کاملاً بهینه شده است و نیازی به نصب برنامه ندارد."
                    }, void 0, false, {
                        fileName: "[project]/components/FeaturesSection.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/FeaturesSection.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4",
                children: featureList.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-start gap-2 p-5 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:shadow-lg hover:-translate-y-1 transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-primary",
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/components/FeaturesSection.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-light dark:text-muted-dark leading-relaxed",
                                children: item.description
                            }, void 0, false, {
                                fileName: "[project]/components/FeaturesSection.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/components/FeaturesSection.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/FeaturesSection.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/FeaturesSection.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_c = FeaturesSection;
var _c;
__turbopack_context__.k.register(_c, "FeaturesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Footer.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [client] (ecmascript)");
;
;
;
function Footer() {
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        id: "footer",
        className: "w-full  py-8  dark:bg-gray-900 border-t  border-border-light dark:border-border-dark",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container p-4 bg-white mx-auto px-4 rounded-2xl mt-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row justify-between items-center gap-18",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 max-w-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center  text-[#111318] dark:text-black",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold tracking-[-0.015em]",
                                                children: "Picp"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 19,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: " text-primary",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "images/picmatn.png",
                                                    width: 60,
                                                    height: 60,
                                                    alt: "تبدیل عکس به پی دی اف"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 21,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 20,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 18,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1 text-sm text-gray-500 dark:text-gray-400 leading-relaxed",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-medium",
                                            children: "تبدیل عکس به پی‌دی‌اف — سریع، آنلاین و رایگان برای ساخت PDF از تصاویر"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-medium",
                                            children: "تبدیل چند عکس به یک فایل PDF آنلاین — ترکیب و ادغام تصاویر در یک پی‌دی‌اف"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-medium",
                                            children: "تبدیل عکس به PDF با کیفیت بالا — بهترین ابزار تبدیل تصویر به فایل پی‌دی‌اف"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 max-w-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-gray-900 dark:text-white mb-4",
                                    children: "در ارتباط باشید"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300",
                                            href: "https://www.instagram.com/vada_house_of_mobile?igsh=MXFjeTEybTg0dzZ6dQ==",
                                            "aria-label": "اینستاگرام",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "h-5 w-5 text-gray-700 dark:text-gray-300",
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12.017 0C8.396 0 7.988.012 6.756.06 5.526.107 4.704.26 3.982.56c-.78.326-1.443.72-2.106 1.383S.886 3.202.56 3.982C.26 4.704.107 5.526.06 6.756.012 7.988 0 8.396 0 12.017c0 3.62.012 4.028.06 5.26.047 1.23.2 2.052.5 2.774.326.78.72 1.443 1.383 2.106.663.663 1.325 1.057 2.106 1.383.722.3 1.544.453 2.774.5 1.232.048 1.64.06 5.26.06 3.62 0 4.028-.012 5.26-.06 1.23-.047 2.052-.2 2.774-.5.78-.326 1.443-.72 2.106-1.383.663-.663 1.057-1.325 1.383-2.106.3-.722.453-1.544.5-2.774.048-1.232.06-1.64.06-5.26 0-3.62-.012-4.028-.06-5.26-.047-1.23-.2-2.052-.5-2.774-.326-.78-.72-1.443-1.383-2.106S20.798.886 20.018.56C19.296.26 18.474.107 17.244.06 16.012.012 15.604 0 12.017 0zm0 2.158c3.5 0 3.88.008 5.098.056.96.044 1.48.2 1.826.332.457.174.784.382 1.127.725.343.343.551.67.725 1.127.132.346.288.866.332 1.826.048 1.218.056 1.598.056 5.098 0 3.5-.008 3.88-.056 5.098-.044.96-.2 1.48-.332 1.826-.174.457-.382.784-.725 1.127-.343.343-.67.551-1.127.725-.346.132-.866.288-1.826.332-1.218.048-1.598.056-5.098.056-3.5 0-3.88-.008-5.098-.056-.96-.044-1.48-.2-1.826-.332-.457-.174-.784-.382-1.127-.725-.343-.343-.551-.67-.725-1.127-.132-.346-.288-.866-.332-1.826C2.166 15.898 2.158 15.518 2.158 12.017c0-3.5.008-3.88.056-5.098.044-.96.2-1.48.332-1.826.174-.457.382-.784.725-1.127.343-.343.67-.551 1.127-.725.346-.132.866-.288 1.826-.332 1.218-.048 1.598-.056 5.098-.056z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12.017 5.838a6.18 6.18 0 1 0 0 12.36 6.18 6.18 0 0 0 0-12.36zm0 10.18a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "18.406",
                                                        cy: "5.594",
                                                        r: "1.44"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300",
                                            href: "https://t.me/crmapps",
                                            "aria-label": "تلگرام",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "24",
                                                height: "24",
                                                fill: "currentColor",
                                                className: "h-5 w-5 text-gray-700 dark:text-gray-300",
                                                viewBox: "0 0 16 16",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 141,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300",
                                            href: "https://www.linkedin.com/company/vada-house-of-mobile/",
                                            "aria-label": "لینکدین",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "h-5 w-5 text-gray-700 dark:text-gray-300",
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300",
                                            href: "https://api.whatsapp.com/send/?phone=989109838553",
                                            "aria-label": "واتساپ",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "h-5 w-5 text-gray-700 dark:text-gray-300",
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 174,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "https://vada.ir/",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: " w-fit p-3 px-8 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            alt: "Vada Logo",
                                            src: "/images/vada_logo.png",
                                            height: 150,
                                            width: 150,
                                            className: "rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 187,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 dark:text-gray-400",
                        children: [
                            "© ",
                            currentYear,
                            " تبدیل عکس به متن آنلاین . تمامی حقوق محفوظ است."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 200,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Footer.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Footer.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/BackToTopButton/BackToTopButton.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackToTopButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function BackToTopButton() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BackToTopButton.useEffect": ()=>{
            const toggleVisibility = {
                "BackToTopButton.useEffect.toggleVisibility": ()=>{
                    if (window.scrollY > 300) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                }
            }["BackToTopButton.useEffect.toggleVisibility"];
            window.addEventListener("scroll", toggleVisibility);
            return ({
                "BackToTopButton.useEffect": ()=>window.removeEventListener("scroll", toggleVisibility)
            })["BackToTopButton.useEffect"];
        }
    }["BackToTopButton.useEffect"], []);
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: scrollToTop,
        "aria-label": "بازگشت به بالا",
        className: "fixed bottom-6 animate-bounce-custom customers-badge right-6 z-50 p-3 rounded-full bg-primary hover:bg-primary/50 text-white shadow-lg transition-all duration-500 ease-in-out transform ".concat(isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            className: "size-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            }, void 0, false, {
                fileName: "[project]/components/BackToTopButton/BackToTopButton.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/BackToTopButton/BackToTopButton.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/BackToTopButton/BackToTopButton.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(BackToTopButton, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = BackToTopButton;
var _c;
__turbopack_context__.k.register(_c, "BackToTopButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/pages/index.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Hero.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FeaturesSection$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FeaturesSection.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BackToTopButton$2f$BackToTopButton$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BackToTopButton/BackToTopButton.tsx [client] (ecmascript)");
"use client";
;
;
;
;
;
;
function Home() {
    const handleUploadSectionClick = ()=>{
        const uploadSection = document.getElementById("upload-section");
        uploadSection === null || uploadSection === void 0 ? void 0 : uploadSection.scrollIntoView({
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "layout-container flex h-full grow flex-col",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex  flex-1 justify-center py-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "  flex flex-col w-fullflex-1 px-4 md:px-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/pages/index.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-full top-0 min-h-screen mb-2 py-20 left-20 -right-0 overflow-hidden"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                className: "flex flex-col gap-16 md:gap-24 ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        onUploadClick: handleUploadSectionClick
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.tsx",
                                        lineNumber: 31,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        id: "upload-section",
                                        className: "scroll-mt-24"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FeaturesSection$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/pages/index.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/pages/index.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/pages/index.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BackToTopButton$2f$BackToTopButton$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/index.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/pages/index.tsx [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/pages/index.tsx [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if (module.hot) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}),
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/pages/index\" }", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/pages/index.tsx [client] (ecmascript)\" } [client] (ecmascript)");
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__02dbd597._.js.map