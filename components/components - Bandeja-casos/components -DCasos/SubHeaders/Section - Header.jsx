'use client';
import { SetDeployProcesarCaso } from "../../subcomponents/Pop-Up/Pop-Up-ProcesarCasos";
import { CiLocationOn } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";


export default function SectionHeader() {
  return (
    //estabas montando el subgheader
    <section className="flex items-center justify-between gap-2 border-b border-gray-300 py-5">
      <div className="flex items-center gap-2">
      <Link href={''} className="bg-blue-100 text-blue-900 p-1 rounded-full">
          <IoArrowBackOutline/>
      </Link>
      <article className="flex flex-col items-start text-gray-500" >
        <div>
            <h1 className="text-4xl font-bold ">Supermercado bravo</h1>
            <p className="flex items-center">
              <CiLocationOn />
              <span>Ubicacion del super mercado</span>
            </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-2">
            <TfiWorld />
            Direccion web del super mercado
          </span>
          <span className="flex items-center gap-2">
            <LuPhone />
            Numero celular de la direccion del super mercado
          </span>
          <span className="flex items-center gap-2">
            <MdOutlineMailOutline />
            Correo electrónico del super mercado 
          </span>
        </div>
      </article>
      </div>
      <div className="flex justify-end">
        <button onClick={()=>{
          SetDeployProcesarCaso(true);
        }} className="flex items-center border bg-blue-900 text-white gap-2 px-5 py-2 hover:bg-blue-900/80 transition-all duration-300 cursor-pointer rounded-md"> 
          <TfiReload />
          <span>Procesar caso</span>
        </button>
      </div>
    </section>
  )
}
