'use client';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import TRoundedBodyTabla from "../../../components - Globales/subcomponents/TRounded/TRounded - BodyTabla";
import { DataTablaIncasos } from "../../Data/Data - TablaIncasos";


export default function SectionDatosGenerales() {

  const {Estado,Plazo,Tipo_de_caso} = TRoundedBodyTabla();


  return (
    <section className="w-full flex flex-col gap-5">
        <div className="border-b border-gray-300 w-full pb-5 pt-8">
            <h2 className="text-xl font-semibold text-blue-900">Datos generales</h2>
            <p className="text-gray-500 text-sm">Aqui encontraras los datos generales del caso</p>
        </div>
        <div className="">
        <DataTable value={DataTablaIncasos} className='
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

  '>
            {/* <Column field="ID" header="ID" /> */}
            <Column field="tipo_de_caso" header="Tipo de caso" body={(D)=><Tipo_de_caso Status={D.tipo_de_caso}/>} />
            <Column field="fecha_de_creacion" header="Fecha de creacion" />
            <Column field="nombre_del_consumidor" header="Nombre del consumidor" />
            <Column field="contacto_del_consumidor" header="Contacto del consumidor" />
            <Column field="via" header="Via" />
            <Column field="estado" header="Estado" body={(D)=><Estado Status={D.estado}/>} />
            <Column field="plazo" header="Plazo" body={(D)=><Plazo Status={D.plazo}/>} />
            <Column field="resultado" header="Resultado" />
        </DataTable>
        </div>
    </section>
  )
}
