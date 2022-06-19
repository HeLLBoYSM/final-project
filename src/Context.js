import React from "react";



const initialState = {
    users: [],
    logedIn: false
}

const reducer = (state, action) => {

    switch (action.code) {
        case "ADD-USER":
            return ({ ...state, users: [...state.users, action.payload] })

        case "LOGIN-USER":
            console.log(state , action) // verifica consola pentru if-ul de aici
            return({...state,logedIn:true})
                
            

        default :
        return state
    }

}

const Context = React.createContext()
const Provider = (props) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return <Context.Provider value={{ state, dispatch }}>{props.children}</Context.Provider>
}
export {Context , Provider, }