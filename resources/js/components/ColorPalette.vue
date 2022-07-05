<template>
    <div v-if="props.colors" class="flex space-x-1 h-32">
        <div
            class="h-32 w-32 shadow relative group"
            v-for="(item, index) in props.colors"
            :key="index"
            :style="`background: #${item}`"
        >
            <span
                class="absolute -bottom-9 font-bold opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-200"
                >#{{ item }}</span
            >
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    colors: Object
})
</script>