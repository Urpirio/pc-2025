'use client';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { DataTablaConsumidores } from "../Data/Data - TablaConsumidores";
import ButtonsBodyTabla from "../../components - Globales/subcomponents/Buttons/Buttons - BodyTabla";

export default function SectionTablaConsumidores() {

    const { Actualizacion } = ButtonsBodyTabla();

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
   [&_td>div]:gap-2' value={DataTablaConsumidores} >
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
