import { Layout } from '@/components/layout';
import { AboutUs, Body, Hero, Services } from '@/components/pages/indexPage';

export default function Home() {
  return (
    <Layout
      title={'Nazca Travel'}
      description={
        'Bienvenido/a a nuestra agencia de viajes, donde hacemos realidad tus sueños de viajar. Somos una empresa dedicada a brindar experiencias únicas y memorables a nuestros clientes. Ofrecemos una amplia gama de servicios de viajes, desde la planificación y reserva de vuelos, hoteles y paquetes turísticos, hasta la organización de excursiones y actividades en destino.'
      }
    >
      <Hero />
      <Services />
      <Body />
      {/* <AboutUs /> */}
    </Layout>
  );
}
