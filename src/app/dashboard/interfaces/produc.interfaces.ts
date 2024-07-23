

export interface Productos {
    id:string
    nombre: string
    marca:string
    provedor:string
    categoria:string
    cantidad: number
    fechaCreation:string 
}


export interface CategoriaProduct {
    code: string;
    name: string;
}

export const CATEGORIAS: CategoriaProduct[] = [
    { code: 'elc', name: 'Electrónica' },
    { code: 'rp', name: 'Ropa' },
    { code: 'al', name: 'Alimentos' },
    { code: 'hg', name: 'Hogar' },
    { code: 'dep', name: 'Deportes' },
    { code: 'sal', name: 'Salud' }
];