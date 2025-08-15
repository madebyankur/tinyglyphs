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
  <path d="M9 11L12.9393 7.06066C13.5251 6.47487 13.5251 5.52513 12.9393 4.93934L11 3C10.4477 2.44772 9.55228 2.44772 9 3M8 15H13.5C14.3284 15 15 14.3284 15 13.5V10C15 9.44772 14.5523 9 14 9M4 12H4.01M4 15C2.34315 15 1 13.6569 1 12V2.5C1 1.67157 1.67157 1 2.5 1H5.5C6.32843 1 7 1.67157 7 2.5V12C7 13.6569 5.65685 15 4 15Z" stroke-linecap="round" stroke-linejoin="round"/>
</svg>