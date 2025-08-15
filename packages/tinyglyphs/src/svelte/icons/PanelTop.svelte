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
  <g clip-path="url(#clip0_261_2743)">
<path d="M4 6H12M6 1H4C2.34315 1 1 2.34315 1 4V12C1 13.6569 2.34315 15 4 15H6H12C13.6569 15 15 13.6569 15 12V4C15 2.34315 13.6569 1 12 1H6Z" stroke-width="1.5" stroke-linecap="round"/>
</g>
<defs>
<clipPath id="clip0_261_2743">
<rect width="16" height="16"/>
</clipPath>
</defs>
</svg>