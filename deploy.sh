#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 进入生成的文件夹
cd .vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m "Travis CI build at `date +"%Y-%m-%d %H:%M:%S"`"

# 发布到 GitHub Pages
git push -f "https://${GITHUB_TOKEN}@${GITHUB_REF}" master:gh-pages