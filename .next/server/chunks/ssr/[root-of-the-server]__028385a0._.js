module.exports = [
"[project]/components/Header.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [ssr] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ThemeProvider.tsx [ssr] (ecmascript)");
"use client";
;
;
;
;
function Header() {
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
        className: "sticky top-0 rounded z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-border-light dark:border-border-dark",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between py-4 px-4 md:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 text-text-light dark:text-text-dark",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "size-8 text-primary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                    fill: "none",
                                    viewBox: "0 0 48 48",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                                className: "hidden md:flex items-center gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        className: "flex items-center gap-2 text-sm font-medium text-muted-light dark:text-muted-dark hover:text-primary transition-colors",
                                        href: "#",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        className: "flex items-center gap-2 text-sm font-medium text-muted-light dark:text-muted-dark hover:text-primary transition-colors",
                                        href: "#features",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        className: "flex items-center gap-2 text-sm font-medium text-muted-light dark:text-muted-dark hover:text-primary transition-colors",
                                        href: "#",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: toggleTheme,
                                className: "flex items-center justify-center rounded-lg h-9 w-9 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-muted-light dark:text-muted-dark hover:text-primary hover:border-primary/30 transition-all duration-200",
                                "aria-label": theme === "dark" ? "فعال کردن حالت روشن" : "فعال کردن حالت تاریک",
                                children: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                className: "md:hidden flex items-center justify-center rounded-lg h-9 w-9 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-muted-light dark:text-muted-dark hover:text-primary transition-all duration-200",
                                "aria-label": "منو",
                                children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
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
            isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "md:hidden border-t border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                    className: "flex flex-col p-4 space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                            className: "flex items-center gap-3 py-2 px-3 text-sm font-medium text-muted-light dark:text-muted-dark hover:text-primary hover:bg-surface-light dark:hover:bg-surface-dark rounded-lg transition-colors",
                            href: "#",
                            onClick: ()=>setIsMobileMenuOpen(false),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                            className: "flex items-center gap-3 py-2 px-3 text-sm font-medium text-muted-light dark:text-muted-dark hover:text-primary hover:bg-surface-light dark:hover:bg-surface-dark rounded-lg transition-colors",
                            href: "#features",
                            onClick: ()=>setIsMobileMenuOpen(false),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                            className: "flex items-center gap-3 py-2 px-3 text-sm font-medium text-muted-light dark:text-muted-dark hover:text-primary hover:bg-surface-light dark:hover:bg-surface-dark rounded-lg transition-colors",
                            href: "#",
                            onClick: ()=>setIsMobileMenuOpen(false),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
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
}),
"[externals]/jspdf [external] (jspdf, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("jspdf", () => require("jspdf"));

module.exports = mod;
}),
"[project]/lib/pdfConverter.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/pdfConverter.ts
__turbopack_context__.s([
    "PDFConverter",
    ()=>PDFConverter
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$jspdf__$5b$external$5d$__$28$jspdf$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/jspdf [external] (jspdf, cjs)");
;
class PDFConverter {
    static async convertImagesToPDF(images, settings, onProgress) {
        const pdf = new __TURBOPACK__imported__module__$5b$externals$5d2f$jspdf__$5b$external$5d$__$28$jspdf$2c$__cjs$29$__["default"]({
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
                status: `در حال پردازش ${i + 1} از ${images.length}`
            });
            try {
                // استفاده از File به جای URL
                const base64 = await this.fileToBase64(img.file, settings.quality);
                const dims = await this.getImageDimensionsFromFile(img.file);
                const scaled = this.scaleToFit(dims.width, dims.height, contentW, contentH);
                pdf.addImage(base64, "JPEG", margin + (contentW - scaled.width) / 2, margin + (contentH - scaled.height) / 2, scaled.width, scaled.height);
                if (i < images.length - 1) pdf.addPage();
            } catch (error) {
                console.error(`Error processing ${img.name}:`, error);
                throw new Error(`خطا در پردازش تصویر: ${img.name}`);
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
        const JSZip = (await __turbopack_context__.A("[externals]/jszip [external] (jszip, cjs, async loader)")).default;
        const zip = new JSZip();
        for (const img of images){
            zip.file(img.name, img.file);
        }
        return zip.generateAsync({
            type: "blob"
        });
    }
}
}),
"[externals]/@dnd-kit/sortable [external] (@dnd-kit/sortable, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@dnd-kit/sortable", () => require("@dnd-kit/sortable"));

module.exports = mod;
}),
"[externals]/@dnd-kit/utilities [external] (@dnd-kit/utilities, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@dnd-kit/utilities", () => require("@dnd-kit/utilities"));

module.exports = mod;
}),
"[project]/components/ImagePreview.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [ssr] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [ssr] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hand$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hand.js [ssr] (ecmascript) <export default as Hand>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$sortable__$5b$external$5d$__$2840$dnd$2d$kit$2f$sortable$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@dnd-kit/sortable [external] (@dnd-kit/sortable, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$utilities__$5b$external$5d$__$2840$dnd$2d$kit$2f$utilities$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@dnd-kit/utilities [external] (@dnd-kit/utilities, cjs)");
"use client";
;
;
;
;
function ImagePreview({ image, index, onNameChange, onDelete, onMove, canMoveUp, canMoveDown }) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$sortable__$5b$external$5d$__$2840$dnd$2d$kit$2f$sortable$2c$__cjs$29$__["useSortable"])({
        id: image.id,
        transition: {
            duration: 150,
            easing: "cubic-bezier(0.25, 1, 0.5, 1)"
        }
    });
    const style = {
        transform: __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$utilities__$5b$external$5d$__$2840$dnd$2d$kit$2f$utilities$2c$__cjs$29$__["CSS"].Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.6 : 1,
        zIndex: isDragging ? 999 : 1
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        ref: setNodeRef,
        style: style,
        className: `flex flex-col  gap-2 group relative select-none ${isDragging ? "scale-105 shadow-2xl ring-2 ring-primary/50" : "scale-100 hover:shadow-lg"} transition-all duration-200 bg-white/5 dark:bg-black/5 rounded-xl p-2 backdrop-blur-sm`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                ...attributes,
                ...listeners,
                className: "absolute top-2 left-2 z-20 cursor-grab active:cursor-grabbing",
                onClick: (e)=>e.stopPropagation(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "h-8 w-8 flex items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md opacity-80  hover:opacity-100 hover:bg-black/60 transition-all touch-manipulation",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hand$3e$__["Hand"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute top-2 right-2 z-20 text-xs sm:text-sm font-bold bg-black/60 text-white rounded-full h-6 w-6 flex items-center justify-center  backdrop-blur-sm",
                children: index + 1
            }, void 0, false, {
                fileName: "[project]/components/ImagePreview.tsx",
                lineNumber: 858,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                onClick: (e)=>{
                    e.stopPropagation();
                    onDelete(image.id);
                },
                className: "absolute -top-2 -right-2 z-30 h-7 w-7 rounded-full bg-red-500 text-white  flex items-center justify-center hover:bg-red-600 transition-all shadow-lg active:scale-95",
                title: "حذف",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "w-full aspect-[4/3] min-h-[150px] min-w- bg-center bg-no-repeat bg-cover rounded-lg relative overflow-hidden border border-white/20 shadow-md transition-all group-hover:shadow-lg",
                style: {
                    backgroundImage: `url("${image.url}")`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent  opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity flex items-end justify-center pb-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 bg-black/50 backdrop-blur-lg rounded-xl p-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onMove(image.id, "up");
                                },
                                disabled: !canMoveUp,
                                className: "h-9 w-9 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 active:bg-white/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-95",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onMove(image.id, "down");
                                },
                                disabled: !canMoveDown,
                                className: "h-9 w-9 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 active:bg-white/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-95",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
}),
"[externals]/clsx [external] (clsx, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("clsx", () => require("clsx"));

