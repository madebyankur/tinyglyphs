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
  <path d="M13.5308 13.2253L13.7196 13.1309C14.3896 12.7959 14.6144 11.9495 14.1989 11.3262C11.2411 6.88953 4.72175 6.88953 1.76399 11.3262C1.34846 11.9495 1.57325 12.7959 2.24327 13.1309L2.4321 13.2253C5.92549 14.972 10.0374 14.972 13.5308 13.2253Z"/>
<path d="M9.99999 3.5C9.99999 4.60457 9.10456 5.5 7.99999 5.5C6.89542 5.5 5.99999 4.60457 5.99999 3.5C5.99999 2.39543 6.89542 1.5 7.99999 1.5C9.10456 1.5 9.99999 2.39543 9.99999 3.5Z"/>
</svg>