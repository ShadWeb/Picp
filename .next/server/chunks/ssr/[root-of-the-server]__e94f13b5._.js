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

// // lib/pdfConverter.ts
// import { ImageFile, PDFSettings, ConversionProgress } from "@/types";
// import jsPDF from "jspdf";
// export class PDFConverter {
//   static async convertImagesToPDF(
//     images: ImageFile[],
//     settings: PDFSettings,
//     onProgress: (p: ConversionProgress) => void
//   ): Promise<Blob> {
//     const pdf = new jsPDF({
//       orientation: settings.orientation,
//       unit: "mm",
//       format: settings.paperSize.toLowerCase(),
//     });
//     const margin = this.getMargin(settings.margin);
//     const pageSize = pdf.internal.pageSize;
//     const contentW = pageSize.getWidth() - margin * 2;
//     const contentH = pageSize.getHeight() - margin * 2;
//     for (let i = 0; i < images.length; i++) {
//       const img = images[i];
//       onProgress({
//         current: i + 1,
//         total: images.length,
//         status: `در حال پردازش ${i + 1} از ${images.length}`,
//       });
//       try {
//         // استفاده از File به جای URL
//         const base64 = await this.fileToBase64(img.file, settings.quality);
//         const dims = await this.getImageDimensionsFromFile(img.file);
//         const scaled = this.scaleToFit(
//           dims.width,
//           dims.height,
//           contentW,
//           contentH
//         );
//         pdf.addImage(
//           base64,
//           "JPEG",
//           margin + (contentW - scaled.width) / 2,
//           margin + (contentH - scaled.height) / 2,
//           scaled.width,
//           scaled.height
//         );
//         if (i < images.length - 1) pdf.addPage();
//       } catch (error) {
//         console.error(`Error processing ${img.name}:`, error);
//         throw new Error(`خطا در پردازش تصویر: ${img.name}`);
//       }
//     }
//     onProgress({
//       current: images.length,
//       total: images.length,
//       status: "در حال تولید PDF...",
//     });
//     const arrayBuffer = pdf.output("arraybuffer");
//     return new Blob([arrayBuffer], { type: "application/pdf" });
//   }
//   // تبدیل File به Base64
//   private static fileToBase64(file: File, quality: string): Promise<string> {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = () => {
//         const img = new Image();
//         img.onload = () => {
//           const canvas = document.createElement("canvas");
//           const ctx = canvas.getContext("2d")!;
//           canvas.width = img.width;
//           canvas.height = img.height;
//           ctx.drawImage(img, 0, 0);
//           resolve(
//             canvas.toDataURL("image/jpeg", quality === "high" ? 0.95 : 0.8)
//           );
//         };
//         img.onerror = reject;
//         img.src = reader.result as string;
//       };
//       reader.onerror = reject;
//       reader.readAsDataURL(file);
//     });
//   }
//   // گرفتن ابعاد از File
//   private static getImageDimensionsFromFile(
//     file: File
//   ): Promise<{ width: number; height: number }> {
//     return new Promise((resolve, reject) => {
//       const img = new Image();
//       const url = URL.createObjectURL(file);
//       img.onload = () => {
//         URL.revokeObjectURL(url);
//         resolve({ width: img.width, height: img.height });
//       };
//       img.onerror = () => {
//         URL.revokeObjectURL(url);
//         reject();
//       };
//       img.src = url;
//     });
//   }
//   private static scaleToFit(w: number, h: number, maxW: number, maxH: number) {
//     const ratio = Math.min(maxW / w, maxH / h);
//     return { width: w * ratio, height: h * ratio };
//   }
//   private static getMargin(m: string): number {
//     return m === "none" ? 0 : m === "large" ? 20 : 10;
//   }
//   static async createZipFromImages(images: ImageFile[]): Promise<Blob> {
//     const JSZip = (await import("jszip")).default;
//     const zip = new JSZip();
//     for (const img of images) {
//       zip.file(img.name, img.file);
//     }
//     return zip.generateAsync({ type: "blob" });
//   }
// }
// lib/pdfConverter.ts
__turbopack_context__.s([
    "PDFConverter",
    ()=>PDFConverter
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$jspdf__$5b$external$5d$__$28$jspdf$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/jspdf [external] (jspdf, cjs)");
;
class PDFConverter {
    static async convertImagesToPDF(images, settings, onProgress) {
        // بررسی اگر تصویری وجود ندارد
        if (!images || images.length === 0) {
            throw new Error("هیچ تصویری برای تبدیل وجود ندارد");
        }
        const pdf = new __TURBOPACK__imported__module__$5b$externals$5d2f$jspdf__$5b$external$5d$__$28$jspdf$2c$__cjs$29$__["default"]({
            orientation: settings.orientation,
            unit: "mm",
            format: settings.paperSize.toLowerCase()
        });
        const margin = this.getMargin(settings.margin);
        const pageSize = pdf.internal.pageSize;
        const contentW = pageSize.getWidth() - margin * 2;
        const contentH = pageSize.getHeight() - margin * 2;
        let processedCount = 0;
        const validImages = [];
        // فیلتر تصاویر معتبر با استفاده از فایل اصلی
        for(let i = 0; i < images.length; i++){
            const img = images[i];
            try {
                await this.validateImageFile(img.file);
                validImages.push(img);
            } catch (error) {
                console.warn(`تصویر ${img.name} معتبر نیست و نادیده گرفته می‌شود:`, error);
            }
        }
        if (validImages.length === 0) {
            throw new Error("هیچ تصویر معتبری برای تبدیل وجود ندارد");
        }
        for(let i = 0; i < validImages.length; i++){
            const img = validImages[i];
            processedCount++;
            onProgress({
                current: processedCount,
                total: validImages.length,
                status: `در حال پردازش ${processedCount} از ${validImages.length}: ${img.name}`
            });
            try {
                // استفاده مستقیم از فایل به جای URL
                const base64 = await this.fileToBase64(img.file, settings.quality);
                const dims = await this.getImageDimensionsFromFile(img.file);
                const scaled = this.scaleToFit(dims.width, dims.height, contentW, contentH);
                // اگر اولین تصویر نیست، صفحه جدید اضافه کن
                if (i > 0) {
                    pdf.addPage();
                }
                pdf.addImage(base64, "JPEG", margin + (contentW - scaled.width) / 2, margin + (contentH - scaled.height) / 2, scaled.width, scaled.height, `image_${i}`, "MEDIUM");
                // تاخیر کوچک برای جلوگیری از مسدود شدن thread
                await new Promise((resolve)=>setTimeout(resolve, 50));
            } catch (error) {
                console.error(`خطا در پردازش ${img.name}:`, error);
                // اگر تصویر اول خطا داد و تصویر دیگری وجود دارد، ادامه بده
                if (i === 0 && validImages.length > 1) {
                    onProgress({
                        current: processedCount,
                        total: validImages.length,
                        status: `خطا در پردازش ${img.name} - ادامه با تصاویر بعدی`
                    });
                    continue;
                }
                // اگر تنها تصویر خطا داد یا آخرین تصویر خطا داد
                if (validImages.length === 1 || i === validImages.length - 1) {
                    throw new Error(`خطا در پردازش تصویر: ${img.name}`);
                }
            }
        }
        onProgress({
            current: validImages.length,
            total: validImages.length,
            status: "در حال تولید فایل PDF..."
        });
        try {
            // استفاده از روش مطمئن‌تر برای تولید PDF
            const pdfOutput = pdf.output("blob");
            return pdfOutput;
        } catch (error) {
            console.error("خطا در تولید PDF:", error);
            throw new Error("خطا در تولید فایل PDF");
        }
    }
    // تبدیل File به Base64 با استفاده از FileReader
    static fileToBase64(file, quality) {
        return new Promise((resolve, reject)=>{
            const reader = new FileReader();
            reader.onload = (e)=>{
                try {
                    const result = e.target?.result;
                    if (!result) {
                        reject(new Error("Failed to read file"));
                        return;
                    }
                    const img = new Image();
                    img.onload = ()=>{
                        const canvas = document.createElement("canvas");
                        const ctx = canvas.getContext("2d");
                        if (!ctx) {
                            reject(new Error("Canvas context not available"));
                            return;
                        }
                        canvas.width = img.width;
                        canvas.height = img.height;
                        ctx.drawImage(img, 0, 0);
                        // کیفیت بر اساس تنظیمات
                        const qualityLevel = quality === "high" ? 0.9 : quality === "low" ? 0.6 : 0.8;
                        try {
                            const base64 = canvas.toDataURL("image/jpeg", qualityLevel);
                            resolve(base64);
                        } catch (jpegError) {
                            // اگر JPEG خطا داد، از PNG استفاده کن
                            console.warn("JPEG conversion failed, using PNG:", jpegError);
                            const base64 = canvas.toDataURL("image/png");
                            resolve(base64);
                        }
                    };
                    img.onerror = ()=>{
                        reject(new Error("Failed to load image from file"));
                    };
                    img.src = result;
                } catch (error) {
                    reject(error);
                }
            };
            reader.onerror = ()=>{
                reject(new Error("Failed to read file"));
            };
            reader.readAsDataURL(file);
        });
    }
    // گرفتن ابعاد تصویر از File
    static getImageDimensionsFromFile(file) {
        return new Promise((resolve, reject)=>{
            const reader = new FileReader();
            reader.onload = (e)=>{
                const img = new Image();
                img.onload = ()=>{
                    resolve({
                        width: img.width,
                        height: img.height
                    });
                };
                img.onerror = ()=>{
                    reject(new Error("Cannot get image dimensions"));
                };
                img.src = e.target?.result;
            };
            reader.onerror = ()=>{
                reject(new Error("Cannot read file for dimensions"));
            };
            reader.readAsDataURL(file);
        });
    }
    // اعتبارسنجی فایل تصویر
    static async validateImageFile(file) {
        return new Promise((resolve, reject)=>{
            // بررسی اولیه فایل
            if (!file || !file.type.startsWith("image/")) {
                reject(new Error("File is not an image"));
                return;
            }
            // بررسی سایز فایل (حداکثر 20MB)
            if (file.size > 20 * 1024 * 1024) {
                reject(new Error("File size too large"));
                return;
            }
            const reader = new FileReader();
            reader.onload = (e)=>{
                const img = new Image();
                img.onload = ()=>{
                    resolve(true);
                };
                img.onerror = ()=>{
                    reject(new Error("Invalid image file"));
                };
                img.src = e.target?.result;
            };
            reader.onerror = ()=>{
                reject(new Error("Cannot read file"));
            };
            // تایم‌اوت
            const timeout = setTimeout(()=>{
                reject(new Error("Image validation timeout"));
            }, 10000);
            reader.onload = (e)=>{
                clearTimeout(timeout);
                const img = new Image();
                img.onload = ()=>resolve(true);
                img.onerror = ()=>reject(new Error("Invalid image file"));
                img.src = e.target?.result;
            };
            reader.readAsDataURL(file);
        });
    }
    // محاسبه اندازه مناسب برای قرارگیری در صفحه
    static scaleToFit(w, h, maxW, maxH) {
        const ratio = Math.min(maxW / w, maxH / h);
        return {
            width: Math.max(w * ratio, 10),
            height: Math.max(h * ratio, 10)
        };
    }
    // محاسبه حاشیه
    static getMargin(m) {
        const margins = {
            none: 0,
            small: 5,
            medium: 10,
            large: 15
        };
        return margins[m] || margins.medium;
    }
    // ایجاد فایل ZIP از تصاویر
    static async createZipFromImages(images) {
        if (!images || images.length === 0) {
            throw new Error("هیچ تصویری برای فشرده‌سازی وجود ندارد");
        }
        try {
            const JSZip = (await __turbopack_context__.A("[externals]/jszip [external] (jszip, cjs, async loader)")).default;
            const zip = new JSZip();
            for (const img of images){
                // استفاده از فایل اصلی
                zip.file(img.name, img.file);
            }
            return await zip.generateAsync({
                type: "blob",
                compression: "DEFLATE",
                compressionOptions: {
                    level: 6
                }
            });
        } catch (error) {
            console.error("Error creating ZIP:", error);
            throw new Error("خطا در ساخت فایل ZIP");
        }
    }
    // متد کمکی برای بررسی سلامت تصاویر قبل از تبدیل
    static async validateImages(images) {
        const valid = [];
        const invalid = [];
        if (!images || images.length === 0) {
            return {
                valid,
                invalid
            };
        }
        for (const img of images){
            try {
                await this.validateImageFile(img.file);
                valid.push(img);
            } catch (error) {
                console.warn(`Image validation failed for ${img.name}:`, error);
                invalid.push(img.name);
            }
        }
        return {
            valid,
            invalid
        };
    }
    // بررسی محدودیت‌های فنی
    static checkTechnicalLimitations(images) {
        const warnings = [];
        const errors = [];
        if (!images || images.length === 0) {
            errors.push("هیچ تصویری انتخاب نشده است");
            return {
                canProceed: false,
                warnings,
                errors
            };
        }
        // بررسی تعداد تصاویر
        if (images.length > 50) {
            warnings.push("تعداد تصاویر زیاد ممکن است باعث کندی شود");
        }
        // بررسی حجم کل
        const totalSize = images.reduce((sum, img)=>sum + img.file.size, 0);
        if (totalSize > 100 * 1024 * 1024) {
            // 100MB
            warnings.push("حجم کل تصاویر زیاد است");
        }
        // بررسی فرمت‌های پشتیبانی شده
        const supportedFormats = [
            "image/jpeg",
            "image/jpg",
            "image/png",
            "image/webp"
        ];
        const unsupportedImages = images.filter((img)=>!supportedFormats.includes(img.file.type.toLowerCase()));
        if (unsupportedImages.length > 0) {
            warnings.push(`تعداد ${unsupportedImages.length} تصویر با فرمت غیرمعمول وجود دارد`);
        }
        return {
            canProceed: errors.length === 0,
            warnings,
            errors
        };
    }
    // متد جایگزین برای زمانی که URLها از بین رفته‌اند
    static async recreateImageUrls(images) {
        return images.map((img)=>({
                ...img,
                url: URL.createObjectURL(img.file)
            }));
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

// //components/ImagePreview.tsx
// "use client";
// import { ImageFile } from "@/types";
// import { ArrowUp, ArrowDown, Trash2, Hand, GripVertical } from "lucide-react";
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
//   } = useSortable({
//     id: image.id,
//     transition: {
//       duration: 150,
//       easing: "cubic-bezier(0.25, 1, 0.5, 1)",
//     },
//   });
//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//     opacity: isDragging ? 0.6 : 1,
//     zIndex: isDragging ? 999 : 1,
//   };
//   return (
//     <div
//       ref={setNodeRef}
//       style={style}
//       className={`flex flex-col  gap-2 group relative select-none ${
//         isDragging
//           ? "scale-105 shadow-2xl ring-2 ring-primary/50"
//           : "scale-100 hover:shadow-lg"
//       } transition-all duration-200 bg-white/5 dark:bg-black/5 rounded-xl p-2 backdrop-blur-sm`}
//     >
//       {/* Drag Handle - Larger and more accessible on mobile */}
//       <div
//         {...attributes}
//         {...listeners}
//         className="absolute top-2 left-2 z-20 cursor-grab active:cursor-grabbing"
//         onClick={(e) => e.stopPropagation()} // Prevent event bubbling
//       >
//         <div
//           className="h-8 w-8 flex items-center justify-center rounded-full
//           bg-black/40 text-white backdrop-blur-md opacity-80
//           hover:opacity-100 hover:bg-black/60 transition-all
//           touch-manipulation" // Improve touch behavior
//         >
//           <Hand className="w-4 h-4" />
//         </div>
//       </div>
//       {/* Image Number */}
//       <div
//         className="absolute top-2 right-2 z-20 text-xs sm:text-sm font-bold
//         bg-black/60 text-white rounded-full h-6 w-6 flex items-center justify-center
//         backdrop-blur-sm"
//       >
//         {index + 1}
//       </div>
//       {/* Delete Button */}
//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//           onDelete(image.id);
//         }}
//         className="absolute -top-2 -right-2 z-30 h-7 w-7 rounded-full bg-red-500 text-white
//         flex items-center justify-center hover:bg-red-600 transition-all shadow-lg
//         active:scale-95"
//         title="حذف"
//       >
//         <Trash2 className="w-3.5 h-3.5" />
//       </button>
//       {/* Image Container */}
//       <div
//         className="w-full aspect-[4/3] min-h-[150px] min-w- bg-center bg-no-repeat bg-cover rounded-lg relative overflow-hidden
//         border border-white/20 shadow-md transition-all group-hover:shadow-lg"
//         style={{ backgroundImage: `url("${image.url}")` }}
//       >
//         {/* Hover overlay with move buttons */}
//         <div
//           className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
//           opacity-0 group-hover:opacity-100 group-active:opacity-100
//           transition-opacity flex items-end justify-center pb-3"
//         >
//           <div className="flex gap-2 bg-black/50 backdrop-blur-lg rounded-xl p-2">
//             {/* Move Up Button */}
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 onMove(image.id, "up");
//               }}
//               disabled={!canMoveUp}
//               className="h-9 w-9 rounded-full bg-white/20 text-white flex items-center justify-center
//               hover:bg-white/30 active:bg-white/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed
//               active:scale-95"
//             >
//               <ArrowUp className="w-4 h-4" />
//             </button>
//             {/* Move Down Button */}
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 onMove(image.id, "down");
//               }}
//               disabled={!canMoveDown}
//               className="h-9 w-9 rounded-full bg-white/20 text-white flex items-center justify-center
//               hover:bg-white/30 active:bg-white/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed
//               active:scale-95"
//             >
//               <ArrowDown className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* Image Name */}
//       <div className="text-center text-xs sm:text-sm text-gray-600 dark:text-gray-300 truncate px-1">
//         {image.name}
//       </div>
//     </div>
//   );
// }//components/ImagePreview.tsx
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
        className: `flex flex-col gap-2 group relative select-none ${isDragging ? "scale-105 shadow-2xl ring-2 ring-primary/50 rotate-2" : "scale-100 hover:shadow-lg"} transition-all duration-200 bg-white/10 dark:bg-black/10  rounded-xl p-2 backdrop-blur-sm border border-white/10 min-w-[120px]`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                ...attributes,
                ...listeners,
                className: "absolute top-2 left-2 z-20 cursor-grab active:cursor-grabbing touch-manipulation",
                onClick: (e)=>e.stopPropagation(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "h-9 w-9 flex items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md opacity-90  hover:opacity-100 hover:bg-black/80 transition-all active:scale-95 shadow-lg border border-white/20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hand$3e$__["Hand"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/components/ImagePreview.tsx",
                        lineNumber: 222,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ImagePreview.tsx",
                    lineNumber: 216,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ImagePreview.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute top-2 right-2 z-20 text-xs font-bold bg-black/70 text-white rounded-full h-6 w-6 flex items-center justify-center  backdrop-blur-sm border border-white/20",
                children: index + 1
            }, void 0, false, {
                fileName: "[project]/components/ImagePreview.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                onClick: (e)=>{
                    e.stopPropagation();
                    onDelete(image.id);
                },
                className: "absolute -top-2 -right-2 z-30 h-7 w-7 rounded-full bg-red-500 text-white  flex items-center justify-center hover:bg-red-600 transition-all shadow-lg active:scale-95 border border-white/20",
                title: "حذف",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                    className: "w-3.5 h-3.5"
                }, void 0, false, {
                    fileName: "[project]/components/ImagePreview.tsx",
                    lineNumber: 246,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ImagePreview.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                ...attributes,
                ...listeners,
                className: "w-full aspect-[4/3] min-h-[120px]  bg-center bg-no-repeat bg-cover  rounded-lg relative overflow-hidden border-2 border-white/20 shadow-md  transition-all group-hover:shadow-lg cursor-grab active:cursor-grabbing active:border-primary/40 active:scale-95 touch-manipulation",
                style: {
                    backgroundImage: `url("${image.url}")`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent  opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex gap-1 bg-black/60 backdrop-blur-lg rounded-xl z-10 p-1 md:mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onMove(image.id, "up");
                                },
                                disabled: !canMoveUp,
                                className: "h-8 w-8 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 active:bg-white/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 border border-white/20",
                                title: "جابجایی به بالا",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/ImagePreview.tsx",
                                    lineNumber: 278,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ImagePreview.tsx",
                                lineNumber: 267,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onMove(image.id, "down");
                                },
                                disabled: !canMoveDown,
                                className: "h-8 w-8 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 active:bg-white/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 border border-white/20",
                                title: "جابجایی به پایین",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/ImagePreview.tsx",
                                    lineNumber: 293,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ImagePreview.tsx",
                                lineNumber: 282,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ImagePreview.tsx",
                        lineNumber: 265,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ImagePreview.tsx",
                    lineNumber: 260,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ImagePreview.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "text-center text-xs text-gray-700 dark:text-gray-300 truncate px-1 font-medium",
                children: image.name
            }, void 0, false, {
                fileName: "[project]/components/ImagePreview.tsx",
                lineNumber: 307,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ImagePreview.tsx",
        lineNumber: 200,
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

// // // // // //components/ImageToPDFConverter.tsx
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
// // // // //   TouchSensor,
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
// // // // //   const [triggerFileInput, setTriggerFileInput] = useState(false);
// // // // //   const fileInputRef = useRef<HTMLInputElement>(null);
// // // // //   const [isDragging, setIsDragging] = useState(false);
// // // // //   // بهبود سنسورها برای موبایل - تنظیمات بهینه‌تر
// // // // //   const sensors = useSensors(
// // // // //     useSensor(PointerSensor, {
// // // // //       activationConstraint: {
// // // // //         distance: 3,
// // // // //       },
// // // // //     }),
// // // // //     useSensor(TouchSensor, {
// // // // //       activationConstraint: {
// // // // //         delay: 100,
// // // // //         tolerance: 10,
// // // // //       },
// // // // //     }),
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
// // // // //   // Trigger file input when state changes
// // // // //   useEffect(() => {
// // // // //     if (triggerFileInput && fileInputRef.current) {
// // // // //       console.log("🎯 Triggering file input programmatically");
// // // // //       fileInputRef.current.click();
// // // // //       setTriggerFileInput(false);
// // // // //     }
// // // // //   }, [triggerFileInput]);
// // // // //   // Handlers
// // // // //   const handleNameChange = useCallback((id: string, name: string) => {
// // // // //     setImages((prev) =>
// // // // //       prev.map((img) => (img.id === id ? { ...img, name } : img))
// // // // //     );
// // // // //   }, []);
// // // // //   const handleDelete = useCallback((id: string) => {
// // // // //     setImages((prev) => {
// // // // //       const imageToDelete = prev.find((img) => img.id === id);
// // // // //       if (imageToDelete) {
// // // // //         URL.revokeObjectURL(imageToDelete.url);
// // // // //       }
// // // // //       return prev.filter((img) => img.id !== id);
// // // // //     });
// // // // //   }, []);
// // // // //   const handleMove = useCallback((id: string, direction: "up" | "down") => {
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
// // // // //   }, []);
// // // // //   const handleDragEnd = useCallback((event: DragEndEvent) => {
// // // // //     const { active, over } = event;
// // // // //     if (over && active.id !== over.id) {
// // // // //       setImages((items) => {
// // // // //         const oldIndex = items.findIndex((item) => item.id === active.id);
// // // // //         const newIndex = items.findIndex((item) => item.id === over.id);
// // // // //         return arrayMove(items, oldIndex, newIndex);
// // // // //       });
// // // // //     }
// // // // //   }, []);
// // // // //   const handleFileSelect = useCallback((files: FileList | null) => {
// // // // //     if (!files) return;
// // // // //     console.log("📁 Files selected:", files.length);
// // // // //     const newImages: ImageFile[] = [];
// // // // //     Array.from(files).forEach((file) => {
// // // // //       const validation = validateFile(file);
// // // // //       if (validation.isValid) {
// // // // //         const url = URL.createObjectURL(file);
// // // // //         newImages.push({ id: generateId(), url, name: file.name, file });
// // // // //         console.log("✅ Added file:", file.name);
// // // // //       } else {
// // // // //         console.warn("❌ Invalid file:", file.name, validation.error);
// // // // //         alert(validation.error);
// // // // //       }
// // // // //     });
// // // // //     if (newImages.length > 0) {
// // // // //       setImages((prev) => [...prev, ...newImages]);
// // // // //     }
// // // // //   }, []);
// // // // //   const handleFileInputChange = useCallback(
// // // // //     (e: React.ChangeEvent<HTMLInputElement>) => {
// // // // //       console.log("🔄 File input changed");
// // // // //       handleFileSelect(e.target.files);
// // // // //       // Reset the input value to allow selecting the same file again
// // // // //       if (fileInputRef.current) {
// // // // //         fileInputRef.current.value = "";
// // // // //       }
// // // // //     },
// // // // //     [handleFileSelect]
// // // // //   );
// // // // //   const handleDragOver = useCallback((e: React.DragEvent) => {
// // // // //     e.preventDefault();
// // // // //     setIsDragging(true);
// // // // //   }, []);
// // // // //   const handleDragLeave = useCallback((e: React.DragEvent) => {
// // // // //     e.preventDefault();
// // // // //     if (e.currentTarget === e.target) {
// // // // //       setIsDragging(false);
// // // // //     }
// // // // //   }, []);
// // // // //   const handleDrop = useCallback(
// // // // //     (e: React.DragEvent) => {
// // // // //       e.preventDefault();
// // // // //       setIsDragging(false);
// // // // //       handleFileSelect(e.dataTransfer.files);
// // // // //     },
// // // // //     [handleFileSelect]
// // // // //   );
// // // // //   const handleAddMoreClick = useCallback(() => {
// // // // //     console.log("🔘 Add more button clicked");
// // // // //     setTriggerFileInput(true);
// // // // //   }, []);
// // // // //   const handleSettingChange = useCallback(
// // // // //     (key: keyof PDFSettings, value: string) => {
// // // // //       setSettings((prev) => ({ ...prev, [key]: value }));
// // // // //     },
// // // // //     []
// // // // //   );
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
// // // // //     document.body.appendChild(a);
// // // // //     a.click();
// // // // //     document.body.removeChild(a);
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
// // // // //       document.body.appendChild(a);
// // // // //       a.click();
// // // // //       document.body.removeChild(a);
// // // // //       URL.revokeObjectURL(url);
// // // // //       setConversionStatus("idle");
// // // // //     } catch (error) {
// // // // //       console.error("ZIP creation error:", error);
// // // // //       alert("خطا در ساخت ZIP");
// // // // //       setConversionStatus("idle");
// // // // //     }
// // // // //   }, [images]);
// // // // //   const goToNextStep = useCallback(() => {
// // // // //     if (currentStep === "upload" && images.length > 0)
// // // // //       setCurrentStep("settings");
// // // // //     else if (currentStep === "settings") setCurrentStep("convert");
// // // // //   }, [currentStep, images.length]);
// // // // //   const goToPreviousStep = useCallback(() => {
// // // // //     if (currentStep === "settings") setCurrentStep("upload");
// // // // //     else if (currentStep === "convert") setCurrentStep("settings");
// // // // //   }, [currentStep]);
// // // // //   const resetConverter = useCallback(() => {
// // // // //     images.forEach((img) => URL.revokeObjectURL(img.url));
// // // // //     setImages([]);
// // // // //     setSettings(initialSettings);
// // // // //     setCurrentStep("upload");
// // // // //     setConversionStatus("idle");
// // // // //     setPdfBlob(null);
// // // // //   }, [images]);
// // // // //   return (
// // // // //     <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6 backdrop-blur-sm">
// // // // //       {/* Progress Steps - Responsive */}
// // // // //       <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
// // // // //         {/* Step 1 */}
// // // // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // // // //           <div
// // // // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// // // // //               currentStep === "upload"
// // // // //                 ? "bg-primary/20 border-primary/50 text-primary"
// // // // //                 : images.length > 0
// // // // //                 ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400"
// // // // //                 : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
// // // // //             }`}
// // // // //           >
// // // // //             {images.length > 0 ? (
// // // // //               <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
// // // // //             ) : (
// // // // //               <span className="text-sm sm:text-base md:text-lg font-bold">
// // // // //                 1
// // // // //               </span>
// // // // //             )}
// // // // //           </div>
// // // // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// // // // //             {images.length > 0 ? "چیدمان" : "آپلود"}
// // // // //           </span>
// // // // //         </div>
// // // // //         <div
// // // // //           className={`h-1 flex-1 transition-colors glass-effect ${
// // // // //             currentStep === "settings" || currentStep === "convert"
// // // // //               ? "bg-primary/50"
// // // // //               : "bg-gray-300/50 dark:bg-gray-600/50"
// // // // //           }`}
// // // // //         />
// // // // //         {/* Step 2 */}
// // // // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // // // //           <div
// // // // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// // // // //               currentStep === "settings"
// // // // //                 ? "bg-primary/20 border-primary/50 text-primary"
// // // // //                 : currentStep === "convert"
// // // // //                 ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400"
// // // // //                 : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
// // // // //             }`}
// // // // //           >
// // // // //             {currentStep === "convert" ? (
// // // // //               <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
// // // // //             ) : (
// // // // //               <span className="text-sm sm:text-base md:text-lg font-bold">
// // // // //                 2
// // // // //               </span>
// // // // //             )}
// // // // //           </div>
// // // // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// // // // //             تنظیمات
// // // // //           </span>
// // // // //         </div>
// // // // //         <div
// // // // //           className={`h-1 flex-1 transition-colors glass-effect ${
// // // // //             currentStep === "convert"
// // // // //               ? "bg-primary/50"
// // // // //               : "bg-gray-300/50 dark:bg-gray-600/50"
// // // // //           }`}
// // // // //         />
// // // // //         {/* Step 3 */}
// // // // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // // // //           <div
// // // // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// // // // //               currentStep === "convert"
// // // // //                 ? "bg-primary/20 border-primary/50 text-primary"
// // // // //                 : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
// // // // //             }`}
// // // // //           >
// // // // //             <span className="text-sm sm:text-base md:text-lg font-bold">3</span>
// // // // //           </div>
// // // // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// // // // //             دانلود
// // // // //           </span>
// // // // //         </div>
// // // // //       </div>
// // // // //       {/* Content */}
// // // // //       <div className="rounded-2xl shadow-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/20">
// // // // //         {/* Upload Step - فقط زمانی نشان داده می‌شود که هیچ عکسی آپلود نشده باشد */}
// // // // //         {currentStep === "upload" && images.length === 0 && (
// // // // //           <div className="space-y-4 sm:space-y-6">
// // // // //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// // // // //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// // // // //                 آپلود عکس‌ها
// // // // //               </h2>
// // // // //             </div>
// // // // //             <div
// // // // //               className={`border-2 border-dashed rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center transition-all backdrop-blur-sm ${
// // // // //                 isDragging
// // // // //                   ? "border-primary/50 bg-primary/5"
// // // // //                   : "border-gray-300/50 dark:border-gray-600/50 bg-white/10 dark:bg-black/10"
// // // // //               }`}
// // // // //               onDragOver={handleDragOver}
// // // // //               onDragLeave={handleDragLeave}
// // // // //               onDrop={handleDrop}
// // // // //             >
// // // // //               <Upload className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-primary mb-2 sm:mb-3 md:mb-4" />
// // // // //               <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
// // // // //                 عکس‌ها را اینجا بکشید
// // // // //               </p>
// // // // //               <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
// // // // //                 یا
// // // // //               </p>
// // // // //               <button
// // // // //                 onClick={handleAddMoreClick}
// // // // //                 className="mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary transition text-sm sm:text-base backdrop-blur-sm glass-effect"
// // // // //               >
// // // // //                 انتخاب از دستگاه
// // // // //               </button>
// // // // //               <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 sm:mt-3">
// // // // //                 JPG, PNG, WEBP • حداکثر 10MB
// // // // //               </p>
// // // // //             </div>
// // // // //           </div>
// // // // //         )}
// // // // //         {/* Layout Section - وقتی عکس آپلود شده باشد */}
// // // // //         {currentStep === "upload" && images.length > 0 && (
// // // // //           <div className="space-y-4 sm:space-y-6">
// // // // //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// // // // //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// // // // //                 چیدمان عکس‌ها
// // // // //               </h2>
// // // // //               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// // // // //                 {images.length} عکس
// // // // //               </span>
// // // // //             </div>
// // // // //             {/* درگ اند دراپ برای کل کادر */}
// // // // //             <DndContext
// // // // //               sensors={sensors}
// // // // //               collisionDetection={closestCenter}
// // // // //               onDragEnd={handleDragEnd}
// // // // //               modifiers={[]}
// // // // //             >
// // // // //               <SortableContext
// // // // //                 items={images.map((img) => img.id)}
// // // // //                 strategy={rectSortingStrategy}
// // // // //               >
// // // // //                 <div className="flex flex-col gap-5">
// // // // //                   {/* کادر اصلی چیدمان */}
// // // // //                   <div
// // // // //                     className="border-2 border-dashed border-gray-300/50 dark:border-gray-600/50
// // // // //                     rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 min-h-[300px] bg-white/5 dark:bg-black/5
// // // // //                     transition-all duration-300"
// // // // //                   >
// // // // //                     {/* گرید ریسپانسیو: در موبایل 2 ستون، در تبلت 3 ستون، در دسکتاپ 4-5 ستون */}
// // // // //                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-3 sm:gap-4">
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
// // // // //                       {/* Add More Button as last item in grid */}
// // // // //                       <button
// // // // //                         onClick={handleAddMoreClick}
// // // // //                         className="aspect-[4/3] border-2 border-dashed border-gray-300/50 dark:border-gray-600/50
// // // // //                         rounded-lg flex flex-col items-center justify-center gap-1 sm:gap-2
// // // // //                         hover:border-primary/50 hover:bg-primary/5 transition backdrop-blur-sm glass-effect
// // // // //                         cursor-pointer"
// // // // //                       >
// // // // //                         <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 dark:text-gray-400" />
// // // // //                         <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
// // // // //                           افزودن عکس
// // // // //                         </span>
// // // // //                       </button>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                   <div className="flex flex-col justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
// // // // //                     <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
// // // // //                       <span className="text-xs sm:text-sm text-center sm:text-right">
// // // // //                         برای جابجایی: عکس را نگه دارید و بکشید
// // // // //                       </span>
// // // // //                       <span className="hidden sm:inline text-xs">•</span>
// // // // //                       <span className="text-xs sm:text-sm text-center sm:text-right">
// // // // //                         یا از دکمه‌های بالا/پایین استفاده کنید
// // // // //                       </span>
// // // // //                     </div>
// // // // //                     <div className="flex gap-2 w-full sm:w-auto">
// // // // //                       <button
// // // // //                         onClick={handleAddMoreClick}
// // // // //                         className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2
// // // // //                         border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium
// // // // //                         hover:bg-white/10 dark:hover:bg-black/10 transition text-sm backdrop-blur-sm
// // // // //                         glass-effect text-gray-700 dark:text-gray-300"
// // // // //                       >
// // // // //                         <Plus className="w-4 h-4" />
// // // // //                         افزودن بیشتر
// // // // //                       </button>
// // // // //                       <button
// // // // //                         onClick={goToNextStep}
// // // // //                         disabled={images.length === 0}
// // // // //                         className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2
// // // // //                         bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition
// // // // //                         text-sm backdrop-blur-sm glass-effect disabled:opacity-50 disabled:cursor-not-allowed"
// // // // //                       >
// // // // //                         ادامه
// // // // //                         <ChevronLeft className="w-4 h-4" />
// // // // //                       </button>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </SortableContext>
// // // // //             </DndContext>
// // // // //           </div>
// // // // //         )}
// // // // //         {/* Settings Step */}
// // // // //         {currentStep === "settings" && (
// // // // //           <div className="space-y-6">
// // // // //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// // // // //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// // // // //                 تنظیمات PDF
// // // // //               </h2>
// // // // //               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// // // // //                 {images.length} عکس
// // // // //               </span>
// // // // //             </div>
// // // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // //               <div className="space-y-4">
// // // // //                 <div>
// // // // //                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
// // // // //                     جهت کاغذ
// // // // //                   </label>
// // // // //                   <select
// // // // //                     value={settings.orientation}
// // // // //                     onChange={(e) =>
// // // // //                       handleSettingChange("orientation", e.target.value)
// // // // //                     }
// // // // //                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm"
// // // // //                   >
// // // // //                     <option value="portrait">عمودی</option>
// // // // //                     <option value="landscape">افقی</option>
// // // // //                   </select>
// // // // //                 </div>
// // // // //                 <div>
// // // // //                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
// // // // //                     سایز کاغذ
// // // // //                   </label>
// // // // //                   <select
// // // // //                     value={settings.paperSize}
// // // // //                     onChange={(e) =>
// // // // //                       handleSettingChange("paperSize", e.target.value)
// // // // //                     }
// // // // //                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm"
// // // // //                   >
// // // // //                     <option value="A4">A4</option>
// // // // //                     <option value="A3">A3</option>
// // // // //                     <option value="letter">Letter</option>
// // // // //                     <option value="legal">Legal</option>
// // // // //                   </select>
// // // // //                 </div>
// // // // //               </div>
// // // // //               <div className="space-y-4">
// // // // //                 <div>
// // // // //                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
// // // // //                     حاشیه
// // // // //                   </label>
// // // // //                   <select
// // // // //                     value={settings.margin}
// // // // //                     onChange={(e) =>
// // // // //                       handleSettingChange("margin", e.target.value)
// // // // //                     }
// // // // //                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm"
// // // // //                   >
// // // // //                     <option value="small">کوچک</option>
// // // // //                     <option value="medium">متوسط</option>
// // // // //                     <option value="large">بزرگ</option>
// // // // //                     <option value="none">بدون حاشیه</option>
// // // // //                   </select>
// // // // //                 </div>
// // // // //                 <div>
// // // // //                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
// // // // //                     کیفیت
// // // // //                   </label>
// // // // //                   <select
// // // // //                     value={settings.quality}
// // // // //                     onChange={(e) =>
// // // // //                       handleSettingChange("quality", e.target.value)
// // // // //                     }
// // // // //                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm"
// // // // //                   >
// // // // //                     <option value="low">پایین</option>
// // // // //                     <option value="standard">استاندارد</option>
// // // // //                     <option value="high">بالا</option>
// // // // //                   </select>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //             <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
// // // // //               <button
// // // // //                 onClick={goToPreviousStep}
// // // // //                 className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // // // //               >
// // // // //                 <ChevronRight className="w-4 h-4" />
// // // // //                 بازگشت
// // // // //               </button>
// // // // //               <button
// // // // //                 onClick={goToNextStep}
// // // // //                 className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
// // // // //               >
// // // // //                 ادامه به تبدیل
// // // // //                 <ChevronLeft className="w-4 h-4" />
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         )}
// // // // //         {/* Convert Step */}
// // // // //         {currentStep === "convert" && (
// // // // //           <div className="space-y-6">
// // // // //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// // // // //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// // // // //                 تبدیل و دانلود
// // // // //               </h2>
// // // // //               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// // // // //                 {images.length} عکس
// // // // //               </span>
// // // // //             </div>
// // // // //             {conversionStatus === "idle" && (
// // // // //               <div className="text-center space-y-4">
// // // // //                 <FileImage className="w-16 h-16 mx-auto text-primary" />
// // // // //                 <p className="text-lg text-gray-700 dark:text-gray-300">
// // // // //                   آماده برای تبدیل {images.length} عکس به PDF
// // // // //                 </p>
// // // // //                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
// // // // //                   <button
// // // // //                     onClick={handleConvert}
// // // // //                     className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
// // // // //                   >
// // // // //                     <Settings className="w-5 h-5" />
// // // // //                     شروع تبدیل
// // // // //                   </button>
// // // // //                   <button
// // // // //                     onClick={handleDownloadZIP}
// // // // //                     className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // // // //                   >
// // // // //                     <Folder className="w-5 h-5" />
// // // // //                     دانلود ZIP
// // // // //                   </button>
// // // // //                 </div>
// // // // //               </div>
// // // // //             )}
// // // // //             {conversionStatus === "converting" && (
// // // // //               <div className="text-center space-y-4">
// // // // //                 <Loader2 className="w-12 h-12 mx-auto text-primary animate-spin" />
// // // // //                 <div className="space-y-2">
// // // // //                   <p className="text-lg text-gray-700 dark:text-gray-300">
// // // // //                     در حال تبدیل...
// // // // //                   </p>
// // // // //                   <p className="text-sm text-gray-600 dark:text-gray-400">
// // // // //                     {conversionProgress.status}
// // // // //                   </p>
// // // // //                   <div className="w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-2">
// // // // //                     <div
// // // // //                       className="bg-primary h-2 rounded-full transition-all duration-300"
// // // // //                       style={{
// // // // //                         width: `${
// // // // //                           (conversionProgress.current /
// // // // //                             conversionProgress.total) *
// // // // //                           100
// // // // //                         }%`,
// // // // //                       }}
// // // // //                     />
// // // // //                   </div>
// // // // //                   <p className="text-xs text-gray-500 dark:text-gray-400">
// // // // //                     {conversionProgress.current} از {conversionProgress.total}
// // // // //                   </p>
// // // // //                 </div>
// // // // //               </div>
// // // // //             )}
// // // // //             {conversionStatus === "completed" && pdfBlob && (
// // // // //               <div className="text-center space-y-4">
// // // // //                 <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
// // // // //                 <p className="text-lg text-gray-700 dark:text-gray-300">
// // // // //                   تبدیل با موفقیت انجام شد!
// // // // //                 </p>
// // // // //                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
// // // // //                   <button
// // // // //                     onClick={handleDownloadPDF}
// // // // //                     className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500/80 text-white rounded-lg font-medium hover:bg-green-500 transition backdrop-blur-sm glass-effect"
// // // // //                   >
// // // // //                     <Download className="w-5 h-5" />
// // // // //                     دانلود PDF
// // // // //                   </button>
// // // // //                   <button
// // // // //                     onClick={resetConverter}
// // // // //                     className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // // // //                   >
// // // // //                     <RefreshCw className="w-5 h-5" />
// // // // //                     شروع جدید
// // // // //                   </button>
// // // // //                 </div>
// // // // //               </div>
// // // // //             )}
// // // // //             {conversionStatus === "error" && (
// // // // //               <div className="text-center space-y-4">
// // // // //                 <AlertCircle className="w-16 h-16 mx-auto text-red-500" />
// // // // //                 <p className="text-lg text-red-600 dark:text-red-400">
// // // // //                   خطا در تبدیل
// // // // //                 </p>
// // // // //                 <div className="flex gap-3 justify-center">
// // // // //                   <button
// // // // //                     onClick={handleConvert}
// // // // //                     className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
// // // // //                   >
// // // // //                     <RefreshCw className="w-5 h-5" />
// // // // //                     تلاش مجدد
// // // // //                   </button>
// // // // //                   <button
// // // // //                     onClick={goToPreviousStep}
// // // // //                     className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // // // //                   >
// // // // //                     بازگشت
// // // // //                   </button>
// // // // //                 </div>
// // // // //               </div>
// // // // //             )}
// // // // //             <div className="flex justify-center pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
// // // // //               <button
// // // // //                 onClick={goToPreviousStep}
// // // // //                 className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // // // //               >
// // // // //                 <ChevronRight className="w-4 h-4" />
// // // // //                 بازگشت به تنظیمات
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         )}
// // // // //       </div>
// // // // //       {/* Hidden file input for adding more images */}
// // // // //       <input
// // // // //         ref={fileInputRef}
// // // // //         type="file"
// // // // //         multiple
// // // // //         accept=".jpg,.jpeg,.png,.webp"
// // // // //         onChange={handleFileInputChange}
// // // // //         className="hidden"
// // // // //       />
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // //components/ImageToPDFConverter.tsx
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
// // // //   TouchSensor,
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
// // // //   const [triggerFileInput, setTriggerFileInput] = useState(false);
// // // //   const fileInputRef = useRef<HTMLInputElement>(null);
// // // //   const [isDragging, setIsDragging] = useState(false);
// // // //   // بهبود سنسورها برای موبایل - تنظیمات بهینه‌تر
// // // //   const sensors = useSensors(
// // // //     useSensor(PointerSensor, {
// // // //       activationConstraint: {
// // // //         distance: 3,
// // // //       },
// // // //     }),
// // // //     useSensor(TouchSensor, {
// // // //       activationConstraint: {
// // // //         delay: 100,
// // // //         tolerance: 10,
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
// // // //   // Trigger file input when state changes
// // // //   useEffect(() => {
// // // //     if (triggerFileInput && fileInputRef.current) {
// // // //       console.log("🎯 Triggering file input programmatically");
// // // //       fileInputRef.current.click();
// // // //       setTriggerFileInput(false);
// // // //     }
// // // //   }, [triggerFileInput]);
// // // //   // Handlers
// // // //   const handleNameChange = useCallback((id: string, name: string) => {
// // // //     setImages((prev) =>
// // // //       prev.map((img) => (img.id === id ? { ...img, name } : img))
// // // //     );
// // // //   }, []);
// // // //   const handleDelete = useCallback((id: string) => {
// // // //     setImages((prev) => {
// // // //       const imageToDelete = prev.find((img) => img.id === id);
// // // //       if (imageToDelete) {
// // // //         URL.revokeObjectURL(imageToDelete.url);
// // // //       }
// // // //       return prev.filter((img) => img.id !== id);
// // // //     });
// // // //   }, []);
// // // //   const handleMove = useCallback((id: string, direction: "up" | "down") => {
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
// // // //   }, []);
// // // //   const handleDragEnd = useCallback((event: DragEndEvent) => {
// // // //     const { active, over } = event;
// // // //     if (over && active.id !== over.id) {
// // // //       setImages((items) => {
// // // //         const oldIndex = items.findIndex((item) => item.id === active.id);
// // // //         const newIndex = items.findIndex((item) => item.id === over.id);
// // // //         return arrayMove(items, oldIndex, newIndex);
// // // //       });
// // // //     }
// // // //   }, []);
// // // //   const handleFileSelect = useCallback((files: FileList | null) => {
// // // //     if (!files) return;
// // // //     console.log("📁 Files selected:", files.length);
// // // //     const newImages: ImageFile[] = [];
// // // //     Array.from(files).forEach((file) => {
// // // //       const validation = validateFile(file);
// // // //       if (validation.isValid) {
// // // //         const url = URL.createObjectURL(file);
// // // //         newImages.push({ id: generateId(), url, name: file.name, file });
// // // //         console.log("✅ Added file:", file.name);
// // // //       } else {
// // // //         console.warn("❌ Invalid file:", file.name, validation.error);
// // // //         alert(validation.error);
// // // //       }
// // // //     });
// // // //     if (newImages.length > 0) {
// // // //       setImages((prev) => [...prev, ...newImages]);
// // // //     }
// // // //   }, []);
// // // //   const handleFileInputChange = useCallback(
// // // //     (e: React.ChangeEvent<HTMLInputElement>) => {
// // // //       console.log("🔄 File input changed");
// // // //       handleFileSelect(e.target.files);
// // // //       // Reset the input value to allow selecting the same file again
// // // //       if (fileInputRef.current) {
// // // //         fileInputRef.current.value = "";
// // // //       }
// // // //     },
// // // //     [handleFileSelect]
// // // //   );
// // // //   const handleDragOver = useCallback((e: React.DragEvent) => {
// // // //     e.preventDefault();
// // // //     setIsDragging(true);
// // // //   }, []);
// // // //   const handleDragLeave = useCallback((e: React.DragEvent) => {
// // // //     e.preventDefault();
// // // //     if (e.currentTarget === e.target) {
// // // //       setIsDragging(false);
// // // //     }
// // // //   }, []);
// // // //   const handleDrop = useCallback(
// // // //     (e: React.DragEvent) => {
// // // //       e.preventDefault();
// // // //       setIsDragging(false);
// // // //       handleFileSelect(e.dataTransfer.files);
// // // //     },
// // // //     [handleFileSelect]
// // // //   );
// // // //   const handleAddMoreClick = useCallback(() => {
// // // //     console.log("🔘 Add more button clicked");
// // // //     setTriggerFileInput(true);
// // // //   }, []);
// // // //   const handleSettingChange = useCallback(
// // // //     (key: keyof PDFSettings, value: string) => {
// // // //       setSettings((prev) => ({ ...prev, [key]: value }));
// // // //     },
// // // //     []
// // // //   );
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
// // // //     document.body.appendChild(a);
// // // //     a.click();
// // // //     document.body.removeChild(a);
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
// // // //       document.body.appendChild(a);
// // // //       a.click();
// // // //       document.body.removeChild(a);
// // // //       URL.revokeObjectURL(url);
// // // //       setConversionStatus("idle");
// // // //     } catch (error) {
// // // //       console.error("ZIP creation error:", error);
// // // //       alert("خطا در ساخت ZIP");
// // // //       setConversionStatus("idle");
// // // //     }
// // // //   }, [images]);
// // // //   const goToNextStep = useCallback(() => {
// // // //     if (currentStep === "upload" && images.length > 0)
// // // //       setCurrentStep("settings");
// // // //     else if (currentStep === "settings") setCurrentStep("convert");
// // // //   }, [currentStep, images.length]);
// // // //   const goToPreviousStep = useCallback(() => {
// // // //     if (currentStep === "settings") setCurrentStep("upload");
// // // //     else if (currentStep === "convert") setCurrentStep("settings");
// // // //   }, [currentStep]);
// // // //   const resetConverter = useCallback(() => {
// // // //     images.forEach((img) => URL.revokeObjectURL(img.url));
// // // //     setImages([]);
// // // //     setSettings(initialSettings);
// // // //     setCurrentStep("upload");
// // // //     setConversionStatus("idle");
// // // //     setPdfBlob(null);
// // // //   }, [images]);
// // // //   return (
// // // //     <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6 backdrop-blur-sm">
// // // //       {/* Progress Steps - Responsive */}
// // // //       <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
// // // //         {/* Step 1 */}
// // // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // // //           <div
// // // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// // // //               currentStep === "upload"
// // // //                 ? "bg-primary/20 border-primary/50 text-primary"
// // // //                 : images.length > 0
// // // //                 ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400"
// // // //                 : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
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
// // // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// // // //             {images.length > 0 ? "چیدمان" : "آپلود"}
// // // //           </span>
// // // //         </div>
// // // //         <div
// // // //           className={`h-1 flex-1 transition-colors glass-effect ${
// // // //             currentStep === "settings" || currentStep === "convert"
// // // //               ? "bg-primary/50"
// // // //               : "bg-gray-300/50 dark:bg-gray-600/50"
// // // //           }`}
// // // //         />
// // // //         {/* Step 2 */}
// // // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // // //           <div
// // // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// // // //               currentStep === "settings"
// // // //                 ? "bg-primary/20 border-primary/50 text-primary"
// // // //                 : currentStep === "convert"
// // // //                 ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400"
// // // //                 : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
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
// // // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// // // //             تنظیمات
// // // //           </span>
// // // //         </div>
// // // //         <div
// // // //           className={`h-1 flex-1 transition-colors glass-effect ${
// // // //             currentStep === "convert"
// // // //               ? "bg-primary/50"
// // // //               : "bg-gray-300/50 dark:bg-gray-600/50"
// // // //           }`}
// // // //         />
// // // //         {/* Step 3 */}
// // // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // // //           <div
// // // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// // // //               currentStep === "convert"
// // // //                 ? "bg-primary/20 border-primary/50 text-primary"
// // // //                 : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
// // // //             }`}
// // // //           >
// // // //             <span className="text-sm sm:text-base md:text-lg font-bold">3</span>
// // // //           </div>
// // // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// // // //             دانلود
// // // //           </span>
// // // //         </div>
// // // //       </div>
// // // //       {/* Content */}
// // // //       <div className="rounded-2xl shadow-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/20">
// // // //         {/* Upload Step - فقط زمانی نشان داده می‌شود که هیچ عکسی آپلود نشده باشد */}
// // // //         {currentStep === "upload" && images.length === 0 && (
// // // //           <div className="space-y-4 sm:space-y-6">
// // // //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// // // //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// // // //                 آپلود عکس‌ها
// // // //               </h2>
// // // //             </div>
// // // //             <div
// // // //               className={`border-2 border-dashed rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center transition-all backdrop-blur-sm ${
// // // //                 isDragging
// // // //                   ? "border-primary/50 bg-primary/5"
// // // //                   : "border-gray-300/50 dark:border-gray-600/50 bg-white/10 dark:bg-black/10"
// // // //               }`}
// // // //               onDragOver={handleDragOver}
// // // //               onDragLeave={handleDragLeave}
// // // //               onDrop={handleDrop}
// // // //             >
// // // //               <Upload className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-primary mb-2 sm:mb-3 md:mb-4" />
// // // //               <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
// // // //                 عکس‌ها را اینجا بکشید
// // // //               </p>
// // // //               <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
// // // //                 یا
// // // //               </p>
// // // //               <button
// // // //                 onClick={handleAddMoreClick}
// // // //                 className="mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary transition text-sm sm:text-base backdrop-blur-sm glass-effect"
// // // //               >
// // // //                 انتخاب از دستگاه
// // // //               </button>
// // // //               <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 sm:mt-3">
// // // //                 JPG, PNG, WEBP • حداکثر 10MB
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //         {/* Layout Section - وقتی عکس آپلود شده باشد */}
// // // //         {currentStep === "upload" && images.length > 0 && (
// // // //           <div className="space-y-4 sm:space-y-6">
// // // //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// // // //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// // // //                 چیدمان عکس‌ها
// // // //               </h2>
// // // //               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// // // //                 {images.length} عکس
// // // //               </span>
// // // //             </div>
// // // //             {/* درگ اند دراپ برای کل کادر */}
// // // //             <DndContext
// // // //               sensors={sensors}
// // // //               collisionDetection={closestCenter}
// // // //               onDragEnd={handleDragEnd}
// // // //               modifiers={[]}
// // // //             >
// // // //               <SortableContext
// // // //                 items={images.map((img) => img.id)}
// // // //                 strategy={rectSortingStrategy}
// // // //               >
// // // //                 <div className="flex flex-col gap-5">
// // // //                   {/* کادر اصلی چیدمان */}
// // // //                   <div
// // // //                     className="border-2 border-dashed border-gray-300/50 dark:border-gray-600/50
// // // //                     rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 min-h-[300px] bg-white/5 dark:bg-black/5
// // // //                     transition-all duration-300"
// // // //                   >
// // // //                     {/* گرید ریسپانسیو: در موبایل 2 ستون، در تبلت 3 ستون، در دسکتاپ 4-5 ستون */}
// // // //                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-3 sm:gap-4">
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
// // // //                         className="aspect-[4/3] border-2 border-dashed border-gray-300/50 dark:border-gray-600/50
// // // //                         rounded-lg flex flex-col items-center justify-center gap-1 sm:gap-2
// // // //                         hover:border-primary/50 hover:bg-primary/5 transition backdrop-blur-sm glass-effect
// // // //                         cursor-pointer"
// // // //                       >
// // // //                         <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 dark:text-gray-400" />
// // // //                         <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
// // // //                           افزودن عکس
// // // //                         </span>
// // // //                       </button>
// // // //                     </div>
// // // //                   </div>
// // // //                   <div className="flex flex-col justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
// // // //                     <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
// // // //                       <span className="text-xs sm:text-sm text-center sm:text-right">
// // // //                         برای جابجایی: عکس را نگه دارید و بکشید
// // // //                       </span>
// // // //                       <span className="hidden sm:inline text-xs">•</span>
// // // //                       <span className="text-xs sm:text-sm text-center sm:text-right">
// // // //                         یا از دکمه‌های بالا/پایین استفاده کنید
// // // //                       </span>
// // // //                     </div>
// // // //                     <div className="flex gap-2 w-full sm:w-auto">
// // // //                       <button
// // // //                         onClick={handleAddMoreClick}
// // // //                         className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2
// // // //                         border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium
// // // //                         hover:bg-white/10 dark:hover:bg-black/10 transition text-sm backdrop-blur-sm
// // // //                         glass-effect text-gray-700 dark:text-gray-300"
// // // //                       >
// // // //                         <Plus className="w-4 h-4" />
// // // //                         افزودن بیشتر
// // // //                       </button>
// // // //                       <button
// // // //                         onClick={goToNextStep}
// // // //                         disabled={images.length === 0}
// // // //                         className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2
// // // //                         bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition
// // // //                         text-sm backdrop-blur-sm glass-effect disabled:opacity-50 disabled:cursor-not-allowed"
// // // //                       >
// // // //                         ادامه
// // // //                         <ChevronLeft className="w-4 h-4" />
// // // //                       </button>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </SortableContext>
// // // //             </DndContext>
// // // //           </div>
// // // //         )}
// // // //         {/* Settings Step */}
// // // //         {currentStep === "settings" && (
// // // //           <div className="space-y-6">
// // // //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// // // //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// // // //                 تنظیمات PDF
// // // //               </h2>
// // // //               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// // // //                 {images.length} عکس
// // // //               </span>
// // // //             </div>
// // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //               <div className="space-y-4">
// // // //                 <div>
// // // //                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
// // // //                     جهت کاغذ
// // // //                   </label>
// // // //                   <select
// // // //                     value={settings.orientation}
// // // //                     onChange={(e) =>
// // // //                       handleSettingChange("orientation", e.target.value)
// // // //                     }
// // // //                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
// // // //                   >
// // // //                     <option value="portrait">عمودی</option>
// // // //                     <option value="landscape">افقی</option>
// // // //                   </select>
// // // //                 </div>
// // // //                 <div>
// // // //                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
// // // //                     سایز کاغذ
// // // //                   </label>
// // // //                   <select
// // // //                     value={settings.paperSize}
// // // //                     onChange={(e) =>
// // // //                       handleSettingChange("paperSize", e.target.value)
// // // //                     }
// // // //                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
// // // //                   >
// // // //                     <option value="A4">A4</option>
// // // //                     <option value="A3">A3</option>
// // // //                     <option value="letter">Letter</option>
// // // //                     <option value="legal">Legal</option>
// // // //                   </select>
// // // //                 </div>
// // // //               </div>
// // // //               <div className="space-y-4">
// // // //                 <div>
// // // //                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
// // // //                     حاشیه
// // // //                   </label>
// // // //                   <select
// // // //                     value={settings.margin}
// // // //                     onChange={(e) =>
// // // //                       handleSettingChange("margin", e.target.value)
// // // //                     }
// // // //                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
// // // //                   >
// // // //                     <option value="small">کوچک</option>
// // // //                     <option value="medium">متوسط</option>
// // // //                     <option value="large">بزرگ</option>
// // // //                     <option value="none">بدون حاشیه</option>
// // // //                   </select>
// // // //                 </div>
// // // //                 <div>
// // // //                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
// // // //                     کیفیت
// // // //                   </label>
// // // //                   <select
// // // //                     value={settings.quality}
// // // //                     onChange={(e) =>
// // // //                       handleSettingChange("quality", e.target.value)
// // // //                     }
// // // //                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
// // // //                   >
// // // //                     <option value="low">پایین</option>
// // // //                     <option value="standard">استاندارد</option>
// // // //                     <option value="high">بالا</option>
// // // //                   </select>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //             {/* Preview Section - اضافه شده برای نمایش پیش‌نمایش تنظیمات */}
// // // //             <div className="mt-6 p-4 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm">
// // // //               <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
// // // //                 پیش‌نمایش تنظیمات
// // // //               </h3>
// // // //               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
// // // //                 <div>
// // // //                   <span className="text-gray-600 dark:text-gray-400">جهت:</span>
// // // //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// // // //                     {settings.orientation === "portrait" ? "عمودی" : "افقی"}
// // // //                   </span>
// // // //                 </div>
// // // //                 <div>
// // // //                   <span className="text-gray-600 dark:text-gray-400">
// // // //                     سایز:
// // // //                   </span>
// // // //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// // // //                     {settings.paperSize}
// // // //                   </span>
// // // //                 </div>
// // // //                 <div>
// // // //                   <span className="text-gray-600 dark:text-gray-400">
// // // //                     حاشیه:
// // // //                   </span>
// // // //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// // // //                     {settings.margin === "small"
// // // //                       ? "کوچک"
// // // //                       : settings.margin === "medium"
// // // //                       ? "متوسط"
// // // //                       : settings.margin === "large"
// // // //                       ? "بزرگ"
// // // //                       : "بدون حاشیه"}
// // // //                   </span>
// // // //                 </div>
// // // //                 <div>
// // // //                   <span className="text-gray-600 dark:text-gray-400">
// // // //                     کیفیت:
// // // //                   </span>
// // // //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// // // //                     {settings.quality === "low"
// // // //                       ? "پایین"
// // // //                       : settings.quality === "standard"
// // // //                       ? "استاندارد"
// // // //                       : "بالا"}
// // // //                   </span>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //             <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
// // // //               <button
// // // //                 onClick={goToPreviousStep}
// // // //                 className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // // //               >
// // // //                 <ChevronRight className="w-4 h-4" />
// // // //                 بازگشت
// // // //               </button>
// // // //               <button
// // // //                 onClick={goToNextStep}
// // // //                 className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
// // // //               >
// // // //                 ادامه به تبدیل
// // // //                 <ChevronLeft className="w-4 h-4" />
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //         {/* Convert Step */}
// // // //         {currentStep === "convert" && (
// // // //           <div className="space-y-6">
// // // //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// // // //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// // // //                 تبدیل و دانلود
// // // //               </h2>
// // // //               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// // // //                 {images.length} عکس
// // // //               </span>
// // // //             </div>
// // // //             {/* نمایش خلاصه تنظیمات */}
// // // //             <div className="p-4 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm">
// // // //               <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
// // // //                 خلاصه تنظیمات
// // // //               </h3>
// // // //               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
// // // //                 <div>
// // // //                   <span className="text-gray-600 dark:text-gray-400">جهت:</span>
// // // //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// // // //                     {settings.orientation === "portrait" ? "عمودی" : "افقی"}
// // // //                   </span>
// // // //                 </div>
// // // //                 <div>
// // // //                   <span className="text-gray-600 dark:text-gray-400">
// // // //                     سایز:
// // // //                   </span>
// // // //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// // // //                     {settings.paperSize}
// // // //                   </span>
// // // //                 </div>
// // // //                 <div>
// // // //                   <span className="text-gray-600 dark:text-gray-400">
// // // //                     حاشیه:
// // // //                   </span>
// // // //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// // // //                     {settings.margin === "small"
// // // //                       ? "کوچک"
// // // //                       : settings.margin === "medium"
// // // //                       ? "متوسط"
// // // //                       : settings.margin === "large"
// // // //                       ? "بزرگ"
// // // //                       : "بدون حاشیه"}
// // // //                   </span>
// // // //                 </div>
// // // //                 <div>
// // // //                   <span className="text-gray-600 dark:text-gray-400">
// // // //                     کیفیت:
// // // //                   </span>
// // // //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// // // //                     {settings.quality === "low"
// // // //                       ? "پایین"
// // // //                       : settings.quality === "standard"
// // // //                       ? "استاندارد"
// // // //                       : "بالا"}
// // // //                   </span>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //             {conversionStatus === "idle" && (
// // // //               <div className="text-center space-y-4">
// // // //                 <FileImage className="w-16 h-16 mx-auto text-primary" />
// // // //                 <p className="text-lg text-gray-700 dark:text-gray-300">
// // // //                   آماده برای تبدیل {images.length} عکس به PDF
// // // //                 </p>
// // // //                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
// // // //                   <button
// // // //                     onClick={handleConvert}
// // // //                     className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
// // // //                   >
// // // //                     <Settings className="w-5 h-5" />
// // // //                     شروع تبدیل
// // // //                   </button>
// // // //                   <button
// // // //                     onClick={handleDownloadZIP}
// // // //                     className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // // //                   >
// // // //                     <Folder className="w-5 h-5" />
// // // //                     دانلود ZIP
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             )}
// // // //             {conversionStatus === "converting" && (
// // // //               <div className="text-center space-y-4">
// // // //                 <Loader2 className="w-12 h-12 mx-auto text-primary animate-spin" />
// // // //                 <div className="space-y-2">
// // // //                   <p className="text-lg text-gray-700 dark:text-gray-300">
// // // //                     در حال تبدیل...
// // // //                   </p>
// // // //                   <p className="text-sm text-gray-600 dark:text-gray-400">
// // // //                     {conversionProgress.status}
// // // //                   </p>
// // // //                   <div className="w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-2">
// // // //                     <div
// // // //                       className="bg-primary h-2 rounded-full transition-all duration-300"
// // // //                       style={{
// // // //                         width: `${
// // // //                           (conversionProgress.current /
// // // //                             conversionProgress.total) *
// // // //                           100
// // // //                         }%`,
// // // //                       }}
// // // //                     />
// // // //                   </div>
// // // //                   <p className="text-xs text-gray-500 dark:text-gray-400">
// // // //                     {conversionProgress.current} از {conversionProgress.total}
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //             )}
// // // //             {conversionStatus === "completed" && pdfBlob && (
// // // //               <div className="text-center space-y-4">
// // // //                 <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
// // // //                 <p className="text-lg text-gray-700 dark:text-gray-300">
// // // //                   تبدیل با موفقیت انجام شد!
// // // //                 </p>
// // // //                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
// // // //                   <button
// // // //                     onClick={handleDownloadPDF}
// // // //                     className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500/80 text-white rounded-lg font-medium hover:bg-green-500 transition backdrop-blur-sm glass-effect"
// // // //                   >
// // // //                     <Download className="w-5 h-5" />
// // // //                     دانلود PDF
// // // //                   </button>
// // // //                   <button
// // // //                     onClick={resetConverter}
// // // //                     className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // // //                   >
// // // //                     <RefreshCw className="w-5 h-5" />
// // // //                     شروع جدید
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             )}
// // // //             {conversionStatus === "error" && (
// // // //               <div className="text-center space-y-4">
// // // //                 <AlertCircle className="w-16 h-16 mx-auto text-red-500" />
// // // //                 <p className="text-lg text-red-600 dark:text-red-400">
// // // //                   خطا در تبدیل
// // // //                 </p>
// // // //                 <div className="flex gap-3 justify-center">
// // // //                   <button
// // // //                     onClick={handleConvert}
// // // //                     className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
// // // //                   >
// // // //                     <RefreshCw className="w-5 h-5" />
// // // //                     تلاش مجدد
// // // //                   </button>
// // // //                   <button
// // // //                     onClick={goToPreviousStep}
// // // //                     className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // // //                   >
// // // //                     بازگشت
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             )}
// // // //             <div className="flex justify-center pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
// // // //               <button
// // // //                 onClick={goToPreviousStep}
// // // //                 className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // // //               >
// // // //                 <ChevronRight className="w-4 h-4" />
// // // //                 بازگشت به تنظیمات
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //       {/* Hidden file input for adding more images */}
// // // //       <input
// // // //         ref={fileInputRef}
// // // //         type="file"
// // // //         multiple
// // // //         accept=".jpg,.jpeg,.png,.webp"
// // // //         onChange={handleFileInputChange}
// // // //         className="hidden"
// // // //       />
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
// // //   X,
// // //   Maximize2,
// // // } from "lucide-react";
// // // import {
// // //   DndContext,
// // //   closestCenter,
// // //   KeyboardSensor,
// // //   PointerSensor,
// // //   useSensor,
// // //   useSensors,
// // //   DragEndEvent,
// // //   TouchSensor,
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
// // //   const [triggerFileInput, setTriggerFileInput] = useState(false);
// // //   const [selectedImage, setSelectedImage] = useState<ImageFile | null>(null);
// // //   const [isPreviewOpen, setIsPreviewOpen] = useState(false);
// // //   const fileInputRef = useRef<HTMLInputElement>(null);
// // //   const [isDragging, setIsDragging] = useState(false);
// // //   // بهبود سنسورها برای موبایل - تنظیمات بهینه‌تر
// // //   const sensors = useSensors(
// // //     useSensor(PointerSensor, {
// // //       activationConstraint: {
// // //         distance: 3,
// // //       },
// // //     }),
// // //     useSensor(TouchSensor, {
// // //       activationConstraint: {
// // //         delay: 100,
// // //         tolerance: 10,
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
// // //   // Trigger file input when state changes
// // //   useEffect(() => {
// // //     if (triggerFileInput && fileInputRef.current) {
// // //       console.log("🎯 Triggering file input programmatically");
// // //       fileInputRef.current.click();
// // //       setTriggerFileInput(false);
// // //     }
// // //   }, [triggerFileInput]);
// // //   // Handlers
// // //   const handleNameChange = useCallback((id: string, name: string) => {
// // //     setImages((prev) =>
// // //       prev.map((img) => (img.id === id ? { ...img, name } : img))
// // //     );
// // //   }, []);
// // //   const handleDelete = useCallback(
// // //     (id: string) => {
// // //       setImages((prev) => {
// // //         const imageToDelete = prev.find((img) => img.id === id);
// // //         if (imageToDelete) {
// // //           URL.revokeObjectURL(imageToDelete.url);
// // //           // اگر تصویر در حال پیش‌نمایش حذف شد، پنجره پیش‌نمایش را ببند
// // //           if (selectedImage?.id === id) {
// // //             setSelectedImage(null);
// // //             setIsPreviewOpen(false);
// // //           }
// // //         }
// // //         return prev.filter((img) => img.id !== id);
// // //       });
// // //     },
// // //     [selectedImage]
// // //   );
// // //   const handleMove = useCallback((id: string, direction: "up" | "down") => {
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
// // //   }, []);
// // //   const handleDragEnd = useCallback((event: DragEndEvent) => {
// // //     const { active, over } = event;
// // //     if (over && active.id !== over.id) {
// // //       setImages((items) => {
// // //         const oldIndex = items.findIndex((item) => item.id === active.id);
// // //         const newIndex = items.findIndex((item) => item.id === over.id);
// // //         return arrayMove(items, oldIndex, newIndex);
// // //       });
// // //     }
// // //   }, []);
// // //   const handleFileSelect = useCallback((files: FileList | null) => {
// // //     if (!files) return;
// // //     console.log("📁 Files selected:", files.length);
// // //     const newImages: ImageFile[] = [];
// // //     Array.from(files).forEach((file) => {
// // //       const validation = validateFile(file);
// // //       if (validation.isValid) {
// // //         const url = URL.createObjectURL(file);
// // //         newImages.push({ id: generateId(), url, name: file.name, file });
// // //         console.log("✅ Added file:", file.name);
// // //       } else {
// // //         console.warn("❌ Invalid file:", file.name, validation.error);
// // //         alert(validation.error);
// // //       }
// // //     });
// // //     if (newImages.length > 0) {
// // //       setImages((prev) => [...prev, ...newImages]);
// // //     }
// // //   }, []);
// // //   const handleFileInputChange = useCallback(
// // //     (e: React.ChangeEvent<HTMLInputElement>) => {
// // //       console.log("🔄 File input changed");
// // //       handleFileSelect(e.target.files);
// // //       // Reset the input value to allow selecting the same file again
// // //       if (fileInputRef.current) {
// // //         fileInputRef.current.value = "";
// // //       }
// // //     },
// // //     [handleFileSelect]
// // //   );
// // //   const handleDragOver = useCallback((e: React.DragEvent) => {
// // //     e.preventDefault();
// // //     setIsDragging(true);
// // //   }, []);
// // //   const handleDragLeave = useCallback((e: React.DragEvent) => {
// // //     e.preventDefault();
// // //     if (e.currentTarget === e.target) {
// // //       setIsDragging(false);
// // //     }
// // //   }, []);
// // //   const handleDrop = useCallback(
// // //     (e: React.DragEvent) => {
// // //       e.preventDefault();
// // //       setIsDragging(false);
// // //       handleFileSelect(e.dataTransfer.files);
// // //     },
// // //     [handleFileSelect]
// // //   );
// // //   const handleAddMoreClick = useCallback(() => {
// // //     console.log("🔘 Add more button clicked");
// // //     setTriggerFileInput(true);
// // //   }, []);
// // //   const handleSettingChange = useCallback(
// // //     (key: keyof PDFSettings, value: string) => {
// // //       setSettings((prev) => ({ ...prev, [key]: value }));
// // //     },
// // //     []
// // //   );
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
// // //     document.body.appendChild(a);
// // //     a.click();
// // //     document.body.removeChild(a);
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
// // //       document.body.appendChild(a);
// // //       a.click();
// // //       document.body.removeChild(a);
// // //       URL.revokeObjectURL(url);
// // //       setConversionStatus("idle");
// // //     } catch (error) {
// // //       console.error("ZIP creation error:", error);
// // //       alert("خطا در ساخت ZIP");
// // //       setConversionStatus("idle");
// // //     }
// // //   }, [images]);
// // //   const handleImagePreview = useCallback((image: ImageFile) => {
// // //     setSelectedImage(image);
// // //     setIsPreviewOpen(true);
// // //   }, []);
// // //   const handleClosePreview = useCallback(() => {
// // //     setIsPreviewOpen(false);
// // //     setSelectedImage(null);
// // //   }, []);
// // //   const goToNextStep = useCallback(() => {
// // //     if (currentStep === "upload" && images.length > 0)
// // //       setCurrentStep("settings");
// // //     else if (currentStep === "settings") setCurrentStep("convert");
// // //   }, [currentStep, images.length]);
// // //   const goToPreviousStep = useCallback(() => {
// // //     if (currentStep === "settings") setCurrentStep("upload");
// // //     else if (currentStep === "convert") setCurrentStep("settings");
// // //   }, [currentStep]);
// // //   const resetConverter = useCallback(() => {
// // //     images.forEach((img) => URL.revokeObjectURL(img.url));
// // //     setImages([]);
// // //     setSettings(initialSettings);
// // //     setCurrentStep("upload");
// // //     setConversionStatus("idle");
// // //     setPdfBlob(null);
// // //     setSelectedImage(null);
// // //     setIsPreviewOpen(false);
// // //   }, [images]);
// // //   // Modal Preview Component
// // //   const ImagePreviewModal = () => {
// // //     if (!isPreviewOpen || !selectedImage) return null;
// // //     return (
// // //       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
// // //         <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
// // //           <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
// // //             {/* Header */}
// // //             <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
// // //               <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
// // //                 {selectedImage.name}
// // //               </h3>
// // //               <div className="flex items-center gap-2">
// // //                 <button
// // //                   onClick={() => window.open(selectedImage.url, "_blank")}
// // //                   className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
// // //                   title="باز کردن در تب جدید"
// // //                 >
// // //                   <Maximize2 className="w-5 h-5" />
// // //                 </button>
// // //                 <button
// // //                   onClick={handleClosePreview}
// // //                   className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors"
// // //                 >
// // //                   <X className="w-6 h-6" />
// // //                 </button>
// // //               </div>
// // //             </div>
// // //             {/* Image */}
// // //             <div className="flex items-center justify-center p-4 max-h-[70vh] overflow-auto">
// // //               <img
// // //                 src={selectedImage.url}
// // //                 alt={selectedImage.name}
// // //                 className="max-w-full max-h-full object-contain rounded-lg"
// // //               />
// // //             </div>
// // //             {/* Footer */}
// // //             <div className="p-4 border-t border-gray-200 dark:border-gray-700">
// // //               <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
// // //                 <div className="text-sm text-gray-600 dark:text-gray-400">
// // //                   برای بستن، روی دکمه × کلیک کنید یا ESC را فشار دهید
// // //                 </div>
// // //                 <button
// // //                   onClick={handleClosePreview}
// // //                   className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition"
// // //                 >
// // //                   بستن
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   };
// // //   return (
// // //     <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6 backdrop-blur-sm">
// // //       {/* Progress Steps - Responsive */}
// // //       <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
// // //         {/* Step 1 */}
// // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // //           <div
// // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// // //               currentStep === "upload"
// // //                 ? "bg-primary/20 border-primary/50 text-primary"
// // //                 : images.length > 0
// // //                 ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400"
// // //                 : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
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
// // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// // //             {images.length > 0 ? "چیدمان" : "آپلود"}
// // //           </span>
// // //         </div>
// // //         <div
// // //           className={`h-1 flex-1 transition-colors glass-effect ${
// // //             currentStep === "settings" || currentStep === "convert"
// // //               ? "bg-primary/50"
// // //               : "bg-gray-300/50 dark:bg-gray-600/50"
// // //           }`}
// // //         />
// // //         {/* Step 2 */}
// // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // //           <div
// // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// // //               currentStep === "settings"
// // //                 ? "bg-primary/20 border-primary/50 text-primary"
// // //                 : currentStep === "convert"
// // //                 ? "bg-green-500/20 border-green-500/50 text-green-600 dark:text-green-400"
// // //                 : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
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
// // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// // //             تنظیمات
// // //           </span>
// // //         </div>
// // //         <div
// // //           className={`h-1 flex-1 transition-colors glass-effect ${
// // //             currentStep === "convert"
// // //               ? "bg-primary/50"
// // //               : "bg-gray-300/50 dark:bg-gray-600/50"
// // //           }`}
// // //         />
// // //         {/* Step 3 */}
// // //         <div className="flex flex-col items-center flex-1 max-w-24">
// // //           <div
// // //             className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all border-2 backdrop-blur-sm glass-effect ${
// // //               currentStep === "convert"
// // //                 ? "bg-primary/20 border-primary/50 text-primary"
// // //                 : "border-gray-300/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400"
// // //             }`}
// // //           >
// // //             <span className="text-sm sm:text-base md:text-lg font-bold">3</span>
// // //           </div>
// // //           <span className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
// // //             دانلود
// // //           </span>
// // //         </div>
// // //       </div>
// // //       {/* Content */}
// // //       <div className="rounded-2xl shadow-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/20">
// // //         {/* Upload Step - فقط زمانی نشان داده می‌شود که هیچ عکسی آپلود نشده باشد */}
// // //         {currentStep === "upload" && images.length === 0 && (
// // //           <div className="space-y-4 sm:space-y-6">
// // //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// // //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// // //                 آپلود عکس‌ها
// // //               </h2>
// // //             </div>
// // //             <div
// // //               className={`border-2 border-dashed rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center transition-all backdrop-blur-sm ${
// // //                 isDragging
// // //                   ? "border-primary/50 bg-primary/5"
// // //                   : "border-gray-300/50 dark:border-gray-600/50 bg-white/10 dark:bg-black/10"
// // //               }`}
// // //               onDragOver={handleDragOver}
// // //               onDragLeave={handleDragLeave}
// // //               onDrop={handleDrop}
// // //             >
// // //               <Upload className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-primary mb-2 sm:mb-3 md:mb-4" />
// // //               <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
// // //                 عکس‌ها را اینجا بکشید
// // //               </p>
// // //               <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
// // //                 یا
// // //               </p>
// // //               <button
// // //                 onClick={handleAddMoreClick}
// // //                 className="mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary transition text-sm sm:text-base backdrop-blur-sm glass-effect"
// // //               >
// // //                 انتخاب از دستگاه
// // //               </button>
// // //               <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 sm:mt-3">
// // //                 JPG, PNG, WEBP • حداکثر 10MB
// // //               </p>
// // //             </div>
// // //           </div>
// // //         )}
// // //         {/* Layout Section - وقتی عکس آپلود شده باشد */}
// // //         {currentStep === "upload" && images.length > 0 && (
// // //           <div className="space-y-4 sm:space-y-6">
// // //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// // //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// // //                 چیدمان عکس‌ها
// // //               </h2>
// // //               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// // //                 {images.length} عکس
// // //               </span>
// // //             </div>
// // //             {/* درگ اند دراپ برای کل کادر */}
// // //             <DndContext
// // //               sensors={sensors}
// // //               collisionDetection={closestCenter}
// // //               onDragEnd={handleDragEnd}
// // //               modifiers={[]}
// // //             >
// // //               <SortableContext
// // //                 items={images.map((img) => img.id)}
// // //                 strategy={rectSortingStrategy}
// // //               >
// // //                 <div className="flex flex-col gap-5">
// // //                   {/* کادر اصلی چیدمان */}
// // //                   <div
// // //                     className="border-2 border-dashed border-gray-300/50 dark:border-gray-600/50
// // //                     rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 min-h-[300px] bg-white/5 dark:bg-black/5
// // //                     transition-all duration-300"
// // //                   >
// // //                     {/* گرید ریسپانسیو: در موبایل 2 ستون، در تبلت 3 ستون، در دسکتاپ 4-5 ستون */}
// // //                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-3 sm:gap-4">
// // //                       {images.map((img, i) => (
// // //                         <ImagePreview
// // //                           key={img.id}
// // //                           image={img}
// // //                           index={i}
// // //                           onNameChange={handleNameChange}
// // //                           onDelete={handleDelete}
// // //                           onMove={handleMove}
// // //                           onPreview={handleImagePreview}
// // //                           canMoveUp={i > 0}
// // //                           canMoveDown={i < images.length - 1}
// // //                         />
// // //                       ))}
// // //                       {/* Add More Button as last item in grid */}
// // //                       <button
// // //                         onClick={handleAddMoreClick}
// // //                         className="aspect-[4/3] border-2 border-dashed border-gray-300/50 dark:border-gray-600/50
// // //                         rounded-lg flex flex-col items-center justify-center gap-1 sm:gap-2
// // //                         hover:border-primary/50 hover:bg-primary/5 transition backdrop-blur-sm glass-effect
// // //                         cursor-pointer"
// // //                       >
// // //                         <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 dark:text-gray-400" />
// // //                         <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
// // //                           افزودن عکس
// // //                         </span>
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                   <div className="flex flex-col justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
// // //                     <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
// // //                       <span className="text-xs sm:text-sm text-center sm:text-right">
// // //                         برای جابجایی: عکس را نگه دارید و بکشید
// // //                       </span>
// // //                       <span className="hidden sm:inline text-xs">•</span>
// // //                       <span className="text-xs sm:text-sm text-center sm:text-right">
// // //                         برای پیش‌نمایش: روی عکس کلیک کنید
// // //                       </span>
// // //                     </div>
// // //                     <div className="flex gap-2 w-full sm:w-auto">
// // //                       <button
// // //                         onClick={handleAddMoreClick}
// // //                         className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2
// // //                         border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium
// // //                         hover:bg-white/10 dark:hover:bg-black/10 transition text-sm backdrop-blur-sm
// // //                         glass-effect text-gray-700 dark:text-gray-300"
// // //                       >
// // //                         <Plus className="w-4 h-4" />
// // //                         افزودن بیشتر
// // //                       </button>
// // //                       <button
// // //                         onClick={goToNextStep}
// // //                         disabled={images.length === 0}
// // //                         className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2
// // //                         bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition
// // //                         text-sm backdrop-blur-sm glass-effect disabled:opacity-50 disabled:cursor-not-allowed"
// // //                       >
// // //                         ادامه
// // //                         <ChevronLeft className="w-4 h-4" />
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </SortableContext>
// // //             </DndContext>
// // //           </div>
// // //         )}
// // //         {/* Settings Step */}
// // //         {currentStep === "settings" && (
// // //           <div className="space-y-6">
// // //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// // //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// // //                 تنظیمات PDF
// // //               </h2>
// // //               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// // //                 {images.length} عکس
// // //               </span>
// // //             </div>
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               <div className="space-y-4">
// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
// // //                     جهت کاغذ
// // //                   </label>
// // //                   <select
// // //                     value={settings.orientation}
// // //                     onChange={(e) =>
// // //                       handleSettingChange("orientation", e.target.value)
// // //                     }
// // //                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
// // //                   >
// // //                     <option value="portrait">عمودی</option>
// // //                     <option value="landscape">افقی</option>
// // //                   </select>
// // //                 </div>
// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
// // //                     سایز کاغذ
// // //                   </label>
// // //                   <select
// // //                     value={settings.paperSize}
// // //                     onChange={(e) =>
// // //                       handleSettingChange("paperSize", e.target.value)
// // //                     }
// // //                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
// // //                   >
// // //                     <option value="A4">A4</option>
// // //                     <option value="A3">A3</option>
// // //                     <option value="letter">Letter</option>
// // //                     <option value="legal">Legal</option>
// // //                   </select>
// // //                 </div>
// // //               </div>
// // //               <div className="space-y-4">
// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
// // //                     حاشیه
// // //                   </label>
// // //                   <select
// // //                     value={settings.margin}
// // //                     onChange={(e) =>
// // //                       handleSettingChange("margin", e.target.value)
// // //                     }
// // //                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
// // //                   >
// // //                     <option value="small">کوچک</option>
// // //                     <option value="medium">متوسط</option>
// // //                     <option value="large">بزرگ</option>
// // //                     <option value="none">بدون حاشیه</option>
// // //                   </select>
// // //                 </div>
// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
// // //                     کیفیت
// // //                   </label>
// // //                   <select
// // //                     value={settings.quality}
// // //                     onChange={(e) =>
// // //                       handleSettingChange("quality", e.target.value)
// // //                     }
// // //                     className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
// // //                   >
// // //                     <option value="low">پایین</option>
// // //                     <option value="standard">استاندارد</option>
// // //                     <option value="high">بالا</option>
// // //                   </select>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             {/* Preview Section - اضافه شده برای نمایش پیش‌نمایش تنظیمات */}
// // //             <div className="mt-6 p-4 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm">
// // //               <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
// // //                 پیش‌نمایش تنظیمات
// // //               </h3>
// // //               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
// // //                 <div>
// // //                   <span className="text-gray-600 dark:text-gray-400">جهت:</span>
// // //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// // //                     {settings.orientation === "portrait" ? "عمودی" : "افقی"}
// // //                   </span>
// // //                 </div>
// // //                 <div>
// // //                   <span className="text-gray-600 dark:text-gray-400">
// // //                     سایز:
// // //                   </span>
// // //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// // //                     {settings.paperSize}
// // //                   </span>
// // //                 </div>
// // //                 <div>
// // //                   <span className="text-gray-600 dark:text-gray-400">
// // //                     حاشیه:
// // //                   </span>
// // //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// // //                     {settings.margin === "small"
// // //                       ? "کوچک"
// // //                       : settings.margin === "medium"
// // //                       ? "متوسط"
// // //                       : settings.margin === "large"
// // //                       ? "بزرگ"
// // //                       : "بدون حاشیه"}
// // //                   </span>
// // //                 </div>
// // //                 <div>
// // //                   <span className="text-gray-600 dark:text-gray-400">
// // //                     کیفیت:
// // //                   </span>
// // //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// // //                     {settings.quality === "low"
// // //                       ? "پایین"
// // //                       : settings.quality === "standard"
// // //                       ? "استاندارد"
// // //                       : "بالا"}
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
// // //               <button
// // //                 onClick={goToPreviousStep}
// // //                 className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // //               >
// // //                 <ChevronRight className="w-4 h-4" />
// // //                 بازگشت
// // //               </button>
// // //               <button
// // //                 onClick={goToNextStep}
// // //                 className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
// // //               >
// // //                 ادامه به تبدیل
// // //                 <ChevronLeft className="w-4 h-4" />
// // //               </button>
// // //             </div>
// // //           </div>
// // //         )}
// // //         {/* Convert Step */}
// // //         {currentStep === "convert" && (
// // //           <div className="space-y-6">
// // //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// // //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// // //                 تبدیل و دانلود
// // //               </h2>
// // //               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// // //                 {images.length} عکس
// // //               </span>
// // //             </div>
// // //             {/* نمایش خلاصه تنظیمات */}
// // //             <div className="p-4 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm">
// // //               <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
// // //                 خلاصه تنظیمات
// // //               </h3>
// // //               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
// // //                 <div>
// // //                   <span className="text-gray-600 dark:text-gray-400">جهت:</span>
// // //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// // //                     {settings.orientation === "portrait" ? "عمودی" : "افقی"}
// // //                   </span>
// // //                 </div>
// // //                 <div>
// // //                   <span className="text-gray-600 dark:text-gray-400">
// // //                     سایز:
// // //                   </span>
// // //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// // //                     {settings.paperSize}
// // //                   </span>
// // //                 </div>
// // //                 <div>
// // //                   <span className="text-gray-600 dark:text-gray-400">
// // //                     حاشیه:
// // //                   </span>
// // //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// // //                     {settings.margin === "small"
// // //                       ? "کوچک"
// // //                       : settings.margin === "medium"
// // //                       ? "متوسط"
// // //                       : settings.margin === "large"
// // //                       ? "بزرگ"
// // //                       : "بدون حاشیه"}
// // //                   </span>
// // //                 </div>
// // //                 <div>
// // //                   <span className="text-gray-600 dark:text-gray-400">
// // //                     کیفیت:
// // //                   </span>
// // //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// // //                     {settings.quality === "low"
// // //                       ? "پایین"
// // //                       : settings.quality === "standard"
// // //                       ? "استاندارد"
// // //                       : "بالا"}
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             {conversionStatus === "idle" && (
// // //               <div className="text-center space-y-4">
// // //                 <FileImage className="w-16 h-16 mx-auto text-primary" />
// // //                 <p className="text-lg text-gray-700 dark:text-gray-300">
// // //                   آماده برای تبدیل {images.length} عکس به PDF
// // //                 </p>
// // //                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
// // //                   <button
// // //                     onClick={handleConvert}
// // //                     className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
// // //                   >
// // //                     <Settings className="w-5 h-5" />
// // //                     شروع تبدیل
// // //                   </button>
// // //                   <button
// // //                     onClick={handleDownloadZIP}
// // //                     className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // //                   >
// // //                     <Folder className="w-5 h-5" />
// // //                     دانلود ZIP
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             )}
// // //             {conversionStatus === "converting" && (
// // //               <div className="text-center space-y-4">
// // //                 <Loader2 className="w-12 h-12 mx-auto text-primary animate-spin" />
// // //                 <div className="space-y-2">
// // //                   <p className="text-lg text-gray-700 dark:text-gray-300">
// // //                     در حال تبدیل...
// // //                   </p>
// // //                   <p className="text-sm text-gray-600 dark:text-gray-400">
// // //                     {conversionProgress.status}
// // //                   </p>
// // //                   <div className="w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-2">
// // //                     <div
// // //                       className="bg-primary h-2 rounded-full transition-all duration-300"
// // //                       style={{
// // //                         width: `${
// // //                           (conversionProgress.current /
// // //                             conversionProgress.total) *
// // //                           100
// // //                         }%`,
// // //                       }}
// // //                     />
// // //                   </div>
// // //                   <p className="text-xs text-gray-500 dark:text-gray-400">
// // //                     {conversionProgress.current} از {conversionProgress.total}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             )}
// // //             {conversionStatus === "completed" && pdfBlob && (
// // //               <div className="text-center space-y-4">
// // //                 <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
// // //                 <p className="text-lg text-gray-700 dark:text-gray-300">
// // //                   تبدیل با موفقیت انجام شد!
// // //                 </p>
// // //                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
// // //                   <button
// // //                     onClick={handleDownloadPDF}
// // //                     className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500/80 text-white rounded-lg font-medium hover:bg-green-500 transition backdrop-blur-sm glass-effect"
// // //                   >
// // //                     <Download className="w-5 h-5" />
// // //                     دانلود PDF
// // //                   </button>
// // //                   <button
// // //                     onClick={resetConverter}
// // //                     className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // //                   >
// // //                     <RefreshCw className="w-5 h-5" />
// // //                     شروع جدید
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             )}
// // //             {conversionStatus === "error" && (
// // //               <div className="text-center space-y-4">
// // //                 <AlertCircle className="w-16 h-16 mx-auto text-red-500" />
// // //                 <p className="text-lg text-red-600 dark:text-red-400">
// // //                   خطا در تبدیل
// // //                 </p>
// // //                 <div className="flex gap-3 justify-center">
// // //                   <button
// // //                     onClick={handleConvert}
// // //                     className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
// // //                   >
// // //                     <RefreshCw className="w-5 h-5" />
// // //                     تلاش مجدد
// // //                   </button>
// // //                   <button
// // //                     onClick={goToPreviousStep}
// // //                     className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // //                   >
// // //                     بازگشت
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             )}
// // //             <div className="flex justify-center pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
// // //               <button
// // //                 onClick={goToPreviousStep}
// // //                 className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// // //               >
// // //                 <ChevronRight className="w-4 h-4" />
// // //                 بازگشت به تنظیمات
// // //               </button>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //       {/* Hidden file input for adding more images */}
// // //       <input
// // //         ref={fileInputRef}
// // //         type="file"
// // //         multiple
// // //         accept=".jpg,.jpeg,.png,.webp"
// // //         onChange={handleFileInputChange}
// // //         className="hidden"
// // //       />
// // //       {/* Image Preview Modal */}
// // //       <ImagePreviewModal />
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
// //   X,
// //   Maximize2,
// //   Eye,
// // } from "lucide-react";
// // import {
// //   DndContext,
// //   closestCenter,
// //   KeyboardSensor,
// //   PointerSensor,
// //   useSensor,
// //   useSensors,
// //   DragEndEvent,
// //   TouchSensor,
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
// // // تابع کمکی برای تبدیل سایز کاغذ به ابعاد پیکسل برای پیش‌نمایش
// // const getPaperDimensions = (paperSize: string, orientation: string) => {
// //   const dimensions: { [key: string]: { width: number; height: number } } = {
// //     A4: { width: 210, height: 297 },
// //     A3: { width: 297, height: 420 },
// //     letter: { width: 216, height: 279 },
// //     legal: { width: 216, height: 356 },
// //   };
// //   const size = dimensions[paperSize] || dimensions.A4;
// //   return orientation === "landscape"
// //     ? { width: size.height, height: size.width }
// //     : size;
// // };
// // // تابع کمکی برای محاسبه حاشیه
// // const getMarginSize = (margin: string) => {
// //   const margins: { [key: string]: number } = {
// //     none: 0,
// //     small: 10,
// //     medium: 20,
// //     large: 30,
// //   };
// //   return margins[margin] || margins.medium;
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
// //   const [triggerFileInput, setTriggerFileInput] = useState(false);
// //   const [selectedImage, setSelectedImage] = useState<ImageFile | null>(null);
// //   const [isPreviewOpen, setIsPreviewOpen] = useState(false);
// //   const fileInputRef = useRef<HTMLInputElement>(null);
// //   const [isDragging, setIsDragging] = useState(false);
// //   // بهبود سنسورها برای موبایل - تنظیمات بهینه‌تر
// //   const sensors = useSensors(
// //     useSensor(PointerSensor, {
// //       activationConstraint: {
// //         distance: 3,
// //       },
// //     }),
// //     useSensor(TouchSensor, {
// //       activationConstraint: {
// //         delay: 100,
// //         tolerance: 10,
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
// //   // Trigger file input when state changes
// //   useEffect(() => {
// //     if (triggerFileInput && fileInputRef.current) {
// //       console.log("🎯 Triggering file input programmatically");
// //       fileInputRef.current.click();
// //       setTriggerFileInput(false);
// //     }
// //   }, [triggerFileInput]);
// //   // Handlers
// //   const handleNameChange = useCallback((id: string, name: string) => {
// //     setImages((prev) =>
// //       prev.map((img) => (img.id === id ? { ...img, name } : img))
// //     );
// //   }, []);
// //   const handleDelete = useCallback(
// //     (id: string) => {
// //       setImages((prev) => {
// //         const imageToDelete = prev.find((img) => img.id === id);
// //         if (imageToDelete) {
// //           URL.revokeObjectURL(imageToDelete.url);
// //           // اگر تصویر در حال پیش‌نمایش حذف شد، پنجره پیش‌نمایش را ببند
// //           if (selectedImage?.id === id) {
// //             setSelectedImage(null);
// //             setIsPreviewOpen(false);
// //           }
// //         }
// //         return prev.filter((img) => img.id !== id);
// //       });
// //     },
// //     [selectedImage]
// //   );
// //   const handleMove = useCallback((id: string, direction: "up" | "down") => {
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
// //   }, []);
// //   const handleDragEnd = useCallback((event: DragEndEvent) => {
// //     const { active, over } = event;
// //     if (over && active.id !== over.id) {
// //       setImages((items) => {
// //         const oldIndex = items.findIndex((item) => item.id === active.id);
// //         const newIndex = items.findIndex((item) => item.id === over.id);
// //         return arrayMove(items, oldIndex, newIndex);
// //       });
// //     }
// //   }, []);
// //   const handleFileSelect = useCallback((files: FileList | null) => {
// //     if (!files) return;
// //     console.log("📁 Files selected:", files.length);
// //     const newImages: ImageFile[] = [];
// //     Array.from(files).forEach((file) => {
// //       const validation = validateFile(file);
// //       if (validation.isValid) {
// //         const url = URL.createObjectURL(file);
// //         newImages.push({ id: generateId(), url, name: file.name, file });
// //         console.log("✅ Added file:", file.name);
// //       } else {
// //         console.warn("❌ Invalid file:", file.name, validation.error);
// //         alert(validation.error);
// //       }
// //     });
// //     if (newImages.length > 0) {
// //       setImages((prev) => [...prev, ...newImages]);
// //     }
// //   }, []);
// //   const handleFileInputChange = useCallback(
// //     (e: React.ChangeEvent<HTMLInputElement>) => {
// //       console.log("🔄 File input changed");
// //       handleFileSelect(e.target.files);
// //       // Reset the input value to allow selecting the same file again
// //       if (fileInputRef.current) {
// //         fileInputRef.current.value = "";
// //       }
// //     },
// //     [handleFileSelect]
// //   );
// //   const handleDragOver = useCallback((e: React.DragEvent) => {
// //     e.preventDefault();
// //     setIsDragging(true);
// //   }, []);
// //   const handleDragLeave = useCallback((e: React.DragEvent) => {
// //     e.preventDefault();
// //     if (e.currentTarget === e.target) {
// //       setIsDragging(false);
// //     }
// //   }, []);
// //   const handleDrop = useCallback(
// //     (e: React.DragEvent) => {
// //       e.preventDefault();
// //       setIsDragging(false);
// //       handleFileSelect(e.dataTransfer.files);
// //     },
// //     [handleFileSelect]
// //   );
// //   const handleAddMoreClick = useCallback(() => {
// //     console.log("🔘 Add more button clicked");
// //     setTriggerFileInput(true);
// //   }, []);
// //   const handleSettingChange = useCallback(
// //     (key: keyof PDFSettings, value: string) => {
// //       setSettings((prev) => ({ ...prev, [key]: value }));
// //     },
// //     []
// //   );
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
// //     document.body.appendChild(a);
// //     a.click();
// //     document.body.removeChild(a);
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
// //       document.body.appendChild(a);
// //       a.click();
// //       document.body.removeChild(a);
// //       URL.revokeObjectURL(url);
// //       setConversionStatus("idle");
// //     } catch (error) {
// //       console.error("ZIP creation error:", error);
// //       alert("خطا در ساخت ZIP");
// //       setConversionStatus("idle");
// //     }
// //   }, [images]);
// //   const handleImagePreview = useCallback((image: ImageFile) => {
// //     setSelectedImage(image);
// //     setIsPreviewOpen(true);
// //   }, []);
// //   const handleClosePreview = useCallback(() => {
// //     setIsPreviewOpen(false);
// //     setSelectedImage(null);
// //   }, []);
// //   const goToNextStep = useCallback(() => {
// //     if (currentStep === "upload" && images.length > 0)
// //       setCurrentStep("settings");
// //     else if (currentStep === "settings") setCurrentStep("convert");
// //   }, [currentStep, images.length]);
// //   const goToPreviousStep = useCallback(() => {
// //     if (currentStep === "settings") setCurrentStep("upload");
// //     else if (currentStep === "convert") setCurrentStep("settings");
// //   }, [currentStep]);
// //   const resetConverter = useCallback(() => {
// //     images.forEach((img) => URL.revokeObjectURL(img.url));
// //     setImages([]);
// //     setSettings(initialSettings);
// //     setCurrentStep("upload");
// //     setConversionStatus("idle");
// //     setPdfBlob(null);
// //     setSelectedImage(null);
// //     setIsPreviewOpen(false);
// //   }, [images]);
// //   // کامپوننت پیش‌نمایش PDF
// //   const PDFPreview = () => {
// //     const dimensions = getPaperDimensions(
// //       settings.paperSize,
// //       settings.orientation
// //     );
// //     const margin = getMarginSize(settings.margin);
// //     // مقیاس برای نمایش در پیش‌نمایش
// //     const scale = 0.8;
// //     const previewWidth = dimensions.width * scale;
// //     const previewHeight = dimensions.height * scale;
// //     const previewMargin = margin * scale;
// //     return (
// //       <div className="flex flex-col items-center space-y-4 p-4 bg-white/5 dark:bg-black/5 rounded-lg border border-gray-300/50 dark:border-gray-600/50">
// //         <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
// //           <Eye className="w-4 h-4" />
// //           پیش‌نمایش خروجی PDF
// //         </div>
// //         <div className="relative bg-white shadow-lg rounded-sm border border-gray-300">
// //           {/* کاغذ */}
// //           <div
// //             className="bg-white relative"
// //             style={{
// //               width: `${previewWidth}px`,
// //               height: `${previewHeight}px`,
// //               padding: `${previewMargin}px`,
// //             }}
// //           >
// //             {/* محتوای نمونه */}
// //             <div className="w-full h-full border border-dashed border-gray-300/50 rounded flex flex-col items-center justify-center p-2">
// //               {images.length > 0 ? (
// //                 <>
// //                   <div className="text-xs text-gray-500 text-center mb-2">
// //                     {images.length} عکس در {settings.paperSize}
// //                   </div>
// //                   <div className="grid grid-cols-2 gap-1 w-full flex-1">
// //                     {images.slice(0, 4).map((img, index) => (
// //                       <div
// //                         key={img.id}
// //                         className="bg-gray-100 border border-gray-300 rounded flex items-center justify-center overflow-hidden"
// //                         title={img.name}
// //                       >
// //                         <div className="text-[8px] text-gray-500 p-1 truncate w-full text-center">
// //                           {index === 3 && images.length > 4
// //                             ? `+${images.length - 3} بیشتر`
// //                             : `عکس ${index + 1}`}
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </>
// //               ) : (
// //                 <div className="text-xs text-gray-400 text-center">
// //                   عکسی برای نمایش وجود ندارد
// //                 </div>
// //               )}
// //             </div>
// //             {/* نشانگر جهت */}
// //             <div
// //               className={`absolute bottom-1 left-1 text-[8px] text-gray-400 ${
// //                 settings.orientation === "landscape"
// //                   ? "transform rotate-90 origin-left"
// //                   : ""
// //               }`}
// //             >
// //               {settings.orientation === "portrait" ? "عمودی" : "افقی"}
// //             </div>
// //           </div>
// //         </div>
// //         {/* اطلاعات سایز */}
// //         <div className="text-xs text-gray-500 text-center">
// //           سایز: {settings.paperSize} • جهت:{" "}
// //           {settings.orientation === "portrait" ? "عمودی" : "افقی"} • حاشیه:{" "}
// //           {settings.margin === "none" ? "بدون" : settings.margin}
// //         </div>
// //       </div>
// //     );
// //   };
// //   // Modal Preview Component
// //   const ImagePreviewModal = () => {
// //     if (!isPreviewOpen || !selectedImage) return null;
// //     return (
// //       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
// //         <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
// //           <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
// //             {/* Header */}
// //             <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
// //               <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
// //                 {selectedImage.name}
// //               </h3>
// //               <div className="flex items-center gap-2">
// //                 <button
// //                   onClick={() => window.open(selectedImage.url, "_blank")}
// //                   className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
// //                   title="باز کردن در تب جدید"
// //                 >
// //                   <Maximize2 className="w-5 h-5" />
// //                 </button>
// //                 <button
// //                   onClick={handleClosePreview}
// //                   className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors"
// //                 >
// //                   <X className="w-6 h-6" />
// //                 </button>
// //               </div>
// //             </div>
// //             {/* Image */}
// //             <div className="flex items-center justify-center p-4 max-h-[70vh] overflow-auto">
// //               <img
// //                 src={selectedImage.url}
// //                 alt={selectedImage.name}
// //                 className="max-w-full max-h-full object-contain rounded-lg"
// //               />
// //             </div>
// //             {/* Footer */}
// //             <div className="p-4 border-t border-gray-200 dark:border-gray-700">
// //               <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
// //                 <div className="text-sm text-gray-600 dark:text-gray-400">
// //                   برای بستن، روی دکمه × کلیک کنید یا ESC را فشار دهید
// //                 </div>
// //                 <button
// //                   onClick={handleClosePreview}
// //                   className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition"
// //                 >
// //                   بستن
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   };
// //   return (
// //     <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6 backdrop-blur-sm">
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
// //             {images.length > 0 ? "چیدمان" : "آپلود"}
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
// //         <div className="flex flex-col items-center flex-1 max-w-24">
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
// //       <div className="rounded-2xl shadow-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/20">
// //         {/* Upload Step - فقط زمانی نشان داده می‌شود که هیچ عکسی آپلود نشده باشد */}
// //         {currentStep === "upload" && images.length === 0 && (
// //           <div className="space-y-4 sm:space-y-6">
// //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// //                 آپلود عکس‌ها
// //               </h2>
// //             </div>
// //             <div
// //               className={`border-2 border-dashed rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center transition-all backdrop-blur-sm ${
// //                 isDragging
// //                   ? "border-primary/50 bg-primary/5"
// //                   : "border-gray-300/50 dark:border-gray-600/50 bg-white/10 dark:bg-black/10"
// //               }`}
// //               onDragOver={handleDragOver}
// //               onDragLeave={handleDragLeave}
// //               onDrop={handleDrop}
// //             >
// //               <Upload className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-primary mb-2 sm:mb-3 md:mb-4" />
// //               <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
// //                 عکس‌ها را اینجا بکشید
// //               </p>
// //               <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
// //                 یا
// //               </p>
// //               <button
// //                 onClick={handleAddMoreClick}
// //                 className="mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary transition text-sm sm:text-base backdrop-blur-sm glass-effect"
// //               >
// //                 انتخاب از دستگاه
// //               </button>
// //               <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 sm:mt-3">
// //                 JPG, PNG, WEBP • حداکثر 10MB
// //               </p>
// //             </div>
// //           </div>
// //         )}
// //         {/* Layout Section - وقتی عکس آپلود شده باشد */}
// //         {currentStep === "upload" && images.length > 0 && (
// //           <div className="space-y-4 sm:space-y-6">
// //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// //                 چیدمان عکس‌ها
// //               </h2>
// //               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// //                 {images.length} عکس
// //               </span>
// //             </div>
// //             {/* درگ اند دراپ برای کل کادر */}
// //             <DndContext
// //               sensors={sensors}
// //               collisionDetection={closestCenter}
// //               onDragEnd={handleDragEnd}
// //               modifiers={[]}
// //             >
// //               <SortableContext
// //                 items={images.map((img) => img.id)}
// //                 strategy={rectSortingStrategy}
// //               >
// //                 <div className="flex flex-col gap-5">
// //                   {/* کادر اصلی چیدمان */}
// //                   <div
// //                     className="border-2 border-dashed border-gray-300/50 dark:border-gray-600/50
// //                     rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 min-h-[300px] bg-white/5 dark:bg-black/5
// //                     transition-all duration-300"
// //                   >
// //                     {/* گرید ریسپانسیو: در موبایل 2 ستون، در تبلت 3 ستون، در دسکتاپ 4-5 ستون */}
// //                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-3 sm:gap-4">
// //                       {images.map((img, i) => (
// //                         <ImagePreview
// //                           key={img.id}
// //                           image={img}
// //                           index={i}
// //                           onNameChange={handleNameChange}
// //                           onDelete={handleDelete}
// //                           onMove={handleMove}
// //                           onPreview={handleImagePreview}
// //                           canMoveUp={i > 0}
// //                           canMoveDown={i < images.length - 1}
// //                         />
// //                       ))}
// //                       {/* Add More Button as last item in grid */}
// //                       <button
// //                         onClick={handleAddMoreClick}
// //                         className="aspect-[4/3] border-2 border-dashed border-gray-300/50 dark:border-gray-600/50
// //                         rounded-lg flex flex-col items-center justify-center gap-1 sm:gap-2
// //                         hover:border-primary/50 hover:bg-primary/5 transition backdrop-blur-sm glass-effect
// //                         cursor-pointer"
// //                       >
// //                         <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 dark:text-gray-400" />
// //                         <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
// //                           افزودن عکس
// //                         </span>
// //                       </button>
// //                     </div>
// //                   </div>
// //                   <div className="flex flex-col justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
// //                     <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
// //                       <span className="text-xs sm:text-sm text-center sm:text-right">
// //                         برای جابجایی: عکس را نگه دارید و بکشید
// //                       </span>
// //                       <span className="hidden sm:inline text-xs">•</span>
// //                       <span className="text-xs sm:text-sm text-center sm:text-right">
// //                         برای پیش‌نمایش: روی عکس کلیک کنید
// //                       </span>
// //                     </div>
// //                     <div className="flex gap-2 w-full sm:w-auto">
// //                       <button
// //                         onClick={handleAddMoreClick}
// //                         className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2
// //                         border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium
// //                         hover:bg-white/10 dark:hover:bg-black/10 transition text-sm backdrop-blur-sm
// //                         glass-effect text-gray-700 dark:text-gray-300"
// //                       >
// //                         <Plus className="w-4 h-4" />
// //                         افزودن بیشتر
// //                       </button>
// //                       <button
// //                         onClick={goToNextStep}
// //                         disabled={images.length === 0}
// //                         className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2
// //                         bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition
// //                         text-sm backdrop-blur-sm glass-effect disabled:opacity-50 disabled:cursor-not-allowed"
// //                       >
// //                         ادامه
// //                         <ChevronLeft className="w-4 h-4" />
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </SortableContext>
// //             </DndContext>
// //           </div>
// //         )}
// //         {/* Settings Step */}
// //         {currentStep === "settings" && (
// //           <div className="space-y-6">
// //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// //                 تنظیمات PDF
// //               </h2>
// //               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// //                 {images.length} عکس
// //               </span>
// //             </div>
// //             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// //               {/* تنظیمات */}
// //               <div className="lg:col-span-2 space-y-4">
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
// //                       جهت کاغذ
// //                     </label>
// //                     <select
// //                       value={settings.orientation}
// //                       onChange={(e) =>
// //                         handleSettingChange("orientation", e.target.value)
// //                       }
// //                       className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
// //                     >
// //                       <option value="portrait">عمودی</option>
// //                       <option value="landscape">افقی</option>
// //                     </select>
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
// //                       سایز کاغذ
// //                     </label>
// //                     <select
// //                       value={settings.paperSize}
// //                       onChange={(e) =>
// //                         handleSettingChange("paperSize", e.target.value)
// //                       }
// //                       className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
// //                     >
// //                       <option value="A4">A4</option>
// //                       <option value="A3">A3</option>
// //                       <option value="letter">Letter</option>
// //                       <option value="legal">Legal</option>
// //                     </select>
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
// //                       حاشیه
// //                     </label>
// //                     <select
// //                       value={settings.margin}
// //                       onChange={(e) =>
// //                         handleSettingChange("margin", e.target.value)
// //                       }
// //                       className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
// //                     >
// //                       <option value="small">کوچک</option>
// //                       <option value="medium">متوسط</option>
// //                       <option value="large">بزرگ</option>
// //                       <option value="none">بدون حاشیه</option>
// //                     </select>
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
// //                       کیفیت
// //                     </label>
// //                     <select
// //                       value={settings.quality}
// //                       onChange={(e) =>
// //                         handleSettingChange("quality", e.target.value)
// //                       }
// //                       className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
// //                     >
// //                       <option value="low">پایین</option>
// //                       <option value="standard">استاندارد</option>
// //                       <option value="high">بالا</option>
// //                     </select>
// //                   </div>
// //                 </div>
// //                 {/* Preview Section - اضافه شده برای نمایش پیش‌نمایش تنظیمات */}
// //                 <div className="mt-4 p-4 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm">
// //                   <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
// //                     پیش‌نمایش تنظیمات
// //                   </h3>
// //                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
// //                     <div>
// //                       <span className="text-gray-600 dark:text-gray-400">
// //                         جهت:
// //                       </span>
// //                       <span className="font-medium text-gray-800 dark:text-white mr-2">
// //                         {settings.orientation === "portrait" ? "عمودی" : "افقی"}
// //                       </span>
// //                     </div>
// //                     <div>
// //                       <span className="text-gray-600 dark:text-gray-400">
// //                         سایز:
// //                       </span>
// //                       <span className="font-medium text-gray-800 dark:text-white mr-2">
// //                         {settings.paperSize}
// //                       </span>
// //                     </div>
// //                     <div>
// //                       <span className="text-gray-600 dark:text-gray-400">
// //                         حاشیه:
// //                       </span>
// //                       <span className="font-medium text-gray-800 dark:text-white mr-2">
// //                         {settings.margin === "small"
// //                           ? "کوچک"
// //                           : settings.margin === "medium"
// //                           ? "متوسط"
// //                           : settings.margin === "large"
// //                           ? "بزرگ"
// //                           : "بدون حاشیه"}
// //                       </span>
// //                     </div>
// //                     <div>
// //                       <span className="text-gray-600 dark:text-gray-400">
// //                         کیفیت:
// //                       </span>
// //                       <span className="font-medium text-gray-800 dark:text-white mr-2">
// //                         {settings.quality === "low"
// //                           ? "پایین"
// //                           : settings.quality === "standard"
// //                           ? "استاندارد"
// //                           : "بالا"}
// //                       </span>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //               {/* پیش‌نمایش بصری PDF */}
// //               <div className="lg:col-span-1">
// //                 <PDFPreview />
// //               </div>
// //             </div>
// //             <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
// //               <button
// //                 onClick={goToPreviousStep}
// //                 className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// //               >
// //                 <ChevronRight className="w-4 h-4" />
// //                 بازگشت
// //               </button>
// //               <button
// //                 onClick={goToNextStep}
// //                 className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
// //               >
// //                 ادامه به تبدیل
// //                 <ChevronLeft className="w-4 h-4" />
// //               </button>
// //             </div>
// //           </div>
// //         )}
// //         {/* Convert Step */}
// //         {currentStep === "convert" && (
// //           <div className="space-y-6">
// //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
// //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
// //                 تبدیل و دانلود
// //               </h2>
// //               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
// //                 {images.length} عکس
// //               </span>
// //             </div>
// //             {/* نمایش خلاصه تنظیمات */}
// //             <div className="p-4 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm">
// //               <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
// //                 خلاصه تنظیمات
// //               </h3>
// //               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
// //                 <div>
// //                   <span className="text-gray-600 dark:text-gray-400">جهت:</span>
// //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// //                     {settings.orientation === "portrait" ? "عمودی" : "افقی"}
// //                   </span>
// //                 </div>
// //                 <div>
// //                   <span className="text-gray-600 dark:text-gray-400">
// //                     سایز:
// //                   </span>
// //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// //                     {settings.paperSize}
// //                   </span>
// //                 </div>
// //                 <div>
// //                   <span className="text-gray-600 dark:text-gray-400">
// //                     حاشیه:
// //                   </span>
// //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// //                     {settings.margin === "small"
// //                       ? "کوچک"
// //                       : settings.margin === "medium"
// //                       ? "متوسط"
// //                       : settings.margin === "large"
// //                       ? "بزرگ"
// //                       : "بدون حاشیه"}
// //                   </span>
// //                 </div>
// //                 <div>
// //                   <span className="text-gray-600 dark:text-gray-400">
// //                     کیفیت:
// //                   </span>
// //                   <span className="font-medium text-gray-800 dark:text-white mr-2">
// //                     {settings.quality === "low"
// //                       ? "پایین"
// //                       : settings.quality === "standard"
// //                       ? "استاندارد"
// //                       : "بالا"}
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //             {conversionStatus === "idle" && (
// //               <div className="text-center space-y-4">
// //                 <FileImage className="w-16 h-16 mx-auto text-primary" />
// //                 <p className="text-lg text-gray-700 dark:text-gray-300">
// //                   آماده برای تبدیل {images.length} عکس به PDF
// //                 </p>
// //                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
// //                   <button
// //                     onClick={handleConvert}
// //                     className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
// //                   >
// //                     <Settings className="w-5 h-5" />
// //                     شروع تبدیل
// //                   </button>
// //                   <button
// //                     onClick={handleDownloadZIP}
// //                     className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// //                   >
// //                     <Folder className="w-5 h-5" />
// //                     دانلود ZIP
// //                   </button>
// //                 </div>
// //               </div>
// //             )}
// //             {conversionStatus === "converting" && (
// //               <div className="text-center space-y-4">
// //                 <Loader2 className="w-12 h-12 mx-auto text-primary animate-spin" />
// //                 <div className="space-y-2">
// //                   <p className="text-lg text-gray-700 dark:text-gray-300">
// //                     در حال تبدیل...
// //                   </p>
// //                   <p className="text-sm text-gray-600 dark:text-gray-400">
// //                     {conversionProgress.status}
// //                   </p>
// //                   <div className="w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-2">
// //                     <div
// //                       className="bg-primary h-2 rounded-full transition-all duration-300"
// //                       style={{
// //                         width: `${
// //                           (conversionProgress.current /
// //                             conversionProgress.total) *
// //                           100
// //                         }%`,
// //                       }}
// //                     />
// //                   </div>
// //                   <p className="text-xs text-gray-500 dark:text-gray-400">
// //                     {conversionProgress.current} از {conversionProgress.total}
// //                   </p>
// //                 </div>
// //               </div>
// //             )}
// //             {conversionStatus === "completed" && pdfBlob && (
// //               <div className="text-center space-y-4">
// //                 <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
// //                 <p className="text-lg text-gray-700 dark:text-gray-300">
// //                   تبدیل با موفقیت انجام شد!
// //                 </p>
// //                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
// //                   <button
// //                     onClick={handleDownloadPDF}
// //                     className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500/80 text-white rounded-lg font-medium hover:bg-green-500 transition backdrop-blur-sm glass-effect"
// //                   >
// //                     <Download className="w-5 h-5" />
// //                     دانلود PDF
// //                   </button>
// //                   <button
// //                     onClick={resetConverter}
// //                     className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// //                   >
// //                     <RefreshCw className="w-5 h-5" />
// //                     شروع جدید
// //                   </button>
// //                 </div>
// //               </div>
// //             )}
// //             {conversionStatus === "error" && (
// //               <div className="text-center space-y-4">
// //                 <AlertCircle className="w-16 h-16 mx-auto text-red-500" />
// //                 <p className="text-lg text-red-600 dark:text-red-400">
// //                   خطا در تبدیل
// //                 </p>
// //                 <div className="flex gap-3 justify-center">
// //                   <button
// //                     onClick={handleConvert}
// //                     className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect"
// //                   >
// //                     <RefreshCw className="w-5 h-5" />
// //                     تلاش مجدد
// //                   </button>
// //                   <button
// //                     onClick={goToPreviousStep}
// //                     className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// //                   >
// //                     بازگشت
// //                   </button>
// //                 </div>
// //               </div>
// //             )}
// //             <div className="flex justify-center pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
// //               <button
// //                 onClick={goToPreviousStep}
// //                 className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300"
// //               >
// //                 <ChevronRight className="w-4 h-4" />
// //                 بازگشت به تنظیمات
// //               </button>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //       {/* Hidden file input for adding more images */}
// //       <input
// //         ref={fileInputRef}
// //         type="file"
// //         multiple
// //         accept=".jpg,.jpeg,.png,.webp"
// //         onChange={handleFileInputChange}
// //         className="hidden"
// //       />
// //       {/* Image Preview Modal */}
// //       <ImagePreviewModal />
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
//   X,
//   Maximize2,
//   Eye,
//   Smartphone,
//   Tablet,
//   Monitor,
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
// // تابع کمکی برای تبدیل سایز کاغذ به ابعاد پیکسل برای پیش‌نمایش
// const getPaperDimensions = (paperSize: string, orientation: string) => {
//   const dimensions: { [key: string]: { width: number; height: number } } = {
//     A4: { width: 210, height: 297 },
//     A3: { width: 297, height: 420 },
//     letter: { width: 216, height: 279 },
//     legal: { width: 216, height: 356 },
//   };
//   const size = dimensions[paperSize] || dimensions.A4;
//   return orientation === "landscape"
//     ? { width: size.height, height: size.width }
//     : size;
// };
// // تابع کمکی برای محاسبه حاشیه
// const getMarginSize = (margin: string) => {
//   const margins: { [key: string]: number } = {
//     none: 0,
//     small: 10,
//     medium: 20,
//     large: 30,
//   };
//   return margins[margin] || margins.medium;
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
//   const [triggerFileInput, setTriggerFileInput] = useState(false);
//   const [selectedImage, setSelectedImage] = useState<ImageFile | null>(null);
//   const [isPreviewOpen, setIsPreviewOpen] = useState(false);
//   const [deviceView, setDeviceView] = useState<"mobile" | "tablet" | "desktop">(
//     "desktop"
//   );
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const [isDragging, setIsDragging] = useState(false);
//   // بهبود سنسورها برای موبایل - تنظیمات بهینه‌تر
//   const sensors = useSensors(
//     useSensor(PointerSensor, {
//       activationConstraint: {
//         distance: 3,
//       },
//     }),
//     useSensor(TouchSensor, {
//       activationConstraint: {
//         delay: 100,
//         tolerance: 10,
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
//   // Trigger file input when state changes
//   useEffect(() => {
//     if (triggerFileInput && fileInputRef.current) {
//       console.log("🎯 Triggering file input programmatically");
//       fileInputRef.current.click();
//       setTriggerFileInput(false);
//     }
//   }, [triggerFileInput]);
//   // Handlers
//   const handleNameChange = useCallback((id: string, name: string) => {
//     setImages((prev) =>
//       prev.map((img) => (img.id === id ? { ...img, name } : img))
//     );
//   }, []);
//   const handleDelete = useCallback(
//     (id: string) => {
//       setImages((prev) => {
//         const imageToDelete = prev.find((img) => img.id === id);
//         if (imageToDelete) {
//           URL.revokeObjectURL(imageToDelete.url);
//           // اگر تصویر در حال پیش‌نمایش حذف شد، پنجره پیش‌نمایش را ببند
//           if (selectedImage?.id === id) {
//             setSelectedImage(null);
//             setIsPreviewOpen(false);
//           }
//         }
//         return prev.filter((img) => img.id !== id);
//       });
//     },
//     [selectedImage]
//   );
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
//     console.log("📁 Files selected:", files.length);
//     const newImages: ImageFile[] = [];
//     Array.from(files).forEach((file) => {
//       const validation = validateFile(file);
//       if (validation.isValid) {
//         const url = URL.createObjectURL(file);
//         newImages.push({ id: generateId(), url, name: file.name, file });
//         console.log("✅ Added file:", file.name);
//       } else {
//         console.warn("❌ Invalid file:", file.name, validation.error);
//         alert(validation.error);
//       }
//     });
//     if (newImages.length > 0) {
//       setImages((prev) => [...prev, ...newImages]);
//     }
//   }, []);
//   const handleFileInputChange = useCallback(
//     (e: React.ChangeEvent<HTMLInputElement>) => {
//       console.log("🔄 File input changed");
//       handleFileSelect(e.target.files);
//       // Reset the input value to allow selecting the same file again
//       if (fileInputRef.current) {
//         fileInputRef.current.value = "";
//       }
//     },
//     [handleFileSelect]
//   );
//   const handleDragOver = useCallback((e: React.DragEvent) => {
//     e.preventDefault();
//     setIsDragging(true);
//   }, []);
//   const handleDragLeave = useCallback((e: React.DragEvent) => {
//     e.preventDefault();
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
//     console.log("🔘 Add more button clicked");
//     setTriggerFileInput(true);
//   }, []);
//   const handleSettingChange = useCallback(
//     (key: keyof PDFSettings, value: string) => {
//       setSettings((prev) => ({ ...prev, [key]: value }));
//     },
//     []
//   );
//   // const handleConvert = useCallback(async () => {
//   //   if (images.length === 0) return;
//   //   setConversionStatus("converting");
//   //   setConversionProgress({
//   //     current: 0,
//   //     total: images.length,
//   //     status: "شروع تبدیل...",
//   //   });
//   //   try {
//   //     const blob = await PDFConverter.convertImagesToPDF(
//   //       images,
//   //       settings,
//   //       setConversionProgress
//   //     );
//   //     setPdfBlob(blob);
//   //     setConversionStatus("completed");
//   //   } catch (error) {
//   //     console.error("Conversion error:", error);
//   //     setConversionStatus("error");
//   //     alert("خطا در تبدیل. لطفاً دوباره تلاش کنید.");
//   //   }
//   // }, [images, settings]);
//   const handleConvert = useCallback(async () => {
//     if (images.length === 0) {
//       alert("لطفاً ابتدا تصاویر را آپلود کنید");
//       return;
//     }
//     // بررسی محدودیت‌های فنی
//     const limitations = PDFConverter.checkTechnicalLimitations(images);
//     if (limitations.errors.length > 0) {
//       alert(limitations.errors.join("\n"));
//       return;
//     }
//     if (limitations.warnings.length > 0) {
//       const proceed = confirm(
//         `هشدار:\n${limitations.warnings.join("\n")}\n\nآیا ادامه می‌دهید؟`
//       );
//       if (!proceed) return;
//     }
//     // اعتبارسنجی تصاویر
//     setConversionStatus("converting");
//     setConversionProgress({
//       current: 0,
//       total: images.length,
//       status: "در حال بررسی تصاویر...",
//     });
//     try {
//       const { valid, invalid } = await PDFConverter.validateImages(images);
//       if (invalid.length > 0) {
//         const continueConvert = confirm(
//           `تصاویر زیر قابل پردازش نیستند:\n${invalid.join("\n")}\n\nفقط ${
//             valid.length
//           } تصویر سالم تبدیل خواهد شد. ادامه می‌دهید؟`
//         );
//         if (!continueConvert) {
//           setConversionStatus("idle");
//           return;
//         }
//       }
//       if (valid.length === 0) {
//         alert("هیچ تصویر سالمی برای تبدیل وجود ندارد.");
//         setConversionStatus("idle");
//         return;
//       }
//       // شروع تبدیل
//       const blob = await PDFConverter.convertImagesToPDF(
//         valid,
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
//   const handleImagePreview = useCallback((image: ImageFile) => {
//     setSelectedImage(image);
//     setIsPreviewOpen(true);
//   }, []);
//   const handleClosePreview = useCallback(() => {
//     setIsPreviewOpen(false);
//     setSelectedImage(null);
//   }, []);
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
//     setSelectedImage(null);
//     setIsPreviewOpen(false);
//   }, [images]);
//   const PDFPreview = () => {
//     const dimensions = getPaperDimensions(
//       settings.paperSize,
//       settings.orientation
//     );
//     const margin = getMarginSize(settings.margin);
//     // مقیاس‌های مختلف برای دستگاه‌های مختلف
//     const scaleMap = {
//       mobile: 0.5,
//       tablet: 0.6,
//       desktop: 0.7,
//     };
//     const scale = scaleMap[deviceView];
//     const previewWidth = dimensions.width * scale;
//     const previewHeight = dimensions.height * scale;
//     const previewMargin = margin * scale;
//     // انتخاب اولین تصویر برای پیش‌نمایش
//     const previewImage = images.length > 0 ? images[0] : null;
//     return (
//       <div className="flex flex-col items-center space-y-4 p-4 bg-white/5 dark:bg-black/5 rounded-lg border border-gray-300/50 dark:border-gray-600/50">
//         <div className="flex flex-col items-center justify-between w-full gap-2">
//           <div className="flex items-center gap-2 text-sm text-nowrap font-medium text-gray-700 dark:text-gray-300">
//             <Eye className="w-4 h-4" />
//             پیش‌نمایش خروجی PDF
//           </div>
//           {/* Device View Selector */}
//           <div className="flex gap-1 bg-white/10 dark:bg-black/10 rounded-lg">
//             <button
//               onClick={() => setDeviceView("mobile")}
//               className={`p-1.5 rounded-md transition-colors ${
//                 deviceView === "mobile"
//                   ? "bg-primary/20 text-primary"
//                   : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
//               }`}
//               title="نمایش موبایل"
//             >
//               <Smartphone className="w-4 h-4" />
//             </button>
//             <button
//               onClick={() => setDeviceView("tablet")}
//               className={`p-1.5 rounded-md transition-colors ${
//                 deviceView === "tablet"
//                   ? "bg-primary/20 text-primary"
//                   : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
//               }`}
//               title="نمایش تبلت"
//             >
//               <Tablet className="w-4 h-4" />
//             </button>
//             <button
//               onClick={() => setDeviceView("desktop")}
//               className={`p-1.5 rounded-md transition-colors ${
//                 deviceView === "desktop"
//                   ? "bg-primary/20 text-primary"
//                   : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
//               }`}
//               title="نمایش دسکتاپ"
//             >
//               <Monitor className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//         <div className="relative bg-white shadow-lg rounded-sm border border-gray-300">
//           {/* کاغذ */}
//           <div
//             className="bg-white relative"
//             style={{
//               width: `${previewWidth}px`,
//               height: `${previewHeight}px`,
//               padding: `${previewMargin}px`,
//             }}
//           >
//             {/* محتوای نمونه - یک تصویر کامل */}
//             <div className="w-full h-full border border-dashed border-gray-300/50 rounded flex flex-col items-center justify-center overflow-hidden bg-gray-50">
//               {previewImage ? (
//                 <div className="w-full h-full flex items-center justify-center p-1">
//                   <img
//                     src={previewImage.url}
//                     alt={previewImage.name}
//                     className="max-w-full max-h-full object-contain rounded"
//                   />
//                 </div>
//               ) : (
//                 <div className="flex flex-col items-center justify-center p-4 text-center">
//                   <FileImage className="w-8 h-8 text-gray-400 mb-2" />
//                   <div className="text-xs text-gray-400">
//                     عکسی برای نمایش وجود ندارد
//                   </div>
//                 </div>
//               )}
//             </div>
//             {/* نشانگر جهت */}
//             <div
//               className={`absolute bottom-1 left-1 text-[8px] text-gray-400 ${
//                 settings.orientation === "landscape"
//                   ? "transform rotate-90 origin-left"
//                   : ""
//               }`}
//             >
//               {settings.orientation === "portrait" ? "عمودی" : "افقی"}
//             </div>
//           </div>
//         </div>
//         {/* اطلاعات سایز */}
//         <div className="text-xs text-gray-500 text-center">
//           سایز: {settings.paperSize} • جهت:{" "}
//           {settings.orientation === "portrait" ? "عمودی" : "افقی"} • حاشیه:{" "}
//           {settings.margin === "none" ? "بدون" : settings.margin}
//           {previewImage && (
//             <span className="block mt-1">نمایش: {previewImage.name}</span>
//           )}
//         </div>
//       </div>
//     );
//   };
//   // کامپوننت تنظیمات - بهبود یافته برای ریسپانسیو
//   const SettingsSection = () => {
//     return (
//       <div className="space-y-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="space-y-3">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 جهت کاغذ
//               </label>
//               <select
//                 value={settings.orientation}
//                 onChange={(e) =>
//                   handleSettingChange("orientation", e.target.value)
//                 }
//                 className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
//               >
//                 <option value="portrait">عمودی</option>
//                 <option value="landscape">افقی</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 سایز کاغذ
//               </label>
//               <select
//                 value={settings.paperSize}
//                 onChange={(e) =>
//                   handleSettingChange("paperSize", e.target.value)
//                 }
//                 className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
//               >
//                 <option value="A4">A4</option>
//                 <option value="A3">A3</option>
//                 <option value="letter">Letter</option>
//                 <option value="legal">Legal</option>
//               </select>
//             </div>
//           </div>
//           <div className="space-y-3">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 حاشیه
//               </label>
//               <select
//                 value={settings.margin}
//                 onChange={(e) => handleSettingChange("margin", e.target.value)}
//                 className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
//               >
//                 <option value="small">کوچک</option>
//                 <option value="medium">متوسط</option>
//                 <option value="large">بزرگ</option>
//                 <option value="none">بدون حاشیه</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 کیفیت
//               </label>
//               <select
//                 value={settings.quality}
//                 onChange={(e) => handleSettingChange("quality", e.target.value)}
//                 className="w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
//               >
//                 <option value="low">پایین</option>
//                 <option value="standard">استاندارد</option>
//                 <option value="high">بالا</option>
//               </select>
//             </div>
//           </div>
//         </div>
//         {/* خلاصه تنظیمات - بهبود یافته برای ریسپانسیو */}
//         <div className="p-4 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm">
//           <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
//             <Settings className="w-5 h-5" />
//             خلاصه تنظیمات
//           </h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
//             <div className="flex flex-col">
//               <span className="text-gray-600 dark:text-gray-400 text-xs">
//                 جهت:
//               </span>
//               <span className="font-medium text-gray-800 dark:text-white">
//                 {settings.orientation === "portrait" ? "عمودی" : "افقی"}
//               </span>
//             </div>
//             <div className="flex flex-col">
//               <span className="text-gray-600 dark:text-gray-400 text-xs">
//                 سایز:
//               </span>
//               <span className="font-medium text-gray-800 dark:text-white">
//                 {settings.paperSize}
//               </span>
//             </div>
//             <div className="flex flex-col">
//               <span className="text-gray-600 dark:text-gray-400 text-xs">
//                 حاشیه:
//               </span>
//               <span className="font-medium text-gray-800 dark:text-white">
//                 {settings.margin === "small"
//                   ? "کوچک"
//                   : settings.margin === "medium"
//                   ? "متوسط"
//                   : settings.margin === "large"
//                   ? "بزرگ"
//                   : "بدون حاشیه"}
//               </span>
//             </div>
//             <div className="flex flex-col">
//               <span className="text-gray-600 dark:text-gray-400 text-xs">
//                 کیفیت:
//               </span>
//               <span className="font-medium text-gray-800 dark:text-white">
//                 {settings.quality === "low"
//                   ? "پایین"
//                   : settings.quality === "standard"
//                   ? "استاندارد"
//                   : "بالا"}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
//   // کامپوننت خروجی - بهبود یافته برای ریسپانسیو
//   const OutputSection = () => {
//     return (
//       <div className="space-y-6">
//         {/* نمایش خلاصه تنظیمات */}
//         <div className="p-4 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm">
//           <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
//             خلاصه تنظیمات نهایی
//           </h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
//             <div className="flex flex-col items-center text-center p-3 bg-white/10 dark:bg-black/10 rounded-lg">
//               <span className="text-gray-600 dark:text-gray-400 text-xs mb-1">
//                 جهت
//               </span>
//               <span className="font-medium text-gray-800 dark:text-white">
//                 {settings.orientation === "portrait" ? "عمودی" : "افقی"}
//               </span>
//             </div>
//             <div className="flex flex-col items-center text-center p-3 bg-white/10 dark:bg-black/10 rounded-lg">
//               <span className="text-gray-600 dark:text-gray-400 text-xs mb-1">
//                 سایز
//               </span>
//               <span className="font-medium text-gray-800 dark:text-white">
//                 {settings.paperSize}
//               </span>
//             </div>
//             <div className="flex flex-col items-center text-center p-3 bg-white/10 dark:bg-black/10 rounded-lg">
//               <span className="text-gray-600 dark:text-gray-400 text-xs mb-1">
//                 حاشیه
//               </span>
//               <span className="font-medium text-gray-800 dark:text-white">
//                 {settings.margin === "small"
//                   ? "کوچک"
//                   : settings.margin === "medium"
//                   ? "متوسط"
//                   : settings.margin === "large"
//                   ? "بزرگ"
//                   : "بدون حاشیه"}
//               </span>
//             </div>
//             <div className="flex flex-col items-center text-center p-3 bg-white/10 dark:bg-black/10 rounded-lg">
//               <span className="text-gray-600 dark:text-gray-400 text-xs mb-1">
//                 کیفیت
//               </span>
//               <span className="font-medium text-gray-800 dark:text-white">
//                 {settings.quality === "low"
//                   ? "پایین"
//                   : settings.quality === "standard"
//                   ? "استاندارد"
//                   : "بالا"}
//               </span>
//             </div>
//           </div>
//         </div>
//         {/* وضعیت تبدیل */}
//         {conversionStatus === "idle" && (
//           <div className="text-center space-y-6 p-6 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm">
//             <FileImage className="w-16 h-16 mx-auto text-primary" />
//             <div>
//               <p className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
//                 آماده برای تبدیل
//               </p>
//               <p className="text-gray-600 dark:text-gray-400">
//                 {images.length} عکس به PDF تبدیل خواهد شد
//               </p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-3 justify-center">
//               <button
//                 onClick={handleConvert}
//                 className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect flex-1 sm:flex-none"
//               >
//                 <Settings className="w-5 h-5" />
//                 شروع تبدیل
//               </button>
//               <button
//                 onClick={handleDownloadZIP}
//                 className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300 flex-1 sm:flex-none"
//               >
//                 <Folder className="w-5 h-5" />
//                 دانلود ZIP
//               </button>
//             </div>
//           </div>
//         )}
//         {conversionStatus === "converting" && (
//           <div className="text-center space-y-6 p-6 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm">
//             <Loader2 className="w-12 h-12 mx-auto text-primary animate-spin" />
//             <div className="space-y-4">
//               <p className="text-lg font-semibold text-gray-800 dark:text-white">
//                 در حال تبدیل...
//               </p>
//               <p className="text-sm text-gray-600 dark:text-gray-400">
//                 {conversionProgress.status}
//               </p>
//               <div className="space-y-2">
//                 <div className="w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-3">
//                   <div
//                     className="bg-primary h-3 rounded-full transition-all duration-300"
//                     style={{
//                       width: `${
//                         (conversionProgress.current /
//                           conversionProgress.total) *
//                         100
//                       }%`,
//                     }}
//                   />
//                 </div>
//                 <p className="text-xs text-gray-500 dark:text-gray-400">
//                   {conversionProgress.current} از {conversionProgress.total}
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//         {conversionStatus === "completed" && pdfBlob && (
//           <div className="text-center space-y-6 p-6 border border-green-500/20 rounded-lg bg-green-500/5 backdrop-blur-sm">
//             <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
//             <div>
//               <p className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
//                 تبدیل با موفقیت انجام شد!
//               </p>
//               <p className="text-gray-600 dark:text-gray-400">
//                 فایل PDF شما آماده دانلود است
//               </p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-3 justify-center">
//               <button
//                 onClick={handleDownloadPDF}
//                 className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500/80 text-white rounded-lg font-medium hover:bg-green-500 transition backdrop-blur-sm glass-effect flex-1 sm:flex-none"
//               >
//                 <Download className="w-5 h-5" />
//                 دانلود PDF
//               </button>
//               <button
//                 onClick={resetConverter}
//                 className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300 flex-1 sm:flex-none"
//               >
//                 <RefreshCw className="w-5 h-5" />
//                 شروع جدید
//               </button>
//             </div>
//           </div>
//         )}
//         {conversionStatus === "error" && (
//           <div className="text-center space-y-6 p-6 border border-red-500/20 rounded-lg bg-red-500/5 backdrop-blur-sm">
//             <AlertCircle className="w-16 h-16 mx-auto text-red-500" />
//             <div>
//               <p className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2">
//                 خطا در تبدیل
//               </p>
//               <p className="text-gray-600 dark:text-gray-400">
//                 لطفاً دوباره تلاش کنید
//               </p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-3 justify-center">
//               <button
//                 onClick={handleConvert}
//                 className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect flex-1 sm:flex-none"
//               >
//                 <RefreshCw className="w-5 h-5" />
//                 تلاش مجدد
//               </button>
//               <button
//                 onClick={goToPreviousStep}
//                 className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300 flex-1 sm:flex-none"
//               >
//                 بازگشت
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   };
//   // Modal Preview Component
//   const ImagePreviewModal = () => {
//     if (!isPreviewOpen || !selectedImage) return null;
//     return (
//       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
//         <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
//           <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
//             {/* Header */}
//             <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
//               <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
//                 {selectedImage.name}
//               </h3>
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() => window.open(selectedImage.url, "_blank")}
//                   className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
//                   title="باز کردن در تب جدید"
//                 >
//                   <Maximize2 className="w-5 h-5" />
//                 </button>
//                 <button
//                   onClick={handleClosePreview}
//                   className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>
//               </div>
//             </div>
//             {/* Image */}
//             <div className="flex items-center justify-center p-4 max-h-[70vh] overflow-auto">
//               <img
//                 src={selectedImage.url}
//                 alt={selectedImage.name}
//                 className="max-w-full max-h-full object-contain rounded-lg"
//               />
//             </div>
//             {/* Footer */}
//             <div className="p-4 border-t border-gray-200 dark:border-gray-700">
//               <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
//                 <div className="text-sm text-gray-600 dark:text-gray-400">
//                   برای بستن، روی دکمه × کلیک کنید یا ESC را فشار دهید
//                 </div>
//                 <button
//                   onClick={handleClosePreview}
//                   className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition"
//                 >
//                   بستن
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
//   return (
//     <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6 backdrop-blur-sm">
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
//             {images.length > 0 ? "چیدمان" : "آپلود"}
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
//       <div className="rounded-2xl shadow-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/20">
//         {/* Upload Step - فقط زمانی نشان داده می‌شود که هیچ عکسی آپلود نشده باشد */}
//         {currentStep === "upload" && images.length === 0 && (
//           <div className="space-y-4 sm:space-y-6">
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
//               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
//                 آپلود عکس‌ها
//               </h2>
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
//               <Upload className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-primary mb-2 sm:mb-3 md:mb-4" />
//               <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
//                 عکس‌ها را اینجا بکشید
//               </p>
//               <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
//                 یا
//               </p>
//               <button
//                 onClick={handleAddMoreClick}
//                 className="mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary transition text-sm sm:text-base backdrop-blur-sm glass-effect"
//               >
//                 انتخاب از دستگاه
//               </button>
//               <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 sm:mt-3">
//                 JPG, PNG, WEBP • حداکثر 10MB
//               </p>
//             </div>
//           </div>
//         )}
//         {/* Layout Section - وقتی عکس آپلود شده باشد */}
//         {currentStep === "upload" && images.length > 0 && (
//           <div className="space-y-4 sm:space-y-6">
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
//               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
//                 چیدمان عکس‌ها
//               </h2>
//               <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
//                 {images.length} عکس
//               </span>
//             </div>
//             {/* درگ اند دراپ برای کل کادر */}
//             <DndContext
//               sensors={sensors}
//               collisionDetection={closestCenter}
//               onDragEnd={handleDragEnd}
//               modifiers={[]}
//             >
//               <SortableContext
//                 items={images.map((img) => img.id)}
//                 strategy={rectSortingStrategy}
//               >
//                 <div className="flex flex-col gap-5">
//                   {/* کادر اصلی چیدمان */}
//                   <div
//                     className="border-2 border-dashed border-gray-300/50 dark:border-gray-600/50
//                     rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 min-h-[300px] bg-white/5 dark:bg-black/5
//                     transition-all duration-300"
//                   >
//                     {/* گرید ریسپانسیو: در موبایل 2 ستون، در تبلت 3 ستون، در دسکتاپ 4-5 ستون */}
//                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-3 sm:gap-4">
//                       {images.map((img, i) => (
//                         <ImagePreview
//                           key={img.id}
//                           image={img}
//                           index={i}
//                           onNameChange={handleNameChange}
//                           onDelete={handleDelete}
//                           onMove={handleMove}
//                           onPreview={handleImagePreview}
//                           canMoveUp={i > 0}
//                           canMoveDown={i < images.length - 1}
//                         />
//                       ))}
//                       {/* Add More Button as last item in grid */}
//                       <button
//                         onClick={handleAddMoreClick}
//                         className="aspect-[4/3] border-2 border-dashed border-gray-300/50 dark:border-gray-600/50
//                         rounded-lg flex flex-col items-center justify-center gap-1 sm:gap-2
//                         hover:border-primary/50 hover:bg-primary/5 transition backdrop-blur-sm glass-effect
//                         cursor-pointer"
//                       >
//                         <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 dark:text-gray-400" />
//                         <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
//                           افزودن عکس
//                         </span>
//                       </button>
//                     </div>
//                   </div>
//                   <div className="flex flex-col justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
//                     <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
//                       <span className="text-xs sm:text-sm text-center sm:text-right">
//                         برای جابجایی: عکس را نگه دارید و بکشید
//                       </span>
//                       <span className="hidden sm:inline text-xs">•</span>
//                       <span className="text-xs sm:text-sm text-center sm:text-right">
//                         برای پیش‌نمایش: روی عکس کلیک کنید
//                       </span>
//                     </div>
//                     <div className="flex gap-2 w-full sm:w-auto">
//                       <button
//                         onClick={handleAddMoreClick}
//                         className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2
//                         border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium
//                         hover:bg-white/10 dark:hover:bg-black/10 transition text-sm backdrop-blur-sm
//                         glass-effect text-gray-700 dark:text-gray-300"
//                       >
//                         <Plus className="w-4 h-4" />
//                         افزودن بیشتر
//                       </button>
//                       <button
//                         onClick={goToNextStep}
//                         disabled={images.length === 0}
//                         className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2
//                         bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition
//                         text-sm backdrop-blur-sm glass-effect disabled:opacity-50 disabled:cursor-not-allowed"
//                       >
//                         ادامه
//                         <ChevronLeft className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </SortableContext>
//             </DndContext>
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
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               {/* تنظیمات */}
//               <div className="lg:col-span-2">
//                 <SettingsSection />
//               </div>
//               {/* پیش‌نمایش بصری PDF */}
//               <div className="lg:col-span-1">
//                 <PDFPreview />
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
//             <OutputSection />
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
//       {/* Hidden file input for adding more images */}
//       <input
//         ref={fileInputRef}
//         type="file"
//         multiple
//         accept=".jpg,.jpeg,.png,.webp"
//         onChange={handleFileInputChange}
//         className="hidden"
//       />
//       {/* Image Preview Modal */}
//       <ImagePreviewModal />
//     </div>
//   );
// }
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [ssr] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.js [ssr] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tablet$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tablet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tablet.js [ssr] (ecmascript) <export default as Tablet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [ssr] (ecmascript) <export default as Monitor>");
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
// تابع کمکی برای تبدیل سایز کاغذ به ابعاد پیکسل برای پیش‌نمایش
const getPaperDimensions = (paperSize, orientation)=>{
    const dimensions = {
        A4: {
            width: 210,
            height: 297
        },
        A3: {
            width: 297,
            height: 420
        },
        letter: {
            width: 216,
            height: 279
        },
        legal: {
            width: 216,
            height: 356
        }
    };
    const size = dimensions[paperSize] || dimensions.A4;
    return orientation === "landscape" ? {
        width: size.height,
        height: size.width
    } : size;
};
// تابع کمکی برای محاسبه حاشیه
const getMarginSize = (margin)=>{
    const margins = {
        none: 0,
        small: 10,
        medium: 20,
        large: 30
    };
    return margins[margin] || margins.medium;
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
    const [triggerFileInput, setTriggerFileInput] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [isPreviewOpen, setIsPreviewOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [deviceView, setDeviceView] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("desktop");
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // بهبود سنسورها برای موبایل - تنظیمات بهینه‌تر
    const sensors = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$29$__["useSensors"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$29$__["PointerSensor"], {
        activationConstraint: {
            distance: 3
        }
    }), (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$29$__["TouchSensor"], {
        activationConstraint: {
            delay: 100,
            tolerance: 10
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
    // تابع برای بازسازی URLها در صورت نیاز
    const recreateImageUrls = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(async ()=>{
        const imagesWithNewUrls = await Promise.all(images.map(async (img)=>{
            // بررسی کنید که آیا URL هنوز معتبر است
            try {
                const response = await fetch(img.url, {
                    method: "HEAD"
                });
                if (response.ok) {
                    return img; // URL معتبر است
                }
            } catch  {
            // URL معتبر نیست، جدید ایجاد کن
            }
            // URL معتبر نیست، جدید ایجاد کن
            const newUrl = URL.createObjectURL(img.file);
            return {
                ...img,
                url: newUrl
            };
        }));
        setImages(imagesWithNewUrls);
    }, [
        images
    ]);
    // Trigger file input when state changes
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (triggerFileInput && fileInputRef.current) {
            console.log("🎯 Triggering file input programmatically");
            fileInputRef.current.click();
            setTriggerFileInput(false);
        }
    }, [
        triggerFileInput
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
                // اگر تصویر در حال پیش‌نمایش حذف شد، پنجره پیش‌نمایش را ببند
                if (selectedImage?.id === id) {
                    setSelectedImage(null);
                    setIsPreviewOpen(false);
                }
            }
            return prev.filter((img)=>img.id !== id);
        });
    }, [
        selectedImage
    ]);
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
        console.log("📁 Files selected:", files.length);
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
                console.log("✅ Added file:", file.name);
            } else {
                console.warn("❌ Invalid file:", file.name, validation.error);
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
        console.log("🔄 File input changed");
        handleFileSelect(e.target.files);
        // Reset the input value to allow selecting the same file again
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    }, [
        handleFileSelect
    ]);
    const handleDragOver = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((e)=>{
        e.preventDefault();
        setIsDragging(true);
    }, []);
    const handleDragLeave = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((e)=>{
        e.preventDefault();
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
        console.log("🔘 Add more button clicked");
        setTriggerFileInput(true);
    }, []);
    const handleSettingChange = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((key, value)=>{
        setSettings((prev)=>({
                ...prev,
                [key]: value
            }));
    }, []);
    const handleConvert = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(async ()=>{
        if (images.length === 0) {
            alert("لطفاً ابتدا تصاویر را آپلود کنید");
            return;
        }
        // بررسی و بازسازی URLها در صورت نیاز
        try {
            await recreateImageUrls();
        } catch (error) {
            console.warn("Could not recreate URLs, proceeding with current images:", error);
        }
        // بررسی محدودیت‌های فنی
        const limitations = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdfConverter$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["PDFConverter"].checkTechnicalLimitations(images);
        if (limitations.errors.length > 0) {
            alert(limitations.errors.join("\n"));
            return;
        }
        if (limitations.warnings.length > 0) {
            const proceed = confirm(`هشدار:\n${limitations.warnings.join("\n")}\n\nآیا ادامه می‌دهید؟`);
            if (!proceed) return;
        }
        // اعتبارسنجی تصاویر
        setConversionStatus("converting");
        setConversionProgress({
            current: 0,
            total: images.length,
            status: "در حال بررسی تصاویر..."
        });
        try {
            const { valid, invalid } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdfConverter$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["PDFConverter"].validateImages(images);
            if (invalid.length > 0) {
                const continueConvert = confirm(`تصاویر زیر قابل پردازش نیستند:\n${invalid.join("\n")}\n\nفقط ${valid.length} تصویر سالم تبدیل خواهد شد. ادامه می‌دهید؟`);
                if (!continueConvert) {
                    setConversionStatus("idle");
                    return;
                }
            }
            if (valid.length === 0) {
                alert("هیچ تصویر سالمی برای تبدیل وجود ندارد.");
                setConversionStatus("idle");
                return;
            }
            // شروع تبدیل
            const blob = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdfConverter$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["PDFConverter"].convertImagesToPDF(valid, settings, setConversionProgress);
            setPdfBlob(blob);
            setConversionStatus("completed");
        } catch (error) {
            console.error("Conversion error:", error);
            setConversionStatus("error");
            alert("خطا در تبدیل. لطفاً دوباره تلاش کنید.");
        }
    }, [
        images,
        settings,
        recreateImageUrls
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
    const handleImagePreview = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((image)=>{
        setSelectedImage(image);
        setIsPreviewOpen(true);
    }, []);
    const handleClosePreview = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        setIsPreviewOpen(false);
        setSelectedImage(null);
    }, []);
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
        setSelectedImage(null);
        setIsPreviewOpen(false);
    }, [
        images
    ]);
    const PDFPreview = ()=>{
        const dimensions = getPaperDimensions(settings.paperSize, settings.orientation);
        const margin = getMarginSize(settings.margin);
        // مقیاس‌های مختلف برای دستگاه‌های مختلف
        const scaleMap = {
            mobile: 0.5,
            tablet: 0.6,
            desktop: 0.7
        };
        const scale = scaleMap[deviceView];
        const previewWidth = dimensions.width * scale;
        const previewHeight = dimensions.height * scale;
        const previewMargin = margin * scale;
        // انتخاب اولین تصویر برای پیش‌نمایش
        const previewImage = images.length > 0 ? images[0] : null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center space-y-4 p-4 bg-white/5 dark:bg-black/5 rounded-lg border border-gray-300/50 dark:border-gray-600/50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-between w-full gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-sm text-nowrap font-medium text-gray-700 dark:text-gray-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5356,
                                    columnNumber: 13
                                }, this),
                                "پیش‌نمایش خروجی PDF"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                            lineNumber: 5355,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex gap-1 bg-white/10 dark:bg-black/10 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setDeviceView("mobile"),
                                    className: `p-1.5 rounded-md transition-colors ${deviceView === "mobile" ? "bg-primary/20 text-primary" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"}`,
                                    title: "نمایش موبایل",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 5370,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5361,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setDeviceView("tablet"),
                                    className: `p-1.5 rounded-md transition-colors ${deviceView === "tablet" ? "bg-primary/20 text-primary" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"}`,
                                    title: "نمایش تبلت",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tablet$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tablet$3e$__["Tablet"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 5381,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5372,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setDeviceView("desktop"),
                                    className: `p-1.5 rounded-md transition-colors ${deviceView === "desktop" ? "bg-primary/20 text-primary" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"}`,
                                    title: "نمایش دسکتاپ",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 5392,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5383,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                            lineNumber: 5360,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                    lineNumber: 5354,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "relative bg-white shadow-lg rounded-sm border border-gray-300",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "bg-white relative",
                        style: {
                            width: `${previewWidth}px`,
                            height: `${previewHeight}px`,
                            padding: `${previewMargin}px`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "w-full h-full border border-dashed border-gray-300/50 rounded flex flex-col items-center justify-center overflow-hidden bg-gray-50",
                                children: previewImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full flex items-center justify-center p-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                        src: previewImage.url,
                                        alt: previewImage.name,
                                        className: "max-w-full max-h-full object-contain rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 5411,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5410,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center justify-center p-4 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__["FileImage"], {
                                            className: "w-8 h-8 text-gray-400 mb-2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5419,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-400",
                                            children: "عکسی برای نمایش وجود ندارد"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5420,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5418,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 5408,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: `absolute bottom-1 left-1 text-[8px] text-gray-400 ${settings.orientation === "landscape" ? "transform rotate-90 origin-left" : ""}`,
                                children: settings.orientation === "portrait" ? "عمودی" : "افقی"
                            }, void 0, false, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 5428,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                        lineNumber: 5399,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                    lineNumber: 5397,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "text-xs text-gray-500 text-center",
                    children: [
                        "سایز: ",
                        settings.paperSize,
                        " • جهت:",
                        " ",
                        settings.orientation === "portrait" ? "عمودی" : "افقی",
                        " • حاشیه:",
                        " ",
                        settings.margin === "none" ? "بدون" : settings.margin,
                        previewImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "block mt-1",
                            children: [
                                "نمایش: ",
                                previewImage.name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                            lineNumber: 5446,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                    lineNumber: 5441,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ImageToPDFConverter.tsx",
            lineNumber: 5353,
            columnNumber: 7
        }, this);
    };
    // کامپوننت تنظیمات - بهبود یافته برای ریسپانسیو
    const SettingsSection = ()=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                            children: "جهت کاغذ"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5460,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                            value: settings.orientation,
                                            onChange: (e)=>handleSettingChange("orientation", e.target.value),
                                            className: "w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    value: "portrait",
                                                    children: "عمودی"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                    lineNumber: 5470,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    value: "landscape",
                                                    children: "افقی"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                    lineNumber: 5471,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5463,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5459,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                            children: "سایز کاغذ"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5476,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                            value: settings.paperSize,
                                            onChange: (e)=>handleSettingChange("paperSize", e.target.value),
                                            className: "w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    value: "A4",
                                                    children: "A4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                    lineNumber: 5486,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    value: "A3",
                                                    children: "A3"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                    lineNumber: 5487,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    value: "letter",
                                                    children: "Letter"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                    lineNumber: 5488,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    value: "legal",
                                                    children: "Legal"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                    lineNumber: 5489,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5479,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5475,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                            lineNumber: 5458,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                            children: "حاشیه"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5496,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                            value: settings.margin,
                                            onChange: (e)=>handleSettingChange("margin", e.target.value),
                                            className: "w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    value: "small",
                                                    children: "کوچک"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                    lineNumber: 5504,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    value: "medium",
                                                    children: "متوسط"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                    lineNumber: 5505,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    value: "large",
                                                    children: "بزرگ"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                    lineNumber: 5506,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    value: "none",
                                                    children: "بدون حاشیه"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                    lineNumber: 5507,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5499,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5495,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                            children: "کیفیت"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5512,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                            value: settings.quality,
                                            onChange: (e)=>handleSettingChange("quality", e.target.value),
                                            className: "w-full p-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    value: "low",
                                                    children: "پایین"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                    lineNumber: 5520,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    value: "standard",
                                                    children: "استاندارد"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                    lineNumber: 5521,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    value: "high",
                                                    children: "بالا"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                    lineNumber: 5522,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5515,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5511,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                            lineNumber: 5494,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                    lineNumber: 5457,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "p-4 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5531,
                                    columnNumber: 13
                                }, this),
                                "خلاصه تنظیمات"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                            lineNumber: 5530,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-3 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600 dark:text-gray-400 text-xs",
                                            children: "جهت:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5536,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-gray-800 dark:text-white",
                                            children: settings.orientation === "portrait" ? "عمودی" : "افقی"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5539,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5535,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600 dark:text-gray-400 text-xs",
                                            children: "سایز:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5544,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-gray-800 dark:text-white",
                                            children: settings.paperSize
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5547,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5543,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600 dark:text-gray-400 text-xs",
                                            children: "حاشیه:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5552,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-gray-800 dark:text-white",
                                            children: settings.margin === "small" ? "کوچک" : settings.margin === "medium" ? "متوسط" : settings.margin === "large" ? "بزرگ" : "بدون حاشیه"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5555,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5551,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600 dark:text-gray-400 text-xs",
                                            children: "کیفیت:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5566,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-gray-800 dark:text-white",
                                            children: settings.quality === "low" ? "پایین" : settings.quality === "standard" ? "استاندارد" : "بالا"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5569,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5565,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                            lineNumber: 5534,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                    lineNumber: 5529,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ImageToPDFConverter.tsx",
            lineNumber: 5456,
            columnNumber: 7
        }, this);
    };
    // کامپوننت خروجی - بهبود یافته برای ریسپانسیو
    const OutputSection = ()=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "p-4 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-gray-800 dark:text-white mb-3",
                            children: "خلاصه تنظیمات نهایی"
                        }, void 0, false, {
                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                            lineNumber: 5589,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center text-center p-3 bg-white/10 dark:bg-black/10 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600 dark:text-gray-400 text-xs mb-1",
                                            children: "جهت"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5594,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-gray-800 dark:text-white",
                                            children: settings.orientation === "portrait" ? "عمودی" : "افقی"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5597,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5593,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center text-center p-3 bg-white/10 dark:bg-black/10 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600 dark:text-gray-400 text-xs mb-1",
                                            children: "سایز"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5602,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-gray-800 dark:text-white",
                                            children: settings.paperSize
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5605,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5601,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center text-center p-3 bg-white/10 dark:bg-black/10 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600 dark:text-gray-400 text-xs mb-1",
                                            children: "حاشیه"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5610,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-gray-800 dark:text-white",
                                            children: settings.margin === "small" ? "کوچک" : settings.margin === "medium" ? "متوسط" : settings.margin === "large" ? "بزرگ" : "بدون حاشیه"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5613,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5609,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center text-center p-3 bg-white/10 dark:bg-black/10 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600 dark:text-gray-400 text-xs mb-1",
                                            children: "کیفیت"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5624,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-gray-800 dark:text-white",
                                            children: settings.quality === "low" ? "پایین" : settings.quality === "standard" ? "استاندارد" : "بالا"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5627,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5623,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                            lineNumber: 5592,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                    lineNumber: 5588,
                    columnNumber: 9
                }, this),
                conversionStatus === "idle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "text-center space-y-6 p-6 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__["FileImage"], {
                            className: "w-16 h-16 mx-auto text-primary"
                        }, void 0, false, {
                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                            lineNumber: 5641,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold text-gray-800 dark:text-white mb-2",
                                    children: "آماده برای تبدیل"
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5643,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 dark:text-gray-400",
                                    children: [
                                        images.length,
                                        " عکس به PDF تبدیل خواهد شد"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5646,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                            lineNumber: 5642,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-3 justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: handleConvert,
                                    className: "flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect flex-1 sm:flex-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5655,
                                            columnNumber: 17
                                        }, this),
                                        "شروع تبدیل"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5651,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: handleDownloadZIP,
                                    className: "flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300 flex-1 sm:flex-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5662,
                                            columnNumber: 17
                                        }, this),
                                        "دانلود ZIP"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5658,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                            lineNumber: 5650,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                    lineNumber: 5640,
                    columnNumber: 11
                }, this),
                conversionStatus === "converting" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "text-center space-y-6 p-6 border border-gray-300/50 dark:border-gray-600/50 rounded-lg bg-white/5 dark:bg-black/5 backdrop-blur-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "w-12 h-12 mx-auto text-primary animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                            lineNumber: 5671,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold text-gray-800 dark:text-white",
                                    children: "در حال تبدیل..."
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5673,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600 dark:text-gray-400",
                                    children: conversionProgress.status
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5676,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "bg-primary h-3 rounded-full transition-all duration-300",
                                                style: {
                                                    width: `${conversionProgress.current / conversionProgress.total * 100}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 5681,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5680,
                                            columnNumber: 17
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
                                            lineNumber: 5692,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5679,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                            lineNumber: 5672,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                    lineNumber: 5670,
                    columnNumber: 11
                }, this),
                conversionStatus === "completed" && pdfBlob && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "text-center space-y-6 p-6 border border-green-500/20 rounded-lg bg-green-500/5 backdrop-blur-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                            className: "w-16 h-16 mx-auto text-green-500"
                        }, void 0, false, {
                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                            lineNumber: 5702,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold text-gray-800 dark:text-white mb-2",
                                    children: "تبدیل با موفقیت انجام شد!"
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5704,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 dark:text-gray-400",
                                    children: "فایل PDF شما آماده دانلود است"
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5707,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                            lineNumber: 5703,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-3 justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: handleDownloadPDF,
                                    className: "flex items-center justify-center gap-2 px-6 py-3 bg-green-500/80 text-white rounded-lg font-medium hover:bg-green-500 transition backdrop-blur-sm glass-effect flex-1 sm:flex-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5716,
                                            columnNumber: 17
                                        }, this),
                                        "دانلود PDF"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5712,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: resetConverter,
                                    className: "flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300 flex-1 sm:flex-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5723,
                                            columnNumber: 17
                                        }, this),
                                        "شروع جدید"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5719,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                            lineNumber: 5711,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                    lineNumber: 5701,
                    columnNumber: 11
                }, this),
                conversionStatus === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "text-center space-y-6 p-6 border border-red-500/20 rounded-lg bg-red-500/5 backdrop-blur-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                            className: "w-16 h-16 mx-auto text-red-500"
                        }, void 0, false, {
                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                            lineNumber: 5732,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold text-red-600 dark:text-red-400 mb-2",
                                    children: "خطا در تبدیل"
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5734,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 dark:text-gray-400",
                                    children: "لطفاً دوباره تلاش کنید"
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5737,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                            lineNumber: 5733,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-3 justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: handleConvert,
                                    className: "flex items-center justify-center gap-2 px-6 py-3 bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition backdrop-blur-sm glass-effect flex-1 sm:flex-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5746,
                                            columnNumber: 17
                                        }, this),
                                        "تلاش مجدد"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5742,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: goToPreviousStep,
                                    className: "flex items-center justify-center gap-2 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium hover:bg-white/10 dark:hover:bg-black/10 transition backdrop-blur-sm glass-effect text-gray-700 dark:text-gray-300 flex-1 sm:flex-none",
                                    children: "بازگشت"
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5749,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                            lineNumber: 5741,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                    lineNumber: 5731,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ImageToPDFConverter.tsx",
            lineNumber: 5586,
            columnNumber: 7
        }, this);
    };
    // Modal Preview Component
    const ImagePreviewModal = ()=>{
        if (!isPreviewOpen || !selectedImage) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "relative max-w-4xl max-h-[90vh] w-full mx-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-gray-800 dark:text-white",
                                    children: selectedImage.name
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5772,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>window.open(selectedImage.url, "_blank"),
                                            className: "p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors",
                                            title: "باز کردن در تب جدید",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 5781,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5776,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: handleClosePreview,
                                            className: "p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 5787,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 5783,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5775,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                            lineNumber: 5771,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center p-4 max-h-[70vh] overflow-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                src: selectedImage.url,
                                alt: selectedImage.name,
                                className: "max-w-full max-h-full object-contain rounded-lg"
                            }, void 0, false, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 5794,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                            lineNumber: 5793,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "p-4 border-t border-gray-200 dark:border-gray-700",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row items-center justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-600 dark:text-gray-400",
                                        children: "برای بستن، روی دکمه × کلیک کنید یا ESC را فشار دهید"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 5804,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: handleClosePreview,
                                        className: "px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition",
                                        children: "بستن"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 5807,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 5803,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                            lineNumber: 5802,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                    lineNumber: 5769,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ImageToPDFConverter.tsx",
                lineNumber: 5768,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ImageToPDFConverter.tsx",
            lineNumber: 5767,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-6 w-full max-w-6xl mx-auto p-3 sm:p-4 md:p-6 backdrop-blur-sm",
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
                                    lineNumber: 5837,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "text-sm sm:text-base md:text-lg font-bold",
                                    children: "1"
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5839,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 5827,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300",
                                children: images.length > 0 ? "چیدمان" : "آپلود"
                            }, void 0, false, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 5844,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                        lineNumber: 5826,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: `h-1 flex-1 transition-colors glass-effect ${currentStep === "settings" || currentStep === "convert" ? "bg-primary/50" : "bg-gray-300/50 dark:bg-gray-600/50"}`
                    }, void 0, false, {
                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                        lineNumber: 5849,
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
                                    lineNumber: 5869,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "text-sm sm:text-base md:text-lg font-bold",
                                    children: "2"
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5871,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 5859,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300",
                                children: "تنظیمات"
                            }, void 0, false, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 5876,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                        lineNumber: 5858,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: `h-1 flex-1 transition-colors glass-effect ${currentStep === "convert" ? "bg-primary/50" : "bg-gray-300/50 dark:bg-gray-600/50"}`
                    }, void 0, false, {
                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                        lineNumber: 5881,
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
                                    lineNumber: 5898,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 5891,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300",
                                children: "دانلود"
                            }, void 0, false, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 5900,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                        lineNumber: 5890,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ImageToPDFConverter.tsx",
                lineNumber: 5824,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "rounded-2xl shadow-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/20",
                children: [
                    currentStep === "upload" && images.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "space-y-4 sm:space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "text-xl sm:text-2xl font-bold text-gray-800 dark:text-white",
                                    children: "آپلود عکس‌ها"
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5912,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 5911,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: `border-2 border-dashed rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center transition-all backdrop-blur-sm ${isDragging ? "border-primary/50 bg-primary/5" : "border-gray-300/50 dark:border-gray-600/50 bg-white/10 dark:bg-black/10"}`,
                                onDragOver: handleDragOver,
                                onDragLeave: handleDragLeave,
                                onDrop: handleDrop,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-primary mb-2 sm:mb-3 md:mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 5927,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white",
                                        children: "عکس‌ها را اینجا بکشید"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 5928,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1",
                                        children: "یا"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 5931,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: handleAddMoreClick,
                                        className: "mt-2 sm:mt-3 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary transition text-sm sm:text-base backdrop-blur-sm glass-effect",
                                        children: "انتخاب از دستگاه"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 5934,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-600 dark:text-gray-400 mt-2 sm:mt-3",
                                        children: "JPG, PNG, WEBP • حداکثر 10MB"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 5940,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 5917,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                        lineNumber: 5910,
                        columnNumber: 11
                    }, this),
                    currentStep === "upload" && images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "space-y-4 sm:space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        className: "text-xl sm:text-2xl font-bold text-gray-800 dark:text-white",
                                        children: "چیدمان عکس‌ها"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 5951,
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
                                        lineNumber: 5954,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 5950,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$29$__["DndContext"], {
                                sensors: sensors,
                                collisionDetection: __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$core__$5b$external$5d$__$2840$dnd$2d$kit$2f$core$2c$__cjs$29$__["closestCenter"],
                                onDragEnd: handleDragEnd,
                                modifiers: [],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$sortable__$5b$external$5d$__$2840$dnd$2d$kit$2f$sortable$2c$__cjs$29$__["SortableContext"], {
                                    items: images.map((img)=>img.id),
                                    strategy: __TURBOPACK__imported__module__$5b$externals$5d2f40$dnd$2d$kit$2f$sortable__$5b$external$5d$__$2840$dnd$2d$kit$2f$sortable$2c$__cjs$29$__["rectSortingStrategy"],
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "border-2 border-dashed border-gray-300/50 dark:border-gray-600/50  rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 min-h-[300px] bg-white/5 dark:bg-black/5 transition-all duration-300",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-3 sm:gap-4",
                                                    children: [
                                                        images.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ImagePreview$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                image: img,
                                                                index: i,
                                                                onNameChange: handleNameChange,
                                                                onDelete: handleDelete,
                                                                onMove: handleMove,
                                                                onPreview: handleImagePreview,
                                                                canMoveUp: i > 0,
                                                                canMoveDown: i < images.length - 1
                                                            }, img.id, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 5980,
                                                                columnNumber: 25
                                                            }, this)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                            onClick: handleAddMoreClick,
                                                            className: "aspect-[4/3] border-2 border-dashed border-gray-300/50 dark:border-gray-600/50  rounded-lg flex flex-col items-center justify-center gap-1 sm:gap-2  hover:border-primary/50 hover:bg-primary/5 transition backdrop-blur-sm glass-effect  cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    className: "w-6 h-6 sm:w-8 sm:h-8 text-gray-500 dark:text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                    lineNumber: 6000,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400",
                                                                    children: "افزودن عکس"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                    lineNumber: 6001,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                            lineNumber: 5993,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                    lineNumber: 5978,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 5972,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-gray-300/50 dark:border-gray-600/50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-600 dark:text-gray-400",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "text-xs sm:text-sm text-center sm:text-right",
                                                                children: "برای جابجایی: عکس را نگه دارید و بکشید"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 6010,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "hidden sm:inline text-xs",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 6013,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "text-xs sm:text-sm text-center sm:text-right",
                                                                children: "برای پیش‌نمایش: روی عکس کلیک کنید"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 6014,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 6009,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2 w-full sm:w-auto",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                onClick: handleAddMoreClick,
                                                                className: "flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2  border border-gray-300/50 dark:border-gray-600/50 rounded-lg font-medium  hover:bg-white/10 dark:hover:bg-black/10 transition text-sm backdrop-blur-sm  glass-effect text-gray-700 dark:text-gray-300",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                        lineNumber: 6027,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "افزودن بیشتر"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 6020,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                onClick: goToNextStep,
                                                                disabled: images.length === 0,
                                                                className: "flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2  bg-primary/80 text-white rounded-lg font-medium hover:bg-primary transition  text-sm backdrop-blur-sm glass-effect disabled:opacity-50 disabled:cursor-not-allowed",
                                                                children: [
                                                                    "ادامه",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                        lineNumber: 6038,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                                lineNumber: 6030,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                        lineNumber: 6019,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                                lineNumber: 6008,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 5970,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 5966,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 5960,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                        lineNumber: 5949,
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
                                        lineNumber: 6052,
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
                                        lineNumber: 6055,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 6051,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SettingsSection, {}, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 6063,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 6062,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(PDFPreview, {}, void 0, false, {
                                            fileName: "[project]/components/ImageToPDFConverter.tsx",
                                            lineNumber: 6068,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 6067,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 6060,
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
                                                lineNumber: 6077,
                                                columnNumber: 17
                                            }, this),
                                            "بازگشت"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 6073,
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
                                                lineNumber: 6085,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                                        lineNumber: 6080,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 6072,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                        lineNumber: 6050,
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
                                        lineNumber: 6095,
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
                                        lineNumber: 6098,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 6094,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(OutputSection, {}, void 0, false, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 6103,
                                columnNumber: 13
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
                                            lineNumber: 6110,
                                            columnNumber: 17
                                        }, this),
                                        "بازگشت به تنظیمات"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ImageToPDFConverter.tsx",
                                    lineNumber: 6106,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ImageToPDFConverter.tsx",
                                lineNumber: 6105,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ImageToPDFConverter.tsx",
                        lineNumber: 6093,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ImageToPDFConverter.tsx",
                lineNumber: 5907,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                ref: fileInputRef,
                type: "file",
                multiple: true,
                accept: ".jpg,.jpeg,.png,.webp",
                onChange: handleFileInputChange,
                className: "hidden"
            }, void 0, false, {
                fileName: "[project]/components/ImageToPDFConverter.tsx",
                lineNumber: 6119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ImagePreviewModal, {}, void 0, false, {
                fileName: "[project]/components/ImageToPDFConverter.tsx",
                lineNumber: 6129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ImageToPDFConverter.tsx",
        lineNumber: 5822,
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
                        className: " md:min-w-2xl  dark:bg-slate-800 rounded-xl shadow-lg  overflow-hidden w-full max-w-lg",
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
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/components/Footer.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
;
;
;
function Footer() {
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
        id: "footer",
        className: "w-full  py-8  dark:bg-gray-900 border-t  border-border-light dark:border-border-dark",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "container p-4 bg-white mx-auto px-4 rounded-2xl mt-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row justify-between items-center gap-18",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex-1 max-w-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 items-center  text-[#111318] dark:text-black",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: " text-primary ",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
                                                            fileName: "[project]/components/Footer.tsx",
                                                            lineNumber: 26,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 21,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 20,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 19,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold tracking-[-0.015em]",
                                                children: "Picp"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 41,
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "space-y-1 text-sm text-gray-500 dark:text-gray-400 leading-relaxed",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                            className: "font-medium",
                                            children: "تبدیل عکس به پی‌دی‌اف — سریع، آنلاین و رایگان برای ساخت PDF از تصاویر"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                            className: "font-medium",
                                            children: "تبدیل چند عکس به یک فایل PDF آنلاین — ترکیب و ادغام تصاویر در یک پی‌دی‌اف"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                            className: "font-medium",
                                            children: "تبدیل عکس به PDF با کیفیت بالا — بهترین ابزار تبدیل تصویر به فایل پی‌دی‌اف"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex-1 max-w-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-gray-900 dark:text-white mb-4",
                                    children: "در ارتباط باشید"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300",
                                            href: "https://www.instagram.com/vada_house_of_mobile?igsh=MXFjeTEybTg0dzZ6dQ==",
                                            "aria-label": "اینستاگرام",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                className: "h-5 w-5 text-gray-700 dark:text-gray-300",
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M12.017 0C8.396 0 7.988.012 6.756.06 5.526.107 4.704.26 3.982.56c-.78.326-1.443.72-2.106 1.383S.886 3.202.56 3.982C.26 4.704.107 5.526.06 6.756.012 7.988 0 8.396 0 12.017c0 3.62.012 4.028.06 5.26.047 1.23.2 2.052.5 2.774.326.78.72 1.443 1.383 2.106.663.663 1.325 1.057 2.106 1.383.722.3 1.544.453 2.774.5 1.232.048 1.64.06 5.26.06 3.62 0 4.028-.012 5.26-.06 1.23-.047 2.052-.2 2.774-.5.78-.326 1.443-.72 2.106-1.383.663-.663 1.057-1.325 1.383-2.106.3-.722.453-1.544.5-2.774.048-1.232.06-1.64.06-5.26 0-3.62-.012-4.028-.06-5.26-.047-1.23-.2-2.052-.5-2.774-.326-.78-.72-1.443-1.383-2.106S20.798.886 20.018.56C19.296.26 18.474.107 17.244.06 16.012.012 15.604 0 12.017 0zm0 2.158c3.5 0 3.88.008 5.098.056.96.044 1.48.2 1.826.332.457.174.784.382 1.127.725.343.343.551.67.725 1.127.132.346.288.866.332 1.826.048 1.218.056 1.598.056 5.098 0 3.5-.008 3.88-.056 5.098-.044.96-.2 1.48-.332 1.826-.174.457-.382.784-.725 1.127-.343.343-.67.551-1.127.725-.346.132-.866.288-1.826.332-1.218.048-1.598.056-5.098.056-3.5 0-3.88-.008-5.098-.056-.96-.044-1.48-.2-1.826-.332-.457-.174-.784-.382-1.127-.725-.343-.343-.551-.67-.725-1.127-.132-.346-.288-.866-.332-1.826C2.166 15.898 2.158 15.518 2.158 12.017c0-3.5.008-3.88.056-5.098.044-.96.2-1.48.332-1.826.174-.457.382-.784.725-1.127.343-.343.67-.551 1.127-.725.346-.132.866-.288 1.826-.332 1.218-.048 1.598-.056 5.098-.056z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M12.017 5.838a6.18 6.18 0 1 0 0 12.36 6.18 6.18 0 0 0 0-12.36zm0 10.18a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("circle", {
                                                        cx: "18.406",
                                                        cy: "5.594",
                                                        r: "1.44"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 138,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300",
                                            href: "https://t.me/crmapps",
                                            "aria-label": "تلگرام",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "24",
                                                height: "24",
                                                fill: "currentColor",
                                                className: "h-5 w-5 text-gray-700 dark:text-gray-300",
                                                viewBox: "0 0 16 16",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                    d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300",
                                            href: "https://www.linkedin.com/company/vada-house-of-mobile/",
                                            "aria-label": "لینکدین",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                className: "h-5 w-5 text-gray-700 dark:text-gray-300",
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 173,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 168,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300",
                                            href: "https://api.whatsapp.com/send/?phone=989109838553",
                                            "aria-label": "واتساپ",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                className: "h-5 w-5 text-gray-700 dark:text-gray-300",
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Footer.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 188,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 183,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "https://vada.ir/",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: " w-fit p-3 px-8 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            alt: "Vada Logo",
                                            src: "/images/vada_logo.png",
                                            height: 150,
                                            width: 150,
                                            className: "rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 200,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 dark:text-gray-400",
                        children: [
                            "© ",
                            currentYear,
                            " تبدیل عکس به متن آنلاین . تمامی حقوق محفوظ است."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 215,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 214,
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
        className: `fixed bottom-6 animate-bounce-custom customers-badge right-6 z-50 p-3 rounded-full bg-primary hover:bg-primary/50 text-white shadow-lg transition-all duration-500 ease-in-out transform ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}`,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__e94f13b5._.js.map