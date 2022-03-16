import { createStore } from "redux";
import {mainReducer} from "./reduxs";

export const store = createStore(mainReducer)