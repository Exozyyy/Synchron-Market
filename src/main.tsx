import React from "react"
import ReactDOM from "react-dom/client"
import App from "./app/App.tsx"
import {BrowserRouter} from "react-router-dom"
import "./app/globalStyles/globals.css"
import {Provider} from "react-redux";
import {store} from "./app/providers/store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
