'use client';
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

export default function SectionTablaNavegacion() {

    const [NumberValue ,setNumberValue] = useState();

  return (
   <section className="flex justify-end w-full px-5">
    <div className=" flex gap-5 items-center">
        <div className="flex  items-center gap-2">
            <span className="font-semibold">Filas por pagina</span>
            <input className="border w-15 border-gray-300 outline-blue-400 rounded-md p-1" type="number" value={NumberValue} onChange={()=>{setNumberValue(NumberValue)}} contentEditable />
        </div>
        <div className="flex items-center gap-3">
            <span className="font-semibold">Pagina 1 de 10</span>
            <div className="flex gap-2">
                <div className="flex gap-2">
                    <button className="p-2 border border-gray-300 rounded-md disabled:opacity-50" disabled={true}>
                        <MdOutlineKeyboardDoubleArrowLeft className="text-xl"/>
                    </button>
                    <button className="p-2 border border-gray-300 rounded-md disabled:opacity-50" disabled={true}>
                        <MdOutlineKeyboardArrowLeft className="text-xl"/>
                    </button>
                </div>
                <div className="flex gap-2">
                    <button className="p-2 border border-gray-300 rounded-md">
                        <MdOutlineKeyboardArrowRight className="text-xl"/>
                    </button>
                    <button className="p-2 border border-gray-300 rounded-md">
                        <MdOutlineKeyboardDoubleArrowRight className="text-xl"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}
