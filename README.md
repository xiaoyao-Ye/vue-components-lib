# vue-components-lib

## 目录

```yaml
.
├── LICENSE
├── build
├── docs                                # vitepress文档目录
├── node_modules
├── packages                            # 公共组件目录
│   ├── add-components                  # 新增组件模板
│   ├── components                      # 组件存放目录
│   ├── constants                       # 常量存放目录
│   ├── hooks                           # hooks存放目录
│   ├── theme                           # 组件样式存放目录
│   ├── utils                           # 公共方法存放目录
├── playground                          # 组件调试
└── typings
├── .npmrc
├── .prettierignore
├── .prettierrc.js
# ├── postcss.config.js
# ├── commitlint.config.js
# ├── stylelint.config.js
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── README.md
├── tsconfig.json
```

## usage

`packages/constants/index.js` 中配置组件前缀

```JavaScript
module.exports = {
  prefixU: 'EL',
  prefixL: 'el',
}
// <ELButton />
// <el-button></el-button>
```

安装依赖

```bash
pnpm install
```

运行开发调试组件

```bash
pnpm run dev
```

运行文档

```bash
pnpm run docs:dev
```

创建组件

```bash
pnpm run new [component name]
```

## Git 提交规范

建议使用命令:

```bash
# 先暂存要提交的文件
git add xx
# 使用命令 commit 之后手动 push
pnpm run commit
# or
# 直接 commit 当前所有文件, 并 push
pnpm run commit:origin
```

也可全手动:

- feat 新增功能
- fix 修复问题/bug
- style 代码风格相关(不影响运行结果的)
- perf 优化/性能提升
- refactor 重构
- revert 撤销修改
- test 测试相关
- docs 文档/注释
- chore 依赖更新/脚手架配置修改等
- workflow 工作流跟进
- ci 持续集成
- mod 不确定分类的修改
- wip 开发中
- types 类型修改

## TODO

- [ ] 创建项目结构
- [ ] 安装包
- [ ] 配置 package.json 命令
- [ ] lint 相关
  - [ ] eslint
  - [ ] prettier
  - [ ] git
  - [ ] style
- [ ] more...
