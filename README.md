# Easter World

**Pascoa ao Redor do Mundo** — um mapa interativo que mostra como a Pascoa e celebrada em 14 paises, com tradicoes, curiosidades e fotos de cada cultura.

---

## Sobre o Projeto

Easter World e uma aplicacao web que convida o usuario a explorar tradicoes pascais pelo mundo. Ao clicar em um pais no mapa ou na barra lateral, um card com detalhes e exibido — incluindo a tradicao local, uma curiosidade e uma foto tematica.

### Paises incluidos

Brasil, Suecia, Grecia, Finlandia, Estados Unidos, Franca, Polonia, Australia, Etiopia, Filipinas, Alemanha, Mexico, India e Japao.

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| **SvelteKit** | Framework principal (Svelte 5 com runes) |
| **TypeScript** | Tipagem estatica |
| **Leaflet** | Mapa interativo |
| **Pexels** | Fotos tematicas por pais |
| **Google Fonts** | Playfair Display + DM Sans |
| **CARTO Tiles** | Camada visual do mapa (light theme) |

---

## Como Rodar

```bash
# clonar o repositorio
git clone https://github.com/mbu3no/easter-world.git
cd easter-world

# instalar dependencias
npm install

# iniciar o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

### Build de producao

```bash
npm run build
npm run preview
```

---

## Estrutura do Projeto

```
src/
  lib/
    components/
      Map.svelte          # Mapa interativo com markers e tooltips
      Sidebar.svelte      # Lista lateral de paises
      CountryCard.svelte   # Card modal com detalhes e foto
    data/
      countries.ts        # Dados dos 14 paises
  routes/
    +layout.svelte        # Layout global e CSS
    +page.svelte          # Pagina principal
  app.css                 # Variaveis de tema e estilos globais
  app.html                # HTML base com Google Fonts
```

---

## Funcionalidades

- Mapa interativo com marcadores animados por pais
- Sidebar com lista navegavel e destaque do pais selecionado
- Card modal com foto, tradicao e curiosidade de cada pais
- Animacao fly-to ao selecionar um pais no mapa
- Design responsivo (sidebar adapta para mobile)
- Tema visual com paleta organica (creme, verde-salvia, terracota, ouro)

---

## Licenca

MIT
