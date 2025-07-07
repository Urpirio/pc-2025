'use client';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { DataTablaConsumidores } from "../Data/Data - TablaConsumidores";
import ButtonsBodyTabla from "../../components - Globales/subcomponents/Buttons/Buttons - BodyTabla";

export default function SectionTablaConsumidores() {

    const { Actualizacion } = ButtonsBodyTabla();

  return (
    <section className="px-5">
        <DataTable 
            className={"border w-full border-gray-300  overflow-hidden rounded-xl"}
            tableClassName={" [&_thead>tr>th>div]:flex [&_thead>tr>th>div]:gap-5 [&_thead>tr>th]:text-gray-500 [&_thead>tr>th]:p-2 [&_thead]:bg-white" }
            rowClassName={' p-5 [&_td]:p-3 [&_td]:border-t [&_td]:border-gray-300'} 
            value={DataTablaConsumidores} >
            <Column field="Cedula" header={'Cedula'}/>
            <Column field="Nombre" sortable header={'Nombre'}/>
            <Column field="Correo" sortable header={'Correo electronico'}/>
            <Column field="Telefono" sortable header={'Telefono'}/>
            <Column field="Casos" sortable header={'Casos'}
                body={(Data)=><Actualizacion contenido={Data.Casos} ID={`/consumidores/${Data.ID}`}/>}/>
           
        </DataTable>
    </section>
  )
}
