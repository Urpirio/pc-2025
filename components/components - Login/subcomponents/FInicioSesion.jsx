'use client';
import Image from "next/image"; 
import Logo from '@/../public/Img/img - login/logo-2.png';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { SetIsRecovering } from "../components/Main - Login";
import { useState } from "react";

export default function FInicioSesion() {

    const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={(event)=>{event.preventDefault()}} className="flex flex-col justify-between gap-5 border w-90  border-gray-300 rounded-3xl shadow-lg p-5 bg-white">
       <div className="flex justify-center items-center">
        <Image className="object-contain w-50 h-20" src={Logo} alt={'Logo'} />
       </div>
        <div className="flex flex-col gap-2">
            <label className="text-gray-500" htmlFor="">Nombre de usuario</label>
            <input className="text-gray-600 border border-gray-100 rounded-md h-15 px-2 outline-none" type="text" placeholder="Selecciona una opción" />
        </div>
        <div className="flex flex-col gap-2">
            <label className="text-gray-500" htmlFor="">Contraseña</label>
            <div className="flex items-center justify-between border border-gray-100 rounded-md h-15 px-2">
            <input className="text-gray-600 w-full h-full outline-none" type={showPassword ? "text" : "password"} placeholder="Ingrese su contraseña" />
            <button onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash className="text-2xl text-gray-500" /> : <FaEye className="text-2xl text-gray-500" />}</button>
            </div>
        </div>
        <div className="flex flex-col items-center gap-2">
            <button type="submit" className="bg-blue-900 text-white p-2 rounded-full w-50 cursor-pointer hover:bg-blue-900/80 transition-all duration-300">Iniciar sesión</button>
        </div>
        <div className="flex flex-col gap-2">
            <button className="text-gray-500 cursor-pointer hover:text-blue-900 transition-all duration-300" onClick={() => (SetIsRecovering(true))}>¿Olvidó su contraseña?</button>
        </div>
    </form>
  )
}
