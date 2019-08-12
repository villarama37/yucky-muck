#!/bin/sh 

#
# We want the lambda zip file to be as small as possible.
# 
# This script copies only the required files in the build directory.
#
# Note:  The build directory corresponse with the codeuri directory in the sam template
#
echo 'Creating build directory for lambda installation'

rm -rf ./build
mkdir ./build

cp -rf server.js src config.js lambda.index.js package-lock.json package.json build
cd build
npm install --production
cd ..
