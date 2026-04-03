<script lang="ts">
  import { onMount, onDestroy } from "svelte";
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

  let mapContainer: HTMLDivElement;
  let map: L.Map;
  let markers: L.Marker[] = [];

  onMount(async () => {
    const L = await import("leaflet");

    map = L.map(mapContainer, {
      center: [20, 0],
      zoom: 2,
      minZoom: 2,
      maxZoom: 6,
      worldCopyJump: true,
      zoomControl: false,
    });

    L.control.zoom({ position: "bottomright" }).addTo(map);

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }
    ).addTo(map);

    countries.forEach((country, i) => {
      const icon = L.divIcon({
        html: `<span class="marker-emoji">${country.image}</span>`,
        className: "custom-marker",
        iconSize: [44, 44],
        iconAnchor: [22, 22],
      });

      const marker = L.marker([country.lat, country.lng], { icon }).addTo(map);

      marker.on("click", () => {
        onSelect(country);
      });

      marker.bindTooltip(`${country.emoji} ${country.name}`, {
        direction: "top",
        offset: [0, -18],
        className: "custom-tooltip",
      });

      markers.push(marker);
    });
  });

  $effect(() => {
    if (map && selectedCountry) {
      map.flyTo([selectedCountry.lat, selectedCountry.lng], 4, {
        duration: 1.5,
      });
    }
  });

  onDestroy(() => {
    if (map) map.remove();
  });
</script>

<div class="map-wrapper">
  <div bind:this={mapContainer} class="map"></div>
</div>

<style>
  .map-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    background: var(--cream-dark);
  }

  .map {
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  :global(.custom-marker) {
    background: none !important;
    border: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :global(.marker-emoji) {
    font-size: 30px;
    cursor: pointer;
    filter: drop-shadow(0 3px 8px rgba(44, 36, 32, 0.3));
    transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  :global(.marker-emoji:hover) {
    transform: scale(1.35) translateY(-3px);
  }

  :global(.custom-tooltip) {
    background: var(--cream) !important;
    color: var(--ink) !important;
    border: 1px solid var(--cream-dark) !important;
    border-radius: 8px !important;
    padding: 5px 12px !important;
    font-family: var(--font-body) !important;
    font-size: 13px !important;
    font-weight: 600 !important;
    box-shadow: 0 4px 16px rgba(44, 36, 32, 0.12) !important;
  }

  :global(.custom-tooltip::before) {
    border-top-color: var(--cream-dark) !important;
  }

  :global(.leaflet-control-zoom) {
    border: 1px solid var(--cream-dark) !important;
    border-radius: 8px !important;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(44, 36, 32, 0.1) !important;
  }

  :global(.leaflet-control-zoom a) {
    background: var(--cream) !important;
    color: var(--ink) !important;
    border-color: var(--cream-dark) !important;
    font-family: var(--font-body) !important;
    width: 32px !important;
    height: 32px !important;
    line-height: 32px !important;
    font-size: 16px !important;
  }

  :global(.leaflet-control-zoom a:hover) {
    background: var(--cream-dark) !important;
  }
</style>
