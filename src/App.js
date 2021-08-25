/* eslint-disable import/order */
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Main from './pages/Main';
import Questions from './pages/Questions';
import Result from './pages/Result';
import Sample from './pages/Sample';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ResultDetail from './pages/ResultDetail';
import reducer from './redux';

const store = createStore(reducer);

const MainDiv = styled.div`
  background-color: #fdf6f0;
  max-width: 700px;
  min-width: 300px;
  text-align: center;
  min-height: 50vh;
  border-radius: 30px;
  margin: auto;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  color: dimgrey
`;


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainDiv>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact>
                <Main />
              </Route>
              <Route path="/sample" exact>
                <Sample />
              </Route>
              <Route path="/questions/:page">
                <Questions />
              </Route>
              <Route path="/result" exact>
                <Result />
              </Route>
              <Route path="/resultdetail" exact>
                <ResultDetail />
              </Route>
            </Switch>
          </BrowserRouter>
        </MainDiv>
      </div>
    </Provider>
  );
}

export default App;
