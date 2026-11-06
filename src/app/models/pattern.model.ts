import { Stitches } from "../stitches/stitches";

export class pattern {
    name: string;
    link: string[];
    img: string;
    material: string[] | [];
    language: "fr"|"en";
    stitches: {
        name: string,
        abreviation: string,
        linkWiki: Stitches,
    }[];
    parts: {
        name: string,
        materials: string[] | [],
        steps: {
            round: string | null,
            description: string,
        }[],
    }[];

    constructor(
        name: string,
        link: string[],
        img: string,
        language: "fr"|"en",
        stitches: {
            name: string,
            abreviation: string,
            linkWiki: Stitches,
        }[],
        parts: {
            name: string,
            materials: string[] | [],
            steps: {
                round: string | null,
                description: string,
            }[],
        }[],
    ) {
        this.name = name;
        this.link = link;
        this.img = img;
        this.material = [...new Set(parts.flatMap(part => part.materials ?? []))];
        this.language = language;
        this.stitches = stitches;
        this.parts = parts;
    }
}