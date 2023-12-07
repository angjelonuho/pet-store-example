import './AppText.css'

const AppText = ({ children, variant, color, align }) => {
  const style = {
    color: color,
    textAlign: align
  }

  return <p className={variant} style={style}>{children}</p>
}

export default AppText;