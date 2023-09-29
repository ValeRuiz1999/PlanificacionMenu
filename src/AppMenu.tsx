import { useEffect, useState } from 'react';
import './App.scss';
import { Menu } from './Components/Menu';
import { MenuContainer } from './Components/RecetasContainer';
import data from './Datos.json';

interface Receta {
    id: number;
    nombre: string;
    ingredientes: number[];
    instrucciones: string;
    foto: string;
}
function AppMenu() {
    const [recetas, setRecetas] = useState<Receta[]>([]);
    useEffect(() => {
        const obtenerPlatos = async () => {
            try {
                setRecetas(data.recetas);
            } catch (error) {
                console.error("Error al obtener los datos", error);
            }
        };
        obtenerPlatos();
    }, []);
    return (
        <>
            <MenuContainer>
                {data.menus.map((menu) => {
                    const platos = menu.platos.map((receta_id) => { const receta = data.recetas.find((receta) => receta.id === receta_id.receta_id); const porciones = receta_id.porciones; return { nombre: receta?.nombre || '', porciones: porciones }; });
                    return (<Menu
                        key={menu.id}
                        nombre={menu.nombre}
                        descripcion={menu.descripcion}
                        platos={platos}
                    />);
                })}
            </MenuContainer>
        </>
    )
}
export { AppMenu };
