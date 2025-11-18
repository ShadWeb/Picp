module.exports = [
"[externals]/jszip [external] (jszip, cjs, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/[externals]_jszip_44b2e598._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[externals]/jszip [external] (jszip, cjs)");
    });
});
}),
];