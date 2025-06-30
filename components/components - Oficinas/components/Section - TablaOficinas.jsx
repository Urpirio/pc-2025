'use client';
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { DataTablaOficinas } from "../Data/Data - TablaOficinas";
import ButtonsBodyTabla from "../../components - Globales/subcomponents/Buttons/Buttons - BodyTabla";
import { SetDeployPopUp_POST_PUT_Oficinas } from "../subcomponents/Pop-Up/Pop-Up - POST-PUT_Oficinas";

export default function SectionTablaOficinas({DeployPopUpOficinas}) {

    const {Editar} = ButtonsBodyTabla();

    const BtnEditar = () => {
        SetDeployPopUp_POST_PUT_Oficinas(true)
        DeployPopUpOficinas();
    };

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
   [&_td>div]:gap-2' value={DataTablaOficinas} >
        <Column  field="ID" header={'ID'}/>
        <Column sortable field="Nombre" header={'Nombre'}/>
        <Column sortable field="Direccion" header={'Direccion'}/>
        <Column sortable field="Correo" header={'Correo'}/>
        <Column sortable field="Telefono" header={'Telefono'}/>
        <Column sortable field="Provincia" header={'Provincia'} 
            body={(Data)=><Editar Funcion={BtnEditar} contenido={Data.Provincia}/>}/>
    </DataTable>
   </section>
  )
}
