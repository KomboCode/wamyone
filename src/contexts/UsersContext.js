import { createContext } from "react";

export const UsersContext = createContext();



export const UsersContextProvider = ({ children }) => {

    // const [ login, setLogin ] = useState(false);
    const login = false;

    return (
        <UsersContext.Provider
        value={{
            login
        }}
        >{children}</UsersContext.Provider>
    )
}