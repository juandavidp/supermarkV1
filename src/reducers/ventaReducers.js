import { types } from "../types/types";

export const ventaReducers = (state = {}, action) => {
  switch (action.type) {
    case types.ventaAdd:
      return {};

    case types.ventaRead:
      return {
        ...state,
        ventaData: action.payload,
      };

    default:
      return state;
  }
};
