import { Button } from "@mui/material";
import { Container } from "./Container";
import backgroundImage from "@/assets/home-page/background-call-to-action.jpg";

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <img
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        aria-label=""
        width={2347}
        height={1244}
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Empieza hoy
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Agenda una demo gratis y toma control de tu despacho.
          </p>
          <Button
            href="https://calendly.com/juanricardo-barboza/demo-arquiplanner"
            variant="contained"
            color="secondary"
            sx={{ mt: 4 }}
          >
            Agenda una Demo
          </Button>
        </div>
      </Container>
    </section>
  );
}
