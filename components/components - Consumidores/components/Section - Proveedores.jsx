'use client';
import { GoPlus } from "react-icons/go";
import { RxMixerHorizontal } from "react-icons/rx";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { SetDeployPopUpFiltroProveedores } from "../Subcomponents/Pop-Up/Pop-Up - Filtro";


export default function SectionProveedores() {

    const [Textvalue,setTextvalue] = useState();

    return (
        <section className="flex flex-col gap-4 px-5 py-3">
    
            <div>
                <h1 className="text-2xl text-blue-900 font-semibold">Proveedores</h1>
            </div>
            <div className="flex justify-between">
                <div>
                <InputText placeholder="Buscar Proveedor.." className="border border-gray-300 p-2 rounded-md outline-0 text-gray-500 w-70 shadow-2xs" 
                    value={Textvalue} onChange={(e)=>{setTextvalue(e.target.value)}} />
                </div>
                <div className="flex items-center gap-2">
                    <button className="flex items-center bg-blue-900 px-3 py-2 rounded-md text-white">
                        <GoPlus/>
                        <span>Agregar Proveedor</span>
                    </button>
                    <button onClick={()=>{
                        SetDeployPopUpFiltroProveedores(true);
                    }} className="flex items-center gap-2 border border-gray-400 shadow-sm px-3 py-2 rounded-md cursor-pointer">
                        <RxMixerHorizontal/>
                        <span>Filtrar</span>
                    </button>
                </div>
            </div>
        </section>
      )
}
