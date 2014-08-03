Backbone Demo
=============
- Used backbone framework
- Requirejs is used to load dependencies
- Used npm, `grunt-contrib-requirejs` to create build

Steps to create build
=====================
# install nodejs using nvm
$ git clone https://github.com/creationix/nvm.git
$ git cd nvm
$ vi ~/.bashrc
# then add below text in it and save
source ~/nvm/nvm.sh
$ nvm install v0.10.30
$ nvm alias default 0.10.30


# goto project dir (backbone_demo) and install dependencies
$ npm install

# create build
$ grunt