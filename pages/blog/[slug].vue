<template>
  <NuxtLayout :page="page">
    <ContentRenderer :value="page"/>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'post'})

const { page } = useContent()
</script>
