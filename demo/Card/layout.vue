<template>
  <pro-card ghost>
    <pro-card :span="24" shadow="never"> span-24 </pro-card>
    <pro-card :span="12" shadow="never"> span-12 </pro-card>
    <pro-card :span="6" shadow="never"> span-6 </pro-card>
  </pro-card>
  <pro-card :gutter="20" ghost>
    <pro-card :span="12" shadow="never"> span-12 </pro-card>
    <pro-card :span="6" shadow="never"> span-6 </pro-card>
    <pro-card :span="6" shadow="never"> span-6 </pro-card>
  </pro-card>
  <pro-card ghost>
    <pro-card :span="8" shadow="never"> span-8 </pro-card>
    <pro-card shadow="never"> auto </pro-card>
  </pro-card>
  <pro-card ghost>
    <pro-card shadow="never"> auto </pro-card>
    <pro-card :span="8" shadow="never"> span-8 </pro-card>
  </pro-card>
  <pro-card ghost>
    <pro-card shadow="never" style="max-width: 200px">
      max-width-200px
    </pro-card>
    <pro-card shadow="never"> auto </pro-card>
  </pro-card>
  <pro-card ghost>
    <pro-card shadow="never" style="flex: 0.4"> flex-0.4 </pro-card>
    <pro-card shadow="never"> flex-1 </pro-card>
  </pro-card>
</template>
