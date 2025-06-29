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

   [&_td>div]:gap-2

  ' value={DataTableProveedores} paginator paginatorLeft rows={10} rowsPerPageOptions={[1,5,10,20,50,100]} paginatorTemplate=" RowsPerPageDropdown  CurrentPageReport FirstPageLink PrevPageLink NextPageLink LastPageLink"
    currentPageReportTemplate=" Pagina  {currentPage} de {totalPages}">
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
