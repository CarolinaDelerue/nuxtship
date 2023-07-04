<script setup lang="ts">
defineProps({
  contactButtons: {
    type: Array as PropType<Array<UButton>>,
    default: () => []
  }
})

</script>

<template>
  <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
    <div>
      <h2 class="font-medium text-2xl text-gray-800 dark:text-gray-300">
        <ContentSlot
          :use="$slots.title"
          unwrap="p"
        >
          Missing Title
        </ContentSlot>
      </h2>
      <p class="text-lg leading-relaxed text-gray-500 dark:text-gray-400 mt-3">
        <ContentSlot
          :use="$slots.description"
          unwrap="p"
        >
          Missing #description slot
        </ContentSlot>
      </p>
      <div class="mt-5">
        <div
          v-if="contactButtons"
          class="flex flex-col gap-y-2 mt-2 -ml-4"
        >
          <UButton
            v-for="button in contactButtons"
            :key="button.label"
            v-bind="button"
          />
        </div>
      </div>
    </div>
    <div>
      <Contactform />
    </div>
  </div>
</template>
