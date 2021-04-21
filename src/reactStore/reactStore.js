import React, { createContext, useReducer, useContext } from 'react';

const basketState = {
    basket: [],
}

export const basketActions = {
    addItem: (state, item) => ({
        basket: [...state.basket, {...item}],   
    })
}

const initialState = {
    ...basketState,
};

const StoreContext = createContext(initialState);

export const useStore = store => {
    const { state, dispatch } = useContext(StoreContext);
    return { state, dispatch };
};

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};

const Actions = {
    ...basketActions,
};

const reducer = (state, action) => {
  const act = Actions[action.type];
  const update = act(state);
  return { ...state, ...update };
};