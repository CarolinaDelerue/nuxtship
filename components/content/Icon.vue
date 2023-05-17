
<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>
<template>
  <UIcon :name="name" />
</template>
