<script lang="ts" setup>
import { useStorage } from '@vueuse/core'
import { computed } from 'vue'
import type { FormData } from '../gitc'
import { form2tag } from './gitc'

const emits = defineEmits(['re-edit'])

const his = useStorage<FormData[]>('his', [])
const tags = computed(() => his.value.map((h, index) => ({ index, label: form2tag(h) })).reverse())

const handleClose = (index: number) => {
  his.value.splice(index, 1)
}
</script>

<template>
  <div class="gitc-main-his">
    <el-tag
      v-for="tag in tags"
      :key="tag.index"
      closable
      @close="handleClose(tag.index)"
      @dblclick="emits('re-edit', tag.index)"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<style lang="scss" scoped>
.gitc-main-his {
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;

  .el-tag {
    margin-bottom: 10px;
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>
