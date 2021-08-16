import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Main from './components/Main';
import Questions from './components/Questions';
import Result from './components/Result';

function App() {
  const MainDiv = styled.div`
    background-color: #FDF6F0;
    max-width: 780px;
    text-align: center;
    min-height: 900px;
    border-radius: 30px;
    margin: auto;
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
  return (
    <div className="App">
      <MainDiv>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact>
              <Main />
            </Route>
            <Route path='/questions'>
              <Questions />
            </Route>
            <Route path='/result' exact>
              <Result />
            </Route>
          </Switch>
        </BrowserRouter>
      </MainDiv>
    </div>
  );
}

export default App;
