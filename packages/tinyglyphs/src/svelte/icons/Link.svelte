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
  <path d="M9.41421 3.75736L8 2.34314C6.4379 0.781046 3.90524 0.781045 2.34314 2.34314C0.781046 3.90524 0.781045 6.4379 2.34314 8L3.75736 9.41421M12.2426 6.58578L13.6569 8C15.2189 9.56209 15.2189 12.0948 13.6569 13.6569C12.0948 15.2189 9.56209 15.2189 8 13.6569L6.58578 12.2426M5.17157 5.17157L10.8284 10.8284" stroke-linecap="round" stroke-linejoin="round"/>
</svg>