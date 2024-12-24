import{u as s}from"./vue.8fc199ce-BMt5wyEV.js";import{r as a,o as d,a as p,f as i,b as n,d as r,e as t}from"./index-By7wvJ5L.js";const u={class:"markdown-body"},m={href:"https://nodejs.org",class:"md-link",target:"_blank",rel:"noopener noreferrer"},f={href:"https://pnpm.io",class:"md-link",target:"_blank",rel:"noopener noreferrer"},k={href:"http://localhost:5173/",class:"md-link",target:"_blank",rel:"noopener noreferrer"},R=[],c={__name:"contributing",setup(h,{expose:o}){return o({frontmatter:{meta:[]}}),s({meta:[]}),(x,e)=>{const l=a("icon-external-link");return d(),p("div",u,[e[8]||(e[8]=i('<h1 id="贡献指南" tabindex="-1">贡献指南 <a class="header-anchor md-link" href="#贡献指南" aria-hidden="true">#</a></h1><p>感谢你使用 element-pro-components，如果你愿意贡献代码或提供建议，请阅读以下内容。</p><h2 id="issue-规范" tabindex="-1">Issue 规范 <a class="header-anchor md-link" href="#issue-规范" aria-hidden="true">#</a></h2><ul><li>遇到问题时，请先确认这个问题是否已经在 issue 中有记录或者已被修复。</li><li>提 issue 时，请用简短的语言描述遇到的问题，并添加出现问题时的环境和复现步骤。</li></ul><h2 id="pull-request-规范" tabindex="-1">Pull Request 规范 <a class="header-anchor md-link" href="#pull-request-规范" aria-hidden="true">#</a></h2><ul><li>在进行大型更改之前，最好先打开一个问题或者讨论与维护人员讨论。</li><li>如果遇到问题，建议保持你的 PR 足够小。保证一个 PR 只解决单个问题、添加单个功能。</li><li>当新增组件或者修改原有组件时，记得增加或者修改对应的单元测试，保证代码的稳定。</li><li>确保代码通过格式化及测试 (<code>pnpm check &amp;&amp; pnpm test</code>)。</li><li>提交 PR 前请 rebase，确保 commit 记录的整洁。</li><li>在 PR 中请添加合适的描述，并关联相关的 Issue。</li></ul><h2 id="git-提交信息规范" tabindex="-1">Git 提交信息规范 <a class="header-anchor md-link" href="#git-提交信息规范" aria-hidden="true">#</a></h2><p>消息必须由以下正则表达式匹配</p>',8)),e[9]||(e[9]=n("div",{class:"language-"},[n("pre",null,[n("code",{"v-pre":""},`/^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip)(\\(.+\\))?: .{1,50}/
`)])],-1)),e[10]||(e[10]=n("p",null,"例如:",-1)),e[11]||(e[11]=n("div",{class:"language-"},[n("pre",null,[n("code",{"v-pre":""},`docs: update Form.md
`)])],-1)),e[12]||(e[12]=n("div",{class:"language-"},[n("pre",null,[n("code",{"v-pre":""},`fix(Form): the style link error
`)])],-1)),e[13]||(e[13]=i('<h2 id="pull-request-流程" tabindex="-1">Pull Request 流程 <a class="header-anchor md-link" href="#pull-request-流程" aria-hidden="true">#</a></h2><ul><li>fork 主仓库，如果已经 fork 过，请<a href="#%E5%90%8C%E6%AD%A5%E6%9C%80%E6%96%B0%E4%BB%A3%E7%A0%81" class="md-link">同步主仓库的最新代码</a>。</li><li>基于 fork 后仓库的 main 分支新建一个分支，比如 fix/form-button。</li><li>开发完成后，提 Pull Request 到主仓库的 main 分支。</li><li>Pull Request 会在 Review 通过后被合并到主仓库。</li></ul><h2 id="本地开发" tabindex="-1">本地开发 <a class="header-anchor md-link" href="#本地开发" aria-hidden="true">#</a></h2>',3)),n("p",null,[e[2]||(e[2]=r("在进行本地开发前，你需要安装 ")),n("a",m,[e[0]||(e[0]=r("Node.js 16+")),t(l,{class:"link-icon"})]),e[3]||(e[3]=r(", 同时我们推荐你使用 ")),n("a",f,[e[1]||(e[1]=r("PNPM")),t(l,{class:"link-icon"})]),e[4]||(e[4]=r("。"))]),e[14]||(e[14]=n("div",{class:"language-"},[n("pre",null,[n("code",{"v-pre":""},`# 安装依赖
pnpm i

# 进入开发模式
pnpm dev
`)])],-1)),n("p",null,[e[6]||(e[6]=r("然后，在 ")),n("a",k,[e[5]||(e[5]=r("localhost:5173")),t(l,{class:"link-icon"})]),e[7]||(e[7]=r(" 上预览。"))]),e[15]||(e[15]=n("h2",{id:"同步最新代码",tabindex:"-1"},[r("同步最新代码 "),n("a",{class:"header-anchor md-link",href:"#同步最新代码","aria-hidden":"true"},"#")],-1)),e[16]||(e[16]=n("div",{class:"language-"},[n("pre",null,[n("code",{"v-pre":""},`# 添加主仓库到 remote，作为 fork 后仓库的上游仓库
git remote add upstream git@github.com:tolking/element-pro-components.git

# 拉取主仓库最新代码
git fetch upstream

# 切换至 main 分支
git checkout main

# 合并主仓库代码
git merge upstream/main
`)])],-1)),e[17]||(e[17]=n("h2",{id:"贡献者",tabindex:"-1"},[r("贡献者 "),n("a",{class:"header-anchor md-link",href:"#贡献者","aria-hidden":"true"},"#")],-1)),e[18]||(e[18]=n("p",null,"感谢所有已经为 element-pro-components 做出贡献的人！",-1)),e[19]||(e[19]=n("a",{href:"https://github.com/tolking/element-pro-components/graphs/contributors"},[n("img",{src:"https://contrib.rocks/image?repo=tolking/element-pro-components"})],-1))])}}};export{c as default,R as meta};
