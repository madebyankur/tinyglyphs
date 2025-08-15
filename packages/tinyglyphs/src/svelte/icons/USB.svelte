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
  <path d="M9.00001 4L10.9394 2.06066C11.5251 1.47488 12.4749 1.47488 13.0607 2.06066L13.9394 2.93934C14.5251 3.52513 14.5251 4.47488 13.9394 5.06066L12 7M9.00001 4L12 7M9.00001 4C8.44773 3.44772 7.5523 3.44772 7.00001 4L2.50001 8.5C1.1193 9.88071 1.1193 12.1193 2.50001 13.5C3.88072 14.8807 6.1193 14.8807 7.50001 13.5L12 9C12.5523 8.44772 12.5523 7.55229 12 7M5.00001 11H5.01001" stroke-linecap="round" stroke-linejoin="round"/>
</svg>