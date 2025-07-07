
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { DataCardCasosOficina } from '../../Data/Data - CardCasosOficina';
        

export default function CardCasosOficina() {
  return (
    <DataTable  value={DataCardCasosOficina}  
      className={"border w-full border-gray-300 overflow-hidden rounded-xl"}
      tableClassName={" [&_thead>tr>th]:text-gray-600 [&_thead>tr>th]:p-2 [&_thead]:bg-white" }
      rowClassName={' p-5 [&_td]:p-3 [&_td]:border-t [&_td]:border-gray-300'}>
        <Column  field="Oficina" header="Oficina"></Column>
        <Column field="Reclamos" header="Reclamos" bodyClassName={'font-bold text-gray-700'}></Column>
        <Column field="Mediaciones" header="Mediaciones" bodyClassName={'font-bold text-gray-700 '}></Column>
        <Column field="Denuncias" header="Denuncias" bodyClassName={'font-bold text-gray-700'}></Column>
        <Column field="Total" header="Total" bodyClassName={'font-bold text-gray-700'}></Column>
    </DataTable>
  )
}
