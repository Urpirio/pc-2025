import { IoDocumentTextOutline } from "react-icons/io5";

export default function CardsDocs({Data}) {
  const ListCards = Data.map((items)=>{
    return(
        <article key={items.ID} className="flex items-center gap-2 border border-gray-300 rounded-xl p-4 w-60 shadow-2xs">
            <IoDocumentTextOutline className="text-2xl"/>
            <span>{items.Nombre}</span>
        </article>
    )
  })
  return(ListCards)
};
