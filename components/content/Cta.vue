<template>
<div
  class="container bg-black p-8 md:px-20 md:py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center">
  <h2 class="text-white text-4xl md:text-6xl tracking-tight">
    <ContentSlot :use="$slots.title" unwrap="p" />
  </h2>
  <p class="text-slate-400 mt-4 text-lg md:text-xl">
    <ContentSlot :use="$slots.description" unwrap="p" />
  </p>
  <div class="flex mt-5">
    <AppLink to="#" variants="inverted" sizes="lg"> Get Started </AppLink>
  </div>
</div>
</template>
