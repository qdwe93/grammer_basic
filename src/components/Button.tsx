/**
 * 버튼 컴포넌트 — design.md Buttons / docs/04 §4
 *
 * - Button: variant "primary" | "secondary" | "secondaryOnDark"
 *   (primary는 검정 CTA, 뷰포트당 1개. disabled 상태 포함)
 * - IconButton: button-icon-circular (40×40 원형)
 */
import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "secondaryOnDark";

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  secondaryOnDark: styles.secondaryOnDark,
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({
  variant = "primary",
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  const cls = [styles.base, VARIANT_CLASS[variant], className]
    .filter(Boolean)
    .join(" ");
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={cls} {...rest}>
      {children}
    </button>
  );
}

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 접근성 라벨 (아이콘 버튼은 텍스트가 없으므로 필수) */
  "aria-label": string;
  children: ReactNode; // 아이콘 (이모지/SVG)
}

export function IconButton({
  className,
  children,
  type = "button",
  ...rest
}: IconButtonProps) {
  const cls = [styles.iconCircular, className].filter(Boolean).join(" ");
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={cls} {...rest}>
      {children}
    </button>
  );
}
