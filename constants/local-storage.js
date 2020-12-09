
export const getLocalStorageValues = () => {
  const Window = typeof window !== "undefined";
  let Dni = Window ? localStorage.getItem("DNI") : '';
  let PaymentMethod = Window ? JSON.parse(localStorage.getItem("PaymentMethod")) : {};
  let PaymentPromiseDate = Window ? localStorage.getItem("PaymentPromiseDate") : '';
  
  return {
    Dni,
    PaymentMethod,
    PaymentPromiseDate
  };
};
