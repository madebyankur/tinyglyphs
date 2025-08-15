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
  <path d="M4 4L8.5 7.97059M8.5 7.97059L8.53333 8M8.5 7.97059V8.02941M8.5 7.97059V1L12.5 4.5L8.53333 8M8.53333 8L12.5 11.5L8.5 15V8.02941M8.53333 8L8.5 8.02941M8.5 8.02941L4 12" stroke-linecap="round" stroke-linejoin="round"/>
</svg>