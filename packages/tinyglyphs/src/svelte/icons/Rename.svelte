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
  <path d="M8.5 5H2.5C1.67157 5 1 5.67157 1 6.5V10.5C1 11.3284 1.67157 12 2.5 12H8.5M13.5 12C14.3284 12 15 11.3284 15 10.5V6.5C15 5.67157 14.3284 5 13.5 5M11 3V14M11 3C10.6936 2.38713 10.0672 2 9.38197 2H9M11 3C11.3064 2.38713 11.9328 2 12.618 2H13M11 14C11.3064 14.6129 11.9328 15 12.618 15H13M11 14C10.6936 14.6129 10.0672 15 9.38197 15H9M4.5 9H7.5C7.77614 9 8 8.77614 8 8.5C8 8.22386 7.77614 8 7.5 8H4.5C4.22386 8 4 8.22386 4 8.5C4 8.77614 4.22386 9 4.5 9Z" stroke-linecap="round"/>
</svg>