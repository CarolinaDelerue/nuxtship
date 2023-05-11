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
    <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
      <Icon
        class="text-white"
        :name="icon"
      />
    </div>
    <div>
      <h3 class="font-semibold text-lg">
        <ContentSlot
          :use="$slots.title"
          unwrap="p"
        />
      </h3>
      <p class="text-slate-500 mt-2 leading-relaxed">
        <ContentSlot
          :use="$slots.description"
          unwrap="p"
        />
      </p>
    </div>
  </div>
</template>
