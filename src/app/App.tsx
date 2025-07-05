import {Route, Routes} from "react-router-dom";

import {appRoutes} from "./providers/router/routerConfig.tsx";


export default function App() {
    return (
        <Routes>
            {appRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element}/>
            ))}
        </Routes>
    );
}
