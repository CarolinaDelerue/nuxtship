<script lang="ts" setup>
const isCollapse = ref(true)

defineProps({
  title: {
    type: String,
    default: 'Features'
  }
})
</script>

<template>
  <div>
    <UButton
      block
      class="flex !justify-start !text-base !font-normal -ml-[10px]"
      :label="title"
      :trailing-icon="
        !isCollapse
          ? 'i-heroicons-chevron-up-20-solid'
          : 'i-heroicons-chevron-down-20-solid'
      "
      variant="transparent"
      @click="isCollapse = !isCollapse"
    />
    <Transition>
      <div v-show="!isCollapse">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<style lang="postcss" scoped>
.v-enter-active,
.v-leave-active {
  max-height: 100vh;
  opacity: 1;
  transition: all 0.3s linear;
}

.v-enter-from,
.v-leave-to {
  max-height: 0;
  opacity: 0;
  transition: all 0.15s linear;
}
</style>
