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
  <path d="M15 7V8.5M4 12H10C11.6569 12 13 10.6569 13 9V7C13 5.34315 11.6569 4 10 4H4C2.34315 4 1 5.34315 1 7V9C1 10.6569 2.34315 12 4 12Z" stroke-linecap="round" stroke-linejoin="round"/>
</svg>