'use client';
import { InputText } from "primereact/inputtext";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
// import { InputText } from "primereact/inputtext";
import { AutoComplete } from 'primereact/autocomplete';
import { SetDeployPopUp_POST_PUT_Oficinas } from "../subcomponents/Pop-Up/Pop-Up - POST-PUT_Oficinas";
import { DataDropDown } from "../../components - Globales/Data/Data - DropDown";
import { StyleGlobal } from "../../../style/Styles";


export default function SectionOficinas({DeployPopUpOficinas}) {
    
    const [TextSearch,setTextSearch] = useState([]);
    const [SearchValue,setSearchValue] = useState("")
    const [] = useState();

    const Search = (event) => {
        setTextSearch(DataDropDown.map(Data => Data.name.split("").includes(event.query) ? Data.name : ''))
        
    };


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
            {/* <AutoComplete value={SearchValue} placeholder="Buscar oficina..." onChange={(e)=>setSearchValue(e.target.value)} suggestions={TextSearch} completeMethod={Search}  
                className="border [&_input]:border-0 [&_input]:outline-none [&_input]:w-full border-gray-300 p-2 rounded-md outline-0 text-gray-500 w-70 shadow-2xs" /> */}
            <InputText placeholder="Buscar Oficinas..." className={StyleGlobal.StyleBuscadores}
                value={TextSearch} onChange={(e)=>{setTextSearch(e.target.value)}} />
            <button onClick={BtnAgregarOficina} className="flex items-center bg-blue-900 px-3 py-2 rounded-md text-white hover:bg-blue-900/80 transition-all duration-300 cursor-pointer">
                <GoPlus/>
                <span>Agregar Oficina</span>
            </button>
        </div>
    </section>
  )
}
