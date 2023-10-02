import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const FormPage = ({ setUrl }) => {
  const [inputUrl, setInputUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(inputUrl);
  };

  return (
    <div>
      <h1>Form Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <Link to="/publicidad">Go to Publicidad</Link>
    </div>
  );
};

const PublicidadPage = ({ url }) => (
  <div>
    <h1>Publicidad Page</h1>
    <iframe title="publicidad" width="600px" height="100%" src={url}></iframe>
    <Link to="/form">Go to Form</Link>
  </div>
);

const App = () => {
  const [url, setUrl] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/form" element={<FormPage setUrl={setUrl} />} />
        <Route path="/publicidad" element={<PublicidadPage url={url} />} />
      </Routes>
    </Router>
  );
};

export default App;
