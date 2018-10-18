'use strict';
/**
 * This module exports all of the resolvers and typeDefs in all the folders in
 * its directory
 */

const {lstatSync, readdirSync} = require('fs');
const {join} = require('path');
const deepmerge = require('deepmerge');

/**
 * Finds if the filePath is a directory
 * @param {string} filePath - The path to the file/directory in question
 * @returns {boolean}
 */
function isDirectory(filePath) {
  try{
    let isADirectory = lstatSync(filePath).isDirectory();
    return isADirectory;
  }
  catch(e){
    // This is thrown when doesn't exist
    if (e.code === 'ENOENT'){
      return false;
    }
    throw (e);
  }
}

/**
 * Finds if the filePath is a file and not a directory
 * @param {string} filePath - The path to the file/directory in question
 * @returns {boolean}
 */
function isFile(filePath) {
  try{
    let isAFile = lstatSync(filePath).isFile();
    return isAFile;
  }
  catch(e){
    // This is thrown when doesn't exist
    if (e.code === 'ENOENT'){
      return false;
    }
    throw (e);
  }
}
/**
 * Returns a list of all of the directories in a file path
 * @param {string} filePath - The path to find directories in
 * @returns {string[]} - The full paths to directories
 */
function getDirectories(filePath) {
  let allFiles = readdirSync(filePath);
  let directories = allFiles
    .map((fileName)=>{
      let fullPath = join(filePath, fileName);
      return fullPath;
    })
    .filter(isDirectory);
  return directories;
}


// Export resolvers
let resolvers = {};
getDirectories(__dirname)
  .map((dirName)=>{
    let resolversPath = join(dirName, 'resolvers.js');
    return resolversPath;
  })
  .filter(isFile)
  .forEach((resolversPath)=>{
    resolvers = deepmerge(resolvers, require(resolversPath));
  });
module.exports.resolvers = resolvers;

// Export typeDefs
module.exports.typeDefs = getDirectories(__dirname)
  .map((dirName)=>{
    let typeDefPath = join(dirName, 'typeDefs.js');
    return typeDefPath;
  })
  .filter(isFile)
  .map((typeDefPath) => {
    return require(typeDefPath);
  });
