export const formatDate = ({ date, format }) => {
  const inputDate = getDateObject(date);
  if (isNaN(inputDate.getTime())) {
    return 'Fecha inválida';
  }

  const formatFunctions = new Map([
    ['short', formatShort],
    ['long', formatLong],
  ]);
  if (formatFunctions.has(format.toLowerCase())) {
    return formatFunctions.get(format.toLowerCase())(inputDate);
  } else {
    return 'Formato no válido';
  }
};

const formatLong = (date) => {
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const monthName = months[month];
  return `${day} ${monthName} ${year}`;
}

const formatShort = (date) => {
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${day}/${month}/${year}`;
}


const getDateObject = (input) => {
  if (!input) {
    return new Date();
  }

  if (typeof input === 'string') {
    const [year, month, day] = input.split('-').map(Number);
    if (!isNaN(year) && !isNaN(month) && !isNaN(day)) {
      return new Date(year, month - 1, day);
    }
  }

  if (input instanceof Date) {
    return input;
  }

  return new Date();
}