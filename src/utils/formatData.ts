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
