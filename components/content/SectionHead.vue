
<template>
  <div class="mt-16 text-center">
    <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h1>
    <p class="text-lg mt-4 text-slate-600">
      <ContentSlot :use="$slots.description" unwrap="p" />
    </p>
  </div>
</template>