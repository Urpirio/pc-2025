'use client';
// import tabla from "primereact/resources/themes/lara-light-blue/theme.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { DataTablaColaboradores } from "../Data/Data - TablaColaboradores";
import ButtonsHeaderTabla from "../../components - Globales/subcomponents/Buttons/Buttons - HeaderTabla";
import ButtonsBodyTabla from "../../components - Globales/subcomponents/Buttons/Buttons - BodyTabla";
import { SetDeployPopUp_POST_PUT_Colaboradores } from "../subcomponents/Pop-Up/Pop-Up - POST-PUT_Colaboradores";


export default function SectionTablasColaboradores({DeployPopUpColaboradores}) {


    const {Menu,Editar} = ButtonsBodyTabla();


    const BtnEdit= () => {
      SetDeployPopUp_POST_PUT_Colaboradores(true); 
      DeployPopUpColaboradores() ;

    }


  return (
   <section className="px-5">
    <DataTable className='
   w-full
   rounded-md
   text-sm
   [&_th]:text-gray-500
   [&_th>div]:flex
   [&_th>div]:items-center
   [&_th>div]:gap-2
   [&_th]:p-3
   [&_td]:p-3
   [&_td]:border-gray-300
   [&_td]:text-gray-900
   [&_td]:border-t
   [&_td]:py-3
   [&_td>div]:flex
   [&_td>div]:items-center
   [&_td>div]:gap-2

  ' value={DataTablaColaboradores} >
        <Column field="NumeroEmpleado" header={'No. de empleado'} />
        <Column field="Nombre" sortable header={'Nombre'} />
        <Column field="Correo" sortable header={'Correo'} />
        <Column field="oficina" sortable header={'Oficina'} />
        <Column field="Telefono" sortable header={'Telefono'} />
        <Column field="Rol" sortable header={'Rol'}   
          body={(Data)=><Editar Funcion={BtnEdit} contenido={Data.Rol}/>}/>

    </DataTable>    
   </section>
  )
}
