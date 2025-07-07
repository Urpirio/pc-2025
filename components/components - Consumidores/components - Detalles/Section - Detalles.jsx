'use client';
import Image from "next/image";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoArrowBackOutline } from "react-icons/io5";
import { LuSquarePen } from "react-icons/lu";
import { SetDeployPopUp_POST_PUT_Consumidores } from "../subcomponents/Pop-Up/Pop-Up - POST-PUT-Consumidores";

export default function SectionDetalles({Data}) {
  return (
    <section className="flex justify-between px-5 py-10" >
        <div className="flex items-center gap-2">
            <Link className="text-xl p-1 bg-blue-50 rounded-full flex justify-center items-center" href={'/consumidores'}>
                <IoArrowBackOutline className="text-blue-900"/>
            </Link>
            <div className="flex items-center gap-3" >
                <div className="h-15 w-15 flex justify-center items-center bg-blue-50 rounded-full">
                <FiUser className="text-3xl text-blue-900" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-[#707070]">Juan Martinex</h1>
                    <div className="flex gap-2">
                    <span className="flex items-center gap-1 text-[#707070]">
                        <LuPhone className="text-sm"/>
                        (809) 752 8456
                    </span>
                     <span className="flex items-center gap-1 text-[#707070]">
                         <MdOutlineMailOutline />
                        JuanMartinez@gmail.com
                    </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex items-center">
            <button onClick={()=>SetDeployPopUp_POST_PUT_Consumidores(true)} className="flex items-center border bg-blue-900 text-white gap-2 px-5 py-2 hover:bg-blue-900/80 transition-all duration-300 cursor-pointer rounded-md">
                <LuSquarePen/>
                <span>Editar Consumidor</span>
            </button>
        </div>
    </section>
  )
}
