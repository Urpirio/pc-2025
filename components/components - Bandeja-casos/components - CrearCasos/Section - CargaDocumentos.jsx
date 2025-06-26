'use client';
import { CiImageOn } from "react-icons/ci";
import { FileUpload } from "primereact/fileupload";
import { useState, useEffect, useRef } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export default function SectionCargaDocumentos() {

    const [Files, setFiles] = useState([]);
    const fileInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        fileInputRef.current.click();
        
        
    }

    const handleFileChange = (e) => {
        setFiles([...Files, e.target.files[0]]);
    }

    useEffect(()=>{
        console.log(Files)
    },[Files])


  return (
    <section className="flex flex-col gap-2 px-5 py-3">
        <div>
            <h2 className="text-lg text-gray-600 font-semibold">Carga de documentos <span className="text-red-500">*</span></h2>
        </div>
        <div  className="flex flex-wrap border w-full border-gray-300 rounded-md p-5">
            {Files?.length > 0 ? 
                <article className="flex flex-col  w-full  gap-5">
                    <div className="flex flex-wrap items-center justify-center gap-2 ">
                    {Files.map((items) => {

                        return(
                        <article key={items.name} id={items.name} className="flex items-center w-80 justify-around gap-2 px-1 py-3 border border-gray-300 rounded-md">
                            <IoDocumentTextOutline className="text-2xl"/>
                            <span>{
                                items.name.split('.')[0].split('').length > 10 
                                ? items.name.split('.')[0].slice(0,15)+'...' 
                                : items.name.split('.')[0]}
                            </span>
                            <IoMdClose onClick={()=>{
                                const ArrayItems = [];
                                Files.filter((It)=>{
                                    
                                    if(It.name != items.name){
                                        ArrayItems.push(It)
                                    }
                                });
                                setFiles(ArrayItems);
                            }}/>
                        </article>
                            )
                    })}
                    </div>
                    <div className="flex flex-col w-full items-start gap-2">
                        <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
                        <button onClick={handleSubmit} type="submit" className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md flex items-center gap-1 hover:bg-blue-500/10 transition-all duration-300 cursor-pointer">
                            <span>Selecciona archivo</span>
                        </button>
                        {/* <span className="text-gray-500 text-sm">Tamaño máximo: 100MB</span> */}
                    </div>
                </article> 
                
                
                : <article className="flex flex-col w-full items-center  gap-5" >
                <div className="flex flex-col items-center justify-center gap-2">
                    <CiImageOn className="text-gray-500 text-4xl" />
                    <span className="text-gray-500 text-sm">Arrastre y suelte archivos aquí o haga clic para cargar</span>
                </div>
                {/* <div className=" flex items-center justify-center h-1 bg-gray-500 relative">
                    <span className="absolute px-1 bg-white text-gray-500 text-lg">
                        {Files?.length}
                    </span>
                </div> */}
                <div className="flex flex-col items-center justify-center gap-2">
                    <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
                    <button onClick={handleSubmit} type="submit" className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md flex items-center gap-1 hover:bg-blue-500/10 transition-all duration-300 cursor-pointer">
                        <span>Selecciona archivo</span>
                    </button>
                    <span className="text-gray-500 text-sm">Tamaño máximo: 100MB</span>
                </div>
            </article>}
        </div>
    </section>
  )
}
