<template>
  <div class="container">
    <div class="mt-16 md:mt-0">
      <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
        <ContentSlot
          :use="$slots.title"
          unwrap="p"
        >
          Missing Title
        </ContentSlot>
      </h2>
      <p class="text-lg mt-4 text-gray-600 dark:text-gray-400">
        <ContentSlot
          :use="$slots.description"
          unwrap="p"
        >
          Missing #description slot
        </ContentSlot>
      </p>
    </div>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
      <ContentSlot
        v-if="$slots.extra"
        :use="$slots.extra"
        unwrap="p"
      />
    </div>
  </div>
</template>
