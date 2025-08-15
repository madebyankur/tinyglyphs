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
  <path d="M1 7V11C1 12.6569 2.34315 14 4 14H12C13.6569 14 15 12.6569 15 11V7C15 5.34315 13.6569 4 12 4H11.9271C11.3589 4 10.8395 3.679 10.5854 3.17082L10.4146 2.82918C10.1605 2.321 9.64111 2 9.07295 2H6.92705C6.35889 2 5.8395 2.321 5.58541 2.82918L5.41459 3.17082C5.1605 3.679 4.64111 4 4.07295 4H4C2.34315 4 1 5.34315 1 7Z"/>
<path d="M10 8.5C10 9.60457 9.10457 10.5 8 10.5C6.89543 10.5 6 9.60457 6 8.5C6 7.39543 6.89543 6.5 8 6.5C9.10457 6.5 10 7.39543 10 8.5Z"/>
</svg>