<script setup lang="ts">
const { navigation } = useContent()
defineProps({
  links: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="px-5 ">
    <nav>
      <ul class="flex flex-col lg:flex-row justify-between my-5 text-red-600">
        <li
          v-for="(item, index) in navigation"
          :key="index"
        >
          <NuxtLink
            :to="item._path"
            class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900"
          >
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="flex items-center justify-center gap-4">
      <AppLink
        to="/"
        size="md"
        variants="muted"
        class="w-full"
      >
        Log in
      </AppLink>
      <AppLink
        to="/"
        size="md"
        class="w-full"
      >
        Sign up
      </AppLink>
    </div>
  </div>
</template>
