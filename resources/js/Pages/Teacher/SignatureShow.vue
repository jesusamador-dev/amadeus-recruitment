<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import SignatureHeader from './Partials/SignatureHeader.vue';
import SignatureTable from './Partials/SignatureTable.vue';


const props = defineProps ({
    customroute: {
        type: String,
        default: () => "teacher.signature.show",
    },
    signatures: {
        type: Array,
        default: () => [],
    },
});

</script>

<template>
    <Head title="Profesorado" />
    <AuthenticatedLayout :croute="customroute">
        <div class="mx-auto">
            <signature-header class="mb-5"></signature-header>
            <signature-table class="mb-3" :signatures="signatures"></signature-table>
        </div>
    </AuthenticatedLayout>
</template>

<style scoped>

</style>