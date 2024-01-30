import React, { useState } from "react";
import { addCulture } from "../cultureApi";
import { useNavigate } from "react-router-dom";

const InsertCultureForm = () => {
  const navigate = useNavigate();
  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState("");

  const handleInsertCulture = async () => {
    try {
      // Ensure that both nom and prix are entered
      if (nom !== "" && prix !== "" && prix >= 0) {
        // Use the addCulture function to insert a new culture
        const response = await addCulture({ nom, prix: parseFloat(prix) });

        // Log the inserted culture
        console.log("Inserted Culture:", response.data);

        // Clear the form fields
        setNom("");
        setPrix("");
        navigate("/culture");
      } else {
        console.error("Please enter a name and price for the new culture.");
      }
    } catch (error) {
      console.error("Error inserting culture:", error);
    }
  };

  return (
    <div>
      <section id="page">
        ^<header></header>
        <nav></nav>
        <main>
          <div id="bloc">
            <div className="co">
              <h1>Insertion Culture</h1>
            </div>

            <form className="login" method="post">
              <div className="user">
                <label htmlFor="username">Name :</label>
                <input
                  type="text"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  placeholder=" Enter culture name..."
                />
              </div>
              <div className="pass">
                {" "}
                <label htmlFor="password">Price :</label>
                <input
                  type="number"
                  value={prix}
                  onChange={(e) => setPrix(e.target.value)}
                  placeholder=" Enter your price..."
                />
              </div>
              <div className="actions">
                <button type="button" onClick={handleInsertCulture}>
                  Insert Culture
                </button>
              </div>
            </form>
          </div>
        </main>
        <footer></footer>
      </section>
    </div>
  );
};

export default InsertCultureForm;
