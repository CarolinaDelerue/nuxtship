<script setup lang="ts">
import { useColorMode } from '#imports'

const colorMode = useColorMode()

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <UToggle
    v-model="isDark"
    name="theme"
    icon-on="uil:moon"
    icon-off="uil:sun"
    class="theme-select"
    v-bind="$attrs"
    on-icon="i-heroicons-moon"
    off-icon="i-heroicons-sun"
  >
    <span class="sr-only">Toggle theme</span>
  </UToggle>
</template>

<style lang="postcss">
.theme-select {
  @apply bg-gray-200 dark:bg-gray-900
}
</style>
