// Muestra una figura geométrica animada que acompaña la portada sin distraer del contenido.
export default function OrbitVisual() {
  return (
    <div className="orbit-scene" aria-hidden="true">
      <div className="orbit-aura" />
      <div className="orbit-track orbit-track-outer" />
      <div className="orbit-track orbit-track-inner" />
      <div className="orbit-rotor orbit-rotor-outer" />
      <div className="orbit-rotor orbit-rotor-inner" />
      <div className="orbit-pulse" />
      <div className="orbit-pulse orbit-pulse-delayed" />

      <div className="orbit-center">
        <span className="orbit-eyebrow">PORTFOLIO</span>
        <span className="orbit-year">2026<span className="orbit-year-dot">.</span></span>
      </div>
      <span className="orbit-legend">Design · Code · Build</span>
    </div>
  );
}
