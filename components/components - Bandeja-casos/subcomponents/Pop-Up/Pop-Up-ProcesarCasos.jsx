'use client';
import { Dialog } from "primereact/dialog"
import { IoMdClose } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import {Dropdown} from "primereact/dropdown";
import { DataDropDown } from "../../../components - Globales/Data/Data - DropDown";
import { useState } from "react";
import { SetDeployPopUpCambioEstado } from "./Pop-Up-CambioEstado";
import { StyleGlobal } from "../../../../style/Styles";



export let SetDeployProcesarCaso;
export default function PopUpProcesarCasos() {

    const [selectedOption, setSelectedOption] = useState(null);
    const [DeployProcesarCaso,setDeployProcesarCaso] = useState(false);
    SetDeployProcesarCaso = setDeployProcesarCaso;

  return (
//    <section className="w-full h-screen bg-amber-300 z-40 absolute">
    <Dialog 
        visible={DeployProcesarCaso} 
        contentStyle={StyleGlobal.StyleContentDialogs}
        maskClassName={StyleGlobal.StyleMaskDialogs}
        closeOnEscape onHide={() =>setDeployProcesarCaso(false)} 
        blockScroll closeIcon={true} 
        className="w-[50%] h-[45%] bg-white shadow-2xs border border-gray-200 rounded-xl flex flex-col justify-center">
            
        <section className="flex flex-col p-5 gap-5 justify-between h-full">
        <section className="flex justify-between items-center ">
                <h1 className="text-2xl font-bold text-blue-900">Procesar caso</h1>
            <div className="flex items-center">
                <button onClick={()=>{
                    setDeployProcesarCaso(false);
                }} className="border-0 h-5 w-5 flex justify-center bg-blue-100 text-blue-900 items-center rounded-full cursor-pointer">
                    <IoMdClose/>
                </button>
            </div>
        </section>
        <section className=" w-full">
            <article className="shadow-2xs rounded-xl p-5 bg-gray-50">
                <h2 className="text-2xl font-bold text-gray-600">Supermercado bravo</h2>
                <p className="text-sm text-gray-500">Ubicacion del super mercado</p>
            </article>
        </section>
        <section className=" flex flex-col gap-2 w-full">
            <div>
                <h2 className="text-gray-500">Accion realizar</h2>
            </div>
            <Dropdown 
             className={StyleGlobal.StyleBodyDropDown} 
             panelClassName={StyleGlobal.StyleDropDown}
             options={DataDropDown} placeholder="Seleccionar la accion" 
             optionLabel="name" value={selectedOption} 
             onChange={(e) => setSelectedOption(e.target.value)}/>

        </section>
        <section className="flex justify-end w-full">
            <button onClick={()=>{
                setDeployProcesarCaso(false)
                SetDeployPopUpCambioEstado(true);
            }} className="border border-gray-300 rounded-md px-5 py-2 bg-blue-900 text-white">Siguiente</button>

        </section>
        </section>
    </Dialog>
//    </section>
  )
}
