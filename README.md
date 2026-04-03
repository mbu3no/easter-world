# Easter World

**Páscoa ao Redor do Mundo** — um mapa interativo que mostra como a Páscoa é celebrada em 14 países, com tradições, curiosidades e fotos de cada cultura.

---

## Sobre o Projeto

Easter World é uma aplicação web que convida o usuário a explorar tradições pascais pelo mundo. Ao clicar em um país no mapa ou na barra lateral, um card com detalhes é exibido — incluindo a tradição local, uma curiosidade e uma foto temática.

### Países incluídos

Brasil, Suécia, Grécia, Finlândia, Estados Unidos, França, Polônia, Austrália, Etiópia, Filipinas, Alemanha, México, Índia e Japão.

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| **SvelteKit** | Framework principal (Svelte 5 com runes) |
| **TypeScript** | Tipagem estática |
| **Leaflet** | Mapa interativo |
| **Pexels** | Fotos temáticas por país |
| **Google Fonts** | Playfair Display + DM Sans |
| **CARTO Tiles** | Camada visual do mapa (light theme) |

---

## Como Rodar

```bash
# clonar o repositório
git clone https://github.com/mbu3no/easter-world.git
cd easter-world

# instalar dependências
npm install

# iniciar o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

### Build de produção

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
      Sidebar.svelte      # Lista lateral de países
      CountryCard.svelte   # Card modal com detalhes e foto
    data/
      countries.ts        # Dados dos 14 países
  routes/
    +layout.svelte        # Layout global e CSS
    +page.svelte          # Página principal
  app.css                 # Variáveis de tema e estilos globais
  app.html                # HTML base com Google Fonts
```

---

## Funcionalidades

- Mapa interativo com marcadores animados por país
- Sidebar com lista navegável e destaque do país selecionado
- Card modal com foto, tradição e curiosidade de cada país
- Animação fly-to ao selecionar um país no mapa
- Design responsivo (sidebar adapta para mobile)
- Tema visual com paleta orgânica (creme, verde-sálvia, terracota, ouro)

---

## Licença

MIT
