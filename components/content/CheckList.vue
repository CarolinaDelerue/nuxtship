<script setup lang="ts">
const props = defineProps({
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
        <Icon
          name="heroicons-solid:check-circle"
          class="w-6 h-6"
          alt=""
        />
      </div>
      <span>{{ item }}</span>
    </li>
  </ul>
</template>
