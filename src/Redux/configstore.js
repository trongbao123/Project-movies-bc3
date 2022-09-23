import { combineReducers, createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import {CarouselReducer} from './Reducer/CarouselReducer';
import {QuanLyPhimReducer} from './Reducer/QuanLyPhimReducer';
import { QuanLyRapReducer } from "./Reducer/QuanLyRapRrducer"; 
import { QLNDReducer } from "./Reducer/QuanLyNDReducer"; 
import { QuanLyDatVeReducer } from "./Reducer/QuanLydatveReducer";
import { loadingRducer } from "./Reducer/checkloading"; 
const RootReducer = combineReducers({
    CarouselReducer,
    QuanLyPhimReducer,
    QuanLyRapReducer,
    QLNDReducer,
    QuanLyDatVeReducer,
    loadingRducer,
})

export const store = createStore(RootReducer,applyMiddleware(thunk))
