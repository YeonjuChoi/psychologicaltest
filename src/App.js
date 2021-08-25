/* eslint-disable import/order */
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

export default function App() {
  return (
    <Provider store={store}>
      <WholeDiv>
        <Space />
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
        <Space />
      </WholeDiv>
    </Provider>
  );
}


const WholeDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MainDiv = styled.div`
  background-color: #fdf6f0;
  max-width: 700px;
  min-width: 300px;
  text-align: center;
  min-height: 50vh;
  border-radius: 30px;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  color: dimgrey
`;

const Space = styled.div`
  width: 100%;
  height: 50px;
`;