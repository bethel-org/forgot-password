export interface InformationTooltipProps {
  /**
   * The text content to display in the tooltip
   */
  label: string;

  /**
   * Size of the information icon
   * @default "md"
   */
  size?: "sm" | "md" | "lg";

  /**
   * Position of the tooltip relative to the icon
   * @default "top"
   */
  position?: "top" | "bottom" | "left" | "right";

  /**
   * Whether the tooltip is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Additional styles
   */
  style?: React.CSSProperties;
}

export interface StyledTooltipContainerProps {
  $size: InformationTooltipProps["size"];
  $disabled: boolean;
}

export interface StyledTooltipProps {
  $position: InformationTooltipProps["position"];
  $size: InformationTooltipProps["size"];
}
