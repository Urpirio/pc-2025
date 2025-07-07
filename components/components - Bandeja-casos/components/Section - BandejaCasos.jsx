'use client';
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { RxMixerHorizontal } from "react-icons/rx";
import { LuSquarePen } from "react-icons/lu";
import { SetDialogOpen } from "./Modal - Filtros";
import Link from "next/link";
import { StyleGlobal } from "../../../style/Styles";

export default function SectionBandejaCasos() {

    const [Textvalue,setTextvalue] = useState()

  return (
    <section className="flex flex-col gap-5 px-5 py-3">
        <div className="flex items-center gap-2">
            <h1 className="text-2xl text-blue-900 font-semibold">Bandeja de casos activos</h1>
            <span className="text-sm text-blue-700">30 resultados</span>
        </div>
        <div className="flex justify-between items-center">
            <div>
                <InputText placeholder="Buscar caso..." className={StyleGlobal.StyleBuscadores} value={Textvalue} onChange={(e)=>{setTextvalue(e.target.value)}} />
            </div>
            <div className="flex gap-2">
                <Link href={'/bandeja-de-casos/crear-casos'} className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2  rounded-md hover:bg-blue-800 transition-colors duration-300 cursor-pointer">
                    <LuSquarePen/>
                    <span>Crear Caso</span>
                </Link>
                <button onClick={()=>{SetDialogOpen(true)}} className="flex items-center gap-2 border border-gray-400 shadow-sm px-3 py-2 rounded-md cursor-pointer">
                    <RxMixerHorizontal/>
                    <span>Filtrar</span>
                </button>
                
            </div>
        </div>
    </section>
  )
}
