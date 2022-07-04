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
            const user = action.payload
            const logedIn = !!state.users.find(({ username, password }) =>
                username === user.username && password === user.password)
            return ({ ...state, logedIn })
            // return ({ ...state, logedIn: true })



        default:
            return state
    }

}

const Context = React.createContext()
const Provider = (props) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return <Context.Provider value={{ state, dispatch }}>{props.children}</Context.Provider>
}
export { Context, Provider, }