module.exports = mod;
}),
"[externals]/tailwind-merge [external] (tailwind-merge, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("tailwind-merge");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/lib/utils.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "generateId",
    ()=>generateId,
    "validateFile",
    ()=>validateFile
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/clsx [external] (clsx, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$tailwind$2d$merge__$5b$external$5d$__$28$tailwind$2d$merge$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/tailwind-merge [external] (tailwind-merge, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$tailwind$2d$merge__$5b$external$5d$__$28$tailwind$2d$merge$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$tailwind$2d$merge__$5b$external$5d$__$28$tailwind$2d$merge$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$tailwind$2d$merge__$5b$external$5d$__$28$tailwind$2d$merge$2c$__esm_import$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__cjs$29$__["clsx"])(inputs));
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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/@dnd-kit/core [external] (@dnd-kit/core, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@dnd-kit/core", () => require("@dnd-kit/core"));

module.exports = mod;
}),
"[project]/components/ImageToPDFConverter.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

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
// // // // //   Circle,
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
// // // // //   ArrowUp,
// // // // //   ArrowDown,
// // // // //   X,
// // // // //   Edit2,
// // // // // } from "lucide-react";
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
// // // // //     <div className="flex flex-col gap-8 w-full  mx-auto p-4">
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
// // // // //                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
// // // // //                   {images.map((img, i) => (
// // // // //                     <ImagePreview
// // // // //                       key={img.id}
// // // // //                       image={img}
// // // // //                       index={i}
// // // // //                       onNameChange={handleNameChange}
// // // // //                       onDelete={handleDelete}
// // // // //                       onMove={handleMove}
// // // // //                       canMoveUp={i > 0}
// // // // //                       canMoveDown={i < images.length - 1}
// // // // //                     />
// // // // //                   ))}
// // // // //                   <button
// // // // //                     onClick={handleAddMoreClick}
// // // // //                     className="aspect-[4/3] border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-2 hover:border-blue-500 hover:bg-blue-50 transition"
// // // // //                   >
// // // // //                     <Plus className="w-8 h-8 text-gray-400" />
// // // // //                     <span className="text-sm font-medium text-gray-500">
// // // // //                       افزودن
// // // // //                     </span>
// // // // //                   </button>
// // // // //                 </div>
// // // // //                 <div className="flex justify-end">
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
// // // // //                 className="flex items-center gap-2 px-6 py-3 border rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700"
// // // // //               >
// // // // //                 <ChevronRight className="w-5 h-5" />
// // // // //                 بازگشت
// // // // //               </button>
// // // // //               <button
// // // // //                 onClick={goToNextStep}
// // // // //                 className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
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
// // // // //                     className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
// // // // //                   >
// // // // //                     <Download className="w-5 h-5" />
// // // // //                     دانلود PDF
// // // // //                   </button>
// // // // //                   <button
// // // // //                     onClick={handleDownloadZIP}
// // // // //                     className="flex items-center gap-2 px-6 py-3 border rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700"
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
// // // // //                     className="pxhamber-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700"
// // // // //                   >
// // // // //                     تلاش مجدد
// // // // //                   </button>
// // // // //                   <button
// // // // //                     onClick={goToPreviousStep}
// // // // //                     className="px-6 py-3 border rounded-lg font-medium hover:bg-gray-50"
// // // // //                   >
// // // // //                     بازگشت
// // // // //                   </button>
// // // // //                 </div>
// // // // //               </div>
// // // // //             )}
// // // // //             <div className="flex justify-start">
// // // // //               <button
// // // // //                 onClick={goToPreviousStep}
// // // // //                 className="flex items-center gap-2 px-6 py-3 border rounded-lg font-medium hover:bg-gray-50"
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
// // // //     useSensor(PointerSensor),
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
// // // //     <div className="flex flex-col gap-8 w-full mx-auto p-4">
// // // //       {/* Progress Steps */}
// // // //       <div className="flex justify-center items-center gap-4 md:gap-8">
// // // //         {/* Step 1 */}
// // // //         <div className="flex flex-col items-center">
// // // //           <div
// // // //             className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border-2 ${
// // // //               currentStep === "upload"
// // // //                 ? "bg-blue-600 border-blue-600 text-white"
// // // //                 : images.length > 0
// // // //                 ? "bg-green-500 border-green-500 text-white"
// // // //                 : "border-gray-300 text-gray-500"
// // // //             }`}
// // // //           >
// // // //             {images.length > 0 ? (
// // // //               <CheckCircle className="w-6 h-6" />
// // // //             ) : (
// // // //               <span className="text-lg font-bold">1</span>
// // // //             )}
// // // //           </div>
// // // //           <span className="mt-2 text-sm font-medium">آپلود</span>
// // // //         </div>
// // // //         <div
// // // //           className={`h-1 flex-1 transition-colors ${
// // // //             currentStep === "settings" || currentStep === "convert"
// // // //               ? "bg-blue-600"
// // // //               : "bg-gray-300"
// // // //           }`}
// // // //         />
// // // //         {/* Step 2 */}
// // // //         <div className="flex flex-col items-center">
// // // //           <div
// // // //             className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border-2 ${
// // // //               currentStep === "settings"
// // // //                 ? "bg-blue-600 border-blue-600 text-white"
// // // //                 : currentStep === "convert"
// // // //                 ? "bg-green-500 border-green-500 text-white"
// // // //                 : "border-gray-300 text-gray-500"
// // // //             }`}
// // // //           >
// // // //             {currentStep === "convert" ? (
// // // //               <CheckCircle className="w-6 h-6" />
// // // //             ) : (
// // // //               <span className="text-lg font-bold">2</span>
// // // //             )}
// // // //           </div>
// // // //           <span className="mt-2 text-sm font-medium">تنظیمات</span>
// // // //         </div>
// // // //         <div
// // // //           className={`h-1 flex-1 transition-colors ${
// // // //             currentStep === "convert" ? "bg-blue-600" : "bg-gray-300"
// // // //           }`}
// // // //         />
// // // //         {/* Step 3 */}
// // // //         <div className="flex flex-col items-center">
// // // //           <div
// // // //             className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border-2 ${
// // // //               currentStep === "convert"
// // // //                 ? "bg-blue-600 border-blue-600 text-white"
// // // //                 : "border-gray-300 text-gray-500"
// // // //             }`}
// // // //           >
// // // //             <span className="text-lg font-bold">3</span>
// // // //           </div>
// // // //           <span className="mt-2 text-sm font-medium">دانلود</span>
// // // //         </div>
// // // //       </div>
// // // //       {/* Content */}
// // // //       <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
// // // //         {/* Upload Step */}
// // // //         {currentStep === "upload" && (
// // // //           <div className="space-y-6">
// // // //             <div className="flex items-center justify-between">
// // // //               <h2 className="text-2xl font-bold">آپلود و چیدمان عکس‌ها</h2>
// // // //               <span className="text-sm text-gray-500">{images.length} عکس</span>
// // // //             </div>
// // // //             <div
// // // //               className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
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
// // // //               <Upload className="w-12 h-12 mx-auto text-blue-600 mb-4" />
// // // //               <p className="text-lg font-semibold">عکس‌ها را اینجا بکشید</p>
// // // //               <p className="text-sm text-gray-500 mt-1">یا</p>
// // // //               <button
// // // //                 onClick={() => fileInputRef.current?.click()}
// // // //                 className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
// // // //               >
// // // //                 انتخاب از دستگاه
// // // //               </button>
// // // //               <p className="text-xs text-gray-500 mt-3">
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
// // // //                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
// // // //                     </div>
// // // //                   </SortableContext>
// // // //                 </DndContext>
// // // //                 <div className="flex justify-between items-center">
// // // //                   <button
// // // //                     onClick={handleAddMoreClick}
// // // //                     className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition"
// // // //                   >
// // // //                     <Plus className="w-5 h-5" />
// // // //                     افزودن عکس بیشتر
// // // //                   </button>
// // // //                   <button
// // // //                     onClick={goToNextStep}
// // // //                     className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
// // // //                   >
// // // //                     ادامه
// // // //                     <ChevronLeft className="w-5 h-5" />
// // // //                   </button>
// // // //                 </div>
// // // //               </>
// // // //             )}
// // // //           </div>
// // // //         )}
// // // //         {/* Settings Step */}
// // // //         {currentStep === "settings" && (
// // // //           <div className="space-y-6">
// // // //             <div>
// // // //               <h2 className="text-2xl font-bold">تنظیمات PDF</h2>
// // // //               <p className="text-gray-500">خروجی را سفارشی کنید</p>
// // // //             </div>
// // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
// // // //               <div>
// // // //                 <label className="block font-medium mb-2">جهت صفحه</label>
// // // //                 <select
// // // //                   value={settings.orientation}
// // // //                   onChange={(e) =>
// // // //                     handleSettingChange("orientation", e.target.value)
// // // //                   }
// // // //                   className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
// // // //                 >
// // // //                   <option value="portrait">عمودی</option>
// // // //                   <option value="landscape">افقی</option>
// // // //                 </select>
// // // //               </div>
// // // //               <div>
// // // //                 <label className="block font-medium mb-2">اندازه کاغذ</label>
// // // //                 <select
// // // //                   value={settings.paperSize}
// // // //                   onChange={(e) =>
// // // //                     handleSettingChange("paperSize", e.target.value)
// // // //                   }
// // // //                   className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
// // // //                 >
// // // //                   <option value="A4">A4</option>
// // // //                   <option value="Letter">Letter</option>
// // // //                   <option value="A5">A5</option>
// // // //                 </select>
// // // //               </div>
// // // //               <div>
// // // //                 <label className="block font-medium mb-2">حاشیه</label>
// // // //                 <select
// // // //                   value={settings.margin}
// // // //                   onChange={(e) =>
// // // //                     handleSettingChange("margin", e.target.value)
// // // //                   }
// // // //                   className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
// // // //                 >
// // // //                   <option value="none">بدون حاشیه</option>
// // // //                   <option value="medium">متوسط</option>
// // // //                   <option value="large">زیاد</option>
// // // //                 </select>
// // // //               </div>
// // // //               <div>
// // // //                 <label className="block font-medium mb-2">کیفیت</label>
// // // //                 <select
// // // //                   value={settings.quality}
// // // //                   onChange={(e) =>
// // // //                     handleSettingChange("quality", e.target.value)
// // // //                   }
// // // //                   className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
// // // //                 >
// // // //                   <option value="standard">استاندارد</option>
// // // //                   <option value="high">بالا</option>
// // // //                 </select>
// // // //               </div>
// // // //             </div>
// // // //             <div className="flex justify-between">
// // // //               <button
// // // //                 onClick={goToPreviousStep}
// // // //                 className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition"
// // // //               >
// // // //                 <ChevronRight className="w-5 h-5" />
// // // //                 بازگشت
// // // //               </button>
// // // //               <button
// // // //                 onClick={goToNextStep}
// // // //                 className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
// // // //               >
// // // //                 تبدیل
// // // //                 <ChevronLeft className="w-5 h-5" />
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //         {/* Convert Step */}
// // // //         {currentStep === "convert" && (
// // // //           <div className="space-y-6 text-center">
// // // //             <div>
// // // //               <h2 className="text-2xl font-bold">تبدیل و دانلود</h2>
// // // //               <p className="text-gray-500">کلیک کنید تا PDF ساخته شود</p>
// // // //             </div>
// // // //             <button
// // // //               onClick={handleConvert}
// // // //               disabled={conversionStatus === "converting"}
// // // //               className="flex items-center gap-2 mx-auto px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-bold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
// // // //             >
// // // //               <FileImage className="w-6 h-6" />
// // // //               تبدیل به PDF
// // // //             </button>
// // // //             {conversionStatus === "converting" && (
// // // //               <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl space-y-4">
// // // //                 <Loader2 className="w-12 h-12 mx-auto animate-spin text-blue-600" />
// // // //                 <div className="w-full bg-gray-200 rounded-full h-3">
// // // //                   <div
// // // //                     className="bg-blue-600 h-3 rounded-full transition-all duration-300"
// // // //                     style={{
// // // //                       width: `${
// // // //                         (conversionProgress.current /
// // // //                           conversionProgress.total) *
// // // //                         100
// // // //                       }%`,
// // // //                     }}
// // // //                   />
// // // //                 </div>
// // // //                 <p className="font-bold">{conversionProgress.status}</p>
// // // //                 <p className="text-sm text-gray-500">
// // // //                   {conversionProgress.current} از {conversionProgress.total}
// // // //                 </p>
// // // //               </div>
// // // //             )}
// // // //             {conversionStatus === "completed" && (
// // // //               <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl space-y-4">
// // // //                 <CheckCircle className="w-12 h-12 mx-auto text-green-600" />
// // // //                 <h3 className="text-xl font-bold">PDF با موفقیت ساخته شد!</h3>
// // // //                 <p className="text-gray-600 dark:text-gray-300">
// // // //                   {images.length} صفحه
// // // //                 </p>
// // // //                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
// // // //                   <button
// // // //                     onClick={handleDownloadPDF}
// // // //                     className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
// // // //                   >
// // // //                     <Download className="w-5 h-5" />
// // // //                     دانلود PDF
// // // //                   </button>
// // // //                   <button
// // // //                     onClick={handleDownloadZIP}
// // // //                     className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition"
// // // //                   >
// // // //                     <Folder className="w-5 h-5" />
// // // //                     دانلود ZIP
// // // //                   </button>
// // // //                 </div>
// // // //                 <button
// // // //                   onClick={resetConverter}
// // // //                   className="text-sm text-gray-600 hover:text-gray-800 flex items-center gap-1 mx-auto mt-4"
// // // //                 >
// // // //                   <RefreshCw className="w-4 h-4" />
// // // //                   تبدیل جدید
// // // //                 </button>
// // // //               </div>
// // // //             )}
// // // //             {conversionStatus === "error" && (
// // // //               <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl space-y-4">
// // // //                 <AlertCircle className="w-12 h-12 mx-auto text-red-600" />
// // // //                 <h3 className="text-xl font-bold text-red-600">خطا در تبدیل</h3>
// // // //                 <div className="flex gap-3 justify-center">
// // // //                   <button
// // // //                     onClick={handleConvert}
// // // //                     className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition"
// // // //                   >
// // // //                     تلاش مجدد
// // // //                   </button>
// // // //                   <button
// // // //                     onClick={goToPreviousStep}
// // // //                     className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition"
// // // //                   >
// // // //                     بازگشت
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             )}
// // // //             <div className="flex justify-start">
// // // //               <button
// // // //                 onClick={goToPreviousStep}
// // // //                 className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition"
// // // //               >
// // // //                 <ChevronRight className="w-5 h-5" />
// // // //                 بازگشت
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
// // // // app/components/ImageToPDFConverter.tsx
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
// // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 ${
// // //               currentStep === "upload"
// // //                 ? "bg-blue-600 border-blue-600 text-white"
// // //                 : images.length > 0
// // //                 ? "bg-green-500 border-green-500 text-white"
// // //                 : "border-gray-300 text-gray-500"
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
// // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center">
// // //             آپلود
// // //           </span>
// // //         </div>
// // //         <div
// // //           className={`h-1 flex-1 transition-colors ${
// // //             currentStep === "settings" || currentStep === "convert"
// // //               ? "bg-blue-600"
// // //               : "bg-gray-300"
// // //           }`}
// // //         />
// // //         {/* Step 2 */}
// // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // //           <div
// // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 ${
// // //               currentStep === "settings"
// // //                 ? "bg-blue-600 border-blue-600 text-white"
// // //                 : currentStep === "convert"
// // //                 ? "bg-green-500 border-green-500 text-white"
// // //                 : "border-gray-300 text-gray-500"
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
// // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center">
// // //             تنظیمات
// // //           </span>
// // //         </div>
// // //         <div
// // //           className={`h-1 flex-1 transition-colors ${
// // //             currentStep === "convert" ? "bg-blue-600" : "bg-gray-300"
// // //           }`}
// // //         />
// // //         {/* Step 3 */}
// // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // //           <div
// // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 ${
// // //               currentStep === "convert"
// // //                 ? "bg-blue-600 border-blue-600 text-white"
// // //                 : "border-gray-300 text-gray-500"
// // //             }`}
// // //           >
// // //             <span className="text-sm sm:text-base md:text-lg font-bold">3</span>
// // //           </div>
// // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center">
// // //             دانلود
// // //           </span>
// // //         </div>
// // //       </div>
// // //       {/* Content */}
// // //       <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6">
// // //         {/* Upload Step */}
// // //         {currentStep === "upload" && (
// // //           <div className="space-y-4 sm:space-y-6">
// // //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// // //               <h2 className="text-xl sm:text-2xl font-bold">
// // //                 آپلود و چیدمان عکس‌ها
// // //               </h2>
// // //               <span className="text-xs sm:text-sm text-gray-500">
// // //                 {images.length} عکس
// // //               </span>
// // //             </div>
// // //             <div
// // //               className={`border-2 border-dashed rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 text-center transition-all ${
// // //                 isDragging
// // //                   ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
// // //                   : "border-gray-300 dark:border-gray-600"
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
// // //               <Upload className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-blue-600 mb-2 sm:mb-3 md:mb-4" />
// // //               <p className="text-base sm:text-lg md:text-xl font-semibold">
// // //                 عکس‌ها را اینجا بکشید
// // //               </p>
// // //               <p className="text-xs sm:text-sm text-gray-500 mt-1">یا</p>
// // //               <button
// // //                 onClick={() => fileInputRef.current?.click()}
// // //                 className="mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition text-sm sm:text-base"
// // //               >
// // //                 انتخاب از دستگاه
// // //               </button>
// // //               <p className="text-xs text-gray-500 mt-2 sm:mt-3">
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
// // //                         className="aspect-[4/3] border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-1 sm:gap-2 hover:border-blue-500 hover:bg-blue-50 transition"
// // //                       >
// // //                         <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
// // //                         <span className="text-xs sm:text-sm font-medium text-gray-500">
// // //                           افزودن عکس
// // //                         </span>
// // //                       </button>
// // //                     </div>
// // //                   </SortableContext>
// // //                 </DndContext>
// // //                 <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-gray-200">
// // //                   <div className="flex items-center gap-2 text-sm text-gray-600">
// // //                     <span className="text-xs sm:text-sm">
// // //                       برای جابجایی: عکس را بکشید یا از دکمه‌ها استفاده کنید
// // //                     </span>
// // //                   </div>
// // //                   <div className="flex gap-2 w-full sm:w-auto">
// // //                     <button
// // //                       onClick={handleAddMoreClick}
// // //                       className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition text-sm"
// // //                     >
// // //                       <Plus className="w-4 h-4" />
// // //                       افزودن بیشتر
// // //                     </button>
// // //                     <button
// // //                       onClick={goToNextStep}
// // //                       className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition text-sm"
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
// // //               <h2 className="text-xl sm:text-2xl font-bold">تنظیمات PDF</h2>
// // //               <p className="text-sm sm:text-base text-gray-500">
// // //                 خروجی را سفارشی کنید
// // //               </p>
// // //             </div>
// // //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
// // //               <div>
// // //                 <label className="block font-medium mb-2 text-sm sm:text-base">
// // //                   جهت صفحه
// // //                 </label>
// // //                 <select
// // //                   value={settings.orientation}
// // //                   onChange={(e) =>
// // //                     handleSettingChange("orientation", e.target.value)
// // //                   }
// // //                   className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm sm:text-base"
// // //                 >
// // //                   <option value="portrait">عمودی</option>
// // //                   <option value="landscape">افقی</option>
// // //                 </select>
// // //               </div>
// // //               <div>
// // //                 <label className="block font-medium mb-2 text-sm sm:text-base">
// // //                   اندازه کاغذ
// // //                 </label>
// // //                 <select
// // //                   value={settings.paperSize}
// // //                   onChange={(e) =>
// // //                     handleSettingChange("paperSize", e.target.value)
// // //                   }
// // //                   className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm sm:text-base"
// // //                 >
// // //                   <option value="A4">A4</option>
// // //                   <option value="Letter">Letter</option>
// // //                   <option value="A5">A5</option>
// // //                 </select>
// // //               </div>
// // //               <div>
// // //                 <label className="block font-medium mb-2 text-sm sm:text-base">
// // //                   حاشیه
// // //                 </label>
// // //                 <select
// // //                   value={settings.margin}
// // //                   onChange={(e) =>
// // //                     handleSettingChange("margin", e.target.value)
// // //                   }
// // //                   className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm sm:text-base"
// // //                 >
// // //                   <option value="none">بدون حاشیه</option>
// // //                   <option value="medium">متوسط</option>
// // //                   <option value="large">زیاد</option>
// // //                 </select>
// // //               </div>
// // //               <div>
// // //                 <label className="block font-medium mb-2 text-sm sm:text-base">
// // //                   کیفیت
// // //                 </label>
// // //                 <select
// // //                   value={settings.quality}
// // //                   onChange={(e) =>
// // //                     handleSettingChange("quality", e.target.value)
// // //                   }
// // //                   className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm sm:text-base"
// // //                 >
// // //                   <option value="standard">استاندارد</option>
// // //                   <option value="high">بالا</option>
// // //                 </select>
// // //               </div>
// // //             </div>
// // //             <div className="flex flex-col sm:flex-row justify-between gap-3">
// // //               <button
// // //                 onClick={goToPreviousStep}
// // //                 className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition order-2 sm:order-1"
// // //               >
// // //                 <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
// // //                 بازگشت
// // //               </button>
// // //               <button
// // //                 onClick={goToNextStep}
// // //                 className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition order-1 sm:order-2"
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
// // //               <h2 className="text-xl sm:text-2xl font-bold">تبدیل و دانلود</h2>
// // //               <p className="text-sm sm:text-base text-gray-500">
// // //                 کلیک کنید تا PDF ساخته شود
// // //               </p>
// // //             </div>
// // //             <button
// // //               onClick={handleConvert}
// // //               disabled={conversionStatus === "converting"}
// // //               className="flex items-center justify-center gap-2 mx-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg text-base sm:text-lg font-bold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition w-full sm:w-auto"
// // //             >
// // //               <FileImage className="w-5 h-5 sm:w-6 sm:h-6" />
// // //               تبدیل به PDF
// // //             </button>
// // //             {conversionStatus === "converting" && (
// // //               <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-700 rounded-xl space-y-3 sm:space-y-4">
// // //                 <Loader2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto animate-spin text-blue-600" />
// // //                 <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
// // //                   <div
// // //                     className="bg-blue-600 h-2 sm:h-3 rounded-full transition-all duration-300"
// // //                     style={{
// // //                       width: `${
// // //                         (conversionProgress.current /
// // //                           conversionProgress.total) *
// // //                         100
// // //                       }%`,
// // //                     }}
// // //                   />
// // //                 </div>
// // //                 <p className="font-bold text-sm sm:text-base">
// // //                   {conversionProgress.status}
// // //                 </p>
// // //                 <p className="text-xs sm:text-sm text-gray-500">
// // //                   {conversionProgress.current} از {conversionProgress.total}
// // //                 </p>
// // //               </div>
// // //             )}
// // //             {conversionStatus === "completed" && (
// // //               <div className="p-4 sm:p-6 bg-green-50 dark:bg-green-900/20 rounded-xl space-y-3 sm:space-y-4">
// // //                 <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-green-600" />
// // //                 <h3 className="text-lg sm:text-xl font-bold">
// // //                   PDF با موفقیت ساخته شد!
// // //                 </h3>
// // //                 <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
// // //                   {images.length} صفحه
// // //                 </p>
// // //                 <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
// // //                   <button
// // //                     onClick={handleDownloadPDF}
// // //                     className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition flex-1 sm:flex-none"
// // //                   >
// // //                     <Download className="w-4 h-4 sm:w-5 sm:h-5" />
// // //                     دانلود PDF
// // //                   </button>
// // //                   <button
// // //                     onClick={handleDownloadZIP}
// // //                     className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition flex-1 sm:flex-none"
// // //                   >
// // //                     <Folder className="w-4 h-4 sm:w-5 sm:h-5" />
// // //                     دانلود ZIP
// // //                   </button>
// // //                 </div>
// // //                 <button
// // //                   onClick={resetConverter}
// // //                   className="text-xs sm:text-sm text-gray-600 hover:text-gray-800 flex items-center gap-1 mx-auto mt-2 sm:mt-4"
// // //                 >
// // //                   <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4" />
// // //                   تبدیل جدید
// // //                 </button>
// // //               </div>
// // //             )}
// // //             {conversionStatus === "error" && (
// // //               <div className="p-4 sm:p-6 bg-red-50 dark:bg-red-900/20 rounded-xl space-y-3 sm:space-y-4">
// // //                 <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-red-600" />
// // //                 <h3 className="text-lg sm:text-xl font-bold text-red-600">
// // //                   خطا در تبدیل
// // //                 </h3>
// // //                 <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
// // //                   <button
// // //                     onClick={handleConvert}
// // //                     className="px-4 sm:px-6 py-2 sm:py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition flex-1 sm:flex-none"
// // //                   >
// // //                     تلاش مجدد
// // //                   </button>
// // //                   <button
// // //                     onClick={goToPreviousStep}
// // //                     className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition flex-1 sm:flex-none"
// // //                   >
// // //                     بازگشت
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             )}
// // //             <div className="flex justify-start">
// // //               <button
// // //                 onClick={goToPreviousStep}
// // //                 className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition"
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
// //     <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6">
// //       {/* Progress Steps - Responsive */}
// //       <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
// //         {/* Step 1 */}
// //         <div className="flex flex-col items-center flex-1 max-w-24">
// //           <div
// //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm ${
// //               currentStep === "upload"
// //                 ? "bg-primary border-primary text-white"
// //                 : images.length > 0
// //                 ? "bg-green-500 border-green-500 text-white"
// //                 : "border-border-light dark:border-border-dark text-muted-light dark:text-muted-dark"
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
// //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-text-light dark:text-text-dark">
// //             آپلود
// //           </span>
// //         </div>
// //         <div
// //           className={`h-1 flex-1 transition-colors ${
// //             currentStep === "settings" || currentStep === "convert"
// //               ? "bg-primary"
// //               : "bg-border-light dark:bg-border-dark"
// //           }`}
// //         />
// //         {/* Step 2 */}
// //         <div className="flex flex-col items-center flex-1 max-w-24">
// //           <div
// //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm ${
// //               currentStep === "settings"
// //                 ? "bg-primary border-primary text-white"
// //                 : currentStep === "convert"
// //                 ? "bg-green-500 border-green-500 text-white"
// //                 : "border-border-light dark:border-border-dark text-muted-light dark:text-muted-dark"
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
// //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-text-light dark:text-text-dark">
// //             تنظیمات
// //           </span>
// //         </div>
// //         <div
// //           className={`h-1 flex-1 transition-colors ${
// //             currentStep === "convert"
// //               ? "bg-primary"
// //               : "bg-border-light dark:bg-border-dark"
// //           }`}
// //         />
// //         {/* Step 3 */}
// //         <div className="flex flex-col items-center flex-1 max-w-24">
// //           <div
// //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm ${
// //               currentStep === "convert"
// //                 ? "bg-primary border-primary text-white"
// //                 : "border-border-light dark:border-border-dark text-muted-light dark:text-muted-dark"
// //             }`}
// //           >
// //             <span className="text-sm sm:text-base md:text-lg font-bold">3</span>
// //           </div>
// //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-text-light dark:text-text-dark">
// //             دانلود
// //           </span>
// //         </div>
// //       </div>
// //       {/* Content */}
// //       <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg p-4 sm:p-6 backdrop-blur-sm border border-border-light dark:border-border-dark">
// //         {/* Upload Step */}
// //         {currentStep === "upload" && (
// //           <div className="space-y-4 sm:space-y-6">
// //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// //               <h2 className="text-xl sm:text-2xl font-bold text-text-light dark:text-text-dark">
// //                 آپلود و چیدمان عکس‌ها
// //               </h2>
// //               <span className="text-xs sm:text-sm text-muted-light dark:text-muted-dark">
// //                 {images.length} عکس
// //               </span>
// //             </div>
// //             <div
// //               className={`border-2 border-dashed rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 text-center transition-all backdrop-blur-sm ${
// //                 isDragging
// //                   ? "border-primary bg-background-light dark:bg-background-dark"
// //                   : "border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark"
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
// //               <p className="text-base sm:text-lg md:text-xl font-semibold text-text-light dark:text-text-dark">
// //                 عکس‌ها را اینجا بکشید
// //               </p>
// //               <p className="text-xs sm:text-sm text-muted-light dark:text-muted-dark mt-1">
// //                 یا
// //               </p>
// //               <button
// //                 onClick={() => fileInputRef.current?.click()}
// //                 className="mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition text-sm sm:text-base backdrop-blur-sm"
// //               >
// //                 انتخاب از دستگاه
// //               </button>
// //               <p className="text-xs text-muted-light dark:text-muted-dark mt-2 sm:mt-3">
// //                 JPG, PNG, WEBP • حداکثر 10MB
// //               </p>
// //             </div>
// //             {images.length > 0 && (
// //               <>
// //                 <DndContext
// //                   sensors={sensors}
// //                   collisionDetection={closestCenter}
// //                   onDragEnd={handleDragEnd}
// //                 >
// //                   <SortableContext
// //                     items={images.map((img) => img.id)}
// //                     strategy={rectSortingStrategy}
// //                   >
// //                     <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
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
// //                         className="aspect-[4/3] border-2 border-dashed border-border-light dark:border-border-dark rounded-lg flex flex-col items-center justify-center gap-1 sm:gap-2 hover:border-primary hover:bg-background-light dark:hover:bg-background-dark transition backdrop-blur-sm"
// //                       >
// //                         <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-muted-light dark:text-muted-dark" />
// //                         <span className="text-xs sm:text-sm font-medium text-muted-light dark:text-muted-dark">
// //                           افزودن عکس
// //                         </span>
// //                       </button>
// //                     </div>
// //                   </SortableContext>
// //                 </DndContext>
// //                 <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-border-light dark:border-border-dark">
// //                   <div className="flex items-center gap-2 text-sm text-muted-light dark:text-muted-dark">
// //                     <span className="text-xs sm:text-sm">
// //                       برای جابجایی: عکس را بکشید یا از دکمه‌ها استفاده کنید
// //                     </span>
// //                   </div>
// //                   <div className="flex gap-2 w-full sm:w-auto">
// //                     <button
// //                       onClick={handleAddMoreClick}
// //                       className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-border-light dark:border-border-dark rounded-lg font-medium hover:bg-background-light dark:hover:bg-background-dark transition text-sm backdrop-blur-sm"
// //                     >
// //                       <Plus className="w-4 h-4" />
// //                       افزودن بیشتر
// //                     </button>
// //                     <button
// //                       onClick={goToNextStep}
// //                       className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition text-sm backdrop-blur-sm"
// //                     >
// //                       ادامه
// //                       <ChevronLeft className="w-4 h-4" />
// //                     </button>
// //                   </div>
// //                 </div>
// //               </>
// //             )}
// //           </div>
// //         )}
// //         {/* Settings Step */}
// //         {currentStep === "settings" && (
// //           <div className="space-y-4 sm:space-y-6">
// //             <div>
// //               <h2 className="text-xl sm:text-2xl font-bold text-text-light dark:text-text-dark">
// //                 تنظیمات PDF
// //               </h2>
// //               <p className="text-sm sm:text-base text-muted-light dark:text-muted-dark">
// //                 خروجی را سفارشی کنید
// //               </p>
// //             </div>
// //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 bg-background-light dark:bg-background-dark rounded-xl backdrop-blur-sm">
// //               <div>
// //                 <label className="block font-medium mb-2 text-sm sm:text-base text-text-light dark:text-text-dark">
// //                   جهت صفحه
// //                 </label>
// //                 <select
// //                   value={settings.orientation}
// //                   onChange={(e) =>
// //                     handleSettingChange("orientation", e.target.value)
// //                   }
// //                   className="w-full p-2 sm:p-3 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-sm sm:text-base text-text-light dark:text-text-dark backdrop-blur-sm"
// //                 >
// //                   <option value="portrait">عمودی</option>
// //                   <option value="landscape">افقی</option>
// //                 </select>
// //               </div>
// //               <div>
// //                 <label className="block font-medium mb-2 text-sm sm:text-base text-text-light dark:text-text-dark">
// //                   اندازه کاغذ
// //                 </label>
// //                 <select
// //                   value={settings.paperSize}
// //                   onChange={(e) =>
// //                     handleSettingChange("paperSize", e.target.value)
// //                   }
// //                   className="w-full p-2 sm:p-3 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-sm sm:text-base text-text-light dark:text-text-dark backdrop-blur-sm"
// //                 >
// //                   <option value="A4">A4</option>
// //                   <option value="Letter">Letter</option>
// //                   <option value="A5">A5</option>
// //                 </select>
// //               </div>
// //               <div>
// //                 <label className="block font-medium mb-2 text-sm sm:text-base text-text-light dark:text-text-dark">
// //                   حاشیه
// //                 </label>
// //                 <select
// //                   value={settings.margin}
// //                   onChange={(e) =>
// //                     handleSettingChange("margin", e.target.value)
// //                   }
// //                   className="w-full p-2 sm:p-3 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-sm sm:text-base text-text-light dark:text-text-dark backdrop-blur-sm"
// //                 >
// //                   <option value="none">بدون حاشیه</option>
// //                   <option value="medium">متوسط</option>
// //                   <option value="large">زیاد</option>
// //                 </select>
// //               </div>
// //               <div>
// //                 <label className="block font-medium mb-2 text-sm sm:text-base text-text-light dark:text-text-dark">
// //                   کیفیت
// //                 </label>
// //                 <select
// //                   value={settings.quality}
// //                   onChange={(e) =>
// //                     handleSettingChange("quality", e.target.value)
// //                   }
// //                   className="w-full p-2 sm:p-3 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-sm sm:text-base text-text-light dark:text-text-dark backdrop-blur-sm"
// //                 >
// //                   <option value="standard">استاندارد</option>
// //                   <option value="high">بالا</option>
// //                 </select>
// //               </div>
// //             </div>
// //             <div className="flex flex-col sm:flex-row justify-between gap-3">
// //               <button
// //                 onClick={goToPreviousStep}
// //                 className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-border-light dark:border-border-dark rounded-lg font-medium hover:bg-background-light dark:hover:bg-background-dark transition order-2 sm:order-1 backdrop-blur-sm text-text-light dark:text-text-dark"
// //               >
// //                 <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
// //                 بازگشت
// //               </button>
// //               <button
// //                 onClick={goToNextStep}
// //                 className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition order-1 sm:order-2 backdrop-blur-sm"
// //               >
// //                 تبدیل
// //                 <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
// //               </button>
// //             </div>
// //           </div>
// //         )}
// //         {/* Convert Step */}
// //         {currentStep === "convert" && (
// //           <div className="space-y-4 sm:space-y-6 text-center">
// //             <div>
// //               <h2 className="text-xl sm:text-2xl font-bold text-text-light dark:text-text-dark">
// //                 تبدیل و دانلود
// //               </h2>
// //               <p className="text-sm sm:text-base text-muted-light dark:text-muted-dark">
// //                 کلیک کنید تا PDF ساخته شود
// //               </p>
// //             </div>
// //             <button
// //               onClick={handleConvert}
// //               disabled={conversionStatus === "converting"}
// //               className="flex items-center justify-center gap-2 mx-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-lg text-base sm:text-lg font-bold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition w-full sm:w-auto backdrop-blur-sm"
// //             >
// //               <FileImage className="w-5 h-5 sm:w-6 sm:h-6" />
// //               تبدیل به PDF
// //             </button>
// //             {conversionStatus === "converting" && (
// //               <div className="p-4 sm:p-6 bg-background-light dark:bg-background-dark rounded-xl space-y-3 sm:space-y-4 backdrop-blur-sm">
// //                 <Loader2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto animate-spin text-primary" />
// //                 <div className="w-full bg-border-light dark:bg-border-dark rounded-full h-2 sm:h-3">
// //                   <div
// //                     className="bg-primary h-2 sm:h-3 rounded-full transition-all duration-300"
// //                     style={{
// //                       width: `${
// //                         (conversionProgress.current /
// //                           conversionProgress.total) *
// //                         100
// //                       }%`,
// //                     }}
// //                   />
// //                 </div>
// //                 <p className="font-bold text-sm sm:text-base text-text-light dark:text-text-dark">
// //                   {conversionProgress.status}
// //                 </p>
// //                 <p className="text-xs sm:text-sm text-muted-light dark:text-muted-dark">
// //                   {conversionProgress.current} از {conversionProgress.total}
// //                 </p>
// //               </div>
// //             )}
// //             {conversionStatus === "completed" && (
// //               <div className="p-4 sm:p-6 bg-green-50 dark:bg-green-900/20 rounded-xl space-y-3 sm:space-y-4 backdrop-blur-sm">
// //                 <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-green-600" />
// //                 <h3 className="text-lg sm:text-xl font-bold text-text-light dark:text-text-dark">
// //                   PDF با موفقیت ساخته شد!
// //                 </h3>
// //                 <p className="text-sm sm:text-base text-muted-light dark:text-muted-dark">
// //                   {images.length} صفحه
// //                 </p>
// //                 <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
// //                   <button
// //                     onClick={handleDownloadPDF}
// //                     className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition flex-1 sm:flex-none backdrop-blur-sm"
// //                   >
// //                     <Download className="w-4 h-4 sm:w-5 sm:h-5" />
// //                     دانلود PDF
// //                   </button>
// //                   <button
// //                     onClick={handleDownloadZIP}
// //                     className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-border-light dark:border-border-dark rounded-lg font-medium hover:bg-background-light dark:hover:bg-background-dark transition flex-1 sm:flex-none backdrop-blur-sm text-text-light dark:text-text-dark"
// //                   >
// //                     <Folder className="w-4 h-4 sm:w-5 sm:h-5" />
// //                     دانلود ZIP
// //                   </button>
// //                 </div>
// //                 <button
// //                   onClick={resetConverter}
// //                   className="text-xs sm:text-sm text-muted-light dark:text-muted-dark hover:text-text-light dark:hover:text-text-dark flex items-center gap-1 mx-auto mt-2 sm:mt-4"
// //                 >
// //                   <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4" />
// //                   تبدیل جدید
// //                 </button>
// //               </div>
// //             )}
// //             {conversionStatus === "error" && (
// //               <div className="p-4 sm:p-6 bg-red-50 dark:bg-red-900/20 rounded-xl space-y-3 sm:space-y-4 backdrop-blur-sm">
// //                 <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-red-600" />
// //                 <h3 className="text-lg sm:text-xl font-bold text-red-600">
// //                   خطا در تبدیل
// //                 </h3>
// //                 <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
// //                   <button
// //                     onClick={handleConvert}
// //                     className="px-4 sm:px-6 py-2 sm:py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition flex-1 sm:flex-none backdrop-blur-sm"
// //                   >
// //                     تلاش مجدد
// //                   </button>
// //                   <button
// //                     onClick={goToPreviousStep}
// //                     className="px-4 sm:px-6 py-2 sm:py-3 border border-border-light dark:border-border-dark rounded-lg font-medium hover:bg-background-light dark:hover:bg-background-dark transition flex-1 sm:flex-none backdrop-blur-sm text-text-light dark:text-text-dark"
// //                   >
// //                     بازگشت
// //                   </button>
// //                 </div>
// //               </div>
// //             )}
// //             <div className="flex justify-start">
// //               <button
// //                 onClick={goToPreviousStep}
// //                 className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-border-light dark:border-border-dark rounded-lg font-medium hover:bg-background-light dark:hover:bg-background-dark transition backdrop-blur-sm text-text-light dark:text-text-dark"
// //               >
// //                 <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
// //                 بازگشت
// //               </button>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }
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
//   const sensors = useSensors(
//     useSensor(PointerSensor, {
//       activationConstraint: {
//         distance: 8,
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
//   const handleNameChange = (id: string, name: string) => {
//     setImages((prev) =>
//       prev.map((img) => (img.id === id ? { ...img, name } : img))
//     );
//   };
//   const handleDelete = (id: string) => {
//     setImages((prev) => {
//       const filtered = prev.filter((img) => img.id !== id);
//       URL.revokeObjectURL(prev.find((i) => i.id === id)?.url || "");
//       return filtered;
//     });
//   };
//   const handleMove = (id: string, direction: "up" | "down") => {
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
//   };
//   const handleDragEnd = (event: DragEndEvent) => {
//     const { active, over } = event;
//     if (over && active.id !== over.id) {
//       setImages((items) => {
//         const oldIndex = items.findIndex((item) => item.id === active.id);
//         const newIndex = items.findIndex((item) => item.id === over.id);
//         return arrayMove(items, oldIndex, newIndex);
//       });
//     }
//   };
//   const handleFileSelect = (files: FileList | null) => {
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
//   };
//   const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     handleFileSelect(e.target.files);
//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };
//   const handleDragOver = useCallback((e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragging(true);
//   }, []);
//   const handleDragLeave = useCallback((e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragging(false);
//   }, []);
//   const handleDrop = useCallback((e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragging(false);
//     handleFileSelect(e.dataTransfer.files);
//   }, []);
//   const handleAddMoreClick = () => fileInputRef.current?.click();
//   const handleSettingChange = (key: keyof PDFSettings, value: string) => {
//     setSettings((prev) => ({ ...prev, [key]: value }));
//   };
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
//     a.click();
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
//       a.click();
//       URL.revokeObjectURL(url);
//       setConversionStatus("idle");
//     } catch (error) {
//       alert("خطا در ساخت ZIP");
//       setConversionStatus("idle");
//     }
//   }, [images]);
//   const goToNextStep = () => {
//     if (currentStep === "upload" && images.length > 0)
//       setCurrentStep("settings");
//     else if (currentStep === "settings") setCurrentStep("convert");
//   };
//   const goToPreviousStep = () => {
//     if (currentStep === "settings") setCurrentStep("upload");
//     else if (currentStep === "convert") setCurrentStep("settings");
//   };
//   const resetConverter = () => {
//     images.forEach((img) => URL.revokeObjectURL(img.url));
//     setImages([]);
//     setSettings(initialSettings);
//     setCurrentStep("upload");
//     setConversionStatus("idle");
//     setPdfBlob(null);
//   };
//   return (
//     <div className="flex glass-card flex-col gap-6 w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6">
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
//         <div className="flex flex-col  items-center flex-1 max-w-24">
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
//       <div className="glass-card rounded-2xl shadow-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/20">
//         {/* Upload Step */}
//         {currentStep === "upload" && (
//           <div className="space-y-4 sm:space-y-6">
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
//               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
//                 آپلود و چیدمان عکس‌ها
//               </h2>
//               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
//                 {images.length} عکس
//               </span>
//             </div>
//             <div
//               className={`border-2 border-dashed rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center transition-all backdrop-blur-sm glass-effect ${
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
//                 className="mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition text-sm sm:text-base backdrop-blur-sm glass-effect"
//               >
//                 انتخاب از دستگاه
//               </button>
//               <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 sm:mt-3">
//                 JPG, PNG, WEBP • حداکثر 10MB
//               </p>
//             </div>
//             {images.length > 0 && (
//               <div className="flex flex-col md:flex-row flex-wrap flex-1 items-center justify-center md:justify-start gap-3 sm:gap-4">
//                 <DndContext
//                   sensors={sensors}
//                   collisionDetection={closestCenter}
//                   onDragEnd={handleDragEnd}
//                 >
//                   <SortableContext
//                     items={images.map((img) => img.id)}
//                     strategy={rectSortingStrategy}
//                   >
//                     {/* تغییر در کلاس‌های grid */}
//                     <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
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
//                       className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition text-sm backdrop-blur-sm glass-effect"
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
//       </div>
//     </div>
//   );
// }
// // <div className="flex glass-card flex-col gap-6 w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6">
// //   {/* Progress Steps - Responsive */}
// //   <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
// //     {/* Step 1 */}
// //     <div className="flex flex-col items-center flex-1 max-w-24">
// //       <div
// //         className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// //           currentStep === "upload"
// //             ? "bg-primary/20 border-primary/50 text-primary"
// //             : images.length > 0
// //             ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400"
// //             : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
// //         }`}
// //       >
// //         {images.length > 0 ? (
// //           <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
// //         ) : (
// //           <span className="text-sm sm:text-base md:text-lg font-bold">
// //             1
// //           </span>
// //         )}
// //       </div>
// //       <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// //         آپلود
// //       </span>
// //     </div>
// //     <div
// //       className={`h-1 flex-1 transition-colors glass-effect ${
// //         currentStep === "settings" || currentStep === "convert"
// //           ? "bg-primary/50"
// //           : "bg-gray-300/50 dark:bg-gray-600/50"
// //       }`}
// //     />
// //     {/* Step 2 */}
// //     <div className="flex flex-col  items-center flex-1 max-w-24">
// //       <div
// //         className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// //           currentStep === "settings"
// //             ? "bg-primary/20 border-primary/50 text-primary"
// //             : currentStep === "convert"
// //             ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400"
// //             : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
// //         }`}
// //       >
// //         {currentStep === "convert" ? (
// //           <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
// //         ) : (
// //           <span className="text-sm sm:text-base md:text-lg font-bold">
// //             2
// //           </span>
// //         )}
// //       </div>
// //       <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// //         تنظیمات
// //       </span>
// //     </div>
// //     <div
// //       className={`h-1 flex-1 transition-colors glass-effect ${
// //         currentStep === "convert"
// //           ? "bg-primary/50"
// //           : "bg-gray-300/50 dark:bg-gray-600/50"
// //       }`}
// //     />
// //     {/* Step 3 */}
// //     <div className="flex flex-col items-center flex-1 max-w-24">
// //       <div
// //         className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// //           currentStep === "convert"
// //             ? "bg-primary/20 border-primary/50 text-primary"
// //             : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
// //         }`}
// //       >
// //         <span className="text-sm sm:text-base md:text-lg font-bold">3</span>
// //       </div>
// //       <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// //         دانلود
// //       </span>
// //     </div>
// //   </div>
// //   {/* Content */}
// //   <div className="glass-card rounded-2xl shadow-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/20">
// //     {/* Upload Step */}
// //     {currentStep === "upload" && (
// //       <div className="space-y-4 sm:space-y-6">
// //         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// //           <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// //             آپلود و چیدمان عکس‌ها
// //           </h2>
// //           <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// //             {images.length} عکس
// //           </span>
// //         </div>
// //         <div
// //           className={`border-2 border-dashed rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center transition-all backdrop-blur-sm glass-effect ${
// //             isDragging
// //               ? "border-primary/50 bg-primary/5"
// //               : "border-gray-300/50 dark:border-gray-600/50 bg-white/10 dark:bg-black/10"
// //           }`}
// //           onDragOver={handleDragOver}
// //           onDragLeave={handleDragLeave}
// //           onDrop={handleDrop}
// //         >
// //           <input
// //             ref={fileInputRef}
// //             type="file"
// //             multiple
// //             accept=".jpg,.jpeg,.png,.webp"
// //             onChange={handleFileInputChange}
// //             className="hidden"
// //           />
// //           <Upload className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-primary mb-2 sm:mb-3 md:mb-4" />
// //           <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
// //             عکس‌ها را اینجا بکشید
// //           </p>
// //           <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
// //             یا
// //           </p>
// //           <button
// //             onClick={() => fileInputRef.current?.click()}
// //             className="mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition text-sm sm:text-base backdrop-blur-sm glass-effect"
// //           >
// //             انتخاب از دستگاه
// //           </button>
// //           <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 sm:mt-3">
// //             JPG, PNG, WEBP • حداکثر 10MB
// //           </p>
// //         </div>
// //         {images.length > 0 && (
// //           <>
// //             <DndContext
// //               sensors={sensors}
// //               collisionDetection={closestCenter}
// //               onDragEnd={handleDragEnd}
// //             >
// //               <SortableContext
// //                 items={images.map((img) => img.id)}
// //                 strategy={rectSortingStrategy}
// //               >
// //                 <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
// //                   {images.map((img, i) => (
// //                     <ImagePreview
// //                       key={img.id}
// //                       image={img}
// //                       index={i}
// //                       onNameChange={handleNameChange}
// //                       onDelete={handleDelete}
// //                       onMove={handleMove}
// //                       canMoveUp={i > 0}
// //                       canMoveDown={i < images.length - 1}
// //                     />
// //                   ))}
// //                   {/* Add More Button as last item in grid */}
// //                   <button
// //                     onClick={handleAddMoreClick}
// //                     className="aspect-[4/3] border-2 border-dashed border-gray-300/50 dark:border-gray-600/50 rounded-lg flex flex-col items-center justify-center gap-1 sm:gap-2 hover:border-primary/50 hover:bg-primary/5 transition backdrop-blur-sm glass-effect"
// //                   >
// //                     <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 dark:text-gray-400" />
// //                     <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
// //                       افزودن عکس
// //                     </span>
// //                   </button>
// //                 </div>
// //               </SortableContext>
// //             </DndContext>
// //             <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
// //               <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
// //                 <span className="text-xs sm:text-sm">
// //                   برای جابجایی: عکس را بکشید یا از دکمه‌ها استفاده کنید
// //                 </span>
// //               </div>
// //               <div className="flex gap-2 w-full sm:w-auto">
// //                 <button
// //                   onClick={handleAddMoreClick}
// //                   className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition text-sm backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// //                 >
// //                   <Plus className="w-4 h-4" />
// //                   افزودن بیشتر
// //                 </button>
// //                 <button
// //                   onClick={goToNextStep}
// //                   className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition text-sm backdrop-blur-sm glass-effect"
// //                 >
// //                   ادامه
// //                   <ChevronLeft className="w-4 h-4" />
// //                 </button>
// //               </div>
// //             </div>
// //           </>
// //         )}
// //       </div>
// //     )}
// //     {/* Settings Step */}
// //     {currentStep === "settings" && (
// //       <div className="space-y-4 sm:space-y-6">
// //         <div>
// //           <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// //             تنظیمات PDF
// //           </h2>
// //           <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
// //             خروجی را سفارشی کنید
// //           </p>
// //         </div>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 bg-white/10 dark:bg-black/10 rounded-2xl backdrop-blur-sm glass-effect">
// //           <div>
// //             <label className="block font-medium mb-2 text-sm sm:text-base text-gray-800 dark:text-white">
// //               جهت صفحه
// //             </label>
// //             <select
// //               value={settings.orientation}
// //               onChange={(e) =>
// //                 handleSettingChange("orientation", e.target.value)
// //               }
// //               className="w-full p-2 sm:p-3 rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-white/20 dark:bg-black/20 text-sm sm:text-base text-gray-800 dark:text-white backdrop-blur-sm glass-effect"
// //             >
// //               <option value="portrait">عمودی</option>
// //               <option value="landscape">افقی</option>
// //             </select>
// //           </div>
// //           <div>
// //             <label className="block font-medium mb-2 text-sm sm:text-base text-gray-800 dark:text-white">
// //               اندازه کاغذ
// //             </label>
// //             <select
// //               value={settings.paperSize}
// //               onChange={(e) =>
// //                 handleSettingChange("paperSize", e.target.value)
// //               }
// //               className="w-full p-2 sm:p-3 rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-white/20 dark:bg-black/20 text-sm sm:text-base text-gray-800 dark:text-white backdrop-blur-sm glass-effect"
// //             >
// //               <option value="A4">A4</option>
// //               <option value="Letter">Letter</option>
// //               <option value="A5">A5</option>
// //             </select>
// //           </div>
// //           <div>
// //             <label className="block font-medium mb-2 text-sm sm:text-base text-gray-800 dark:text-white">
// //               حاشیه
// //             </label>
// //             <select
// //               value={settings.margin}
// //               onChange={(e) =>
// //                 handleSettingChange("margin", e.target.value)
// //               }
// //               className="w-full p-2 sm:p-3 rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-white/20 dark:bg-black/20 text-sm sm:text-base text-gray-800 dark:text-white backdrop-blur-sm glass-effect"
// //             >
// //               <option value="none">بدون حاشیه</option>
// //               <option value="medium">متوسط</option>
// //               <option value="large">زیاد</option>
// //             </select>
// //           </div>
// //           <div>
// //             <label className="block font-medium mb-2 text-sm sm:text-base text-gray-800 dark:text-white">
// //               کیفیت
// //             </label>
// //             <select
// //               value={settings.quality}
// //               onChange={(e) =>
// //                 handleSettingChange("quality", e.target.value)
// //               }
// //               className="w-full p-2 sm:p-3 rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-white/20 dark:bg-black/20 text-sm sm:text-base text-gray-800 dark:text-white backdrop-blur-sm glass-effect"
// //             >
// //               <option value="standard">استاندارد</option>
// //               <option value="high">بالا</option>
// //             </select>
// //           </div>
// //         </div>
// //         <div className="flex flex-col sm:flex-row justify-between gap-3">
// //           <button
// //             onClick={goToPreviousStep}
// //             className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition order-2 sm:order-1 backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// //           >
// //             <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
// //             بازگشت
// //           </button>
// //           <button
// //             onClick={goToNextStep}
// //             className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition order-1 sm:order-2 backdrop-blur-sm glass-effect"
// //           >
// //             تبدیل
// //             <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
// //           </button>
// //         </div>
// //       </div>
// //     )}
// //     {/* Convert Step */}
// //     {currentStep === "convert" && (
// //       <div className="space-y-4 sm:space-y-6 text-center">
// //         <div>
// //           <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// //             تبدیل و دانلود
// //           </h2>
// //           <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
// //             کلیک کنید تا PDF ساخته شود
// //           </p>
// //         </div>
// //         <button
// //           onClick={handleConvert}
// //           disabled={conversionStatus === "converting"}
// //           className="flex items-center justify-center gap-2 mx-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary/80 text-white rounded-lg text-base sm:text-lg font-bold hover:bg-primary disabled:opacity-50 disabled:cursor-not-allowed transition w-full sm:w-auto backdrop-blur-sm glass-effect"
// //         >
// //           <FileImage className="w-5 h-5 sm:w-6 sm:h-6" />
// //           تبدیل به PDF
// //         </button>
// //         {conversionStatus === "converting" && (
// //           <div className="p-4 sm:p-6 bg-white/10 dark:bg-black/10 rounded-2xl space-y-3 sm:space-y-4 backdrop-blur-sm glass-effect">
// //             <Loader2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto animate-spin text-primary" />
// //             <div className="w-full bg-gray-300/50 dark:bg-gray-600/50 rounded-full h-2 sm:h-3">
// //               <div
// //                 className="bg-primary h-2 sm:h-3 rounded-full transition-all duration-300"
// //                 style={{
// //                   width: `${
// //                     (conversionProgress.current /
// //                       conversionProgress.total) *
// //                     100
// //                   }%`,
// //                 }}
// //               />
// //             </div>
// //             <p className="font-bold text-sm sm:text-base text-gray-800 dark:text-white">
// //               {conversionProgress.status}
// //             </p>
// //             <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// //               {conversionProgress.current} از {conversionProgress.total}
// //             </p>
// //           </div>
// //         )}
// //         {conversionStatus === "completed" && (
// //           <div className="p-4 sm:p-6 bg-green-500/10 rounded-2xl space-y-3 sm:space-y-4 backdrop-blur-sm glass-effect border border-green-500/20">
// //             <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-green-600 dark:text-green-400" />
// //             <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
// //               PDF با موفقیت ساخته شد!
// //             </h3>
// //             <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
// //               {images.length} صفحه
// //             </p>
// //             <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
// //               <button
// //                 onClick={handleDownloadPDF}
// //                 className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition flex-1 sm:flex-none backdrop-blur-sm glass-effect"
// //               >
// //                 <Download className="w-4 h-4 sm:w-5 sm:h-5" />
// //                 دانلود PDF
// //               </button>
// //               <button
// //                 onClick={handleDownloadZIP}
// //                 className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition flex-1 sm:flex-none backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// //               >
// //                 <Folder className="w-4 h-4 sm:w-5 sm:h-5" />
// //                 دانلود ZIP
// //               </button>
// //             </div>
// //             <button
// //               onClick={resetConverter}
// //               className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white flex items-center gap-1 mx-auto mt-2 sm:mt-4"
// //             >
// //               <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4" />
// //               تبدیل جدید
// //             </button>
// //           </div>
// //         )}
// //         {conversionStatus === "error" && (
// //           <div className="p-4 sm:p-6 bg-red-500/10 rounded-2xl space-y-3 sm:space-y-4 backdrop-blur-sm glass-effect border border-red-500/20">
// //             <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-red-600 dark:text-red-400" />
// //             <h3 className="text-lg sm:text-xl font-bold text-red-600 dark:text-red-400">
// //               خطا در تبدیل
// //             </h3>
// //             <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
// //               <button
// //                 onClick={handleConvert}
// //                 className="px-4 sm:px-6 py-2 sm:py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition flex-1 sm:flex-none backdrop-blur-sm glass-effect"
// //               >
// //                 تلاش مجدد
// //               </button>
// //               <button
// //                 onClick={goToPreviousStep}
// //                 className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition flex-1 sm:flex-none backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// //               >
// //                 بازگشت
// //               </button>
// //             </div>
// //           </div>
// //         )}
// //         <div className="flex justify-start">
// //           <button
// //             onClick={goToPreviousStep}
// //             className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// //           >
// //             <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
// //             بازگشت
// //           </button>
// //         </div>
// //       </div>
// //     )}
// //   </div>
// // </div>
//components/ImageToPDFConverter.tsx
__turbopack_context__.s([
    "default",
    ()=>ImageToPDFConverter
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdfConverter$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdfConverter.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ImagePreview$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ImagePreview.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-image.js [ssr] (ecmascript) <export default as FileImage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [ssr] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@dnd-kit/core [external] (@dnd-kit/core, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$sortable__$5b$external$5d$__$2840$dnd$2d$kit$2f$sortable$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@dnd-kit/sortable [external] (@dnd-kit/sortable, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
"use client";
;
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
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("upload");
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(initialSettings);
    const [conversionStatus, setConversionStatus] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("idle");
    const [conversionProgress, setConversionProgress] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        current: 0,
        total: 0,
        status: ""
    });
    const [pdfBlob, setPdfBlob] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // بهبود سنسورها برای موبایل
    const sensors = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$29$__["useSensors"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$29$__["PointerSensor"], {
        activationConstraint: {
            distance: 5
        }
    }), (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$29$__["TouchSensor"], {
        activationConstraint: {
            delay: 250,
            tolerance: 5
        }
    }), (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$29$__["KeyboardSensor"], {
        coordinateGetter: __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$sortable__$5b$external$5d$__$2840$dnd$2d$kit$2f$sortable$2c$__cjs$29$__["sortableKeyboardCoordinates"]
    }));
    // Clean up object URLs
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        return ()=>{
            images.forEach((img)=>URL.revokeObjectURL(img.url));
        };
    }, [
        images
    ]);
    // Handlers
    const handleNameChange = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((id, name)=>{
        setImages((prev)=>prev.map((img)=>img.id === id ? {
                    ...img,
                    name
                } : img));
    }, []);
    const handleDelete = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((id)=>{
        setImages((prev)=>{
            const imageToDelete = prev.find((img)=>img.id === id);
            if (imageToDelete) {
                URL.revokeObjectURL(imageToDelete.url);
            }
            return prev.filter((img)=>img.id !== id);
        });
    }, []);
    const handleMove = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((id, direction)=>{
        setImages((prev)=>{
            const index = prev.findIndex((img)=>img.id === id);
            if (index === -1) return prev;
            const newIndex = direction === "up" ? index - 1 : index + 1;
            if (newIndex < 0 || newIndex >= prev.length) return prev;
            const updated = [
                ...prev
            ];
            const [moved] = updated.splice(index, 1);
            updated.splice(newIndex, 0, moved);
            return updated;
        });
    }, []);
    const handleDragEnd = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((event)=>{
        const { active, over } = event;
        if (over && active.id !== over.id) {
            setImages((items)=>{
                const oldIndex = items.findIndex((item)=>item.id === active.id);
                const newIndex = items.findIndex((item)=>item.id === over.id);
                return (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$sortable__$5b$external$5d$__$2840$dnd$2d$kit$2f$sortable$2c$__cjs$29$__["arrayMove"])(items, oldIndex, newIndex);
            });
        }
    }, []);
    const handleFileSelect = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((files)=>{
        if (!files) return;
        const newImages = [];
        Array.from(files).forEach((file)=>{
            const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["validateFile"])(file);
            if (validation.isValid) {
                const url = URL.createObjectURL(file);
                newImages.push({
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
                    url,
                    name: file.name,
                    file
                });
            } else {
                alert(validation.error);
            }
        });
        if (newImages.length > 0) {
            setImages((prev)=>[
                    ...prev,
                    ...newImages
                ]);
        }
    }, []);
    const handleFileInputChange = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((e)=>{
        handleFileSelect(e.target.files);
        if (fileInputRef.current) fileInputRef.current.value = "";
    }, [
        handleFileSelect
    ]);
    const handleDragOver = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((e)=>{
        e.preventDefault();
        setIsDragging(true);
    }, []);
    const handleDragLeave = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((e)=>{
        e.preventDefault();
        // فقط زمانی که از روی المان اصلی خارج می‌شویم isDragging را false کنیم
        if (e.currentTarget === e.target) {
            setIsDragging(false);
        }
    }, []);
    const handleDrop = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((e)=>{
        e.preventDefault();
        setIsDragging(false);
        handleFileSelect(e.dataTransfer.files);
    }, [
        handleFileSelect
    ]);
    const handleAddMoreClick = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        fileInputRef.current?.click();
    }, []);
    const handleSettingChange = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((key, value)=>{
        setSettings((prev)=>({
                ...prev,
                [key]: value
            }));
    }, []);
    const handleConvert = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(async ()=>{
        if (images.length === 0) return;
        setConversionStatus("converting");
        setConversionProgress({
            current: 0,
            total: images.length,
            status: "شروع تبدیل..."
        });
        try {
            const blob = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdfConverter$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["PDFConverter"].convertImagesToPDF(images, settings, setConversionProgress);
            setPdfBlob(blob);
            setConversionStatus("completed");
        } catch (error) {
            console.error("Conversion error:", error);
            setConversionStatus("error");
            alert("خطا در تبدیل. لطفاً دوباره تلاش کنید.");
        }
    }, [
        images,
        settings
    ]);
    const handleDownloadPDF = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        if (!pdfBlob) return;
        const url = URL.createObjectURL(pdfBlob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `images-to-pdf-${Date.now()}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, [
        pdfBlob
    ]);
    const handleDownloadZIP = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(async ()=>{
        if (images.length === 0) return;
        setConversionStatus("converting");
        setConversionProgress({
            current: 0,
            total: images.length,
            status: "در حال ساخت ZIP..."
        });
        try {
            const zipBlob = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdfConverter$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["PDFConverter"].createZipFromImages(images);
            const url = URL.createObjectURL(zipBlob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `images-${Date.now()}.zip`;
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
    }, [
        images
    ]);
    const goToNextStep = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        if (currentStep === "upload" && images.length > 0) setCurrentStep("settings");
        else if (currentStep === "settings") setCurrentStep("convert");
    }, [
        currentStep,
        images.length
    ]);
    const goToPreviousStep = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        if (currentStep === "settings") setCurrentStep("upload");
        else if (currentStep === "convert") setCurrentStep("settings");
    }, [
        currentStep
    ]);
    const resetConverter = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        images.forEach((img)=>URL.revokeObjectURL(img.url));
        setImages([]);
        setSettings(initialSettings);
        setCurrentStep("upload");
        setConversionStatus("idle");
        setPdfBlob(null);
    }, [
        images
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "flex  flex-col gap-6 w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6 border-white  border backdrop-blur-sm ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center flex-1 max-w-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: `w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${currentStep === "upload" ? "bg-primary/20 border-primary/50 text-primary" : images.length > 0 ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400" : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"}`,
                                children: images.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                    className: "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 3699,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "text-sm sm:text-base md:text-lg font-bold",
                                    children: "1"
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 3701,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 3689,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300",
                                children: "آپلود"
                            }, void 0, false, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 3706,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                        lineNumber: 3688,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: `h-1 flex-1 transition-colors glass-effect ${currentStep === "settings" || currentStep === "convert" ? "bg-primary/50" : "bg-gray-300/50 dark:bg-gray-600/50"}`
                    }, void 0, false, {
                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                        lineNumber: 3711,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center flex-1 max-w-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: `w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${currentStep === "settings" ? "bg-primary/20 border-primary/50 text-primary" : currentStep === "convert" ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400" : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"}`,
                                children: currentStep === "convert" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                    className: "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 3731,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "text-sm sm:text-base md:text-lg font-bold",
                                    children: "2"
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 3733,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 3721,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300",
                                children: "تنظیمات"
                            }, void 0, false, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 3738,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                        lineNumber: 3720,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: `h-1 flex-1 transition-colors glass-effect ${currentStep === "convert" ? "bg-primary/50" : "bg-gray-300/50 dark:bg-gray-600/50"}`
                    }, void 0, false, {
                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                        lineNumber: 3743,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center flex-1 max-w-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: `w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${currentStep === "convert" ? "bg-primary/20 border-primary/50 text-primary" : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "text-sm sm:text-base md:text-lg font-bold",
                                    children: "3"
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 3760,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 3753,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300",
                                children: "دانلود"
                            }, void 0, false, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 3762,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                        lineNumber: 3752,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ImageToPDFConverter.tsx",
                lineNumber: 3686,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: " rounded-2xl shadow-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/20",
                children: [
                    currentStep === "upload" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "space-y-4 sm:space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        className: "text-xl sm:text-2xl font-bold text-gray-800 dark:text-white",
                                        children: "آپلود و چیدمان عکس‌ها"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 3774,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-xs sm:text-sm text-gray-600 dark:text-gray-400",
                                        children: [
                                            images.length,
                                            " عکس"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 3777,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 3773,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: `border-2 border-dashed rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center transition-all backdrop-blur-sm ${isDragging ? "border-primary/50 bg-primary/5" : "border-gray-300/50 dark:border-gray-600/50 bg-white/10 dark:bg-black/10"}`,
                                onDragOver: handleDragOver,
                                onDragLeave: handleDragLeave,
                                onDrop: handleDrop,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        ref: fileInputRef,
                                        type: "file",
                                        multiple: true,
                                        accept: ".jpg,.jpeg,.png,.webp",
                                        onChange: handleFileInputChange,
                                        className: "hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 3792,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-primary mb-2 sm:mb-3 md:mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 3800,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white",
                                        children: "عکس‌ها را اینجا بکشید"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 3801,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1",
                                        children: "یا"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 3804,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>fileInputRef.current?.click(),
                                        className: "mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary transition text-sm sm:text-base backdrop-blur-sm glass-effect",
                                        children: "انتخاب از دستگاه"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 3807,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-600 dark:text-gray-400 mt-2 sm:mt-3",
                                        children: "JPG, PNG, WEBP • حداکثر 10MB"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 3813,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 3782,
                                columnNumber: 13
                            }, this),
                            images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$29$__["DndContext"], {
                                        sensors: sensors,
                                        collisionDetection: __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$29$__["closestCenter"],
                                        onDragEnd: handleDragEnd,
                                        modifiers: [],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$sortable__$5b$external$5d$__$2840$dnd$2d$kit$2f$sortable$2c$__cjs$29$__["SortableContext"], {
                                            items: images.map((img)=>img.id),
                                            strategy: __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$sortable__$5b$external$5d$__$2840$dnd$2d$kit$2f$sortable$2c$__cjs$29$__["rectSortingStrategy"],
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4",
                                                children: [
                                                    images.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ImagePreview$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            image: img,
                                                            index: i,
                                                            onNameChange: handleNameChange,
                                                            onDelete: handleDelete,
                                                            onMove: handleMove,
                                                            canMoveUp: i > 0,
                                                            canMoveDown: i < images.length - 1
                                                        }, img.id, false, {
                                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                            lineNumber: 3832,
                                                            columnNumber: 25
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        onClick: handleAddMoreClick,
                                                        className: "aspect-[4/3] border-2 border-dashed border-gray-300/50 dark:border-gray-600/50 rounded-lg flex flex-col items-center justify-center gap-1 sm:gap-2 hover:border-primary/50 hover:bg-primary/5 transition backdrop-blur-sm glass-effect",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                className: "w-6 h-6 sm:w-8 sm:h-8 text-gray-500 dark:text-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 3848,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400",
                                                                children: "افزودن عکس"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 3849,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 3844,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 3830,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 3826,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 3820,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-gray-300/50 dark:border-gray-600/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-xs sm:text-sm",
                                                    children: "برای جابجایی: عکس را بکشید یا از دکمه‌ها استفاده کنید"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                    lineNumber: 3859,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 3858,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 w-full sm:w-auto",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        onClick: handleAddMoreClick,
                                                        className: "flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition text-sm backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 3869,
                                                                columnNumber: 23
                                                            }, this),
                                                            "افزودن بیشتر"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 3865,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        onClick: goToNextStep,
                                                        disabled: images.length === 0,
                                                        className: "flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition text-sm backdrop-blur-sm glass-effect disabled:opacity-50 disabled:cursor-not-allowed",
                                                        children: [
                                                            "ادامه",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 3878,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 3872,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 3864,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 3857,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 3819,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                        lineNumber: 3772,
                        columnNumber: 11
                    }, this),
                    currentStep === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        className: "text-xl sm:text-2xl font-bold text-gray-800 dark:text-white",
                                        children: "تنظیمات PDF"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 3891,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-xs sm:text-sm text-gray-600 dark:text-gray-400",
                                        children: [
                                            images.length,
                                            " عکس"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 3894,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 3890,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                        children: "جهت کاغذ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 3902,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                        value: settings.orientation,
                                                        onChange: (e)=>handleSettingChange("orientation", e.target.value),
                                                        className: "w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "portrait",
                                                                children: "عمودی"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 3912,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "landscape",
                                                                children: "افقی"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 3913,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 3905,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 3901,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                        children: "سایز کاغذ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 3918,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                        value: settings.paperSize,
                                                        onChange: (e)=>handleSettingChange("paperSize", e.target.value),
                                                        className: "w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "A4",
                                                                children: "A4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 3928,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "A3",
                                                                children: "A3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 3929,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "letter",
                                                                children: "Letter"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 3930,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "legal",
                                                                children: "Legal"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 3931,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 3921,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 3917,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 3900,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                        children: "حاشیه"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 3938,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                        value: settings.margin,
                                                        onChange: (e)=>handleSettingChange("margin", e.target.value),
                                                        className: "w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "small",
                                                                children: "کوچک"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 3948,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "medium",
                                                                children: "متوسط"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 3949,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "large",
                                                                children: "بزرگ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 3950,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "none",
                                                                children: "بدون حاشیه"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 3951,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 3941,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 3937,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                        children: "کیفیت"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 3956,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                        value: settings.quality,
                                                        onChange: (e)=>handleSettingChange("quality", e.target.value),
                                                        className: "w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "low",
                                                                children: "پایین"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 3966,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "standard",
                                                                children: "استاندارد"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 3967,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                value: "high",
                                                                children: "بالا"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 3968,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 3959,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 3955,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 3936,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 3899,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-300/50 dark:border-gray-600/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: goToPreviousStep,
                                        className: "flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 3979,
                                                columnNumber: 17
                                            }, this),
                                            "بازگشت"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 3975,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: goToNextStep,
                                        className: "flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect",
                                        children: [
                                            "ادامه به تبدیل",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 3987,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 3982,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 3974,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                        lineNumber: 3889,
                        columnNumber: 11
                    }, this),
                    currentStep === "convert" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        className: "text-xl sm:text-2xl font-bold text-gray-800 dark:text-white",
                                        children: "تبدیل و دانلود"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 3997,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-xs sm:text-sm text-gray-600 dark:text-gray-400",
                                        children: [
                                            images.length,
                                            " عکس"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4000,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 3996,
                                columnNumber: 13
                            }, this),
                            conversionStatus === "idle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "text-center space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__["FileImage"], {
                                        className: "w-16 h-16 mx-auto text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4007,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-gray-700 dark:text-gray-300",
                                        children: [
                                            "آماده برای تبدیل ",
                                            images.length,
                                            " عکس به PDF"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4008,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row gap-3 justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: handleConvert,
                                                className: "flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 4016,
                                                        columnNumber: 21
                                                    }, this),
                                                    "شروع تبدیل"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4012,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: handleDownloadZIP,
                                                className: "flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 4023,
                                                        columnNumber: 21
                                                    }, this),
                                                    "دانلود ZIP"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4019,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4011,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 4006,
                                columnNumber: 15
                            }, this),
                            conversionStatus === "converting" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "text-center space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "w-12 h-12 mx-auto text-primary animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4032,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "text-lg text-gray-700 dark:text-gray-300",
                                                children: "در حال تبدیل..."
                                            }, void 0, false, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4034,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 dark:text-gray-400",
                                                children: conversionProgress.status
                                            }, void 0, false, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4037,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "bg-primary h-2 rounded-full transition-all duration-300",
                                                    style: {
                                                        width: `${conversionProgress.current / conversionProgress.total * 100}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                    lineNumber: 4041,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4040,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 dark:text-gray-400",
                                                children: [
                                                    conversionProgress.current,
                                                    " از ",
                                                    conversionProgress.total
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4052,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4033,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 4031,
                                columnNumber: 15
                            }, this),
                            conversionStatus === "completed" && pdfBlob && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "text-center space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                        className: "w-16 h-16 mx-auto text-green-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4061,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-gray-700 dark:text-gray-300",
                                        children: "تبدیل با موفقیت انجام شد!"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4062,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row gap-3 justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: handleDownloadPDF,
                                                className: "flex items-center justify-center gap-2 px-6 py-3 bg-green-500/80 text-white rounded-lg font-medium hover:bg-green-500 transition backdrop-blur-sm glass-effect",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 4070,
                                                        columnNumber: 21
                                                    }, this),
                                                    "دانلود PDF"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4066,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: resetConverter,
                                                className: "flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 4077,
                                                        columnNumber: 21
                                                    }, this),
                                                    "شروع جدید"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4073,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4065,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 4060,
                                columnNumber: 15
                            }, this),
                            conversionStatus === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "text-center space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "w-16 h-16 mx-auto text-red-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4086,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-red-600 dark:text-red-400",
                                        children: "خطا در تبدیل"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4087,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: handleConvert,
                                                className: "flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 4095,
                                                        columnNumber: 21
                                                    }, this),
                                                    "تلاش مجدد"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4091,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: goToPreviousStep,
                                                className: "flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300",
                                                children: "بازگشت"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 4098,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 4090,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 4085,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex justify-center pt-4 border-t border-gray-300/50 dark:border-gray-600/50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: goToPreviousStep,
                                    className: "flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 4113,
                                            columnNumber: 17
                                        }, this),
                                        "بازگشت به تنظیمات"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 4109,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 4108,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                        lineNumber: 3995,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ImageToPDFConverter.tsx",
                lineNumber: 3769,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ImageToPDFConverter.tsx",
        lineNumber: 3684,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/Hero.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.js [ssr] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ImageToPDFConverter$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ImageToPDFConverter.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ImageToPDFConverter$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ImageToPDFConverter$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
"use client";
;
;
;
function Hero({ onUploadClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "@container ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex  flex-col-reverse gap-8 px-4 py-12 @[864px]:flex-row @[864px]:items-center @[864px]:py-16 z-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex  flex-col  gap-6 text-center @[864px]:text-right @[864px]:w-1/2 z-30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold leading-tight tracking-[-0.033em] md:text-3xl text-slate-900 dark:text-white",
                                    children: [
                                        "تبدیل ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-primary",
                                            children: "عکس به PDF"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 19,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-base font-normal leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg max-w-2xl mx-auto @[864px]:mx-0",
                                    children: [
                                        "آپلود کن، مرتب کن، تبدیل کن — به همین سادگی!",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center @[864px]:justify-start gap-3 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-slate-600 dark:text-slate-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                            className: "w-4 h-4 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-slate-600 dark:text-slate-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                            className: "w-4 h-4 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-slate-600 dark:text-slate-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                            className: "w-4 h-4 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row justify-center @[864px]:justify-start items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: onUploadClick,
                                    className: "group flex items-center justify-center gap-2 min-w-[180px] h-12 px-6 bg-primary text-white rounded-lg font-bold text-base hover:bg-primary/90 transition-colors duration-200 shadow-lg shadow-primary/25",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                            className: "w-4 h-4 group-hover:scale-110 transition-transform duration-200"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    className: "flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors duration-200 py-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Hero.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex justify-center @[864px]:justify-start items-center gap-4 text-xs text-slate-500 dark:text-slate-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 text-base font-bold text-primary",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "w-px h-6 bg-slate-300 dark:bg-slate-600"
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 text-base font-bold text-primary",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "w-px h-6 bg-slate-300 dark:bg-slate-600"
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 text-base font-bold text-primary",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    className: "w-3 h-3 fill-current"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Hero.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex items-center relative justify-center w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: " md:min-w-2xl  dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden w-full max-w-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ImageToPDFConverter$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/FeaturesSection.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeaturesSection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        id: "features",
        className: "flex flex-col gap-14 p-4 scroll-mt-24 max-w-6xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                children: mainFeatures.map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center text-center gap-4 p-6 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:shadow-lg transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex h-50 w-50 items-center justify-center rounded-full bg-primary/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold",
                                children: feature.title
                            }, void 0, false, {
                                fileName: "[project]/components/FeaturesSection.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "text-center space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold tracking-tight",
                        children: "تبدیل عکس به پی دی اف"
                    }, void 0, false, {
                        fileName: "[project]/components/FeaturesSection.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold tracking-tight",
                        children: "تبدیل چند عکس به یک فایل PDF آنلاین"
                    }, void 0, false, {
                        fileName: "[project]/components/FeaturesSection.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold tracking-tight",
                        children: "تبدیل عکس به PDF (سریع، آنلاین و رایگان)"
                    }, void 0, false, {
                        fileName: "[project]/components/FeaturesSection.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4",
                children: featureList.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-start gap-2 p-5 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:shadow-lg hover:-translate-y-1 transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-primary",
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/components/FeaturesSection.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
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
}),
"[project]/components/Footer.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
        className: "mt-16 border-t border-border-light dark:border-border-dark py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row justify-between items-center gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                    className: "flex items-center gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                            className: "text-base text-muted-light dark:text-muted-dark hover:text-primary transition-colors",
                            href: "#",
                            children: "شرایط خدمات"
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 6,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                            className: "text-base text-muted-light dark:text-muted-dark hover:text-primary transition-colors",
                            href: "#",
                            children: "حریم خصوصی"
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                            className: "text-base text-muted-light dark:text-muted-dark hover:text-primary transition-colors",
                            href: "#",
                            children: "تماس با ما"
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 5,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: "text-base text-muted-light dark:text-muted-dark",
                    children: "© 2024 Picp. تمام حقوق محفوظ است."
                }, void 0, false, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Footer.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Footer.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/BackToTopButton/BackToTopButton.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackToTopButton
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
"use client";
;
;
function BackToTopButton() {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const toggleVisibility = ()=>{
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return ()=>window.removeEventListener("scroll", toggleVisibility);
    }, []);
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
        onClick: scrollToTop,
        "aria-label": "بازگشت به بالا",
        className: `fixed bottom-6 animate-bounce-custom customers-badge right-6 z-50 p-3 rounded-full bg-primary hover:bg-orange-500 text-white shadow-lg transition-all duration-500 ease-in-out transform ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            className: "size-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
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
}),
"[project]/pages/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Hero.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FeaturesSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FeaturesSection.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BackToTopButton$2f$BackToTopButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BackToTopButton/BackToTopButton.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
        uploadSection?.scrollIntoView({
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "layout-container flex h-full grow flex-col",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex  flex-1 justify-center py-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "  flex flex-col w-fullflex-1 px-4 md:px-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/pages/index.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "absolute w-full top-0 min-h-screen mb-2 py-20 left-20 -right-0 overflow-hidden"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                                className: "flex flex-col gap-16 md:gap-24 ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        onUploadClick: handleUploadSectionClick
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.tsx",
                                        lineNumber: 31,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                        id: "upload-section",
                                        className: "scroll-mt-24"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FeaturesSection$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BackToTopButton$2f$BackToTopButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__028385a0._.js.map