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
<path d="M2 8C2 9.65685 4.68629 11 8 11C8.34071 11 8.67479 10.9858 9 10.9585" stroke-width="1.5" stroke-linecap="round"/>
<path d="M2 12C2 13.6569 4.68629 15 8 15C8.70127 15 9.37444 14.9398 10 14.8293" stroke-width="1.5" stroke-linecap="round"/>
<path d="M2 4V12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 4V8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 10.5V14.5" stroke-width="1.5" stroke-linecap="round"/>
<path d="M15 12.5L11 12.5" stroke-width="1.5" stroke-linecap="round"/>
</svg>