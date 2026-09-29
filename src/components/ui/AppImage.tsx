import Image, { type ImageProps } from "next/image";

type AppImageProps = ImageProps & {
  rounded?: boolean;
};

export function AppImage({ className, rounded = false, alt, ...props }: AppImageProps) {
  return (
    <Image
      alt={alt}
      className={`object-cover ${rounded ? "rounded-2xl" : ""} ${className ?? ""}`}
      {...props}
    />
  );
}
