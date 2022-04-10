<template>
  <pro-card split>
    <pro-card
      :xs="10"
      :sm="8"
      :md="6"
      :lg="4"
      header="title"
    >
      aside
    </pro-card>
    <pro-card direction="column">
      <pro-card
        :gutter="20"
        shadow="never"
        ghost
      >
        <pro-card
          :span="3"
          shadow="never"
        >
          span-3
        </pro-card>
        <pro-card
          :span="3"
          shadow="never"
        >
          span-3
        </pro-card>
        <pro-card shadow="never">
          auto
        </pro-card>
      </pro-card>
      <pro-card
        shadow="never"
        direction="column"
        split
        style="margin-top: 12px"
      >
        <pro-card shadow="never">
          card-1
        </pro-card>
        <pro-card shadow="never">
          card-2
        </pro-card>
        <pro-card shadow="never">
          card-3
        </pro-card>
      </pro-card>
      <pro-card
        header="header"
        shadow="never"
        split
        style="margin-top: 12px"
      >
        <pro-card shadow="never">
          auto
        </pro-card>
        <pro-card shadow="never">
          auto
        </pro-card>
      </pro-card>
    </pro-card>
  </pro-card>
</template>
