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
  <path d="M5.75 1H4C2.34315 1 1 2.34315 1 4V5.75M5.75 1H12C13.6569 1 15 2.34315 15 4V5.75M5.75 1V15M5.75 15H12C13.6569 15 15 13.6569 15 12V5.75M5.75 15H4C2.34315 15 1 13.6569 1 12V5.75M1 5.75H15M10.25 1V15M1 10.25H15" stroke-linejoin="round"/>
</svg>