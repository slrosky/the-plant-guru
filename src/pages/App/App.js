import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import WelcomeMessage from "../../components/WelcomeMessage/WelcomeMessage";
import AccountPage from "../AccountPage/AccountPage";
import PlantMatchPage from "../PlantMatchPage/PlantMatchPage";
import QuizPage from "../QuizPage/QuizPage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import qData from "../../constants/QuestionData";
import * as plantAPI from "../../utils/plantAPI";
import * as helpers from "../../utils/helpers";
import * as plantMatchService from "../../utils/plantMatchService";

class App extends Component {
  constructor() {
    super();
    this.state = {
      ...this.getInitialState(),
      user: userService.getUser(),
      userQuizChoices: [],
      plants: [],
      plant: {},
      matches: [],
    };
  }

  getInitialState() {
    return {
      option: false,
    };
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  // updateUserChoices = () => {
  //   let userQuizChoices = []
  //   if (checked === true) {
  //     for(let i = 0; i < userQuizChoices; i++) {
  //       let answer =
  //     }
  //   }
  // }

  // handleNewMatch = async (newMatchData) => {
  //   const newMatch = await plantMatchService.create(newMatchData);
  //   this.setState(
  //     (state) => ({
  //       plantmatches: [...state.plantmatches, newMatch],
  //     }),
  //     () => this.props.history.push("/")
  //   );
  // };

  handleSubmitQuiz = () => {
    const plants = this.state.plants;
    const plant = helpers.randomPlant(this.state.plants);
    console.log(plant);
    const plantPayload = {
      name: plant.common_name,
      image: plant.image_url,
    };
    // plantMatchService.upload ?
    plantMatchService.create(plantPayload);
    this.setState({ plant });
    // setState of plantMatches
    // call create function
  };

  handleDeleteMatch = async (id) => {
    const plant = await plantMatchService.deleteOne(id);
    console.log("hitting deletematch", plant);
    this.setState(
      (state) => ({
        //     // Yay, filter returns a NEW array
        matches: state.matches.filter((plant) => plant._id !== id),
      }));
  };

  async componentDidMount() {
    const plants = await plantAPI.getAll();
    const matches = await plantMatchService.getAllMatches();
    this.setState({ plants: plants.data.data, matches });
  }

  render() {
    return (
      <div className="App">
        <header>
          <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        </header>
        <Switch>
          <Route
            exact
            path="/"
            render={({ history }) => (
              <WelcomeMessage
                history={history}
                handleLogout={this.handleLogout}
                user={this.state.user}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route exact path="/account" render={(props) => <AccountPage />} />
          <Route
            exact
            path="/plantmatches"
            render={(props) => (
              <PlantMatchPage
                user={this.state.user}
                plant={this.state.plant}
                matches={this.state.matches}
                handleDeleteMatch={this.handleDeleteMatch}
              />
            )}
          />
          <Route
            exact
            path="/quiz"
            render={({ history }) => (
              <QuizPage
                user={this.state.user}
                qData={qData}
                // handleUpdateChoice={this.handleUpdateChoice}
                handleSubmitQuiz={this.handleSubmitQuiz}
                plant={this.state.plant}
                history={history}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
