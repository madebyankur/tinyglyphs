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
  <g clip-path="url(#clip0_261_2648)">
<path d="M5 5L7 7L5 9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 11H11" stroke-width="1.5" stroke-linecap="round"/>
<rect x="1" y="1" width="14" height="14" rx="3" stroke-width="1.5"/>
</g>
<defs>
<clipPath id="clip0_261_2648">
<rect width="16" height="16"/>
</clipPath>
</defs>
</svg>