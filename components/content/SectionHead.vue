<template>
  <div class="mt-16 text-center">
    <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      <ContentSlot
        :use="$slots.title"
        unwrap="p"
      >
        Missing Title
      </ContentSlot>
    </h1>
    <p class="text-lg mt-4 text-gray-600 dark:text-gray-400">
      <ContentSlot
        :use="$slots.description"
        unwrap="p"
      >
        Missing #description slot
      </ContentSlot>
    </p>
  </div>
</template>
