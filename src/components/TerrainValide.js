import React, { useState, useEffect } from "react";
import { findTerrainValide } from "../terrainApi";
import { useNavigate, Link } from "react-router-dom";

const ValideTerrainsList = () => {
  const navigate = useNavigate();
  const [ValideTerrains, setValideTerrains] = useState([]);

  useEffect(() => {
    // Fetch -validated terrains when the component mounts
    const fetchValideTerrains = async () => {
      try {
        const response = await findTerrainValide();
        setValideTerrains(response.data);
      } catch (error) {
        console.error("Error fetching validated terrains:", error);
      }
    };

    fetchValideTerrains();
  }, []);

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
                      <th>Terrain</th>
                      <th>Description</th>
                      <th>Nombre de parcelles</th>
                      <th>Localisation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ValideTerrains.map((terrain) => (
                      <tr key={terrain.id_Terrain}>
                        <td>Terrain{terrain.id_Terrain}</td>
                        <td>{terrain.description}</td>
                        <td>{terrain.nb_Parcelle}</td>
                        <td>{terrain.localisation}</td>
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

export default ValideTerrainsList;
