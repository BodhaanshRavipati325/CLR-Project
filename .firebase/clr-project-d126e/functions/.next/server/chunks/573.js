exports.id = 573;
exports.ids = [573];
exports.modules = {

/***/ 47883:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23))

/***/ }),

/***/ 83657:
/***/ (() => {



/***/ }),

/***/ 59202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ GridData)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/system/Box/index.js
var Box = __webpack_require__(60100);
// EXTERNAL MODULE: ./node_modules/@mui/system/Unstable_Grid/index.js
var Unstable_Grid = __webpack_require__(58535);
var Unstable_Grid_default = /*#__PURE__*/__webpack_require__.n(Unstable_Grid);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(17421);
;// CONCATENATED MODULE: ./src/app/components/ItemData.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


function ItemData(props, name) {
    const list = props.props.map((data)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            style: {
                borderRadius: "20px",
                borderStyle: "double",
                borderWidth: "0px",
                backgroundColor: data.color
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(node.ListItem, {
                    sx: {
                        display: "flex",
                        alignItems: "center",
                        height: "8vh",
                        gap: "10px"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        id: "key",
                        children: data.name
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(node.Divider, {})
            ]
        }, data.name));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.List, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(node.ListItem, {
                sx: {
                    display: "flex",
                    alignItems: "center",
                    height: "7vh"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(node.Divider, {}),
            list
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/system/styled.js
var styled = __webpack_require__(61793);
;// CONCATENATED MODULE: ./src/app/components/Item.js
/* __next_internal_client_entry_do_not_use__ default auto */ 
const Item = (0,styled["default"])("div")(()=>({
        // padding: "10vw",
        borderRadius: "2vw",
        // textAlign: "center",
        aspectRatio: "1/1.25",
        backgroundColor: "white"
    }));
/* harmony default export */ const components_Item = (Item);

;// CONCATENATED MODULE: ./src/app/components/GridData.js
/* __next_internal_client_entry_do_not_use__ default auto */ 







function GridData(props) {
    const list = props.userData.achievements.map((data)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid_default()), {
                xs: 4,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_Item, {
                    sx: {
                        backgroundColor: "white"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            id: "dataKey",
                            children: data.name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ItemData, {
                            props: data.data
                        })
                    ]
                })
            }, data.name)
        }));
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Box["default"], {
            sx: {
                width: "75%",
                position: "absolute",
                marginTop: "40vh",
                marginLeft: "12vw"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx((Unstable_Grid_default()), {
                container: true,
                rowSpacing: 1,
                columnSpacing: {
                    xs: 1,
                    sm: 2,
                    md: 3
                },
                children: list
            })
        })
    });
}


/***/ }),

/***/ 60088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ readUserData),
/* harmony export */   z: () => (/* binding */ writeUserData)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72856);
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78264);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79512);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDdGwXJLvwKvMYfJwIn4NNlqhXYzJSa9SE",
    authDomain: "clr-project-d126e.firebaseapp.com",
    projectId: "clr-project-d126e",
    storageBucket: "clr-project-d126e.appspot.com",
    messagingSenderId: "795885607945",
    appId: "1:795885607945:web:ebd3d5662fffcf3097acd8",
    measurementId: "G-KRZ038HLWT",
    databaseURL: "https://clr-project-d126e-default-rtdb.firebaseio.com"
};
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__/* .initializeApp */ .ZF)(firebaseConfig);
const analytics = (0,firebase_analytics__WEBPACK_IMPORTED_MODULE_1__/* .isSupported */ .Gb)().then((yes)=>yes ? (0,firebase_analytics__WEBPACK_IMPORTED_MODULE_1__/* .getAnalytics */ .IH)(app) : null);
const db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__/* .getDatabase */ .N8)(app);
async function writeUserData(userId, data) {
    (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__/* .set */ .t8)((0,firebase_database__WEBPACK_IMPORTED_MODULE_2__/* .ref */ .iH)(db, "users/" + userId), data);
}
async function readUserData(userId) {
    const userDataRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__/* .ref */ .iH)(db, "users/" + userId);
    let userDataJSON = {};
    (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__/* .onValue */ .jM)(userDataRef, (snapshot)=>{
        const data = snapshot.val();
        userDataJSON = data;
    });
    return userDataJSON;
}



/***/ }),

/***/ 82911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67647);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85332);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);



const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            className: (next_font_google_target_css_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default().className),
            children: children
        })
    });
}


/***/ }),

/***/ 73881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 85332:
/***/ (() => {



/***/ }),

/***/ 29210:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"user":"","achievements":[{"name":"","data":[{}]}]}');

/***/ })

};
;