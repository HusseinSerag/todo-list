/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/DOM_Manipulator.js":
/*!****************************************!*\
  !*** ./src/scripts/DOM_Manipulator.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToDoPopUp: () => (/* binding */ addToDoPopUp),
/* harmony export */   addToTheSidebar: () => (/* binding */ addToTheSidebar),
/* harmony export */   createNewProjectInSidebar: () => (/* binding */ createNewProjectInSidebar),
/* harmony export */   createProjectContainer: () => (/* binding */ createProjectContainer),
/* harmony export */   createToDoItem: () => (/* binding */ createToDoItem),
/* harmony export */   infoPopUp: () => (/* binding */ infoPopUp)
/* harmony export */ });
function createProjectContainer() {
  let project = document.createElement('div');
  let projectName = document.createElement('h1');
  let toDoContainer = document.createElement('div');
  toDoContainer.classList.add('todoContainer');
  project.classList.add('project');
  project.appendChild(projectName);
  project.appendChild(toDoContainer);
  return project;
}
function addToTheSidebar() {
  let sidebar = document.createElement('div');
  sidebar.classList.add('sidebar-item');
  let span = document.createElement('span');
  span.classList.add('item-name');
  let img = document.createElement('img');
  img.classList.add('delete');
  sidebar.appendChild(span);
  sidebar.appendChild(img);
  return sidebar;
}
function createNewProjectInSidebar() {
  let div = document.createElement('div');
  let input = document.createElement('input');
  let confirm = document.createElement('button');
  let cancel = document.createElement('button');
  div.classList.add('confirm-new-project');
  input.classList.add('input-project-name');
  confirm.classList.add('confirm');
  cancel.classList.add('cancel');
  confirm.textContent = 'confirm';
  cancel.textContent = 'cancel';
  div.appendChild(input);
  div.appendChild(confirm);
  div.appendChild(cancel);
  return div;
}
function createToDoItem() {
  let div = document.createElement('div');
  div.classList.add('todo-item');
  let nameSpan = document.createElement('span');
  nameSpan.classList.add('item-name-todo');
  let info = document.createElement('img');
  info.classList.add('more-info');
  let edit = document.createElement('img');
  edit.classList.add('edit');
  let deleteDiv = document.createElement('img');
  deleteDiv.classList.add('delete');
  div.appendChild(nameSpan);
  div.appendChild(info);
  div.appendChild(edit);
  div.appendChild(deleteDiv);
  return div;
}
function addToDoPopUp() {
  let mainDiv = document.createElement('div');
  let title = document.createElement('h1');
  let img = document.createElement('img');
  let add = document.createElement('button');
  add.textContent = 'Add';
  title.textContent = 'Let\'s do this!';
  mainDiv.appendChild(title);
  mainDiv.appendChild(img);
  img.classList.add('close-box');
  mainDiv.appendChild(createLabelWithInput('Title', 'title', 'text'));
  mainDiv.appendChild(createLabelWithInput('Description', 'description', 'textarea'));
  mainDiv.appendChild(add);
  return mainDiv;
}
function infoPopUp() {
  let mainDiv = document.createElement('div');
  mainDiv.appendChild(createInfoLabel('Title'));
  mainDiv.appendChild(createInfoLabel('Description'));
  let img = document.createElement('img');
  mainDiv.appendChild(img);
  img.classList.add('close-box');
  return mainDiv;
}
function createInfoLabel(name) {
  let mainDiv = document.createElement('div');
  mainDiv.classList.add('info-item');
  let title = document.createElement('span');
  title.className = `key-${name}`;
  let valueDiv = document.createElement('span');
  valueDiv.className = `value-${name}`;
  mainDiv.appendChild(title);
  mainDiv.appendChild(valueDiv);
  return mainDiv;
}
function createLabelWithInput(labelContent, id, type) {
  let div = document.createElement('div');
  let label = document.createElement('label');
  let input;
  if (type == 'textarea') {
    input = document.createElement('textarea');
    input.setAttribute('contenteditable', 'true');
    input.setAttribute('maxlength', 300);
  } else {
    input = document.createElement('input');
    input.setAttribute('maxlength', 50);
  }
  label.textContent = labelContent + ": ";
  label.setAttribute('for', id);
  input.setAttribute('id', id);
  div.classList.add('input-item');
  div.appendChild(label);
  div.appendChild(input);
  return div;
}

/***/ }),

/***/ "./src/scripts/projects.js":
/*!*********************************!*\
  !*** ./src/scripts/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject)
/* harmony export */ });
const Getter = {
  getName: function () {
    return this.projectName;
  }
};
const Setter = {
  setName: function (newName) {
    if (newName.length < 1) {
      return 1;
    } else {
      this.projectName = newName;
    }
  }
};
const getList = {
  getAllToDo: function () {
    return this.toDoList;
  }
};
const addToList = {
  addAToDo: function (toDo) {
    this.toDoList.push(toDo);
  }
};
const remover = {
  removeAToDo: function (toDo) {
    let index = this.getAllToDo().indexOf(toDo);
    this.getAllToDo().splice(index, 1);
  }
};
function createProject(name) {
  let state = {
    projectName: name,
    toDoList: []
  };
  return Object.assign(state, Getter, Setter, getList, addToList, remover);
}

/***/ }),

/***/ "./src/scripts/toDo.js":
/*!*****************************!*\
  !*** ./src/scripts/toDo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createATodo: () => (/* binding */ createATodo)
