'use client';
import { InputText } from "primereact/inputtext";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { SetDeployPopUp_POST_PUT_Colaboradores } from "../subcomponents/Pop-Up/Pop-Up - POST-PUT_Colaboradores";


export default function SectionColaboradores() {

    const [Textvalue,setTextvalue] = useState('');

  return (
    <section className="flex flex-col gap-5 px-5 py-3">
        <div className="flex items-center gap-2">
            <h1 className="text-2xl text-blue-900 font-semibold">Colaboradores</h1>
        </div>
        <div className="flex justify-between items-center">
            <InputText placeholder="Buscar Colaboradores..." className="border border-gray-300 p-2 rounded-md outline-0 text-gray-500 w-70 shadow-2xs" 
                value={Textvalue} onChange={(e)=>{setTextvalue(e.target.value)}} />
            <button onClick={()=>SetDeployPopUp_POST_PUT_Colaboradores(true)} className="flex items-center bg-blue-900 px-3 py-2 rounded-md text-white hover:bg-blue-900/80 transition-all duration-300 cursor-pointer">
                <GoPlus/>
                <span>Agregar Colaborador</span>
            </button>
        </div>
    </section>
  )
}
