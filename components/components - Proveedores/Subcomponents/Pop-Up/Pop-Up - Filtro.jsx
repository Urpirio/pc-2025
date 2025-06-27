'use client';
import { Dialog } from "primereact/dialog";
import { IoMdClose } from "react-icons/io";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { DataDropDown } from "../../../components - Globales/Data/Data - DropDown";
import { useState } from "react";

export let SetDeployPopUpFiltroProveedores;
export default function PopUpFiltro() {

    const [DeployPopUpFiltroProveedores,setDeployPopUpFiltroProveedores] = useState(false);
    SetDeployPopUpFiltroProveedores = setDeployPopUpFiltroProveedores;
    const [SelectedSectores,setSelectedSectores] = useState('');
    const [SelectedProvincia,setSelectedProvincia] = useState('');
    const [SelectedProductoServicio,setSelectedProductoServicio] = useState('')
    const [RNCValue,setRNCValue] = useState()

  return (
    <Dialog visible={DeployPopUpFiltroProveedores} blockScroll closeIcon={true} position="right"
    className="w-[25%] h-full" closeOnEscape onHide={()=>{setDeployPopUpFiltroProveedores(false)}}>
        <section className="w-full h-full border border-gray-300 shadow-2xs bg-white rounded-xl p-5 flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <h2  className="text-3xl font-bold text-blue-900">Filtros</h2>
                <button onClick={()=>{
                    setDeployPopUpFiltroProveedores(false)
                }} className="rounded-full h-7 w-7 flex items-center justify-center bg-blue-50 hover:opacity-80 cursor-pointer transition-opacity duration-300">
                    <IoMdClose className="text-xl text-blue-900"/>
                </button>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <label>RNC:</label>
                    <InputText 
                    value={RNCValue} onChange={(e)=>setRNCValue(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 outline-none"
                    placeholder="Todos los RNC"
                     />
                </div>
                <div className="flex flex-col">
                    <label>Provincia:</label>
                    <Dropdown className="border border-gray-300 rounded-md p-2"
                    value={SelectedProvincia} onChange={(e)=>setSelectedProvincia(e.target.value)}
                    placeholder="Todas las provincias" optionLabel="name" options={DataDropDown}/>
                </div>
                <div className="flex flex-col">
                    <label >Sector comercial:</label>
                    <Dropdown className="border border-gray-300 rounded-md p-2"
                    value={SelectedSectores} onChange={(e)=>setSelectedSectores(e.target.value)}
                     placeholder="Todos los sectores" optionLabel="name" options={DataDropDown}/>
                </div>
                <div className="flex flex-col">
                    <label>Producto / Servicio:</label>
                    <Dropdown className="border border-gray-300 rounded-md p-2"
                    value={SelectedProductoServicio} onChange={(e)=>setSelectedProductoServicio(e.target.value)}
                    placeholder="Todos los Productos / Servicios" optionLabel="name" options={DataDropDown}/>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                    <button className="border-2 border-blue-900 text-blue-900 p-2 rounded-md hover:opacity-80 cursor-pointer">Limpiar filtros</button>
                    <button className="bg-blue-900 text-white p-2 rounded-md hover:opacity-80 cursor-pointer transition-opacity duration-300">Aplicar filtros</button>
            </div>
        </section>
    </Dialog>
  )
}
