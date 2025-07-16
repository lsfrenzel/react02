export default function Form() {
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(event.target));
      console.log("Dados do formulário:", data);
      alert(`Formulário enviado! Nome: ${data.name}, Email: ${data.email}`);
    };
  
    return (
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "300px",
          margin: "0 auto",
        }}
      >
        <h2>Cadastro</h2>
        <label>
          Nome:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <button
          type="submit"
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Enviar
        </button>
      </form>
    );
  }