import { useState } from 'react'
import SocialButton from './SocialButtonn'
import Formulario from './Formulario'
import Alert from './Alert'

const Registro = () => {
// Creamos un useState para llamar el Alert
  const [alert, setError] = useState({ error: '', msj: '', color: '' })
  const iconoFa = '../../src/assets/icon/facebook.png'
  const iconoGi = '../../src/assets/icon/github.png'
  const iconoLi = '../../src/assets/icon/linkedin.png'

  return (
    <>
      <SocialButton social={iconoFa} />
      <SocialButton social={iconoGi} />
      <SocialButton social={iconoLi} />
      <p>O usa tu email para registrate</p>
      <Formulario setAlert={setError} />
      {alert.msj && <Alert color={alert.color}>{alert.msj}</Alert>}
    </>
  )
}

export default Registro
