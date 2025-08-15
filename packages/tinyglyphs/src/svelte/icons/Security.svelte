<script lang="ts">
  export let size: number | string = 16;
  export let color: string = 'currentColor';
  export let strokeWidth: number | string = 1;
  export let absoluteStrokeWidth: boolean = false;

  $: actualStrokeWidth = absoluteStrokeWidth
    ? Number(strokeWidth) * (16 / Number(size))
    : strokeWidth;
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 16 16"
  fill="none"
  stroke={color}
  stroke-width={actualStrokeWidth}
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon {$$props.class || ''}"
  {...$$restProps}
>
  <path d="M2.41266 7.71394L2.02136 4.19219C2.00853 4.07671 2.06904 3.96548 2.17296 3.91352L7.32918 1.33541C7.75147 1.12427 8.24853 1.12427 8.67082 1.33541L13.827 3.91352C13.931 3.96548 13.9915 4.07671 13.9786 4.19219L13.5873 7.71394C13.2258 10.9682 11.102 13.7592 8.06182 14.9753C8.02214 14.9911 7.97787 14.9911 7.93819 14.9753C4.89805 13.7592 2.77425 10.9683 2.41266 7.71394Z" stroke-linejoin="round"/>
<path d="M8 4.5L8.44129 7.14772C8.47641 7.35845 8.64155 7.52359 8.85229 7.55871L11.5 8L8.85229 8.44129C8.64155 8.47641 8.47641 8.64155 8.44129 8.85228L8 11.5L7.55872 8.85228C7.52359 8.64155 7.35846 8.47641 7.14772 8.44129L4.5 8L7.14772 7.55871C7.35846 7.52359 7.52359 7.35845 7.55872 7.14772L8 4.5Z" stroke-linejoin="round"/>
</svg>