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
  <path d="M1 5.5V11C1 12.6569 2.34315 14 4 14H12C13.6569 14 15 12.6569 15 11V5.5M1 5.5V5C1 3.34315 2.34315 2 4 2H12C13.6569 2 15 3.34315 15 5V5.5M1 5.5L6.65836 8.32918C7.50294 8.75147 8.49706 8.75147 9.34164 8.32918L15 5.5" stroke-linejoin="round"/>
</svg>