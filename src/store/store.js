import { configureStore } from "@reduxjs/toolkit";
// import crudReducer from "./reducers/CrudSilce";
// import againReducer from "./reducers/AgainCrudSlice";
import todoReducer from "./reducers/TodoSlice";

const store = configureStore({
  // reducer: crudReducer,
  // reducer: againReducer,

  reducer: todoReducer,
});

export default store;
