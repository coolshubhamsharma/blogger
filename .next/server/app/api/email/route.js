"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/email/route";
exports.ids = ["app/api/email/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Femail%2Froute&page=%2Fapi%2Femail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Femail%2Froute.js&appDir=G%3A%5Cprojects%5Cblogs%5Cblog-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=G%3A%5Cprojects%5Cblogs%5Cblog-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Femail%2Froute&page=%2Fapi%2Femail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Femail%2Froute.js&appDir=G%3A%5Cprojects%5Cblogs%5Cblog-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=G%3A%5Cprojects%5Cblogs%5Cblog-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var G_projects_blogs_blog_app_app_api_email_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/email/route.js */ \"(rsc)/./app/api/email/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/email/route\",\n        pathname: \"/api/email\",\n        filename: \"route\",\n        bundlePath: \"app/api/email/route\"\n    },\n    resolvedPagePath: \"G:\\\\projects\\\\blogs\\\\blog-app\\\\app\\\\api\\\\email\\\\route.js\",\n    nextConfigOutput,\n    userland: G_projects_blogs_blog_app_app_api_email_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/email/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZlbWFpbCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZW1haWwlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZlbWFpbCUyRnJvdXRlLmpzJmFwcERpcj1HJTNBJTVDcHJvamVjdHMlNUNibG9ncyU1Q2Jsb2ctYXBwJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1HJTNBJTVDcHJvamVjdHMlNUNibG9ncyU1Q2Jsb2ctYXBwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNRO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1hcHAvPzQ5YjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRzpcXFxccHJvamVjdHNcXFxcYmxvZ3NcXFxcYmxvZy1hcHBcXFxcYXBwXFxcXGFwaVxcXFxlbWFpbFxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZW1haWwvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9lbWFpbFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZW1haWwvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJHOlxcXFxwcm9qZWN0c1xcXFxibG9nc1xcXFxibG9nLWFwcFxcXFxhcHBcXFxcYXBpXFxcXGVtYWlsXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9lbWFpbC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Femail%2Froute&page=%2Fapi%2Femail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Femail%2Froute.js&appDir=G%3A%5Cprojects%5Cblogs%5Cblog-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=G%3A%5Cprojects%5Cblogs%5Cblog-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/email/route.js":
/*!********************************!*\
  !*** ./app/api/email/route.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_config_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/config/db */ \"(rsc)/./lib/config/db.js\");\n/* harmony import */ var _lib_models_EmailModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/models/EmailModel */ \"(rsc)/./lib/models/EmailModel.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function POST(request) {\n    await (0,_lib_config_db__WEBPACK_IMPORTED_MODULE_0__.ConnectDB)();\n    try {\n        const formData = await request.formData();\n        const emailData = {\n            email: `${formData.get(\"email\")}`\n        };\n        await _lib_models_EmailModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(emailData);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            success: true,\n            msg: \"email Subscribed\"\n        });\n    } catch (e) {\n        console.error(\"error\", e);\n    }\n}\nasync function GET(request) {\n    await (0,_lib_config_db__WEBPACK_IMPORTED_MODULE_0__.ConnectDB)();\n    try {\n        const emails = await _lib_models_EmailModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            emails\n        });\n    } catch (e) {\n        console.error(\"error fetching Email\", e);\n    }\n}\nasync function DELETE(request) {\n    await (0,_lib_config_db__WEBPACK_IMPORTED_MODULE_0__.ConnectDB)();\n    try {\n        const id = await request.nextUrl.searchParams.get(\"id\");\n        await _lib_models_EmailModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndDelete(id);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            success: true,\n            msg: \"email deleted\"\n        });\n    } catch (e) {\n        console.error(\"error deleting email\", e);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2VtYWlsL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QztBQUNBO0FBQ0Q7QUFHcEMsZUFBZUcsS0FBS0MsT0FBTztJQUM5QixNQUFNSix5REFBU0E7SUFDZixJQUFHO1FBQ0YsTUFBTUssV0FBVyxNQUFNRCxRQUFRQyxRQUFRO1FBQ3ZDLE1BQU1DLFlBQVk7WUFDZEMsT0FBTSxDQUFDLEVBQUVGLFNBQVNHLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFFcEM7UUFFQSxNQUFNUCw4REFBS0EsQ0FBQ1EsTUFBTSxDQUFDSDtRQUNuQixPQUFPSixxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQUNDLFNBQVE7WUFBS0MsS0FBSTtRQUFrQjtJQUM5RCxFQUNBLE9BQU1DLEdBQUU7UUFDSkMsUUFBUUMsS0FBSyxDQUFDLFNBQVFGO0lBQzFCO0FBQ0o7QUFFTyxlQUFlRyxJQUFJWixPQUFPO0lBQzdCLE1BQU1KLHlEQUFTQTtJQUNmLElBQUc7UUFDSCxNQUFNaUIsU0FBUyxNQUFNaEIsOERBQUtBLENBQUNpQixJQUFJLENBQUMsQ0FBQztRQUNqQyxPQUFPaEIscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUFDTztRQUFNO0lBQ2hDLEVBQ0EsT0FBTUosR0FBRTtRQUNKQyxRQUFRQyxLQUFLLENBQUMsd0JBQXlCRjtJQUMzQztBQUNKO0FBRU8sZUFBZU0sT0FBT2YsT0FBTztJQUNoQyxNQUFNSix5REFBU0E7SUFDZixJQUFHO1FBQ0MsTUFBTW9CLEtBQUssTUFBTWhCLFFBQVFpQixPQUFPLENBQUNDLFlBQVksQ0FBQ2QsR0FBRyxDQUFDO1FBQ2xELE1BQU1QLDhEQUFLQSxDQUFDc0IsaUJBQWlCLENBQUNIO1FBQzlCLE9BQU9sQixxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQUNDLFNBQVE7WUFBT0MsS0FBSTtRQUFlO0lBQ2hFLEVBQ0EsT0FBTUMsR0FBRTtRQUNKQyxRQUFRQyxLQUFLLENBQUMsd0JBQXlCRjtJQUMzQztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1hcHAvLi9hcHAvYXBpL2VtYWlsL3JvdXRlLmpzPzQwMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29ubmVjdERCIH0gZnJvbSBcIkAvbGliL2NvbmZpZy9kYlwiO1xyXG5pbXBvcnQgRW1haWwgZnJvbSBcIkAvbGliL21vZGVscy9FbWFpbE1vZGVsXCI7XHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Qpe1xyXG4gICAgYXdhaXQgQ29ubmVjdERCKCk7XHJcbiAgICB0cnl7XHJcbiAgICAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgICAgY29uc3QgZW1haWxEYXRhID0ge1xyXG4gICAgICAgICBlbWFpbDpgJHtmb3JtRGF0YS5nZXQoJ2VtYWlsJyl9YCxcclxuXHJcbiAgICAgfVxyXG5cclxuICAgICBhd2FpdCBFbWFpbC5jcmVhdGUoZW1haWxEYXRhKTtcclxuICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe3N1Y2Nlc3M6dHJ1ZSxtc2c6XCJlbWFpbCBTdWJzY3JpYmVkXCJ9KVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignZXJyb3InLGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3Qpe1xyXG4gICAgYXdhaXQgQ29ubmVjdERCKCk7XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCBlbWFpbHMgPSBhd2FpdCBFbWFpbC5maW5kKHt9KTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7ZW1haWxzfSk7IFxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcImVycm9yIGZldGNoaW5nIEVtYWlsXCIgLCBlKTsgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBERUxFVEUocmVxdWVzdCl7XHJcbiAgICBhd2FpdCBDb25uZWN0REIoKTtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCBpZCA9IGF3YWl0IHJlcXVlc3QubmV4dFVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiaWRcIik7XHJcbiAgICAgICAgYXdhaXQgRW1haWwuZmluZEJ5SWRBbmREZWxldGUoaWQpO1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7c3VjY2Vzczp0cnVlICwgbXNnOlwiZW1haWwgZGVsZXRlZFwifSlcclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJvciBkZWxldGluZyBlbWFpbFwiICwgZSk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiQ29ubmVjdERCIiwiRW1haWwiLCJOZXh0UmVzcG9uc2UiLCJQT1NUIiwicmVxdWVzdCIsImZvcm1EYXRhIiwiZW1haWxEYXRhIiwiZW1haWwiLCJnZXQiLCJjcmVhdGUiLCJqc29uIiwic3VjY2VzcyIsIm1zZyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJHRVQiLCJlbWFpbHMiLCJmaW5kIiwiREVMRVRFIiwiaWQiLCJuZXh0VXJsIiwic2VhcmNoUGFyYW1zIiwiZmluZEJ5SWRBbmREZWxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/email/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/config/db.js":
/*!**************************!*\
  !*** ./lib/config/db.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConnectDB: () => (/* binding */ ConnectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_1___default().config();\nconst dbURL = process.env.dbURL;\nif (!dbURL) {\n    throw new Error(\"MONGODB_URL is not set\");\n}\nlet isConnected = false;\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"debug\", true);\nconst ConnectDB = async ()=>{\n    if (isConnected) {\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(dbURL);\n        console.log(\"DB connected\");\n        isConnected = true;\n    } catch (e) {\n        console.log(\"error connecting DB\", e);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvY29uZmlnL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ2dDO0FBQ0o7QUFFNUJDLG9EQUFhO0FBQ2IsTUFBTUUsUUFBUUMsUUFBUUMsR0FBRyxDQUFDRixLQUFLO0FBRS9CLElBQUksQ0FBQ0EsT0FBTztJQUNSLE1BQU0sSUFBSUcsTUFBTTtBQUNwQjtBQUdBLElBQUlDLGNBQWM7QUFDbEJQLG1EQUFZLENBQUMsU0FBUztBQUdmLE1BQU1TLFlBQVk7SUFFckIsSUFBSUYsYUFBYTtRQUNiO0lBQ0o7SUFFQSxJQUFHO1FBQ0QsTUFBTVAsdURBQWdCLENBQUNHO1FBQ3ZCUSxRQUFRQyxHQUFHLENBQUM7UUFDWkwsY0FBYztJQUNoQixFQUNBLE9BQU1NLEdBQUU7UUFDTEYsUUFBUUMsR0FBRyxDQUFDLHVCQUF3QkM7SUFDdkM7QUFFSixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1hcHAvLi9saWIvY29uZmlnL2RiLmpzP2NhOGYiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcclxuXHJcbmRvdGVudi5jb25maWcoKTtcclxuY29uc3QgZGJVUkwgPSBwcm9jZXNzLmVudi5kYlVSTDtcclxuXHJcbmlmICghZGJVUkwpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignTU9OR09EQl9VUkwgaXMgbm90IHNldCcpO1xyXG59XHJcblxyXG5cclxubGV0IGlzQ29ubmVjdGVkID0gZmFsc2U7XHJcbm1vbmdvb3NlLnNldCgnZGVidWcnLCB0cnVlKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ29ubmVjdERCID0gYXN5bmMoKT0+e1xyXG5cclxuICAgIGlmIChpc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0cnl7XHJcbiAgICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoZGJVUkwpO1xyXG4gICAgICBjb25zb2xlLmxvZygnREIgY29ubmVjdGVkJyk7XHJcbiAgICAgIGlzQ29ubmVjdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGNvbm5lY3RpbmcgREInICwgZSk7XHJcbiAgICB9XHJcbiAgICBcclxufSJdLCJuYW1lcyI6WyJtb25nb29zZSIsImRvdGVudiIsImNvbmZpZyIsImRiVVJMIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiaXNDb25uZWN0ZWQiLCJzZXQiLCJDb25uZWN0REIiLCJjb25uZWN0IiwiY29uc29sZSIsImxvZyIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/config/db.js\n");

/***/ }),

