'use client';
import { Dropdown } from "primereact/dropdown";
import { DataDropDown } from "../../components - Globales/Data/Data - DropDown";
import { useState } from "react";

export default function SectionProvedorPersona() {

    const [SelectTipoProducto, setSelectTipoProducto] = useState(null);
    const [SelectSector,setSelectSector] = useState(null);


  return (
    <section className="flex flex-col gap-5 px-5 py-3">
        <div className="flex items-center gap-2 border-b border-gray-300 pb-2">
            <h2 className="text-lg text-blue-900 font-semibold">Proveedor Persona</h2>
        </div>
        <div className="flex w-full gap-2">
            <div className="flex flex-col gap-2 w-1/4">
                <label className="font-semibold" htmlFor="">Nombre:</label>
                <input className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500 w-full shadow-2xs" type="text" />
            </div>
            <div className="flex flex-col gap-2 w-1/4">
                <label className="font-semibold" htmlFor="">Cargo:</label>
                <input className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500 w-full shadow-2xs" type="text" />
            </div>
            <div className="flex flex-col gap-2 w-1/4">
                <label className="font-semibold" htmlFor="">Telefono:</label>
                <input className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500 w-full shadow-2xs" type="text" />
            </div>
            <div className="flex flex-col gap-2 w-1/4">
                <label className="font-semibold" htmlFor="">Correo:</label>
                <input className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500 w-full shadow-2xs" type="text" />
            </div>
        </div>
        <div className="flex gap-2 border-t border-gray-300 pt-2">
            <div className="flex flex-col gap-2 w-1/4">
                <label className="font-semibold" htmlFor="">Tipo de producto / servicio:</label>
                <Dropdown
                value={SelectTipoProducto}
                onChange={(e)=>setSelectTipoProducto(e.target.value)}
                placeholder="Seleccionar tipo de producto / servicio"
                options={DataDropDown}
                optionLabel="name"
                optionValue="name"
                className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500 w-full shadow-2xs"
                 />
            </div>
            <div className="flex flex-col gap-2 w-1/4">
                <label className="font-semibold" htmlFor="">Sector:</label>
                <Dropdown
                value={SelectSector}
                onChange={(e)=>setSelectSector(e.target.value)}
                placeholder="Seleccionar sector"
                options={DataDropDown}
                optionLabel="name"
                optionValue="name"
                className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500 w-full shadow-2xs"
                 />
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <label className="font-semibold text-blue-900" htmlFor="">Descripcion del caso:</label>
            <textarea className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500 w-full shadow-2xs h-50 resize-none"></textarea>
        </div>
    </section>
  )
}
