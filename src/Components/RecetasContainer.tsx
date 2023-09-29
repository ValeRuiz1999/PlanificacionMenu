import './RecetasContainer.css'

const RecetasContainer = (props: any) => {
  return (
    <section className="products__section">
        <h3 className="products__title">Nuestras Recetas:</h3>
        <div className="products__container">
            {props.children}
        </div>
    </section>
  )
}

const MenuContainer = (props: any) => {
  return (
    <section className='menu__section'>
      <h3 className='menu__title'>Nuestros Menus:</h3>
      <div className='menu__container'>
        {props.children}
      </div>
    </section>
  )
}

export {RecetasContainer, MenuContainer}