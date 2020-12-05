import { createContext } from 'react';

const Context = createContext({
    DNI:'',
    paymentMethod:'',
    paymentPromiseDate:''
});

export default Context;