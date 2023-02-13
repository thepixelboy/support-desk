import authReducer from "../features/auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "../features/tickets/ticketSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tickets: ticketReducer,
  },
});
