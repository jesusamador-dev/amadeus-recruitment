<script setup>
import Modal from '@/Components/Modal.vue';
import { useForm } from '@inertiajs/vue3';

const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
    id: {
        type: Number,
        default: 0,
    },
    date: {
        type: String,
        default: '',
    },
    hour: {
        type: String,
        default: '',
    },
});
const emit = defineEmits(['close', 'update']);

const form = useForm({
    id: props.id,
    date: props.date,
    hour: props.hour,
    reason: '',
    file: '',
});

const submit = () => {
    emit('update', form);
    emit('close')
};

const close = () => {
    emit("close");
}

</script>

<template>
    <modal :show="show" @close="close" maxWidth="md">
        <section class="content">
            <h2 class="title">Modificar Asistencia</h2>
            <form @submit.prevent="submit">
    
                <div class="mb-3">
                    <label for="date" class="form-label">Fecha:</label>
                    <input v-model="form.date" type="date-time" class="input-text form-input" id="date" placeholder="Fecha" required>
                </div>
    
                <div class="mb-3">
                    <label for="hour" class="form-label">Hora:</label>
                    <input v-model="form.hour" type="text" class="input-text form-input" id="hour" placeholder="Hora" required>
                </div>

                <div class="mb-3">
                    <label for="reason" class="form-label">Motivo de cambio:</label>
                    <textarea v-model="form.reason" rows="5" class="input-text form-textarea" id="reason" placeholder="Motivo de cambio / justificación" required></textarea>
                </div>

                <div class="mb-3">
                    <input v-model="form.file" type="text" class="input-text form-input btn-outline" id="reason" placeholder="Adjuntar archivo" required>
                </div>

                <div class="mb-3">
                    <button type="submit" class="btn btn-primary button">Solicitar</button>
                </div>
    
            </form>
        </section>
    </modal>

</template>

<style scoped>
.content{
    display: flex;
    padding: 60px 45px 60px 45px;
    flex-direction: column;
    justify-content: center;
    gap: 19px;
}

.form-input, .form-textarea {
    height: 40px;
    border-radius: 25px;
    border: 1px solid #2B5DB6;
    background: #FFF;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 25px; /* 156.25% */
}

.form-input::placeholder {
    color: #2B5DB6;
}

.form-textarea {
    height: auto;
}

.title {
    color: #3C7FF8;
    text-align: center;
    font-size: 23px;
    font-weight: 600;
    line-height: 150%;
}

.form-label {
    color: #222038;
    font-weight: 500;
    line-height: 19.2px;
    letter-spacing: -0.096px;
}

.button {
    width: 100%;
    border-radius: 50px;
}

</style>