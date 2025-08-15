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
  <path d="M10.4393 9.06065L7.20711 12.2929C6.57714 12.9228 5.5 12.4767 5.5 11.5858V4.41421C5.5 3.5233 6.57714 3.07713 7.20711 3.7071L10.4393 6.93933C11.0251 7.52512 11.0251 8.47487 10.4393 9.06065Z"/>
</svg>