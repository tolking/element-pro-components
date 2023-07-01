<template>
  <pro-tabs>
    <template #label="{ icon, title }">
      <div class="tabs-label-content">
        <el-icon
          :size="16"
          class="label-icon"
        >
          <component :is="icon" />
        </el-icon>
        <span>{{ title.toUpperCase() }}</span>
      </div>
    </template>
  </pro-tabs>
</template>

<style scoped>
.tabs-label-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
.tabs-label-content .label-icon {
  margin-right: 6px;
}
</style>
