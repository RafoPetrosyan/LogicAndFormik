import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogicMiddleware } from "redux-logic";
import { logics } from "./logics";
import reducers from './reducers/index';
import apiClient from "../services/apiClient";

const dips = { apiClient };
const logicMiddleware = createLogicMiddleware(logics, dips);

export const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(logicMiddleware)
));