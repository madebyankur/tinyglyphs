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
  <path d="M8 7.25V9.25M8 12H8.01M1.17647 12.7941L6.67647 2.48162C7.24117 1.42279 8.75882 1.42279 9.32353 2.48162L14.8235 12.7941C15.3564 13.7933 14.6324 15 13.5 15H2.5C1.36762 15 0.643582 13.7933 1.17647 12.7941Z" stroke-linecap="round" stroke-linejoin="round"/>
</svg>