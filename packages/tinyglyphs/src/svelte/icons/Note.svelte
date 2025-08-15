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
  <path d="M9 15H4C2.34315 15 1 13.6569 1 12V4C1 2.34315 2.34315 1 4 1H12C13.6569 1 15 2.34315 15 4V9M9 15V10.5C9 9.67157 9.67157 9 10.5 9H15M9 15L15 9" stroke-linecap="round" stroke-linejoin="round"/>
</svg>