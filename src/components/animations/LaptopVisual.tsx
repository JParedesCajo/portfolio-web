import Image from "next/image";

// Presenta el portátil 3D delante de las órbitas luminosas.
export default function LaptopVisual() {
  return (
    <div
      className="laptop-scene"
      role="img"
      aria-label="Portátil tridimensional con código y órbitas azules"
    >
      <div className="laptop-aura" aria-hidden="true" />
      <div className="laptop-orbit laptop-orbit-back" aria-hidden="true" />

      <div className="laptop-float">
        <Image
          src="/images/laptop-3d.webp"
          alt=""
          width={762}
          height={570}
          priority
          sizes="(max-width: 1024px) 90vw, 580px"
          className="laptop-image"
        />
      </div>

      <div className="laptop-orbit laptop-orbit-front" aria-hidden="true" />
      <span className="laptop-spark laptop-spark--one" aria-hidden="true" />
      <span className="laptop-spark laptop-spark--two" aria-hidden="true" />
      <span className="laptop-spark laptop-spark--three" aria-hidden="true" />
    </div>
  );
}
