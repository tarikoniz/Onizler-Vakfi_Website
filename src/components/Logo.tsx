import Image from "next/image";

export default function Logo({
  size = "default",
  variant = "light",
}: {
  size?: "small" | "default" | "large";
  variant?: "light" | "dark";
}) {
  const heights = {
    small: 120,
    default: 160,
    large: 220,
  };

  const h = heights[size];

  return (
    <Image
      src="/logo.png"
      alt="Önizler Vakfı"
      width={h}
      height={h}
      className={`object-contain w-auto ${variant === "light" ? "brightness-0 invert" : ""}`}
      style={{ height: `${h}px`, width: "auto" }}
      priority
    />
  );
}
