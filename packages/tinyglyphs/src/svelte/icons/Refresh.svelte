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
  <path d="M2 6L2.26951 5.46099C3.33007 3.33987 5.49802 2 7.8695 2C9.8402 2 11.6959 2.92784 12.8783 4.5044L14 6M14 6H12M14 6V3.5M14 10L13.7305 10.539C12.6699 12.6601 10.502 14 8.1305 14C6.1598 14 4.30412 13.0722 3.1217 11.4956L2 10M2 10H4M2 10L2 12.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>