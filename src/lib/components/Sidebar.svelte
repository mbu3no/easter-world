<script lang="ts">
  import type { Country } from "$lib/data/countries";

  let {
    countries,
    selectedCountry = null,
    onSelect = () => {},
  }: {
    countries: Country[];
    selectedCountry: Country | null;
    onSelect: (country: Country) => void;
  } = $props();
</script>

<aside class="sidebar">
  <div class="header">
    <span class="header-egg">&#127842;</span>
    <h1>Easter<br />World</h1>
    <p class="subtitle">Páscoa ao Redor do Mundo</p>
    <div class="divider"></div>
  </div>

  <p class="hint">Clique em um país no mapa ou na lista para explorar tradições pascais.</p>

  <nav class="country-list">
    {#each countries as country, i}
      <button
        class="country-btn"
        class:active={selectedCountry?.name === country.name}
        onclick={() => onSelect(country)}
        style="animation-delay: {i * 40}ms"
      >
        <span class="country-emoji">{country.emoji}</span>
        <span class="country-name">{country.name}</span>
        <span class="country-icon">{country.image}</span>
      </button>
    {/each}
  </nav>

  <footer>
    <p>Feito com Svelte + Leaflet</p>
  </footer>
</aside>

<style>
  .sidebar {
    width: 300px;
    height: 100vh;
    background: var(--cream);
    border-right: 1px solid var(--cream-dark);
    display: flex;
    flex-direction: column;
    padding: 2rem 1.25rem 1.25rem;
    overflow-y: auto;
    flex-shrink: 0;
    position: relative;
  }

  .sidebar::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(180deg, rgba(168, 197, 171, 0.15) 0%, transparent 100%);
    pointer-events: none;
  }

  .header {
    text-align: center;
    margin-bottom: 0.75rem;
    position: relative;
  }

  .header-egg {
    font-size: 2.2rem;
    display: block;
    margin-bottom: 0.25rem;
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }

  h1 {
    margin: 0;
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 900;
    color: var(--ink);
    line-height: 1.1;
    letter-spacing: -0.5px;
  }

  .subtitle {
    font-family: var(--font-display);
    font-style: italic;
    color: var(--bark-light);
    font-size: 0.85rem;
    margin: 6px 0 0;
    font-weight: 400;
  }

  .divider {
    width: 40px;
    height: 2px;
    background: var(--terracotta);
    margin: 1rem auto 0;
    border-radius: 1px;
  }

  .hint {
    color: var(--ink-soft);
    font-size: 0.78rem;
    text-align: center;
    margin: 0.5rem 0 1.25rem;
    line-height: 1.5;
    padding: 0 0.5rem;
  }

  .country-list {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .country-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    background: transparent;
    border: none;
    border-radius: 8px;
    color: var(--ink);
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: var(--font-body);
    font-size: 0.88rem;
    font-weight: 500;
    text-align: left;
    width: 100%;
    animation: slideIn 0.4s ease both;
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateX(-12px); }
    to { opacity: 1; transform: translateX(0); }
  }

  .country-btn:hover {
    background: rgba(122, 158, 126, 0.12);
  }

  .country-btn.active {
    background: var(--sage);
    color: white;
    box-shadow: 0 2px 8px rgba(74, 107, 78, 0.25);
  }

  .country-btn.active .country-icon {
    opacity: 1;
  }

  .country-emoji {
    font-size: 1.2rem;
    width: 26px;
    text-align: center;
    flex-shrink: 0;
  }

  .country-name {
    flex: 1;
  }

  .country-icon {
    font-size: 0.95rem;
    opacity: 0.5;
    transition: opacity 0.2s;
    flex-shrink: 0;
  }

  .country-btn:hover .country-icon {
    opacity: 1;
  }

  footer {
    margin-top: 1rem;
    padding-top: 0.75rem;
    border-top: 1px solid var(--cream-dark);
    text-align: center;
  }

  footer p {
    color: var(--bark-light);
    font-size: 0.68rem;
    margin: 0;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    .sidebar {
      width: 100%;
      height: auto;
      max-height: 35vh;
      border-right: none;
      border-bottom: 1px solid var(--cream-dark);
      padding: 1rem;
    }

    .header-egg { font-size: 1.5rem; }
    h1 { font-size: 1.3rem; }
    .divider { margin: 0.5rem auto 0; }
    .hint { margin: 0.25rem 0 0.5rem; }
  }
</style>
