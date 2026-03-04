import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    navigate(
      `/hotels?location=${location}&checkIn=${checkIn}&checkOut=${checkOut}`
    );
  };

  return (
    <div>
      <Navbar />

      <div style={{
        height: "80vh",
        background: "linear-gradient(to right, #4facfe, #00f2fe)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
      }}>
        <h1>Find Your Perfect Stay</h1>

        <form onSubmit={handleSearch} style={{ marginTop: "20px" }}>
          <input
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default Home;