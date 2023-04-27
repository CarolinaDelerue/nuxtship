
<script setup lang="ts">
import { classNames } from '../../utils'

const props = defineProps({
    size: {
        type: String as PropType<'md' | 'lg'>,
        default: 'md'
    },
    block: {
        type: Boolean,
        default: true
    },
    variants: {
        type: String as PropType<'outline' | 'primary'>,
        default: 'primary'
    },
    classLink: {
        type: String,
        default: ''
    }
})

const variants = computed(() => {
    return ({
        outline: 'border-2 border-black hover:bg-black text-black hover:text-white',
        primary: 'bg-black text-white hover:bg-slate-900  border-2 border-transparent',
    })[props.variants]
})

const sizes = computed(() => {
    return ({
        md: 'px-5 py-2.5',
        lg: 'px-6 py-3',
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
<button :class="linkClass"
  ><slot />
</button>
</template>