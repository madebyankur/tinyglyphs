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
  <path d="M11 10V7.5C11 6.67157 10.3284 6 9.5 6H4C2.34315 6 1 7.34315 1 9V11C1 12.6569 2.34315 14 4 14H9.5C10.3284 14 11 13.3284 11 12.5V10ZM11 10L14.1464 6.85355C14.4614 6.53857 15 6.76165 15 7.20711V12.7929C15 13.2383 14.4614 13.4614 14.1464 13.1464L11 10ZM3.63831 3.5C3.22409 3.5 2.88831 3.16421 2.88831 2.75C2.88831 2.33579 3.22409 2 3.63831 2C4.05252 2 4.38831 2.33579 4.38831 2.75C4.38831 3.16421 4.05252 3.5 3.63831 3.5ZM7.63831 3.5C7.22409 3.5 6.88831 3.16421 6.88831 2.75C6.88831 2.33579 7.22409 2 7.63831 2C8.05252 2 8.38831 2.33579 8.38831 2.75C8.38831 3.16421 8.05252 3.5 7.63831 3.5Z"/>
</svg>