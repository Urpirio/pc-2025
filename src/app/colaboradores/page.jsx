'use client';

import SectionColaboradores from "../../../components/components - Colaboradores/components/Section - Colaboradores";
import PopUp_POST_PUT_Colaboradores from "../../../components/components - Colaboradores/subcomponents/Pop-Up/Pop-Up - POST-PUT_Colaboradores";
import Header from "../../../components/components - Globales/components/Header";
import SectionTablaNavegacion from "../../../components/components - Globales/components/Section - TablaNavegacion";
import SectionTablasColaboradores from "../../../components/components - Colaboradores/components/Section - TablasColaboradores";
import { useState } from "react";

export default function page() {

  const [cpagina,setcpagina] = useState()

  return (
    <body>
        <Header/>
        <main className="flex flex-col gap-2 pb-10">
            <SectionColaboradores DeployPopUpColaboradores={()=>{setcpagina(true)}}/>
            <SectionTablasColaboradores DeployPopUpColaboradores={()=>{setcpagina(false)}}/>
            <PopUp_POST_PUT_Colaboradores Cpagina={cpagina}/>
        </main>
    </body>
  )
}
