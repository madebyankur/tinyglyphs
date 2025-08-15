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
  <path d="M5.98077 9.25L5.5 10.5M5.98077 9.25H10.0192M5.98077 9.25L8 4L10.0192 9.25M10.0192 9.25L10.5 10.5M1.5 3L8 1L14.5 3L13 12L8 15L3 12L1.5 3Z" stroke-linecap="round" stroke-linejoin="round"/>
</svg>