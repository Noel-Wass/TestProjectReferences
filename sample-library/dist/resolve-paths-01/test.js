"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
function relativePathFromRootToRelative(inputRelative) {
    const s1 = relativePathFromRootToCurrent();
    const s2 = inputRelative;
    const s3 = path.relative(s1, s2);
    console.log(`relativePathFromRootToRelative=${s3}`);
    return path.relative(s1, s2);
}
function relativePathFromRootToCurrent() {
    //rootPath represents how many levels one needs to go up to find the directory containing package.json and tsconfig.json
    //from the folder from which the node script is executed. In this case if the execution folder is sample-library
    //the rootPath should be './'.
    const rootPath = './';
    const currentPath = __dirname;
    console.log(currentPath);
    const relativePathToCurrent = path.relative(rootPath, currentPath);
    const relativePathToCurrent2 = prependRootPath(rootPath, relativePathToCurrent);
    const relativePathToCurrent3 = replaceSeparatorWithForwardSlash(relativePathToCurrent2);
    console.log(`relativePathFromRootToCurrent = ${relativePathToCurrent3}`);
    return relativePathToCurrent3;
}
function prependSeparator(inputString) {
    const separator = path.sep;
    return ".".concat(separator, inputString);
}
function prependRootPath(rootPath, inputString) {
    return rootPath.concat(inputString);
}
function replaceSeparatorWithForwardSlash(inputString) {
    //path.sep returns a backslash \.
    //A regex expression that includes a backslash literal inside a string
    // requires the backslash to be escaped with anohter backslash. So for example the 4 backslash literals
    //becomes a single backslash escaped with another backslash. This is reg3.
    // All these reggular expressions match on a single backslash in a string.This has been tested.
    const reg1 = /\\/g;
    const reg2 = new RegExp(/\\/, 'g');
    const reg3 = new RegExp(`\\\\`, 'g');
    const separator = path.sep;
    const reg4 = new RegExp(`\\${separator}`, 'g');
    return inputString.replaceAll(reg4, "/");
}
async function test1() {
    const path1 = "./test";
    const path2 = "./src/components";
    console.log(path.dirname('./x/y/z'));
    console.log(path.relative(path1, path2));
    const s1 = relativePathFromRootToCurrent();
    const s2 = relativePathFromRootToRelative(path2);
    const s3 = path.relative(s1, s2);
    console.log(s3);
    //const rootPath = "./";
    //const x: string = process.cwd();
    //console.log(x);
    //const currentPath = __dirname;
    //console.log(currentPath);
    //const relativePathToCurrent = path.relative(rootPath, currentPath);
    //console.log(`relativePathToCurrent = ${relativePathToCurrent}`);
    //const relativePathToCurrent2 = prependSeparator(relativePathToCurrent);
    //const relativePathToCurrent3 = replaceSeparatorWithForwardSlash(relativePathToCurrent2);
    //console.log(`relativePathToCurrent3=${relativePathToCurrent3}`);
}
test1();
