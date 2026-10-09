# MAMBO GROUP · site web

Site vitrine de MAMBO GROUP, groupe agroalimentaire en République démocratique du Congo.

## Structure

- `index.html` : la page d'accueil (Le groupe, Activités, Marques, Actualités, Contact).
- `actualites/index.html` : la liste de toutes les actualités.
- `_posts/` : une actualité par fichier Markdown.
- `_layouts/` : gabarits communs (`default.html` pour l'en-tête et le pied de page, `post.html` pour un article).
- `_includes/` : liste des actualités et date en français.
- `assets/css/style.css` : couleurs et polices de la charte graphique v1.
- `assets/js/main.js` : menu mobile.
- `assets/img/` : logos (couleur, blanc, symbole seul), favicon et image de partage.

Le site est construit par Jekyll, directement par GitHub Pages.

## Ajouter une actualité

Créer `_posts/AAAA-MM-JJ-titre-court.md` :

```markdown
---
title: Titre de l'actualité
categorie: Partenariat
resume: Une ou deux phrases affichées sur la carte et sous le titre.
image: /assets/img/actualites/photo.jpg   # facultatif
---

Texte de l'article en Markdown.
```

Les trois plus récentes apparaissent sur l'accueil.

## Voir le site en local

```sh
gem install jekyll
jekyll serve
```

Puis ouvrir http://localhost:4000.

## Mise en ligne

GitHub Pages publie la branche `main` (dossier racine) sur https://mambogroup-rdc.com (fichier `CNAME`).

## Charte graphique

| Couleur | HEX | Usage |
| --- | --- | --- |
| Vert MAMBO | `#1F5130` | Logo, titres, grands aplats |
| Vert Pousse | `#7BB13C` | Boutons, accents |
| Ocre Récolte | `#C9862B` | Mises en avant |
| Brun Terre | `#5A3A22` | Fonds premium |
| Blanc Manioc | `#F7F5EF` | Fond de page |
| Charbon | `#1E2622` | Texte courant |

Polices : Poppins (titres) et Source Sans 3 (textes), chargées depuis Google Fonts.

## À compléter

- Téléphone du groupe (section Contact de `index.html`).
- Logos des marques Aqua Conso et Rozana.
- Photos (lumière naturelle, équipes au travail, usines et produits en RDC).
