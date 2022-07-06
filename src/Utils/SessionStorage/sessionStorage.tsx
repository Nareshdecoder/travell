export const saveToSession = (label: any, data: any) => {
  const value = JSON.stringify(data);
  sessionStorage.setItem(label, value);
};
export const removeToSession = (label: any) => {
  sessionStorage.removeItem(label);
};
export const getFromSession = (label: any) => {
  return sessionStorage.getItem(label);
};
