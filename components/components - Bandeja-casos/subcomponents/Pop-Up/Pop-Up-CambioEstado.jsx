'use client';
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { DataDropDown } from "../../../components - Globales/Data/Data - DropDown";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { SetDeployPopUpCambioEstado2 } from "./Pop-Up-CambioEstado2";
import { SetDeployProcesarCaso } from "./Pop-Up-ProcesarCasos";
import { useState } from "react";

export let SetDeployPopUpCambioEstado;
export default function PopUpCambioEstado() {

    const [DeployPopUpCambioEstado,setDeployPopUpCambioEstado] = useState(false);
    SetDeployPopUpCambioEstado = setDeployPopUpCambioEstado;
    const [selectedOption,setSelectedOption] = useState('')

  return (
   <Dialog visible={DeployPopUpCambioEstado} position="center" closeIcon={true} closeOnEscape blockScroll 
    onHide={() => {if (!DeployPopUpCambioEstado) return; setDeployPopUpCambioEstado(false); }} 
    className="flex p-5  bg-white w-[50%] h-[35%] border border-gray-300 rounded-xl">
        <section className="w-full h-full flex flex-col justify-between">
        <div className="flex justify-between items-center ">
            <div className="flex gap-2 items-center">
            <button className="rounded-full bg-blue-50 p-1">
                <IoArrowBackOutline className="text-blue-900"/>
            </button>
            <h1 className="text-2xl font-bold text-blue-900">Cambio de Estado</h1>
            </div>
            <button className="border-0 h-5 w-5 flex justify-center bg-blue-100 text-blue-900 items-center rounded-full cursor-pointer">
                <IoMdClose/>
            </button>
        </div>
        <div className="flex  flex-col gap-2">
            <h2 className="text-gray-500">Seleccion de caso:</h2>
            <Dropdown
            className="border border-gray-300 rounded-md p-2"
            options={DataDropDown}
            placeholder="Seleccion de estado"
            optionLabel="name"
            value={selectedOption}
            onChange={(e)=>setSelectedOption(e.target.value)}
            />
        </div>
        <div className="flex items-center justify-end gap-2 w-full">
            <button onClick={()=>{
                SetDeployPopUpCambioEstado(false);
                SetDeployProcesarCaso(true);
            }} className="border border-gray-300 rounded-md px-5 py-2 bg-white text-gray-500">Volver</button>
            <button onClick={()=>{
                setDeployPopUpCambioEstado(false);
                SetDeployPopUpCambioEstado2(true);
            }} className=" rounded-md px-5 py-2 bg-blue-900 text-white">Siguiente</button>
        </div>
        </section>
   </Dialog>
  )
}
