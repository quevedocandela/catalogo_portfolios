export interface Lang { label: string; text: string; bg: string; fg: string }

// text: 1 o 2 letras que se dibujan en el ícono · bg: color de fondo · fg: color de las letras
const known: Record<string, Lang> = {
  html:       { label: "HTML",       text: "HT", bg: "#e44d26", fg: "#ffffff" },
  css:        { label: "CSS",        text: "CS", bg: "#1572b6", fg: "#ffffff" },
  javascript: { label: "JavaScript", text: "JS", bg: "#f7df1e", fg: "#1a1230" },
  typescript: { label: "TypeScript", text: "TS", bg: "#3178c6", fg: "#ffffff" },
  python:     { label: "Python",     text: "PY", bg: "#3776ab", fg: "#ffd43b" },
  java:       { label: "Java",       text: "JV", bg: "#e76f00", fg: "#ffffff" },
  php:        { label: "PHP",        text: "PH", bg: "#777bb4", fg: "#ffffff" },
  csharp:     { label: "C#",         text: "C#", bg: "#68217a", fg: "#ffffff" },
  cpp:        { label: "C++",        text: "C+", bg: "#00599c", fg: "#ffffff" },
  c:          { label: "C",          text: "C",  bg: "#283593", fg: "#ffffff" },
  react:      { label: "React",      text: "RE", bg: "#20232a", fg: "#61dafb" },
  node:       { label: "Node.js",    text: "NO", bg: "#3c873a", fg: "#ffffff" },
  mysql:      { label: "MySQL",      text: "SQ", bg: "#00758f", fg: "#ffffff" },
  postgres:   { label: "PostgreSQL", text: "PG", bg: "#336791", fg: "#ffffff" },
  git:        { label: "Git",        text: "GT", bg: "#f05032", fg: "#ffffff" },
  github:     { label: "GitHub",     text: "GH", bg: "#24292e", fg: "#ffffff" },
  bootstrap:  { label: "Bootstrap",  text: "BS", bg: "#7952b3", fg: "#ffffff" },
  tailwind:   { label: "Tailwind",   text: "TW", bg: "#38bdf8", fg: "#1a1230" },
  figma:      { label: "Figma",      text: "FG", bg: "#f24e1e", fg: "#ffffff" },
};

// Si la clave no está en la lista, crea un ícono gris con sus 2 primeras letras
export function getLang(key: string): Lang {
  return known[key.trim().toLowerCase()] ?? {
    label: key, text: key.trim().slice(0, 2).toUpperCase(), bg: "#4a4470", fg: "#ffffff",
  };
}