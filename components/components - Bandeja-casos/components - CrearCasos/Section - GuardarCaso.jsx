'use client';
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import { DataDropDown } from "../../components - Globales/Data/Data - DropDown";
import { StyleGlobal } from "../../../style/Styles";

export default function SectionGuardarCaso() {

    const [SelectMotivo,setSelectMotivo] = useState(null);
    const [SelectViaEntrada,setSelectViaEntrada] = useState(null);


  return (
    <section className="flex items-end gap-5 pb-5 px-5">
        <div className="flex flex-col w-1/7 min-w-40">
            <label htmlFor="">Via de Entrada</label>
            <Dropdown
                value={SelectViaEntrada}
                panelClassName={StyleGlobal.StyleDropDown}
                onChange={(e)=>setSelectViaEntrada(e.target.value)}
                placeholder="Seleccionar via"
                options={DataDropDown}
                optionLabel="name"
                optionValue="name"
                className={StyleGlobal.StyleBodyDropDown}
                 />
        </div>
        <div className="flex flex-col w-1/7 min-w-40">
            <label htmlFor="">Motivo</label>
            <Dropdown
                value={SelectMotivo}
                panelClassName={StyleGlobal.StyleDropDown}
                onChange={(e)=>setSelectViaEntrada(e.target.value)}
                placeholder="Seleccionar motivo"
                options={DataDropDown}
                optionLabel="name"
                optionValue="name"
                className={StyleGlobal.StyleBodyDropDown}
                 />
        </div>
        <div className="flex items-center w-1/7 min-w-40">
            <button className="bg-[#81BB26] px-5 py-2 text-white rounded-md">Guardar Caso</button>
        </div>
    </section>
  )
}
