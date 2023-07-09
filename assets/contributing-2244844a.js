import{u as r}from"./index-26c3ce76.js";import{o as s,c as l,a as e,a6 as n,X as a,aA as i,af as d}from"./modules-vue-300b6502.js";import"./modules-element-plus-dad8b1fb.js";const c={class:"markdown-body"},h=i('<h1 id="贡献指南" tabindex="-1">贡献指南 <a class="header-anchor md-link" href="#贡献指南" aria-hidden="true">#</a></h1><p>感谢你使用 element-pro-components，如果你愿意贡献代码或提供建议，请阅读以下内容。</p><h2 id="issue-规范" tabindex="-1">Issue 规范 <a class="header-anchor md-link" href="#issue-规范" aria-hidden="true">#</a></h2><ul><li>遇到问题时，请先确认这个问题是否已经在 issue 中有记录或者已被修复。</li><li>提 issue 时，请用简短的语言描述遇到的问题，并添加出现问题时的环境和复现步骤。</li></ul><h2 id="pull-request-规范" tabindex="-1">Pull Request 规范 <a class="header-anchor md-link" href="#pull-request-规范" aria-hidden="true">#</a></h2><ul><li>在进行大型更改之前，最好先打开一个问题或者讨论与维护人员讨论。</li><li>如果遇到问题，建议保持你的 PR 足够小。保证一个 PR 只解决单个问题、添加单个功能。</li><li>当新增组件或者修改原有组件时，记得增加或者修改对应的单元测试，保证代码的稳定。</li><li>确保代码通过格式化及测试 (<code>pnpm check &amp;&amp; pnpm test</code>)。</li><li>提交 PR 前请 rebase，确保 commit 记录的整洁。</li><li>在 PR 中请添加合适的描述，并关联相关的 Issue。</li></ul><h2 id="git-提交信息规范" tabindex="-1">Git 提交信息规范 <a class="header-anchor md-link" href="#git-提交信息规范" aria-hidden="true">#</a></h2><p>消息必须由以下正则表达式匹配</p>',8),p=e("div",{class:"language-"},[e("pre",null,[e("code",{"v-pre":""},`/^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip)(\\(.+\\))?: .{1,50}/
`)])],-1),u=e("p",null,"例如:",-1),m=e("div",{class:"language-"},[e("pre",null,[e("code",{"v-pre":""},`docs: update Form.md
`)])],-1),_=e("div",{class:"language-"},[e("pre",null,[e("code",{"v-pre":""},`fix(Form): the style link error
`)])],-1),f=i('<h2 id="pull-request-流程" tabindex="-1">Pull Request 流程 <a class="header-anchor md-link" href="#pull-request-流程" aria-hidden="true">#</a></h2><ul><li>fork 主仓库，如果已经 fork 过，请<a href="#%E5%90%8C%E6%AD%A5%E6%9C%80%E6%96%B0%E4%BB%A3%E7%A0%81" class="md-link">同步主仓库的最新代码</a>。</li><li>基于 fork 后仓库的 main 分支新建一个分支，比如 fix/form-button。</li><li>开发完成后，提 Pull Request 到主仓库的 main 分支。</li><li>Pull Request 会在 Review 通过后被合并到主仓库。</li></ul><h2 id="本地开发" tabindex="-1">本地开发 <a class="header-anchor md-link" href="#本地开发" aria-hidden="true">#</a></h2>',3),k={href:"https://nodejs.org",class:"md-link",target:"_blank",rel:"noopener noreferrer"},g={href:"https://pnpm.io",class:"md-link",target:"_blank",rel:"noopener noreferrer"},b=e("div",{class:"language-"},[e("pre",null,[e("code",{"v-pre":""},`# 安装依赖
pnpm i

# 进入开发模式
pnpm dev
`)])],-1),x={href:"http://localhost:5173/",class:"md-link",target:"_blank",rel:"noopener noreferrer"},v=e("h2",{id:"同步最新代码",tabindex:"-1"},[n("同步最新代码 "),e("a",{class:"header-anchor md-link",href:"#同步最新代码","aria-hidden":"true"},"#")],-1),P=e("div",{class:"language-"},[e("pre",null,[e("code",{"v-pre":""},`# 添加主仓库到 remote，作为 fork 后仓库的上游仓库
git remote add upstream git@github.com:tolking/element-pro-components.git

# 拉取主仓库最新代码
git fetch upstream

# 切换至 main 分支
git checkout main

# 合并主仓库代码
git merge upstream/main
`)])],-1),R=e("h2",{id:"贡献者",tabindex:"-1"},[n("贡献者 "),e("a",{class:"header-anchor md-link",href:"#贡献者","aria-hidden":"true"},"#")],-1),q=e("p",null,"感谢所有已经为 element-pro-components 做出贡献的人！",-1),E=e("a",{href:"https://github.com/tolking/element-pro-components/graphs/contributors"},[e("img",{src:"https://contrib.rocks/image?repo=tolking/element-pro-components"})],-1),F=[],I={__name:"contributing",setup(B,{expose:o}){return o({frontmatter:{meta:[]}}),r({meta:[]}),(A,y)=>{const t=d("icon-external-link");return s(),l("div",c,[h,p,u,m,_,f,e("p",null,[n("在进行本地开发前，你需要安装 "),e("a",k,[n("Node.js 16+"),a(t,{class:"link-icon"})]),n(", 同时我们推荐你使用 "),e("a",g,[n("PNPM"),a(t,{class:"link-icon"})]),n("。")]),b,e("p",null,[n("然后，在 "),e("a",x,[n("localhost:5173"),a(t,{class:"link-icon"})]),n(" 上预览。")]),v,P,R,q,E])}}};export{I as default,F as meta};
