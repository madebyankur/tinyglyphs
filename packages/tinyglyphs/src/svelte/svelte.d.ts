import { SvelteComponent } from "svelte";

export interface IconProps {
  class?: string;
  size?: number | string;
  strokeWidth?: number | string;
  color?: string;
  [key: string]: any;
}

declare class IconComponent extends SvelteComponent<IconProps> {}

export default IconComponent;
