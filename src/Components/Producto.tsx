import { AddCartBtn } from './AddCartBtn';
import React, { useState } from 'react';
import Modal from 'react-modal';
import './Producto.css';

const Producto = (props: any) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    return (
        <div className='producto'>
            <img className='product__img' src={props.foto} alt={props.nombre} onClick={openModal} />
            <h2 className='product__name'>{props.nombre}</h2>
            <div className="btnVer">
                <button onClick={openModal}>
                    Ver Receta
                </button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Detalles del producto">
                <h3 className='H3Modal'>Ingredientes:</h3>
                <p className='product__ingredients'>{props.ingredientes}</p>
                <h3 className='H3Modal'>Instrucciones:</h3>
                <p className='product__instructions'>{props.instrucciones}</p>
                <div className='divBtn'><button className='btnModal' onClick={closeModal}>Cerrar</button></div>
            </Modal>
            <div className='product__btn'><AddCartBtn /></div>

        </div>
    )
}

export { Producto }