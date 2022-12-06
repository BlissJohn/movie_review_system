import { MoviReview } from "./MovieReview";

export class Movie{
    id! : number;
    name! : string;
    description! : string;
    image!: string;
    movieReviews!: MoviReview[];

    constructor(Name:string,Description:string,Image:string){
        this.name=Name;
        this.description=Description;
        this.image=Image;
    }
}