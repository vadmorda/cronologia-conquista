import { useState } from "react";
import { motion } from "framer-motion";

const events = [
  { year: "1492", title: "Llegada de Colón", description: "Cristóbal Colón llega a América en su primer viaje.", image: "/images/columbus.jpg" },
  { year: "1494", title: "Tratado de Tordesillas", description: "Acuerdo entre España y Portugal para dividir las tierras descubiertas.", image: "/images/tordesillas.jpg" },
  { year: "1511", title: "Conquista de Cuba", description: "Diego Velázquez de Cuéllar lidera la conquista de Cuba.", image: "/images/cuba.jpg" },
  { year: "1513", title: "Descubrimiento del Pacífico", description: "Vasco Núñez de Balboa cruza el istmo de Panamá y descubre el Océano Pacífico.", image: "/images/balboa.jpg" },
  { year: "1519-1521", title: "Conquista de México", description: "Hernán Cortés derrota al Imperio Azteca.", image: "/images/cortes.jpg" },
  { year: "1519-1522", title: "Circunnavegación del mundo", description: "Fernando de Magallanes inicia el viaje y Juan Sebastián Elcano lo completa, logrando la primera vuelta al mundo.", image: "/images/magallanes_elcano.jpg" },
  { year: "1527-1536", title: "Exploración de Norteamérica", description: "Álvar Núñez Cabeza de Vaca recorre desde Florida hasta México, documentando culturas indígenas.", image: "/images/cabeza_vaca.jpg" },
  { year: "1532-1533", title: "Conquista del Imperio Inca", description: "Francisco Pizarro captura y ejecuta a Atahualpa.", image: "/images/pizarro.jpg" },
  { year: "1536", title: "Conquista del Río de la Plata", description: "Pedro de Mendoza funda Buenos Aires, aunque la colonia enfrenta dificultades.", image: "/images/rio_plata.jpg" },
  { year: "1539-1542", title: "Exploración de Norteamérica", description: "Hernando de Soto explora el sureste de EE.UU. y cruza el río Misisipi.", image: "/images/hernando_soto.jpg" },
  { year: "1540-1542", title: "Exploración del suroeste de EE.UU.", description: "Francisco Vázquez de Coronado lidera una expedición en busca de las Siete Ciudades de Oro.", image: "/images/coronado.jpg" },
  { year: "1542", title: "Leyes Nuevas de Indias", description: "Carlos I establece normativas para proteger a los indígenas.", image: "/images/leyes.jpg" },
  { year: "1548", title: "Conquista de Chile", description: "Pedro de Valdivia consolida el dominio español en el territorio chileno.", image: "/images/chile.jpg" },
  { year: "1565", title: "Conquista de Florida", description: "Pedro Menéndez de Avilés funda San Agustín, el primer asentamiento europeo en EE.UU.", image: "/images/florida.jpg" },
  { year: "1571", title: "Fundación de Manila", description: "España establece una base en Asia conectada con América.", image: "/images/manila.jpg" },
  { year: "1598", title: "Exploración de California", description: "Sebastián Vizcaíno explora la costa de California y cartografía la región.", image: "/images/california.jpg" },
  { year: "1600", title: "Exploración del Orinoco", description: "Walter Raleigh y exploradores españoles buscan El Dorado en el Orinoco.", image: "/images/orinoco.jpg" },
];

export default function Timeline() {
  const [hoveredEvent, setHoveredEvent] = useState(null);

  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold mb-8">Cronología de la Conquista y Colonización de América</h1>
      <div className="relative flex flex-col items-center w-full">
        <div className="w-1 bg-gray-400 h-full absolute left-1/2 transform -translate-x-1/2"></div>
        {events.map((event, index) => (
          <div key={index} className="w-full flex justify-center mb-10 relative">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative flex flex-col items-center w-1/3"
              onMouseEnter={() => setHoveredEvent(event)}
              onMouseLeave={() => setHoveredEvent(null)}
            >
              <div className="p-4 bg-white shadow-lg rounded-xl text-center">
                <img src={event.image} alt={event.title} className="w-32 h-32 rounded-md mb-2" />
                <p className="text-lg font-semibold">{event.year}</p>
                <p className="text-sm">{event.title}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
