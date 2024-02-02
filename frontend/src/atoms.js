import { atom } from "recoil";

export const productAtom = atom({
  key: "productAtom",
  default: null,
});

export const variableAtom = atom({
  key: "variableAtom",
  default: {
    categories: [],
    minPrice: 0,
    maxPrice: 50,
  },
});

export const modalAtom = atom({
  key: "modalAtom",
  default: "",
});

export const loggedInAtom = atom({
  key: "loggedInAtom",
  default: false,
});

export const signupAtom = atom({
  key: "signupAtom",
  default: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: {
      houseNumber: "",
      lane: "",
      landmark: "",
      state: "",
      country: "",
      pin: "",
    },
    payment: {
      cardNumber: "",
      validTo: "",
      cvv: "",
    },
  },
});
