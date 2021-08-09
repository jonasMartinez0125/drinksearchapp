import React, { useContext } from 'react'
import { RecetasContext } from '../context/RecetasContext';
import { Receta } from './Receta';

export const ListaRecetas = () => {

    const { recetas } = useContext(RecetasContext);

    return (
        <div className="row my-5">
            {
                recetas.map(receta => (
                    <Receta 
                        key={receta.idDrink}
                        receta={receta}
                    />  
                ))
            }
        </div>
    )
}
