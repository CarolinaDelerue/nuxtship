<script setup lang="ts">
defineProps({
  items: {
    type: Array as PropType<Array<String>>,
    required: true
  },
})
</script>

<template>
  <ul
    class="grid mt-8 text-left gap-y-4"
  >
    <li
      v-for="(item, index) in items"
      :key="index"
      class="flex items-start gap-3 text-gray-800"
    >
      <div>
        <UIcon
          name="i-heroicons-check-circle-solid"
          class="w-6 h-6"
          alt=""
        />
      </div>
      <span>{{ item }}</span>
    </li>
  </ul>
</template>
