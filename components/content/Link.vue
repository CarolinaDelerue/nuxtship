<script setup lang="ts">
const props = defineProps({
    href: {
        type: String,
        default: ''
    },
    size: {
        type: String as PropType<'md' | 'lg'>,
        default: 'lg'
    },
    block: {
        type: Boolean,
        default: 'true'
    },
    style: {
        type: String as PropType<'outline' | 'primary' | 'inverted' | 'muted'>,
        default: 'primary'
    },
}),

const styleMap = {
    outline: 'bg-text-red-600 text-black',
    primary: 'bg-text-blue-600 text-pink',
    inverted: 'bg-text-blue-600 text-white',
    muted: 'bg-text-blue-600 text-white',
}

const sizeMap = {
    md: 'bg-text-red-600 text-bg-text-blue-600',
    lg: 'bg-text-blue-600 text-text-pink',
}
</script>

<template>
    <a :to="href"
        :class="styleMap"
        :size="sizeMap
        ">
        <slot />
</a>
</template>