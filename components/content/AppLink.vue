<script setup lang="ts">
import type { RouteLocationNormalized, RouteLocationRaw } from 'vue-router'
import { classNames } from '../../utils'

const props = defineProps({
    to: {
        type: [String, Object] as PropType<string | RouteLocationNormalized | RouteLocationRaw>,
        default: null
    },
    size: {
        type: String as PropType<'md' | 'lg'>,
        default: 'lg'
    },
    block: {
        type: Boolean,
        default: true
    },
    variants: {
        type: String as PropType<'outline' | 'primary' | 'inverted' | 'muted'>,
        default: 'primary'
    },
    classLink: {
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
        md: 'px-4 py-2',
        lg: 'px-5 py-2.5',
    })[props.size]
})

const linkClass = computed(() => {
  return classNames(
    'rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200',
    sizes.value,
    variants.value,
    props.block && 'w-full',
    props.classLink
  )
})
</script>

<template>
    <NuxtLink :to="to" :class="linkClass">
        <slot />
    </NuxtLink>
</template>