'use client';
import Image from "next/image";
import FInicioSesion from "../subcomponents/FInicioSesion";
import FRecurperarC from "../subcomponents/FRecurperarC";
import { useState } from "react";
import Confirmado from "../subcomponents/Confirmado";
import { useEffect } from "react";

export let SetIsRecovering;
export let SetIsConfirmado;
export default function MainLogin() {

    const [isRecovering, setIsRecovering] = useState(false);
    const [isConfirmado, setIsConfirmado] = useState(false);
    const [Element, setElement] = useState(<FInicioSesion />);
    SetIsRecovering = setIsRecovering;
    SetIsConfirmado = setIsConfirmado;

    useEffect(() => {
        if(isRecovering && !isConfirmado) {
            setElement(<FRecurperarC />);
        } else if(isConfirmado) {
            setElement(<Confirmado />);
        } else {
            setElement(<FInicioSesion />);
        }
    }, [isRecovering, isConfirmado]);

  return (
    <main className="relative flex justify-center items-center w-full h-screen">
        <div className="relative w-full h-full border-2">
            <Image
             src={'https://i.pinimg.com/736x/1b/3f/ad/1b3fad548ea401cd660ff8da9783bf86.jpg'} 
             alt={'Imagen de fondo'} 
             fill //Ayuda a que la imagen ocupe todo el espacio
             style={{objectFit: 'cover'}}
             priority //Ayuda a que la imagen se cargue antes de que se renderice el componente
            />
        </div>
        <section className="absolute w-full backdrop-blur-xl bg-blue-800/50 h-full z-10 border-2 flex justify-center items-center">
           {Element}
        </section>
    </main>
  )
}
