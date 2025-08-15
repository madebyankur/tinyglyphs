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
  <path d="M9.49992 2H10.6458C11.7821 2 12.8209 2.64201 13.3291 3.65836L13.4999 4M5.74998 7.5V10.5M7.24998 9H4.24998M1 11V5C1 3.34315 2.34315 2 4 2H6.07295C6.64111 2 7.1605 2.321 7.41459 2.82918L8.58541 5.17082C8.8395 5.679 9.35889 6 9.92705 6H13.5C14.3284 6 15 6.67157 15 7.5V11C15 12.6569 13.6569 14 12 14H4C2.34315 14 1 12.6569 1 11Z" stroke-linecap="round"/>
</svg>