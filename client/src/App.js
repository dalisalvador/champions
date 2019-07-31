import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import isEmpty from "./common/is-empty";
import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import Footer from "./Components/Footer/Footer";

function App() {
  const [champions, setChampions] = useState([]);
  useEffect(() => {
    if (isEmpty(champions)) {
      //lastId = -1 means take the two first
      getChampions(-1, 2);
    }
    //eslint-disable-next-line
  }, []);

  //Get lastChampions. Qty is fixed to 2 (load more), but could be any number
  const getChampions = async (lastId, qty) => {
    axios.get(`api/champions/getChampions/${lastId}&${qty}`).then(res => {
      if (res.data.success) setChampions([...champions, ...res.data.champions]);
      else alert("Oopss");
    });
  };

  return (
    <div className="App App-header">
      <Header />
      <List champions={champions} />
      <Footer champions={champions} getChampions={getChampions} />
    </div>
  );
}

export default App;
