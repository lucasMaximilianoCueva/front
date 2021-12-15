import React, { createContext, useEffect, useState } from 'react'


export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [dataUser, setDataUser] = useState([]);
    const [authUser, setAuthUser] = useState(false);

    const logOut = () => {
        fetch("/api/logout", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => {
            setAuthUser(false)
        });
    };

    useEffect(() => {
        fetch("/api/getuser")
            .then((res) => res.json())
            .then((res) => {
                setDataUser(res);
            })
            .catch((err) => {
            console.log(`error: ${err}`);
            });
    }, []);
   



    return (
        <UserContext.Provider value={{
            dataUser,
            authUser,
            setAuthUser,
            logOut
        }}>
            {children}
        </UserContext.Provider>
    )
}