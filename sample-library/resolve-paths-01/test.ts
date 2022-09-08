import { relative } from 'node:path/win32';
import * as path from 'path';

function relativePathFromRootToRelative(inputRelative: string): string {
    const rootPath = './';
    const outputDir = './dist';

    const inputRelative2 = path.resolve(outputDir, inputRelative);

    console.log(`inputRelative2=${inputRelative2}`);
    
    const currentPath = inputRelative2;
    console.log(`relativePathFromRootToRelative=${currentPath}`);

   
    return currentPath;
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

    
    console.log('Testing...');
    const s1 = relativePathFromRootToCurrent();
    const s2 = replaceSeparatorWithForwardSlash(path.resolve('./dist', './src/components'));
    console.log(`s1=${s1}`);
    console.log(`s2=${s2}`);
    const s3 = replaceSeparatorWithForwardSlash(path.normalize(path.relative(s1, s2)));
    console.log(`s3=${s3}`);
    //const s2 = relativePathFromRootToRelative(path2)
    //const s3 = path.relative(s1, s2);
    //console.log(s3);

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

