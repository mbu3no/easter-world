<script lang="ts">
  import "../app.css";

  let { children } = $props();
</script>

<svelte:head>
  <title>Easter World — Páscoa ao Redor do Mundo</title>
  <meta name="description" content="Descubra como a Páscoa é celebrada em diferentes países ao redor do mundo." />
</svelte:head>

{@render children()}
