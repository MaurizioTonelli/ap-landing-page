import { Container } from "./Container";
import backgroundImage from "@/assets/home-page/background-faqs.jpg";

const faqs = [
  [
    {
      question: "¿No tienes claro qué tan rentables son tus proyectos? ",
      answer: [
        `Si no conoces que la rentabilidad de tus obras, caminas ciegamente y pierdes oportunidad de
mejora y escalabilidad en tu negocio.
`,
        `Imagina poder identificar en tiempo real la rentabilidad y utilidad de tus proyectos con
Arquiplanner.`,
      ],
    },
    {
      question:
        "Te falta la información necesaria para tomar decisiones en tu negocio?",
      answer: [
        `Tomar decisiones criticas para tu negocio es imposible con la falta de datos financieros.
Contratar más mano de obra, ajustar presupuestos, gastos operativos o iniciar un nuevo
proyecto se vuelve un caos si no conoces dónde estás parado.
`,
        `Imagina tener toda la información de tu negocio en una sola plataforma. No más decisiones a
ciegas.`,
      ],
    },
  ],
  [
    {
      question: "¿Sigues gestionando todo con hojas de cálculo?  ",
      answer: [
        `Automatiza procesos, simplifica la administración de tu empresa, haz crecer tu negocio con
nuestro software.`,
      ],
    },
    {
      question: "¿Tienes registro de tus gastos? ",
      answer: [
        `Mantener un control preciso de los gastos de cada proyecto es un dolor de cabeza. Costos
imprevistos, gastos adicionales y la falta de seguimiento hacer que tus márgenes de ganancia
se desvanezcan.
`,
        `Mantener un control preciso de los gastos de cada proyecto es un dolor de cabeza. Costos
imprevistos, gastos adicionales y la falta de seguimiento hacer que tus márgenes de ganancia
se desvanezcan.
`,
      ],
    },
  ],
  [
    {
      question: "¿Tienes claridad sobre la salud financiera de tu despacho? ",
      answer: [
        `Si no tienes claros tus ingresos, gastos y utilidad, podrías estar tomando decisiones que ponen
en riesgo tu negocio.
`,
        `¿Te imaginas saber con certeza cuál es tu flujo de efectivo y poder planificar tus finanzas sin
miedo?`,
      ],
    },
    {
      question: "¿Los gastos extras están afectando tu margen de utilidad? ",
      answer: [
        `Esos extras inesperados que aparecen en cada proyecto acaban con tu utilidad, cambios de
último momento, modificaciones solicitadas por el cliente que no fueron previstos, los extras
no controlados son una bomba de tiempo para tus finanzas.`,
      ],
    },
  ],
];

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <img
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        aria-label=""
        width={1558}
        height={946}
      />
      <Container className="relative">
        <ul
          role="list"
          className="mx-auto  grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <div className="flex flex-col gap-2">
                      {faq.answer.map((answer, answerIndex) => (
                        <p
                          key={answerIndex}
                          className="mt-4 text-sm text-slate-700"
                        >
                          {answer}
                        </p>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
