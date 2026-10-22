export interface Slide {
  src: string; // ruta en /public
  alt: string; // descripción de la imagen (accesibilidad)
}

// Pon tus imágenes en public/carousel/ y escribe aquí sus nombres reales
export const slides: Slide[] = [
  { src: "/carousel/1.jpeg", alt: "Descripción de la imagen 1" },
  { src: "/carousel/2.jpg", alt: "Descripción de la imagen 2" },
  { src: "/carousel/3.jpeg", alt: "Descripción de la imagen 3" },
  { src: "/carousel/4.jpg", alt: "Descripción de la imagen 4" },
];