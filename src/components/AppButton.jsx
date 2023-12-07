// TODO: finish styling and prop logic
import './AppButton.css'

const AppButton = ({ onclick, label, variant }) => {

  return (
    <button className='button' onClick={onClick}>
      {label}
    </button>
  )
}

export default AppButton;