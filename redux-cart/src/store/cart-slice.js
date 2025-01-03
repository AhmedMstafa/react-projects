import { createSlice } from '@reduxjs/toolkit';

function addItemToCart(state, action) {
  state.changed = true;
  const newItem = action.payload;
  const existingItem = state.items.find((item) => item.id === newItem.id);
  state.totalQuantity++;
  if (!existingItem) {
    state.items.push({
      id: newItem.id,
      price: newItem.price,
      quantity: 1,
      totalPrice: newItem.price,
      name: newItem.title,
    });
    return;
  }
  existingItem.quantity++;
  existingItem.totalPrice = existingItem.totalPrice + newItem.price;
}

function removeItemFromCart(state, action) {
  state.changed = true;
  const id = action.payload;
  const existingItem = state.items.find((item) => item.id === id);
  state.totalQuantity--;
  if (existingItem.quantity === 1) {
    state.items = state.items.filter((item) => item.id !== id);
    return;
  }
  existingItem.quantity--;
  existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
}

function replaceCart(state, action) {
  state.totalQuantity = action.payload.totalQuantity;
  state.items = action.payload.items;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceCart,
    addItemToCart,
    removeItemFromCart,
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
