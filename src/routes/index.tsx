import { Routes, Route, useParams } from "react-router-dom";

export const appRoutes = () => {
    return(
        <Routes>
            <Route path="/pagina-inicial" element={<p>Pagina Inicial</p>}></Route>
            <Route path="*" element={<Navigate to="/pagina-inicial"/>}></Route>
        </Routes>
    )
}