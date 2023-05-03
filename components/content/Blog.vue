<script setup lang="ts">

const publishedBlogEntries = await queryContent('blog').find()
const blogList = publishedBlogEntries.filter(page => page._path !== '/blog')

//TODO
// publishedBlogEntries.sort(function (a, b) {
//   return b.page.publishDate.valueOf() - a.page.publishDate.valueOf();
// });

</script>

<template>
<!-- <Layout title="Blog">
  <Container> -->
    <main class="mt-16">
      <div class="grid gap-16 max-w-4xl mx-auto" >
      <ul v-for="(blogPostEntry, index) in blogList" :key="index" >
            <li>
              <NuxtLink :to="blogPostEntry._path">
                <div class="grid md:grid-cols-2 gap-5 md:gap-10 items-center">
                  <NuxtImg
                    :src="blogPostEntry.image.src"
                    :alt="blogPostEntry.image.alt"
                  />
                  <div>
                    <span class="text-blue-400 uppercase tracking-wider text-sm font-medium">
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
                        datetime={{ blogPostEntry.publishDate }}>
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
  <!-- </Container>
</Layout> -->

</template>
