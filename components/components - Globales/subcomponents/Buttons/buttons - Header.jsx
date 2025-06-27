'use client';
import { RxCaretDown } from "react-icons/rx";
import { RxCaretRight } from "react-icons/rx";
import { useState } from "react";
import Link from "next/link";
// import { usePathname } from "next/navigation";

export  function ButtonsHeader() {


  const [MenuAdminDeploy,setMenuAdminDeploy] = useState(false);
  
  const BtnAdministrativo = () => {
    
    return(
        <div className="flex flex-col">
        <button className={`flex flex-row-reverse items-center gap-2 ${MenuAdminDeploy ?'text-blue-900' : 'text-gray-500' } cursor-pointer transition-all duration-300`} onPointerEnter={()=>{
          if(!MenuAdminDeploy){
            setMenuAdminDeploy(true);
          }
        }}>
          {MenuAdminDeploy ? <RxCaretDown/> : <RxCaretRight/>}
          <span>Administracion</span>
        </button>
        <div onPointerLeave={()=>{
          if(MenuAdminDeploy){
            setMenuAdminDeploy(false)
          }
        }} className={`p-1 w-40 bg-white ${MenuAdminDeploy ? 'flex' : 'hidden'} flex-col border border-gray-300 mt-8 rounded-md absolute`}>
          <Link className="p-1 hover:bg-blue-50 hover:text-blue-900 rounded-md text-gray-600 transition-all duration-300" href={{pathname:'/colaboradores'}}>Colaboradores</Link>
          <Link className="p-1 hover:bg-blue-50 hover:text-blue-900 rounded-md text-gray-600 transition-all duration-300" href={{pathname:'/oficinas'}}>Oficinas</Link>
        </div>
       </div>
    )
  };

  return({
    BtnAdministrativo,
    setMenuAdminDeploy,
  })
}
