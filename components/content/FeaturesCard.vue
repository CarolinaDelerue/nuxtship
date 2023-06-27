<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="flex gap-4 items-start">
    <div class="flex items-center mt-1 bg-gray-900 rounded-full p-2 w-8 h-8 shrink-0">
      <UIcon
        class="text-white"
        :name="icon"
      />
    </div>
    <div>
      <h3 class="font-semibold text-lg">
        <ContentSlot
          :use="$slots.title"
          unwrap="p"
        >
          Missing Title
        </ContentSlot>
      </h3>
      <p class="text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
        <ContentSlot
          :use="$slots.description"
          unwrap="p"
        >
          Missing #description slot
        </ContentSlot>
      </p>
    </div>
  </div>
</template>
