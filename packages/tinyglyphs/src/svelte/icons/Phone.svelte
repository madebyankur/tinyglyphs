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
  <path d="M7 4H9M6 1H10C11.6569 1 13 2.34315 13 4V12C13 13.6569 11.6569 15 10 15H6C4.34315 15 3 13.6569 3 12V4C3 2.34315 4.34315 1 6 1Z" stroke-linecap="round" stroke-linejoin="round"/>
</svg>