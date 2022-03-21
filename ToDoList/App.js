import React from "react";
import TodoList from "./Main/TodoList";
import { PersistGate } from "redux-persist/integration/react";
import reduxStore from './Main/Redux/store'
import { Provider } from "react-redux";
import { MessageBar } from "react-native-messages";

const app = () => {
  const {store,persistor} = reduxStore()
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TodoList/>
      </PersistGate>
    </Provider>
  )
}

export default app