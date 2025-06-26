'use client';
import { Dialog } from "primereact/dialog";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";

export default function PopupMiniAsignarCasos() {

    const [DeployPopUpMiniAsignar,setDeployPopUpMiniAsignar] = useState(false);


  return (
    <Dialog visible={DeployPopUpMiniAsignar} closeIcon={true} blockScroll closeOnEscape onHide={(e)=>{if(!DeployPopUpMiniAsignar)  return; setDeployPopUpMiniAsignar(false)}}
        className="bg-white w-[20%] flex items-center border border-gray-300 rounded-xl shadow-2xs p-5" 
    >
        <section className="flex flex-col gap-3 items-center justify-center text-center ">
            <div className=" rounded-full h-20 w-20 flex justify-center items-center bg-green-500 p-2">
                <FaCheck className="text-white text-4xl" />
            </div>
            <h2 className="text-gray-600 text-2xl font-bold">Caso asignado</h2>
            <p className="text-gray-500">Lorem ipsum dolor provident dolorum a distinctio rem ipsa, sequi impedit quaerat dolore quam perferendis ex incidunt! Ipsam, adipisci! Dolor, accusantium.</p>
            <button onClick={()=>{
                setDeployPopUpMiniAsignar(false)
            }} className="w-30 py-2 border rounded-lg bg-blue-900 text-white cursor-pointer hover:opacity-80 transition-all duration-300">Aceptar</button>
        </section>
    </Dialog>
  )
}
