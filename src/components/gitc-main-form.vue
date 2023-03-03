<script setup lang="ts">
import { computed, toRefs, watch } from 'vue'
import type { FormData } from '../gitc'
import { form2text, scopeOptions, typeOptions } from './gitc'

const props = defineProps<{ value: FormData }>()

const { scope, subject, body } = toRefs(props.value)
const preview = computed(() => form2text(props.value))

watch(
  () => scope.value.select,
  (val) => {
    const option = typeOptions.find(o => o.value === val)
    if (option?.ass)
      subject.value.select = option.ass
  },
  { deep: true },
)
</script>

<template>
  <el-form label-width="80px" class="gitc-main-form">
    <el-form-item label="类型">
      <div class="gitc-main-form-item">
        <el-select v-model="scope.select">
          <el-option
            v-for="o in typeOptions"
            :key="o.value"
            :label="o.label"
            :value="o.value"
          />
        </el-select>
        <el-input
          v-model="scope.input"
          placeholder="范围"
        />
      </div>
    </el-form-item>
    <el-form-item label="描述">
      <div class="gitc-main-form-item">
        <el-select v-model="subject.select">
          <el-option
            v-for="o in scopeOptions"
            :key="o.value"
            :label="o.label"
            :value="o.value"
          />
        </el-select>
        <el-input
          v-model="subject.input"
          placeholder="描述(必填)"
          maxlength="50"
          show-word-limit
        />
      </div>
    </el-form-item>
    <el-form-item label="详细描述">
      <el-input
        v-model="body"
        type="textarea"
        :autosize="{ minRows: 3 }"
        placeholder="详细描述"
      />
    </el-form-item>
    <el-form-item label="预览">
      <el-input
        v-model="preview"
        type="textarea"
        :autosize="{ minRows: 1 }"
        disabled
      />
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped>
.gitc-main-form {
  &-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .el-select {
      min-width: 160px;
      margin-right: 10px;
    }
  }

  :deep(.el-textarea__inner) {
    transition: height 0.1s ease-in-out;
    overflow: hidden;
  }
}
</style>
