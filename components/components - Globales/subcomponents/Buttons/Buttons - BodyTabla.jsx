// 'use client';
import { IoIosMore } from "react-icons/io";
import { PiWarningCircle } from "react-icons/pi";
import Link from "next/link";
import { LuPencilLine } from "react-icons/lu";
import { useState } from "react";
import { TieredMenu } from "primereact/tieredmenu";
import { Button } from "primereact/button";
import { useRef } from "react";




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

    const Menu = useRef(null)

    const Items = [
      {
        label: 'Ver detalles',
        command: ()=>{
          window.location.href = ID;
        }
      },
    ]



    return (
        <div className='flex items-center justify-between '>
            <span>{contenido}</span>
            <TieredMenu model={Items} popup ref={Menu} className="border p-1 bg-white border-gray-300 shadow-2xs rounded-md [&_li]:rounded-md [&_li]:border-0 [&_li]:p-2 [&_li]:hover:bg-gray-100 [&_li]:transition-all [&_li]:duration-300 [&_li]:hover:text-blue-600" breakpoint="750px" />
            <Button onClick={(e)=>Menu.current.toggle(e)}>
                <IoIosMore className="text-2xl"/>
            </Button>
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
