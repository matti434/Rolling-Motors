import ModalBase from "../shared/ModalBase"

export default function modalLogin({isOpen , onClose}){
  return (
    <ModalBase  isOpen={isOpen} onClose={onClose}>
     <h2>Login</h2>
     
    </ModalBase>
  )
}
