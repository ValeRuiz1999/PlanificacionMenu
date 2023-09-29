import './Menu.css';

const Menu = (props: any) => {
  return (
    <div className='menu'>
        <h2 className='menu__name'>{props.nombre}</h2>
        <p className='menu__description'>{props.descripcion}</p>
        <p className='menu__platos'>{props.platos}</p>
    </div>
  )
}

export {Menu}