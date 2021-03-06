<template>
  <!-- <router-link to="/zh-CN/guide/">
    指南
  </router-link>
  <router-link to="/zh-CN/components/">
    组件
  </router-link> -->
  <a href="https://github.com/tolking/element-pro-components">github</a>
  <el-dropdown>
    <span class="el-dropdown-link">
      中文<i class="el-icon-arrow-down el-icon--right" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item> English </el-dropdown-item>
        <el-dropdown-item> 中文 </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts"></script>

<style></style>
