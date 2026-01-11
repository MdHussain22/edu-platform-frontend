import "./CourseCard.css";

export default function CourseCard({ title, description }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 8,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        marginBottom: 16,
        maxWidth: 300,
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}


