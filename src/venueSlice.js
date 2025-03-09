// venueSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const venueSlice = createSlice({
  name: "venue",
  initialState: [
    {
      img: "https://ctfassets.imgix.net/vh7r69kgcki3/5phwOmStTrYAo2zQZ7qZxQ/924ebcc01fb9d5502b686527a785bad0/20201008-199WaterSt-2_v1-scaled.jpg?auto=format%20compress&fit=crop&q=50&w=1000&h=563",
      name: "Conference Room (Capacity:15)",
      cost: 3500,
      quantity: 0,
    },
    {
      img: "https://p.turbosquid.com/ts-thumb/Sv/RgKJpZ/H3/onizleqa/jpg/1610541926/600x600/fit_q87/81a78c99651a1c68e900b883d4e19404ab135f00/onizleqa.jpg",
      name: "Auditorium Hall (Capacity:200)",
      cost: 5500,
      quantity: 0,
    },
    {
      img: "https://moody.utexas.edu/sites/default/files/2021-09/bmc5102_6125_2015_main.jpeg",
      name: "Presentation Room (Capacity:50)",
      cost: 700,
      quantity: 0,
    },
    {
      img: "https://ak1.ostkcdn.com/images/products/is/images/direct/345e5530339db147183edbd821ad608ee9866217/8FT-Conference-Table%2C-Large-Meeting-Table-for-10-People%2C-Easy-Assembly.jpg?imwidth=714&impolicy=medium&carousel=true",
      name: "Large Meeting Room (Capacity:10)",
      cost: 900,
      quantity: 0,
    },
    {
      img: "https://static.giggster.com/images/location/ef689a8d-dc16-45ea-87eb-ef0f94b4e4d8/25319a11-1e61-47b8-b0c8-a0d333e1553c/mid_x3.jpeg",
      name: "Small Meeting Room (Capacity:5)",
      cost: 1100,
      quantity: 0,
    },
  
  ],
  reducers: {
   
    incrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        if (state[index].name === " Auditorium Hall (Capacity:200)" && state[index].quantity >= 3) {
          return;        }
        state[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = venueSlice.actions;
export default venueSlice.reducer;