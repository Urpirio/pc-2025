'use client';
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { DataDropDown } from "../../../components - Globales/Data/Data - DropDown";
import { useState } from "react";



export let SetDeployPopUp_POST_PUT_Oficinas;
export default function PopUp_POST_PUT_Oficinas({Cpagina}) {


  const [InputNombre,setInputNombre] = useState('');
  const [InputDireccion,setInputDireccion] = useState('');
  const [InputTelefono,setInputTelefono] = useState('');
  const [InputCorreo,setInputCorreo] = useState('');
  const [InputProvincia,setInputProvincia] = useState('');
  const [DeployPopUp_POST_PUT_Oficinas,setDeployPopUp_POST_PUT_Oficinas] = useState(false);
  SetDeployPopUp_POST_PUT_Oficinas = setDeployPopUp_POST_PUT_Oficinas;

  



  return (
    <Dialog visible={DeployPopUp_POST_PUT_Oficinas} position="right" closeOnEscape onHide={(e)=>setDeployPopUp_POST_PUT_Oficinas(false)} closeIcon={true} className="w-[25%] h-full">
      <section className="w-full border border-gray-300 shadow-2xs bg-white rounded-xl p-5 flex flex-col gap-5">
         <div>
            <h2 className="text-3xl font-semibold text-blue-900">{Cpagina ? 'Crear Oficina' : 'Editar oficina'}</h2>
            <p  className="text-gray-400 font-extralight">{Cpagina ? 'Introduzca los datos solicitados para crear la oficina' :'Editar los datos necesarios de la oficina'}</p>
        </div>
        <div>
          <div className="flex flex-col gap-1">
            <label>Nombre</label>
            <InputText placeholder="" value={InputNombre} onChange={(e)=>{setInputNombre(e.target.value)}} className="border border-gray-300 rounded-md p-2 outline-none"/>
          </div>
          <div className="flex flex-col gap-1">
            <label>Direccion</label>
            <InputText placeholder="" value={InputDireccion} onChange={(e)=>{setInputDireccion(e.target.value)}} className="border border-gray-300 rounded-md p-2 outline-none"/>
          </div>
          <div className="flex flex-col gap-1">
            <label>Telefono</label>
            <InputNumber placeholder="" value={InputTelefono} onChange={(e)=>{setInputTelefono(e.value)}} className="border border-gray-300 rounded-md p-2 outline-none"/>
          </div>
          <div className="flex flex-col gap-1">
            <label>Correo</label>
            <InputText placeholder="" value={InputCorreo} onChange={(e)=>{setInputCorreo(e.target.value)}} className="border border-gray-300 rounded-md p-2 outline-none"/>
          </div>
          <div className="flex flex-col gap-1">
            <label>Provincia</label>
            <Dropdown placeholder="Seleccionar provincia" options={DataDropDown} optionLabel="name" value={InputProvincia} onChange={(e)=>setInputProvincia(e.target.value)} className="border border-gray-300 rounded-md p-2"/>
          </div>
        </div>
        <div className="flex flex-col gap-2">
                <button  className=" w-full py-2 bg-blue-900 text-white rounded-md cursor-pointer hover:opacity-80 transition-opacity duration-300">{Cpagina ? 'Crear oficina' : 'Guardar cambios'}</button>
                <button onClick={()=>{
                  setDeployPopUp_POST_PUT_Oficinas(false)
                }} className="border w-full border-gray-400 shadow-sm px-3 py-2 rounded-md cursor-pointer hover:opacity-80 transition-opacity duration-300">Cancelar</button>
            </div>
      </section>
    </Dialog>
  )
}
