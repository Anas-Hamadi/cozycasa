import { combineReducers } from "redux";
import { allRoomsReducer, RoomDetailsReducer } from "./roomReducers";
import { authReducer } from "./userReducers";

const reducer = combineReducers({
  allRooms: allRoomsReducer,
  RoomDetails: RoomDetailsReducer,
  auth: authReducer,
});

export default reducer;