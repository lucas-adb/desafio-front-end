import BeLogo from "../assets/brand/be-logo.svg";

export function Header() {
  return (
    <header className="header box-shadow-2">
      <nav>
        <a href="/">
          <img src={BeLogo} alt="be-logo" />
        </a>
      </nav>
    </header>
  );
}
