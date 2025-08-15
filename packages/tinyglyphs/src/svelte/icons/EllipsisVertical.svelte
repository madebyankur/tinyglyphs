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
  <path d="M7.5 8.25C7.5 7.83579 7.83579 7.5 8.25 7.5C8.66421 7.5 9 7.83579 9 8.25C9 8.66421 8.66421 9 8.25 9C7.83579 9 7.5 8.66421 7.5 8.25Z"/>
<path d="M7.5 3.25C7.5 2.83579 7.83579 2.5 8.25 2.5C8.66421 2.5 9 2.83579 9 3.25C9 3.66421 8.66421 4 8.25 4C7.83579 4 7.5 3.66421 7.5 3.25Z"/>
<path d="M7.5 13.25C7.5 12.8358 7.83579 12.5 8.25 12.5C8.66421 12.5 9 12.8358 9 13.25C9 13.6642 8.66421 14 8.25 14C7.83579 14 7.5 13.6642 7.5 13.25Z"/>
</svg>