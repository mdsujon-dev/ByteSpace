import Image, { type ImageProps } from "next/image";

type AppImageProps = ImageProps & {
  rounded?: boolean;
  fit?: "cover" | "contain";
};

export function AppImage({
  className,
  rounded = false,
  fit = "cover",
  alt,
  ...props
}: AppImageProps) {
  return (
    <Image
      alt={alt}
      className={`${fit === "cover" ? "object-cover" : "object-contain"} ${rounded ? "rounded-2xl" : ""} ${className ?? ""}`}
      {...props}
    />
  );
}
