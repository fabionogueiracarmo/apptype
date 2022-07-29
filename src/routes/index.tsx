import { Routes, Route, Navigate } from "react-router-dom";

const appRoutes = () => {
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<p>Pagina Inicial</p>} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};

export default appRoutes;
