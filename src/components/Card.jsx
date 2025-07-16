export default function Card() {
    const title = "React";
    const content = "Uma biblioteca JavaScript para criar interfaces de usuário.";
    const image = "https://via.placeholder.com/300";
  
    return (
      <div
        style={{
          border: "1px solid #ccc",
          padding: "16px",
          borderRadius: "8px",
          maxWidth: "300px",
          textAlign: "center",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{ width: "100%", borderRadius: "8px", marginBottom: "16px" }}
        />
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    );
  }