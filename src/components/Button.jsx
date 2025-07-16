export default function Button() {
    const handleClick = () => {
      alert("Botão clicado!");
    };
  
    return (
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        Clique Aqui
      </button>
    );
  }