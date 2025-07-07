'use client';
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import ButtonsHeaderTabla from "../../components - Globales/subcomponents/Buttons/Buttons - HeaderTabla";
import ButtonsBodyTabla from "../../components - Globales/subcomponents/Buttons/Buttons - BodyTabla";
import { DataTableProveedores } from "../Data/Data - TablaProveedores";


export default function SectionTablaProveedores() {

    const {Actualizacion,Proveedor} = ButtonsBodyTabla()


  return (
   <section className="px-5">
    <DataTable             
      className={"border w-full border-gray-300  overflow-hidden rounded-xl"}
      tableClassName={" [&_thead>tr>th>div]:flex [&_thead>tr>th>div]:gap-5 [&_thead>tr>th]:text-gray-500 [&_thead>tr>th]:p-2 [&_thead]:bg-white" }
      rowClassName={' p-5 [&_td]:p-3 [&_td]:border-t [&_td]:border-gray-300'}  
      value={DataTableProveedores} >
    <Column field="RNC" header={'RNC'}/>
    <Column field="Proveedor" header={'Proveedor'} body={(Data)=><Proveedor contenido={Data.Proveedor}/>}/>
    <Column field="Sucursal" header={'Sucursal'}/>
    <Column field="Casos" sortable header={'Casos'}/>
    <Column field="Abiertos" sortable header={'Abierto'}/>
    <Column field="Cerrados" sortable header={'Cerrado'} body={(Data)=><Actualizacion ID={`/proveedores/${Data.RNC}`} contenido={Data.Proveedor}/>}/>
   </DataTable>
   </section>
  )
}
