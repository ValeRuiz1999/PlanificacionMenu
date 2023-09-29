import { useEffect, useState } from 'react';
import './App.scss';
import { Producto } from './Components/Producto';
import { RecetasContainer } from './Components/RecetasContainer';
import data from './Datos.json';
import Modal from 'react-modal';

interface Ingrediente {
  id: number;
  nombre: string;
  foto: string;
  cantidad_disponible: number;
}
function App() {
  const [ingredientes, setIngredientes] = useState<Ingrediente[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ ingredientes: '', instrucciones: '' });

  useEffect(() => {
    const obtenerIngredientes = async () => {
      try {
        setIngredientes(data.ingredientes);
      } catch (error) {
        console.error("Error al obtener los ingredientes", error);
      }
    };
    obtenerIngredientes();
  }, []);

  const openModal = (ingredientes: string, instrucciones: string) => {
    setModalContent({ ingredientes, instrucciones });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <RecetasContainer>
        {data.recetas.map((product) => {
          const ingredientesReceta = product.ingredientes.map((idIngrediente) => { const ingrediente = ingredientes.find((ingrediente) => ingrediente.id === idIngrediente); return ingrediente?.nombre || ''; });
          const ingredienteSeparado = ingredientesReceta.join(', ');
          return (<Producto
            key={product.id}
            nombre={product.nombre}
            ingredientes={ingredienteSeparado}
            instrucciones={product.instrucciones}
            foto={product.foto}
            onOpenModal={() => openModal(ingredienteSeparado, product.instrucciones)}
          />);
        })}
      </RecetasContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="VerReceta" >
        <h2>Ingredientes:</h2>
        <p>{modalContent.ingredientes}</p>
        <h2>Instrucciones</h2>
        <p>{modalContent.instrucciones}</p>
        <button onClick={closeModal}>Cerrar</button>
      </Modal>

    </>
  );
}


export default App;
