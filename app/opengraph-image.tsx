import { ImageResponse } from "next/og";
export const alt =
  "Ahmad Kurniawan, Full-Stack Developer in Lampung, Indonesia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 70,
        background: "#080808",
        color: "#f5f5f5",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 24,
          color: "#aaa",
        }}
      >
        <span>ahkurdev.</span>
        <span>Lampung, Indonesia</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 112,
          letterSpacing: -6,
          lineHeight: 1,
        }}
      >
        <span>AHMAD</span>
        <span>KURNIAWAN</span>
      </div>
      <div
        style={{
          display: "flex",
          borderTop: "1px solid #444",
          paddingTop: 25,
          fontSize: 24,
        }}
      >
        Full-Stack Developer · Web / Mobile / Desktop
      </div>
    </div>,
    size,
  );
}
