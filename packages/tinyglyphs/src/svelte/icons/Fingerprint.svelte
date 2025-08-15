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
  <path d="M2.25 10.2074C3.75 8.70736 2.75 6.70736 3.75 4.70736M5.25 3.20735C6.25 2.20736 8.75 1.20736 11.25 2.95736C14.25 5.20736 13.25 10.7074 12.25 13.2074M3.75 12.2074C4.75 11.2074 5.75 10.2074 5.75 7.20736C5.75 3.70736 11.25 3.20736 10.75 8.20736M8.25 7.20736C8.25 9.20736 8.25 11.7074 5.75 13.7074M10.5 10.2074C10.25 12.2074 9.75 12.9574 8.75 14.2074" stroke-linecap="round" stroke-linejoin="round"/>
</svg>