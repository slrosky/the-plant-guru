import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import WelcomeMessage from '../../components/WelcomeMessage/WelcomeMessage';
import AboutPage from '../AboutPage/AboutPage';
import QuizPage from '../QuizPage/QuizPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import qData from '../../constants/QuestionData';
import * as plantAPI from '../../utils/plantAPI';


class App extends Component {
  constructor() {
    super();
    this.state = {
      ...this.getInitialState(),
      user: userService.getUser()
    };
  }

  getInitialState() {
    return {
      userQuizChoices: [],
      option: false,
      plantMatches:[],
    };
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  };

  handleUpdateChoice = (e) => {
    this.props.handleUpdateChoice(false);
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.option]: true,
    });
  };

  async componentDidMount() {
    const plants = await plantAPI.getAll();
    console.log(plants)
    this.setState({plants});
  }

  render() {
    return (
      <div className="App">
        <header>
          <NavBar 
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
        </header>
        <Switch>
          <Route exact path='/' render={() =>
            <WelcomeMessage />
          }/>
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage 
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) =>
            <LoginPage 
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/about' render={() =>
            <AboutPage />
          } />
          <Route exact path='/quiz' render={ props  =>
            <QuizPage 
              user={this.state.user}
              qData={qData}
            />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
