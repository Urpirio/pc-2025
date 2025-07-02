'use client';
import { Dialog } from "primereact/dialog"
import { IoMdClose } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import {Dropdown} from "primereact/dropdown";
import { DataDropDown } from "../../../components - Globales/Data/Data - DropDown";
import { SetDeployPopUpCambioEstado } from "./Pop-Up-CambioEstado";
import { useState } from "react";

export let SetDeployPopUpCambioEstado2;
export default function PopUpCambioEstado2() {
    const [DeployPopUpCambioEstado2,setDeployPopUpCambioEstado2] = useState(false);
    SetDeployPopUpCambioEstado2 = setDeployPopUpCambioEstado2;
    const [selectedEstadoCaso,setSelectedEstadoCaso] = useState('');
    const [selectedTipodeCierre,setSelectedTipodeCierre] = useState('');

  return (
    <Dialog visible={DeployPopUpCambioEstado2} blockScroll position="center" closeIcon={true}
        onHide={() =>setDeployPopUpCambioEstado2(false)}
        onMaskClick={() =>setDeployPopUpCambioEstado2(false)}
        className="flex p-5  bg-white w-[50%] h-[50%] border border-gray-300 rounded-xl" >
    <section className="w-full h-full flex flex-col justify-between">
        <div className="flex justify-between items-center ">
            <div className="flex gap-2 items-center">
            <button className="rounded-full bg-blue-50 p-1">
                <IoArrowBackOutline className="text-blue-900"/>
            </button>
            <h1 className="text-2xl font-bold text-blue-900">Cambio de Estado</h1>
            </div>
            <button onClick={()=>{
                setDeployPopUpCambioEstado2(false);
            }} className="border-0 h-5 w-5 flex justify-center bg-blue-100 text-blue-900 items-center rounded-full cursor-pointer">
                <IoMdClose/>
            </button>
        </div>
        <div className="flex  flex-col gap-1">
            <h2 className="text-gray-500">Seleccion de caso:</h2>
            <Dropdown
            className="border border-gray-300 rounded-md p-2"
            options={DataDropDown}
            placeholder="Seleccion de estado"
            optionLabel="name"
            value={selectedEstadoCaso}
            onChange={(e)=>setSelectedEstadoCaso(e.target.value)}
            />
        </div>
        <div className="flex  flex-col gap-1">
            <h2 className="text-gray-500">Tipo de Cierre:</h2>
            <Dropdown
            className="border border-gray-300 rounded-md p-2"
            options={DataDropDown}
            placeholder="Seleccion de estado"
            optionLabel="name"
            value={selectedTipodeCierre}
            onChange={(e)=>setSelectedTipodeCierre(e.target.value)}
            />
        </div>
        <div className="flex flex-col gap-1">
            <h2 className="text-gray-500">Monto retornado:</h2>
            <input className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500 w-full shadow-2xs" type="text" />
        </div>
        <div className="flex items-center justify-end gap-2 w-full">
            <button onClick={()=>{
                setDeployPopUpCambioEstado2(false);
                SetDeployPopUpCambioEstado(true);
            }} className="border border-gray-300 rounded-md px-5 py-2 bg-white text-gray-500">Volver</button>
            <button className=" rounded-md px-5 py-2 bg-blue-900 text-white">Siguiente</button>
        </div>
    </section>
</Dialog>
  )
}
