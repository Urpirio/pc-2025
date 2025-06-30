import CardSimples from "../subcomponents/Cards/Card - Simples";

export default function SectionCardCasos() {
  return (
    <section className="flex flex-col gap-2 px-5 py-2">
        <div className="flex gap-2 overflow-x-scroll w-full scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            <CardSimples Nombre={'Casos Cerrados'} Numero={'10,000'} bgTopColor={'bg-blue-300'} />
            <CardSimples Nombre={'Abiertos'} Numero={'5,000'}  bgTopColor={'bg-green-500'} />
            <CardSimples Nombre={'En proceso'} Numero={'3,000'}  bgTopColor={'bg-blue-200'}  />
            <CardSimples Nombre={'Cerrados'} Numero={'2,000'}  bgTopColor={'bg-blue-500'}  />
            <CardSimples Nombre={'Proximo a vencer'} Numero={'1,000'}  bgTopColor={'bg-amber-400'}  />
            <CardSimples Nombre={'retornados'} Numero={'2,000,000'}  bgTopColor={'bg-red-300'}  />
        </div>
    </section>
  )
}
