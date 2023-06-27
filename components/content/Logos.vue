<template>
  <div class="container mt-24">
    <h2 class="text-center text-gray-500 dark:text-gray-300">
      <ContentSlot
        :use="$slots.title"
        unwrap="p"
      >
        Missing Title
      </ContentSlot>
    </h2>
    <div class="logos flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap">
      <ContentSlot
        :use="$slots.default"
        unwrap="p"
      />
    </div>
  </div>
</template>

<style scoped lang="postcss">
.logos :deep(svg),
.logos :deep(img) {
  @apply h-8 w-8 md:w-12 md:h-12;
}
</style>
