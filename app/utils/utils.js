export const extractItemsFromList = str => {
  if (!import.meta.client || !str) return;
  const temp = document.createElement('div');
  temp.innerHTML = str;
  return Array.from(temp.querySelectorAll('li')).map(li => li.textContent.trim());
};
export const objectToFormData = data => {
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }
  return formData;
};
