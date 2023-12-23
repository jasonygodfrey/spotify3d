"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./utils/app.js":
/*!**********************!*\
  !*** ./utils/app.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeThreeJS: function() { return /* binding */ initializeThreeJS; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer.js */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/postprocessing/RenderPass.js */ \"./node_modules/three/examples/jsm/postprocessing/RenderPass.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/postprocessing/UnrealBloomPass.js */ \"./node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var three_stdlib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three-stdlib */ \"./node_modules/three-stdlib/index.js\");\n\n\n\n\n\n\nfunction initializeThreeJS(mountPoint) {\n    const clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();\n    let mouse = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n    // Set up the scene, camera, and renderer\n    const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n    const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n    camera.position.z = 1;\n    camera.position.y = -2.;\n    camera.rotation.x = 0.4; // Rotate camera slightly upwards\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n        alpha: true\n    });\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    renderer.setClearColor(0xF5F5DC, 1); // Beige color as default\n    mountPoint.appendChild(renderer.domElement);\n    // Load the GLTF model\n    let mixer; // Animation mixer\n    const loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader();\n    loader.load(\"cloud_station/scene.gltf\", function(gltf) {\n        gltf.scene.scale.set(1, 1, 1);\n        scene.add(gltf.scene);\n        scene.position.x -= 0;\n        scene.position.y -= 3;\n        if (gltf.animations && gltf.animations.length) {\n            mixer = new three__WEBPACK_IMPORTED_MODULE_0__.AnimationMixer(gltf.scene);\n            const action = mixer.clipAction(gltf.animations[0]);\n            action.play();\n        }\n    }, undefined, function(error) {\n        console.error(error);\n    });\n    // Create lights\n    const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 1);\n    scene.add(ambientLight);\n    const directionalLight = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffffff, 1);\n    directionalLight.position.set(1, 1, 1);\n    scene.add(directionalLight);\n    // Post-processing\n    const renderScene = new three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_2__.RenderPass(scene, camera);\n    const bloomPass = new three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_3__.UnrealBloomPass(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);\n    bloomPass.threshold = 0.1;\n    bloomPass.strength = 0.4;\n    bloomPass.radius = 0.1;\n    const composer = new three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_4__.EffectComposer(renderer);\n    composer.addPass(renderScene);\n    composer.addPass(bloomPass);\n    // Handle window resize\n    function onWindowResize() {\n        camera.aspect = window.innerWidth / window.innerHeight;\n        camera.updateProjectionMatrix();\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        composer.setSize(window.innerWidth, window.innerHeight);\n    }\n    window.addEventListener(\"resize\", onWindowResize, false);\n    // Device orientation controls for mobile\n    let deviceOrientationControls;\n    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {\n        deviceOrientationControls = new three_stdlib__WEBPACK_IMPORTED_MODULE_5__.DeviceOrientationControls(camera);\n        deviceOrientationControls.connect();\n        deviceOrientationControls.update(); // Update to align with the default camera settings\n    }\n    // Animation loop\n    function animate() {\n        requestAnimationFrame(animate);\n        const delta = clock.getDelta();\n        if (mixer) {\n            mixer.update(delta);\n        }\n        if (deviceOrientationControls) {\n            deviceOrientationControls.update();\n        }\n        composer.render();\n    }\n    animate();\n    // Mouse and zoom controls\n    window.addEventListener(\"mousemove\", (event)=>{\n        mouse.x = event.clientX / window.innerWidth * 2 - 1;\n        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;\n    });\n    function zoom(direction) {\n        camera.position.z += direction;\n    }\n    window.addEventListener(\"wheel\", (event)=>{\n        zoom(event.deltaY > 0 ? 1 : -1);\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsRUFBRUQsT0FBT0UsV0FBVztJQUMxRDtJQUNBRixPQUFPNkMsZ0JBQWdCLENBQUMsVUFBVUgsZ0JBQWdCO0lBRWxELHlDQUF5QztJQUN6QyxJQUFJSTtJQUNKLElBQUksdUJBQXVCQyxJQUFJLENBQUNDLFVBQVVDLFNBQVMsR0FBRztRQUNsREgsNEJBQTRCLElBQUl6RCxtRUFBeUJBLENBQUNTO1FBQzFEZ0QsMEJBQTBCSSxPQUFPO1FBQ2pDSiwwQkFBMEJLLE1BQU0sSUFBSSxtREFBbUQ7SUFDM0Y7SUFFQSxpQkFBaUI7SUFDakIsU0FBU0M7UUFDTEMsc0JBQXNCRDtRQUN0QixNQUFNRSxRQUFROUQsTUFBTStELFFBQVE7UUFDNUIsSUFBSXhDLE9BQU87WUFDUEEsTUFBTW9DLE1BQU0sQ0FBQ0c7UUFDakI7UUFDQSxJQUFJUiwyQkFBMkI7WUFDM0JBLDBCQUEwQkssTUFBTTtRQUNwQztRQUNBWCxTQUFTZ0IsTUFBTTtJQUNuQjtJQUNBSjtJQUVBLDBCQUEwQjtJQUMxQnBELE9BQU82QyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUNZO1FBQ2xDL0QsTUFBTWEsQ0FBQyxHQUFHLE1BQU9tRCxPQUFPLEdBQUcxRCxPQUFPQyxVQUFVLEdBQUksSUFBSTtRQUNwRFAsTUFBTVcsQ0FBQyxHQUFHLENBQUVvRCxDQUFBQSxNQUFNRSxPQUFPLEdBQUczRCxPQUFPRSxXQUFXLElBQUksSUFBSTtJQUMxRDtJQUVBLFNBQVMwRCxLQUFLQyxTQUFTO1FBQ25CL0QsT0FBT0ssUUFBUSxDQUFDQyxDQUFDLElBQUl5RDtJQUN6QjtJQUNBN0QsT0FBTzZDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQ1k7UUFDOUJHLEtBQUtILE1BQU1LLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQztJQUNqQztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2FwcC5qcz9jMjQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgRWZmZWN0Q29tcG9zZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL0VmZmVjdENvbXBvc2VyLmpzXCI7XG5pbXBvcnQgeyBSZW5kZXJQYXNzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9SZW5kZXJQYXNzLmpzXCI7XG5pbXBvcnQgeyBVbnJlYWxCbG9vbVBhc3MgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL1VucmVhbEJsb29tUGFzcy5qc1wiO1xuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMnO1xuaW1wb3J0IHsgRGV2aWNlT3JpZW50YXRpb25Db250cm9scyB9IGZyb20gJ3RocmVlLXN0ZGxpYic7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplVGhyZWVKUyhtb3VudFBvaW50KSB7XG4gICAgY29uc3QgY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcbiAgICBsZXQgbW91c2UgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG4gICAgLy8gU2V0IHVwIHRoZSBzY2VuZSwgY2FtZXJhLCBhbmQgcmVuZGVyZXJcbiAgICBjb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDAuMSwgMTAwMCk7XG4gICAgXG4gICAgY2FtZXJhLnBvc2l0aW9uLnogPSAxO1xuICAgIGNhbWVyYS5wb3NpdGlvbi55ID0gLTIuO1xuICAgIGNhbWVyYS5yb3RhdGlvbi54ID0gMC40OyAvLyBSb3RhdGUgY2FtZXJhIHNsaWdodGx5IHVwd2FyZHNcblxuXG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IGFscGhhOiB0cnVlIH0pO1xuICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigweEY1RjVEQywgMSk7IC8vIEJlaWdlIGNvbG9yIGFzIGRlZmF1bHRcblxuICAgIG1vdW50UG9pbnQuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbiAgICAvLyBMb2FkIHRoZSBHTFRGIG1vZGVsXG4gICAgbGV0IG1peGVyOyAvLyBBbmltYXRpb24gbWl4ZXJcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgR0xURkxvYWRlcigpO1xuICAgIGxvYWRlci5sb2FkKCdjbG91ZF9zdGF0aW9uL3NjZW5lLmdsdGYnLCBmdW5jdGlvbiAoZ2x0Zikge1xuICAgICAgICBnbHRmLnNjZW5lLnNjYWxlLnNldCgxLCAxLCAxKTtcbiAgICAgICAgc2NlbmUuYWRkKGdsdGYuc2NlbmUpO1xuICAgICAgICBzY2VuZS5wb3NpdGlvbi54IC09IDA7XG4gICAgICAgIHNjZW5lLnBvc2l0aW9uLnkgLT0gMztcbiAgICAgICAgaWYgKGdsdGYuYW5pbWF0aW9ucyAmJiBnbHRmLmFuaW1hdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBtaXhlciA9IG5ldyBUSFJFRS5BbmltYXRpb25NaXhlcihnbHRmLnNjZW5lKTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IG1peGVyLmNsaXBBY3Rpb24oZ2x0Zi5hbmltYXRpb25zWzBdKTtcbiAgICAgICAgICAgIGFjdGlvbi5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9LCB1bmRlZmluZWQsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBsaWdodHNcbiAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4ZmZmZmZmLCAxKTtcbiAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcblxuICAgIGNvbnN0IGRpcmVjdGlvbmFsTGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZiwgMSk7XG4gICAgZGlyZWN0aW9uYWxMaWdodC5wb3NpdGlvbi5zZXQoMSwgMSwgMSk7XG4gICAgc2NlbmUuYWRkKGRpcmVjdGlvbmFsTGlnaHQpO1xuXG4gICAgLy8gUG9zdC1wcm9jZXNzaW5nXG4gICAgY29uc3QgcmVuZGVyU2NlbmUgPSBuZXcgUmVuZGVyUGFzcyhzY2VuZSwgY2FtZXJhKTtcblxuICAgIGNvbnN0IGJsb29tUGFzcyA9IG5ldyBVbnJlYWxCbG9vbVBhc3MoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IyKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpLFxuICAgICAgICAxLjUsIDAuNCwgMC44NVxuICAgICk7XG4gICAgYmxvb21QYXNzLnRocmVzaG9sZCA9IDAuMTtcbiAgICBibG9vbVBhc3Muc3RyZW5ndGggPSAwLjQ7XG4gICAgYmxvb21QYXNzLnJhZGl1cyA9IDAuMTtcblxuICAgIGNvbnN0IGNvbXBvc2VyID0gbmV3IEVmZmVjdENvbXBvc2VyKHJlbmRlcmVyKTtcbiAgICBjb21wb3Nlci5hZGRQYXNzKHJlbmRlclNjZW5lKTtcbiAgICBjb21wb3Nlci5hZGRQYXNzKGJsb29tUGFzcyk7XG5cbiAgICAvLyBIYW5kbGUgd2luZG93IHJlc2l6ZVxuICAgIGZ1bmN0aW9uIG9uV2luZG93UmVzaXplKCkge1xuICAgICAgICBjYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICAgIGNvbXBvc2VyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvbldpbmRvd1Jlc2l6ZSwgZmFsc2UpO1xuXG4gICAgLy8gRGV2aWNlIG9yaWVudGF0aW9uIGNvbnRyb2xzIGZvciBtb2JpbGVcbiAgICBsZXQgZGV2aWNlT3JpZW50YXRpb25Db250cm9scztcbiAgICBpZiAoL01vYml8QW5kcm9pZHxpUGhvbmUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgIGRldmljZU9yaWVudGF0aW9uQ29udHJvbHMgPSBuZXcgRGV2aWNlT3JpZW50YXRpb25Db250cm9scyhjYW1lcmEpO1xuICAgICAgICBkZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzLmNvbm5lY3QoKTtcbiAgICAgICAgZGV2aWNlT3JpZW50YXRpb25Db250cm9scy51cGRhdGUoKTsgLy8gVXBkYXRlIHRvIGFsaWduIHdpdGggdGhlIGRlZmF1bHQgY2FtZXJhIHNldHRpbmdzXG4gICAgfVxuXG4gICAgLy8gQW5pbWF0aW9uIGxvb3BcbiAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gY2xvY2suZ2V0RGVsdGEoKTtcbiAgICAgICAgaWYgKG1peGVyKSB7XG4gICAgICAgICAgICBtaXhlci51cGRhdGUoZGVsdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzKSB7XG4gICAgICAgICAgICBkZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBvc2VyLnJlbmRlcigpO1xuICAgIH1cbiAgICBhbmltYXRlKCk7XG5cbiAgICAvLyBNb3VzZSBhbmQgem9vbSBjb250cm9sc1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgbW91c2UueCA9IChldmVudC5jbGllbnRYIC8gd2luZG93LmlubmVyV2lkdGgpICogMiAtIDE7XG4gICAgICAgIG1vdXNlLnkgPSAtKGV2ZW50LmNsaWVudFkgLyB3aW5kb3cuaW5uZXJIZWlnaHQpICogMiArIDE7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiB6b29tKGRpcmVjdGlvbikge1xuICAgICAgICBjYW1lcmEucG9zaXRpb24ueiArPSBkaXJlY3Rpb247XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIChldmVudCkgPT4ge1xuICAgICAgICB6b29tKGV2ZW50LmRlbHRhWSA+IDAgPyAxIDogLTEpO1xuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbIlRIUkVFIiwiRWZmZWN0Q29tcG9zZXIiLCJSZW5kZXJQYXNzIiwiVW5yZWFsQmxvb21QYXNzIiwiR0xURkxvYWRlciIsIkRldmljZU9yaWVudGF0aW9uQ29udHJvbHMiLCJpbml0aWFsaXplVGhyZWVKUyIsIm1vdW50UG9pbnQiLCJjbG9jayIsIkNsb2NrIiwibW91c2UiLCJWZWN0b3IyIiwic2NlbmUiLCJTY2VuZSIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJ6IiwieSIsInJvdGF0aW9uIiwieCIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsImFscGhhIiwic2V0U2l6ZSIsInNldENsZWFyQ29sb3IiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJtaXhlciIsImxvYWRlciIsImxvYWQiLCJnbHRmIiwic2NhbGUiLCJzZXQiLCJhZGQiLCJhbmltYXRpb25zIiwibGVuZ3RoIiwiQW5pbWF0aW9uTWl4ZXIiLCJhY3Rpb24iLCJjbGlwQWN0aW9uIiwicGxheSIsInVuZGVmaW5lZCIsImVycm9yIiwiY29uc29sZSIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImRpcmVjdGlvbmFsTGlnaHQiLCJEaXJlY3Rpb25hbExpZ2h0IiwicmVuZGVyU2NlbmUiLCJibG9vbVBhc3MiLCJ0aHJlc2hvbGQiLCJzdHJlbmd0aCIsInJhZGl1cyIsImNvbXBvc2VyIiwiYWRkUGFzcyIsIm9uV2luZG93UmVzaXplIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImNvbm5lY3QiLCJ1cGRhdGUiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZGVsdGEiLCJnZXREZWx0YSIsInJlbmRlciIsImV2ZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJ6b29tIiwiZGlyZWN0aW9uIiwiZGVsdGFZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/app.js\n"));

/***/ })

});