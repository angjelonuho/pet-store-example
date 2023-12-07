import './AppNavBar.css'

const AppNavBar = () => {
  return (
    <header className='nav-bar' role='navigation'>
      <figure className='nav-figure'>
        <picture >
          <source media="(max-width: 767px)" srcSet="icons/pet-icon-small.svg" />
          <img src='icons/pet-icon.svg' alt='Logo' className='logo' />
        </picture>
      </figure>
    </header>
  )
}
export default AppNavBar