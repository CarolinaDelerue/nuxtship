<script setup lang="ts">

const { data: publishedTeamMembers } = await useAsyncData('about', () => queryContent('about').where({_partial: true}).find())
</script>

<template>
  <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
    <h2 class="font-bold text-3xl text-gray-800">
      <ContentSlot
        :use="$slots.title"
        unwrap="p"
      >
        Missing Title
      </ContentSlot>
    </h2>
    <p class="text-lg leading-relaxed text-slate-500">
      <ContentSlot
        :use="$slots.description"
        unwrap="p"
      >
        Missing #description slot
      </ContentSlot>
    </p>
  </div>
  <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12">
    <div
      v-for="(teamMemberEntry, index) in publishedTeamMembers"
      :key="index"
    >
      <div class="group">
        <div class="w-full">
          <NuxtImg
            :src="teamMemberEntry.avatar.src"
            :alt="teamMemberEntry.avatar.alt"
            class="aspect-square object-cover"
            width="272"
            height="272"
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
