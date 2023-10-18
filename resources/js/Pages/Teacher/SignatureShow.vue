// Jesús Amador
/* 
Fue una prueba muy buena y entretenida aunque algo larga a mi parecer
Tuve algunos problemas con el manejo de los modales, no había documentación sobre eso en el readme o una wiki (recomiendo tenerla para el proyecto)
El manejo de las fechas decidí hacerlo sin librerías únicamente como experimento (JS sique siendo malo con las fechas)
Traté de usar buenas practicas en los commits, olvidé usar '#' pero dejo la recomendación (es más sencillo buscar por '#')
Igual me pareció muy buena, tardé más de lo planeado y creo se debío a mi falta de práctica últimamente
*/
<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { ref } from "vue";
import { Head } from '@inertiajs/vue3';
import SignatureHeader from './Partials/SignatureHeader.vue';
import SignatureTable from './Partials/SignatureTable.vue';
import EventModal from './Partials/EventModal.vue';
import EditSignatureModal from './Partials/EditSignatureModal.vue';


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
const signatureId = ref(0);
const dateModal = ref('');
const hourModal = ref('');
const showEvent = ref(false);
const showEditSignature = ref(false);

const showEventModal = ({type, message}) => {
    typeModal.value = type;
    messageModal.value = message;
    showEvent.value = true;
}

const closeEventModal = () => {
    showEvent.value = false;
}

const edit = ({ id, date, hour }) => {
    signatureId.value = id;
    dateModal.value = date;
    hourModal.value = hour;
    showEditSignature.value = true;
}

const closeEditSignature = () => {
    showEditSignature.value = false;
}

const submit = (form) => {
    typeModal.value = "success";
    messageModal.value = "¡Solicitud enviada! El equipo directivo revisará su caso.";
    showEvent.value = true;
}

</script>

<template>
    <Head title="Profesorado" />
    <AuthenticatedLayout :croute="customroute">
        <div class="mx-auto">
            <signature-header class="mb-5" @error="showEventModal"></signature-header>
            <signature-table class="mb-3" :signatures="signatures" @edit="edit"></signature-table>
            <event-modal :type="typeModal" :message="messageModal" :show="showEvent" @close="closeEventModal"></event-modal>
            <edit-signature-modal :id="signatureId" :date="dateModal" :hour="hourModal" :show="showEditSignature" @close="closeEditSignature" @update="submit"></edit-signature-modal>
        </div>
    </AuthenticatedLayout>
</template>

<style scoped>

</style>