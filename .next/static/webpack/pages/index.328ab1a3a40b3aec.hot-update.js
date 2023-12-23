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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeThreeJS: function() { return /* binding */ initializeThreeJS; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer.js */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/postprocessing/RenderPass.js */ \"./node_modules/three/examples/jsm/postprocessing/RenderPass.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/postprocessing/UnrealBloomPass.js */ \"./node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var three_stdlib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three-stdlib */ \"./node_modules/three-stdlib/index.js\");\n\n\n\n\n\n\nfunction initializeThreeJS(mountPoint) {\n    const clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();\n    let mouse = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n    // Set up the scene, camera, and renderer\n    const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n    const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n    camera.position.z = 1;\n    camera.position.y = -2.;\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n        alpha: true\n    });\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    renderer.setClearColor(0xF5F5DC, 1); // Beige color as default\n    mountPoint.appendChild(renderer.domElement);\n    // Load the GLTF model\n    let mixer; // Animation mixer\n    const loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader();\n    loader.load(\"cloud_station/scene.gltf\", function(gltf) {\n        gltf.scene.scale.set(1, 1, 1);\n        scene.add(gltf.scene);\n        scene.position.x -= 0;\n        scene.position.y -= 3;\n        if (gltf.animations && gltf.animations.length) {\n            mixer = new three__WEBPACK_IMPORTED_MODULE_0__.AnimationMixer(gltf.scene);\n            const action = mixer.clipAction(gltf.animations[0]);\n            action.play();\n        }\n    }, undefined, function(error) {\n        console.error(error);\n    });\n    // Create lights\n    const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 1);\n    scene.add(ambientLight);\n    const directionalLight = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffffff, 1);\n    directionalLight.position.set(1, 1, 1);\n    scene.add(directionalLight);\n    // Post-processing\n    const renderScene = new three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_2__.RenderPass(scene, camera);\n    const bloomPass = new three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_3__.UnrealBloomPass(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);\n    bloomPass.threshold = 0.1;\n    bloomPass.strength = 0.4;\n    bloomPass.radius = 0.1;\n    const composer = new three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_4__.EffectComposer(renderer);\n    composer.addPass(renderScene);\n    composer.addPass(bloomPass);\n    // Handle window resize\n    function onWindowResize() {\n        camera.aspect = window.innerWidth / window.innerHeight;\n        camera.updateProjectionMatrix();\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        composer.setSize(window.innerWidth, window.innerHeight);\n    }\n    window.addEventListener(\"resize\", onWindowResize, false);\n    // Device orientation controls for mobile\n    let deviceOrientationControls;\n    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {\n        deviceOrientationControls = new three_stdlib__WEBPACK_IMPORTED_MODULE_5__.DeviceOrientationControls(camera);\n    }\n    // Animation loop\n    function animate() {\n        requestAnimationFrame(animate);\n        const delta = clock.getDelta();\n        if (mixer) {\n            mixer.update(delta);\n        }\n        if (deviceOrientationControls) {\n            deviceOrientationControls.update();\n        }\n        composer.render();\n    }\n    animate();\n    // Mouse and zoom controls\n    window.addEventListener(\"mousemove\", (event)=>{\n        mouse.x = event.clientX / window.innerWidth * 2 - 1;\n        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;\n    });\n    function zoom(direction) {\n        camera.position.z += direction;\n    }\n    window.addEventListener(\"wheel\", (event)=>{\n        zoom(event.deltaY > 0 ? 1 : -1);\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdCLENBQUMsVUFBVUgsZ0JBQWdCO0lBRWxELHlDQUF5QztJQUN6QyxJQUFJSTtJQUNKLElBQUksdUJBQXVCQyxJQUFJLENBQUNDLFVBQVVDLFNBQVMsR0FBRztRQUNsREgsNEJBQTRCLElBQUl4RCxtRUFBeUJBLENBQUNTO0lBQzlEO0lBRUEsaUJBQWlCO0lBQ2pCLFNBQVNtRDtRQUNMQyxzQkFBc0JEO1FBQ3RCLE1BQU1FLFFBQVEzRCxNQUFNNEQsUUFBUTtRQUM1QixJQUFJdkMsT0FBTztZQUNQQSxNQUFNd0MsTUFBTSxDQUFDRjtRQUNqQjtRQUNBLElBQUlOLDJCQUEyQjtZQUMzQkEsMEJBQTBCUSxNQUFNO1FBQ3BDO1FBQ0FkLFNBQVNlLE1BQU07SUFDbkI7SUFDQUw7SUFFQSwwQkFBMEI7SUFDMUJqRCxPQUFPNEMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDVztRQUNsQzdELE1BQU0wQixDQUFDLEdBQUcsTUFBT29DLE9BQU8sR0FBR3hELE9BQU9DLFVBQVUsR0FBSSxJQUFJO1FBQ3BEUCxNQUFNVyxDQUFDLEdBQUcsQ0FBRWtELENBQUFBLE1BQU1FLE9BQU8sR0FBR3pELE9BQU9FLFdBQVcsSUFBSSxJQUFJO0lBQzFEO0lBRUEsU0FBU3dELEtBQUtDLFNBQVM7UUFDbkI3RCxPQUFPSyxRQUFRLENBQUNDLENBQUMsSUFBSXVEO0lBQ3pCO0lBQ0EzRCxPQUFPNEMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDVztRQUM5QkcsS0FBS0gsTUFBTUssTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDO0lBQ2pDO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvYXBwLmpzP2MyNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBFZmZlY3RDb21wb3NlciB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvRWZmZWN0Q29tcG9zZXIuanNcIjtcbmltcG9ydCB7IFJlbmRlclBhc3MgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL1JlbmRlclBhc3MuanNcIjtcbmltcG9ydCB7IFVucmVhbEJsb29tUGFzcyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvVW5yZWFsQmxvb21QYXNzLmpzXCI7XG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlci5qcyc7XG5pbXBvcnQgeyBEZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzIH0gZnJvbSAndGhyZWUtc3RkbGliJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVUaHJlZUpTKG1vdW50UG9pbnQpIHtcbiAgICBjb25zdCBjbG9jayA9IG5ldyBUSFJFRS5DbG9jaygpO1xuICAgIGxldCBtb3VzZSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cbiAgICAvLyBTZXQgdXAgdGhlIHNjZW5lLCBjYW1lcmEsIGFuZCByZW5kZXJlclxuICAgIGNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwKTtcbiAgICBcbiAgICBjYW1lcmEucG9zaXRpb24ueiA9IDE7XG4gICAgY2FtZXJhLnBvc2l0aW9uLnkgPSAtMi47XG5cbiAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgYWxwaGE6IHRydWUgfSk7XG4gICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4RjVGNURDLCAxKTsgLy8gQmVpZ2UgY29sb3IgYXMgZGVmYXVsdFxuXG4gICAgbW91bnRQb2ludC5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcblxuICAgIC8vIExvYWQgdGhlIEdMVEYgbW9kZWxcbiAgICBsZXQgbWl4ZXI7IC8vIEFuaW1hdGlvbiBtaXhlclxuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBHTFRGTG9hZGVyKCk7XG4gICAgbG9hZGVyLmxvYWQoJ2Nsb3VkX3N0YXRpb24vc2NlbmUuZ2x0ZicsIGZ1bmN0aW9uIChnbHRmKSB7XG4gICAgICAgIGdsdGYuc2NlbmUuc2NhbGUuc2V0KDEsIDEsIDEpO1xuICAgICAgICBzY2VuZS5hZGQoZ2x0Zi5zY2VuZSk7XG4gICAgICAgIHNjZW5lLnBvc2l0aW9uLnggLT0gMDtcbiAgICAgICAgc2NlbmUucG9zaXRpb24ueSAtPSAzO1xuICAgICAgICBpZiAoZ2x0Zi5hbmltYXRpb25zICYmIGdsdGYuYW5pbWF0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG1peGVyID0gbmV3IFRIUkVFLkFuaW1hdGlvbk1peGVyKGdsdGYuc2NlbmUpO1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gbWl4ZXIuY2xpcEFjdGlvbihnbHRmLmFuaW1hdGlvbnNbMF0pO1xuICAgICAgICAgICAgYWN0aW9uLnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH0sIHVuZGVmaW5lZCwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIGxpZ2h0c1xuICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhmZmZmZmYsIDEpO1xuICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpO1xuXG4gICAgY29uc3QgZGlyZWN0aW9uYWxMaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmLCAxKTtcbiAgICBkaXJlY3Rpb25hbExpZ2h0LnBvc2l0aW9uLnNldCgxLCAxLCAxKTtcbiAgICBzY2VuZS5hZGQoZGlyZWN0aW9uYWxMaWdodCk7XG5cbiAgICAvLyBQb3N0LXByb2Nlc3NpbmdcbiAgICBjb25zdCByZW5kZXJTY2VuZSA9IG5ldyBSZW5kZXJQYXNzKHNjZW5lLCBjYW1lcmEpO1xuXG4gICAgY29uc3QgYmxvb21QYXNzID0gbmV3IFVucmVhbEJsb29tUGFzcyhcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCksXG4gICAgICAgIDEuNSwgMC40LCAwLjg1XG4gICAgKTtcbiAgICBibG9vbVBhc3MudGhyZXNob2xkID0gMC4xO1xuICAgIGJsb29tUGFzcy5zdHJlbmd0aCA9IDAuNDtcbiAgICBibG9vbVBhc3MucmFkaXVzID0gMC4xO1xuXG4gICAgY29uc3QgY29tcG9zZXIgPSBuZXcgRWZmZWN0Q29tcG9zZXIocmVuZGVyZXIpO1xuICAgIGNvbXBvc2VyLmFkZFBhc3MocmVuZGVyU2NlbmUpO1xuICAgIGNvbXBvc2VyLmFkZFBhc3MoYmxvb21QYXNzKTtcblxuICAgIC8vIEhhbmRsZSB3aW5kb3cgcmVzaXplXG4gICAgZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoKSB7XG4gICAgICAgIGNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgICAgY29tcG9zZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uV2luZG93UmVzaXplLCBmYWxzZSk7XG5cbiAgICAvLyBEZXZpY2Ugb3JpZW50YXRpb24gY29udHJvbHMgZm9yIG1vYmlsZVxuICAgIGxldCBkZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzO1xuICAgIGlmICgvTW9iaXxBbmRyb2lkfGlQaG9uZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgZGV2aWNlT3JpZW50YXRpb25Db250cm9scyA9IG5ldyBEZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzKGNhbWVyYSk7XG4gICAgfVxuXG4gICAgLy8gQW5pbWF0aW9uIGxvb3BcbiAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gY2xvY2suZ2V0RGVsdGEoKTtcbiAgICAgICAgaWYgKG1peGVyKSB7XG4gICAgICAgICAgICBtaXhlci51cGRhdGUoZGVsdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzKSB7XG4gICAgICAgICAgICBkZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBvc2VyLnJlbmRlcigpO1xuICAgIH1cbiAgICBhbmltYXRlKCk7XG5cbiAgICAvLyBNb3VzZSBhbmQgem9vbSBjb250cm9sc1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgbW91c2UueCA9IChldmVudC5jbGllbnRYIC8gd2luZG93LmlubmVyV2lkdGgpICogMiAtIDE7XG4gICAgICAgIG1vdXNlLnkgPSAtKGV2ZW50LmNsaWVudFkgLyB3aW5kb3cuaW5uZXJIZWlnaHQpICogMiArIDE7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiB6b29tKGRpcmVjdGlvbikge1xuICAgICAgICBjYW1lcmEucG9zaXRpb24ueiArPSBkaXJlY3Rpb247XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIChldmVudCkgPT4ge1xuICAgICAgICB6b29tKGV2ZW50LmRlbHRhWSA+IDAgPyAxIDogLTEpO1xuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbIlRIUkVFIiwiRWZmZWN0Q29tcG9zZXIiLCJSZW5kZXJQYXNzIiwiVW5yZWFsQmxvb21QYXNzIiwiR0xURkxvYWRlciIsIkRldmljZU9yaWVudGF0aW9uQ29udHJvbHMiLCJpbml0aWFsaXplVGhyZWVKUyIsIm1vdW50UG9pbnQiLCJjbG9jayIsIkNsb2NrIiwibW91c2UiLCJWZWN0b3IyIiwic2NlbmUiLCJTY2VuZSIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJ6IiwieSIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsImFscGhhIiwic2V0U2l6ZSIsInNldENsZWFyQ29sb3IiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJtaXhlciIsImxvYWRlciIsImxvYWQiLCJnbHRmIiwic2NhbGUiLCJzZXQiLCJhZGQiLCJ4IiwiYW5pbWF0aW9ucyIsImxlbmd0aCIsIkFuaW1hdGlvbk1peGVyIiwiYWN0aW9uIiwiY2xpcEFjdGlvbiIsInBsYXkiLCJ1bmRlZmluZWQiLCJlcnJvciIsImNvbnNvbGUiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJkaXJlY3Rpb25hbExpZ2h0IiwiRGlyZWN0aW9uYWxMaWdodCIsInJlbmRlclNjZW5lIiwiYmxvb21QYXNzIiwidGhyZXNob2xkIiwic3RyZW5ndGgiLCJyYWRpdXMiLCJjb21wb3NlciIsImFkZFBhc3MiLCJvbldpbmRvd1Jlc2l6ZSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJhZGRFdmVudExpc3RlbmVyIiwiZGV2aWNlT3JpZW50YXRpb25Db250cm9scyIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZGVsdGEiLCJnZXREZWx0YSIsInVwZGF0ZSIsInJlbmRlciIsImV2ZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJ6b29tIiwiZGlyZWN0aW9uIiwiZGVsdGFZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/app.js\n"));

/***/ })

});