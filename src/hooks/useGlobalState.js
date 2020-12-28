import {
  useReducer, createContext, useEffect, useCallback,
} from 'react';

export const context = createContext(null);
const init = () => ({

});
const SET_ALPHA_VANTAGE_API_KEY = 'SET_ALPHA_VANTAGE_API_KEY';
const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_ALPHA_VANTAGE_API_KEY:
      return {
        ...state,
        alphaVantageAPIKey: payload.key,
        isFromStorage: payload.isFromStorage,
      };
    default:
      return state;
  }
};
const LOCAL_STORAGE_KEY = 'alphaVantageAPIKey';
const useGlobalState = () => {
  const [state, dispatch] = useReducer(reducer, undefined, init);
  const setAlphaVantageAPIKey = useCallback(
    (key, isFromStorage = false) => dispatch({
      type: SET_ALPHA_VANTAGE_API_KEY,
      payload: { key, isFromStorage },
    }),
    [dispatch],
  );
  useEffect(() => {
    const alphaVantageAPIKey = localStorage?.getItem(LOCAL_STORAGE_KEY);
    if (alphaVantageAPIKey) {
      setAlphaVantageAPIKey(alphaVantageAPIKey, true);
    }
  }, []);
  useEffect(() => {
    if (!state.isFromStorage) {
      localStorage?.setItem(LOCAL_STORAGE_KEY, state.alphaVantageAPIKey);
    }
  }, [state.alphaVantageAPIKey]);
  return {
    // Value
    alphaVantageAPIKey: state.alphaVantageAPIKey,

    // Actions
    setAlphaVantageAPIKey,
  };
};
export default useGlobalState;