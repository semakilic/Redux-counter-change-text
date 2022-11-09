import React from "react";
import store from "../src/stroes";
import {Provider} from "react-redux";
import Counter from "/components/Counter"
import CounterActions from "/components/CounterActions";
import Header from "/components/Header";
import Footer from "/components/Footer";


export default function Home() {
  return (
      <div className="container">
        <Provider store={store}>
          <div className="container text-center card shadow mt-3 py-4 ">
              <Header/>
            <Counter/>
            <CounterActions/>
              <Footer/>
          </div>
        </Provider>
      </div>
  );
}
