import { useState, useEffect, createContext } from "react";

import { getCategoriesDoc } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const catrgoryMap = await getCategoriesDoc();
            console.log(catrgoryMap);
            setCategoriesMap(catrgoryMap);
        }

        getCategoriesMap();
    }, []);

    const value = { categoriesMap };

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
}