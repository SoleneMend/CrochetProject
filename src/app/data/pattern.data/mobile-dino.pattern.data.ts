import { listStitches } from "../stitches.data";
import { pattern } from "../../models/pattern.model";

// Retrouver l'index d'un point dans listStitches
const getStitchLink = (abbreviation: string): string => {
    const index = listStitches.findIndex(
        stitch => stitch.abbreviation === abbreviation
    );

    if (index === -1) {
        throw new Error(`Point de crochet introuvable : ${abbreviation}`);
    }

    return `/stitches/${index}`;
};

// Points utilisés dans le patron
const mobileDinoStitches = [
    {
        name: 'Maille',
        abbreviation: 'm',
        linkWiki: getStitchLink('m'),
    },
    {
        name: "Maille en l'air",
        abbreviation: 'ml',
        linkWiki: getStitchLink('ml'),
    },
    {
        name: 'Maille serrée',
        abbreviation: 'ms',
        linkWiki: getStitchLink('ms'),
    },
    {
        name: 'Augmentation en maille serrée',
        abbreviation: 'aug',
        linkWiki: getStitchLink('aug-ms'),
    },
    {
        name: 'Diminution en maille serrée',
        abbreviation: 'dim',
        linkWiki: getStitchLink('dim-ms'),
    },
    {
        name: 'Maille coulée',
        abbreviation: 'mc',
        linkWiki: getStitchLink('mc'),
    },
    {
        name: 'Cercle magique',
        abbreviation: 'cm',
        linkWiki: getStitchLink('cm'),
    },
];