/* harmony export */ });
const getter = {
  getTitle: function () {
    return this.title;
  },
  getDescription: function () {
    return this.description;
  },
  getDueDate: function () {
    return this.dueDate;
  },
  getPriority: function () {
    return this.priority;
  },
  getCompleted: function () {
    return this.completed;
  }
};
const setter = {
  setTitle: function (newTitle) {
    this.title = newTitle;
  },
  setDescription: function (newDescription) {
    this.description = newDescription;
  },
  setDueDate: function (newDueDate) {
    this.dueDate = newDueDate;
  },
  setPriority: function (newPriority) {
    this.priority = newPriority;
  },
  setCompleted: function (newCompleted) {
    this.completed = newCompleted;
  }
};
function createATodo(title, description, dueDate, priority) {
  let completed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  let state = {
    title,
    description,
    dueDate,
    priority,
    completed
  };
  return Object.assign(state, getter, setter);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/AoboshiOne-Regular.ttf */ "./src/fonts/AoboshiOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

@font-face {
    font-family: aoboshi;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
body{
    background: rgb(34,34,34);
    background: linear-gradient(90deg, rgba(34,34,34,1) 25%, rgba(0,0,0,1) 98%);

}
h1.main-title{
    font-family:aoboshi ;
    text-transform:uppercase;
    color:white;
    font-size: clamp(24px,1.4rem + 1vw,36px);
    padding:min(1rem , 0.6rem + 1vw)
}
#content.content{
    margin: 0 auto;
    
    width:100%;
    
    min-height: 250px;
    min-width: 250px;
    
    background-color: white;
    display: grid;
    grid-template-columns:1fr 5fr ;
    
    
}
.main{
    margin: 0 auto;
}
.title{
    font-family: aoboshi;
}
.sidebar{
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-family: aoboshi;
    gap:5px;
    padding-left:1rem;
    padding-right:15px;
    background-color: #d3d3d3;
    
    
}
.sidebar-item{
    display: flex;
    align-items: center;
    


}
.input-item{
    display: flex;
    flex-flow:column nowrap;
}
.input-item > input{
    height: 1.6rem;
    border:none;
    border-bottom: 1px solid grey;
    font-size: 1.3rem;
}
.input-item > label{
    font-size: min(1.3rem , 12px + 1vw);
    font-family: aoboshi;
}
.item-name:hover , .delete:hover{
    transform: scale(1.1);
}
.item-name{
    flex:1;
}
.delete , .more-info , .edit{
    width:30px;
}
.more-info:hover , .edit:hover{
    transform: scale(1.1);
}

button.add{
    font-family: aoboshi;
     background-color: #d3d3d3;
    border: none;
    width:50%;
    margin:0 auto;
    
}
button.add:hover{
    transform: scale(1.1);
}
.confirm-new-project{
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
}
.confirm-new-project .input-project-name{
    grid-column: 1/-1;
}

button{
    border:none;
    font-family: aoboshi;
    background-color: #d3d3d3;
}

.confirm{
    color:green;
}
.cancel{
    color:red;
}
.project{
    font-family: aoboshi;
}

.main{
    width: 100%;
    padding:1rem
}

.add-to-do-popup,.info-popup{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    z-index: 1;
    width:40%;
    height: 50%;
    padding:15px;
    display: flex;
    flex-direction: column;
    gap:10px;
    position: relative;
}

.close-box{
    position: absolute;
    width:25px;
    top:10px;
    right:10px;
}
.cover{
    width:100vw;
    height: 100vh;
    position: absolute;
    top:0;
    left:0;
    background-color: rgba(0,0,0,0.5);

}
.visible{
    visibility: visible;
}
.hidden{
    visibility: hidden;
}

textarea{
    resize:none;
    height: 10ch;
    border:none;
    font-size: 1rem;
    border-bottom: 1px solid grey;

}

.add-to-do{
    background-color: white;

}
.todo-item{
    display: flex;

}
.todo-item > *:hover{
    transform:scale(1.1)
}
.todo-item :nth-child(2){
    margin-left: auto;
}

.finished{
    text-decoration: line-through 2px;
}
.finished-div{
    opacity: 0.5;
}

.edit-btn.btn{
color:#8B8000;
background-color: white;
}

.info-popup{
    display: flex;
}
.info-item [class^=key]{
    font-size: 1.3rem;
    font-family: aoboshi;
}
.info-item [class^=value]{
    font-size: 1.2rem;
    font-family: aoboshi;
}
.high{
    border-left:1px red solid
}
.medium{
    border-left: #8B8000 1px solid;
}
.low{
    border-left: darkgreen 1px solid;
}`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,oBAAoB;IACpB,4CAA2C;AAC/C;AACA;IACI,yBAAyB;IACzB,2EAA2E;;AAE/E;AACA;IACI,oBAAoB;IACpB,wBAAwB;IACxB,WAAW;IACX,wCAAwC;IACxC;AACJ;AACA;IACI,cAAc;;IAEd,UAAU;;IAEV,iBAAiB;IACjB,gBAAgB;;IAEhB,uBAAuB;IACvB,aAAa;IACb,8BAA8B;;;AAGlC;AACA;IACI,cAAc;AAClB;AACA;IACI,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,oBAAoB;IACpB,OAAO;IACP,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;;;AAG7B;AACA;IACI,aAAa;IACb,mBAAmB;;;;AAIvB;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,cAAc;IACd,WAAW;IACX,6BAA6B;IAC7B,iBAAiB;AACrB;AACA;IACI,mCAAmC;IACnC,oBAAoB;AACxB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,MAAM;AACV;AACA;IACI,UAAU;AACd;AACA;IACI,qBAAqB;AACzB;;AAEA;IACI,oBAAoB;KACnB,yBAAyB;IAC1B,YAAY;IACZ,SAAS;IACT,aAAa;;AAEjB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,gCAAgC;AACpC;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,oBAAoB;IACpB,yBAAyB;AAC7B;;AAEA;IACI,WAAW;AACf;AACA;IACI,SAAS;AACb;AACA;IACI,oBAAoB;AACxB;;AAEA;IACI,WAAW;IACX;AACJ;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,uBAAuB;IACvB,UAAU;IACV,SAAS;IACT,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,QAAQ;IACR,UAAU;AACd;AACA;IACI,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,KAAK;IACL,MAAM;IACN,iCAAiC;;AAErC;AACA;IACI,mBAAmB;AACvB;AACA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,WAAW;IACX,eAAe;IACf,6BAA6B;;AAEjC;;AAEA;IACI,uBAAuB;;AAE3B;AACA;IACI,aAAa;;AAEjB;AACA;IACI;AACJ;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,iCAAiC;AACrC;AACA;IACI,YAAY;AAChB;;AAEA;AACA,aAAa;AACb,uBAAuB;AACvB;;AAEA;IACI,aAAa;AACjB;AACA;IACI,iBAAiB;IACjB,oBAAoB;AACxB;AACA;IACI,iBAAiB;IACjB,oBAAoB;AACxB;AACA;IACI;AACJ;AACA;IACI,8BAA8B;AAClC;AACA;IACI,gCAAgC;AACpC","sourcesContent":["*{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n@font-face {\n    font-family: aoboshi;\n    src: url('../fonts/AoboshiOne-Regular.ttf');\n}\nbody{\n    background: rgb(34,34,34);\n    background: linear-gradient(90deg, rgba(34,34,34,1) 25%, rgba(0,0,0,1) 98%);\n\n}\nh1.main-title{\n    font-family:aoboshi ;\n    text-transform:uppercase;\n    color:white;\n    font-size: clamp(24px,1.4rem + 1vw,36px);\n    padding:min(1rem , 0.6rem + 1vw)\n}\n#content.content{\n    margin: 0 auto;\n    \n    width:100%;\n    \n    min-height: 250px;\n    min-width: 250px;\n    \n    background-color: white;\n    display: grid;\n    grid-template-columns:1fr 5fr ;\n    \n    \n}\n.main{\n    margin: 0 auto;\n}\n.title{\n    font-family: aoboshi;\n}\n.sidebar{\n    display: flex;\n    flex-direction: column;\n    font-size: 16px;\n    font-family: aoboshi;\n    gap:5px;\n    padding-left:1rem;\n    padding-right:15px;\n    background-color: #d3d3d3;\n    \n    \n}\n.sidebar-item{\n    display: flex;\n    align-items: center;\n    \n\n\n}\n.input-item{\n    display: flex;\n    flex-flow:column nowrap;\n}\n.input-item > input{\n    height: 1.6rem;\n    border:none;\n    border-bottom: 1px solid grey;\n    font-size: 1.3rem;\n}\n.input-item > label{\n    font-size: min(1.3rem , 12px + 1vw);\n    font-family: aoboshi;\n}\n.item-name:hover , .delete:hover{\n    transform: scale(1.1);\n}\n.item-name{\n    flex:1;\n}\n.delete , .more-info , .edit{\n    width:30px;\n}\n.more-info:hover , .edit:hover{\n    transform: scale(1.1);\n}\n\nbutton.add{\n    font-family: aoboshi;\n     background-color: #d3d3d3;\n    border: none;\n    width:50%;\n    margin:0 auto;\n    \n}\nbutton.add:hover{\n    transform: scale(1.1);\n}\n.confirm-new-project{\n    display: grid;\n    grid-template: 1fr 1fr / 1fr 1fr;\n}\n.confirm-new-project .input-project-name{\n    grid-column: 1/-1;\n}\n\nbutton{\n    border:none;\n    font-family: aoboshi;\n    background-color: #d3d3d3;\n}\n\n.confirm{\n    color:green;\n}\n.cancel{\n    color:red;\n}\n.project{\n    font-family: aoboshi;\n}\n\n.main{\n    width: 100%;\n    padding:1rem\n}\n\n.add-to-do-popup,.info-popup{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    z-index: 1;\n    width:40%;\n    height: 50%;\n    padding:15px;\n    display: flex;\n    flex-direction: column;\n    gap:10px;\n    position: relative;\n}\n\n.close-box{\n    position: absolute;\n    width:25px;\n    top:10px;\n    right:10px;\n}\n.cover{\n    width:100vw;\n    height: 100vh;\n    position: absolute;\n    top:0;\n    left:0;\n    background-color: rgba(0,0,0,0.5);\n\n}\n.visible{\n    visibility: visible;\n}\n.hidden{\n    visibility: hidden;\n}\n\ntextarea{\n    resize:none;\n    height: 10ch;\n    border:none;\n    font-size: 1rem;\n    border-bottom: 1px solid grey;\n\n}\n\n.add-to-do{\n    background-color: white;\n\n}\n.todo-item{\n    display: flex;\n\n}\n.todo-item > *:hover{\n    transform:scale(1.1)\n}\n.todo-item :nth-child(2){\n    margin-left: auto;\n}\n\n.finished{\n    text-decoration: line-through 2px;\n}\n.finished-div{\n    opacity: 0.5;\n}\n\n.edit-btn.btn{\ncolor:#8B8000;\nbackground-color: white;\n}\n\n.info-popup{\n    display: flex;\n}\n.info-item [class^=key]{\n    font-size: 1.3rem;\n    font-family: aoboshi;\n}\n.info-item [class^=value]{\n    font-size: 1.2rem;\n    font-family: aoboshi;\n}\n.high{\n    border-left:1px red solid\n}\n.medium{\n    border-left: #8B8000 1px solid;\n}\n.low{\n    border-left: darkgreen 1px solid;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/AoboshiOne-Regular.ttf":
/*!******************************************!*\
  !*** ./src/fonts/AoboshiOne-Regular.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7721efdd17f9cd8ced01.ttf";

/***/ }),

/***/ "./src/photos/close-box.png":
/*!**********************************!*\
  !*** ./src/photos/close-box.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "42933521ea999cf33b2f.png";

/***/ }),

/***/ "./src/photos/delete-circle.png":
/*!**************************************!*\
  !*** ./src/photos/delete-circle.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8234bcdd4e405bc12a80.png";

/***/ }),

/***/ "./src/photos/information-box-outline.png":
/*!************************************************!*\
  !*** ./src/photos/information-box-outline.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8653b2323e070bd5b2a2.png";

/***/ }),

/***/ "./src/photos/pencil.png":
/*!*******************************!*\
  !*** ./src/photos/pencil.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ef5322c76bef5f811ad.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDo */ "./src/scripts/toDo.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/scripts/projects.js");
/* harmony import */ var _DOM_Manipulator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM_Manipulator */ "./src/scripts/DOM_Manipulator.js");
/* harmony import */ var _photos_delete_circle_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../photos/delete-circle.png */ "./src/photos/delete-circle.png");
/* harmony import */ var _photos_close_box_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../photos/close-box.png */ "./src/photos/close-box.png");
/* harmony import */ var _photos_pencil_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../photos/pencil.png */ "./src/photos/pencil.png");
/* harmony import */ var _photos_information_box_outline_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../photos/information-box-outline.png */ "./src/photos/information-box-outline.png");








const contentContainer = document.querySelector('#content.content');
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('.main');
const newProjectbtn = document.querySelector('button.add');
let projects = [];
function loadDefault() {
  let cont = createAProject('University');
  const todoContainer = cont.querySelector('.todoContainer');
  const addToDo = todoContainer.querySelector('.add-a-todo');
  toDoItemFunctionality(projects[0], todoContainer, addToDo, _toDo__WEBPACK_IMPORTED_MODULE_1__.createATodo('Hassan', 'Call my brother hasoona', '', 'high'));
  console.log(todoContainer);
}
newProjectbtn.addEventListener('click', () => {
  let inputDiv = _DOM_Manipulator__WEBPACK_IMPORTED_MODULE_3__.createNewProjectInSidebar();
  sidebar.removeChild(newProjectbtn);
  sidebar.appendChild(inputDiv);
  let confirm = inputDiv.querySelector('.confirm');
  let cancel = inputDiv.querySelector('.cancel');
  let inputValue = inputDiv.querySelector('.input-project-name');
  cancel.addEventListener('click', () => {
    sidebar.removeChild(inputDiv);
    sidebar.appendChild(newProjectbtn);
  });
  confirm.addEventListener('click', () => {
    let newName = inputValue.value;
    createAProject(newName);
    sidebar.removeChild(inputDiv);
    sidebar.appendChild(newProjectbtn);
  });
});
function createAProject(name) {
  let project = _projects__WEBPACK_IMPORTED_MODULE_2__.createProject(name);
  projects.push(project);
  let projectContainer = _DOM_Manipulator__WEBPACK_IMPORTED_MODULE_3__.createProjectContainer();
  projectContainerFunctionality(projectContainer, project);
  let sideBarItem = _DOM_Manipulator__WEBPACK_IMPORTED_MODULE_3__.addToTheSidebar();
  sideBarFunctionality(sideBarItem, project, projectContainer);
  return projectContainer;
}
function sideBarFunctionality(sideBarItem, project, projectContainer) {
  let nameSpan = sideBarItem.querySelector('.item-name');
  let img = sideBarItem.querySelector('.delete');
  nameSpan.textContent = project.getName();
  img.src = _photos_delete_circle_png__WEBPACK_IMPORTED_MODULE_4__;
  if (sidebar.contains(newProjectbtn)) sidebar.insertBefore(sideBarItem, newProjectbtn);else {
    sidebar.appendChild(sideBarItem);
  }
  nameSpan.addEventListener('click', () => {
    Array.from(main.children).forEach(child => {
      main.removeChild(child);
    });
    main.appendChild(projectContainer);
  });
  img.addEventListener('click', () => {
    let index = projects.indexOf(project);
    projects.splice(index, 1);
    sidebar.removeChild(sideBarItem);
    if (main.hasChildNodes()) main.removeChild(projectContainer);
  });
}
function projectContainerFunctionality(projectContainer, project) {
  let title = projectContainer.querySelector('h1');
  title.textContent = project.getName();
  let todoContainer = projectContainer.querySelector('.todoContainer');
  let addToDo = document.createElement('button');
  addToDo.classList.add('add-a-todo');
  addToDo.textContent = "Let's do that!";
  todoContainer.appendChild(addToDo);
  addToDo.addEventListener('click', () => {
    let mainDiv = _DOM_Manipulator__WEBPACK_IMPORTED_MODULE_3__.addToDoPopUp();
    mainDiv.classList.add('add-to-do-popup');
    let cover = document.createElement('div');
    cover.classList.add('cover');
    document.body.appendChild(mainDiv);
    document.body.appendChild(cover);
    handleMainDiv(mainDiv, cover, project, addToDo, todoContainer);
    cover.addEventListener('click', () => {
      document.body.removeChild(cover);
      document.body.removeChild(mainDiv);
    });
  });
  return projectContainer;
}
function toDoItemFunctionality(project, toDoContainer, addAToDo, todo) {
  console.log(toDoContainer);
  project.addAToDo(todo);
  let toDoItem = _DOM_Manipulator__WEBPACK_IMPORTED_MODULE_3__.createToDoItem();
  let name = toDoItem.querySelector('.item-name-todo');
  let deleteDiv = toDoItem.querySelector('.delete');
  deleteDiv.src = _photos_delete_circle_png__WEBPACK_IMPORTED_MODULE_4__;
  let edit = toDoItem.querySelector('.edit');
  edit.src = _photos_pencil_png__WEBPACK_IMPORTED_MODULE_6__;
  let info = toDoItem.querySelector('.more-info');
  info.src = _photos_information_box_outline_png__WEBPACK_IMPORTED_MODULE_7__;
  name.textContent = todo.getTitle();
  toDoContainer.insertBefore(toDoItem, addAToDo);

  //TODO edit to open and edit the item
  edit.addEventListener('click', () => {
    let mainDiv = _DOM_Manipulator__WEBPACK_IMPORTED_MODULE_3__.addToDoPopUp();
    mainDiv.classList.add('add-to-do-popup');
    let cover = document.createElement('div');
    cover.classList.add('cover');
    document.body.appendChild(mainDiv);
    document.body.appendChild(cover);
    handleEditDiv(todo, mainDiv, cover, toDoItem);
    cover.addEventListener('click', () => {
      document.body.removeChild(cover);
      document.body.removeChild(mainDiv);
    });
  });

  //TODO to only display info in an easy fashion we have the todo items so it is really straightforward
  info.addEventListener('click', () => {
    let mainDiv = _DOM_Manipulator__WEBPACK_IMPORTED_MODULE_3__.infoPopUp();
    mainDiv.classList.add('info-popup');
    let cover = document.createElement('div');
    cover.classList.add('cover');
    document.body.appendChild(mainDiv);
    document.body.appendChild(cover);
    handleInfoDiv(todo, mainDiv, cover);
    cover.addEventListener('click', () => {
      document.body.removeChild(cover);
      document.body.removeChild(mainDiv);
    });
  });
  deleteDiv.addEventListener('click', () => {
    project.removeAToDo(todo);
    toDoContainer.removeChild(toDoItem);
  });
  name.addEventListener('click', () => {
    name.classList.toggle('finished');
    toDoItem.classList.toggle('finished-div');
    if (todo.getCompleted == 0) todo.setCompleted(1);else {
      todo.setCompleted(0);
    }
  });
}
function handleMainDiv(mainDiv, cover, project, addAToDo, toDoContainer) {
  let title = mainDiv.querySelector('h1');
  let inputTitle = mainDiv.querySelector('#title');
  let description = mainDiv.querySelector('#description');
  title.classList.add('title');
  let closeImg = mainDiv.querySelector('img');
  closeImg.src = _photos_close_box_png__WEBPACK_IMPORTED_MODULE_5__;
  closeImg.addEventListener('click', () => {
    document.body.removeChild(cover);
    document.body.removeChild(mainDiv);
  });
  let button = mainDiv.querySelector('button');
  button.classList.add('confirm');
  button.classList.add('add-to-do');
  button.addEventListener('click', () => {
    let todo = _toDo__WEBPACK_IMPORTED_MODULE_1__.createATodo(inputTitle.value, description.value, '1/10/2023', 'high');
    document.body.removeChild(cover);
    document.body.removeChild(mainDiv);
    toDoItemFunctionality(project, toDoContainer, addAToDo, todo);
  });
}
function handleEditDiv(todo, mainDiv, cover, toDoItem) {
  let title = mainDiv.querySelector('h1');
  title.textContent = 'Setting new goals!';
  title.classList.add('title');
  let titleInput = mainDiv.querySelector('input#title');
  titleInput.value = todo.getTitle();
  let descriptionInput = mainDiv.querySelector('textarea');
  descriptionInput.value = todo.getDescription();
  let closeImg = mainDiv.querySelector('img');
  closeImg.src = _photos_close_box_png__WEBPACK_IMPORTED_MODULE_5__;
  closeImg.addEventListener('click', () => {
    document.body.removeChild(cover);
    document.body.removeChild(mainDiv);
  });
  let editedName = toDoItem.querySelector('.item-name-todo');
  let editButton = mainDiv.querySelector('button');
  editButton.textContent = 'Edit';
  editButton.className = 'edit-btn btn';
  editButton.addEventListener('click', () => {
    todo.setTitle(titleInput.value);
    todo.setDescription(descriptionInput.value);
    document.body.removeChild(cover);
    document.body.removeChild(mainDiv);
    editedName.textContent = titleInput.value;
  });
}
function handleInfoDiv(todo, mainDiv, cover) {
  let closeImg = mainDiv.querySelector('img');
  closeImg.src = _photos_close_box_png__WEBPACK_IMPORTED_MODULE_5__;
  let container = mainDiv.querySelectorAll('.info-item');
  container.forEach(child => {
    let key = child.querySelector('[class^=key]');
    let value = child.querySelector('[class^=value]');
    let keyTitle = key.getAttribute('class').split('-')[1];
    key.textContent = `${keyTitle}: `;
    value.textContent = todo[`get${keyTitle}`]();
  });
  closeImg.addEventListener('click', () => {
    document.body.removeChild(cover);
    document.body.removeChild(mainDiv);
  });
}
loadDefault();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHdGQUF3RixZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGNBQWMsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLEtBQUssV0FBVyxXQUFXLFlBQVksY0FBYyxhQUFhLFdBQVcsY0FBYyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxlQUFlLE1BQU0sS0FBSyxVQUFVLGVBQWUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFB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LGFBQWEsQ0FBQyxjQUFjLENBQUM7SUFDN0MsSUFBSWdCLEtBQUssR0FBR1ksS0FBSyxDQUFDNUIsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0lBQ2pELElBQUlnRCxRQUFRLEdBQUdELEdBQUcsQ0FBQ0UsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXRESCxHQUFHLENBQUN4SCxXQUFXLEdBQUksR0FBRXlILFFBQVMsSUFBRztJQUVqQ2hDLEtBQUssQ0FBQ3pGLFdBQVcsR0FBRzBHLElBQUksQ0FBRSxNQUFLZSxRQUFTLEVBQUMsQ0FBQyxDQUFDLENBQUM7RUFFaEQsQ0FBQyxDQUFDO0VBQ0ZULFFBQVEsQ0FBQzNCLGdCQUFnQixDQUFDLE9BQU8sRUFBQyxNQUFJO0lBRWxDckcsUUFBUSxDQUFDd0gsSUFBSSxDQUFDakIsV0FBVyxDQUFDZ0IsS0FBSyxDQUFDO0lBQ2hDdkgsUUFBUSxDQUFDd0gsSUFBSSxDQUFDakIsV0FBVyxDQUFDaEYsT0FBTyxDQUFDO0VBQ3RDLENBQUMsQ0FBQztBQUVOO0FBRUFzRSxXQUFXLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvRE9NX01hbmlwdWxhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL3RvRG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDb250YWluZXIoKXtcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIGxldCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBcbiAgICB0b0RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9Db250YWluZXInKVxuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpXG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSlcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHRvRG9Db250YWluZXIpXG4gICAgXG4gICAgcmV0dXJuIHByb2plY3Rcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb1RoZVNpZGViYXIoKXtcbiAgICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWl0ZW0nKTtcblxuICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdpdGVtLW5hbWUnKVxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKVxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoc3BhbilcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGltZylcbiAgICByZXR1cm4gc2lkZWJhclxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdEluU2lkZWJhcigpe1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBsZXQgY29uZmlybT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBsZXQgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY29uZmlybS1uZXctcHJvamVjdCcpXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXQtcHJvamVjdC1uYW1lJylcbiAgICBjb25maXJtLmNsYXNzTGlzdC5hZGQoJ2NvbmZpcm0nKVxuICAgIGNhbmNlbC5jbGFzc0xpc3QuYWRkKCdjYW5jZWwnKVxuXG4gICAgY29uZmlybS50ZXh0Q29udGVudCA9ICdjb25maXJtJ1xuICAgIGNhbmNlbC50ZXh0Q29udGVudCA9ICdjYW5jZWwnXG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgZGl2LmFwcGVuZENoaWxkKGNvbmZpcm0pXG4gICAgZGl2LmFwcGVuZENoaWxkKGNhbmNlbClcblxuICAgIHJldHVybiBkaXZcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvRG9JdGVtKCl7XG5sZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmRpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0nKVxubGV0IG5hbWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG5uYW1lU3Bhbi5jbGFzc0xpc3QuYWRkKCdpdGVtLW5hbWUtdG9kbycpXG5sZXQgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5pbmZvLmNsYXNzTGlzdC5hZGQoJ21vcmUtaW5mbycpXG5sZXQgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5lZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXQnKVxubGV0IGRlbGV0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5kZWxldGVEaXYuY2xhc3NMaXN0LmFkZCgnZGVsZXRlJylcblxuXG5cblxuZGl2LmFwcGVuZENoaWxkKG5hbWVTcGFuKVxuZGl2LmFwcGVuZENoaWxkKGluZm8pXG5kaXYuYXBwZW5kQ2hpbGQoZWRpdClcbmRpdi5hcHBlbmRDaGlsZChkZWxldGVEaXYpXG5cbnJldHVybiBkaXZcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9Eb1BvcFVwKCl7XG4gICBsZXQgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgIGxldCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgYWRkLnRleHRDb250ZW50ID0gJ0FkZCdcbiAgXG4gICB0aXRsZS50ZXh0Q29udGVudCA9ICdMZXRcXCdzIGRvIHRoaXMhJ1xuICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoaW1nKVxuICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLWJveCcpXG4gICBtYWluRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsV2l0aElucHV0KCdUaXRsZScgLCAndGl0bGUnLCd0ZXh0JykpXG4gICBtYWluRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsV2l0aElucHV0KCdEZXNjcmlwdGlvbicgLCAnZGVzY3JpcHRpb24nLCd0ZXh0YXJlYScpKVxuICAgbWFpbkRpdi5hcHBlbmRDaGlsZChhZGQpXG4gICBcbiAgIHJldHVybiBtYWluRGl2XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGluZm9Qb3BVcCgpe1xuICAgIGxldCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUluZm9MYWJlbCgnVGl0bGUnKSlcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUluZm9MYWJlbCgnRGVzY3JpcHRpb24nKSlcbiAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGltZylcbiAgIGltZy5jbGFzc0xpc3QuYWRkKCdjbG9zZS1ib3gnKVxuXG4gICAgcmV0dXJuIG1haW5EaXZcbiAgICBcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5mb0xhYmVsKG5hbWUpe1xuICAgIGxldCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoJ2luZm8taXRlbScpXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgdGl0bGUuY2xhc3NOYW1lID0gYGtleS0ke25hbWV9YFxuXG4gICAgbGV0IHZhbHVlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgdmFsdWVEaXYuY2xhc3NOYW1lID0gYHZhbHVlLSR7bmFtZX1gXG4gICAgXG5cbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQodmFsdWVEaXYpXG5cbiAgICByZXR1cm4gbWFpbkRpdlxuXG59XG5mdW5jdGlvbiBjcmVhdGVMYWJlbFdpdGhJbnB1dChsYWJlbENvbnRlbnQsaWQsdHlwZSl7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGV0IGxhYmVsID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGV0IGlucHV0O1xuICAgIGlmKHR5cGUgPT0gJ3RleHRhcmVhJyl7XG4gICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsJ3RydWUnKVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsMzAwKVxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsNTApXG4gICAgfVxuICAgXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbENvbnRlbnQrXCI6IFwiXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLGlkKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnICwgaWQpXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWl0ZW0nKVxuICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbClcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgcmV0dXJuIGRpdlxufSIsIlxuY29uc3QgR2V0dGVyPSB7XG4gICAgZ2V0TmFtZSA6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3ROYW1lXG4gICAgfVxufSBcbmNvbnN0IFNldHRlciA9IHtcbiAgICBzZXROYW1lIDogZnVuY3Rpb24obmV3TmFtZSl7XG4gICAgICAgIGlmKG5ld05hbWUubGVuZ3RoIDwgMSl7XG4gICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLnByb2plY3ROYW1lID0gbmV3TmFtZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBnZXRMaXN0ID0ge1xuICAgIGdldEFsbFRvRG86IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRvRG9MaXN0XG4gICAgfVxufVxuXG5jb25zdCBhZGRUb0xpc3QgPSB7XG4gICAgYWRkQVRvRG86ZnVuY3Rpb24odG9Ebyl7XG4gICAgICAgIHRoaXMudG9Eb0xpc3QucHVzaCh0b0RvKVxuICAgIH1cbn1cblxuY29uc3QgcmVtb3ZlciA9IHtcbiAgICByZW1vdmVBVG9EbzpmdW5jdGlvbih0b0RvKXtcbiAgICAgICAgbGV0IGluZGV4ID0gIHRoaXMuZ2V0QWxsVG9EbygpLmluZGV4T2YodG9EbylcbiAgICAgICAgdGhpcy5nZXRBbGxUb0RvKCkuc3BsaWNlKGluZGV4LDEpXG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSl7XG4gICAgbGV0IHN0YXRlID0ge1xuICAgICAgICBwcm9qZWN0TmFtZTpuYW1lLFxuICAgICAgICB0b0RvTGlzdDpbXVxuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihzdGF0ZSwgR2V0dGVyICwgU2V0dGVyICwgZ2V0TGlzdCAsIGFkZFRvTGlzdCxyZW1vdmVyKVxufSIsIlxuY29uc3QgZ2V0dGVyID0ge1xuICAgIGdldFRpdGxlOiBmdW5jdGlvbigpIHsgXG4gICAgICAgcmV0dXJuIHRoaXMudGl0bGVcbiAgICB9LFxuICAgIGdldERlc2NyaXB0aW9uOiBmdW5jdGlvbigpXG4gICAge1xuICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uXG4gICAgfSxcbiAgICBnZXREdWVEYXRlOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuZHVlRGF0ZX0sXG4gICAgZ2V0UHJpb3JpdHk6IGZ1bmN0aW9uKCkge3JldHVybiB0aGlzLnByaW9yaXR5fSxcbiAgICBnZXRDb21wbGV0ZWQ6ZnVuY3Rpb24oKSB7cmV0dXJuIHRoaXMuY29tcGxldGVkfVxufVxuY29uc3Qgc2V0dGVyID0ge1xuICAgIHNldFRpdGxlOiBmdW5jdGlvbihuZXdUaXRsZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZVxuICAgIH1cbiAgICAsc2V0RGVzY3JpcHRpb246ZnVuY3Rpb24obmV3RGVzY3JpcHRpb24pe1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb25cbiAgICB9LFxuICAgIHNldER1ZURhdGU6ZnVuY3Rpb24obmV3RHVlRGF0ZSl7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IG5ld0R1ZURhdGVcbiAgICB9LFxuICAgIHNldFByaW9yaXR5OiBmdW5jdGlvbihuZXdQcmlvcml0eSl7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvcml0eVxuICAgIH0sXG4gICAgc2V0Q29tcGxldGVkOmZ1bmN0aW9uKG5ld0NvbXBsZXRlZCl7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gbmV3Q29tcGxldGVkXG4gICAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBVG9kbyh0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LGNvbXBsZXRlZD0wKXtcbiAgICAgICAgXG4gICAgbGV0IHN0YXRlID0gIHt0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LGNvbXBsZXRlZH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHN0YXRlICwgZ2V0dGVyLHNldHRlcilcbn1cblxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0FvYm9zaGlPbmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IGFvYm9zaGk7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5ib2R5e1xuICAgIGJhY2tncm91bmQ6IHJnYigzNCwzNCwzNCk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDM0LDM0LDM0LDEpIDI1JSwgcmdiYSgwLDAsMCwxKSA5OCUpO1xuXG59XG5oMS5tYWluLXRpdGxle1xuICAgIGZvbnQtZmFtaWx5OmFvYm9zaGkgO1xuICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LXNpemU6IGNsYW1wKDI0cHgsMS40cmVtICsgMXZ3LDM2cHgpO1xuICAgIHBhZGRpbmc6bWluKDFyZW0gLCAwLjZyZW0gKyAxdncpXG59XG4jY29udGVudC5jb250ZW50e1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIFxuICAgIHdpZHRoOjEwMCU7XG4gICAgXG4gICAgbWluLWhlaWdodDogMjUwcHg7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgNWZyIDtcbiAgICBcbiAgICBcbn1cbi5tYWlue1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuLnRpdGxle1xuICAgIGZvbnQtZmFtaWx5OiBhb2Jvc2hpO1xufVxuLnNpZGViYXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LWZhbWlseTogYW9ib3NoaTtcbiAgICBnYXA6NXB4O1xuICAgIHBhZGRpbmctbGVmdDoxcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6MTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xuICAgIFxuICAgIFxufVxuLnNpZGViYXItaXRlbXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG5cblxufVxuLmlucHV0LWl0ZW17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6Y29sdW1uIG5vd3JhcDtcbn1cbi5pbnB1dC1pdGVtID4gaW5wdXR7XG4gICAgaGVpZ2h0OiAxLjZyZW07XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG4uaW5wdXQtaXRlbSA+IGxhYmVse1xuICAgIGZvbnQtc2l6ZTogbWluKDEuM3JlbSAsIDEycHggKyAxdncpO1xuICAgIGZvbnQtZmFtaWx5OiBhb2Jvc2hpO1xufVxuLml0ZW0tbmFtZTpob3ZlciAsIC5kZWxldGU6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLml0ZW0tbmFtZXtcbiAgICBmbGV4OjE7XG59XG4uZGVsZXRlICwgLm1vcmUtaW5mbyAsIC5lZGl0e1xuICAgIHdpZHRoOjMwcHg7XG59XG4ubW9yZS1pbmZvOmhvdmVyICwgLmVkaXQ6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG5idXR0b24uYWRke1xuICAgIGZvbnQtZmFtaWx5OiBhb2Jvc2hpO1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDo1MCU7XG4gICAgbWFyZ2luOjAgYXV0bztcbiAgICBcbn1cbmJ1dHRvbi5hZGQ6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLmNvbmZpcm0tbmV3LXByb2plY3R7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIC8gMWZyIDFmcjtcbn1cbi5jb25maXJtLW5ldy1wcm9qZWN0IC5pbnB1dC1wcm9qZWN0LW5hbWV7XG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XG59XG5cbmJ1dHRvbntcbiAgICBib3JkZXI6bm9uZTtcbiAgICBmb250LWZhbWlseTogYW9ib3NoaTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xufVxuXG4uY29uZmlybXtcbiAgICBjb2xvcjpncmVlbjtcbn1cbi5jYW5jZWx7XG4gICAgY29sb3I6cmVkO1xufVxuLnByb2plY3R7XG4gICAgZm9udC1mYW1pbHk6IGFvYm9zaGk7XG59XG5cbi5tYWlue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6MXJlbVxufVxuXG4uYWRkLXRvLWRvLXBvcHVwLC5pbmZvLXBvcHVwe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDo0MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgcGFkZGluZzoxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6MTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jbG9zZS1ib3h7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOjI1cHg7XG4gICAgdG9wOjEwcHg7XG4gICAgcmlnaHQ6MTBweDtcbn1cbi5jb3ZlcntcbiAgICB3aWR0aDoxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MDtcbiAgICBsZWZ0OjA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xuXG59XG4udmlzaWJsZXtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLmhpZGRlbntcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbnRleHRhcmVhe1xuICAgIHJlc2l6ZTpub25lO1xuICAgIGhlaWdodDogMTBjaDtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XG5cbn1cblxuLmFkZC10by1kb3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxufVxuLnRvZG8taXRlbXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG59XG4udG9kby1pdGVtID4gKjpob3ZlcntcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xKVxufVxuLnRvZG8taXRlbSA6bnRoLWNoaWxkKDIpe1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uZmluaXNoZWR7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2ggMnB4O1xufVxuLmZpbmlzaGVkLWRpdntcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi5lZGl0LWJ0bi5idG57XG5jb2xvcjojOEI4MDAwO1xuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5pbmZvLXBvcHVwe1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uaW5mby1pdGVtIFtjbGFzc149a2V5XXtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBmb250LWZhbWlseTogYW9ib3NoaTtcbn1cbi5pbmZvLWl0ZW0gW2NsYXNzXj12YWx1ZV17XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC1mYW1pbHk6IGFvYm9zaGk7XG59XG4uaGlnaHtcbiAgICBib3JkZXItbGVmdDoxcHggcmVkIHNvbGlkXG59XG4ubWVkaXVte1xuICAgIGJvcmRlci1sZWZ0OiAjOEI4MDAwIDFweCBzb2xpZDtcbn1cbi5sb3d7XG4gICAgYm9yZGVyLWxlZnQ6IGRhcmtncmVlbiAxcHggc29saWQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQiw0Q0FBMkM7QUFDL0M7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QiwyRUFBMkU7O0FBRS9FO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCx3Q0FBd0M7SUFDeEM7QUFDSjtBQUNBO0lBQ0ksY0FBYzs7SUFFZCxVQUFVOztJQUVWLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0lBRWhCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsOEJBQThCOzs7QUFHbEM7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLE9BQU87SUFDUCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5Qjs7O0FBRzdCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1COzs7O0FBSXZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLDZCQUE2QjtJQUM3QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksTUFBTTtBQUNWO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG9CQUFvQjtLQUNuQix5QkFBeUI7SUFDMUIsWUFBWTtJQUNaLFNBQVM7SUFDVCxhQUFhOztBQUVqQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtJQUNSLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsS0FBSztJQUNMLE1BQU07SUFDTixpQ0FBaUM7O0FBRXJDO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZiw2QkFBNkI7O0FBRWpDOztBQUVBO0lBQ0ksdUJBQXVCOztBQUUzQjtBQUNBO0lBQ0ksYUFBYTs7QUFFakI7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtBQUNBLGFBQWE7QUFDYix1QkFBdUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGdDQUFnQztBQUNwQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogYW9ib3NoaTtcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL0FvYm9zaGlPbmUtUmVndWxhci50dGYnKTtcXG59XFxuYm9keXtcXG4gICAgYmFja2dyb3VuZDogcmdiKDM0LDM0LDM0KTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDM0LDM0LDM0LDEpIDI1JSwgcmdiYSgwLDAsMCwxKSA5OCUpO1xcblxcbn1cXG5oMS5tYWluLXRpdGxle1xcbiAgICBmb250LWZhbWlseTphb2Jvc2hpIDtcXG4gICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgyNHB4LDEuNHJlbSArIDF2dywzNnB4KTtcXG4gICAgcGFkZGluZzptaW4oMXJlbSAsIDAuNnJlbSArIDF2dylcXG59XFxuI2NvbnRlbnQuY29udGVudHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIFxcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBcXG4gICAgbWluLWhlaWdodDogMjUwcHg7XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciA1ZnIgO1xcbiAgICBcXG4gICAgXFxufVxcbi5tYWlue1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuLnRpdGxle1xcbiAgICBmb250LWZhbWlseTogYW9ib3NoaTtcXG59XFxuLnNpZGViYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC1mYW1pbHk6IGFvYm9zaGk7XFxuICAgIGdhcDo1cHg7XFxuICAgIHBhZGRpbmctbGVmdDoxcmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OjE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XFxuICAgIFxcbiAgICBcXG59XFxuLnNpZGViYXItaXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxuXFxuXFxufVxcbi5pbnB1dC1pdGVte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6Y29sdW1uIG5vd3JhcDtcXG59XFxuLmlucHV0LWl0ZW0gPiBpbnB1dHtcXG4gICAgaGVpZ2h0OiAxLjZyZW07XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcbi5pbnB1dC1pdGVtID4gbGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogbWluKDEuM3JlbSAsIDEycHggKyAxdncpO1xcbiAgICBmb250LWZhbWlseTogYW9ib3NoaTtcXG59XFxuLml0ZW0tbmFtZTpob3ZlciAsIC5kZWxldGU6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLml0ZW0tbmFtZXtcXG4gICAgZmxleDoxO1xcbn1cXG4uZGVsZXRlICwgLm1vcmUtaW5mbyAsIC5lZGl0e1xcbiAgICB3aWR0aDozMHB4O1xcbn1cXG4ubW9yZS1pbmZvOmhvdmVyICwgLmVkaXQ6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuYnV0dG9uLmFkZHtcXG4gICAgZm9udC1mYW1pbHk6IGFvYm9zaGk7XFxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOjUwJTtcXG4gICAgbWFyZ2luOjAgYXV0bztcXG4gICAgXFxufVxcbmJ1dHRvbi5hZGQ6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLmNvbmZpcm0tbmV3LXByb2plY3R7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgLyAxZnIgMWZyO1xcbn1cXG4uY29uZmlybS1uZXctcHJvamVjdCAuaW5wdXQtcHJvamVjdC1uYW1le1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG59XFxuXFxuYnV0dG9ue1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IGFvYm9zaGk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XFxufVxcblxcbi5jb25maXJte1xcbiAgICBjb2xvcjpncmVlbjtcXG59XFxuLmNhbmNlbHtcXG4gICAgY29sb3I6cmVkO1xcbn1cXG4ucHJvamVjdHtcXG4gICAgZm9udC1mYW1pbHk6IGFvYm9zaGk7XFxufVxcblxcbi5tYWlue1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzoxcmVtXFxufVxcblxcbi5hZGQtdG8tZG8tcG9wdXAsLmluZm8tcG9wdXB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB3aWR0aDo0MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBwYWRkaW5nOjE1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDoxMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jbG9zZS1ib3h7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6MjVweDtcXG4gICAgdG9wOjEwcHg7XFxuICAgIHJpZ2h0OjEwcHg7XFxufVxcbi5jb3ZlcntcXG4gICAgd2lkdGg6MTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOjA7XFxuICAgIGxlZnQ6MDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xcblxcbn1cXG4udmlzaWJsZXtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuLmhpZGRlbntcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG50ZXh0YXJlYXtcXG4gICAgcmVzaXplOm5vbmU7XFxuICAgIGhlaWdodDogMTBjaDtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxuXFxufVxcblxcbi5hZGQtdG8tZG97XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcbn1cXG4udG9kby1pdGVte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbn1cXG4udG9kby1pdGVtID4gKjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMSlcXG59XFxuLnRvZG8taXRlbSA6bnRoLWNoaWxkKDIpe1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmZpbmlzaGVke1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCAycHg7XFxufVxcbi5maW5pc2hlZC1kaXZ7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLmVkaXQtYnRuLmJ0bntcXG5jb2xvcjojOEI4MDAwO1xcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaW5mby1wb3B1cHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLmluZm8taXRlbSBbY2xhc3NePWtleV17XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LWZhbWlseTogYW9ib3NoaTtcXG59XFxuLmluZm8taXRlbSBbY2xhc3NePXZhbHVlXXtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBhb2Jvc2hpO1xcbn1cXG4uaGlnaHtcXG4gICAgYm9yZGVyLWxlZnQ6MXB4IHJlZCBzb2xpZFxcbn1cXG4ubWVkaXVte1xcbiAgICBib3JkZXItbGVmdDogIzhCODAwMCAxcHggc29saWQ7XFxufVxcbi5sb3d7XFxuICAgIGJvcmRlci1sZWZ0OiBkYXJrZ3JlZW4gMXB4IHNvbGlkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL3N0eWxlcy9zdHlsZXMuY3NzJ1xuaW1wb3J0ICogYXMgdG9EbyBmcm9tICcuL3RvRG8nXG5pbXBvcnQgKiBhcyBQcm9qZWN0IGZyb20gJy4vcHJvamVjdHMnXG5pbXBvcnQgKiBhcyBET00gZnJvbSAnLi9ET01fTWFuaXB1bGF0b3InXG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICcuLi9waG90b3MvZGVsZXRlLWNpcmNsZS5wbmcnXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJy4uL3Bob3Rvcy9jbG9zZS1ib3gucG5nJ1xuaW1wb3J0IHBlbmNpbEljb24gZnJvbSAnLi4vcGhvdG9zL3BlbmNpbC5wbmcnXG5pbXBvcnQgaW5mb0ljb24gZnJvbSAnLi4vcGhvdG9zL2luZm9ybWF0aW9uLWJveC1vdXRsaW5lLnBuZydcbmNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudC5jb250ZW50Jyk7XG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKVxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcbmNvbnN0IG5ld1Byb2plY3RidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uYWRkJylcbmxldCBwcm9qZWN0cyA9IFtdXG5cblxuZnVuY3Rpb24gbG9hZERlZmF1bHQoKXtcbiAgIGxldCBjb250ID0gIGNyZWF0ZUFQcm9qZWN0KCdVbml2ZXJzaXR5Jyk7XG4gICBcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gY29udC5xdWVyeVNlbGVjdG9yKCcudG9kb0NvbnRhaW5lcicpXG4gICAgY29uc3QgYWRkVG9EbyA9IHRvZG9Db250YWluZXIucXVlcnlTZWxlY3RvcignLmFkZC1hLXRvZG8nKVxuICAgIFxuICAgIHRvRG9JdGVtRnVuY3Rpb25hbGl0eShwcm9qZWN0c1swXSx0b2RvQ29udGFpbmVyLGFkZFRvRG8sdG9Eby5jcmVhdGVBVG9kbygnSGFzc2FuJywnQ2FsbCBteSBicm90aGVyIGhhc29vbmEnLCcnLCdoaWdoJykpXG4gICAgY29uc29sZS5sb2codG9kb0NvbnRhaW5lcilcbiAgICBcbiAgICAgICBcbiAgICBcbn1cblxuXG5uZXdQcm9qZWN0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgbGV0IGlucHV0RGl2ID0gRE9NLmNyZWF0ZU5ld1Byb2plY3RJblNpZGViYXIoKTtcbiAgIFxuICAgc2lkZWJhci5yZW1vdmVDaGlsZChuZXdQcm9qZWN0YnRuKVxuICAgc2lkZWJhci5hcHBlbmRDaGlsZChpbnB1dERpdilcbiAgIGxldCBjb25maXJtID0gaW5wdXREaXYucXVlcnlTZWxlY3RvcignLmNvbmZpcm0nKVxuICAgbGV0IGNhbmNlbCA9IGlucHV0RGl2LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKVxuICAgbGV0IGlucHV0VmFsdWUgPSBpbnB1dERpdi5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtcHJvamVjdC1uYW1lJylcblxuICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIHNpZGViYXIucmVtb3ZlQ2hpbGQoaW5wdXREaXYpXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0YnRuKVxuICAgfSlcblxuICAgY29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcblxuICAgIGxldCBuZXdOYW1lID0gaW5wdXRWYWx1ZS52YWx1ZVxuICAgIGNyZWF0ZUFQcm9qZWN0KG5ld05hbWUpXG5cblxuXG5cbiAgICBzaWRlYmFyLnJlbW92ZUNoaWxkKGlucHV0RGl2KVxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdGJ0bilcbiAgIH0pXG4gIFxufSlcblxuXG5cblxuXG5mdW5jdGlvbiBjcmVhdGVBUHJvamVjdChuYW1lKXtcblxuICAgIGxldCBwcm9qZWN0ID0gUHJvamVjdC5jcmVhdGVQcm9qZWN0KG5hbWUpO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdClcblxuICAgIGxldCBwcm9qZWN0Q29udGFpbmVyID1ET00uY3JlYXRlUHJvamVjdENvbnRhaW5lcigpXG5cbiAgICAgcHJvamVjdENvbnRhaW5lckZ1bmN0aW9uYWxpdHkocHJvamVjdENvbnRhaW5lcixwcm9qZWN0KVxuICAgIGxldCBzaWRlQmFySXRlbSA9IERPTS5hZGRUb1RoZVNpZGViYXIoKVxuICAgICBzaWRlQmFyRnVuY3Rpb25hbGl0eShzaWRlQmFySXRlbSxwcm9qZWN0LHByb2plY3RDb250YWluZXIpXG4gICAgXG4gICAgcmV0dXJuIHByb2plY3RDb250YWluZXJcblxuXG59XG5cbmZ1bmN0aW9uIHNpZGVCYXJGdW5jdGlvbmFsaXR5KHNpZGVCYXJJdGVtLHByb2plY3QscHJvamVjdENvbnRhaW5lcil7XG5cbiAgICBsZXQgbmFtZVNwYW4gPSBzaWRlQmFySXRlbS5xdWVyeVNlbGVjdG9yKCcuaXRlbS1uYW1lJylcbiAgICBsZXQgaW1nID0gc2lkZUJhckl0ZW0ucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpXG4gICAgbmFtZVNwYW4udGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKVxuICAgIGltZy5zcmMgPSBkZWxldGVJY29uXG4gICAgaWYoc2lkZWJhci5jb250YWlucyhuZXdQcm9qZWN0YnRuKSlcbiAgICBzaWRlYmFyLmluc2VydEJlZm9yZShzaWRlQmFySXRlbSAsIG5ld1Byb2plY3RidG4pXG4gICAgZWxzZXtcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlQmFySXRlbSlcbiAgICB9XG4gICBcbiAgIG5hbWVTcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBBcnJheS5mcm9tKG1haW4uY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT57XG4gICAgICAgICAgICBtYWluLnJlbW92ZUNoaWxkKGNoaWxkKVxuICAgICAgICB9KVxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpXG4gICAgfSlcblxuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICBsZXQgaW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpXG4gICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LDEpXG4gICAgICAgc2lkZWJhci5yZW1vdmVDaGlsZChzaWRlQmFySXRlbSlcbiAgICAgICBpZihtYWluLmhhc0NoaWxkTm9kZXMoKSlcbiAgICAgICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQocHJvamVjdENvbnRhaW5lcilcbiAgICAgIFxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHByb2plY3RDb250YWluZXJGdW5jdGlvbmFsaXR5KHByb2plY3RDb250YWluZXIscHJvamVjdCl7XG4gICAgbGV0IHRpdGxlID0gcHJvamVjdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdoMScpXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKVxuICAgIGxldCB0b2RvQ29udGFpbmVyID0gcHJvamVjdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudG9kb0NvbnRhaW5lcicpXG5cbiAgICBsZXQgYWRkVG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYWRkVG9Eby5jbGFzc0xpc3QuYWRkKCdhZGQtYS10b2RvJylcbiAgICBhZGRUb0RvLnRleHRDb250ZW50ID0gXCJMZXQncyBkbyB0aGF0IVwiXG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUb0RvKVxuXG4gICAgYWRkVG9Eby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgbGV0IG1haW5EaXYgPSBET00uYWRkVG9Eb1BvcFVwKClcbiAgICAgICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKCdhZGQtdG8tZG8tcG9wdXAnKVxuICAgICAgICBsZXQgY292ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb3Zlci5jbGFzc0xpc3QuYWRkKCdjb3ZlcicpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkRpdilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb3ZlcilcbiAgICAgICAgaGFuZGxlTWFpbkRpdihtYWluRGl2LGNvdmVyLHByb2plY3QsYWRkVG9Ebyx0b2RvQ29udGFpbmVyKVxuICAgICAgICBjb3Zlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjb3ZlcilcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobWFpbkRpdilcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIFxuICAgIHJldHVybiBwcm9qZWN0Q29udGFpbmVyXG59XG5cbmZ1bmN0aW9uIHRvRG9JdGVtRnVuY3Rpb25hbGl0eShwcm9qZWN0LHRvRG9Db250YWluZXIsYWRkQVRvRG8sdG9kbyl7XG4gICAgY29uc29sZS5sb2codG9Eb0NvbnRhaW5lcilcbiAgICBwcm9qZWN0LmFkZEFUb0RvKHRvZG8pXG4gICAgXG4gICAgbGV0IHRvRG9JdGVtID0gRE9NLmNyZWF0ZVRvRG9JdGVtKClcbiAgICBsZXQgbmFtZSA9IHRvRG9JdGVtLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLW5hbWUtdG9kbycpXG5cbiAgICBsZXQgZGVsZXRlRGl2ID0gdG9Eb0l0ZW0ucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpXG4gICAgZGVsZXRlRGl2LnNyYyA9IGRlbGV0ZUljb25cbiAgICBsZXQgZWRpdCA9IHRvRG9JdGVtLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0JylcbiAgICBlZGl0LnNyYyA9IHBlbmNpbEljb25cbiAgICBsZXQgaW5mbyA9IHRvRG9JdGVtLnF1ZXJ5U2VsZWN0b3IoJy5tb3JlLWluZm8nKVxuICAgIGluZm8uc3JjID0gaW5mb0ljb25cbiAgICBcbiAgICBuYW1lLnRleHRDb250ZW50ID0gdG9kby5nZXRUaXRsZSgpXG4gICAgXG4gICAgXG4gICAgdG9Eb0NvbnRhaW5lci5pbnNlcnRCZWZvcmUodG9Eb0l0ZW0sYWRkQVRvRG8pXG5cbiAgICAvL1RPRE8gZWRpdCB0byBvcGVuIGFuZCBlZGl0IHRoZSBpdGVtXG4gICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgbGV0IG1haW5EaXYgPSBET00uYWRkVG9Eb1BvcFVwKClcbiAgICAgICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKCdhZGQtdG8tZG8tcG9wdXAnKVxuICAgICAgICBsZXQgY292ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb3Zlci5jbGFzc0xpc3QuYWRkKCdjb3ZlcicpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkRpdilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb3ZlcilcbiAgICAgICAgaGFuZGxlRWRpdERpdih0b2RvLG1haW5EaXYsY292ZXIsdG9Eb0l0ZW0pXG4gICAgICAgIGNvdmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvdmVyKVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtYWluRGl2KVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICAvL1RPRE8gdG8gb25seSBkaXNwbGF5IGluZm8gaW4gYW4gZWFzeSBmYXNoaW9uIHdlIGhhdmUgdGhlIHRvZG8gaXRlbXMgc28gaXQgaXMgcmVhbGx5IHN0cmFpZ2h0Zm9yd2FyZFxuICAgIGluZm8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGxldCBtYWluRGl2ID0gRE9NLmluZm9Qb3BVcCgpXG4gICAgICAgIG1haW5EaXYuY2xhc3NMaXN0LmFkZCgnaW5mby1wb3B1cCcpXG4gICAgICAgIGxldCBjb3ZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvdmVyLmNsYXNzTGlzdC5hZGQoJ2NvdmVyJylcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluRGl2KVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvdmVyKVxuICAgICAgICBoYW5kbGVJbmZvRGl2KHRvZG8sbWFpbkRpdixjb3ZlcilcbiAgICAgICAgY292ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY292ZXIpXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1haW5EaXYpXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH0pXG4gICAgZGVsZXRlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBwcm9qZWN0LnJlbW92ZUFUb0RvKHRvZG8pXG4gICAgICAgIHRvRG9Db250YWluZXIucmVtb3ZlQ2hpbGQodG9Eb0l0ZW0pXG4gICAgfSlcblxuICAgIG5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIG5hbWUuY2xhc3NMaXN0LnRvZ2dsZSgnZmluaXNoZWQnKVxuICAgICAgICB0b0RvSXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdmaW5pc2hlZC1kaXYnKVxuICAgICAgICBpZih0b2RvLmdldENvbXBsZXRlZCA9PSAwKVxuICAgICAgICB0b2RvLnNldENvbXBsZXRlZCgxKVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdG9kby5zZXRDb21wbGV0ZWQoMClcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1haW5EaXYobWFpbkRpdixjb3Zlcixwcm9qZWN0LGFkZEFUb0RvLHRvRG9Db250YWluZXIpe1xuICAgIGxldCB0aXRsZSA9IG1haW5EaXYucXVlcnlTZWxlY3RvcignaDEnKVxuICAgIGxldCBpbnB1dFRpdGxlID0gbWFpbkRpdi5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKVxuICAgIGxldCBkZXNjcmlwdGlvbiA9IG1haW5EaXYucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJylcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG4gICAgbGV0IGNsb3NlSW1nID0gbWFpbkRpdi5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgIGNsb3NlSW1nLnNyYyA9IENsb3NlSWNvblxuICAgIGNsb3NlSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY292ZXIpXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1haW5EaXYpXG4gICAgfSlcblxuICAgIGxldCBidXR0b24gPSBtYWluRGl2LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NvbmZpcm0nKVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtdG8tZG8nKVxuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBcbiAgICAgICAgbGV0IHRvZG8gPSB0b0RvLmNyZWF0ZUFUb2RvKGlucHV0VGl0bGUudmFsdWUgLCBkZXNjcmlwdGlvbi52YWx1ZSwnMS8xMC8yMDIzJyAsICdoaWdoJylcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY292ZXIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobWFpbkRpdilcbiAgICAgICAgdG9Eb0l0ZW1GdW5jdGlvbmFsaXR5KHByb2plY3QsdG9Eb0NvbnRhaW5lcixhZGRBVG9Ebyx0b2RvKVxuXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gaGFuZGxlRWRpdERpdih0b2RvLG1haW5EaXYsY292ZXIsdG9Eb0l0ZW0pe1xuICAgIGxldCB0aXRsZSA9IG1haW5EaXYucXVlcnlTZWxlY3RvcignaDEnKVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1NldHRpbmcgbmV3IGdvYWxzISdcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXG5cbiAgICBsZXQgdGl0bGVJbnB1dCA9IG1haW5EaXYucXVlcnlTZWxlY3RvcignaW5wdXQjdGl0bGUnKVxuICAgIHRpdGxlSW5wdXQudmFsdWUgPSB0b2RvLmdldFRpdGxlKClcblxuICAgIGxldCBkZXNjcmlwdGlvbklucHV0ID0gbWFpbkRpdi5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpXG4gICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHRvZG8uZ2V0RGVzY3JpcHRpb24oKVxuXG4gICAgbGV0IGNsb3NlSW1nID0gbWFpbkRpdi5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgIGNsb3NlSW1nLnNyYyA9IENsb3NlSWNvblxuICAgIGNsb3NlSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY292ZXIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobWFpbkRpdilcbiAgICB9KVxuXG5cbiAgICBsZXQgZWRpdGVkTmFtZSA9IHRvRG9JdGVtLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLW5hbWUtdG9kbycpXG5cbiAgICBsZXQgZWRpdEJ1dHRvbiA9IG1haW5EaXYucXVlcnlTZWxlY3RvcignYnV0dG9uJylcbiAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQnXG4gICAgZWRpdEJ1dHRvbi5jbGFzc05hbWU9J2VkaXQtYnRuIGJ0bidcbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICB0b2RvLnNldFRpdGxlKHRpdGxlSW5wdXQudmFsdWUpXG4gICAgICAgIHRvZG8uc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb25JbnB1dC52YWx1ZSlcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjb3ZlcilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtYWluRGl2KVxuXG4gICAgICAgIGVkaXRlZE5hbWUudGV4dENvbnRlbnQgPSB0aXRsZUlucHV0LnZhbHVlXG4gICAgfSlcblxufVxuXG5cblxuZnVuY3Rpb24gaGFuZGxlSW5mb0Rpdih0b2RvLG1haW5EaXYsY292ZXIpe1xuICAgIGxldCBjbG9zZUltZyA9IG1haW5EaXYucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICBjbG9zZUltZy5zcmMgPSBDbG9zZUljb25cblxuICAgIGxldCBjb250YWluZXIgPSBtYWluRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmZvLWl0ZW0nKVxuICAgIGNvbnRhaW5lci5mb3JFYWNoKGNoaWxkID0+e1xuICAgICAgICBsZXQga2V5ID0gY2hpbGQucXVlcnlTZWxlY3RvcignW2NsYXNzXj1rZXldJylcbiAgICAgICAgbGV0IHZhbHVlID0gY2hpbGQucXVlcnlTZWxlY3RvcignW2NsYXNzXj12YWx1ZV0nKVxuICAgICAgICBsZXQga2V5VGl0bGUgPSBrZXkuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnNwbGl0KCctJylbMV1cbiAgICAgICBcbiAgICAgICAga2V5LnRleHRDb250ZW50ID0gYCR7a2V5VGl0bGV9OiBgXG4gICAgICAgIFxuICAgICAgICB2YWx1ZS50ZXh0Q29udGVudCA9IHRvZG9bYGdldCR7a2V5VGl0bGV9YF0oKVxuXG4gICAgfSlcbiAgICBjbG9zZUltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcblxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvdmVyKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1haW5EaXYpXG4gICAgfSlcblxufVxuXG5sb2FkRGVmYXVsdCgpXG5cbiJdLCJuYW1lcyI6WyJjcmVhdGVQcm9qZWN0Q29udGFpbmVyIiwicHJvamVjdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInByb2plY3ROYW1lIiwidG9Eb0NvbnRhaW5lciIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiYWRkVG9UaGVTaWRlYmFyIiwic2lkZWJhciIsInNwYW4iLCJpbWciLCJjcmVhdGVOZXdQcm9qZWN0SW5TaWRlYmFyIiwiZGl2IiwiaW5wdXQiLCJjb25maXJtIiwiY2FuY2VsIiwidGV4dENvbnRlbnQiLCJjcmVhdGVUb0RvSXRlbSIsIm5hbWVTcGFuIiwiaW5mbyIsImVkaXQiLCJkZWxldGVEaXYiLCJhZGRUb0RvUG9wVXAiLCJtYWluRGl2IiwidGl0bGUiLCJjcmVhdGVMYWJlbFdpdGhJbnB1dCIsImluZm9Qb3BVcCIsImNyZWF0ZUluZm9MYWJlbCIsIm5hbWUiLCJjbGFzc05hbWUiLCJ2YWx1ZURpdiIsImxhYmVsQ29udGVudCIsImlkIiwidHlwZSIsImxhYmVsIiwic2V0QXR0cmlidXRlIiwiR2V0dGVyIiwiZ2V0TmFtZSIsIlNldHRlciIsInNldE5hbWUiLCJuZXdOYW1lIiwibGVuZ3RoIiwiZ2V0TGlzdCIsImdldEFsbFRvRG8iLCJ0b0RvTGlzdCIsImFkZFRvTGlzdCIsImFkZEFUb0RvIiwidG9EbyIsInB1c2giLCJyZW1vdmVyIiwicmVtb3ZlQVRvRG8iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJjcmVhdGVQcm9qZWN0Iiwic3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXR0ZXIiLCJnZXRUaXRsZSIsImdldERlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJnZXREdWVEYXRlIiwiZHVlRGF0ZSIsImdldFByaW9yaXR5IiwicHJpb3JpdHkiLCJnZXRDb21wbGV0ZWQiLCJjb21wbGV0ZWQiLCJzZXR0ZXIiLCJzZXRUaXRsZSIsIm5ld1RpdGxlIiwic2V0RGVzY3JpcHRpb24iLCJuZXdEZXNjcmlwdGlvbiIsInNldER1ZURhdGUiLCJuZXdEdWVEYXRlIiwic2V0UHJpb3JpdHkiLCJuZXdQcmlvcml0eSIsInNldENvbXBsZXRlZCIsIm5ld0NvbXBsZXRlZCIsImNyZWF0ZUFUb2RvIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiUHJvamVjdCIsIkRPTSIsImRlbGV0ZUljb24iLCJDbG9zZUljb24iLCJwZW5jaWxJY29uIiwiaW5mb0ljb24iLCJjb250ZW50Q29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsIm1haW4iLCJuZXdQcm9qZWN0YnRuIiwicHJvamVjdHMiLCJsb2FkRGVmYXVsdCIsImNvbnQiLCJjcmVhdGVBUHJvamVjdCIsInRvZG9Db250YWluZXIiLCJhZGRUb0RvIiwidG9Eb0l0ZW1GdW5jdGlvbmFsaXR5IiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbnB1dERpdiIsInJlbW92ZUNoaWxkIiwiaW5wdXRWYWx1ZSIsInZhbHVlIiwicHJvamVjdENvbnRhaW5lciIsInByb2plY3RDb250YWluZXJGdW5jdGlvbmFsaXR5Iiwic2lkZUJhckl0ZW0iLCJzaWRlQmFyRnVuY3Rpb25hbGl0eSIsInNyYyIsImNvbnRhaW5zIiwiaW5zZXJ0QmVmb3JlIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGQiLCJoYXNDaGlsZE5vZGVzIiwiY292ZXIiLCJib2R5IiwiaGFuZGxlTWFpbkRpdiIsInRvZG8iLCJ0b0RvSXRlbSIsImhhbmRsZUVkaXREaXYiLCJoYW5kbGVJbmZvRGl2IiwidG9nZ2xlIiwiaW5wdXRUaXRsZSIsImNsb3NlSW1nIiwiYnV0dG9uIiwidGl0bGVJbnB1dCIsImRlc2NyaXB0aW9uSW5wdXQiLCJlZGl0ZWROYW1lIiwiZWRpdEJ1dHRvbiIsImNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJrZXkiLCJrZXlUaXRsZSIsImdldEF0dHJpYnV0ZSIsInNwbGl0Il0sInNvdXJjZVJvb3QiOiIifQ==