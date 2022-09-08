import { relative } from 'node:path/win32';
import * as path from 'path';

function relativePathFromRootToRelative(inputRelative: string): string {
    const s1: string = relativePathFromRootToCurrent();
    const s2 = inputRelative;
    const s3 = path.relative(s1, s2);
    console.log(`relativePathFromRootToRelative=${s3}`);
    return path.relative(s1, s2);
}

function relativePathFromRootToCurrent(): string {
    //rootPath represents how many levels one needs to go up to find the directory containing package.json and tsconfig.json
    //from the folder from which the node script is executed. In this case if the execution folder is sample-library
    //the rootPath should be './'.
    const rootPath = './';
    const currentPath = __dirname;
    console.log(currentPath);

    const relativePathToCurrent = path.relative(rootPath, currentPath);
    

    const relativePathToCurrent2 = prependRootPath( rootPath, relativePathToCurrent);

    const relativePathToCurrent3 = replaceSeparatorWithForwardSlash(relativePathToCurrent2);

    console.log(`relativePathFromRootToCurrent = ${relativePathToCurrent3}`);
    return relativePathToCurrent3;
}

function prependSeparator(inputString: string): string {
    const separator = path.sep;
    return ".".concat(separator, inputString);
}

function prependRootPath(rootPath: string, inputString: string): string {
    return rootPath.concat(inputString);
}

function replaceSeparatorWithForwardSlash(inputString: string): string {
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
    const s2 = relativePathFromRootToRelative(path2)
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

