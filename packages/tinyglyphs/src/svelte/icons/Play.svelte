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
  <path d="M3 4.52681V11.4732C3 12.6118 4.21872 13.3352 5.21828 12.79L11.5858 9.31684C12.6281 8.74832 12.6281 7.25168 11.5858 6.68316L5.21828 3.20997C4.21872 2.66475 3 3.38822 3 4.52681Z" stroke-linejoin="round"/>
</svg>