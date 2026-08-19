import Image from "next/image";

export default function Logo({
  size = "default",
  variant = "light",
}: {
  size?: "small" | "default" | "large";
  variant?: "light" | "dark";
}) {
  const heights = {
    small: 72,
    default: 112,
    large: 160,
  };

  const h = heights[size];
  const src = variant === "light" ? "/logo-mark-white.png" : "/logo.png";

  return (
    <Image
      src={src}
      alt="Önizler Vakfı"
      width={h}
      height={h}
      className="object-contain w-auto"
      style={{ height: `${h}px`, width: "auto" }}
      priority
    />
  );
}
