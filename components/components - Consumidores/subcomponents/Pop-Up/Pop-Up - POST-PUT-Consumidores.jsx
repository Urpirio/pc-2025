'use client';
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { DataDropDown } from "../../../components - Globales/Data/Data - DropDown";
import { useState } from "react";

export let SetDeployPopUp_POST_PUT_Consumidores;
export default function PopUp_POST_PUT_Consumidores({NombrePopUp,Description,Cpagina}) {


    const [TextCedula,setTextCedula] = useState('');
    const [TextNombre,setTextNombre] = useState('');
    const [TextApellido,setTextApellido] = useState('');
    const [TextCorreo,setTextCorreo] = useState('');
    const [TextTelefono,setTextTelefono] = useState();
    const [TextProvincia,setTextProvincia] = useState('');
    const [TextGenero,setTextGenero] = useState('');
    const [TextEdad,setTextEdad] = useState();
    const [DeployPopUp_POST_PUT_Consumidores,setDeployPopUp_POST_PUT_Consumidores] = useState(false)
    SetDeployPopUp_POST_PUT_Consumidores = setDeployPopUp_POST_PUT_Consumidores;

    const Add_or_Change = () => {
        if(Cpagina){
            // POST de un nuevo proveedor.
        }else{
            //PUT de un proveedor.
        }
    };

  return (
    <Dialog visible={DeployPopUp_POST_PUT_Consumidores}  closeOnEscape onHide={(e)=>setDeployPopUp_POST_PUT_Consumidores(false)} 
        position="right" closeIcon={true} className="w-[25%] h-full">
        <section className="w-full border border-gray-300 shadow-2xs bg-white rounded-xl p-5 flex flex-col gap-5">
            <div>
                <h2 className="text-3xl font-semibold text-blue-900">{NombrePopUp}</h2>
                <p  className="text-gray-400 font-extralight">{Description}</p>
            </div>
            <div className="w-full flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <label>Cedula</label>
                    <InputText value={TextCedula} onChange={(e)=>setTextCedula(e.target.value)} 
                        className="border border-gray-300 rounded-md p-2 outline-none"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label>Nombre</label>
                    <InputText value={TextNombre} onChange={(e)=>setTextNombre(e.target.value)} className="border border-gray-300 rounded-md p-2 outline-none"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label>Apellido</label>
                    <InputText value={TextApellido} onChange={(e)=>setTextApellido(e.target.value)} className="border border-gray-300 rounded-md p-2 outline-none"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label>Correo electronico</label>
                    <InputText value={TextCorreo} onChange={(e)=>setTextCorreo(e.target.value)} placeholder="m@ejemplo.com" className="border border-gray-300 rounded-md p-2 outline-none"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label>Telefono</label>
                    <InputNumber value={TextTelefono} onChange={(e)=>setTextTelefono(e.target.value)} className="border [&_input]:outline-none border-gray-300 rounded-md p-2 outline-none"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label>Provincia</label>
                    <Dropdown value={TextProvincia} onChange={(e)=>setTextProvincia(e.target.value)} options={DataDropDown} optionLabel={'name'} placeholder="Seleccionar Provincia" className="border border-gray-300 rounded-md p-2"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label>Genero</label>
                    <Dropdown value={TextGenero} onChange={(e)=>setTextGenero(e.target.value)} options={DataDropDown} optionLabel={'name'} placeholder="Seleccionar Genero" className="border border-gray-300 rounded-md p-2"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label>Edad</label>
                    <InputNumber value={TextEdad} onChange={(e)=>setTextEdad(e.target.value)} className="border [&_input]:outline-none border-gray-300 rounded-md p-2 outline-none"/>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <button onClick={Add_or_Change} className=" w-full py-2 bg-blue-900 text-white rounded-md cursor-pointer hover:opacity-80 transition-opacity duration-300">Crear consumidor</button>
                <button onClick={()=>{
                    setDeployPopUp_POST_PUT_Consumidores(false)
                }} className="border w-full border-gray-400 shadow-sm px-3 py-2 rounded-md cursor-pointer hover:opacity-80 transition-opacity duration-300">Cancelar</button>
            </div>
        </section>
    </Dialog>
  )
}
