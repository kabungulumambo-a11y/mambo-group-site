# MAMBO GROUP · site web

Site vitrine de MAMBO GROUP, groupe agroalimentaire en République démocratique du Congo.

## Structure

- `index.html` : la page unique du site (Le groupe, Activités, Marques, Contact).
- `assets/css/style.css` : couleurs et polices de la charte graphique v1.
- `assets/js/main.js` : menu mobile.
- `assets/img/` : logos (couleur, blanc, symbole seul), favicon et image de partage.

Le site est en HTML et CSS simples, sans outil de compilation.

## Voir le site en local

```sh
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000.

## Mettre en ligne avec GitHub Pages

Dans le dépôt : Settings → Pages → Source « Deploy from a branch », branche `main`, dossier `/ (root)`.

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
