# Contributing Guide

Thank you for choosing element-pro-components, If you are willing to contribute code or suggest an idea, please make sure to take a moment and read through the following guidelines.

## Issue Reporting Guidelines

- Before submitting an issue, please check if similar problems have already been issued.
- Before submitting an issue, please describe the problem in short words, and add the environment and recurrence steps when the issue occurs.

## Pull Request Guidelines

- Before working on a large change, it is best to open an issue first to discuss it with the maintainers.
- When in doubt, keep your pull requests small. To give a PR the best chance of getting accepted, don't bundle more than one feature or bug fix per pull request. It's always best to create two smaller PRs than one big one.
- When adding new features or modifying existing, please attempt to include tests to confirm the new behavior.
- Make sure you pass the code formatting and test (`pnpm check && pnpm test`).
- Rebase before creating a PR to keep commit history clear.
- Add some descriptions and refer relative issues for you PR.

## Git commit message Guidelines

Messages must be matched by the following regex:

```
/^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip)(\(.+\))?: .{1,50}/
```

Examples:

```
docs: update Form.md
```

```
fix(Form): the style link error
```

## Pull Request Process

- Fork this project. If it has been forked, please [synchronize the latest code](#sync-latest-code) of upstream.
- Create a new branch based on the `main` branch of upstream, example fix/form-button。
- After the development, submit the Pull Request to the `main` branch of upstream.
- The Pull Request will be merged into the `main` branch after the review is passed.

## Getting started

Before development, you need to install [Node.js 16+](https://nodejs.org), and we recommend you to use [PNPM](https://pnpm.io).

```
# install dependencies
pnpm i

# start development
pnpm dev
```

then, preview on [localhost:5173](http://localhost:5173/).

## Sync Latest Code

```
# add upstream
git remote add upstream git@github.com:tolking/element-pro-components.git

# pull the latest code of upstream
git fetch upstream

# checkout main branch
git checkout main

# merge code from upstream
git merge upstream/main
```

## Contributors

Thank you to all the people who have already contributed to element-pro-components!

<a href="https://github.com/tolking/element-pro-components/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=tolking/element-pro-components" />
</a>
