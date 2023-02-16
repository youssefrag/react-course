// import { compose, createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
// import createSagaMiddleware from "redux-saga";

// import { rootSaga } from "../store/root-saga";

import { rootReducer } from "./root-reducer";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["cart"],
// };

// const sagaMiddleWare = createSagaMiddleware();

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);

// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer: rootReducer,
  // middleware: middleWares,
});

// sagaMiddleWare.run(rootSaga);

// export const persistor = persistStore(store);
