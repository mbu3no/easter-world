<script lang="ts">
  import { countries } from "$lib/data/countries";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import CountryCard from "$lib/components/CountryCard.svelte";
  import Map from "$lib/components/Map.svelte";
  import type { Country } from "$lib/data/countries";

  let selectedCountry: Country | null = $state(null);

  function handleSelect(country: Country) {
    selectedCountry = country;
  }

  function handleClose() {
    selectedCountry = null;
  }
</script>

<div class="app">
  <Sidebar {countries} {selectedCountry} onSelect={handleSelect} />

  <main class="map-area">
    <Map {countries} {selectedCountry} onSelect={handleSelect} />

    <div class="map-label">
      <span>Explore o mapa</span>
    </div>
  </main>

  <CountryCard country={selectedCountry} onClose={handleClose} />
</div>

<style>
  .app {
    display: flex;
    height: 100vh;
    width: 100vw;
  }

  .map-area {
    flex: 1;
    position: relative;
    overflow: hidden;
  }

  .map-label {
    position: absolute;
    top: 16px;
    left: 16px;
    z-index: 400;
    background: var(--cream);
    border: 1px solid var(--cream-dark);
    padding: 6px 14px;
    border-radius: 20px;
    box-shadow: 0 2px 12px rgba(44, 36, 32, 0.08);
    animation: fadeDown 0.6s ease 0.3s both;
  }

  .map-label span {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 0.8rem;
    color: var(--bark-light);
  }

  @keyframes fadeDown {
    from { opacity: 0; transform: translateY(-8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 768px) {
    .app {
      flex-direction: column;
    }
  }
</style>
