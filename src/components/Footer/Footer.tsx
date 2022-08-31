import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-section">
        <h2>Endereço</h2>
        <p>Rua Rui Barbosa, n 2050</p>
        <p>Centro, Itaipulândia - PR</p>
        <p>CEP: 85880-00</p>
      </div>
      <div className="footer-section"> Icone </div>
      <div className="footer-section">
        <h2>Entre em contato conosco</h2>
        <p><a href="https://www.instagram.com/femina_modaintima/">@femina_modaintima</a></p>
        <p>{"(45) 9 9984-5175"}</p>
        <p>facebook/femina_modaintima</p>
      </div>
    </footer>
  );
}
