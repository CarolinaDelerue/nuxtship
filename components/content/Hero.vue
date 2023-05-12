<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <main class="container grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
    <div class="py-6 md:order-1 hidden md:block">
      <NuxtImg
        src="/assets/hero.png"
        alt="Astronaut in the air"
        width="520"
        height="424"
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
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        <ContentSlot
          :use="$slots.description"
          unwrap="p"
        >
          Missing #description slot
        </ContentSlot>
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <ContentSlot
          v-if="$slots.extra"
          :use="$slots.extra"
          unwrap="p"
        />
      </div>
    </div>
  </main>
</template>
