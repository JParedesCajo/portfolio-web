"use client";

// Genera varias capas de humo que se expanden y se desplazan continuamente.
export default function BackgroundSmoke() {
  return (
    <div className="smoke-scene" aria-hidden="true">
      <div className="smoke-haze smoke-haze-one" />
      <div className="smoke-haze smoke-haze-two" />
      <div className="smoke-haze smoke-haze-three" />
      <div className="smoke-wisp smoke-wisp-one" />
      <div className="smoke-wisp smoke-wisp-two" />
      <div className="smoke-wisp smoke-wisp-three" />
      <div className="smoke-sheen" />
    </div>
  );
}
