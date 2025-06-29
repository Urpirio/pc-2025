
export default function TRoundedBodyTabla() {

    const Tipo_de_caso = ({Status}) =>{
        if(Status === 'Reclamo'){
            return(<div className="text-center text-red-600 px-2 py-1   border border-red-600 rounded-xl">{Status}</div>)
        }else if(Status === 'Mediacion'){
            return(<div className="text-center text-amber-500 px-2 py-1    border border-amber-500  rounded-xl">{Status}</div>)
        }else if(Status === 'Denuncia'){
            return(<div className="text-center text-md text-blue-600 px-2 py-1    border border-blue-600  rounded-xl">{Status}</div>)
        }else if(Status === 'Orientacion'){
            return(<div className="text-center text-green-600 px-2 py-1   border border-green-600 rounded-xl">{Status}</div>)
        }
    };

    const  Estado = ({Status}) => {
        if(Status === 'Nuevo'){
            return(<div className="text-white  bg-red-500/80 text-center py-1 rounded-xl">{Status}</div>)
        }else if(Status === 'Completado'){
            return(<div className="text-white bg-green-500/80 text-center py-1 rounded-xl">{Status}</div>)
        }else if(Status === 'En proceso'){
            return(<div className="text-white bg-blue-600/80 text-center py-1 rounded-xl">{Status}</div>)
        }else{
            return(<></>)
        }
    };

    const  Plazo = ({Status}) => {
        if(Status > 0 && Status < 5){
            return(<div className="text-center text-green-900 bg-green-500/90 py-1 rounded-xl">{Status}</div>)
        }else if(Status > 5 && Status < 15){
            return(<div className="text-center text-amber-800 bg-orange-400 py-1 rounded-xl">{Status}</div>)
        }else if(Status > 15){
            return(<div className="text-center text-red-900 bg-red-400 py-1 rounded-xl">{Status}</div>)
        }
    };

  return({
    Tipo_de_caso,
    Plazo,
    Estado
  })
}
