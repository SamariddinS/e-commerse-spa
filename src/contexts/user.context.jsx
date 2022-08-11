import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener, createUserDocFromAuth } from '../utils/firebase/firebase.utils';

// as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
          if (user) {
            createUserDocFromAuth(user);
          }
          setCurrentUser(user);
        });

        return unsubscribe;
      }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}