import * as actionTypes from "../actionTypes/actionTypes";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.DNI:
      return {
        ...state,
        DNI: payload,
      };
    case actionTypes.PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: payload,
      };
    case actionTypes.PAYMENT_PROMISE_DATE:
      return {
        ...state,
        paymentPromiseDate: payload,
      };
    case actionTypes.RESET_STATE:
      return {
        DNI: "",
        paymentMethod: "",
        paymentPromiseDate: "",
      };
    default:
      return state;
  }
};

export default reducer;
