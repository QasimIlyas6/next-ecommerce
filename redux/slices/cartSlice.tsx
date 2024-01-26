import { createSlice } from "@reduxjs/toolkit";

const initialState: ProductProps[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {id, title, price, description, image, category} = action.payload;
      const itemExist = state.find((item) => item.id === id)
      if(itemExist) {
        itemExist.qty += 1
      } else {
        state.push({id, title, price, description, image, category, qty : 1});
      }
      
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      return state.filter((item) => item.id !== itemId);
    },

    increaseQuantity: (state, action) => {
        const itemId = action.payload;
        const isExist = state.find(item => item.id === itemId)
        if(isExist) {
            isExist.qty += 1;
        }
    },

    decreaseQuantity: (state, action) => {
        const itemId = action.payload;
        const isExist = state.find(item => item.id === itemId)
        if(isExist) {
            if (isExist.qty === 1) {
                return state.filter((item) => item.id !== isExist.id)
            }
            isExist.qty -= 1;
        }
    },

    reSetCart: () => {
        return  []
    }
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, reSetCart } = cartSlice.actions;
export default cartSlice.reducer;
