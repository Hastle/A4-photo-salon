import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { SelectedValueProvider } from "./context/SelectedValueContext";
import "./styles/main.sass";

const Root = () => {

    return (
        <SelectedValueProvider>
            <App />
        </SelectedValueProvider>
    );
};

ReactDOM.render(<Root />, document.getElementById('root'));
