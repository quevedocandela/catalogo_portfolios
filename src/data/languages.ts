const BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";

const known: Record<string, { label: string; file: string }> = {
  html:       { label: "HTML",       file: "html5/html5-original.svg" },
  css:        { label: "CSS",        file: "css3/css3-original.svg" },
  javascript: { label: "JavaScript", file: "javascript/javascript-original.svg" },
  typescript: { label: "TypeScript", file: "typescript/typescript-original.svg" },
  python:     { label: "Python",     file: "python/python-original.svg" },
  java:       { label: "Java",       file: "java/java-original.svg" },
  php:        { label: "PHP",        file: "php/php-original.svg" },
  csharp:     { label: "C#",         file: "csharp/csharp-original.svg" },
  cpp:        { label: "C++",        file: "cplusplus/cplusplus-original.svg" },
  c:          { label: "C",          file: "c/c-original.svg" },
  react:      { label: "React",      file: "react/react-original.svg" },
  node:       { label: "Node.js",    file: "nodejs/nodejs-original.svg" },
  mysql:      { label: "MySQL",      file: "mysql/mysql-original.svg" },
  postgres:   { label: "PostgreSQL", file: "postgresql/postgresql-original.svg" },
  git:        { label: "Git",        file: "git/git-original.svg" },
  github:     { label: "GitHub",     file: "github/github-original.svg" },
  bootstrap:  { label: "Bootstrap",  file: "bootstrap/bootstrap-original.svg" },
  tailwind:   { label: "Tailwind",   file: "tailwindcss/tailwindcss-original.svg" },
  figma:      { label: "Figma",      file: "figma/figma-original.svg" },
};

export interface Lang { label: string; icon?: string }

// Si la clave no existe en la lista, se muestra como texto en vez de ícono
export function getLang(key: string): Lang {
  const k = known[key.trim().toLowerCase()];
  return k ? { label: k.label, icon: `${BASE}/${k.file}` } : { label: key };
}