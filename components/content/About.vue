<script setup lang="ts">

const publishedTeamMembers = await queryContent('about', 'team').find()

</script>

<template>
<div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800">
        Empowering the world with Astro.
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        We're a multi-cultural team from around the world! We come from diverse
        backgrounds, bringing different personalities, experiences and skills to
        the job. This is what makes our team so special.
      </p>
    </div>
    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12">
      <div v-for="(teamMemberEntry, index) in publishedTeamMembers" :key="index">
          <div class="group">
            <div class="w-full">
              <NuxtImg
                :src="teamMemberEntry.avatar.src"
                :alt="teamMemberEntry.avatar.alt"
                class="aspect-square object-cover"
              />
            </div>

            <div class="mt-4 text-center">
              <h2 class="text-lg text-gray-800">
                {{ teamMemberEntry.name }}
              </h2>
              <h3 class="text-sm text-slate-500">
                {{ teamMemberEntry.title }}
              </h3>
            </div>
          </div>
        </div>
    </div>
</template>
