import { DataDocumentos } from "../../Data/Data - Documentos";
import CardsDocs from "../../subcomponents/Cards/Cards - docs";

export default function SectionDocumentos() {
  return (
    <section className="w-full py-5">
        <div className="border-b border-gray-300 w-full pb-5 pt-2">
            <h2 className="text-xl font-semibold text-blue-900">Documentos</h2>
            <p className="text-gray-500 text-sm">Aqui encontraras los documentos del caso</p>
        </div>
        <div className="flex flex-wrap gap-5 py-5">
            <CardsDocs Data={DataDocumentos}/>
        </div>
    </section>
  )
}
