import ModalBase from "../shared/ModalBase"

export default function modalLogin({isOpen , onClose}){
  return (
    <ModalBase isOpen={isOpen} onClose={onClose} title="Iniciar Sesión">
      <LoginForm onSuccess={onClose} /> 
      {/* onSuccess cierra el modal luego de logear */}
    </ModalBase>
  )
}
