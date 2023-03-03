<script setup lang="ts">
import { useMagicKeys, whenever } from '@vueuse/core'

const emits = defineEmits(['click'])

const btns: { label: string; type: 'danger' | 'success'; key: string }[] = [
  { label: '重 置', type: 'danger', key: 'reset' },
  { label: '复 制', type: 'success', key: 'copy' },
]

const keys = useMagicKeys({
  passive: false,
  onEventFired(e) {
    // prevent ctrl + r and ctrl + c
    if (e.ctrlKey && e.type === 'keydown' && (e.key === 'r' || e.key === 'c'))
      e.preventDefault()
  },
})

whenever(keys.ctrl_r, () => emits('click', 'reset'))
whenever(keys.ctrl_c, () => emits('click', 'copy'))
</script>

<template>
  <el-button-group class="gitc-main-header">
    <el-popover placement="bottom" title="gitc 帮 助" trigger="click" width="400">
      <template #reference>
        <el-button> 帮 助 </el-button>
      </template>
      <div class="gitc-main-header-help">
        <p>git commit 参考格式: <span>{{ '<type>(<scope>): <subject>' }}</span></p>
        <p><span>Ctrl + C</span> 复制内容</p>
        <p><span>Ctrl + R</span> 重置内容</p>
        <p><span>Tab</span> 快速切换输入框</p>
        <p>
          历史记录最多保存5条历史, 双击历史记录可以重新编辑
        </p>
        <el-divider />
        <p>
          建议安装为
          <el-link href="https://web.dev/learn/pwa/" target="_blank" type="primary">
            PWA
          </el-link>
          应用, 可以离线使用, 体验更佳
        </p>
      </div>
    </el-popover>
    <el-button
      v-for="(btn, index) in btns"
      :key="index"
      :type="btn.type"
      plain
      @click="emits('click', btn.key)"
    >
      {{ btn.label }}
    </el-button>
  </el-button-group>
</template>

<style lang="scss" scoped>
.gitc-main-header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;

  &-help {
    span {
      padding: 0 5px;
      background-color: #f1f3f5;
      border-radius: 2px;
    }

    :deep(.el-divider--horizontal) {
      margin: 12px 0;
    }
  }
}
</style>
