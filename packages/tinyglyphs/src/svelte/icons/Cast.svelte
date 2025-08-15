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
  <path d="M1 5.5V5C1 3.34315 2.34315 2 4 2H12C13.6569 2 15 3.34315 15 5V11C15 12.6569 13.6569 14 12 14H9.5M7 14C7 13.2121 6.84481 12.4319 6.54328 11.7039C6.24175 10.9759 5.79979 10.3145 5.24264 9.75736C4.68549 9.20021 4.02405 8.75825 3.2961 8.45672C2.56815 8.15519 1.78793 8 1 8M4 14C4 13.606 3.9224 13.2159 3.77164 12.8519C3.62087 12.488 3.3999 12.1573 3.12132 11.8787C2.84274 11.6001 2.51203 11.3791 2.14805 11.2284C1.78407 11.0776 1.39397 11 1 11M1 14H1.01" stroke-linecap="round"/>
</svg>