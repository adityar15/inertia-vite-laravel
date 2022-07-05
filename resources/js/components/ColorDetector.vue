<template>
    <div class="h-48">
        <div>
            <form @submit.prevent="process">
                <input
                    type="file"
                    @change="form.image = $event.target.files[0]"
                />
                <button
                    class="px-4 py-2 bg-slate-900 text-white rounded-md font-semibold shadow"
                >
                    Process
                </button>
                <span class="text-red-300" v-if="form.errors.image">{{
                    form.errors.image
                }}</span>
            </form>
        </div>

        <div class="h-24 w-24" v-if="colors.length > 0">
            <img :src="img" class="h-full w-full" />
        </div>
    </div>
</template>


<script setup>
import { useForm } from "@inertiajs/inertia-vue3";
import { ref } from "vue";
const form = useForm({
    image: null,
});

const emit = defineEmits(['detected'])

const colors = ref([]);
const img = ref("");

function process() {
    img.value = URL.createObjectURL(form.image);
    form.post("/process", {
        onSuccess: (data) => {
            console.log("data", data);
            form.errors.image =""
            colors.value = data.props.colors
            emit('detected', colors.value)
        },
    });
}
</script>