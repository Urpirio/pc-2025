import Header from "../../../components/components - Globales/components/Header"
import SectionTablaNavegacion from "../../../components/components - Globales/components/Section - TablaNavegacion"
import SectionOficinas from "../../../components/components - Oficinas/components/Section - Oficinas"

export default function page() {
  return (
    <body> 
        <Header/>
        <main className="flex flex-col gap-2">
            <SectionOficinas/>
            <SectionTablaNavegacion/>
        </main>
    </body>
  )
}
