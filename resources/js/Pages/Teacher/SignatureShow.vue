<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { ref } from "vue";
import { Head } from '@inertiajs/vue3';
import SignatureHeader from './Partials/SignatureHeader.vue';
import SignatureTable from './Partials/SignatureTable.vue';
import EventModal from './Partials/EventModal.vue';


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

const typeModal = ref('');
const messageModal = ref('');
const show = ref(false);

const showEventModal = ({type, message}) => {
    typeModal.value = type;
    messageModal.value = message;
    console.log(message)
    show.value = true;
}

const close = () => {
    show.value = false;
}
</script>

<template>
    <Head title="Profesorado" />
    <AuthenticatedLayout :croute="customroute">
        <div class="mx-auto">
            <signature-header class="mb-5" @error="showEventModal"></signature-header>
            <signature-table class="mb-3" :signatures="signatures"></signature-table>
            <event-modal :type="typeModal" :message="messageModal" :show="show" @close="close()"></event-modal>
        </div>
    </AuthenticatedLayout>
</template>

<style scoped>

</style>