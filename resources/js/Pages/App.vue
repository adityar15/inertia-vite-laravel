<template>
    <div class="grid h-96 place-items-center grid-row-2 mt-9">
        <Head>
            <title>Make your pallete</title>
        </Head>

        <ColorDetector @detected="onDetect" />
        <ColorPalette :colors="colors" />

    </div>
</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import { ref } from "vue";
import ColorDetector from '../components/ColorDetector.vue'
import ColorPalette from '../components/ColorPalette.vue'


const colors = ref([])

function onDetect(cls)
{
    colors.value = cls
}

</script>
