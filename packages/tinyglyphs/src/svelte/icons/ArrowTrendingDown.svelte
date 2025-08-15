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
  <path d="M13 14L9 13M13 14L14 10M13 14L9.56413 6.7465C9.0808 5.72613 7.68596 5.58538 7.00853 6.48863L6.90809 6.62255C6.25091 7.49879 4.90666 7.39808 4.38738 6.4337L2 2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>