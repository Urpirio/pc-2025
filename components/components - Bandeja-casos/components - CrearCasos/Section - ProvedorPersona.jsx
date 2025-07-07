'use client';
import { Dropdown } from "primereact/dropdown";
import { DataDropDown } from "../../components - Globales/Data/Data - DropDown";
import { useState } from "react";
import { StyleGlobal } from "../../../style/Styles";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

export default function SectionProvedorPersona() {

    const [SelectTipoProducto, setSelectTipoProducto] = useState(String());
    const [SelectSector,setSelectSector] = useState(String());
    const [InputValues,setInputValues] = useState({
        Nombre: String(),
        Cargo: String(),
        Telefono: String(),
        Correo: String(),
        Descripcion_caso: String(),
    })


  return (
    <section className="flex flex-col gap-5 px-5 py-3">
        <div className="flex items-center gap-2 border-b border-gray-300 pb-2">
            <h2 className="text-lg text-blue-900 font-semibold">Proveedor Persona</h2>
        </div>
        <div className="flex w-full gap-2">
            <div className="flex flex-col gap-2 w-1/4">
                <label className="font-semibold">Nombre:</label>
                <InputText value={InputValues.Nombre} onChange={(e)=>setInputValues({...InputValues,Nombre:e.target.value})} 
                    className={StyleGlobal.StyleInput} type="text" />
            </div>
            <div className="flex flex-col gap-2 w-1/4">
                <label className="font-semibold">Cargo:</label>
                <InputText value={InputValues.Cargo} onChange={(e)=>setInputValues({...InputValues,Cargo:e.target.value})} 
                    className={StyleGlobal.StyleInput} type="text" />
            </div>
            <div className="flex flex-col gap-2 w-1/4">
                <label className="font-semibold">Telefono:</label>
                <InputText value={InputValues.Telefono} onChange={(e)=>setInputValues({...InputValues,Telefono:e.target.value})} 
                    className={StyleGlobal.StyleInput} type="text" />
            </div>
            <div className="flex flex-col gap-2 w-1/4">
                <label className="font-semibold">Correo:</label>
                <InputText value={InputValues.Correo} onChange={(e)=>setInputValues({...InputValues,Correo:e.target.value})} 
                    className={StyleGlobal.StyleInput} type="text" />
            </div>
        </div>
        <div className="flex gap-2 border-t border-gray-300 pt-2">
            <div className="flex flex-col gap-2 w-1/4">
                <label className="font-semibold">Tipo de producto / servicio:</label>
                <Dropdown
                value={SelectTipoProducto}
                onChange={(e)=>setSelectTipoProducto(e.target.value)}
                panelClassName={StyleGlobal.StyleDropDown}
                placeholder="Seleccionar tipo de producto / servicio"
                options={DataDropDown}
                optionLabel="name"
                optionValue="name"
                className={StyleGlobal.StyleBodyDropDown}
                 />
            </div>
            <div className="flex flex-col gap-2 w-1/4">
                <label className="font-semibold">Sector:</label>
                <Dropdown
                value={SelectSector}
                onChange={(e)=>setSelectSector(e.target.value)}
                panelClassName={StyleGlobal.StyleDropDown}
                placeholder="Seleccionar sector"
                options={DataDropDown}
                optionLabel="name"
                optionValue="name"
                className={StyleGlobal.StyleBodyDropDown}
                 />
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900">Descripcion del caso:</label>
            <InputTextarea value={InputValues.Descripcion_caso} onChange={(e)=>setInputValues({...InputValues,Descripcion_caso:e.target.value})} 
                className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500 w-full shadow-2xs h-50 resize-none"></InputTextarea>
        </div>
    </section>
  )
}
