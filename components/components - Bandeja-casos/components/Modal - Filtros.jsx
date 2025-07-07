'use client';
import { Dialog } from "primereact/dialog";
import { IoMdClose } from "react-icons/io";
import { Dropdown } from "primereact/dropdown";
import { InputText} from "primereact/inputtext";
import { useEffect, useState } from "react";
import { DataDropDown } from "../../components - Globales/Data/Data - DropDown";
import { StyleGlobal } from "../../../style/Styles";

export let SetDialogOpen;
export default function ModalFiltros() {

    const [DialogOpen, setDialogOpen] = useState(false);
    SetDialogOpen = setDialogOpen;

    const [SelectsValues,setSelectsValues] = useState({
        SelectProveedor: String(),
        SelectOficina: String(),
        SelectTipo: String(),
        SelectVia: String(),
        SelectOficial: String(),
        SelectDepartamento: String(),
        SelectEstado: String(),
        SelectTipo_de_cierre: String(),
        SelectResultado: String(),
        SelectFecha: String(),
        Producto_Servicio: String(),
        SelectSector_comercial: String(),
        SelectMotivo: String(),
    });


    const [InputValues,setInputValues] = useState({
        Cedula:String(),
        Nombre:String(),
        Numero_caso: String(),
        Apellido:String(),
        RNC:String(),
    });

    const LimpiarFiltros = () =>{
        setSelectsValues({
        SelectProveedor: String(),
        SelectOficina: String(),
        SelectTipo: String(),
        SelectVia: String(),
        SelectOficial: String(),
        SelectDepartamento: String(),
        SelectEstado: String(),
        SelectTipo_de_cierre: String(),
        SelectResultado: String(),
        SelectFecha: String(),
        Producto_Servicio: String(),
        SelectSector_comercial: String(),
        SelectMotivo: String(),
        });
        setInputValues({
        Cedula:String(),
        Nombre:String(),
        Numero_caso: String(),
        Apellido:String(),
        RNC:String(),
        });
    };

  return (
   <section className={`w-full h-screen  backdrop-blur-lg z-40 ${DialogOpen ? 'flex' : 'hidden'} justify-end items-center  absolute`} >
     <Dialog visible={DialogOpen} contentStyle={{scrollbarWidth:'none'}} closeIcon={true} closeOnEscape onHide={()=>{setDialogOpen(false);LimpiarFiltros() }} position="right" className=" h-full border bg-white border-gray-300 shadow-2xs   rounded-2xl p-5">
        
        <section className=" flex justify-between items-center">
                <h2 className="text-2xl text-blue-900 font-bold">Filtros</h2>
                <button onClick={()=>{
                    setDialogOpen(false);
                }} className="border-0 h-5 w-5 flex justify-center bg-blue-100 text-blue-900 items-center rounded-full cursor-pointer">
                    <IoMdClose/>
                </button>
                
        </section>
        <section className="flex py-5  gap-2">
        <div className="flex flex-col gap-2">
            <div className="flex flex-col">
                <label className="font-semibold " >Cedula:</label>
                <InputText value={InputValues.Cedula} onChange={(e)=>setInputValues({...InputValues,Cedula:e.target.value})}
                    className={StyleGlobal.StyleInput} type="text" />
            </div>
            <div className="flex flex-col">
                <label className="font-semibold">Nombre:</label>
                <InputText value={InputValues.Nombre} onChange={(e)=>setInputValues({...InputValues,Nombre:e.target.value})}  
                    className={StyleGlobal.StyleInput} type="text" />
            </div>
            <div className="flex flex-col card">
                <label className="font-semibold" >Proveedor:</label>
                <Dropdown className="border border-gray-300 rounded-md p-2 text-gray-500" 
                    placeholder="Todos los Proveedores"
                    panelClassName= {StyleGlobal.StyleDropDown}
                    appendTo={'self'}
                    checked={false}
                    value={SelectsValues.SelectProveedor} 
                    onChange={(e)=>setSelectsValues({...SelectsValues,SelectProveedor:e.target.value})} 
                    options={DataDropDown} optionLabel="name"
                    clearIcon
                    
                />
            </div>
            <div className="flex flex-col">
                <label className="font-semibold">Oficina:</label>
                <Dropdown className="border border-gray-300 rounded-md p-2 text-gray-500" 
                    placeholder="Todos las Oficina"
                    panelClassName={StyleGlobal.StyleDropDown}
                    appendTo={'self'}
                    checked={false}
                    value={SelectsValues.SelectOficina} 
                    onChange={(e)=>setSelectsValues({...SelectsValues,SelectOficina:e.target.value})} 
                    options={DataDropDown} optionLabel="name"
                    
                />
            </div>
            <div className="flex flex-col">
                <label className="font-semibold">Tipo:</label>
                <Dropdown className="border border-gray-300 rounded-md p-2 text-gray-500" 
                    placeholder="Todos las Oficina"
                    panelClassName={StyleGlobal.StyleDropDown}
                    appendTo={'self'}
                    checked={false}
                    value={SelectsValues.SelectTipo} 
                    onChange={(e)=>setSelectsValues({...SelectsValues,SelectTipo:e.target.value})} 
                    options={DataDropDown} optionLabel="name"
                    
                />
            </div>
            <div className="flex flex-col">
                <label className="font-semibold">Via:</label>
                <Dropdown className="border border-gray-300 rounded-md p-2 text-gray-500" 
                    placeholder="Todos las Oficina"
                    panelClassName={StyleGlobal.StyleDropDown}
                    appendTo={'self'}
                    checked={false}
                    value={SelectsValues.SelectVia} 
                    onChange={(e)=>setSelectsValues({...SelectsValues,SelectVia:e.target.value})} 
                    options={DataDropDown} optionLabel="name"
                    
                />
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <div className="flex flex-col">
                <label className="font-semibold">Numero de caso:</label>
                <InputText value={InputValues.Numero_caso} onChange={(e)=>setInputValues({...InputValues,Numero_caso:e.target.value})}  
                    className={StyleGlobal.StyleInput} type="text" />
            </div >
            <div className="flex flex-col">
                <label className="font-semibold">Apellido:</label>
                <InputText value={InputValues.Apellido} onChange={(e)=>setInputValues({...InputValues,Apellido:e.target.value})}  
                    className={StyleGlobal.StyleInput} type="text" />
            </div>
            <div className="flex flex-col">
                <label className="font-semibold">RNC:</label>
                <InputText value={InputValues.RNC} onChange={(e)=>setInputValues({...InputValues,RNC:e.target.value})} 
                    className={StyleGlobal.StyleInput} type="text" />
            </div>
            <div className="flex flex-col">
                <label className="font-semibold">Oficial:</label>
                <Dropdown className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500" 
                    placeholder="Todos las Oficina"
                    panelClassName={StyleGlobal.StyleDropDown}
                    appendTo={'self'}
                    checked={false}
                    value={SelectsValues.SelectOficial} 
                    onChange={(e)=>setSelectsValues({...SelectsValues,SelectOficial:e.target.value})} 
                    options={DataDropDown} optionLabel="name"
                    
                />
            </div>
            <div className="flex flex-col">
                <label className="font-semibold">Estado:</label>
                <Dropdown className="border border-gray-300 rounded-md p-2 text-gray-500" 
                    placeholder="Todos las Oficina"
                    panelClassName={StyleGlobal.StyleDropDown}
                    appendTo={'self'}
                    checked={false}
                    value={SelectsValues.SelectEstado} 
                    onChange={(e)=>setSelectsValues({...SelectsValues,SelectEstado:e.target.value})} 
                    options={DataDropDown} optionLabel="name"
                    
                />
            </div>
            <div className="flex flex-col">
                <label className="font-semibold">Departamento:</label>
                <Dropdown className="border border-gray-300 rounded-md p-2 text-gray-500" 
                    placeholder="Todos las Oficina"
                    panelClassName={StyleGlobal.StyleDropDown}
                    appendTo={'self'}
                    checked={false}
                    value={SelectsValues.SelectDepartamento} 
                    onChange={(e)=>setSelectsValues({...SelectsValues,SelectDepartamento:e.target.value})} 
                    options={DataDropDown} optionLabel="name"
                    
                />
            </div>
        </div>
    </section>
    <section className="flex flex-col gap-2" >
        <div className="flex flex-col gap-2">
            <label className="font-semibold">Tipo de cierre:</label>
            <Dropdown className="border w-full border-gray-300 rounded-md p-2 text-gray-500" 
                    placeholder="Todos las Oficina"
                    panelClassName={StyleGlobal.StyleDropDown}
                    appendTo={'self'}
                    checked={false}
                    value={SelectsValues.SelectTipo_de_cierre} 
                    onChange={(e)=>setSelectsValues({...SelectsValues,SelectTipo_de_cierre:e.target.value})} 
                    options={DataDropDown} optionLabel="name"
                    
                />
        </div>
        <div className="flex flex-col gap-2">
            <label className="font-semibold">Resultado:</label>
            <Dropdown className="border w-full border-gray-300 rounded-md p-2 text-gray-500" 
                    placeholder="Todos las Oficina"
                    panelClassName={StyleGlobal.StyleDropDown}
                    appendTo={'self'}
                    checked={false}
                    value={SelectsValues.SelectResultado} 
                    onChange={(e)=>setSelectsValues({...SelectsValues,SelectResultado:e.target.value})} 
                    options={DataDropDown} optionLabel="name"
                    
                />
        </div>
        <div className="flex flex-col gap-2">
            <label className="font-semibold">Fecha:</label>
            <Dropdown className="border w-full border-gray-300 rounded-md p-2 text-gray-500" 
                    placeholder="Todos las Oficina"
                    panelClassName={StyleGlobal.StyleDropDown}
                    appendTo={'self'}
                    checked={false}
                    value={SelectsValues.SelectFecha} 
                    onChange={(e)=>setSelectsValues({...SelectsValues,SelectFecha:e.target.value})} 
                    options={DataDropDown} optionLabel="name"
                    
                />
        </div>
        <div className="flex flex-col gap-2">
            <label className="font-semibold">Producto / Servicio:</label>
            <Dropdown className="border w-full border-gray-300 rounded-md p-2 text-gray-500" 
                    placeholder="Todos las Oficina"
                    panelClassName={StyleGlobal.StyleDropDown}
                    appendTo={'self'}
                    checked={false}
                    value={SelectsValues.Producto_Servicio} 
                    onChange={(e)=>setSelectsValues({...SelectsValues,Producto_Servicio:e.target.value})} 
                    options={DataDropDown} optionLabel="name"
                    
                />
        </div>
        <div className="flex flex-col gap-2">
            <label className="font-semibold">Sector comercial:</label>
            <Dropdown className="border w-full border-gray-300 rounded-md p-2 text-gray-500" 
                    placeholder="Todos las Oficina"
                    panelClassName={StyleGlobal.StyleDropDown}
                    appendTo={'self'}
                    checked={false}
                    value={SelectsValues.SelectSector_comercial} 
                    onChange={(e)=>setSelectsValues({...SelectsValues,SelectSector_comercial:e.target.value})} 
                    options={DataDropDown} optionLabel="name"
                    
                />
        </div>
        <div className="flex flex-col gap-2">
            <label className="font-semibold">Motivo:</label>
            <Dropdown className="border w-full border-gray-300 rounded-md p-2 text-gray-500" 
                    placeholder="Todos las Oficina"
                    panelClassName={StyleGlobal.StyleDropDown}
                    appendTo={'self'}
                    checked={false}
                    value={SelectsValues.SelectMotivo} 
                    onChange={(e)=>setSelectsValues({...SelectsValues,SelectMotivo:e.target.value})} 
                    options={DataDropDown} optionLabel="name"
                    
                />
        </div>
        <div className="w-full flex flex-col py-5 gap-2">
            <button onClick={LimpiarFiltros} className="p-2 border-2 border-blue-900 text-blue-900 rounded-md cursor-pointer hover:opacity-80 transition-all duration-300">Limpiar filtros</button>
            <button className="p-2 border bg-blue-900 text-white rounded-md cursor-pointer hover:opacity-80 transition-all duration-300">Aplicar filtros</button>
        </div>
    </section>
</Dialog>
</section>
  )
}
