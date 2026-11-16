import { stitches } from "../models/stitches.model";

export const listStitches: stitches[] = [

    // ==========================================
    // MAILLES DE BASE
    // ==========================================
    new stitches(
        'Maille',
        'm',
        'assets/stitches/fr/m.jpg',
        null,
        'fr',
        'base',
        []
    ),

    new stitches(
        'Maille en l’air',
        'ml',
        'assets/stitches/fr/ml.jpg',
        null,
        'fr',
        'base',
        [
            { description: 'Faire un nœud coulant sur le crochet.', img: null },
            { description: 'Faire un jeté et passer le fil dans la boucle présente sur le crochet.', img: null }
        ]
    ),

    new stitches(
        'Maille coulée',
        'mc',
        'assets/stitches/fr/mc.jpg',
        null,
        'fr',
        'base',
        [
            { description: 'Piquer le crochet dans la maille souhaitée.', img: null },
            { description: 'Faire un jeté et ramener le fil à travers la maille et la boucle présente sur le crochet.', img: null }
        ]
    ),

    new stitches(
        'Maille serrée',
        'ms',
        'assets/stitches/fr/ms.jpg',
        null,
        'fr',
        'base',
        [
            { description: 'Piquer le crochet dans la maille souhaitée.', img: null },
            { description: 'Faire un jeté et ramener le fil à travers la maille. Deux boucles sont présentes sur le crochet.', img: null },
            { description: 'Faire un nouveau jeté et passer le fil à travers les deux boucles.', img: null }
        ]
    ),

    new stitches(
        'Demi-bride',
        'db',
        'assets/stitches/fr/db.jpg',
        null,
        'fr',
        'base',
        [
            { description: 'Faire un jeté.', img: null },
            { description: 'Piquer le crochet dans la maille souhaitée et ramener le fil. Trois boucles sont présentes sur le crochet.', img: null },
            { description: 'Faire un jeté et passer le fil à travers les trois boucles.', img: null }
        ]
    ),

    new stitches(
        'Bride',
        'br',
        'assets/stitches/fr/br.jpg',
        null,
        'fr',
        'base',
        [
            { description: 'Faire un jeté.', img: null },
            { description: 'Piquer le crochet dans la maille souhaitée et ramener le fil.', img: null },
            { description: 'Faire un jeté et passer le fil à travers les deux premières boucles.', img: null },
            { description: 'Faire un nouveau jeté et passer le fil à travers les deux dernières boucles.', img: null }
        ]
    ),

    new stitches(
        'Double-bride',
        'dbr',
        'assets/stitches/fr/dbr.jpg',
        null,
        'fr',
        'base',
        [
            { description: 'Faire deux jetés autour du crochet.', img: null },
            { description: 'Piquer le crochet dans la maille souhaitée et ramener le fil.', img: null },
            { description: 'Faire un jeté et passer le fil à travers les deux premières boucles.', img: null },
            { description: 'Répéter l’opération deux fois pour terminer la maille.', img: null }
        ]
    ),

    new stitches(
        'Triple-bride',
        'tbr',
        'assets/stitches/fr/tbr.jpg',
        null,
        'fr',
        'base',
        [
            { description: 'Faire trois jetés autour du crochet.', img: null },
            { description: 'Piquer le crochet dans la maille souhaitée et ramener le fil.', img: null },
            { description: 'Faire un jeté et passer le fil à travers les deux premières boucles.', img: null },
            { description: 'Répéter cette opération jusqu’à ce qu’il ne reste qu’une boucle sur le crochet.', img: null }
        ]
    ),

    new stitches(
        'Quadruple-bride',
        'qbr',
        'assets/stitches/fr/qbr.jpg',
        null,
        'fr',
        'base',
        [
            { description: 'Faire quatre jetés autour du crochet.', img: null },
            { description: 'Piquer le crochet dans la maille souhaitée et ramener le fil.', img: null },
            { description: 'Faire un jeté et passer le fil à travers deux boucles.', img: null },
            { description: 'Répéter jusqu’à obtenir une seule boucle sur le crochet.', img: null }
        ]
    ),

    // ==========================================
    // VARIANTES
    // ==========================================

    new stitches(
        'Maille serrée dans le brin arrière',
        'ms-br-arr',
        'assets/stitches/fr/ms-brin-arriere.jpg',
        null,
        'fr',
        'variant',
        [
            { description: 'Repérer le brin arrière de la maille.', img: null },
            { description: 'Piquer le crochet uniquement dans le brin arrière.', img: null },
            { description: 'Réaliser une maille serrée classique.', img: null }
        ]
    ),

    new stitches(
        'Maille serrée dans le brin avant',
        'ms-br-av',
        'assets/stitches/fr/ms-brin-avant.jpg',
        null,
        'fr',
        'variant',
        [
            { description: 'Repérer le brin avant de la maille.', img: null },
            { description: 'Piquer le crochet uniquement dans le brin avant.', img: null },
            { description: 'Réaliser une maille serrée classique.', img: null }
        ]
    ),

    new stitches(
        'Maille serrée allongée',
        'msa',
        'assets/stitches/fr/msa.jpg',
        null,
        'fr',
        'variant',
        [
            { description: 'Piquer le crochet dans la maille souhaitée.', img: null },
            { description: 'Ramener une boucle plus longue que d’habitude.', img: null },
            { description: 'Faire un jeté et passer le fil à travers les deux boucles.', img: null }
        ]
    ),

    new stitches(
        'Maille serrée en relief avant',
        'ms-ra',
        'assets/stitches/fr/ms-relief-avant.jpg',
        null,
        'fr',
        'variant',
        [
            { description: 'Repérer le corps de la maille du rang précédent.', img: null },
            { description: 'Piquer le crochet autour du corps de la maille de l’avant vers l’arrière puis vers l’avant.', img: null },
            { description: 'Réaliser une maille serrée normalement.', img: null }
        ]
    ),

    new stitches(
        'Maille serrée en relief arrière',
        'ms-rr',
        'assets/stitches/fr/ms-relief-arriere.jpg',
        null,
        'fr',
        'variant',
        [
            { description: 'Repérer le corps de la maille du rang précédent.', img: null },
            { description: 'Piquer le crochet autour du corps de la maille de l’arrière vers l’avant puis vers l’arrière.', img: null },
            { description: 'Réaliser une maille serrée normalement.', img: null }
        ]
    ),

    new stitches(
        'Bride en relief avant',
        'br-ra',
        'assets/stitches/fr/br-relief-avant.jpg',
        null,
        'fr',
        'variant',
        [
            { description: 'Faire un jeté.', img: null },
            { description: 'Piquer le crochet autour du corps de la bride précédente, de l’avant vers l’arrière puis vers l’avant.', img: null },
            { description: 'Terminer la bride normalement.', img: null }
        ]
    ),

    new stitches(
        'Bride en relief arrière',
        'br-rr',
        'assets/stitches/fr/br-relief-arriere.jpg',
        null,
        'fr',
        'variant',
        [
            { description: 'Faire un jeté.', img: null },
            { description: 'Piquer le crochet autour du corps de la bride précédente, de l’arrière vers l’avant puis vers l’arrière.', img: null },
            { description: 'Terminer la bride normalement.', img: null }
        ]
    ),

    new stitches(
        'Maille serrée piquée dans le troisième brin',
        'ms-3b',
        'assets/stitches/fr/ms-troisieme-brin.jpg',
        null,
        'fr',
        'variant',
        [
            { description: 'Repérer le troisième brin de la maille.', img: null },
            { description: 'Piquer le crochet dans ce troisième brin.', img: null },
            { description: 'Réaliser une maille serrée classique.', img: null }
        ]
    ),

    // ==========================================
    // AUGMENTATIONS ET DIMINUTIONS
    // ==========================================

    new stitches(
        'Augmentation en maille serrée',
        'aug-ms',
        'assets/stitches/fr/aug-ms.jpg',
        null,
        'fr',
        'increase-decrease',
        [
            { description: 'Piquer le crochet dans une maille.', img: null },
            { description: 'Réaliser une première maille serrée.', img: null },
            { description: 'Piquer une nouvelle fois dans la même maille et réaliser une deuxième maille serrée.', img: null }
        ]
    ),

    new stitches(
        'Diminution en maille serrée',
        'dim-ms',
        'assets/stitches/fr/dim-ms.jpg',
        null,
        'fr',
        'increase-decrease',
        [
            { description: 'Piquer le crochet dans la première maille et ramener le fil.', img: null },
            { description: 'Piquer le crochet dans la maille suivante et ramener le fil.', img: null },
            { description: 'Faire un jeté et passer le fil à travers les trois boucles.', img: null }
        ]
    ),

    new stitches(
        'Augmentation en bride',
        'aug-br',
        'assets/stitches/fr/aug-br.jpg',
        null,
        'fr',
        'increase-decrease',
        [
            { description: 'Piquer le crochet dans une maille.', img: null },
            { description: 'Réaliser une première bride.', img: null },
            { description: 'Réaliser une deuxième bride dans la même maille.', img: null }
        ]
    ),

    new stitches(
        'Diminution en bride',
        'dim-br',
        'assets/stitches/fr/dim-br.jpg',
        null,
        'fr',
        'increase-decrease',
        [
            { description: 'Commencer une bride dans la première maille sans la terminer.', img: null },
            { description: 'Commencer une deuxième bride dans la maille suivante sans la terminer.', img: null },
            { description: 'Faire un jeté et passer le fil à travers toutes les boucles restantes.', img: null }
        ]
    ),

    new stitches(
        'Augmentation en demi-bride',
        'aug-db',
        'assets/stitches/fr/aug-db.jpg',
        null,
        'fr',
        'increase-decrease',
        [
            { description: 'Piquer le crochet dans une maille.', img: null },
            { description: 'Réaliser une demi-bride.', img: null },
            { description: 'Réaliser une deuxième demi-bride dans la même maille.', img: null }
        ]
    ),

    new stitches(
        'Diminution en demi-bride',
        'dim-db',
        'assets/stitches/fr/dim-db.jpg',
        null,
        'fr',
        'increase-decrease',
        [
            { description: 'Faire un jeté et piquer le crochet dans la première maille.', img: null },
            { description: 'Ramener le fil puis piquer dans la maille suivante et ramener le fil.', img: null },
            { description: 'Faire un jeté et passer à travers toutes les boucles.', img: null }
        ]
    ),
    // ==========================================
    // POINTS DE TEXTURE
    // ==========================================

    new stitches(
        'Point de riz',
        'pr',
        'assets/stitches/fr/point-riz.jpg',
        null,
        'fr',
        'texture',
        [
            { description: 'Réaliser une chaînette de base.', img: null },
            { description: 'Alterner une maille serrée et une maille en l’air en sautant une maille de base.', img: null },
            { description: 'Au rang suivant, travailler les mailles serrées dans les espaces de mailles en l’air.', img: null },
            { description: 'Répéter le motif pour obtenir une texture granuleuse.', img: null }
        ]
    ),

    new stitches(
        'Point granité',
        'pg',
        'assets/stitches/fr/point-granite.jpg',
        null,
        'fr',
        'texture',
        [
            { description: 'Réaliser une chaînette de base.', img: null },
            { description: 'Alterner mailles serrées et mailles en l’air en sautant une maille.', img: null },
            { description: 'Travailler les rangs suivants dans les espaces de mailles en l’air.', img: null },
            { description: 'Répéter pour obtenir une texture légèrement granuleuse.', img: null }
        ]
    ),

    new stitches(
        'Point de côtes',
        'pc',
        'assets/stitches/fr/point-cotes.jpg',
        null,
        'fr',
        'texture',
        [
            { description: 'Réaliser une chaînette de base.', img: null },
            { description: 'Faire un premier rang de mailles serrées.', img: null },
            { description: 'Travailler les rangs suivants uniquement dans le brin arrière.', img: null },
            { description: 'Répéter pour obtenir un effet côtelé.', img: null }
        ]
    ),

    new stitches(
        'Point de grille',
        'pgr',
        'assets/stitches/fr/point-grille.jpg',
        null,
        'fr',
        'texture',
        [
            { description: 'Réaliser une chaînette de base.', img: null },
            { description: 'Alterner brides et mailles en l’air.', img: null },
            { description: 'Sauter les mailles de base correspondant aux espaces.', img: null },
            { description: 'Répéter pour former une grille ajourée.', img: null }
        ]
    ),

    new stitches(
        'Grille de brides',
        'gb',
        'assets/stitches/fr/grille-brides.jpg',
        null,
        'fr',
        'texture',
        [
            { description: 'Réaliser une chaînette de base.', img: null },
            { description: 'Alterner une bride et deux mailles en l’air en sautant deux mailles.', img: null },
            { description: 'Au rang suivant, réaliser les brides au-dessus des brides et les espaces au-dessus des espaces.', img: null },
            { description: 'Répéter pour former un filet ajouré.', img: null }
        ]
    ),

    new stitches(
        'Point de coquilles',
        'pch',
        'assets/stitches/fr/point-coquilles.jpg',
        null,
        'fr',
        'texture',
        [
            { description: 'Réaliser une chaînette de base.', img: null },
            { description: 'Réaliser plusieurs brides dans une même maille.', img: null },
            { description: 'Séparer les groupes avec des mailles serrées ou des espaces.', img: null },
            { description: 'Répéter le motif sur tout le rang.', img: null }
        ]
    ),

    new stitches(
        'Point éventail',
        'pe',
        'assets/stitches/fr/point-eventail.jpg',
        null,
        'fr',
        'texture',
        [
            { description: 'Réaliser une chaînette de base.', img: null },
            { description: 'Réaliser plusieurs brides dans une même maille.', img: null },
            { description: 'Séparer les éventails par des mailles sautées.', img: null },
            { description: 'Répéter le motif.', img: null }
        ]
    ),

    new stitches(
        'Point de vagues',
        'pv',
        'assets/stitches/fr/point-vagues.jpg',
        null,
        'fr',
        'texture',
        [
            { description: 'Réaliser une chaînette de base adaptée au motif.', img: null },
            { description: 'Alterner augmentations et diminutions en brides pour créer des ondulations.', img: null },
            { description: 'Répéter la séquence sur chaque rang.', img: null }
        ]
    ),

    new stitches(
        'Point chevron',
        'pchv',
        'assets/stitches/fr/point-chevron.jpg',
        null,
        'fr',
        'texture',
        [
            { description: 'Réaliser une chaînette de base adaptée au motif.', img: null },
            { description: 'Réaliser plusieurs brides dans une même maille pour former les pointes.', img: null },
            { description: 'Effectuer des diminutions pour former les creux.', img: null },
            { description: 'Répéter le motif.', img: null }
        ]
    ),

    new stitches(
        'Point de briques',
        'pbr',
        'assets/stitches/fr/point-briques.jpg',
        null,
        'fr',
        'texture',
        [
            { description: 'Réaliser une chaînette de base.', img: null },
            { description: 'Travailler des groupes de brides séparés par des espaces.', img: null },
            { description: 'Décaler les groupes au rang suivant.', img: null },
            { description: 'Répéter pour créer un effet de briques.', img: null }
        ]
        
    ),
     // ==========================================
    // POINTS FANTAISIE
    // ==========================================

    new stitches(
        'Point noisette',
        'pn',
        'assets/stitches/fr/point-noisette.jpg',
        null,
        'fr',
        'fancy',
        [
            { description: 'Faire un jeté et piquer le crochet dans la maille souhaitée.', img: null },
            { description: 'Ramener le fil et réaliser une bride incomplète.', img: null },
            { description: 'Répéter plusieurs fois dans la même maille sans terminer les brides.', img: null },
            { description: 'Faire un dernier jeté et passer le fil à travers toutes les boucles.', img: null }
        ]
    ),

    new stitches(
        'Point pop-corn',
        'pp',
        'assets/stitches/fr/point-popcorn.jpg',
        null,
        'fr',
        'fancy',
        [
            { description: 'Réaliser plusieurs brides dans une même maille.', img: null },
            { description: 'Retirer le crochet de la boucle active.', img: null },
            { description: 'Piquer le crochet dans la première bride du groupe.', img: null },
            { description: 'Récupérer la boucle active et la faire passer à travers la première bride.', img: null }
        ]
    ),

    new stitches(
        'Point puff',
        'puff',
        'assets/stitches/fr/point-puff.jpg',
        null,
        'fr',
        'fancy',
        [
            { description: 'Faire un jeté et piquer le crochet dans la maille.', img: null },
            { description: 'Ramener une longue boucle.', img: null },
            { description: 'Répéter plusieurs fois le jeté et le passage dans la même maille.', img: null },
            { description: 'Faire un jeté et passer le fil à travers toutes les boucles.', img: null },
            { description: 'Faire une maille en l’air pour fermer le point si nécessaire.', img: null }
        ]
    ),

    new stitches(
        'Point crocodile',
        'pcro',
        'assets/stitches/fr/point-crocodile.jpg',
        null,
        'fr',
        'fancy',
        [
            { description: 'Réaliser une base composée de brides et de mailles en l’air.', img: null },
            { description: 'Autour du corps d’une bride, réaliser plusieurs brides en relief.', img: null },
            { description: 'Travailler autour de la bride suivante dans le sens opposé.', img: null },
            { description: 'Répéter pour former des écailles.', img: null }
        ]
    ),

    new stitches(
        'Point étoile',
        'petoile',
        'assets/stitches/fr/point-etoile.jpg',
        null,
        'fr',
        'fancy',
        [
            { description: 'Réaliser une chaînette de base.', img: null },
            { description: 'Ramener des boucles successivement dans plusieurs mailles.', img: null },
            { description: 'Faire un jeté et passer à travers toutes les boucles.', img: null },
            { description: 'Faire une maille en l’air pour fermer l’étoile.', img: null }
        ]
    ),

    new stitches(
        'Point écrevisse',
        'pecr',
        'assets/stitches/fr/point-ecrevisse.jpg',
        null,
        'fr',
        'fancy',
        [
            { description: 'Commencer par une maille serrée.', img: null },
            { description: 'Piquer le crochet dans la maille située à droite.', img: null },
            { description: 'Faire un jeté et ramener le fil.', img: null },
            { description: 'Faire un nouveau jeté et passer à travers les deux boucles.', img: null },
            { description: 'Répéter en travaillant de droite à gauche.', img: null }
        ]
    ),

    new stitches(
        'Point de spirale',
        'ps',
        'assets/stitches/fr/point-spirale.jpg',
        null,
        'fr',
        'fancy',
        [
            { description: 'Réaliser une base en cercle.', img: null },
            { description: 'Travailler en continu sans fermer les tours.', img: null },
            { description: 'Placer un marqueur au début du tour.', img: null },
            { description: 'Continuer les mailles en suivant une progression en spirale.', img: null }
        ]
    ),

    new stitches(
        'Point croisé',
        'pcr',
        'assets/stitches/fr/point-croise.jpg',
        null,
        'fr',
        'fancy',
        [
            { description: 'Faire un jeté et sauter une maille.', img: null },
            { description: 'Réaliser une bride dans la maille suivante.', img: null },
            { description: 'Revenir dans la maille précédemment sautée.', img: null },
            { description: 'Réaliser une bride pour former le croisement.', img: null }
        ]
    ),
    // ==========================================
    // FINITIONS ET TECHNIQUES
    // ==========================================

    new stitches(
        'Cercle magique',
        'cm',
        'assets/stitches/fr/cercle-magique.jpg',
        null,
        'fr',
        'finishing',
        [
            { description: 'Former un cercle avec le fil autour des doigts.', img: null },
            { description: 'Insérer le crochet dans le cercle et ramener le fil.', img: null },
            { description: 'Faire une maille en l’air pour sécuriser le cercle.', img: null },
            { description: 'Réaliser les mailles demandées dans le cercle.', img: null },
            { description: 'Tirer sur le fil court pour resserrer le cercle.', img: null }
        ]
    ),

    new stitches(
        'Nœud coulant',
        'nc',
        'assets/stitches/fr/noeud-coulant.jpg',
        null,
        'fr',
        'finishing',
        [
            { description: 'Former une boucle avec le fil.', img: null },
            { description: 'Passer le fil à travers la boucle.', img: null },
            { description: 'Placer la boucle sur le crochet et serrer doucement.', img: null }
        ]
    ),

    new stitches(
        'Fermeture invisible',
        'fi',
        'assets/stitches/fr/fermeture-invisible.jpg',
        null,
        'fr',
        'finishing',
        [
            { description: 'Terminer le dernier tour et couper le fil.', img: null },
            { description: 'Passer le fil dans une aiguille à laine.', img: null },
            { description: 'Passer l’aiguille sous les deux brins de la première maille du tour.', img: null },
            { description: 'Revenir dans les deux brins de la dernière maille pour imiter une maille.', img: null },
            { description: 'Rentrer le fil sur l’envers.', img: null }
        ]
    ),

    new stitches(
        'Maille de surface',
        'msu',
        'assets/stitches/fr/maille-surface.jpg',
        null,
        'fr',
        'finishing',
        [
            { description: 'Insérer le crochet dans le tissu crocheté.', img: null },
            { description: 'Récupérer le fil sur l’envers.', img: null },
            { description: 'Piquer dans le point suivant et ramener une nouvelle boucle.', img: null },
            { description: 'Répéter pour dessiner une ligne de mailles sur la surface.', img: null }
        ]
    ),

    new stitches(
        'Maille de fermeture',
        'mf',
        'assets/stitches/fr/maille-fermeture.jpg',
        null,
        'fr',
        'finishing',
        [
            { description: 'Terminer le dernier rang ou le dernier tour.', img: null },
            { description: 'Couper le fil en conservant une longueur suffisante.', img: null },
            { description: 'Passer le fil dans la dernière boucle et tirer pour bloquer.', img: null },
            { description: 'Rentrer le fil à l’aide d’une aiguille à laine.', img: null }
        ]
    )
];