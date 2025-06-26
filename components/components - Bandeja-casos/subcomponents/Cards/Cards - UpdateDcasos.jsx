

export default function CardsUpdateDcasos({Data}) {
  const ListCards = Data.map((items)=>{
    return (
        <article key={items.ID} className="flex flex-col gap-1">
            <div>
                <span className="text-gray-500 text-sm font-semibold">{items.Fecha} | {items.Hora} pm</span>
            </div>
            <div className="flex flex-col gap-2 border border-gray-300 rounded-md p-3">
                <p className="text-gray-600 text-[16px]">{items.Descripcion}</p>
                <h3 className="text-gray-600 text-md font-semibold">{items.Nombre}</h3>
            </div>
        </article>
      )
  })
  return(ListCards)
}
