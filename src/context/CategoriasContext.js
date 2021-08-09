

import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const CategoriasContext = createContext();

// Provider es donde se encuentran las funciones y state

const CategoriasProvider = (props) => {

    const [categorias, guardarCategorias] = useState([]); 

    useEffect(() => {
        const obtenercategorias = async() => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categorias = await axios.get(url);

            guardarCategorias(categorias.data.drinks);
        } 
        obtenercategorias();
    }, []);

    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}


export default CategoriasProvider;