

export interface IProducts {
    id: number
    title: string
    price: number
    description?:string
    category: string[],
    image: string
    rating?: {
        rate:number
        count:number
    }

}
export interface Isupplemets {
    id: number
    title: string
    price: number
    image: string

}