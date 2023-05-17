<script setup lang="ts">
import type { RouteLocationNormalized, RouteLocationRaw } from 'vue-router'
import { classNames } from '../../utils'

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  to: {
    type: [String, Object] as PropType<string | RouteLocationNormalized | RouteLocationRaw>,
    default: null
  },
  target: {
    type: String,
    default: ''
  },
  size: {
    type: String as PropType<'md' | 'lg' | 'none'>,
    default: 'lg'
  },
  block: {
    type: Boolean,
    default: false
  },
  variants: {
    type: String as PropType<'outline' | 'primary' | 'inverted' | 'muted'>,
    default: 'primary'
  },
  classLink: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  }
})

const variants = computed(() => {
  return ({
    outline: 'bg-white border-2 border-black hover:bg-gray-100 text-black',
    primary: 'bg-black text-white hover:bg-gray-800 border-2 border-transparent',
    inverted: 'bg-white text-black border-2 border-transparent',
    muted: 'bg-gray-100 hover:bg-gray-200 border-2 border-transparent',
  })[props.variants]
})

const sizes = computed(() => {
  return ({
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-md',
    none: 'px-0 py-0 text-md',
  })[props.size]
})

const linkClass = computed(() => {
  return classNames(
    'rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200',
    sizes.value,
    variants.value,
    props.block && 'w-full',
    props.classLink,
  )
})

const appLinkProps = computed(() => {
  if (props.to) {
    return { to: props.to, target: props.target }
  }
})
</script>

<template>
  <NuxtLink
    v-bind="appLinkProps"
    :to="to"
    :class="linkClass"
  >
    <div class="flex flex-row gap-x-1 items-center justify-center">
      <UIcon
        v-if="icon"
        class="h-5 w-5"
        :name="icon"
      />
      {{ label }}
    </div>
    <slot />
  </NuxtLink>
</template>
