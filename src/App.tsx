import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
// import RepositoryList from "./components/RepositoryList";
import AddressMain from "./components/AddressMain";
import AulaMain from "./components/AulaMain";

// const App = () => <Provider store={store}><AddressMain /></Provider>;
const App = () => <Provider store={store}><AulaMain frase={'Teste de TS + Props'} /></Provider>;

export default App;