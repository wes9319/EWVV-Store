import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../containers/Home";
import { Checkout } from "../containers/Checkout";
import { Information } from "../containers/Information";
import { Payment } from "../containers/Payment";
import { Success } from "../containers/Success";
import { NotFound } from "../containers/NotFound";
import { Layout } from "../components/Layout";
import { AppContext } from "../context/AppContext";
import { useInitialState } from "../hooks/useInitialState";

const App = () => {
  const initialState = useInitialState();
  const isEmpty = Object.keys(initialState.state).length;
  return (
    <>
      {isEmpty > 0 ? 
        (<AppContext.Provider value={initialState}>
          <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route exact path="/checkout" element={<Checkout />}/>
              <Route exact path="/checkout/information" element={<Information />}/>
              <Route exact path="/checkout/payment" element={<Payment />}/>
              <Route exact path="/checkout/success" element={<Success />}/>
              <Route path="*" element={<NotFound />}/>
            </Routes>
          </Layout>
          </BrowserRouter>
        </AppContext.Provider>) :
        <h1>Loading...</h1>
       }
    </>
  );
}

export { App };