'use client';
import { SetIsRecovering } from "../components/Main - Login";
import { useState } from "react";
import useRecuperarC from "../func/useRecuperarC";
import { CiCircleAlert } from "react-icons/ci";

export default function FRecurperarC() {

    const {Status, email, setEmail, RecuperarC} = useRecuperarC();

  return (
    <form onSubmit={(event) =>{event.preventDefault();}} className="flex flex-col justify-between gap-10 border w-90  border-gray-300 rounded-3xl shadow-lg p-5 bg-white">
        <div className="flex flex-col items-center">
            <span className="text-blue-900 text-base font-bold">Olvidaste tu contraseña?</span>
        </div>
        <div className="flex flex-col gap-2">
            <label className="text-gray-500 " htmlFor="">Introduzca su correo electrónico</label>
            <input className={`border  rounded-md h-15 px-2 outline-none ${Status ? ' border-gray-300 text-gray-600' : 'border-2 border-red-500 text-red-500 bg-red-50'}`} 
            value={email} 
            onChange={(event) => (setEmail(event.target.value))} 
            type="email" 
            placeholder="Cual es su correo electrónico" 
            required
            />
            <p className={`text-sm font-semibold w-[80%] ${Status ? 'text-gray-500' : 'text-red-500'}`}>
                {Status ? 'Enviaremos un enlace de recuperación a su correo electrónico' : <div className="flex items-center gap-2">
                    <CiCircleAlert className="text-red-500 text-2xl" />Este correo no esta registrado</div>}
            </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
            <button 
            onClick={() => (RecuperarC({email:email}))} 
            className="bg-blue-900 text-white p-2 rounded-full w-60 cursor-pointer hover:bg-blue-900/80 transition-all duration-300"
            >Recuperar contraseña</button>
            <button className="text-gray-500 cursor-pointer hover:text-blue-900 transition-all duration-300" onClick={() => (SetIsRecovering(false))}>Volver a inicio de sesión</button>
        </div>
    </form>
  )
}
