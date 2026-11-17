import { listStitches } from "../data/stitches.data";

export class pattern {
    name: string;
    link: string[];
    img: string;
    material: string[] | [];
    language: "fr"|"en";
    stitches: {
        name: string,
        abbreviation: string,
        linkWiki: string,
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
            abbreviation: string,
            linkWiki: string,
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


export const getStitchLink = (abbreviation: string): string => {
    const index = listStitches.findIndex(
        stitch => stitch.abbreviation === abbreviation
    );

    if (index === -1) {
        throw new Error(`Point de crochet introuvable : ${abbreviation}`);
    }

    return `/stitches/${index}`;
};