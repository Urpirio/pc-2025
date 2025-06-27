'use client';
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

export let SetDeployPopUp_POST_PUT_Colaboradores;
export default function PopUp_POST_PUT_Colaboradores({NombrePopUp,Description,Cpagina}) {

  const [DeployPopUp_POST_PUT_Colaboradores, setDeployPopUp_POST_PUT_Colaboradores] = useState(true);
  SetDeployPopUp_POST_PUT_Colaboradores = setDeployPopUp_POST_PUT_Colaboradores;

  const Add_or_Update = () => {
    if(Cpagina){

    }else{

    }
  };


  return (
    <Dialog visible={DeployPopUp_POST_PUT_Colaboradores} closeOnEscape blockScroll closeIcon={true} position="right" 
        onHide={()=>setDeployPopUp_POST_PUT_Colaboradores(false)}  className="w-[25%] h-full">
        <section className="w-full border border-gray-300 shadow-2xs bg-white rounded-xl p-5 flex flex-col gap-2">
            <div>
                <h2  className="text-3xl font-semibold text-blue-900">{NombrePopUp}</h2>
                <p className="text-gray-400 font-extralight">{Description}</p>
            </div>
            <div className=" flex flex-col gap-2">
                <div className="flex flex-col">
                    <label>Nombre</label>
                    <InputText className="border border-gray-300 rounded-md p-2 outline-none"/>
                </div>
                <div className="flex flex-col">
                    <label>Apellido</label>
                    <InputText className="border border-gray-300 rounded-md p-2 outline-none"/>
                </div>
                <div className="flex flex-col">
                    <label>Correo electrónico</label>
                    <InputText className="border border-gray-300 rounded-md p-2 outline-none"/>
                </div>
                <div className="flex flex-col">
                    <label>Telefono</label>
                    <InputText className="border border-gray-300 rounded-md p-2 outline-none"/>
                </div>
            </div>
            <div>
                <div className="flex  flex-col gap-2">
                    <label>Oficina</label>
                    <Dropdown className="border border-gray-300 rounded-md p-2" placeholder="Seleccionar oficina"/>
                </div>
                <div className="flex  flex-col gap-2">
                    <label>Departamento</label>
                    <Dropdown className="border border-gray-300 rounded-md p-2" placeholder="Seleccionar departamento"/>
                </div>
                <div className="flex  flex-col gap-2">
                    <label>Rol</label>
                    <Dropdown className="border border-gray-300 rounded-md p-2" placeholder="Seleccionar rol"/>
                </div>
                <div className="flex  flex-col gap-2">
                    <label>Asignar Supervisor</label>
                    <Dropdown className="border border-gray-300 rounded-md p-2" placeholder="Seleccionar supervisor"/>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <button onClick={Add_or_Update} className="border w-full py-2 bg-blue-900 text-white rounded-md cursor-pointer hover:opacity-80 transition-opacity duration-300">Crear colaborador</button>
                <button onClick={()=>setDeployPopUp_POST_PUT_Colaboradores(false)} className="border border-gray-400 shadow-sm px-3 py-2 rounded-md cursor-pointer hover:opacity-80 transition-opacity duration-300">Cancelar</button>
            </div>
        </section>
    </Dialog>
  )
}
