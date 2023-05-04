<template>
  <div class="container mt-24">
    <h2 class="text-center text-slate-500">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h2>
    <div class="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap">
      <Icon class="h-8 w-8 md:w-12 md:h-12" name="simple-icons:react" />
      <Icon class="h-8 w-8 md:w-12 md:h-12" name="simple-icons:svelte" />
      <Icon class="h-8 w-8 md:w-14 md:h-12" name="simple-icons:tailwindcss" />
      <Icon class="h-8 w-8 md:w-16 md:h-12" name="simple-icons:alpinedotjs" />
      <Icon class="h-8 w-8 md:w-12 md:h-12" name="simple-icons:vercel" />
      <Icon class="h-8 w-8 md:w-12 md:h-12" name="simple-icons:astro" />
    </div>
  </div>
</template>
