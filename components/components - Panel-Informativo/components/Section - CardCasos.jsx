import CardSimples from "../subcomponents/Cards/Card - Simples";

export default function SectionCardCasos() {
  return (
    <section className="flex flex-col gap-2 px-5 py-2">
        <div className="flex gap-2 overflow-x-scroll w-full scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            <CardSimples />
            <CardSimples />
            <CardSimples />
            <CardSimples />
            <CardSimples />
            <CardSimples />
        </div>
    </section>
  )
}
