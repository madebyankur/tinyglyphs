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
  <path d="M14 8L9.00002 13C7.34317 14.6569 4.65688 14.6569 3.00003 13C1.34317 11.3431 1.34317 8.65685 3.00003 7L8.00003 2C9.1046 0.895426 10.8955 0.895428 12 2C13.1046 3.10457 13.1046 4.89543 12 6L7.00003 11C6.44774 11.5523 5.55231 11.5523 5.00003 11C4.44774 10.4477 4.44774 9.55228 5.00003 9L9.00003 5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>