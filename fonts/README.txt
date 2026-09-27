字体目录 —— 自托管，勿删
==========================

本目录是站点的全部字体与图标资源，**必须随站点一起部署**。

结构
----
fonts.css           35 条 @font-face，含 unicode-range，浏览器按需下载
woff2/              35 个字体切片（Cormorant Garamond / EB Garamond / 思源宋体）
fontawesome/        Font Awesome 图标样式表
webfonts/           Font Awesome 图标字体（4 个 woff2）

重要限制
--------
woff2/ 里的中文字体是**按当前站点文案的字符集裁剪的**（共 982 个字符，
收集自 index.html / script.js 中英文案 / 404.html / events.html 的可见文本）。

⚠️ 如果以后新增文案里出现子集之外的汉字，那个字会**退回系统宋体**，
   和其他字长得不一样，一眼就能看出来。

新增文案后请重跑一次「字符集收集 + 切片筛选」，流程：
  1. 用 Node 把 script.js 里 const i18n 的字典 eval 出来，导出所有字符串
  2. 与 index.html / 404.html / events.html 去标签后的可见文本合并，
     加上 ASCII、Latin-1、U+2000-206F、U+3000-303F、U+FF00-FF65
  3. 抓 https://fonts.googleapis.com/css2?family=Cormorant+Garamond:...&display=swap
     （需带 Chrome UA 才返回 woff2）
  4. 逐条 @font-face 判断其 unicode-range 是否命中字符集，只保留命中的
  5. 注意：思源宋体是可变字体，同一 unicode-range 下 300/400/500/600/700
     五个字重指向同一个文件，可合并为 font-weight: 300 700

或者直接让我（WorkBuddy）重跑，几分钟搞定。

部署提醒
--------
本目录必须包含在 git 提交与 GitHub Pages 部署里。
不要把它加进 .gitignore。
