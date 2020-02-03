import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ListComponent from "./list";

let padToTwo = number => (number <= 9 ? `0${number}` : number);

class StopwatchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      min: 0,
      sec: 0,
      msec: 0
    };

    this.lapArr = [];

    this.interval = null;
  }

  handleToggle = () => {
    this.setState(
      {
        start: !this.state.start
      },
      () => this.handleStart()
    );
  };

  handleLap = async (min, sec, msec) => {
    this.lapArr = await [...this.lapArr, { min, sec, msec }];
  };

  handleStart = async () => {
    if (this.state.start) {
      this.interval = await setInterval(() => {
        if (this.state.msec !== 99) {
          this.setState({
            msec: this.state.msec + 1
          });
        } else if (this.state.sec !== 59) {
          this.setState({
            msec: 0,
            sec: ++this.state.sec
          });
        } else {
          this.setState({
            msec: 0,
            sec: 0,
            min: ++this.state.min
          });
        }
      }, 1);
    } else {
      await clearInterval(this.interval);
    }
  };

  handleReset = async () => {
    await this.setState({
      min: 0,
      sec: 0,
      msec: 0,

      start: false
    });

    clearInterval(this.interval);

    this.lapArr = [];
  };

  render() {
    return (
      <>
        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            backgroundColor: "#333",
            borderWidth: 2,
            borderColor: "#333",
            borderRadius: 2,
            padding: 10,
            marginBottom: 10
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "white"
            }}
          >
            TEMPO DE DISCURSO
          </Text>
        </View>
        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            backgroundColor: "white",
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 2,
            padding: 10,
            marginBottom: 10
          }}
        >
          <Text
            style={{
              fontSize: 50,
              fontWeight: "bold",
              color: "#333"
            }}
          >
            {"" + padToTwo(this.state.min) + " : "}
          </Text>
          <Text
            style={{
              fontSize: 50,
              fontWeight: "bold",
              color: "#333"
            }}
          >
            {padToTwo(this.state.sec) + " : "}
          </Text>
          <Text
            style={{
              fontSize: 50,
              fontWeight: "bold",
              color: "#333"
            }}
          >
            {padToTwo(this.state.msec)}
          </Text>
        </View>

        <View
          style={{
            alignSelf: "center",
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "red",
              borderWidth: 2,
              borderColor: "red",
              borderRadius: 2,
              padding: 10,
              marginRight: 15,
              shadowColor: "black",
              shadowOffset: 5,
              shadowOpacity: 2,
              shadowRadius: 3
            }}
            onPress={this.handleReset}
          >
            <Text
              style={{
                color: "white"
              }}
            >
              REINICIAR TEMPO
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#33cc33",
              borderWidth: 2,
              borderColor: "#33cc33",
              borderRadius: 2,
              padding: 10,
              marginRight: 15,
              shadowColor: "black",
              shadowOffset: 5,
              shadowOpacity: 2,
              shadowRadius: 3
            }}
            onPress={this.handleToggle}
          >
            <Text
              style={{
                color: "white"
              }}
            >
              {!this.state.start ? "RETORNAR DISCURSO" : "PAUSAR DISCURSO"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "orange",
              borderWidth: 2,
              borderColor: "orange",
              borderRadius: 2,
              padding: 10,
              shadowColor: "black",
              shadowOffset: 5,
              shadowOpacity: 2,
              shadowRadius: 3
            }}
            onPress={() =>
              this.handleLap(this.state.min, this.state.sec, this.state.msec)
            }
            disabled={!this.state.start}
          >
            <Text
              style={{
                color: "#333"
              }}
            >
              GRAVAR TEMPO
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignSelf: "center"
          }}
        >
          {/* <ListComponent lap={this.lapArr} /> */}
        </View>
      </>
    );
  }
}

export default StopwatchContainer;
