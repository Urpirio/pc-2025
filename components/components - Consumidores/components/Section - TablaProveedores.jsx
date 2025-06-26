'use client';
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import ButtonsHeaderTabla from "../../components - Bandeja-casos/subcomponents/Buttons/Buttons - HeaderTabla";
import ButtonsBodyTabla from "../../components - Bandeja-casos/subcomponents/Buttons/Buttons - BodyTabla";
import { DataTableProveedores } from "../Data/Data - TablaProveedores";

export default function SectionTablaProveedores() {

    const {Actualizacion} = ButtonsBodyTabla()


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
  ' value={DataTableProveedores} >
    <Column field="RNC" header={'RNC'}/>
    <Column field="Proveedor" header={'Proveedor'}/>
    <Column field="Sucursal" header={'Sucursal'}/>
    <Column field="Casos" header={<ButtonsHeaderTabla NombreColumna={'Casos'}/>}/>
    <Column field="Abiertos" header={<ButtonsHeaderTabla NombreColumna={'Abierto'}/>}/>
    <Column field="Cerrados" header={<ButtonsHeaderTabla NombreColumna={'Cerrado'}/>} body={(Data)=><Actualizacion ID={`/proveedores/${Data.RNC}`} contenido={Data.Proveedor}/>}/>
   </DataTable>
   </section>
  )
}
