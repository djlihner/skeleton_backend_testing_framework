#!/usr/bin/env node
'use strict';

const ncp = require('ncp').ncp;
const path = require('path')
const { execSync } = require("child_process");
 
// ncp.limit = 16;
 
ncp(path.resolve(__dirname, 'templates'), process.cwd(), function (err) {
 if (err) {
   return console.error(err);
 }
 console.log('=== Project prepared! === ');
});