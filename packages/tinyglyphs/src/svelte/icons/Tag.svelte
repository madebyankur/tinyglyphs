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
  <path d="M5.37869 2.62132L2.62133 5.37868C1.44975 6.55025 1.44975 8.44975 2.62132 9.62132L6.62133 13.6213C7.18393 14.1839 7.947 14.5 8.74265 14.5H13C13.8284 14.5 14.5 13.8284 14.5 13V8.74264C14.5 7.94699 14.1839 7.18393 13.6213 6.62132L9.62133 2.62132C8.44975 1.44975 6.55026 1.44975 5.37869 2.62132Z"/>
<path d="M5.5 7C5.5 6.17157 6.17158 5.5 7 5.5C7.82843 5.5 8.5 6.17157 8.5 7C8.5 7.82843 7.82843 8.5 7 8.5C6.17158 8.5 5.5 7.82843 5.5 7Z"/>
</svg>