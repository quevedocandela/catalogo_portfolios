export interface Portfolio {
    name: string;
    cover: string;
    languages: string[];
    link: string;
}

const portfolios: Portfolio[] = [
    { name: "Quevedo Candela", cover: "/covers/Quevedo.png", languages: ["Python", "JavaScipt", "SQL"], link: "https://porfolioquevedocandela.netlify.app/"},
    { name: "Soria Jessica", cover: "/covers/Soria.png", languages: ["Python", "Java", "HTML"], link: "https://portfoliojessicasoria.netlify.app/"},
    { name: "Frontera Camila", cover: "/covers/Frontera.png", languages: ["JavaScript", "TypeScript", "Python"], link: "https://camilafrontera-portfolio.vercel.app/"},
    { name: "Barrozo Lautaro", cover: "/covers/Barrozo.png", languages: ["C++", "Node.js", "TypeScript"], link: "https://portfolio-lautaro-barrozo.vercel.app/"},
    { name: "Melo Lourdes", cover: "/covers/Melo.png", languages: ["Python", "Java", "SQL"], link: "https://lourdesmelo-portfolio.netlify.app/"},    
    { name: "Cataldo Alexis", cover: "/covers/Cataldo.png", languages: ["Python", "HTML", "Tilwind CSS"], link: "https://portfolio-lac-sigma-0z5nl4oed9.vercel.app/"},
    { name: "Estevez Camila", cover: "/covers/Estevez.jpeg", languages: ["Angular", "TypeScript", "Java"], link: "https://camilaestevez.netlify.app/"},
    { name: "Móron Valentín", cover: "/covers/Moron.png", languages: ["Python", "Java", "SQL"], link: "https://valentinmoron-portfolio.netlify.app/"},
    { name: "Gauna Fatima", cover: "/covers/Gauna.png", languages: ["Python", "Java", "HTML"], link: "https://gauna-portfolio.vercel.app/"},
    { name: "Filippini Benjamin", cover: "/covers/Filippini.png", languages: ["JavaScipt", "Python", "HTML"], link: "https://benjafilippini-portfolio.netlify.app/"},
    { name: "Lara Claudia", cover: "/covers/Lara.png", languages: ["HTML", "CSS", "TypeScript"], link: "https://portfolioclau.netlify.app/"},
    { name: "Della Savia Federico", cover: "/covers/DellaSavia.png", languages: ["HTML", "CSS", "Python"], link: "https://splendid-pudding-ab2120.netlify.app/"},
    { name: "Zunino Valentín", cover: "/covers/Zunino.png", languages: ["Next.js", "Java", "Python"], link: "https://www.valentinzunino.com.ar/"},
    { name: "Yemes Esteban", cover: "/covers/Yemes.png", languages: ["Java", "Python", "JavaScript"], link: "https://portafolio-desarrollo-web-theta.vercel.app/"},
    { name: "Gallardo Agustina", cover: "/covers/Gallardo.jpeg", languages: ["Poweb BI", "Python", "HTML"], link: "https://portfolio-gallardo-agustina.vercel.app/"},
];

export const sortedPortfolios = [...portfolios].sort((a, b)=>
    a.name.localeCompare(b.name, "es", { sensitivity: "base"})
);