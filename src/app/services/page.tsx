import Services from "@/components/services/Services";
import { services } from "@/lib/data";





export default function ServicesPage() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <Services services={services}/>
        
    </section>
  )
}
