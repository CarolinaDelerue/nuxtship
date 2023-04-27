<script setup lang="ts">


const publishedTeamMembers = await queryContent('about', 'team').find()
console.log(publishedTeamMembers)

</script>

<template>
    <div>test</div>
    <div></div>

<!-- <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800">
        Empowering the world with Astro.
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        We're a multi-cultural team from around the world! We come from diverse
        backgrounds, bringing different personalities, experiences and skills to
        the job. This is what makes our team so special.
      </p>
    </div>
    <div v-for="teamMemberEntry in publishedTeamMembers" :key="teamMemberEntry.data.name" class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12">
          <div class="group">
            <div class="w-full aspect-square">
              <img
                src="teamMemberEntry.data.avatar.src"
                alt="teamMemberEntry.data.avatar.alt"
                aspectRatio="1:1"
                background="#ffffff"
                fit="cover"
                position="center"
                class="w-full rounded-md transition group-hover:-translate-y-1 group-hover:shadow-xl"
              />
            </div>

            <div class="mt-4 text-center">
              <h2 class="text-lg text-gray-800">
                {{ teamMemberEntry.data.name }}
              </h2>
              <h3 class="text-sm text-slate-500">
                {{ teamMemberEntry.data.title }}
              </h3>
            </div>
          </div>
    </div> -->
</template>