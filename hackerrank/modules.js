export const getName = (name) => name;

export const getSurname = (surname) => surname;

export default getFullname = (name, surname) =>
  `${getName(name)} ${getSurname(surname)}`;
