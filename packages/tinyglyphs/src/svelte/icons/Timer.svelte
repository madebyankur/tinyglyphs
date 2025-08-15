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
  <path d="M7 1H9M8 6V8M8 15C4.68629 15 2 12.3137 2 9C2 5.68629 4.68629 3 8 3C11.3137 3 14 5.68629 14 9C14 12.3137 11.3137 15 8 15Z" stroke-linecap="round" stroke-linejoin="round"/>
</svg>