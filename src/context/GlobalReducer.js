import React, { useReducer } from 'react'

export default function (reducer, actions, initialValue) {
    //Context
    const Context = React.createContext();
    //Provider
    const Provider = ({ children }) => {
        //reducer
        const [state, dispatch] = useReducer(reducer, initialValue);
        //loop all actions
        const boundActions = {}
        for(let key in actions) {
            boundActions[key] = actions[key](dispatch)
        }
        //pass all actions and state globally
        return (
            <Context.Provider value={{ ...boundActions, state }}>
                {children}
            </Context.Provider>
        )
    }

    return {Context, Provider}
}