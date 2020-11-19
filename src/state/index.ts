import { atom } from 'recoil'

export const orderState = atom({
  key: 'order',
  default: {
    price: 0,
    qtdConsults: 0,
  },
})
