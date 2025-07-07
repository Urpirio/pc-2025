'use client';
import { Dropdown } from "primereact/dropdown";
import { Dialog } from "primereact/dialog";
import { IoMdClose } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import { DataDropDown } from "../../../components - Globales/Data/Data - DropDown";
import { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { InputTextarea } from "primereact/inputtextarea";
import { StyleGlobal } from "../../../../style/Styles";

export default function PopUpAsignarCaso() {

    const [selectedOficina,setSelectedOficina] = useState('');
    const [selectedDepartamento,setSelectedDepartamento] = useState('');
    const [selectedRazon,setselectedRazon] = useState();
    const [selectedOficial,setselectedOficial] = useState('');
    const [ItemsOficial,setItemsOficial] = useState([]);


    const Search = (event) => {
        let a = DataDropDown.map(item => event.query + '-' + item)
        console.log(a)

        setItemsOficial(a)
    }

  return (
    <Dialog 
        visible={false} blockScroll closeIcon={true} 
        contentStyle={StyleGlobal.StyleContentDialogs}
        maskClassName={StyleGlobal.StyleMaskDialogs}
        className="flex p-5  w-[50%]  bg-white  border relative border-gray-300 rounded-xl">

    <section className="w-full h-full justify-between flex flex-col gap-2">
        <div className="flex justify-between items-center ">
            <div className="flex gap-2 items-center">
            <button className="rounded-full bg-blue-50 p-1">
                <IoArrowBackOutline className="text-blue-900"/>
            </button>
            <h1 className="text-2xl font-bold text-blue-900">Asignar Caso</h1>
            </div>
            <button onClick={()=>{
            }} className="border-0 h-5 w-5 flex justify-center bg-blue-100 text-blue-900 items-center rounded-full cursor-pointer">
                <IoMdClose/>
            </button>
        </div>
        <div className="flex  flex-col gap-1">
            <h2 className="text-gray-500">Oficina:</h2>
            <Dropdown
            className={StyleGlobal.StyleBodyDropDown}
            panelClassName={StyleGlobal.StyleDropDown}
            options={DataDropDown}
            placeholder="Selecciona la oficina"
            optionLabel="name"
            value={selectedOficina}
            onChange={(e)=>setSelectedOficina(e.target.value)}
            />
        </div>
        <div className="flex  flex-col gap-1">
            <h2 className="text-gray-500">Departamento:</h2>
            <Dropdown
            className={StyleGlobal.StyleBodyDropDown}
            panelClassName={StyleGlobal.StyleDropDown}
            options={DataDropDown}
            placeholder="Seleccion el departamento"
            optionLabel="name"
            value={selectedDepartamento}
            onChange={(e)=>setSelectedDepartamento(e.target.value)}
            />
        </div>
        <div>
            {/* Hacer mas tarde */}
            <h2 className="text-gray-500">Oficial:</h2>
            <AutoComplete className=" border border-gray-300 w-full p-1 flex flex-row-reverse [&_input]:outline-none [&_input]:p-2 rounded-md [&_input]:w-full" value={selectedOficial} 
                // showEmptyMessage={true}
                suggestions={ItemsOficial} completeMethod={Search} onChange={(e)=>setselectedOficial(e.value)} field="name"/>
        </div>
        <div className="flex flex-col gap-2">
            <h2 className="text-gray-500">Razon: <span className="text-red-600">*</span></h2>
            <Dropdown
            className={StyleGlobal.StyleBodyDropDown}
            panelClassName={StyleGlobal.StyleDropDown}
            options={DataDropDown}
            placeholder="Seleccion el departamento"
            optionLabel="name"
            value={selectedDepartamento}
            onChange={(e)=>setSelectedDepartamento(e.target.value)}
            />
        </div>
        <div className="flex flex-col gap-2">
            <h2 className="text-gray-500">Detalles de la razon: <span className="text-red-600">*</span></h2>
            <InputTextarea className="w-full resize-none border border-gray-300 rounded-md p-2 h-30 "  value={selectedRazon} onChange={(e)=>{setselectedRazon(e.target.value)}}/>
        </div>
        <div className="flex items-center justify-end gap-2 w-full">
            <button onClick={()=>{

            }} className="border border-gray-300 rounded-md px-5 py-2 bg-white text-gray-500">Volver</button>
            <button className=" rounded-md px-5 py-2 bg-blue-900 text-white">Siguiente</button>
        </div>
        </section>
    </Dialog>
  )
}
