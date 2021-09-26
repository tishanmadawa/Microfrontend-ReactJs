import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App"
//Mount function to start up the app
const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    );
}
//if we are in deveopment and in isolation
//call mount imemediately

if (process.env.NODE_ENV == 'development') {
    const devRoot = document.querySelector("#_marketing-dev-root");
    console.log("sucess", devRoot);

    if (devRoot) {

        mount(devRoot)
    }
}

export { mount }
//we running through container
//and we should export the mount function