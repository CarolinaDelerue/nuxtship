<script setup lang="ts">
const { page } = useContent()
</script>

<template>
  <div>
    <div class="mx-auto max-w-3xl mt-14">
      <span class="text-green-500 dark:text-green-400 uppercase tracking-wider text-sm font-medium">
        {{ page.category }}
      </span>
      <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight mt-1 lg:leading-tight">
        {{ page.title }}
      </h1>
      <div class="flex gap-2 mt-3 items-center flex-wrap md:flex-nowrap">
        <span class="text-gray-400">
          {{ page.author }}
        </span>
        <span class="text-gray-400">•</span>
        <time
          class="text-gray-400"
          :datetime="page.publishDate"
        >
          {{ getFormattedDate(page.publishDate) }}
        </time>
        <span class="text-gray-400 hidden md:block">•</span>
        <div class="w-full md:w-auto flex flex-wrap gap-3">
          <div
            v-for="(tag, index) in page.tags"
            :key="index"
          >
            <span class="text-sm text-gray-500 dark:text-gray-400">#{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto prose prose-lg dark:prose-invert mt-6 max-w-3xl">
      <slot />
    </div>
    <div class="text-center mt-8">
      <NuxtLink
        to="/blog"
        class="bg-gray-100 text-black px-5 py-3 rounded-md hover:bg-gray-200 transition"
      >
        ← Back to Blog
      </NuxtLink>
    </div>
  </div>
</template>
