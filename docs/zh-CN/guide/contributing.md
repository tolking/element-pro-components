# 贡献指南

感谢你使用 element-pro-components，如果你愿意贡献代码或提供建议，请阅读以下内容。

## Issue 规范

- 遇到问题时，请先确认这个问题是否已经在 issue 中有记录或者已被修复。
- 提 issue 时，请用简短的语言描述遇到的问题，并添加出现问题时的环境和复现步骤。

## Pull Request 规范

- 在进行大型更改之前，最好先打开一个问题或者讨论与维护人员讨论。
- 如果遇到问题，建议保持你的 PR 足够小。保证一个 PR 只解决单个问题、添加单个功能。
- 当新增组件或者修改原有组件时，记得增加或者修改对应的单元测试，保证代码的稳定。
- 确保代码通过格式化及测试 (`pnpm check && pnpm test`)。
- 提交 PR 前请 rebase，确保 commit 记录的整洁。
- 在 PR 中请添加合适的描述，并关联相关的 Issue。

## Git 提交信息规范

消息必须由以下正则表达式匹配

```
/^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip)(\(.+\))?: .{1,50}/
```

例如:

```
docs: update Form.md
```

```
fix(Form): the style link error
```

## Pull Request 流程

- fork 主仓库，如果已经 fork 过，请[同步主仓库的最新代码](#同步最新代码)。
- 基于 fork 后仓库的 main 分支新建一个分支，比如 fix/form-button。
- 开发完成后，提 Pull Request 到主仓库的 main 分支。
- Pull Request 会在 Review 通过后被合并到主仓库。

## 本地开发

在进行本地开发前，你需要安装 [Node.js 16+](https://nodejs.org), 同时我们推荐你使用 [PNPM](https://pnpm.io)。

```
# 安装依赖
pnpm i

# 进入开发模式
pnpm dev
```

然后，在 [localhost:5173](http://localhost:5173/) 上预览。

## 同步最新代码

```
# 添加主仓库到 remote，作为 fork 后仓库的上游仓库
git remote add upstream git@github.com:tolking/element-pro-components.git

# 拉取主仓库最新代码
git fetch upstream

# 切换至 main 分支
git checkout main

# 合并主仓库代码
git merge upstream/main
```

## 贡献者

感谢所有已经为 element-pro-components 做出贡献的人！

<a href="https://github.com/tolking/element-pro-components/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=tolking/element-pro-components" />
</a>
