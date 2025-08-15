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
  <path d="M8 4.99998V15M8 4.99998L8.92308 4.38459C9.91111 3.7259 9.91111 2.27405 8.92308 1.61536C8.36411 1.24271 7.63589 1.24271 7.07692 1.61536C6.08889 2.27405 6.08889 3.7259 7.07692 4.38459L8 4.99998ZM8 15L5.12418 14.1783C2.68303 13.4808 1 11.2496 1 8.71077C1 8.31821 1.31823 7.99998 1.71079 7.99998H2M8 15L10.8758 14.1783C13.317 13.4808 15 11.2496 15 8.71077C15 8.31821 14.6818 7.99998 14.2892 7.99998H14" stroke-linecap="round" stroke-linejoin="round"/>
</svg>