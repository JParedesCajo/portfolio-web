const particles = [
  { left: "10%", top: "18%", delay: "-2s", duration: "7s" },
  { left: "21%", top: "67%", delay: "-3s", duration: "10s" },
  { left: "33%", top: "31%", delay: "-1s", duration: "8s" },
  { left: "46%", top: "79%", delay: "-5s", duration: "9s" },
  { left: "58%", top: "13%", delay: "-4s", duration: "11s" },
  { left: "65%", top: "58%", delay: "-6s", duration: "8s" },
  { left: "76%", top: "22%", delay: "-2s", duration: "12s" },
  { left: "86%", top: "74%", delay: "-8s", duration: "9s" },
  { left: "94%", top: "43%", delay: "-3s", duration: "10s" },
  { left: "53%", top: "42%", delay: "-5s", duration: "7s" },
];

// Dibuja la niebla azul y las partículas detrás del contenido del Hero.
export default function HeroAtmosphere() {
  return (
    <div className="hero-atmosphere" aria-hidden="true">
      <div className="hero-nebula-texture" />
      <div className="hero-mist hero-mist--right" />
      <div className="hero-mist hero-mist--left" />
      {particles.map((particle, index) => (
        <span
          key={index}
          className="hero-particle"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
}
