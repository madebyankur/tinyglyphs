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
  <path d="M9.00003 3.48155C4.87762 2.93117 -1.13821 6.88285 3.00003 10.662M13.6397 6C17.0068 9.94682 9.88064 13.1203 6.50003 12.4345M9.93702 8.5C9.75613 9.2028 9.20283 9.7561 8.50003 9.93699M7.50003 6.06301C6.79723 6.2439 6.24393 6.7972 6.06304 7.5M14 2L2.00003 14" stroke-linecap="round"/>
</svg>