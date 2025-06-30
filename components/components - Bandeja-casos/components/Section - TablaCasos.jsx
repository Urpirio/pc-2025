'use client';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from 'react';
import { useEffect } from 'react';
import { TablaCasos } from '../Data/Data - TablaCasos';
import ButtonsHeaderTabla from '../../components - Globales/subcomponents/Buttons/Buttons - HeaderTabla';
import ButtonsBodyTabla from '../../components - Globales/subcomponents/Buttons/Buttons - BodyTabla';
import TRoundedBodyTabla from '../../components - Globales/subcomponents/TRounded/TRounded - BodyTabla';
import { Paginator } from 'primereact/paginator';


export default function SectionTablaCasos() {

    const { Actualizacion, Proveedor} = ButtonsBodyTabla();
    const { Plazo,Estado,Tipo_de_caso } = TRoundedBodyTabla();


  return (
    <section className='px-5'>
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

  ' value={TablaCasos} >
            <Column field='ID' header={'ID'}/>

            <Column sortable field='Via' header={'Via'}/>

            <Column sortable field='Tipo_de_caso' header={'Tipo de caso'}
                body={(D)=><Tipo_de_caso Status={D.Tipo_de_caso}/>}/>

            <Column sortable field='Departamento' header={'Departamento'}/>

            <Column sortable field='Proveedor' header={'Proveedor'}
                body={(Data)=><Proveedor contenido={Data.Proveedor}/>}/>

            <Column sortable field='Fecha' header={'Fecha'}/>

            <Column sortable field='Estado' header={'Estado'}
                body={(D) => <Estado Status={D.Estado}/>}/>

            <Column sortable field='Plazo' header={'Plazo'}
                body={(D) => <Plazo Status={D.Plazo}/>}/>

            <Column sortable field='Oficial' header={'Oficial'}/>

            <Column sortable field='Actualizacion' header={'Actualizacion'}
                body={(D)=><Actualizacion contenido={D.Actualizacion} ID={`/bandeja-de-casos/${D.ID}`} />}/>
            
        </DataTable>
        {/* <Paginator/> */}
    </section>
  )
}
