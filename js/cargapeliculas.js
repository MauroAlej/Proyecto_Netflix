const arrayPeliculas = [
    {
        nombre: 'Interestelar',
        genero: 'Ciencia Ficcion',
        elenco: 'Matthew McConaughey',
        año: '2014'
    },
    {
        nombre: 'El Codigo Da Vinci',
        genero: 'Suspenso',
        elenco: 'Tom Hanks',
        año: '2006'
    },
    {
        nombre: 'El Origen',
        genero: 'Ciencia Ficcion',
        elenco: 'Leonardo di Caprio',
        año: '2010'
    },
    {
        nombre: 'El Lobo de Wall Street',
        genero: 'Drama',
        elenco: 'Leonardo di Caprio',
        año: '2013'
    },
    {
        nombre: 'Breaking Bad',
        genero: 'Drama',
        elenco: 'Bryan Cranston',
        año: '2013'
    },
    {
        nombre: 'Angeles y Demonios',
        genero: 'Ciencia Ficcion',
        elenco: 'Tom Hanks',
        año: '2009'
    }
]

localStorage.setItem('peliculas',JSON.stringify(arrayPeliculas))
