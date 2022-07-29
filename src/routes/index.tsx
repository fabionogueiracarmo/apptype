import { Routes, Route, Navigate } from "react-router-dom";

 const appRoutes = () => {
    return(
        <Routes>
            <Route path="/pagina-inicial" element={<p>Pagina Inicial</p>}></Route>
            <Route path="*" element={<Navigate to="/pagina-inicial"/>}></Route>
        </Routes>
    )
}

export default appRoutes;