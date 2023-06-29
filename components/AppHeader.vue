<script setup lang="ts">
  const { navigation } = useContent()
  const appConfig = useAppConfig()
  const isMenuOpen = ref(false)
</script>

<template>
  <header class="flex flex-col">
    <div class="flex flex-row justify-between items-center my-5 container">
      <NuxtLink
        to="/"
        class="text-lg lg:w-48"
      >
        <NuxtImg
          :src="appConfig.header.logo"
          alt="Company logo"
          width="40"
          height="40"
        />
      </NuxtLink>
      <div
        class="lg:hidden flex w-full justify-end"
        @click="isMenuOpen = !isMenuOpen"
      >
        <UIcon
          v-if="!isMenuOpen"
          name="i-heroicons-bars-3-solid"
          class="h-6 w-6 text-gray-800 dark:text-gray-400 cursor-pointer"
        />
        <UIcon
          v-else
          name="i-heroicons-x-mark-solid"
          class="h-6 w-6"
        />
      </div>
      <nav
        class="lg:block"
        :class="{'hidden': !isMenuOpen}"
      >
        <div class="w-full lg:w-auto mt-2 lg:flex lg:mt-0">
          <ul class="hidden items-center lg:flex flex-col lg:flex-row lg:gap-3">
            <li
              v-for="(item, index) in navigation"
              :key="index"
              class="text-lg text-gray-600"
            >
              <UDropdown
                v-if="item.dropdown"
                :items="[item.dropdown.items]"
                :popper="{ placement: 'bottom-start' }"
              >
                <UButton
                  size="xl"
                  class="text-lg font-normal text-gray-600 dark:text-gray-300"
                  variant="button"
                  :label="item.dropdown.title"
                  trailing-icon="i-heroicons-chevron-down-20-solid"
                />
              </UDropdown>
              <NuxtLink
                v-else
                :to="item._path"
                class="flex lg:px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                @click="isMenuOpen = false"
              >
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <div class="hidden lg:flex items-center justify-end gap-4">
          <UButton
            label="Log in"
            to="/"
            variant="ghost"
            size="xl"
          />

          <UButton
            label="Sign up"
            to="/"
            color="black"
            size="xl"
          />
        </div>
      </div>
    </div>
    <MobileNav
      v-if="isMenuOpen"
      class="lg:hidden"
      :links="navigation"
    />
  </header>
</template>
