import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        color: "white",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "3rem",
        flexDirection: "column",
      }}
    >
      Looks like path is incorrect
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
          padding: "20px 40px",
          fontSize: "2rem",
          fontWeight: "bolder",
          backgroundColor: "#e50914",
          cursor: "pointer",
          borderRadius: "5px",
          border: "none",
        }}
      >
        Go To Home screen Page
      </button>
    </div>
  );
}
