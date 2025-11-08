# Web de Consciència Alimentària

Aquest projecte presenta una web moderna i vibrant pensada per a l'alumnat de 3r d'ESO, amb contingut educatiu sobre els principals nutrients i recursos multimèdia.

## Continguts
- **Pàgina d'inici** amb hero animat, accés ràpid a les sales i targetes per a cada nutrient.
- **Sala de Nutrients** amb subpàgines dedicades a: hidrats de carboni, lípids, proteïnes, vitamines, minerals i aigua.
- **Sala d'Aliments** amb comparatives d'ingredients i informació nutricional de begudes energètiques, salses, sucs, iogurts i xocolates, mapes conceptuals i galeria d'imatges pròpies.
- **Sales en construcció** (Anàlisi i Nutricionista) amb placeholders visuals.

## Estructura
```
index.html
nutrients/
  ├─ hidrats.html
  ├─ lipids.html
  ├─ proteines.html
  ├─ vitamines.html
  ├─ minerals.html
  └─ aigua.html
assets/
  ├─ css/style.css
  ├─ images/aliments/*.svg
  └─ js/main.js
```

## Com visualitzar el lloc
1. Clona o descarrega el repositori.
2. Obre `index.html` al navegador preferit.
3. Navega per les sales des del menú superior o les targetes destacades.

El disseny és responsive i funciona tant en escriptori com en dispositius mòbils.

### Visualització amb un servidor local
Si prefereixes treballar amb un servidor local (per exemple, per provar rutes relatives o evitar restriccions de seguretat del navegador), pots utilitzar Python:

```bash
python3 -m http.server 8000
```

Tot seguit, obre `http://localhost:8000` al navegador i accedeix al projecte.

## Publicar a GitHub Pages
1. Puja els canvis al repositori de GitHub.
2. A GitHub, ves a **Settings → Pages**.
3. A l'apartat **Build and deployment**, selecciona **Deploy from a branch**.
4. Tria la branca amb el contingut (habitualment `main` o `gh-pages`) i la carpeta `/ (root)`.
5. Desa la configuració; GitHub generarà automàticament la web. El procés pot trigar uns minuts.
6. Quan l'estat indiqui "Published", fes servir l'URL indicat (per exemple, `https://<usuari>.github.io/<repositori>/`) per veure la versió actualitzada.

Per refrescar el contingut després de fer nous canvis, només cal tornar a pujar-los a la branca seleccionada; GitHub Pages redeployarà el lloc de forma automàtica.
