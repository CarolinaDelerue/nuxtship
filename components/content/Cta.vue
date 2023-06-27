<template>
  <div
    class="container bg-gray-900 p-8 md:px-20 md:py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center"
  >
    <h2 class="text-white text-4xl md:text-6xl tracking-tight">
      <ContentSlot
        :use="$slots.title"
        unwrap="p"
      >
        Missing Title
      </ContentSlot>
    </h2>
    <p class="text-gray-400 mt-4 text-lg md:text-xl">
      <ContentSlot
        :use="$slots.description"
        unwrap="p"
      >
        Missing #description slot
      </ContentSlot>
    </p>
    <div class="flex mt-5">
      <ContentSlot
        v-if="$slots.extra"
        :use="$slots.extra"
        unwrap="p"
      />
    </div>
  </div>
</template>
