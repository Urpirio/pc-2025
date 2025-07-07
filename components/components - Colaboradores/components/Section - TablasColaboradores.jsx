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
    <DataTable
      className={"border w-full border-gray-300  overflow-hidden rounded-xl"}
      tableClassName={" [&_thead>tr>th>div]:flex [&_thead>tr>th>div]:gap-5 [&_thead>tr>th]:text-gray-500 [&_thead>tr>th]:p-2 [&_thead]:bg-white" }
      rowClassName={' p-5 [&_td]:p-3 [&_td]:border-t [&_td]:border-gray-300'} 
      value={DataTablaColaboradores} >
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
