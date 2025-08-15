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
  <path d="M1 8C1 5.23858 3.23858 3 6 3H10C12.7614 3 15 5.23858 15 8C15 10.7614 12.7614 13 10 13H6C3.23858 13 1 10.7614 1 8Z"/>
<path d="M4.5 8C4.5 7.17157 5.17157 6.5 6 6.5C6.82843 6.5 7.5 7.17157 7.5 8C7.5 8.82843 6.82843 9.5 6 9.5C5.17157 9.5 4.5 8.82843 4.5 8Z"/>
</svg>