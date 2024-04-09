let infoLibro = {
    titulo: "",
    autor: "",
    genero: "",
    anio: "",
    editorial: "",
    imprimirInformacion: function () {
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Año de Publicación: ${this.anio}`);
        console.log(`Editorial: ${this.editorial}`);
    },
};
const libro1 = Object.create(infoLibro);
libro1.titulo = "El nombre del viento";
libro1.autor = "Patrick Rothfuss";
libro1.genero = "Fantasía";
libro1.anio = 2007;
libro1.editorial = "DAW Books";

const libro2 = Object.create(infoLibro);
libro2.titulo = "Cien años de soledad";
libro2.autor = "Gabriel García Márquez";
libro2.genero = "Realismo mágico";
libro2.anio = 1967;
libro2.editorial = "Editorial Sudamericana";

const libro3 = Object.create(infoLibro);
libro3.titulo = "1984";
libro3.autor = "George Orwell";
libro3.genero = "Ciencia ficción";
libro3.anio = 1949;
libro3.editorial = "Secker & Warburg";

const repertorio = [libro1, libro2, libro3];
console.log (repertorio);