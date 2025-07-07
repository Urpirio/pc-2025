'use client';
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { SetDeployPopUp_POST_PUT_Consumidores } from "../subcomponents/Pop-Up/Pop-Up - POST-PUT-Consumidores";
import { StyleGlobal } from "../../../style/Styles";

export default function SectionConsumidores() {

    const [Textvalue,setTextvalue] = useState('');

  return (
    <section className="flex flex-col gap-5 px-5 py-3">
        <div className="flex items-center gap-2">
            <h1 className="text-2xl text-blue-900 font-semibold">Consumidores</h1>
            <span className="text-sm text-blue-700">30 resultados</span>
        </div>
        <div className="flex justify-between items-center">
            <InputText placeholder="Buscar consumidores..." className={StyleGlobal.StyleBuscadores}
                value={Textvalue} onChange={(e)=>{setTextvalue(e.target.value)}} />

            <button onClick={()=>SetDeployPopUp_POST_PUT_Consumidores(true)} className="flex items-center bg-blue-900 px-3 py-2 rounded-md text-white hover:bg-blue-900/80 transition-all duration-300 cursor-pointer">
                <GoPlus/>
                <span>Agregar consumidor</span>
            </button>
        </div>
    </section>
  )
}
