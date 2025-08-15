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
  <ellipse cx="8" cy="4" rx="6" ry="3" stroke-width="1.5"/>
<path d="M2 8C2 9.30622 3.66962 10.4175 6 10.8293" stroke-width="1.5" stroke-linecap="round"/>
<path d="M2 12C2 13.4865 4.16229 14.7205 7 14.9585" stroke-width="1.5" stroke-linecap="round"/>
<path d="M2 4V12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 4V7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="9" y="9" width="6" height="6" rx="3" stroke-width="1.5"/>
<path d="M12 11V12.5L13 13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>