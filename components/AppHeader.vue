<script setup lang="ts">
  const { navigation } = useContent()
  const router = useRouter()
  const appConfig = useAppConfig()

  const open = ref(false)

  router.afterEach(() => {
    open.value = false
  })
</script>

<template>
  <header class="flex flex-col">
    <USlideover
      v-model="open"
      side="left"
    >
      <div class="flex flex-col gap-y-4">
        <div class="flex justify-between p-4 items-center border-b border-gray-200 dark:border-gray-800">
          <ThemeSelect />
          <NuxtLink
            to="/"
            class="text-lg lg:w-48"
          >
            <NuxtImg
              :src="appConfig.header.logoDark"
              alt="Company logo"
              width="100"
              height="40"
              class="hidden dark:block"
            />
            <NuxtImg
              :src="appConfig.header.logoLight"
              alt="Company logo"
              width="100"
              height="40"
              class="dark:hidden"
            />
          </NuxtLink>
          <UButton
            variant="ghost"
            color="white"
            icon="i-heroicons-x-mark-solid"
            @click="open = false"
          />
        </div>
        <MobileNav />
      </div>
    </USlideover>
    <div class="flex flex-row justify-between items-center my-5 container">
      <NuxtLink
        to="/"
        class="text-lg lg:w-48"
      >
        <NuxtImg
          :src="appConfig.header.logoDark"
          alt="Company logo"
          width="100"
          height="40"
          class="hidden dark:block"
        />
        <NuxtImg
          :src="appConfig.header.logoLight"
          alt="Company logo"
          width="100"
          height="40"
          class="dark:hidden"
        />
      </NuxtLink>

      <UButton
        class="lg:hidden"
        icon="i-heroicons-bars-3-solid"
        variant="ghost"
        color="white"
        @click="open = true"
      />

      <nav
        class="hidden lg:block"
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
              >
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
      <div class="hidden lg:flex ">
        <div class="items-center justify-end gap-4">
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
  </header>
</template>
