import type { FormData } from '../gitc'

export const form2text = (data: FormData) => {
  const { scope, subject, body } = data
  return `${scope.select}${scope.input ? `(${scope.input.trim()})` : ''}: ${
    subject.select
  } ${subject.input?.trim()}\n\n${body?.trim()}`.trim()
}

export const form2tag = (data: FormData) => {
  const { scope, subject } = data
  return `${scope.select}${scope.input ? `(${scope.input.trim()})` : ''}: ${
    subject.select
  } ${subject.input?.trim()}`.trim()
}

export const typeOptions = [
  { label: '新功能(feat)', value: 'feat', ass: '✨' },
  { label: '修复(fix)', value: 'fix', ass: '🐛' },
  { label: '文档(doc)', value: 'docs', ass: '📝' },
  { label: '格式(style)', value: 'style', ass: '🎨' },
  { label: '重构(refactor)', value: 'refactor', ass: '♻️' },
  { label: '性能(perf)', value: 'perf', ass: '🚀' },
  { label: '测试(test)', value: 'test', ass: '🚧' },
  { label: '构建过程或工具变动(chore)', value: 'chore', ass: '🔧' },
  { label: '回滚(revert)', value: 'revert', ass: '⏪️' },
  { label: '合并分支(merge)', value: 'merge', ass: '🔀' },
]

export const scopeOptions = [
  { label: '✨ 引入新的特性', value: '✨' },
  { label: '🎉 初次提交', value: '🎉' },
  { label: '🔥 移除代码或文件', value: '🔥' },
  { label: '🐛 修复 bug', value: '🐛' },
  { label: '🚑 重要补丁', value: '🚑' },
  { label: '📝 文档', value: '📝' },
  { label: '🚀 性能优化', value: '🚀' },
  { label: '🎨 代码格式', value: '🎨' },
  { label: '💄 添加或更新UI和样式文件', value: '💄' },
  { label: '🔧 修改配置文件', value: '🔧' },
  { label: '🔨 重构代码', value: '🔨' },
  { label: '🔒 修复安全问题', value: '🔒' },
  { label: '🚧 工作进行中', value: '🚧' },
  { label: '💚 修复 CI 构建问题', value: '💚' },
  { label: '⬆️ 升级依赖', value: '⬆️' },
  { label: '⬇️ 降级依赖', value: '⬇️' },
  { label: '👷 添加 CI 构建系统', value: '👷' },
  { label: '📈 添加分析或跟踪代码', value: '📈' },
  { label: '♻️ 代码重构', value: '♻️' },
  { label: '➖ 移除依赖', value: '➖' },
  { label: '➕ 添加依赖', value: '➕' },
  { label: '🔖 发布/版本标签', value: '🔖' },
  { label: '🚚 移动或重命名文件', value: '🚚' },
  { label: '💩 代码需要改进', value: '💩' },
  { label: '⏪️ 还原更改', value: '⏪️' },
  { label: '🔀 合并分支', value: '🔀' },
  { label: '💥 引入重大变化', value: '💥' },
  { label: '💬 添加或更新文本', value: '💬' },
  { label: '🤡 小丑', value: '🤡' },
  { label: '💫 添加或更新动画和过渡', value: '💫' },
  { label: '🔊 添加或更新日志', value: '🔊' },
]
