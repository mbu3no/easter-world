<script lang="ts">
  import type { Country } from "$lib/data/countries";

  let {
    country = null,
    onClose = () => {},
  }: {
    country: Country | null;
    onClose: () => void;
  } = $props();
</script>

{#if country}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="overlay" onclick={onClose} onkeydown={(e) => e.key === "Escape" && onClose()} role="button" tabindex="-1">
    <!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <article class="card" onclick={(e) => e.stopPropagation()} onkeydown={() => {}} role="dialog" aria-label={country.name}>
      <button class="close" onclick={onClose} aria-label="Fechar">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
      </button>

      <div class="photo-wrapper">
        <img src={country.photo} alt="Páscoa - {country.name}" class="photo" loading="lazy" />
        <div class="photo-overlay">
          <span class="photo-emoji">{country.image}</span>
        </div>
      </div>

      <header>
        <div>
          <h2>{country.emoji} {country.name}</h2>
          <p class="local-name">{country.nameLocal}</p>
        </div>
      </header>

      <section class="tradition">
        <h3>Tradição</h3>
        <p>{country.tradition}</p>
      </section>

      <section class="fun-fact">
        <h3>Curiosidade</h3>
        <p>{country.funFact}</p>
      </section>
    </article>
  </div>
{/if}

<style>
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(44, 36, 32, 0.45);
    backdrop-filter: blur(6px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1.5rem;
    animation: fadeIn 0.25s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(24px) scale(0.97); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  .card {
    background: var(--cream);
    border: 1px solid var(--cream-dark);
    border-radius: 16px;
    padding: 0;
    max-width: 460px;
    width: 100%;
    position: relative;
    box-shadow:
      0 24px 80px rgba(44, 36, 32, 0.25),
      0 0 0 1px rgba(193, 127, 89, 0.08);
    animation: slideUp 0.35s ease;
    overflow: hidden;
  }

  .photo-wrapper {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
  }

  .photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .photo-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(44, 36, 32, 0.5) 0%, transparent 50%);
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 12px 16px;
  }

  .photo-emoji {
    font-size: 2.2rem;
    filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.4));
  }

  .close {
    position: absolute;
    top: 12px;
    right: 12px;
    background: rgba(250, 246, 240, 0.85);
    backdrop-filter: blur(4px);
    border: none;
    color: var(--ink);
    cursor: pointer;
    transition: all 0.2s;
    padding: 6px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .close:hover {
    background: var(--cream);
    transform: scale(1.05);
  }

  header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.25rem;
    padding: 1.25rem 1.75rem 1rem;
    border-bottom: 1px solid var(--cream-dark);
  }

  h2 {
    margin: 0;
    font-family: var(--font-display);
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--ink);
  }

  .local-name {
    margin: 3px 0 0;
    color: var(--bark-light);
    font-size: 0.85rem;
    font-family: var(--font-display);
    font-style: italic;
  }

  .tradition {
    padding: 0 1.75rem;
    margin-bottom: 1.25rem;
  }

  h3 {
    color: var(--terracotta);
    font-family: var(--font-body);
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0 0 0.5rem;
  }

  p {
    color: var(--ink-soft);
    line-height: 1.65;
    margin: 0;
    font-size: 0.92rem;
  }

  .fun-fact {
    background: rgba(201, 168, 76, 0.08);
    border-left: 3px solid var(--gold);
    padding: 1rem 1.25rem;
    margin: 0 1.75rem 1.5rem;
    border-radius: 0 10px 10px 0;
  }

  .fun-fact h3 {
    color: var(--gold);
  }
</style>
