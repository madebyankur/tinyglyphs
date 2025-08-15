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
  <path d="M2.7 12H13.3C13.9627 12 14.5 11.4627 14.5 10.8C14.5 10.2807 14.3316 9.77543 14.02 9.36L13.3231 8.43077C13.1134 8.15115 13 7.81106 13 7.46154V6C13 3.23858 10.7614 1 8 1C5.23858 1 3 3.23858 3 6V7.46154C3 7.81106 2.88664 8.15115 2.67692 8.43077L1.98 9.36C1.66843 9.77543 1.5 10.2807 1.5 10.8C1.5 11.4627 2.03726 12 2.7 12Z"/>
<path d="M6.00002 12.3333C6.00002 12.1492 6.14926 12 6.33335 12H9.66669C9.85078 12 10 12.1492 10 12.3333V13C10 14.1046 9.10459 15 8.00002 15C6.89545 15 6.00002 14.1046 6.00002 13V12.3333Z"/>
</svg>