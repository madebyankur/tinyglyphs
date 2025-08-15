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
  <path d="M4 4H4.01M12 12H12.01M4 7H12C13.6569 7 15 5.65685 15 4C15 2.34315 13.6569 1 12 1H4C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7ZM4 15H12C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9H4C2.34315 9 1 10.3431 1 12C1 13.6569 2.34315 15 4 15Z" stroke-linecap="round" stroke-linejoin="round"/>
</svg>