export const mobileDino = new pattern(
    'Mobile Dino',
    ['http://shop.hobbii.fr/mobile-dino'],
    'assets/patterns/mobile-dino.jpg',
    'fr',
    mobileDinoStitches,
    [
        // ==========================================
        // TÊTE
        // ==========================================
        {
            name: 'Tête',
            materials: ['Baby Cotton Organic - Mint (09)', 'Rembourrage', 'Yeux de sécurité 6 mm'],
            steps: [
                { round: null, description: 'Commencer avec un cercle magique.' },
                { round: 'T1', description: '6 ms dans le cercle magique (6).' },
                { round: 'T2', description: '[1 aug] x6 (12).' },
                { round: 'T3', description: '[1 ms, 1 aug] x6 (18).' },
                { round: 'T4', description: '1 ms, 1 aug, [2 ms, 1 aug] x5, 1 ms (24).' },
                { round: 'T5', description: '[3 ms, 1 aug] x6 (30).' },
                { round: 'T6', description: '2 ms, 1 aug, [4 ms, 1 aug] x5, 2 ms (36).' },
                { round: 'T7-T10', description: '36 ms (4 tours, 36).' },
                { round: 'T11', description: '[5 ms, 1 aug] x6 (42).' },
                { round: 'T12-T13', description: '42 ms (2 tours, 42).' },
                { round: 'T14', description: '[5 ms, 1 dim] x6 (36).' },
                { round: null, description: 'Placer les yeux de sécurité entre les tours 8 et 9 avec 5 mailles entre eux.' },
                { round: 'T15', description: '2 ms, 1 dim, [4 ms, 1 dim] x5, 2 ms (30).' },
                { round: null, description: 'Commencer à rembourrer la tête et continuer pendant que le trou devient plus petit.' },
                { round: 'T16', description: '[3 ms, 1 dim] x6 (24).' },
                { round: 'T17', description: '1 ms, 1 dim, [2 ms, 1 dim] x5, 1 ms (18).' },
                { round: 'T18', description: '[1 ms, 1 dim] x6 (12).' },
                { round: 'T19', description: '[1 dim] x6 (6).' },
                { round: null, description: 'Couper le fil et le cacher.' },
            ],
        },

        // ==========================================
        // CORPS
        // ==========================================
        {
            name: 'Corps',
            materials: ['Baby Cotton Organic - Mint (09)', 'Rembourrage'],
            steps: [
                { round: null, description: 'Commencer avec un cercle magique.' },
                { round: 'T1', description: '6 ms dans le cercle magique (6).' },
                { round: 'T2', description: '[1 aug] x6 (12).' },
                { round: 'T3', description: '[1 ms, 1 aug] x6 (18).' },
                { round: 'T4', description: '1 ms, 1 aug, [2 ms, 1 aug] x5, 1 ms (24).' },
                { round: 'T5', description: '[3 ms, 1 aug] x6 (30).' },
                { round: 'T6-T12', description: '30 ms (7 tours, 30).' },
                { round: 'T13', description: '[3 ms, 1 dim] x6 (24).' },
                { round: 'T14-T15', description: '24 ms (2 tours, 24).' },
                { round: null, description: 'Commencer à rembourrer le corps et continuer pendant que le trou devient plus petit.' },
                { round: 'T16', description: '1 ms, 1 dim, [2 ms, 1 dim] x5, 1 ms (18).' },
                { round: 'T17', description: '[1 ms, 1 dim] x6 (12).' },
                { round: 'T18', description: '[1 dim] x6 (6).' },
                { round: null, description: 'Couper le fil et le cacher.' },
            ],
        },

        // ==========================================
        // NEZ
        // ==========================================
        {
            name: 'Nez',
            materials: ['Baby Cotton Organic - Mint (09)', 'Rembourrage'],
            steps: [
                { round: null, description: 'Commencer avec un cercle magique.' },
                { round: 'T1', description: '6 ms dans le cercle magique (6).' },
                { round: 'T2', description: '[1 aug] x6 (12).' },
                { round: 'T3', description: '[1 ms, 1 aug] x6 (18).' },
                { round: 'T4', description: '1 ms, 1 aug, [2 ms, 1 aug] x5, 1 ms (24).' },
                { round: 'T5-T6', description: '24 ms (2 tours, 24).' },
                { round: null, description: 'Couper le fil mais laisser de la longueur pour la couture.' },
                { round: null, description: 'Épingler le nez sur la tête et le coudre. Le rembourrer légèrement avant de terminer de le coudre complètement.' },
            ],
        },

        // ==========================================
        // QUEUE
        // ==========================================
        {
            name: 'Queue',
            materials: ['Baby Cotton Organic - Mint (09)', 'Rembourrage'],
            steps: [
                { round: null, description: 'Commencer avec un cercle magique.' },
                { round: 'T1', description: '6 ms dans le cercle magique (6).' },
                { round: 'T2', description: '6 ms (6).' },
                { round: 'T3', description: '[1 aug] x6 (12).' },
                { round: 'T4-T5', description: '12 ms (2 tours, 12).' },
                { round: 'T6', description: '[1 ms, 1 aug] x6 (18).' },
                { round: 'T7-T10', description: '18 ms (4 tours, 18).' },
                { round: 'T11', description: '7 ms, [1 aug] x4, 7 ms (22).' },
                { round: null, description: 'Finir avec 1 mc.' },
                { round: null, description: 'Couper le fil mais laisser de la longueur pour la couture.' },
                { round: null, description: 'Épingler la queue sur le corps et la coudre. La rembourrer légèrement avant de terminer de la coudre complètement.' },
            ],
        },

        // ==========================================
        // JAMBES
        // ==========================================
        {
            name: 'Jambe x2',
            materials: ['Baby Cotton Organic - Mint (09)', 'Rembourrage'],
            steps: [
                { round: null, description: 'Commencer avec un cercle magique.' },
                { round: 'T1', description: '6 ms dans le cercle magique (6).' },
                { round: 'T2', description: '[1 aug] x6 (12).' },
                { round: 'T3-T4', description: '12 ms (2 tours, 12).' },
                { round: null, description: 'Finir avec 1 mc.' },
                { round: null, description: 'Couper le fil mais laisser de la longueur pour la couture.' },
                { round: null, description: 'Épingler les jambes sur le corps et les coudre. Les rembourrer légèrement avant de terminer de les coudre complètement.' },
            ],
        },

        // ==========================================
        // BRAS
        // ==========================================
        {
            name: 'Bras x2',
            materials: ['Baby Cotton Organic - Mint (09)', 'Rembourrage'],
            steps: [
                { round: null, description: 'Commencer avec un cercle magique.' },
                { round: 'T1', description: '6 ms dans le cercle magique (6).' },
                { round: 'T2', description: '[1 ms, 1 aug] x3 (9).' },
                { round: 'T3-T4', description: '9 ms (2 tours, 9).' },
                { round: null, description: 'Finir avec 1 mc.' },
                { round: null, description: 'Couper le fil mais laisser de la longueur pour la couture.' },
                { round: null, description: 'Épingler les bras sur le corps et les coudre. Les rembourrer légèrement avant de terminer de les coudre complètement.' },
            ],
        },

        // ==========================================
        // JOUES
        // ==========================================
        {
            name: 'Joues x2',
            materials: ['Baby Cotton Organic - Light Rose (11)', 'Fil à broder noir'],
            steps: [
                { round: null, description: 'Commencer avec un cercle magique.' },
                { round: 'R1', description: '6 ms dans le cercle magique (6).' },
                { round: null, description: 'Finir avec 1 mc.' },
                { round: null, description: 'Couper le fil mais laisser de la longueur pour la couture.' },
                { round: null, description: 'Épingler les joues sur la tête et les coudre.' },
                { round: null, description: 'Broder les sourcils et les narines en utilisant le fil à broder noir.' },
            ],
        },

        // ==========================================
        // ÉPIS
        // ==========================================
        {
            name: 'Épis x5',
            materials: ['Baby Cotton Organic - Purple (14)'],
            steps: [
                { round: null, description: 'Commencer avec un cercle magique.' },
                { round: 'R1', description: '6 ms dans le cercle magique (6).' },
                { round: 'R2', description: '6 ms (6).' },
                { round: 'R3', description: '[1 aug] x6 (12).' },
                { round: 'R4-R5', description: '12 ms (2 tours, 12).' },
                { round: null, description: 'Finir avec 1 mc.' },
                { round: null, description: 'Couper le fil mais laisser de la longueur pour la couture.' },
                { round: null, description: 'Épingler les épis sur le dinosaure et les coudre un par un.' },
            ],
        },

        // ==========================================
        // GRAND POINT
        // ==========================================
        {
            name: 'Grand point',
            materials: ['Baby Cotton Organic - Sky Blue (07)'],
            steps: [
                { round: null, description: 'Commencer avec un cercle magique.' },
                { round: 'T1', description: '6 ms dans le cercle (6).' },
                { round: 'T2', description: '[1 aug] x6 (12).' },
                { round: null, description: 'Finir avec 1 mc.' },
                { round: null, description: 'Couper le fil, mais laisser un long fil pour le coudre.' },
                { round: null, description: 'Épingler le point sur le ventre et le coudre.' },
            ],
        },

        // ==========================================
        // PETITS POINTS
        // ==========================================
        {
            name: 'Petits points x4',
            materials: ['Baby Cotton Organic - Sky Blue (07)'],
            steps: [
                { round: null, description: 'Commencer avec un cercle magique.' },
                { round: 'T1', description: '6 ms dans le cercle (6).' },
                { round: null, description: 'Finir avec 1 mc.' },
                { round: null, description: 'Couper le fil, mais laisser un long fil pour le coudre.' },
                { round: null, description: 'Épingler un point de chaque côté de la tête et les coudre.' },
            ],
        },

        // ==========================================
        // ASSEMBLAGE
        // ==========================================
        {
            name: 'Assemblage du mobile',
            materials: [
                'Anneau en métal de 20 cm',
                'Fil bleu',
                '4 perles en silicone de 18 mm',
                '8 perles en silicone de 15 mm',
                'Fil et aiguille à coudre',
            ],
            steps: [
                { round: null, description: 'Vous devez faire quatre dinosaures pour le mobile.' },
                { round: null, description: 'Faire des ms tout autour de l’anneau en métal en utilisant le fil bleu. Couper le fil et le cacher.' },
                { round: null, description: 'Couper un long fil, environ 1,50 mètre. Passer l’aiguille à travers le haut d’un dinosaure et tirer sur le fil de façon à avoir une longueur égale de chaque côté. Faire un petit nœud.' },
                { round: null, description: 'Passer le fil à travers 3 perles en silicone.' },
                { round: null, description: 'Répéter ceci pour les quatre dinosaures.' },
                { round: null, description: 'Coudre les dinosaures un par un sur l’anneau. Faire un nœud quand l’emplacement vous plaît, en vous assurant que les dinosaures pendent à la même hauteur avant de faire un nœud.' },
                { round: null, description: 'Vous avez maintenant quatre doubles fils en haut de l’anneau en métal.' },
                { round: null, description: 'Nouer les fils ensemble au milieu de l’anneau en métal.' },
                { round: null, description: 'Et vous avez terminé ! Amusez-vous !' },
            ],
        },
    ]
);
