import "./App.css";
import logo from "./assets/logo.png";

function App() {
  return (
    <main className="hero">
      <div className="hero__background" />
      <div className="hero__overlay" />

      <section className="hero__content">
        <div className="hero__inner">
          <div className="hero__logo-wrap">
            <img
              src={logo}
              alt="Citywide Painting & Design"
              className="hero__logo"
            />
          </div>

          <h1 className="hero__headline">
            Transforming Commercial Spaces with{" "}
            <span>Precision &amp; Excellence</span>
          </h1>

          <div className="hero__actions" />

          <div className="hero__areas">
            <span>NYC</span>
            <span className="hero__dot">•</span>
            <span>WESTCHESTER</span>
            <span className="hero__dot">•</span>
            <span>LONG ISLAND</span>
            <span className="hero__dot">•</span>
            <span>NORTH JERSEY</span>
          </div>
        </div>
      </section>

      <div id="services" />
      <div id="quote" />
    </main>
  );
}

export default App;