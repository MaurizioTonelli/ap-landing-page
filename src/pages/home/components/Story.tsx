"use client";

import { Container } from "./Container";
import backgroundImage from "@/assets/home-page/background-features.jpg";
import ricardo from "@/assets/home-page/ricardo-barboza.jpg";

export function Story() {
  return (
    <section
      id="sobre-ricardo"
      aria-label="sobre Ricardo Barboza"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
    >
      <img
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        aria-label=""
        width={2245}
        height={1636}
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            ¡Hola! Soy Ricardo
          </h2>
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:justify-between mt-16 gap-16">
          <div className="order-2 lg:order-1 text-gray-200 flex flex-col gap-8 leading-relaxed">
            <p>
              <strong className="text-white text-2xl px-2">Así como tú,</strong>
              solía creer que tener un despacho de arquitectura rentable estaba
              solo al alcance de unos pocos.
            </p>
            <p>
              Descubrí que los arquitectos y empresarios que emprenden en la
              construcción se enfrentan a grandes desafíos que afectan sus
              finanzas y en muchos casos terminan con el negocio.
            </p>
            <p>
              <strong className="text-white px-2">
                Seguimiento inadecuado de los proyectos
              </strong>
              ,<strong className="text-white px-2">falta de información</strong>
              para tomar decisiones críticas,
              <strong className="text-white px-2">
                incumplimiento de los plazos
              </strong>
              de obra,
              <strong className="text-white px-2">
                errores en presupuestos y calendarios
              </strong>{" "}
              y la
              <strong className="text-white px-2">
                falta de visibilidad
              </strong>{" "}
              sobre la salud financiera de sus despachos. Todos estos factores
              contribuyen a pérdidas de tiempo y dinero, afectando la
              estabilidad y crecimiento de tu negocio.
            </p>
            <p>
              A partir de esta realidad, decidimos hacer algo al respecto,
              <strong className="text-white px-2">
                apasionándonos por ayudar a empresas como la tuya
              </strong>
              a superar estos retos y simplificando la administración. Creemos
              firmemente que con las herramientas adecuadas
              <strong className="text-white px-2">
                podemos impulsar el crecimiento y rentabilidad
              </strong>
              de tu empresa constructora.
            </p>
            <p>
              Si este es el caso de tu empresa y estás aquí porque quieres
              transformar tu empresa constructora en un negocio eficiente y
              rentable, este es el momento perfecto para conocernos.
              <strong className="text-white px-2">
                ¡Hablemos! Solicita una demostración gratuita.
              </strong>
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="lg:mt-10 overflow-hidden rounded-xl shadow-xl shadow-blue-900/20 w-96">
              <img src={ricardo} aria-label="" width={"100%"} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
