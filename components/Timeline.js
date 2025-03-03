import { useState } from "react";
import { motion } from "framer-motion";

const events = [
  { year: "1492", title: "Llegada de Colón", description: "Cristóbal Colón llega a América en su primer viaje.", image: "https://i.imgur.com/columbus.jpg" },
  { year: "1494", title: "Tratado de Tordesillas", description: "Acuerdo entre España y Portugal para dividir las tierras descubiertas.", image: "https://i.imgur.com/tordesillas.jpg" },
  { year: "1511", title: "Conquista de Cuba", description: "Diego Velázquez de Cuéllar lidera la conquista de Cuba.", image: "https://i.imgur.com/cuba.jpg" },
  { year: "1513", title: "Descubrimiento del Pacífico", description: "Vasco Núñez de Balboa cruza el istmo de Panamá y descubre el Océano Pacífico.", image: "https://i.imgur.com/balboa.jpg" },
  { year: "1519-1521", title: "Conquista de México", description: "Hernán Cortés lidera la conquista del Imperio Azteca.", image: "https://i.imgur.com/cortes.jpg" },
  { year: "1532-1533", title: "Conquista del Imperio Inca", description: "Francisco Pizarro derrota al Imperio Inca y ejecuta a Atahualpa.", image: "https://i.imgur.com/pizarro.jpg" },
  { year: "1542", title: "Leyes Nuevas de Indias", description: "Normativas de Carlos I para proteger a los indígenas.", image: "https://i.imgur.com/leyes.jpg" },
  { year: "1565", title: "Conquista de Florida", description: "Pedro Menéndez de Avilés funda San Agustín, el primer asentamiento europeo en EE.UU.", image: "https://i.imgur.com/florida.jpg" },
  { year: "1598", title: "Exploración de California", description: "Sebastián Vizcaíno explora la costa de California y cartografía la región.", image: "https://i.imgur.com/california.jpg" },
  { year: "1600", title: "Exploración del Orinoco", description: "Walter Raleigh y exploradores españoles buscan El Dorado en el Orinoco.", image: "https://i.imgur.com/orinoco.jpg" },
];

export default function Timeline() {
  const [hoveredEvent, setHoveredEvent] = useState(null);

  return (
    <div className="flex flex-col items-center p-10 bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-10">Cronología de la Conquista y Colonización de América</h1>
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 h-full"></div>
        {events.map((event, index) => (
          <div
            key={index}
            className={`flex w-full my-10 ${index % 2 === 0 ? "justify-start pr-20" : "justify-end pl-20"}`}
            onMouseEnter={() => setHoveredEvent(event)}
            onMouseLeave={() => setHoveredEvent(null)}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative flex flex-col items-center bg-gray-800 p-4 shadow-lg rounded-lg w-80 border border-blue-500"
            >
              <img src={event.image} alt={event.title} className="w-32 h-32 rounded-md mb-2 border-2 border-blue-400" />
              <p className="text-lg font-semibold">{event.year}</p>
              <p className="text-sm text-center text-gray-300">{event.title}</p>
              {hoveredEvent === event && (
                <div className="absolute top-full mt-2 p-3 bg-blue-600 text-white text-xs rounded-lg shadow-lg w-60 text-center z-10">
                  {event.description}
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
