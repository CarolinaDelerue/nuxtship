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
  <div class="relative px-4">
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
                <NuxtLink
                  :to="subNav.to"
                  class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
                >
                  {{ subNav.label }}
                </NuxtLink>
              </li>
            </ul>
          </Collapsible>
          <NuxtLink
            v-else
            :to="item._path"
            class="flex lg:px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
          >
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="flex flex-col items-center justify-center gap-4">
      <UButton
        label="Log in"
        to="/"
        color="black"
        size="lg"
        variant="outline"
        block
      />
      <UButton
        label="Sign up"
        to="/"
        color="black"
        size="lg"
        block
      />
    </div>
  </div>
</template>
