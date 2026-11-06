export class stitches {
    name: string;
    abreviation: string;
    img: string;
    video: string | null;
    language: "fr"|"en";
    steps: {
        description: string, 
        img: string | null,
    }[];

    constructor(
        name: string, 
        abreviation: string, 
        img: string, 
        video: string | null, 
        language: "fr"|"en", 
        steps: { 
            description: string, 
            img: string | null,
        }[] 
    ) {
        this.name = name;
        this.abreviation = abreviation;
        this.img = img;
        this.video = video;
        this.language = language;
        this.steps = steps;
    }
}