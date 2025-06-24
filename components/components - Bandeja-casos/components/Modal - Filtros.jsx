'use client';
import { Dialog } from "primereact/dialog";
import { IoMdClose } from "react-icons/io";
import { Dropdown } from "primereact/dropdown";
import { useEffect, useState } from "react";
import { DataDropDown } from "../Data/Data - DropDown";
import {  } from "react-icons/io";

export let SetDialogOpen;
export default function ModalFiltros() {

    const [DialogOpen, setDialogOpen] = useState();
    SetDialogOpen = setDialogOpen;

    const [SelectProveedor,setSelectProveedor] = useState();
    const [SelectOficina,setSelectOficina] = useState();
    const [SelectTipo ,setSelectTipo] = useState()
    const [SelectVia ,setSelectVia] = useState()
    const [SelectOficial ,setSelectOficial] = useState()
    const [SelectDepartamento ,setSelectDepartamento] = useState()
    const [SelectEstado ,setSelectEstado] = useState();
    const [SelectTipo_de_cierre,setSelectTipo_de_cierre] = useState();
    const [SelectResultado,setSelectResultado] = useState();
    const [SelectFecha,setSelectFecha] = useState();
    const [Producto_Servicio,setProducto_Servicio] = useState();
    const [SelectSector_comercial,setSelectSector_comercial] = useState();
    const [SelectMotivo,setSelectMotivo] = useState();


  return (
   <section className={`w-full h-screen  backdrop-blur-lg z-40 ${DialogOpen ? 'flex' : 'hidden'} justify-end items-center  absolute`} >
     <Dialog visible={DialogOpen} closeIcon={true} position="right" className=" h-full border bg-white border-gray-300 shadow-2xs   rounded-2xl p-5">
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
                <input className="border border-gray-300 rounded-md p-2 outline-0" type="text" />
            </div>
            <div className="flex flex-col">
                <label className="font-semibold">Nombre:</label>
                <input className="border border-gray-300 rounded-md p-2 outline-0" type="text" />
            </div>
            <div className="flex flex-col card">
                <label className="font-semibold" >Proveedor:</label>
                <Dropdown className="border border-gray-300 rounded-md p-2 " 
                    placeholder="Todos los Proveedores"
                    checked={false}
                    value={SelectProveedor} 
                    onChange={(e)=>{setSelectProveedor(e.target.value)}} 
                    options={DataDropDown} optionLabel="name"
                    clearIcon
                    
                />
            </div>
            <div className="flex flex-col">
                <label className="font-semibold">Oficina:</label>
                <Dropdown className="border border-gray-300 rounded-md p-2 placeholder:text-gray-300" 
                    placeholder="Todos las Oficina"
                    checked={false}
                    value={SelectOficina} 
                    onChange={(e)=>{setSelectOficina(e.target.value)}} 
                    options={DataDropDown} optionLabel="name"
                    
                />
            </div>
            <div className="flex flex-col">
                <label className="font-semibold">Tipo:</label>
                <Dropdown className="border border-gray-300 rounded-md p-2 placeholder:text-gray-300" 
                    placeholder="Todos las Oficina"
                    checked={false}
                    value={SelectTipo} 
                    onChange={(e)=>{setSelectTipo(e.target.value)}} 
                    options={DataDropDown} optionLabel="name"
                    
                />
            </div>
            <div className="flex flex-col">
                <label className="font-semibold">Via:</label>
                <Dropdown className="border border-gray-300 rounded-md p-2 placeholder:text-gray-300" 
                    placeholder="Todos las Oficina"
                    checked={false}
                    value={SelectVia} 
                    onChange={(e)=>{setSelectVia(e.target.value)}} 
                    options={DataDropDown} optionLabel="name"
                    
                />
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <div className="flex flex-col">
                <label className="font-semibold">Numero de caso:</label>
                <input className="border border-gray-300 rounded-md p-2 outline-0" type="text" />
            </div >
            <div className="flex flex-col">
                <label className="font-semibold">Apellido:</label>
                <input className="border border-gray-300 rounded-md p-2 outline-0" type="text" />
            </div>
            <div className="flex flex-col">
                <label className="font-semibold">RNC:</label>
                <input className="border border-gray-300 rounded-md p-2 outline-0" type="text" />
            </div>
            <div className="flex flex-col">
                <label className="font-semibold">Oficial:</label>
                <Dropdown className="border border-gray-300 rounded-md p-2 outline-0 placeholder:text-gray-300" 
                    placeholder="Todos las Oficina"
                    checked={false}
                    value={SelectOficial} 
                    onChange={(e)=>{setSelectOficial(e.target.value)}} 
                    options={DataDropDown} optionLabel="name"
                    
                />
            </div>
            <div className="flex flex-col">
                <label className="font-semibold">Estado:</label>
                <Dropdown className="border border-gray-300 rounded-md p-2 placeholder:text-gray-300" 
                    placeholder="Todos las Oficina"
                    checked={false}
                    value={SelectEstado} 
                    onChange={(e)=>{setSelectEstado(e.target.value)}} 
                    options={DataDropDown} optionLabel="name"
                    
                />
            </div>
            <div className="flex flex-col">
                <label className="font-semibold">Departamento:</label>
                <Dropdown className="border border-gray-300 rounded-md p-2 placeholder:text-gray-300" 
                    placeholder="Todos las Oficina"
                    checked={false}
                    value={SelectDepartamento} 
                    onChange={(e)=>{setSelectDepartamento(e.target.value)}} 
                    options={DataDropDown} optionLabel="name"
                    
                />
            </div>
        </div>
    </section>
    <section className="flex flex-col gap-2" >
        <div className="flex flex-col gap-2">
            <label className="font-semibold">Tipo de cierre:</label>
            <Dropdown className="border w-full border-gray-300 rounded-md p-2 placeholder:text-gray-300" 
                    placeholder="Todos las Oficina"
                    checked={false}
                    value={SelectTipo_de_cierre} 
                    onChange={(e)=>{setSelectTipo_de_cierre(e.target.value)}} 
                    options={DataDropDown} optionLabel="name"
                    
                />
        </div>
        <div className="flex flex-col gap-2">
            <label className="font-semibold">Resultado:</label>
            <Dropdown className="border w-full border-gray-300 rounded-md p-2 placeholder:text-gray-300" 
                    placeholder="Todos las Oficina"
                    checked={false}
                    value={SelectResultado} 
                    onChange={(e)=>{setSelectResultado(e.target.value)}} 
                    options={DataDropDown} optionLabel="name"
                    
                />
        </div>
        <div className="flex flex-col gap-2">
            <label className="font-semibold">Fecha:</label>
            <Dropdown className="border w-full border-gray-300 rounded-md p-2 placeholder:text-gray-300" 
                    placeholder="Todos las Oficina"
                    checked={false}
                    value={SelectFecha} 
                    onChange={(e)=>{setSelectFecha(e.target.value)}} 
                    options={DataDropDown} optionLabel="name"
                    
                />
        </div>
        <div className="flex flex-col gap-2">
            <label className="font-semibold">Producto / Servicio:</label>
            <Dropdown className="border w-full border-gray-300 rounded-md p-2 placeholder:text-gray-300" 
                    placeholder="Todos las Oficina"
                    checked={false}
                    value={Producto_Servicio} 
                    onChange={(e)=>{setProducto_Servicio(e.target.value)}} 
                    options={DataDropDown} optionLabel="name"
                    
                />
        </div>
        <div className="flex flex-col gap-2">
            <label className="font-semibold">Sector comercial:</label>
            <Dropdown className="border w-full border-gray-300 rounded-md p-2 placeholder:text-gray-300" 
                    placeholder="Todos las Oficina"
                    checked={false}
                    value={SelectSector_comercial} 
                    onChange={(e)=>{setSelectSector_comercial(e.target.value)}} 
                    options={DataDropDown} optionLabel="name"
                    
                />
        </div>
        <div className="flex flex-col gap-2">
            <label className="font-semibold">Motivo:</label>
            <Dropdown className="border w-full border-gray-300 rounded-md p-2 placeholder:text-gray-300" 
                    placeholder="Todos las Oficina"
                    checked={false}
                    value={SelectMotivo} 
                    onChange={(e)=>{setSelectMotivo(e.target.value)}} 
                    options={DataDropDown} optionLabel="name"
                    
                />
        </div>
        <div className="w-full flex flex-col py-5 gap-2">
            <button className="p-2 border-2 border-blue-900 text-blue-900 rounded-md cursor-pointer hover:opacity-80 transition-all duration-300">Limpiar filtros</button>
            <button className="p-2 border bg-blue-900 text-white rounded-md cursor-pointer hover:opacity-80 transition-all duration-300">Aplicar filtros</button>
        </div>
    </section>
</Dialog>
</section>
  )
}
