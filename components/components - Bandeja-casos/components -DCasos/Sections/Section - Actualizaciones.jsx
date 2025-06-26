'use client'
import CardsUpdateDcasos from "../../subcomponents/Cards/Cards - UpdateDcasos";
import { DataUpdateDcasos } from "../../Data/Data - UpdateDcasos";
import { InputTextarea } from 'primereact/inputtextarea';
import { useState } from "react";
        

export default function SectionActualizaciones() {

   const [Textvalue, setTextvalue] = useState('');

  return (
    <section className="w-full py-5">
        <div className="border-b border-gray-300 w-full pb-5 pt-2">
            <h2 className="text-xl font-semibold text-blue-900">Actualizaciones</h2>
        </div>
        <div className="py-5 flex flex-col gap-5">
            <CardsUpdateDcasos Data={DataUpdateDcasos}/>
        </div>
        <div className="flex flex-col gap-2">
            <h3 className="text-blue-900 text-sm font-semibold">Agregar Actualizacion:</h3>
            <InputTextarea autoResize value={Textvalue} onChange={(e)=>setTextvalue(e.target.value)} 
                className="w-full h-30 border border-gray-300 rounded-md p-2  outline-none" />
            <div className="flex ">
            <button className="bg-blue-900 text-white px-8 py-2 text-sm font-semibold rounded-md ">Agregar</button>
            </div>
        </div>
    </section>
  )
}
