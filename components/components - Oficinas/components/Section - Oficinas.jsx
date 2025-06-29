'use client';
import { InputText } from "primereact/inputtext";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { AutoComplete } from 'primereact/autocomplete';
import { SetDeployPopUp_POST_PUT_Oficinas } from "../subcomponents/Pop-Up/Pop-Up - POST-PUT_Oficinas";


export default function SectionOficinas({DeployPopUpOficinas}) {
    
    const [Textvalue,setTextvalue] = useState('');

    const BtnAgregarOficina = () => {
        SetDeployPopUp_POST_PUT_Oficinas(true);
        DeployPopUpOficinas();
    };

  return (
    <section className="flex flex-col gap-5 px-5 py-3">
        <div className="flex items-center gap-2">
            <h1 className="text-2xl text-blue-900 font-semibold">Oficinas</h1>
        </div>
        <div className="flex justify-between items-center">
            <InputText placeholder="Buscar Oficinas..." className="border border-gray-300 p-2 rounded-md outline-0 text-gray-500 w-70 shadow-2xs" 
                value={Textvalue} onChange={(e)=>{setTextvalue(e.target.value)}} />
            <button onClick={BtnAgregarOficina} className="flex items-center bg-blue-900 px-3 py-2 rounded-md text-white hover:bg-blue-900/80 transition-all duration-300 cursor-pointer">
                <GoPlus/>
                <span>Agregar Oficina</span>
            </button>
        </div>
    </section>
  )
}
