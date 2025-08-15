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
  <path d="M8 5.42857C9.42016 6.84873 9.42016 9.15127 8 10.5714M10 3.71428C12.3669 6.08122 12.3669 9.91878 10 12.2857M12 2C15.3137 5.31371 15.3137 10.6863 12 14M1 2H2C3.10457 2 4 2.89543 4 4V12C4 13.1046 3.10457 14 2 14H1" stroke-linecap="round"/>
</svg>