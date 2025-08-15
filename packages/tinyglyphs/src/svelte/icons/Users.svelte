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
  <path d="M13 9.5C13.5901 9.81802 15.5323 11.3476 14.6198 12.146C14.1281 12.5763 13.5792 12.905 13 13.1321M11.5 3.5C12.3284 3.5 13 4.17157 13 5C13 5.82843 12.3284 6.5 11.5 6.5C10.6716 6.5 10 5.82843 10 5C10 4.17157 10.6716 3.5 11.5 3.5ZM6.00001 1.5C7.10457 1.5 8.00001 2.39543 8.00001 3.5C8.00001 4.60457 7.10457 5.5 6.00001 5.5C4.89544 5.5 4.00001 4.60457 4.00001 3.5C4.00001 2.39543 4.89544 1.5 6.00001 1.5ZM10.4967 12.8394C7.80586 14.7229 4.15704 14.7229 1.46625 12.8394C1.17748 12.6372 1.04273 12.2733 1.1347 11.933C2.47189 6.98537 9.49101 6.98536 10.8282 11.933C10.9202 12.2733 10.7854 12.6372 10.4967 12.8394Z" stroke-linecap="round" stroke-linejoin="round"/>
</svg>