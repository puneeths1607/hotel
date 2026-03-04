import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../api/axios";
import Navbar from "../components/Navbar";

function Hotels() {
  const [hotels, setHotels] = useState([]);
  const query = new URLSearchParams(useLocation().search);

  const location = query.get("location");

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await API.get(`/hotels?location=${location}`);
        setHotels(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHotels();
  }, [location]);

  return (
    <div>
      <Navbar />
      <h2>Hotels in {location}</h2>

      {hotels.length === 0 ? (
        <p>No hotels found</p>
      ) : (
        hotels.map((hotel) => (
          <div
            key={hotel._id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px"
            }}
          >
            <h3>{hotel.name}</h3>
            <p>{hotel.location}</p>
            <p>₹ {hotel.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Hotels;