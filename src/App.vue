<script setup lang="ts">
import GitcMain from './components/gitc-main.vue'
import GitcFooter from './components/gitc-footer.vue'
</script>

<template>
  <el-container>
    <el-main class="main">
      <GitcMain />
    </el-main>
    <el-footer class="footer">
      <GitcFooter />
    </el-footer>
  </el-container>
</template>

<style lang="scss" scoped>
.main {
  min-height: calc(100vh - var(--footer-height));
  display: flex;
  align-items: center;
}
</style>
