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
  <g clip-path="url(#clip0_59_3144)">
<path d="M8 11V5M8 5L5 8M8 5L11 8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 8C1 4.13401 4.13401 1 8 1V1C11.866 1 15 4.13401 15 8V8C15 11.866 11.866 15 8 15V15C4.13401 15 1 11.866 1 8V8Z" stroke-width="1.5"/>
</g>
<defs>
<clipPath id="clip0_59_3144">
<rect width="16" height="16"/>
</clipPath>
</defs>
</svg>