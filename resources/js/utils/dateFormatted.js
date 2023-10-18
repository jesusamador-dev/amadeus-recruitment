export const getDateFormatted = (day, month, year) => {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    if (!day || !month || !year) {
      const today = new Date();
      day = today.getDate();
      month = today.getMonth();
      year = today.getFullYear();
    }

    const monthName = months[month];
    return `${day} ${monthName} ${year}`;
};

