import { Ingradients } from "../shared/ingradients.model";

export class Recipes {
    public name?: string;
    public description?: string;
    public imagePath?: string;
    public ingradient?:Ingradients[];

    constructor(name: string, desc: string, imagePath: string, ingre:Ingradients[]) {
        this.name = name,
            this.imagePath = imagePath,
            this.description = desc,
            this.ingradient = ingre
    }
}