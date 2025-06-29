'use client';
import { Dialog } from "primereact/dialog";
import { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

export let SetDeployPopUp_POST_PUT_Colaboradores;

export default function PopUp_POST_PUT_Colaboradores({Cpagina}) {



    const [DeployPopUp_POST_PUT_Colaboradores, setDeployPopUp_POST_PUT_Colaboradores] = useState(false);
    SetDeployPopUp_POST_PUT_Colaboradores = setDeployPopUp_POST_PUT_Colaboradores;


    //Formulario 
    const [TextNombre,setTextNombre] = useState();
    const [TextApellido,setTextApellido] = useState();
    const [TextCorreo,setTextCorreo] = useState();
    const [TextTelefono,setTextTelefono] = useState();
    const [TextOficina,setTextOficina] = useState();
    const [TextDepartamento,setTextDepartamento] = useState();
    const [TextRol,setTextRol] = useState();
    const [TextAsignarSupervisor,setTextAsignarSupervisor] = useState();


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
    <Dialog visible={DeployPopUp_POST_PUT_Colaboradores} closeOnEscape blockScroll closeIcon={true} position="right" 
        onHide={()=>setDeployPopUp_POST_PUT_Colaboradores(false)}  showHeader={false} className="w-[25%] h-full">
        <section className="w-full border border-gray-300 shadow-2xs bg-white rounded-xl p-5 flex flex-col gap-2">
            <div>
                <h2  className="text-3xl font-semibold text-blue-900">{Cpagina ? 'Crear Colaborador' : 'Editar Colaborador' }</h2>
                <p className="text-gray-400 font-extralight">{Cpagina ? 'Introduzca los datos necesarios para crear el colaborador' : 'Edita los datos necesarios del colaborador' }</p>
            </div>
            <div className=" flex flex-col gap-2">
                <div className="flex flex-col">
                    <label>Nombre</label>
                    <InputText value={TextNombre} onChange={(e)=>{setTextNombre(e.target.value)}} 
                    className="border border-gray-300 rounded-md p-2 outline-none"/>
                </div>
                <div className="flex flex-col">
                    <label>Apellido</label>
                    <InputText value={TextApellido} onChange={(e)=>{setTextApellido(e.target.value)}} 
                    className="border border-gray-300 rounded-md p-2 outline-none"/>
                </div>
                <div className="flex flex-col">
                    <label>Correo electrónico</label>
                    <InputText value={TextCorreo} onChange={(e)=>{setTextCorreo(e.target.value)}} 
                    className="border border-gray-300 rounded-md p-2 outline-none"/>
                </div>
                <div className="flex flex-col">
                    <label>Telefono</label>
                    <InputText value={TextTelefono} onChange={(e)=>{setTextTelefono(e.target.value) }} 
                    className="border border-gray-300 rounded-md p-2 outline-none"/>
                </div>
            </div>
            <div>
                <div className="flex  flex-col gap-2">
                    <label>Oficina</label>
                    <Dropdown value={TextOficina} onChange={(e)=>{setTextOficina(e.target.value)}} 
                    options={''} optionLabel=""className="border border-gray-300 rounded-md p-2" 
                    placeholder="Seleccionar oficina"/>
                </div>
                <div className="flex  flex-col gap-2">
                    <label>Departamento</label>
                    <Dropdown value={TextDepartamento} onChange={(e)=>{setTextDepartamento(e.target.value)}} 
                    options={''} optionLabel="" className="border border-gray-300 rounded-md p-2" placeholder="Seleccionar departamento"/>
                </div>
                <div className="flex  flex-col gap-2">
                    <label>Rol</label>
                    <Dropdown value={TextRol} onChange={(e)=>{setTextRol(e.target.value)}} 
                    options={''} optionLabel="" className="border border-gray-300 rounded-md p-2" placeholder="Seleccionar rol"/>
                </div>
                {Cpagina ? <div className="flex  flex-col gap-2">
                    <label>Asignar Supervisor</label>
                    <Dropdown value={TextAsignarSupervisor} onChange={(e)=>{setTextAsignarSupervisor(e.target.value)}} 
                    options={''} optionLabel="" className="border border-gray-300 rounded-md p-2" placeholder="Seleccionar supervisor"/>
                </div> : ''}
            </div>
            <div className="flex flex-col gap-2">
                <button onClick={Add_or_Update} className="border w-full py-2 bg-blue-900 text-white rounded-md cursor-pointer hover:opacity-80 transition-opacity duration-300">Crear colaborador</button>
                <button onClick={()=>setDeployPopUp_POST_PUT_Colaboradores(false)} className="border border-gray-400 shadow-sm px-3 py-2 rounded-md cursor-pointer hover:opacity-80 transition-opacity duration-300">Cancelar</button>
            </div>
        </section>
    </Dialog>
  )
}
