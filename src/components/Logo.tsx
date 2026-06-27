import Image from "next/image";

export default function Logo({
  size = "default",
  variant = "light",
}: {
  size?: "small" | "default" | "large";
  variant?: "light" | "dark";
}) {
  const dims = {
    small: 64,
    default: 96,
    large: 160,
  };

  const d = dims[size];

  return (
    <Image
      src="/logo.png"
      alt="Önizler Vakfı"
      width={d}
      height={d}
      className={`object-contain ${variant === "light" ? "brightness-0 invert" : ""}`}
      priority
    />
  );
}
