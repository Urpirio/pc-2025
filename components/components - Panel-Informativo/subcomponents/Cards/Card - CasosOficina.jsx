
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { DataCardCasosOficina } from '../../Data/Data - CardCasosOficina';
        

export default function CardCasosOficina() {
  return (
    <DataTable value={DataCardCasosOficina}  className="
        w-full
        border 
        border-gray-300 
        rounded-md
        text-sm
        [&_th]:text-gray-500
        [&_th]:p-3
        [&_td]:p-3
        [&_td]:border-gray-300
        [&_td]:font-semibold
        [&_td]:text-gray-500
        [&_td]:border-t
        [&_td]:py-5
       
        ">
        <Column  field="Oficina" header="Oficina"></Column>
        <Column field="Reclamos" header="Reclamos"></Column>
        <Column field="Mediaciones" header="Mediaciones"></Column>
        <Column field="Denuncias" header="Denuncias"></Column>
        <Column field="Total" header="Total"></Column>
    </DataTable>
  )
}
