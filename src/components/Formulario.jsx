import { useState } from 'react'

const Formulario = ({ setAlert }) => {
/* 1. Creamos las varibales de los estados */
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')
  /*  2. Creamos las funciones */
  // Función para validar el formulario Crearemos la función que se encargará de enviar el formulario
  const nombreInput = (e) => setNombre(e.target.value)
  const emailInput = (e) => setEmail(e.target.value)
  const passowrdInput = (e) => setPassword(e.target.value)
  const confPasswordInput = (e) => setConfPassword(e.target.value)
  // const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    // Agregamos esta linea que se encarga de guardar todos los caracteres para el email
    const caracteresAceptados = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    e.preventDefault() // lo que hace es que no haga lo que realmente hace es enviar un formulario
    if (password !== confPassword) {
      setAlert({
        mensaje: 'Las contraseñas no coinciden',
        color: 'danger'
      })
      // window.alert('Los datos No coinciden, favor validar')
      return
    }
    // si emailPattern es distinto
    if (!caracteresAceptados.test(email)) {
      setAlert({
        mensaje: 'Por favor, introduce un correo electrónico válido',
        color: 'danger'
      })
      // window.alert('Por favor, introduce un correo electrónico válido.')
      return
    }
    setAlert({ error: false, msj: 'Se ha enviado correctamente  el formulario', color: 'success' })
    setNombre('')
    setEmail('')
    setPassword('')
    setConfPassword('')
    // window.alert('Se ha enviado correctamente  el formulario')
  }
  return (
    <>
      <form className='formulario' onSubmit={handleSubmit}>
        <div className='form-group'>
          <input type='text' name='nombre' className='form-control' value={nombre} onChange={nombreInput} placeholder='Nombre' />
        </div>
        <div className='form-group'>
          <input type='text' name='email' className='form-control' value={email} onChange={emailInput} placeholder='tuemail@ejemplo.com' />
        </div>
        <div className='form-group'>
          <input type='text' name='password' className='form-control' value={password} onChange={passowrdInput} placeholder='Contraseña' />
        </div>
        <div className='form-group'>
          <input type='text' name='conf-password' className='form-control' value={confPassword} onChange={confPasswordInput} placeholder='Confirmar tu contraseña' />
        </div>
        <button type='submit' className='btn btn-success btn-large'>Registrarse</button>
      </form>
    </>
  )
}

export default Formulario
