const Alert = ({ mensaje, color }) => {
  return (
    <>
      <div className={`alert alert-${color} my-2`}>{mensaje}</div>
    </>
  )
}

export default Alert
