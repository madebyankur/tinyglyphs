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
  <path d="M8 1H4C2.34315 1 1 2.34315 1 4V8M8 1H12C13.6569 1 15 2.34315 15 4V8M8 1V15M8 15H12C13.6569 15 15 13.6569 15 12V8M8 15H4C2.34315 15 1 13.6569 1 12V8M1 8H15" stroke-linejoin="round"/>
</svg>