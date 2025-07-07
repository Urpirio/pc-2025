'use client';
import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useEffect } from "react";
import { DataTablaTipos } from "../Data/Data - TablaTipos";
import ButtonsBodyTabla from "../../components - Globales/subcomponents/Buttons/Buttons - BodyTabla";
import ButtonsHeaderTabla from "../../components - Globales/subcomponents/Buttons/Buttons - HeaderTabla";
import TRoundedBodyTabla from "../../components - Globales/subcomponents/TRounded/TRounded - BodyTabla";

export default function SectionTablaTipos() {

  const [tipo,setTipo] = useState('Todos los tipos');
  const [DataTabla,setDataTabla] = useState(DataTablaTipos);
  const {Actualizacion,Proveedor} = ButtonsBodyTabla();
  const {Estado,Plazo,Tipo_de_caso} = TRoundedBodyTabla();

  useEffect(()=>{
    if(tipo === 'Todos los tipos'){
      setDataTabla(DataTablaTipos);
    }else if(tipo === 'Denuncias'){   
      const DataDenuncias = [];
      DataTablaTipos.forEach(Data =>{
        if(Data.TipoCaso === 'Denuncia'){
          DataDenuncias.push(Data)
        }
      });

      if(DataTablaTipos != []){
        console.log(DataDenuncias)
        setDataTabla(DataDenuncias)
        console.log(DataDenuncias)
      };
    }else if(tipo === 'Mediacion'){
      const DataMediacion = [];
      DataTablaTipos.forEach(Data =>{
        if(Data.TipoCaso === 'Mediacion'){
          DataMediacion.push(Data)
        }
      });
      setDataTabla(DataMediacion)
    }else if(tipo === 'Reclamos'){
      const DataReclamos = [];
      DataTablaTipos.forEach(Data =>{
        if(Data.TipoCaso === 'Reclamo'){
          DataReclamos.push(Data)
        }
      });
      setDataTabla(DataReclamos)
    }

  },[tipo])


  return (
    <section className="py-5">
        <div className="flex py-2 ">
        <div className="flex gap-2 p-1 rounded-lg bg-gray-100 shadow-2xs">
          <button onClick={()=>setTipo('Todos los tipos')} 
            className={`px-5 cursor-pointer transition-all duration-300 py-2 rounded-lg  
              ${tipo === 'Todos los tipos' ? 'bg-white shadow-2xs' : 'text-gray-500 bg-transparent hover:bg-gray-200'}`}>
              Todos los tipos
          </button>
          <button onClick={()=>setTipo('Denuncias')} 
            className={`px-5 cursor-pointer transition-all duration-300 py-2 rounded-lg  
              ${tipo === 'Denuncias' ? 'bg-white shadow-2xs' : 'text-gray-500 bg-transparent hover:bg-gray-200'}`}>
            Denuncias
          </button>
          <button onClick={()=>setTipo('Mediacion')} 
            className={`px-5 cursor-pointer transition-all duration-300 py-2 rounded-lg  
              ${tipo === 'Mediacion' ? 'bg-white shadow-2xs' : 'text-gray-500 bg-transparent hover:bg-gray-200'}`}>
            Mediacion
          </button>
          <button onClick={()=>setTipo('Reclamos')} 
            className={`px-5 cursor-pointer transition-all duration-300 py-2 rounded-lg  
              ${tipo === 'Reclamos' ? 'bg-white shadow-2xs' : 'text-gray-500 bg-transparent hover:bg-gray-200'}`}>
            Reclamos
          </button>
        </div>
        </div>
        <div >
        <DataTable  
        className={"border w-full border-gray-300  overflow-hidden rounded-xl"}
        tableClassName={" [&_thead>tr>th>div]:flex [&_thead>tr>th>div]:gap-5 [&_thead>tr>th]:text-gray-500 [&_thead>tr>th]:p-2 [&_thead]:bg-white" }
        rowClassName={' p-5 [&_td]:p-3 [&_td]:border-t [&_td]:border-gray-300'} 
        value={DataTabla}>
          <Column field="ID" header={'ID'} />
          <Column field="Via"  header={'Via'}  />
          <Column field="TipoCaso" header={'Tipo de caso'} body={(Data)=><Tipo_de_caso Status={Data.TipoCaso}/>}/>
          <Column field="Departamento" header={'Departamento'}/>
          <Column field="Proveedor" header={'Proveedor'} body={(Data)=><Proveedor contenido={Data.Proveedor}/>}/>
          <Column field="Fecha" header={'Fecha'}/>
          <Column field="Estado" header={'Estado'} body={(Data)=><Estado Status={Data.Estado}/>}/>
          <Column field="Oficial" header={'Oficial'}/>
          <Column field="Actualizacion" header={'Actualizacion'}/>
        </DataTable>
        </div>
    </section>
  )
}
