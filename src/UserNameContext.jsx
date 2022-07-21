import React, {createContext, useContext} from 'react';

const UserContext = createContext(null)

export default function UserNameContext() {
    return (
        <div>
            <UserContext.Provider value={"hallo context hook"}>
                {value}
            </UserContext.Provider>
        </div>
    )
}
