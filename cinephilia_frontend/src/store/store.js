import { combineReducers, createStore } from "redux";
import Searchreducer from "../reducers/seachreducer";
import Ratestars from "../reducers/Startsrate-reducer";
import Platformaccess from "../reducers/acess_reducer"
import Transfertdbdatastore from "../reducers/dbdata_store_reducer"
import Selectsearch from "../reducers/select_search_reducer"
const rootReducer = combineReducers({Searchreducer,Ratestars ,Platformaccess ,Transfertdbdatastore,Selectsearch})

const store = createStore (rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) ;

export default store;