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
  <path d="M5 6H11M6 9H9M15 7.25C15 10.7018 11.866 13.5 8 13.5L4 15V12.3797C2.18652 11.2503 1 9.37388 1 7.25C1 3.79822 4.13401 1 8 1C11.866 1 15 3.79822 15 7.25Z" stroke-linecap="round" stroke-linejoin="round"/>
</svg>