/***/ "(rsc)/./lib/models/EmailModel.js":
/*!**********************************!*\
  !*** ./lib/models/EmailModel.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst EmailSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    email: {\n        type: String,\n        required: true\n    },\n    date: {\n        type: Date,\n        default: Date.now\n    }\n});\nconst Email = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Email || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Email\", EmailSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Email);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9kZWxzL0VtYWlsTW9kZWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQWMsSUFBSUQsd0RBQWUsQ0FBQztJQUNwQ0csT0FBTTtRQUNGQyxNQUFLQztRQUNMQyxVQUFTO0lBQ2I7SUFDQUMsTUFBSztRQUNESCxNQUFLSTtRQUNMQyxTQUFRRCxLQUFLRSxHQUFHO0lBQ3BCO0FBQ0o7QUFFQSxNQUFNQyxRQUFRWCx3REFBZSxDQUFDVyxLQUFLLElBQUlYLHFEQUFjLENBQUMsU0FBVUM7QUFDaEUsaUVBQWVVLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLWFwcC8uL2xpYi9tb2RlbHMvRW1haWxNb2RlbC5qcz8wYTczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IEVtYWlsU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICBlbWFpbDp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfSxcclxuICAgIGRhdGU6e1xyXG4gICAgICAgIHR5cGU6RGF0ZSxcclxuICAgICAgICBkZWZhdWx0OkRhdGUubm93XHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBFbWFpbCA9IG1vbmdvb3NlLm1vZGVscy5FbWFpbCB8fCBtb25nb29zZS5tb2RlbChcIkVtYWlsXCIgLCBFbWFpbFNjaGVtYSk7IFxyXG5leHBvcnQgZGVmYXVsdCBFbWFpbDsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJFbWFpbFNjaGVtYSIsIlNjaGVtYSIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZGF0ZSIsIkRhdGUiLCJkZWZhdWx0Iiwibm93IiwiRW1haWwiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/models/EmailModel.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/dotenv"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Femail%2Froute&page=%2Fapi%2Femail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Femail%2Froute.js&appDir=G%3A%5Cprojects%5Cblogs%5Cblog-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=G%3A%5Cprojects%5Cblogs%5Cblog-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();