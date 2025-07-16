export default function ContactPage() {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Contato</h1>
        <p>Preencha o formulário abaixo para entrar em contato.</p>
        <form style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px", margin: "0 auto" }}>
          <input type="text" placeholder="Seu nome" required style={{ padding: "10px" }} />
          <input type="email" placeholder="Seu email" required style={{ padding: "10px" }} />
          <textarea placeholder="Sua mensagem" required style={{ padding: "10px", height: "100px" }}></textarea>
          <button type="submit" style={{ padding: "10px", backgroundColor: "#61dafb", border: "none", cursor: "pointer" }}>
            Enviar
          </button>
        </form>
      </div>
    );
  }