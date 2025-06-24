'use client';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from 'react';
import { useEffect } from 'react';
import { TablaCasos } from '../Data/Data - TablaCasos';
import ButtonsHeaderTabla from '../subcomponents/Buttons/Buttons - HeaderTabla';
import ButtonsBodyTabla from '../subcomponents/Buttons/Buttons - BodyTabla';
import TRoundedBodyTabla from '../subcomponents/TRounded/TRounded - BodyTabla';


export default function SectionTablaCasos() {

    const { Actualizacion, Proveedor} = ButtonsBodyTabla();
    const { Plazo,Estado,Tipo_de_caso } = TRoundedBodyTabla();


  return (
    <section className='px-5'>
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
       ' value={TablaCasos}>
            <Column field='ID' 
                header={<ButtonsHeaderTabla NombreColumna={'ID'}/>}
            />

            <Column field='Via' 
                header={<ButtonsHeaderTabla NombreColumna={'Via'}/>}
            />

            <Column field='Tipo_de_caso' 
                header={<ButtonsHeaderTabla NombreColumna={'Tipo de caso'}/>} 
                body={(D)=><Tipo_de_caso Status={D.Tipo_de_caso}/>}
            />

            <Column field='Departamento' 
                header={<ButtonsHeaderTabla NombreColumna={'Departamento'}/>}
            />

            <Column field='Proveedor' 
                header={<ButtonsHeaderTabla NombreColumna={'Proveedor'}/>}
                body={(Data)=><Proveedor contenido={Data.Proveedor}/>}
            />

            <Column field='Fecha' 
                header={<ButtonsHeaderTabla NombreColumna={'Fecha'}/>}
            />

            <Column field='Estado' 
                header={<ButtonsHeaderTabla NombreColumna={'Estado'}/>}
                body={(D) => <Estado Status={D.Estado}/>}
            />

            <Column field='Plazo' 
                header={<ButtonsHeaderTabla NombreColumna={'Plazo'}/>}
                body={(D) => <Plazo Status={D.Plazo}/>}
            />

            <Column field='Oficial' 
                header={<ButtonsHeaderTabla NombreColumna={'Oficial'}/>}
            />

            <Column field='Actualizacion' 
                header={<ButtonsHeaderTabla NombreColumna={'Actualizacion'}/>} 
                body={(D)=><Actualizacion contenido={D.Actualizacion}/>}
            />
            
        </DataTable>
    </section>
  )
}
