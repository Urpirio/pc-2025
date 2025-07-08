'use client';
// import { IoArrowBackOutline } from "react-icons/io5";
import { useRef ,useState} from "react";
import { FaPlus } from "react-icons/fa6";
import { PiWarningCircleLight } from "react-icons/pi";
import { FiFileText } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";


export const usePopUpAdjuntarArchivo = () => {

    const File = useRef(null);
    const [Files,setFiles] = useState(Array());
    const [DeployPopUpAdjuntarArchivo,setDeployPopUpAdjuntarArchivo] = useState(false);


    const AddFiles = () =>{
            switch (Files?.length > 0){
                case true:
                    return <div>
                        <div className="border-0 p-1 flex items-center rounded-md bg-amber-200 text-amber-700">
                            <PiWarningCircleLight/>
                            <span>Tamaño Max. 100MB</span>
                        </div>
                        <div className="py-2 flex flex-col gap-2">
                            {Files?.map(D =>{
                            
                            return(
                                <div className="flex items-center justify-between gap-2 bg-white shadow-2xs text-blue-500 border p-1 rounded-md">
                                    <div className="flex items-center gap-2"> 
                                        <FiFileText/>
                                        <span>{D.slice(12,D.split('').length)}</span>
                                    </div>
                                    <button className="cursor-pointer hover:opacity-70 transition-all duration-200" onClick={()=>{
                                        const  ArrayFile = Files.filter(F => F != D);
                                        setFiles(ArrayFile);
                                    }}>
                                        <IoMdClose/>
                                    </button>
                                </div>
                            )
                            })}
                        </div>
                    </div>
                case false:
                    return <div className="border-3 border-dashed border-gray-300 items-center justify-center flex flex-col h-full rounded-md bg-gray-50">
                        <input  type="file" ref={File} onChange={(e)=>{
                            setFiles([...Files,e.target.value])
                        }} className="hidden"/>
                        <button className="border border-blue-500 text-blue-500 bg-white p-2 w-50 cursor-pointer hover:opacity-80 transition-all duration-200 rounded-md" 
                            onClick={(e)=>{e.preventDefault(); File.current.click()}}>Selecciona archivo</button>
                        <span className="text-gray-400 ">Tamaño Max. 100MB</span>
                    </div>
                default:
                    break;
            };
    };

    const BtnAddFiles = () =>{
            switch (Files?.length > 0){
                case true:
                    return <div className=''>
                            <input  type="file" ref={File} onChange={(e)=>{
                                setFiles([...Files,e.target.value])
                            }} className="hidden"/>
                            <button onClick={(e)=>{e.preventDefault(); File.current.click()}} 
                                className="flex items-center font-semibold cursor-pointer hover:opacity-70 transition-all duration-200 text-blue-600">
                                <FaPlus className="text-sm"/>
                                <span>Agregar documento</span>
                            </button>
                        </div>
                case false:
                    return 
            };
    };


    return({
        Files,
        AddFiles,
        BtnAddFiles,
        DeployPopUpAdjuntarArchivo,
        setDeployPopUpAdjuntarArchivo,
    })

};