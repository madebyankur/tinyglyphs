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
  <path d="M11.5858 10.5H4.41421C3.5233 10.5 3.07713 9.42284 3.7071 8.79288L6.93933 5.56065C7.52512 4.97486 8.47487 4.97486 9.06065 5.56065L12.2929 8.79288C12.9228 9.42285 12.4767 10.5 11.5858 10.5Z"/>
</svg>