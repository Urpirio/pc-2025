'use client';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ButtonsHeaderTabla from "../../components - Globales/subcomponents/Buttons/Buttons - HeaderTabla";
import { DataTablaConsumidores } from "../Data/Data - TablaConsumidores";
import ButtonsBodyTabla from "../../components - Globales/subcomponents/Buttons/Buttons - BodyTabla";

export default function SectionTablaConsumidores() {
    const { Actualizacion } = ButtonsBodyTabla()
  return (
    <section className="px-5">
        <DataTable className='
   w-full
   border 
   border-gray-300 
   rounded-md
   text-sm
   [&_th]:text-gray-500
   [&_th]:p-3
   [&_td]:p-3
   [&_td]:border-gray-300
   [&_td]:text-gray-900
   [&_td]:border-t
   [&_td]:py-3
  ' value={DataTablaConsumidores}>
            <Column field="Cedula" header={'Cedula'}/>
            <Column field="Nombre" header={<ButtonsHeaderTabla NombreColumna={'Nombre'}/>}/>
            <Column field="Correo" header={<ButtonsHeaderTabla NombreColumna={'Correo electronico'}/>}/>
            <Column field="Telefono" header={<ButtonsHeaderTabla NombreColumna={'Telefono'}/>}/>
            <Column field="Casos" header={<ButtonsHeaderTabla NombreColumna={'Casos'}/>} 
                body={(Data)=><Actualizacion contenido={Data.Casos} ID={`/consumidores/${Data.ID}`}/>}/>
           
        </DataTable>
    </section>
  )
}
