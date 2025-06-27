import { DataCardsDetalles } from "../Data/Data - CardsDetalles";
import CardDetallesProveedores from "../Subcomponents/Cards/Card - DetallesProveedores";

export default function SectionCardDetalles() {
  return (
    <section className="flex gap-2 py-5">
        {DataCardsDetalles.map((Data,index)=>(
            <CardDetallesProveedores key={index} Number={Data.Number} tipo={Data.tipo}/>
        ))}
    </section>
  )
}
