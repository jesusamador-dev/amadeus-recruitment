<script setup>
import { formatDate } from "@/utils/dateFormatted";
import { ref } from "vue"; 

const props = defineProps({
    pendingAssistance: {
        type: Boolean,
        default: true,
    },
});
const pendingAssistance = ref(props.pendingAssistance);

const date = formatDate({ date: undefined, format: "long" });

const register = () => {
    pendingAssistance.value = true;

}
</script>

<template>
    <section class="row">
        <div class="col-4 mx-auto">
            <section class="flex flex-column justify-content-between h-100">
                <p class="fs-4 title">
                    <span class="fw-semibold">Docente/</span> Firma Jornada
                </p>
                <div>
                    <div
                        class="signature__assistence signature__assistence--pending mb-3"
                        v-if="pendingAssistance.value"
                    >
                        <p class="mb-0">Asistencia: Pendiente</p>
                    </div>
                    <div class="signature__date">
                        <p class="mb-0">
                            <i class="fa-light fa-calendar icon-size me-2"></i
                            >{{ date }}
                        </p>
                    </div>
                </div>
            </section>
        </div>
        <div class="col-4 mx-auto">
            <section class="flex flex-column align-items-center">
                <div class="circle-external mb-2" v-on:click="register()">
                    <div class="circle-internal flex justify-content-center align-items-center">
                        <img src="@/assets/icon_person_yellow.svg" v-if="pendingAssistance.value" alt="">
                        <img src="@/assets/icon_person_green.svg" v-if="!pendingAssistance.value" alt="">
                    </div>
                </div>
                <p v-if="pendingAssistance.value" class="signature__register mb-0">
                    REGISTRAR
                </p>
            </section>
        </div>
        <div class="col-4">
            <section class="flex flex-column justify-content-end h-100">
                <div
                    class="signature__hours flex flex-column align-items-center justify-content-center bg-white"
                    v-if="pendingAssistance.value"
                >
                    <h3 class="signature__hours-title">Total de horas</h3>
                    <h2 class="signature__hours-total mb-0">30h 40'</h2>
                </div>
                <div
                    class="signature__assistence signature__assistence--approved mb-0"
                    v-if="!pendingAssistance.value"
                >
                    <p class="mb-0">Asistencia: Presente</p>
                </div>
            </section>
        </div>
    </section>
</template>

<style scoped>
.title {
    color: #2b5db6;
}

.signature__assistence {
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 30px;
}

.signature__assistence p {
    text-align: center;
    font-weight: 500;
    line-height: 25px;
}

.signature__assistence--pending {
    border: 1px solid #f2a42e;
    color: #f2a42e;
}

.signature__assistence--approved {
    border: 1px solid #44a7ad;
    color: #44a7ad;
}

.signature__date {
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 30px;
    background: #fff;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
}

.signature__date p {
    color: #222038;
    text-align: center;
    font-weight: 600;
}

.circle-external {
    display: inline-flex;
    padding: 11.463px;
    flex-direction: column;
    align-items: flex-start;
    gap: 6.55px;
    border-radius: 81.878px;
    background: var(
        --Button-Base,
        linear-gradient(180deg, #e9e9e9 0%, #e9e9e9 0.01%, #fff 100%)
    );
    box-shadow: 0px 0px 3.2751px 0px rgba(0, 0, 0, 0.05) inset;
}

.circle-internal {
    width: 113px;
    height: 113px;
    border-radius: 81.878px;
    border: 9.825px solid var(--bevel-default, #fff);
    background: var(
        --surface-default,
        linear-gradient(180deg, #f4f4f4 0%, #fefefe 100%)
    );
    box-shadow: 0px 3.2751px 6.5502px 0px rgba(0, 0, 0, 0.2),
        0px 1.63755px 8.18776px 0px rgba(0, 0, 0, 0.1),
        0px 3.2751px 3.2751px 3.2751px rgba(0, 0, 0, 0.15),
        0px 0px 0.81878px 1.63755px rgba(0, 0, 0, 0.1);
}

.signature__register {
    color: #f2a42e;
    text-align: center;
    font-size: 25px;
    font-weight: 700;
    letter-spacing: 1.12px;
    text-transform: uppercase;
}

.signature__hours {
    width: 100%;
    height: 132px;
    flex-shrink: 0;
    border-radius: 30px;
    box-shadow: 0px 0px 8px 0px rgba(142, 142, 142, 0.3);
}

.signature__hours-title {
    color: #2b5db6;
    font-size: 16px;
    text-align: center;
    font-weight: 700;
    line-height: 150%;
}

.signature__hours-total {
    color: #222038;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    line-height: 38px; /* 126.667% */
    letter-spacing: -0.096px;
}
</style>
