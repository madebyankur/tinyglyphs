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
  <path d="M6 6H3.75C2.50736 6 1.5 4.99264 1.5 3.75C1.5 2.50736 2.50736 1.5 3.75 1.5C4.99264 1.5 6 2.50736 6 3.75V6ZM6 6V10M6 6H10M6 10V12.25C6 13.4926 4.99264 14.5 3.75 14.5C2.50736 14.5 1.5 13.4926 1.5 12.25C1.5 11.0074 2.50736 10 3.75 10H6ZM6 10H10M10 10H12.25C13.4926 10 14.5 11.0074 14.5 12.25C14.5 13.4926 13.4926 14.5 12.25 14.5C11.0074 14.5 10 13.4926 10 12.25V10ZM10 10V6M10 6V3.75C10 2.50736 11.0074 1.5 12.25 1.5C13.4926 1.5 14.5 2.50736 14.5 3.75C14.5 4.99264 13.4926 6 12.25 6H10Z" stroke-linecap="round"/>
</svg>