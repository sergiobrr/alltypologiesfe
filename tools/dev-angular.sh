#!/usr/bin/env bash

set -o errexit

root="$(dirname "$0")/.."
cd ${root}
echo '###################################'
echo ${root}
echo '###################################'
echo `pwd`
echo '###################################'
npm install -g @angular/cli
echo '######## ANGULAR INSTALLED ######'
npm install
echo '######## NPM MODULES INSTALLED ######'
ng serve --host 0.0.0.0
