import React, { useState, useEffect } from "react";
import {
  findTerrainNonValide,
  validerTerrain,
  refuserTerrain,
} from "../terrainApi";
import { useNavigate, Link } from "react-router-dom";

const NonValideTerrainsList = () => {
  const [nonValideTerrains, setNonValideTerrains] = useState([]);

  useEffect(() => {
    // Fetch non-validated terrains when the component mounts
    const fetchNonValideTerrains = async () => {
      try {
        const response = await findTerrainNonValide();
        setNonValideTerrains(response.data);
      } catch (error) {
        console.error("Error fetching non-validated terrains:", error);
      }
    };

    fetchNonValideTerrains();
  }, []);

  const handleValiderTerrain = async (id) => {
    try {
      console.log(id);
      // Use validerTerrain function to validate the terrain
      await validerTerrain(id);

      // Update the list of non-validated terrains
      const updatedTerrains = nonValideTerrains.filter(
        (terrain) => terrain.id_Terrain !== id
      );
      setNonValideTerrains(updatedTerrains);

      console.log(`Terrain with ID ${id} has been validated.`);
    } catch (error) {
      console.error("Error validating terrain:", error);
    }
  };

  const handleRefuserTerrain = async (id) => {
    try {
      // Use refuserTerrain function to refuse the terrain
      await refuserTerrain(id);

      // Update the list of non-validated terrains
      const updatedTerrains = nonValideTerrains.filter(
        (terrain) => terrain.id_Terrain !== id
      );
      setNonValideTerrains(updatedTerrains);

      console.log(`Terrain with ID ${id} has been refused.`);
    } catch (error) {
      console.error("Error refusing terrain:", error);
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
          <div className="brand-logo">
            <a href="index.html"></a>
          </div>
          <ul className="sidebar-menu do-nicescrol">
            <li className="sidebar-header"></li>
            <li>
              {/* <a onClick={navigate("/terrainNonValide")}> */}
              <Link to="">
                <i className="zmdi zmdi-view-dashboard"></i>{" "}
                <span>Dashboard</span>
              </Link>
            </li>

            <li>
              <Link to="/culture">
                <i className="zmdi zmdi-invert-colors"></i> <span>Culture</span>
              </Link>
            </li>

            <li className="active">
              <Link to="/terrainNonValide" className="active">
                <i className="zmdi zmdi-grid"></i> <span>Validation</span>
              </Link>
            </li>

            <li>
              <Link to="/terrainValide">
                <i className="zmdi zmdi-grid"></i> <span>Validés</span>
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
              <div className="card-body">
                <h2 className="card-title">Validation d'insertion terrain</h2>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Nombre de parcelles</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nonValideTerrains.map((terrain) => (
                      <tr key={terrain.id_Terrain}>
                        <td>{terrain.description}</td>
                        <td>{terrain.nb_Parcelle}</td>
                        <td>
                          <button
                            onClick={() =>
                              handleValiderTerrain(terrain.id_Terrain)
                            }
                          >
                            Valider
                          </button>
                          <button
                            onClick={() =>
                              handleRefuserTerrain(terrain.id_Terrain)
                            }
                          >
                            Refuser
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
          <footer></footer>
        </section>
      </div>
    </div>
  );
};

export default NonValideTerrainsList;
