/* eslint-disable @next/next/no-img-element */

export default function Logo({
  size = "default",
  variant = "light",
}: {
  size?: "small" | "default" | "large";
  variant?: "light" | "dark";
}) {
  const heights = {
    small: 96,
    default: 132,
    large: 184,
  };

  const h = heights[size];
  // dark = teal mark (for light backgrounds), light = white mark (for dark backgrounds)
  const src = variant === "light" ? "/logo-white.svg" : "/logo-teal.svg";

  return (
    <img
      src={src}
      alt="Önizler Vakfı"
      style={{ height: `${h}px`, width: "auto" }}
      className="object-contain select-none"
      draggable={false}
    />
  );
}
