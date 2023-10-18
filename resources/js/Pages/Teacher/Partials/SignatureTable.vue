<script setup>
const props = defineProps({
    signatures: {
        type: Array,
        default: () => [],
    },
});

const getStatusClass = (status) => {
    return {
        "status-pending": status === "peding",
        "status-approved": status === "present",
        "status-rejected": status === "absent",
    };
};

const getStatusName = (status) => {
    const names = {
        peding: "Pendiente",
        present: "Presente",
        absent: "Ausente",
    };
    return names[status];
};
</script>

<template>
    <section class="table-signatures">
        <div class="table-header">
            <div class="table-head">Fecha</div>
            <div class="table-head">Hora</div>
            <div class="table-head">Jornada laboral</div>
            <div class="table-head">Estatus</div>
            <div class="table-head">Editar</div>
        </div>
        <div class="table-body">
            <div
                class="table-row"
                v-for="signature in signatures"
                :key="signature.id"
            >
                <div class="table-cell">{{ signature.date }}</div>
                <div class="table-cell">{{ signature.hour }}</div>
                <div class="table-cell">
                    {{ signature.start_hour }} a {{ signature.end_hour }}
                </div>
                <div class="table-cell">
                    <span
                        class="dot"
                        :class="getStatusClass(signature.status)"
                    ></span
                    >{{ getStatusName(signature.status) }}
                </div>
                <div class="table-cell"></div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.table-header {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
}

.table-head {
    display: flex;
    align-items: center;
    justify-content: center;
}
.table-row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 100%;
    height: 53px;
    border-radius: 50px;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
    margin: 15px 0;
}

.table-cell {
    display: flex;
    align-items: center;
    justify-content: center;
}

.dot {
    height: 15px;
    width: 15px;
    border-radius: 100%;
    display: block;
    margin-right: 5px;
}

.status-pending {
    background: #f2a42e;
}
.status-approved {
    background: #44a7ad;
}
.status-rejected {
    background: #da0505;
}
</style>
