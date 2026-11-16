export type StitchCategory =
    | "base"
    | "variant"
    | "increase-decrease"
    | "texture"
    | "fancy"
    | "finishing";

export class stitches {
    name: string;
    abbreviation: string;
    img: string;
    video: string | null;
    language: "fr"|"en";
    category: StitchCategory;
    steps: {
        description: string, 
        img: string | null,
    }[];

    constructor(
        name: string, 
        abbreviation: string, 
        img: string, 
        video: string | null, 
        language: "fr"|"en", 
        category: StitchCategory,
        steps: { 
            description: string, 
            img: string | null,
        }[] 
    ) {
        this.name = name;
        this.abbreviation = abbreviation;
        this.img = img;
        this.video = video;
        this.language = language;
        this.category = category;
        this.steps = steps;
    }
}