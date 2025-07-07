'use client';
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import { DataDropDown } from "../../components - Globales/Data/Data - DropDown";
import { FiPlus } from "react-icons/fi";
import { InputText } from "primereact/inputtext";
import { StyleGlobal } from "../../../style/Styles";

export default function SectionProveedor() {
    
    const [SelectProvincia, setSelectProvincia] = useState(String());
    const [InputValues,setInputValues] = useState({
        Nombre_Comercial:String(),
        Correo: String(),
        RNC: String(),
        Punto_referencia: String(),
        Sitio_web: String(),
        Direccion: String(),
        Telefono: String(),
        Sucursal: String(),
        Telefono_secundario: String(),
    });

  return (
    <section className="flex flex-col gap-5 px-5 py-3">
        <div className="flex items-center gap-2 border-b border-gray-300 pb-2">
            <h2 className="text-lg text-blue-900 font-semibold">Proveedor</h2>
        </div>
        <div className="flex  gap-5">
            <article className="flex flex-col gap-2 w-1/4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">Nombre Comercial:</label>
                    <InputText value={InputValues.Nombre_Comercial} onChange={(e)=>setInputValues({...InputValues,Nombre_Comercial:e.target.value})} 
                        className={StyleGlobal.StyleInput} />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">Provincia:</label>
                    <Dropdown
                    placeholder="Seleccionar provincia"
                    value={SelectProvincia}
                    panelClassName={StyleGlobal.StyleDropDown}
                    onChange={(e)=>{setSelectProvincia(e.target.value)}}
                    options={DataDropDown}
                    optionLabel="name"
                    optionValue="name"
                    className={StyleGlobal.StyleBodyDropDown}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">Correo:</label>
                    <InputText value={InputValues.Correo} onChange={(e)=>setInputValues({...InputValues,Correo:e.target.value})} 
                        className={StyleGlobal.StyleInput} />
                </div>
            </article>
            <article className="flex flex-col gap-2 w-1/4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">RNC:</label>
                    <InputText value={InputValues.RNC} onChange={(e)=>setInputValues({...InputValues,RNC:e.target.value})} 
                        className={StyleGlobal.StyleInput} />   
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">Punto de referencia:</label>
                    <InputText value={InputValues.Punto_referencia} onChange={(e)=>setInputValues({...InputValues,Punto_referencia:e.target.value})} 
                        className={StyleGlobal.StyleInput} />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">Sitio web:</label>
                    <InputText value={InputValues.Sitio_web} onChange={(e)=>setInputValues({...InputValues,Sitio_web:e.target.value})} 
                        className={StyleGlobal.StyleInput} />
                </div>
            </article>
            <article className="flex flex-col gap-2 w-1/4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">Direccion:</label>
                    <InputText value={InputValues.Direccion} onChange={(e)=>setInputValues({...InputValues,Direccion:e.target.value})} 
                        className={StyleGlobal.StyleInput} />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">Telefono:</label>
                    <InputText value={InputValues.Telefono} onChange={(e)=>setInputValues({...InputValues,Telefono:e.target.value})} 
                        className={StyleGlobal.StyleInput} />
                </div>
            </article>
            <article className="flex flex-col gap-2 w-1/4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">Sucursal:</label>
                    <InputText value={InputValues.Sucursal} onChange={(e)=>setInputValues({...InputValues,Sucursal:e.target.valueAsDate})} 
                        className={StyleGlobal.StyleInput} />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="font-semibold">Telefono secundario:</label>
                    <InputText value={InputValues.Telefono_secundario} onChange={(e)=>setInputValues({...InputValues,Telefono_secundario:e.target.value})} 
                        className={StyleGlobal.StyleInput} />
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
