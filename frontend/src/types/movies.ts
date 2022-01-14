export type Movie = {
    id:number;
    title: string;
    score:number;
    count: number;
    image: string;
}
export type MoviePage = {
    content: Movie[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    firts: boolean;
    numberofElements: number;
    empty: boolean;
}

