'use client';
import { Dialog } from "primereact/dialog";
import { IoMdClose } from "react-icons/io";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { DataDropDown } from "../../../components - Globales/Data/Data - DropDown";
import { useState } from "react";
import { StyleGlobal } from "../../../../style/Styles";

export let SetDeployPopUpFiltroProveedores;
export default function PopUpFiltro() {

    const [DeployPopUpFiltroProveedores,setDeployPopUpFiltroProveedores] = useState(false);
    SetDeployPopUpFiltroProveedores = setDeployPopUpFiltroProveedores;
    const [SelectedSectores,setSelectedSectores] = useState(String());
    const [SelectedProvincia,setSelectedProvincia] = useState(String());
    const [SelectedProductoServicio,setSelectedProductoServicio] = useState(String())
    const [RNCValue,setRNCValue] = useState(String());

    const LimpiarFiltros = () =>{
        setSelectedProductoServicio(String())
        setRNCValue(String())
        setSelectedProvincia(String())
        setSelectedSectores(String())
    };

  return (
    <Dialog 
        visible={DeployPopUpFiltroProveedores} blockScroll 
        maskClassName={StyleGlobal.StyleMaskDialogs} 
        contentStyle={StyleGlobal.StyleContentDialogs} 
        closeIcon={true} position="right" className="w-[25%] h-full" 
        closeOnEscape onHide={()=>{setDeployPopUpFiltroProveedores(false);LimpiarFiltros()}}>

        <section className="w-full h-full border border-gray-300 shadow-2xs  bg-white rounded-xl p-5 flex flex-col gap-2">
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
                    className={StyleGlobal.StyleBodyDropDown}
                    placeholder="Todos los RNC"
                     />
                </div>
                <div className="flex flex-col">
                    <label>Provincia:</label>
                    <Dropdown className={StyleGlobal.StyleBodyDropDown}
                    panelClassName={StyleGlobal.StyleDropDown}
                    value={SelectedProvincia} onChange={(e)=>setSelectedProvincia(e.target.value)}
                    placeholder="Todas las provincias" optionLabel="name" options={DataDropDown}/>
                </div>
                <div className="flex flex-col">
                    <label >Sector comercial:</label>
                    <Dropdown className={StyleGlobal.StyleBodyDropDown}
                    panelClassName={StyleGlobal.StyleDropDown}
                    value={SelectedSectores} onChange={(e)=>setSelectedSectores(e.target.value)}
                     placeholder="Todos los sectores" optionLabel="name" options={DataDropDown}/>
                </div>
                <div className="flex flex-col">
                    <label>Producto / Servicio:</label>
                    <Dropdown className={StyleGlobal.StyleBodyDropDown}
                    panelClassName={StyleGlobal.StyleDropDown}
                    value={SelectedProductoServicio} onChange={(e)=>setSelectedProductoServicio(e.target.value)}
                    placeholder="Todos los Productos / Servicios" optionLabel="name" options={DataDropDown}/>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                    <button onClick={LimpiarFiltros} className="border-2 border-blue-900 text-blue-900 p-2 rounded-md hover:opacity-80 cursor-pointer">Limpiar filtros</button>
                    <button className="bg-blue-900 text-white p-2 rounded-md hover:opacity-80 cursor-pointer transition-opacity duration-300">Aplicar filtros</button>
            </div>
        </section>
    </Dialog>
  )
}
