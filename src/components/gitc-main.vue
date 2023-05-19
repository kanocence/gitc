<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useStorage } from '@vueuse/core'
import type { FormData } from '../gitc'
import { form2text } from './gitc'
import GitcMainHeader from './gitc-main-header.vue'
import GitcMainForm from './gitc-main-form.vue'
import GitcMainHis from './gitc-main-his.vue'
import 'element-plus/es/components/message/style/css'

const formData = ref<FormData>({
  scope: { select: 'feat', input: '' },
  subject: { select: '✨', input: '' },
  body: '',
})

const reset = () => {
  formData.value.scope = { select: 'feat', input: '' }
  formData.value.subject = { select: '✨', input: '' }
  formData.value.body = ''
}

const his = useStorage<FormData[]>('his', [])

// copy to clipboard
const copy = () => {
  if (!navigator.clipboard) {
    ElMessage.error('Available only in secure contexts.')
    return
  }

  if (!formData.value.subject.input)
    return ElMessage.error('描述是必须的')

  const text = form2text(formData.value)
  navigator.clipboard.writeText(text)
  ElMessage.success('复制成功')

  // save to history
  if (his.value.every(h => JSON.stringify(h) !== JSON.stringify(formData.value))) {
    his.value.push(formData.value)
    if (his.value.length > 5)
      his.value.shift()
  }
}

const onClick = (key: string) => {
  if (key === 'reset')
    reset()
  else if (key === 'copy')
    copy()
}

const handleReEdit = (index: number) => {
  const { scope, subject, body } = his.value.at(index)!
  formData.value.scope = { ...scope }
  formData.value.subject = { ...subject }
  formData.value.body = body
}
</script>

<template>
  <el-card class="gitc-main">
    <!-- header -->
    <GitcMainHeader @click="onClick" />
    <!-- form -->
    <GitcMainForm v-model:value="formData" />
    <!-- his -->
    <GitcMainHis @re-edit="handleReEdit" />
  </el-card>
</template>

<style lang="scss" scoped>
.gitc-main {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  :deep(.el-card__body) {
    transition: height 0.1s;
  }
}
</style>
