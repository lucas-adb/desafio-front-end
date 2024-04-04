export function formatPhone(phone: string) {
  let newFormat = "+";

  for (let i = 0; i < phone.length; i += 1) {
    if (i === 2) {
      newFormat += " (";
    } else if (i === 4) {
      newFormat += ") ";
    } else if (i === 9) {
      newFormat += "-";
    }

    newFormat += phone[i];
  }

  return newFormat;
}

export function formatDate(date: string) {
  const data = new Date(date);
  const newFormatData = data.toLocaleDateString("pt-BR");

  return newFormatData;
}

export function removeAccents(str: string) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
