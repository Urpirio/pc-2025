'use client';
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import { DataDropDown } from "../../components - Globales/Data/Data - DropDown";
import { FiPlus } from "react-icons/fi";


export default function SectionConsumidorF() {

    const [SelectProvincia, setSelectProvincia] = useState(null);
    const [SelectGenero, setSelectGenero] = useState(null);



  return (
    <section className="flex flex-col gap-5 px-5 py-3">
        <div className="flex items-center gap-2">
            <h1 className="text-2xl text-blue-900 font-semibold">Crear caso</h1>
        </div>
        <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2 border-b border-gray-300 pb-2">
                <h2 className="text-lg text-blue-900 font-semibold">Consumidor</h2>
            </div>
            <div className="flex  gap-2">
                <article className="flex flex-col gap-2 w-1/4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Cedula:</label>
                        <div className="flex items-center gap-2">
                            <input type="text" className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500 w-full shadow-2xs" />
                            <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-900/80 transition-all duration-300 cursor-pointer">Buscar</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Telefono:</label>
                        <input type="text" className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500 w-full shadow-2xs" />
                    </div>
                </article>
                <article className="flex flex-col gap-2 w-1/4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Nombre:</label>
                        <input type="text" className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500 w-full shadow-2xs" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Telefono secundario:</label>
                        <input type="text" className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500 w-full shadow-2xs" />
                    </div>
                </article>
                <article className="flex flex-col gap-2 w-1/4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Apellido:</label>
                        <input type="text" className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500 w-full shadow-2xs" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Correo:</label>
                        <input type="text" className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500 w-full shadow-2xs" />
                    </div>
                </article>
                <article className="flex flex-col gap-2 w-1/4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold">Provincia:</label>
                        <Dropdown 
                        placeholder="Seleccionar provincia"
                        value={SelectProvincia}
                        onChange={(e)=>{setSelectProvincia(e.target.value)}}
                        options={DataDropDown}
                        optionLabel="name"
                        optionValue="name"
                        className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500  shadow-2xs"
                        />
                    </div>
                    <div className="flex gap-2">
                        <div className="flex flex-col gap-2 w-1/2">
                            <label htmlFor="" className="font-semibold">Genero:</label>
                            <Dropdown
                            placeholder="Seleccionar genero"
                            value={SelectGenero}
                            onChange={(e)=>{setSelectGenero(e.target.value)}}
                            options={DataDropDown}
                            optionLabel="name"
                            optionValue="name"
                            className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500 w-full shadow-2xs"
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-1/2">
                            <label htmlFor="" className="font-semibold">Edad:</label>
                            <input type="text" className="border border-gray-300 rounded-md p-2 outline-0 text-gray-500 w-full shadow-2xs" />
                        </div>
                    </div>
                </article>
            </div>
            <div>
                <button className="bg-blue-900 text-white px-4 py-2 rounded-md flex items-center gap-1 hover:bg-blue-900/80 transition-all duration-300 cursor-pointer">
                    <span>Agregar Otro Consumidor</span>
                    <FiPlus className="text-white text-lg" />
                </button>
            </div>
        </div>
    </section>
  )
}
