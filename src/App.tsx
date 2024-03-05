import './styles/App.css'
import {Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./container/Home.tsx";
import FallBack from "./container/FallBack.tsx";
import TyperDashWords from "./container/TyperDashWords.tsx";
import Layout from "./components/Layout.tsx";
import TypeDashSentence from "./container/TypeDashSentence.tsx";
import TypeDashCode from "./container/TypeDashCode.tsx";
import TicTacToe from "./container/TicTacToe.tsx";
import Snake from "./container/Snake.tsx";

function App() {

  return (
    <Fragment>
        <Layout>
            <Routes>
                <Route path="*" element={<FallBack/>} />
                <Route path="/" element={<Home/>} />
                <Route path="/TypeDashWords" element={<TyperDashWords/>} />
                <Route path="/TypeDashSentence" element={<TypeDashSentence/>} />
                <Route path="/TypeDashCode" element={<TypeDashCode/>} />
                <Route path="/TicTacToe" element={<TicTacToe/>} />
                <Route path="/Snake" element={<Snake/>} />
            </Routes>
        </Layout>
    </Fragment>
  )
}

export default App
