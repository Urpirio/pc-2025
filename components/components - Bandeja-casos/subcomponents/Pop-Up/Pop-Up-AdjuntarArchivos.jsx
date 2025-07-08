'use client';
import { Dialog } from "primereact/dialog";
import { StyleGlobal } from "../../../../style/Styles";
import { IoMdClose } from "react-icons/io";
import { usePopUpAdjuntarArchivo } from "../../Hooks/Pop-Up/usePopUpAdjuntarArchivo";


export default function Pop_Up_AdjuntarArchivos() {

    const {
        DeployPopUpAdjuntarArchivo,
        setDeployPopUpAdjuntarArchivo,
        AddFiles,
        BtnAddFiles,
        Files,
    } = usePopUpAdjuntarArchivo();

  return (
    <Dialog 
        visible={DeployPopUpAdjuntarArchivo} 
        position="center"
        blockScroll closeIcon={true} 
        maskClassName={StyleGlobal.StyleMaskDialogs} 
        contentStyle={StyleGlobal.StyleContentDialogs}
        onHide={()=>setDeployPopUpAdjuntarArchivo(false)}
        className="flex p-5  bg-white w-[50%] h-[60%] border border-gray-300 rounded-xl">

    <section className="w-full h-full flex flex-col">
        <div className="flex justify-between items-center ">
            <div className="flex gap-2 items-center">
            {/* <button className="rounded-full bg-blue-50 p-1">
                <IoArrowBackOutline className="text-blue-900"/>
            </button> */}
            <h1 className="text-2xl font-bold text-blue-900">Adjuntar Archivos</h1>
            </div>
            <button onClick={()=>setDeployPopUpAdjuntarArchivo(false)} 
                className="border-0 h-5 w-5 flex justify-center bg-blue-100 text-blue-900 items-center rounded-full cursor-pointer">
                <IoMdClose/>
            </button>
        </div>
        <article className="h-full flex flex-col justify-between pt-5">
            <div className="h-[80%] flex flex-col gap-2">
                <div className="flex  justify-between">
                    <div className="flex items-center">
                        <h2 className="text-gray-600">Cargar documentacion:</h2>
                        <span className="text-red-500">*</span>
                    </div>
                    <BtnAddFiles/>
                </div>
                <AddFiles/>
            </div>
            <div className="flex justify-end gap-2">
                <button className="border border-gray-300 cursor-pointer hover:opacity-70 transition-all duration-200 rounded-md px-5 py-2 bg-white text-gray-500">Volver</button>
                <button className=" rounded-md px-5 py-2 bg-blue-900 text-white cursor-pointer hover:opacity-70 transition-all duration-200">Siguiente</button>
            </div>
        </article>
    </section>

    </Dialog>
  )
}
