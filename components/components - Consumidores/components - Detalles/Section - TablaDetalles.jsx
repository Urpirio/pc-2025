'use client';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { RxMixerHorizontal } from "react-icons/rx";
import { useState } from "react";
import SectionTablaNavegacion from "../../components - Globales/components/Section - TablaNavegacion";
import ButtonsHeaderTabla from "../../components - Globales/subcomponents/Buttons/Buttons - HeaderTabla";
import { DataDetallesConsumidor } from "../Data/Data - DetallesConsumidor";
import ButtonsBodyTabla from "../../components - Globales/subcomponents/Buttons/Buttons - BodyTabla";
import TRoundedBodyTabla from "../../components - Globales/subcomponents/TRounded/TRounded - BodyTabla";

export default function SectionTablaDetalles() {

    const {Tipo_de_caso} = TRoundedBodyTabla();
    const {Proveedor} = ButtonsBodyTabla()
    const [Textvalue,setTextvalue] = useState('');

  return (
    <section className="px-5 flex flex-col gap-4">
        <div className="flex justify-between items-center">
            <div>
                <InputText placeholder="Buscar caso..." className="border border-gray-300 p-2 rounded-md outline-0 text-gray-500 w-70 shadow-2xs" value={Textvalue} onChange={(e)=>{setTextvalue(e.target.value)}} />
            </div>
            <div className="flex gap-2">
                <button onClick={()=>{}} className="flex items-center gap-2 border border-gray-400 shadow-sm px-3 py-2 rounded-md cursor-pointer">
                    <RxMixerHorizontal/>
                    <span>Filtrar</span>
                </button>
                
            </div>
        </div>
        <div className="flex flex-col justify-between h-full">
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
                ' value={DataDetallesConsumidor}>
                <Column field="ID" header={'ID'}/>
                <Column field="Via" header={<ButtonsHeaderTabla NombreColumna={'Via'}/>}/>
                <Column field="TipoCaso" header={<ButtonsHeaderTabla NombreColumna={'Tipo de caso'}/>}
                    body={(Data)=><Tipo_de_caso Status={Data.TipoCaso}/>}/>
                <Column field="Departamento" header={<ButtonsHeaderTabla NombreColumna={'Departamento'}/>}/>
                <Column field="Proveedor" header={<ButtonsHeaderTabla NombreColumna={'Proveedor'}/>}
                    body={(Data)=><Proveedor contenido={Data.Proveedor} />}/>
                <Column field="Fecha" header={<ButtonsHeaderTabla NombreColumna={'Fecha'}/>}/>
                <Column field="Estado" header={<ButtonsHeaderTabla NombreColumna={'Estado'}/>}/>
                <Column field="Oficial" header={<ButtonsHeaderTabla NombreColumna={'Oficial'}/>}/>
                <Column field="Actualizacion" header={<ButtonsHeaderTabla NombreColumna={'Actualizacion'}/>}/>
            </DataTable>
        </div>
    </section>
  )
}
