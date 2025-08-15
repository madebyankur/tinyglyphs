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
  <path d="M2 2V14H10.75C12.5449 14 14 12.5449 14 10.75C14 8.95507 12.5449 7.5 10.75 7.5H2H9.75C11.2688 7.5 12.5 6.26878 12.5 4.75C12.5 3.23122 11.2688 2 9.75 2H2Z" stroke-linecap="round" stroke-linejoin="round"/>
</svg>