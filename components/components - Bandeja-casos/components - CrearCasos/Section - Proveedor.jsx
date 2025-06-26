'use client';
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import { DataDropDown } from "../../components - Globales/Data/Data - DropDown";
import { FiPlus } from "react-icons/fi";

export default function SectionProveedor() {
    
    const [SelectProvincia, setSelectProvincia] = useState(null);

  return (
    <section className="flex flex-col gap-5 px-5 py-3">
        <div className="flex items-center gap-2 border-b border-gray-300 pb-2">
            <h2 className="text-lg text-blue-900 font-semibold">Proveedor</h2>
        </div>
        <div className="flex  gap-5">
            <article className="flex flex-col gap-2 w-1/4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">Nombre Comercial:</label>
                    <input type="text" className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500 w-full shadow-2xs" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">Provincia:</label>
                    <Dropdown
                    placeholder="Seleccionar provincia"
                    value={SelectProvincia}
                    onChange={(e)=>{setSelectProvincia(e.target.value)}}
                    options={DataDropDown}
                    optionLabel="name"
                    optionValue="name"
                    className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500 w-full shadow-2xs"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">Correo:</label>
                    <input type="text" className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500 w-full shadow-2xs" />
                </div>
            </article>
            <article className="flex flex-col gap-2 w-1/4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">RNC:</label>
                    <input type="text" className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500 w-full shadow-2xs" />   
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">Punto de referencia:</label>
                    <input type="text" className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500 w-full shadow-2xs" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">Sitio web:</label>
                    <input type="text" className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500 w-full shadow-2xs" />
                </div>
            </article>
            <article className="flex flex-col gap-2 w-1/4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">Direccion:</label>
                    <input type="text" className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500 w-full shadow-2xs" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">Telefono:</label>
                    <input type="text" className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500 w-full shadow-2xs" />
                </div>
            </article>
            <article className="flex flex-col gap-2 w-1/4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">Sucursal:</label>
                    <input type="text" className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500 w-full shadow-2xs" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">Telefono secundario:</label>
                    <input type="text" className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500 w-full shadow-2xs" />
                </div>
            </article>
        </div>
        <div>
            <button className="bg-blue-900 text-white px-4 py-2 rounded-md flex items-center gap-1 hover:bg-blue-900/80 transition-all duration-300 cursor-pointer">
                <span>Agregar otro proveedor</span>
                <FiPlus className="text-white text-lg" />
            </button>
        </div>
    </section>
  )
}
