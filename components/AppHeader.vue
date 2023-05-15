<script setup lang="ts">
  const { navigation } = useContent()
  const appConfig = useAppConfig()

  const isMenuOpen = ref(false)
</script>

<template>
  <header class="flex flex-col">
    <div class="flex flex-row justify-between items-center my-5 container px-5">
      <NuxtLink
        href="/"
        class="text-lg lg:w-48"
      >
        <NuxtImg
          :src="appConfig.header.logo"
          alt="Your logo"
          width="40"
          height="40"
        />
      </NuxtLink>
      <div class="lg:hidden flex w-full justify-end">
        <MenuIcon
          v-if="!isMenuOpen"
          class="h-4 w-4 text-gray-800 cursor-pointer"
          @click="isMenuOpen = !isMenuOpen"
        />
        <UIcon
          v-else
          name="i-heroicons-x-mark-solid"
          size="20px"
          @click="isMenuOpen = !isMenuOpen"
        />
      </div>
      <nav
        class="nuxtnav-toggle lg:block"
        :class="{'hidden': !isMenuOpen}"
      >
        <div class="w-full lg:w-auto mt-2 lg:flex lg:mt-0">
          <ul class="hidden lg:flex flex-col lg:flex-row lg:gap-3">
            <li
              v-for="(item, index) in navigation"
              :key="index"
            >
              <NuxtLink
                :to="item._path"
                class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900"
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
          <AppLink
            to="/"
            variants="inverted"
            class="text-right"
          >
            Log in
          </AppLink>
          <AppLink
            to="/"
            size="md"
          >
            Sign up
          </AppLink>
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
