// 'use client';
import { IoIosMore } from "react-icons/io";
import { PiWarningCircle } from "react-icons/pi";
import Link from "next/link";
import { LuPencilLine } from "react-icons/lu";
import { useState } from "react";

export default function ButtonsBodyTabla() {

  const Proveedor = ({contenido,Dcasos}) =>{
    return (
        <div className='flex items-center justify-between'>
            <span>{contenido}</span>
            <button >
                <PiWarningCircle className="text-xl text-gray-700"/>
            </button>
        </div>
      )
  };
  
  const Actualizacion = ({contenido,ID}) => {
    return (
        <div className='flex items-center justify-between'>
            <span>{contenido}</span>
            <Link href={{pathname:`${ID}`}} >
                <IoIosMore className="text-2xl"/>
            </Link>
        </div>
      )
  }
  const Menu = ({contenido}) => {
    return (
        <div className='flex items-center justify-between'>
            <span>{contenido}</span>
          <button  className="cursor-pointer" onClick={()=>{
          }}>
                <IoIosMore className="text-2xl"/>
          </button>
        </div>
      )
  };

  const Editar = ({contenido,Funcion}) => {
    return (
      <div className='flex items-center justify-between'>
            <span>{contenido}</span>
          <button  className="cursor-pointer" onClick={Funcion}>
                <LuPencilLine className="text-2xl text-gray-400 hover:text-gray-700 transition-all duration-300"/>
          </button>
      </div>
    )
  }

  return({
    Actualizacion,
    Proveedor,
    Menu,
    Editar
  })

};
