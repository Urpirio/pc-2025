import { IoMdNotificationsOutline } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import { CgCloseR } from "react-icons/cg";

export default function CardsActividades({Data}) {
  const ListCards = Data.map((items)=>{
    if(items.tipoCard === 'Documento'){
        return(
            <article key={items.ID} className="flex items-center gap-2">
                <IoMdNotificationsOutline className="text-2xl text-amber-400"/>
                <div className="flex flex-col">
                    <span className="text-md font-medium ">{items.Nombre}</span>
                    <span className="text-xs text-gray-500">{items.Fecha} {items.Hora}</span>
                </div>
            </article>
        )
    }else if(items.tipoCard === 'Asignado'){
        return(
            <article key={items.ID}className="flex items-center gap-2">
                <LuUserRound className="text-2xl text-blue-500"/>
                <div className="flex flex-col">
                    <span className="text-md font-medium ">{items.Nombre}</span>
                    <span className="text-xs text-gray-500">{items.Fecha} {items.Hora}</span>
                </div>
            </article>
        )
    }else if(items.tipoCard === 'Declinado'){
        return(
            <article key={items.ID} className="flex items-center gap-2">
                <CgCloseR className="text-2xl text-red-500"/>
                <div className="flex flex-col">
                    <span className="text-md font-medium ">{items.Nombre}</span>
                    <span className="text-xs text-gray-500">{items.Fecha} {items.Hora}</span>
                </div>
            </article>
        )
    }else{
        return(<></>)
    }
  })
  return(ListCards)
}
