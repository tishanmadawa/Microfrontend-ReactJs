import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App"
import { createMemoryHistory, createBrowserHistory } from 'history'

//Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });
    if (onNavigate)
        history.listen(onNavigate);

    ReactDOM.render(
        <App history={history} onSignIn={onSignIn} />,
        el
    );
    return {
        onParentNavigate: ({ pathname: nextPathname }) => {
            console.log(pathname);
            const { pathname } = history.location;
            console.log("nextPathname", nextPathname);
            if (pathname !== nextPathname)
                history.push(nextPathname);
        }
    };
}
//if we are in deveopment and in isolation
//call mount imemediately

if (process.env.NODE_ENV == 'development') {
    const devRoot = document.querySelector("#_auth-dev-root");
    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() })
    }
}

export { mount }
//we running through container
//and we should export the mount function