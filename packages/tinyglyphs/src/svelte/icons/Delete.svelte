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
  <path d="M7 6L9 8M9 8L11 10M9 8L11 6M9 8L7 10M1 8L4.1094 3.3359C4.6658 2.5013 5.60249 2 6.60555 2H15V14H6.60555C5.60249 14 4.6658 13.4987 4.1094 12.6641L1 8Z" stroke-linecap="round" stroke-linejoin="round"/>
</svg>