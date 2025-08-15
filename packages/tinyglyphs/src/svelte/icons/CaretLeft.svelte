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
  <path d="M5.56068 9.06065L8.79291 12.2929C9.42288 12.9228 10.5 12.4767 10.5 11.5858V4.41421C10.5 3.5233 9.42287 3.07713 8.79291 3.7071L5.56068 6.93933C4.97489 7.52512 4.97489 8.47487 5.56068 9.06065Z"/>
</svg>