import { FaCheck } from "react-icons/fa6";
import { SetIsRecovering } from "../components/Main - Login";
import { SetIsConfirmado } from "../components/Main - Login";

export default function Confirmado() {

    const ReturnToLogin = () => {
        SetIsConfirmado(false);
        SetIsRecovering(false);
    };

  return (
    <article className="flex flex-col justify-between gap-10 bg-white border border-gray-300 w-90 rounded-3xl shadow-lg p-5"> 
        <div className="flex flex-col gap-2 items-center">
            <div className=" rounded-full h-20 w-20 flex justify-center items-center bg-green-500 p-2">
                <FaCheck className="text-white text-4xl" />
            </div>
            <div className="flex flex-col gap-2 items-center">
            <h2 className="text-gray-600 text-2xl text-center font-bold">Contraseña enviada</h2>
            <p className="text-gray-500 text-sm font-semibold w-[80%] text-center">
            Has autorizado  el restablecimiento de tu cuenta correctamente,
            enviamos un  correo electrónico con una contraseña temporal
            para iniciar sesión.
            </p>
            </div>
        </div>
        <div className="flex justify-center">
            <button onClick={() => (ReturnToLogin())} className="bg-blue-900 text-sm font-semibold text-white px-5 py-2 rounded-full  cursor-pointer hover:bg-blue-900/80 transition-all duration-300">Iniciar sesión</button>
        </div>
    </article>
  )
}
