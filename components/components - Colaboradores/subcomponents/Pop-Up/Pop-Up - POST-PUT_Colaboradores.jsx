'use client';
import { Dialog } from "primereact/dialog";
import { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { StyleGlobal } from "../../../../style/Styles";
import { DataDropDown } from "../../../components - Globales/Data/Data - DropDown";

export let SetDeployPopUp_POST_PUT_Colaboradores;

export default function PopUp_POST_PUT_Colaboradores({Cpagina}) {



    const [DeployPopUp_POST_PUT_Colaboradores, setDeployPopUp_POST_PUT_Colaboradores] = useState(false);
    SetDeployPopUp_POST_PUT_Colaboradores = setDeployPopUp_POST_PUT_Colaboradores;


    const [InputValues,setInputValues] = useState({
        TextNombre: String(),
        TextApellido: String(),
        TextCorreo: String(),
        TextTelefono: String(),

    });

    const [SelectsValues,setSelectsValues] = useState({
        TextOficina:String(),
        TextDepartamento: String(),
        TextRol:String(),
        TextAsignarSupervisor: String(),
    });

    const LimpiarFormulario = () =>{
        setInputValues({
        TextOficina:String(),
        TextDepartamento: String(),
        TextRol:String(),
        TextAsignarSupervisor: String(),    
        });

        setSelectsValues({
        TextNombre: String(),
        TextApellido: String(),
        TextCorreo: String(),
        TextTelefono: String(),  
        });
    };


    useEffect(()=>{
        if(Cpagina){
            
        }else{
         
        }
    },[]);

  const Add_or_Update = () => {
    if(Cpagina){

    }else{

    }
  };


  return (
    <Dialog 
        visible={DeployPopUp_POST_PUT_Colaboradores} 
        maskClassName={StyleGlobal.StyleMaskDialogs}
        contentStyle={StyleGlobal.StyleContentDialogs}
        closeOnEscape blockScroll closeIcon={true} position="right" 
        onHide={()=>{setDeployPopUp_POST_PUT_Colaboradores(false);LimpiarFormulario()}} 
        showHeader={false} className="w-[25%] h-full">

        <section className="w-full border border-gray-300 shadow-2xs bg-white rounded-xl p-5 flex flex-col gap-2">
            <div>
                <h2  className="text-3xl font-semibold text-blue-900">{Cpagina ? 'Crear Colaborador' : 'Editar Colaborador' }</h2>
                <p className="text-gray-400 font-extralight">{Cpagina ? 'Introduzca los datos necesarios para crear el colaborador' : 'Edita los datos necesarios del colaborador' }</p>
            </div>
            <div className=" flex flex-col gap-2">
                <div className="flex flex-col">
                    <label>Nombre</label>
                    <InputText value={InputValues.TextNombre} 
                    onChange={(e)=>setInputValues({...InputValues,TextNombre:e?.target.value})} 
                    className="border border-gray-300 rounded-md p-2 outline-none"/>
                </div>
                <div className="flex flex-col">
                    <label>Apellido</label>
                    <InputText value={InputValues.TextApellido} 
                    onChange={(e)=>setInputValues({...InputValues,TextApellido:e?.target.value})}  
                    className="border border-gray-300 rounded-md p-2 outline-none"/>
                </div>
                <div className="flex flex-col">
                    <label>Correo electrónico</label>
                    <InputText value={InputValues.TextCorreo} 
                    onChange={(e)=>setInputValues({...InputValues,TextCorreo:e?.target.value})} 
                    className="border border-gray-300 rounded-md p-2 outline-none"/>
                </div>
                <div className="flex flex-col">
                    <label>Telefono</label>
                    <InputText value={InputValues.TextTelefono} 
                    onChange={(e)=>setInputValues({...InputValues,TextTelefono:e?.target.value})}  
                    className="border border-gray-300 rounded-md p-2 outline-none"/>
                </div>
            </div>
            <div>
                <div className="flex  flex-col gap-2">
                    <label>Oficina</label>
                    <Dropdown 
                    value={SelectsValues.TextOficina} 
                    onChange={(e)=>setSelectsValues({...SelectsValues,TextOficina:e?.target.value})} 
                    options={DataDropDown} optionLabel="name" panelClassName={StyleGlobal.StyleDropDown} 
                    className={StyleGlobal.StyleBodyDropDown} 
                    appendTo={'self'}
                    placeholder="Seleccionar oficina"/>
                </div>
                <div className="flex  flex-col gap-2">
                    <label>Departamento</label>
                    <Dropdown 
                    value={SelectsValues.TextDepartamento} 
                    onChange={(e)=>setSelectsValues({...SelectsValues,TextDepartamento:e?.target.value})} 
                    options={DataDropDown} optionLabel="name" panelClassName={StyleGlobal.StyleDropDown} 
                    className={StyleGlobal.StyleBodyDropDown} 
                    appendTo={'self'}
                    placeholder="Seleccionar departamento"/>
                </div>
                <div className="flex  flex-col gap-2">
                    <label>Rol</label>
                    <Dropdown 
                    value={SelectsValues.TextRol} 
                    onChange={(e)=>setSelectsValues({...SelectsValues,TextRol:e?.target.value})} 
                    options={DataDropDown} optionLabel="name" panelClassName={StyleGlobal.StyleDropDown} 
                    className={StyleGlobal.StyleBodyDropDown} 
                    appendTo={'self'}
                    placeholder="Seleccionar rol"/>
                </div>
                {Cpagina ? <div className="flex  flex-col gap-2">
                    <label>Asignar Supervisor</label>
                    <Dropdown 
                    value={SelectsValues?.TextAsignarSupervisor} 
                    onChange={(e)=>setSelectsValues({...SelectsValues,TextAsignarSupervisor:e?.target.value})} 
                    options={DataDropDown} optionLabel="name" panelClassName={StyleGlobal.StyleDropDown} 
                    className={StyleGlobal.StyleBodyDropDown} 
                    appendTo={'self'}
                    placeholder="Seleccionar supervisor"/>
                </div> : ''}
            </div>
            <div className="flex flex-col gap-2">
                <button onClick={Add_or_Update} className="border w-full py-2 bg-blue-900 text-white rounded-md cursor-pointer hover:opacity-80 transition-opacity duration-300">Crear colaborador</button>
                <button onClick={()=>{setDeployPopUp_POST_PUT_Colaboradores(false);LimpiarFormulario()}} className="border border-gray-400 shadow-sm px-3 py-2 rounded-md cursor-pointer hover:opacity-80 transition-opacity duration-300">Cancelar</button>
            </div>
        </section>
    </Dialog>
  )
}
