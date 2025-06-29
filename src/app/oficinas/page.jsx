'use client';
import Header from "../../../components/components - Globales/components/Header";
import SectionOficinas from "../../../components/components - Oficinas/components/Section - Oficinas";
import SectionTablaOficinas from "../../../components/components - Oficinas/components/Section - TablaOficinas";
import PopUp_POST_PUT_Oficinas from "../../../components/components - Oficinas/subcomponents/Pop-Up/Pop-Up - POST-PUT_Oficinas";
import { useState } from "react";

export default function page() {



  const [cpagina,setcpagina] = useState(false);

  return (
    <body> 
        <Header/>
        <main className="flex flex-col gap-2">
            <SectionOficinas DeployPopUpOficinas={()=>{setcpagina(true)}}/>
            <SectionTablaOficinas DeployPopUpOficinas={()=>{setcpagina(false)}}/>
            <PopUp_POST_PUT_Oficinas Cpagina={cpagina}/>
        </main>
    </body>
  )
}
