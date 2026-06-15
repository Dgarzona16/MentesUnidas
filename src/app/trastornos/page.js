import { obtenerTodosLosTrastornos } from "@/lib/md";
import Card from "@/components/ui/TrastornoCard";
import Topico from "@/components/Topico";

export default function TrastornosPage() {
  const trastornos = obtenerTodosLosTrastornos();
  return (
    <section className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <Topico
          titulo="Recursos de Trastornos de aprendizaje"
          descripcion="Explora información detallada sobre diversos trastornos de aprendizaje."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {trastornos.map((trastorno, index) => (
            <Card
              key={index}
              index={index}
              onPush={`/trastornos/${trastorno.slug}`}
              icon={trastorno.meta.icono}
              color={trastorno.meta.color}
              title={trastorno.meta.titulo || "Sin Título"}
              description={trastorno.meta.descripcion || "Sin descripción"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
