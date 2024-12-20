# 项目设计文档

## 项目概述

这是一个使用 Next.js 15.1 创建的现代 Web 应用项目模板，采用了 App Router 架构。

## 技术栈

- **框架**: Next.js 15.1.0
- **开发语言**: TypeScript
- **样式解决方案**: Tailwind CSS
- **代码规范**: ESLint
- **CSS 处理器**: PostCSS
- **字体**: Geist (Sans + Mono)

## 目录结构

- **src/app**: 主要的应用代码
  - **layout.tsx**: 全局布局
  - **page.tsx**: 首页
  - **globals.css**: 全局样式

- **src/components**: 组件目录

- **src/pages**: 页面目录

- **public**: 静态资源

- **[配置文件]**: 配置文件

## 关键配置

### TypeScript 配置
- 使用 ES2017 目标
- 启用严格模式
- 配置路径别名 @/* -> ./src/*

### Tailwind 配置
- 自定义颜色变量支持
- 支持深色模式
- 配置内容扫描范围

### ESLint 配置
- 使用新的 Flat Config 系统
- 继承 Next.js 推荐配置
- 支持 TypeScript

### 样式主题
- 支持亮色/暗色模式自动切换
- 使用 CSS 变量管理主题色
- 集成 Geist 字体家族

## 开发规范

1. **代码组织**
   - 组件放在 src/components
   - 页面放在 src/app
   - 使用 TypeScript 类型声明

2. **样式管理**
   - 优先使用 Tailwind 类
   - 全局样式在 globals.css
   - 支持响应式设计

3. **资源管理**
   - 静态资源放在 public 目录
   - 使用 next/image 优化图片

4. **性能优化**
   - 启用字体优化
   - 图片自动优化
   - 代码分割 