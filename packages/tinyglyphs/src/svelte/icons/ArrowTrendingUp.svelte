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
  <path d="M13 2L9 3M13 2L14 6M13 2L9.56413 9.2535C9.0808 10.2739 7.68596 10.4146 7.00853 9.51137L6.90809 9.37745C6.2509 8.50121 4.90666 8.60192 4.38738 9.5663L2 14" stroke-linecap="round" stroke-linejoin="round"/>
</svg>