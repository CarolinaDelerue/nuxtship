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
  <ColorScheme>
    <UToggle
      v-model="isDark"
      name="theme"
      icon-on="uil:moon"
      icon-off="uil:sun"
      class="theme-select"
      v-bind="$attrs"
    >
      <span class="sr-only">Toggle theme</span>
    </UToggle>
  </ColorScheme>
</template>

<style lang="postcss">
.theme-select {
  @apply bg-gray-200 dark:bg-gray-800
}
</style>
