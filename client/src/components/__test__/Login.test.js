import React from "react";
import Login from "../Login";
import {render,screen,fireEvent} from "@testing-library/react"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";


test("Match the Login UI snapshot...", ()=>{
    const {container}= render(
        <Provider store={store}>
            <BrowserRouter>
                <Login>

                </Login>
            </BrowserRouter>
        </Provider>
    )
})