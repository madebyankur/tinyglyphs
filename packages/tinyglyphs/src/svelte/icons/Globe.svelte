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
  <path d="M1.49999 9L3.30277 9.31814C7.40072 10.0413 11.5525 8.36537 14 5M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15ZM5.93414 2.0761L5.21837 4.82346C4.46916 7.69918 5.37571 10.7532 7.57257 12.7544L9.18036 14.219C9.4545 14.4688 9.89556 14.3436 9.99772 13.9872L10.6911 11.5677C11.4979 8.75216 10.7016 5.72079 8.61531 3.66519L6.76891 1.84599C6.49481 1.57593 6.03115 1.70374 5.93414 2.0761Z" stroke-linecap="round" stroke-linejoin="round"/>
</svg>