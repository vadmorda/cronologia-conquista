import { useState } from "react";
import { motion } from "framer-motion";

const events = [
  { year: "1492", title: "Llegada de Colón", description: "Cristóbal Colón llega a América en su primer viaje.", image: "https://i.imgur.com/columbus.jpg" },
  { year: "1494", title: "Tratado de Tordesillas", description: "Acuerdo entre España y Portugal para dividir las tierras descubiertas.", image: "https://i.imgur.com/tordesillas.jpg" },
  { year: "1511", title: "Conquista de Cuba", description: "Diego Velázquez de Cuéllar lidera la conquista de Cuba.", image: "https://i.imgur.com/cuba.jpg" },
  { year: "1513", title: "Descubrimiento del Pacífico", description: "Vasco Núñez de Balboa cruza el istmo de Panamá y descubre el Océano Pacífico.", image: "https://i.imgur.com/balboa.jpg" },
];

export default function Timeline() {
  const [hoveredEvent, setHoveredEvent] = useState(null);

  return (
    <div className="flex flex-col items-center p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-10">Cronología de la Conquista y Colonización de América</h1>
      <div className="relative w-full max-w-4xl">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-400 h-full"></div>
        {events.map((event, index) => (
          <div
            key={index}
            className={`flex items-center w-full my-6 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            onMouseEnter={() => setHoveredEvent(event)}
            onMouseLeave={() => setHoveredEvent(null)}
          >
            <motion.div whileHover={{ scale: 1.1 }} className="relative flex flex-col items-center bg-white p-4 shadow-lg rounded-lg w-64">
              <img src={event.image} alt={event.title} className="w-32 h-32 rounded-md mb-2" />
              <p className="text-lg font-semibold">{event.year}</p>
              <p className="text-sm text-center">{event.title}</p>
              {hoveredEvent === event && (
                <div className="absolute top-full mt-2 p-3 bg-black text-white text-xs rounded-lg shadow-lg w-52 text-center">
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
