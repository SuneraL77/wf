import { combineReducers, configureStore} from "@reduxjs/toolkit";
import {persistReducer ,persistStore}from "redux-persist";
import createFilter from 'redux-persist-transform-filter';
import storage from "redux-persist/lib/storage";
import userSlice from "./features/userSlice";
import chatSlice from "./features/chatSlice";

//saveUserOnlyFilter
const saveUserOnlyFilter = createFilter('user',["user"])

//presist config

const persistConfig = {
key:'user',
storage,
whitelist:["user"],
transforms:[saveUserOnlyFilter]
}

const rootReducer = combineReducers({
    user:userSlice,
    chat:chatSlice,
});
const presistedReducer =persistReducer(persistConfig,rootReducer)

export const  store = configureStore({
    reducer:presistedReducer,
    middleware:(getDefaultMiddleware)  =>
        getDefaultMiddleware({
            serializableCheck:false
        }),
        
    
    devTools:true,
})

export const persistor = persistStore(store)

