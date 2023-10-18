<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { computed } from 'vue';
import SignatureHeader from './Partials/SignatureHeader.vue'


const props = defineProps ({
    customroute: {
        type: String,
        default: () => "teacher.signature.show",
    },
    signatures: {
        type: Array,
        default: () => [],
    },
    pendingAssistance : {
        type: Boolean,
        default: true
    }
});

const getStatusClass = computed((status) => {
  return {
    'status-pending': status === 'peding',
    'status-approved': status === 'present',
    'status-rejected': status === 'absent',
  };
});
</script>

<template>
    <Head title="Profesorado" />

    <AuthenticatedLayout :croute="customroute">

        <div class="mx-auto">
            <signature-header></signature-header>
            <div v-for="signature in signatures" :key="signature.id">
                <div class="shadow-sm sm:rounded-lg amadeus-box">
                    <div class="p-5"> 
                        {{ signature.date }} {{ signature.hour }} {{ signature.start_hour }} {{ signature.end_hour }} {{ signature.status }} 
                    </div>
                </div>
            </div>
        </div>

    </AuthenticatedLayout>
</template>

<style scoped>
</style>