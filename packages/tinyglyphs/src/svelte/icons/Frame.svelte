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
  <path d="M5 1H4C2.34315 1 1 2.34315 1 4V5M15 11V12C15 13.6569 13.6569 15 12 15H11M11 1H12C13.6569 1 15 2.34315 15 4V5M1 11V12C1 13.6569 2.34315 15 4 15H5" stroke-linecap="round"/>
</svg>