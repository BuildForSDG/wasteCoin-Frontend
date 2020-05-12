import { PAGE_LOADING, PAGE_LOADED } from "./reducers/constant";


export const isLoading = () => ({
  type: PAGE_LOADING,
  payload: true
});

export const isLoaded = () => ({
  type: PAGE_LOADED,
  payload: false
});
