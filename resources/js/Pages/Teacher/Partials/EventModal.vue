<script setup>
import Modal from '@/Components/Modal.vue';
const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        default: "error",
    },
    message: {
        type: String,
        default: 'Ocurrió un error.'
    }
});
const emit = defineEmits(['close']);
const getIconPath = (type) => {
  const iconPaths = {
    "error": '@/assets/icon_error.svg',
    "success": '@/assets/icon_success.svg',
  };

  return iconPaths[type] || '';
};

const close = () => {
    emit("close");
}

</script>

<template>
    <modal :show="show" @close="close" maxWidth="md">
        <section class="content">
            <img src="@/assets/icon_error.svg" v-if="type == 'error'" alt="">
            <img src="@/assets/icon_success.svg" v-if="type == 'success'" alt="">
            <h3 class="title mb-0">{{ message }}</h3>
        </section>
    </modal>
</template>

<style scoped>
.content{
    display: flex;
    padding: 61px 54px 60px 55px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 19px;
}
.title {
    color: #3C7FF8;
    text-align: center;
    font-size: 22px;
    font-weight: 600;
    line-height: 29.618px;
}

</style>