#!/bin/sh

[ -d "blogs" ] && rm -rf blogs

git clone https://github.com/ayushmantripathy/blogs --depth 1
cd blogs/compiler
npm i
node index.js ../../src/lib/blog.json
