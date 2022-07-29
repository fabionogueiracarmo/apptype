import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

const appRoutes = () => {
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Button>Teste</Button>} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};

export default appRoutes;
