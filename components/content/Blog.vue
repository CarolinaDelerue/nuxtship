<script setup lang="ts">
const { data: publishedBlogEntries } = await useAsyncData('blog', () => queryContent('blog').find())

const blogList = publishedBlogEntries.value!
  .filter(page => page._path !== '/blog')
  .sort((a, b) => {
    const dateA = new Date(a.publishDate).getTime()
    const dateB = new Date(b.publishDate).getTime()
    return dateB - dateA
  })
</script>

<template>
  <main class="mt-16">
    <div class="grid gap-16 max-w-4xl mx-auto">
      <ul
        v-for="blogPostEntry in blogList"
        :key="blogPostEntry._id"
      >
        <li>
          <NuxtLink :to="blogPostEntry._path">
            <div class="grid md:grid-cols-2 gap-5 md:gap-10 items-center">
              <NuxtImg
                class="rounded-md"
                :src="blogPostEntry.image.src"
                :alt="blogPostEntry.image.alt"
                width="430"
                height="240"
              />
              <div>
                <span class="text-green-500 dark:text-green-400 uppercase tracking-wider text-sm font-medium">
                  {{ blogPostEntry.category }}
                </span>

                <h2 class="text-3xl font-semibold leading-snug tracking-tight mt-1 ">
                  {{ blogPostEntry.title }}
                </h2>
                <div class="flex gap-2 mt-3">
                  <span class="text-gray-400">
                    {{ blogPostEntry.author }}
                  </span>
                  <span class="text-gray-400">• </span>
                  <time
                    class="text-gray-400"
                    :datetime="blogPostEntry.publishDate"
                  >
                    {{ blogPostEntry.publishDate }}
                  </time>
                </div>
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </main>
</template>
