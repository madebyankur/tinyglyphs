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
  <path d="M3 7C3 9.76142 5.23858 12 8 12C10.7614 12 13 9.76142 13 7M6 15H10M8 9C6.89543 9 6 8.10457 6 7V3C6 1.89543 6.89543 1 8 1C9.10457 1 10 1.89543 10 3V7C10 8.10457 9.10457 9 8 9Z" stroke-linecap="round" stroke-linejoin="round"/>
</svg>