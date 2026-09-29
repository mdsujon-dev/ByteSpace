import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

export function Container({ as: Tag = "div", children, className }: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full max-w-[1199px] px-6 ${className ?? ""}`}>
      {children}
    </Tag>
  );
}
