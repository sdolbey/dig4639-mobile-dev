import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import questions from './questions.json';
import { Button, ThemeProvider } from 'react-native-elements';

const TIME_LIMIT = 5
const TITLE_STATE = 0
const QUESTION_STATE = 1
const FINAL_STATE = 2

class QuizQuestion extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.bigPink}>{this.props.question}</Text>
        {this.props.answers.map((v, i) =>
        <Button style={styles.answerButton} onPress={() => this.props.nextQuestion(v.correct)} key={i} title={v.text} />)}
      </View>
    );
  }
}

class TitlePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      titleText: "Welcome to the quiz!",
      counter: 0,
      currentState: TITLE_STATE,
      currentQuestion: 0
    }
    this.timeLimit = TIME_LIMIT;
  }

  nextQuestion(correct) {
    console.log("BUTTON PRESSED");
    if(correct) {
      this.setState({score: this.state.score + 1});
    }
    if(this.state.currentQuestion == questions.length - 1) {
      console.log("DONE");
      this.setState({
        titleText: "You finished the quiz!",
        currentState: FINAL_STATE
      })
    } else {
      clearInterval(this.timer);
      console.log(this.state.currentQuestion);
      this.setState({
        titleText: "You answered X",
        currentState: QUESTION_STATE,
        currentQuestion: this.state.currentQuestion + 1
      })
    }
  }

  countdown() {
    //console.log("Handling interval");
    console.log(this.state.counter);
    if(this.state.counter < this.timeLimit) {
      this.setState({
        titleText: "Starting the Quiz!",
        counter: this.state.counter + 1
      })
    } else {
      this.setState({
        titleText: "Beginning Quiz!",
        currentState: QUESTION_STATE,
        counter: 0
      })
      if(this.state.currentState == TITLE_STATE) {
        this.timer = setInterval(() => this.countdown(), 1000);
        clearInterval(this.timer);
      } else {
        this.setState({titleText: "You answered!"});
      }
    }
  }

  start() {
    console.log("Starting!");
    this.setState({titleText: "Starting the Quiz!", counter: 0});
    this.timer = setInterval(() => this.countdown(), 1000);
  }

  render() {
    switch(this.state.currentState) {
      case TITLE_STATE:
        return(
          <View>
            <Text style={styles.bigPink}>{this.timeLimit - this.state.counter}</Text>
            <Text style={styles.bigPink}>{this.state.titleText}</Text>
            <Button style={styles.answerButton} onPress={() => this.start()} title="start" />
          </View>
        )
        break;
      case QUESTION_STATE:
        return(
          <QuizQuestion
              answers={questions[this.state.currentQuestion].possibleAnswers}
              question={questions[this.state.currentQuestion].question}
              nextQuestion={(correct) => this.nextQuestion(correct)}
          ></QuizQuestion>
        )
        break;
      case FINAL_STATE:
        return(
          <View>
              <Text style={styles.bigPink}>{this.state.titleText}</Text>
              <Text style={styles.bigPink}>Your score was {this.state.score} out of {questions.length}</Text>
          </View>
        )
        break;
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#414288',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  bigPink: {
    fontSize: 24,
    color: '#FFE8E1',
    textAlign: "center",
  },
  answerButton: {
    backgroundColor: '#EFAAC4',
  }
});

const theme = {
  colors: {
    primary: '#EFAAC4',
  },
  Button: {
    buttonStyle: {
      backgroundColor: '#EFAAC4',
    },
  },
};

function App() {
  return(
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <TitlePage></TitlePage>
      </View>
    </ThemeProvider>
  )
}

export default App;