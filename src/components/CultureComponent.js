import React, { useState, useEffect } from "react";
import { getAllCultures, updatePrix } from "../cultureApi";
import { useNavigate, Link } from "react-router-dom";

const UpdatePrixForm = () => {
  const [cultures, setCultures] = useState([]);
  const [selectedCulture, setSelectedCulture] = useState("");
  const [newPrix, setNewPrix] = useState("");

  useEffect(() => {
    // Fetch all cultures when the component mounts
    const fetchCultures = async () => {
      try {
        const response = await getAllCultures();
        setCultures(response.data);
      } catch (error) {
        console.error("Error fetching cultures:", error);
      }
    };

    fetchCultures();
  }, []);

  const handleUpdatePrix = async () => {
    try {
      // Ensure that both culture and newPrix are selected
      if (selectedCulture && newPrix !== "") {
        // Use the updatePrix function to update the price
        const response = await updatePrix(
          selectedCulture.id_Culture,
          parseFloat(newPrix)
        );

        // Log the updated culture
        console.log("Updated Culture:", response.data);

        // Clear the form fields
        setSelectedCulture("");
        setNewPrix("");
      } else {
        console.error("Please select a culture and enter a new price.");
      }
    } catch (error) {
      console.error("Error updating price:", error);
    }
  };

  return (
    <div>
      <div id="wrapper">
        <div
          id="sidebar-wrapper"
          data-simplebar=""
          data-simplebar-auto-hide="true"
        >
          <div class="brand-logo">
            <a href="index.html"></a>
          </div>
          <ul class="sidebar-menu do-nicescrol">
            <li class="sidebar-header"></li>
            <li>
              {/* <a onClick={navigate("/terrainNonValide")}> */}
              <Link to="">
                <i className="zmdi zmdi-view-dashboard"></i>{" "}
                <span>Dashboard</span>
              </Link>
            </li>

            <li className="active">
              <Link to="/culture" className="active">
                <i className="zmdi zmdi-invert-colors"></i> <span>Culture</span>
              </Link>
            </li>

            <li>
              <Link to="/terrainNonValide">
                <i className="zmdi zmdi-grid"></i> <span>Validation</span>
              </Link>
            </li>

            <li>
              <Link to="/update">
                <i className="zmdi zmdi-grid"></i> <span>Mofidier prix</span>
              </Link>
            </li>

            <li>
              <Link to="/login">
                <i className="zmdi zmdi-lock"></i> <span>Log out</span>
              </Link>
            </li>
          </ul>
        </div>
        <section id="page">
          <header></header>
          <nav></nav>
          <main>
            <div id="bloc">
              <div class="co">
                <h2>Update Prix Form</h2>
              </div>
              <form>
                <label>Select Culture:</label>
                <select
                  value={selectedCulture}
                  onChange={(e) =>
                    setSelectedCulture(JSON.parse(e.target.value))
                  }
                >
                  <option value="" disabled>
                    Select a Culture
                  </option>
                  {cultures.map((culture) => (
                    <option
                      key={culture.id_Culture}
                      value={JSON.stringify(culture)}
                    >
                      {culture.nom}
                    </option>
                  ))}
                </select>

                <label>New Price:</label>
                <input
                  type="number"
                  value={newPrix}
                  onChange={(e) => setNewPrix(e.target.value)}
                />

                <button type="button" onClick={handleUpdatePrix}>
                  Update Price
                </button>
              </form>
            </div>
          </main>
          <footer></footer>
        </section>
      </div>
    </div>
  );
};

export default UpdatePrixForm;
