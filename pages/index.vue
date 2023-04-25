
<template>
  <NuxtLayout>
    <ContentRenderer :value="page" class="overflow-hidden" />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { page } = useContent()
</script>
