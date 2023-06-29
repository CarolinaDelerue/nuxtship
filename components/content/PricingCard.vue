<script setup lang="ts">
defineProps({
  button: {
    type: Object as PropType<UButton>,
    default: () => ({})
  }
})
</script>

<template>
  <div
    class="flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md"
  >
    <div class="text-center text-lg font-medium text-gray-400">
      <p class="text-gray-500 dark:text-gray-400">
        <ContentSlot
          :use="$slots.category"
          unwrap="p"
        >
          Missing Category
        </ContentSlot>
      </p>
      <p class="mt-3 text-4xl font-bold text-black dark:text-white md:text-4xl">
        <ContentSlot
          :use="$slots.price"
          unwrap="p"
        >
          Missing Price
        </ContentSlot>
      </p>
    </div>
    <div>
      <ContentSlot
        v-if="$slots.list"
        :use="$slots.list"
        unwrap="p"
      />
    </div>
    <div class="h-full flex items-end w-full">
      <div
        v-if="button"
        class="flex mt-8 w-full"
      >
        <UButton
          v-bind="button"
          class="place-self-end"
        />
      </div>
    </div>
  </div>
</template>
