
export default function CardDetallesProveedores({Number,tipo}) {
  return (
    <article className="bg-blue-50 p-5 w-full text-blue-900 rounded-xl shadow-2xs" >
        <h2 className="text-4xl font-bold">{Number}</h2>
        <p className="text-lg">{tipo}</p>
    </article>
  )
}
