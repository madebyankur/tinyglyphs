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
  <path d="M2 13.5V15H13.5M2 13.5V2.5C2 1.67157 2.67157 1 3.5 1H14V12H3.5C2.67157 12 2 12.6716 2 13.5ZM13.5 15H14M13.5 15V12" stroke-linecap="round" stroke-linejoin="round"/>
</svg>