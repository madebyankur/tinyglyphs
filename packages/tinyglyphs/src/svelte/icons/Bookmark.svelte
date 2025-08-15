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
  <path d="M10 1H6.00001C4.34316 1 3.00001 2.34315 3.00001 4V8.00684C3.00001 8.66782 2.9454 9.32766 2.83673 9.97965L2.17992 13.9205C2.1095 14.343 2.56832 14.6527 2.93384 14.4293L6.43566 12.2893C7.396 11.7025 8.60402 11.7025 9.56436 12.2893L13.0662 14.4293C13.4317 14.6527 13.8905 14.343 13.8201 13.9205L13.1633 9.97964C13.0546 9.32766 13 8.66782 13 8.00685V4C13 2.34315 11.6569 1 10 1Z"/>
</svg>