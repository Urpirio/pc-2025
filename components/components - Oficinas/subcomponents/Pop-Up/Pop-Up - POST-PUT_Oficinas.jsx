'use client';
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { DataDropDown } from "../../../components - Globales/Data/Data - DropDown";
import { useState } from "react";
import { StyleGlobal } from "../../../../style/Styles";



export let SetDeployPopUp_POST_PUT_Oficinas;
export default function PopUp_POST_PUT_Oficinas({Cpagina}) {


  const [DeployPopUp_POST_PUT_Oficinas,setDeployPopUp_POST_PUT_Oficinas] = useState(false);
  SetDeployPopUp_POST_PUT_Oficinas = setDeployPopUp_POST_PUT_Oficinas;

  const [InputValues,setInputValues] = useState({
    InputNombre: String(),
    InputDireccion: String(),
    InputTelefono: String(),
    InputCorreo:String(),
  });

  const [SelectsValues,setSelectsValues] = useState({
    SelectProvincias: String(),
  });

  const LimpiarFormulario = () =>{
    setInputValues({
    InputNombre: String(),
    InputDireccion: String(),
    InputTelefono: String(),
    InputCorreo:String(),
    });
    setSelectsValues({
      SelectProvincias: String(),
    });
  };


  return (
    <Dialog visible={DeployPopUp_POST_PUT_Oficinas} position="right" closeOnEscape 
      onHide={(e)=>{setDeployPopUp_POST_PUT_Oficinas(false);LimpiarFormulario()}} closeIcon={true} 
      className="w-[25%] h-full" contentStyle={StyleGlobal.StyleContentDialogs} maskClassName={StyleGlobal.StyleMaskDialogs}>
      <section className="w-full border border-gray-300 shadow-2xs bg-white rounded-xl p-5 flex flex-col gap-5">
         <div>
            <h2 className="text-3xl font-semibold text-blue-900">{Cpagina ? 'Crear Oficina' : 'Editar oficina'}</h2>
            <p  className="text-gray-400 font-extralight">{Cpagina ? 'Introduzca los datos solicitados para crear la oficina' :'Editar los datos necesarios de la oficina'}</p>
        </div>
        <div>
          <div className="flex flex-col gap-1">
            <label>Nombre</label>
            <InputText 
              placeholder="" value={InputValues.InputNombre} 
              onChange={(e)=>setInputValues({...InputValues,InputNombre:e?.target.value})}
              className="border border-gray-300 rounded-md p-2 outline-none"/>
          </div>
          <div className="flex flex-col gap-1">
            <label>Direccion</label>
            <InputText 
              placeholder="" value={InputValues.InputDireccion}
              onChange={(e)=>setInputValues({...InputValues,InputDireccion:e?.target.value})}
              className="border border-gray-300 rounded-md p-2 outline-none"/>
          </div>
          <div className="flex flex-col gap-1">
            <label>Telefono</label>
            <InputNumber 
              placeholder="" value={InputValues.InputTelefono} 
              onChange={(e)=>setInputValues({...InputValues,InputTelefono:e?.target.value})}
              className="border border-gray-300 rounded-md p-2 outline-none"/>
          </div>
          <div className="flex flex-col gap-1">
            <label>Correo</label>
            <InputText 
              placeholder="" value={InputValues.InputCorreo} 
              onChange={(e)=>setInputValues({...InputValues,InputCorreo:e?.target.value})} 
              className="border border-gray-300 rounded-md p-2 outline-none"/>
          </div>
          <div className="flex flex-col gap-1">
            <label>Provincia</label>
            <Dropdown placeholder="Seleccionar provincia" options={DataDropDown} 
              optionLabel="name" value={SelectsValues.SelectProvincias} 
              onChange={(e)=>setSelectsValues({...SelectsValues,SelectProvincias:e.target.value})} 
              panelClassName={StyleGlobal.StyleDropDown}
              className={StyleGlobal.StyleBodyDropDown}/>
          </div>
        </div>
        <div className="flex flex-col gap-2">
                <button  className=" w-full py-2 bg-blue-900 text-white rounded-md cursor-pointer hover:opacity-80 transition-opacity duration-300">{Cpagina ? 'Crear oficina' : 'Guardar cambios'}</button>
                <button onClick={()=>{
                  setDeployPopUp_POST_PUT_Oficinas(false);
                  LimpiarFormulario();
                }} className="border w-full border-gray-400 shadow-sm px-3 py-2 rounded-md cursor-pointer hover:opacity-80 transition-opacity duration-300">Cancelar</button>
            </div>
      </section>
    </Dialog>
  )
}
