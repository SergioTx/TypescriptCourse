"use strict";
exports.__esModule = true;
require("jQuery");
$('#app').css({ 'background-color': 'green' });
/*
type definitions can be downloaded from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types
and create a jquery.d.ts file (renamed to .old not to interfere with the other way)

------------------------------------

or commandline and better:

npm install -g typings
typings install dt~jquery --global --save

it creates a typings folder and a typings.json (both renamed to old)

------------------------------------

with Typescript 2.0 it has integrated support for DefinitelyTyped types:

npm install --save-dev @types/jquery

it now installs all those types in the node_modules/@types
and it imports them automatically without another package manager
*/ 
