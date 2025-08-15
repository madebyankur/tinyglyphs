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
  <path d="M8.5 3.5L12.5 7.5M1.43934 10.3607L9.93015 1.86985C10.4871 1.31289 11.2425 1 12.0302 1C13.6704 1 15 2.32965 15 3.96985C15 4.7575 14.6871 5.51289 14.1302 6.06985L5.63934 14.5607C5.35804 14.842 4.9765 15 4.57868 15H1V11.4213C1 11.0235 1.15804 10.642 1.43934 10.3607Z" stroke-linecap="round" stroke-linejoin="round"/>
</svg>