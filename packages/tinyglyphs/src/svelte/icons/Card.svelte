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
  <path d="M1 6V11C1 12.6569 2.34315 14 4 14H12C13.6569 14 15 12.6569 15 11V6M1 6V5C1 3.34315 2.34315 2 4 2H12C13.6569 2 15 3.34315 15 5V6M1 6H15M4 8.75H9M4 11.25H7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>