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
  <div>
    <nav>
      <ul class="flex flex-col lg:flex-row justify-between mt-1 mb-5 text-gray-600">
        <li
          v-for="(item, index) in navigation"
          :key="index"
        >
          <Collapsible
            v-if="item.dropdown"
          >
            <ul
              class="flex flex-col gap-y-2 mb-2 ml-2"
            >
              <li
                v-for="subNav in item.dropdown.items"
                :key="subNav.label"
              >
                <NuxtLink :to="subNav.to">
                  {{ subNav.label }}
                </NuxtLink>
              </li>
            </ul>
          </Collapsible>
          <NuxtLink
            v-else
            :to="item._path"
            class="flex lg:px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900"
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
        variants="outline"
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
