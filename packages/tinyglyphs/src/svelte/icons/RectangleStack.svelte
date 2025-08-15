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
  <path d="M14 7L13.3419 5.02566C13.1377 4.41315 12.5645 4 11.9189 4H4.08115C3.4355 4 2.8623 4.41315 2.65813 5.02566L2.00001 7M12.5 4L11.8419 2.02566C11.6377 1.41315 11.0645 1 10.4189 1H5.58115C4.93551 1 4.3623 1.41315 4.15813 2.02566L3.50001 4M3.3242 15H12.6758C13.4323 15 14.0704 14.4367 14.1643 13.6861L14.7893 8.68605C14.9012 7.79077 14.2031 7 13.3008 7H2.6992C1.79695 7 1.09887 7.79077 1.21078 8.68605L1.83578 13.6861C1.92961 14.4367 2.56771 15 3.3242 15Z" stroke-linecap="round"/>
</svg>