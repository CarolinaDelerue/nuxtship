<script setup lang="ts">

const { navigation } = useContent()
const appConfig = useAppConfig()

if (!navigation.value) {
  navigation.value = await fetchContentNavigation()
}
</script>

<template>
  <header class="flex flex-row justify-between items-center my-5 container px-5">
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
      <MenuIcon class="h-4 w-4 text-gray-800" />
    </div>
    <nav class="nuxtnav-toggle hidden lg:block">
      <div class="hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0">
        <ul class="flex flex-col lg:flex-row lg:gap-3">
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
  </header>
</template>
