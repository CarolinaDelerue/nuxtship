<script setup lang="ts">

defineProps({
  icon: {
    type: String,
    default: ''
  },
  buttons: {
    type: Array as PropType<Array<UButton>>,
    default: () => []
  },
  heroImage: {
    type: Object as PropType<Image>,
    default: () => ({})
  },
  heroImageClass: {
    type: String,
    default: 'rounded-full ring-2 ring-gray-400 dark:ring-gray-500'
  },

})
</script>

<template>
  <main class="container grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
    <div class="py-6 md:order-1 hidden md:block">
      <NuxtImg
        :src="heroImage.path"
        :alt="heroImage.alt"
        :width="heroImage.width"
        :height="heroImage.height"
        :class="heroImageClass"
      />
    </div>
    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
        <ContentSlot
          :use="$slots.title"
          unwrap="p"
        >
          Missing Title
        </ContentSlot>
      </h1>
      <p class="text-lg mt-4 text-gray-600 dark:text-gray-400 max-w-xl">
        <ContentSlot
          :use="$slots.description"
          unwrap="p"
        >
          Missing #description slot
        </ContentSlot>
      </p>
      <div
        v-if="buttons"
        class="mt-6 flex flex-col sm:flex-row gap-3 md:mb-16"
      >
        <UButton
          v-for="button in buttons"
          :key="button.label"
          v-bind="button"
        />
      </div>
      <div
        v-if="$slots.extra"
      >
        <ContentSlot
          v-if="$slots.extra"
          :use="$slots.extra"
          unwrap="p"
        />
      </div>
    </div>
  </main>
</template>
