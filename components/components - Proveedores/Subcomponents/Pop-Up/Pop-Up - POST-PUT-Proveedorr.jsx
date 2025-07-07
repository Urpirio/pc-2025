'use client';
import { Dialog } from "primereact/dialog";
import { useState } from "react";
// import { IoMdClose } from "react-icons/io";
import { InputText } from "primereact/inputtext";
import { StyleGlobal } from "../../../../style/Styles";

export let SetDeployPopUp_POST_PUT_Provedor;
export default function PopUp_POST_PUT_Provedor({NombrePopUp,Description,Cpagina}) {

    const [DeployPopUp_POST_PUT_Provedor,setDeployPopUp_POST_PUT_Provedor] = useState(false);
    SetDeployPopUp_POST_PUT_Provedor = setDeployPopUp_POST_PUT_Provedor;

    const [InputValues,setInputValues] = useState({
        Nombre_comercial: String(),
        RNC: String(),
        Sector_Comercial: String(),
        Direccion: String(),
        Telefono: String(),
        Correo: String(),
        Sitio_Web: String(),
    });

    const [InputsPersonaContacto,setInputsPersonaContacto] = useState({
        Nombre:String(),
        Cargo: String(),
        Telefono: String(),
        Correo:String(),
    });

    const LimpiarFormularios = () =>{
        setInputValues({
            Nombre_comercial: String(),
            RNC: String(),
            Sector_Comercial: String(),
            Direccion: String(),
            Telefono: String(),
            Correo: String(),
            Sitio_Web: String(),
        });
        setInputsPersonaContacto({
            Nombre:String(),
            Cargo: String(),
            Telefono: String(),
            Correo:String(),
        });
    };

    const Add_or_Change = () => {
        if(Cpagina){
            // POST de un nuevo proveedor.
        }else{
            //PUT de un proveedor.
        }
    };

  return (
    <Dialog 
        visible={DeployPopUp_POST_PUT_Provedor} 
        closeOnEscape maskClassName={StyleGlobal.StyleMaskDialogs}
        closeIcon={true} position="right" 
        onHide={()=>{setDeployPopUp_POST_PUT_Provedor(false);LimpiarFormularios()}}
        contentStyle={StyleGlobal.StyleContentDialogs}
        blockScroll className="w-[25%] h-full">

        <section className="w-full border border-gray-300 shadow-2xs bg-white rounded-xl p-5 flex flex-col gap-2">
            <div>
                <h2  className="text-3xl font-semibold text-blue-900">{NombrePopUp}</h2>
                <p className="text-gray-400 font-extralight">{Description}</p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                    <label>Nombre comercial</label>
                    <InputText value={InputValues.Nombre_comercial} onChange={(e)=>setInputValues({...InputValues,Nombre_comercial:e.target.value})} 
                        className="border border-gray-300 rounded-md p-2 outline-none"/>
                </div>
                <div className="flex flex-col">
                    <label>RNC</label>
                    <InputText value={InputValues.RNC} onChange={(e)=>setInputValues({...InputValues,RNC:e.target.value})} 
                        className="border border-gray-300 rounded-md p-2 outline-none"/>
                </div>
                <div className="flex flex-col">
                    <label>Sector Comercial</label>
                    <InputText value={InputValues.Sector_Comercial} onChange={(e)=>setInputValues({...InputValues,Sector_Comercial:e.target.value})} 
                        className="border border-gray-300 rounded-md p-2 outline-none"/>
                </div>
                <div className="flex flex-col">
                    <label>Direccion</label>
                    <InputText value={InputValues.Direccion} onChange={(e)=>setInputValues({...InputValues,Direccion:e.target.value})} 
                        className="border border-gray-300 rounded-md p-2 outline-none"/>
                </div>
                <div className="flex flex-col" >
                    <label>Telefono</label>
                    <InputText value={InputValues.Telefono} onChange={(e)=>setInputValues({...InputValues,Telefono:e.target.value})} 
                        className="border border-gray-300 rounded-md p-2 outline-none"/>
                </div>
                <div className="flex flex-col">
                    <label>Correo</label>
                    <InputText value={InputValues.Correo} onChange={(e)=>setInputValues({...InputValues,Correo:e.target.value})} 
                        className="border border-gray-300 rounded-md p-2 outline-none"/>
                </div>
                <div className="flex flex-col">
                    <label>Sitio Web</label>
                    <InputText value={InputValues.Sitio_Web} onChange={(e)=>setInputValues({...InputValues,Sitio_Web:e.target.value})} 
                        className="border border-gray-300 rounded-md p-2 outline-none"/>
                </div>
            </div>
            <div className="border-b border-gray-400 py-5">
                <h2  className="text-3xl font-semibold ">Persona de contacto</h2>
                <p className="text-gray-400 font-extralight">Datos de la persona de contacto</p>
            </div>
            <div className="py-5 flex flex-col gap-2">
                <div className="flex flex-col">
                    <label>Nombre</label>
                    <InputText value={InputsPersonaContacto.Nombre} onChange={(e)=>setInputsPersonaContacto({...InputsPersonaContacto,Nombre:e.target.value})} 
                        className="border border-gray-300 rounded-md p-2 outline-none"/>
                </div>
                <div className="flex flex-col">
                    <label>Cargo</label>
                    <InputText value={InputsPersonaContacto.Cargo} onChange={(e)=>setInputsPersonaContacto({...InputsPersonaContacto,Cargo:e.target.value})} 
                        className="border border-gray-300 rounded-md p-2 outline-none"/>
                </div>
                <div className="flex flex-col">
                    <label>Telefono</label>
                    <InputText value={InputsPersonaContacto.Telefono} onChange={(e)=>setInputsPersonaContacto({...InputsPersonaContacto,Telefono:e.target.value})} 
                        className="border border-gray-300 rounded-md p-2 outline-none"/>
                </div>
                <div className="flex flex-col">
                    <label>Correo</label>
                    <InputText value={InputsPersonaContacto.Correo} onChange={(e)=>setInputsPersonaContacto({...InputsPersonaContacto,Correo:e.target.value})} 
                        className="border border-gray-300 rounded-md p-2 outline-none"/>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <button onClick={Add_or_Change} className="border w-full py-2 bg-blue-900 text-white rounded-md cursor-pointer hover:opacity-80 transition-opacity duration-300">Crear proveedor</button>
                <button onClick={()=>{setDeployPopUp_POST_PUT_Provedor(false);LimpiarFormularios()}} 
                    className="border border-gray-400 shadow-sm px-3 py-2 rounded-md cursor-pointer hover:opacity-80 transition-opacity duration-300">Cancelar</button>
            </div>
        </section>
    </Dialog>
  )
}
