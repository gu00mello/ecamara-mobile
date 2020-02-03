import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";

let padToTwo = number => (number <= 9 ? `0${number}` : number);

class ListComponent extends Component {
  render() {
    return (
      <View
        style={{
          width: 498,
          maxWidth: 498,
          borderWidth: 1,
          borderColor: "white",
          borderRadius: 2,
          padding: 10,
          backgroundColor: "white",
          marginTop: 10,
          flexDirection: "column",
          height: 50,
          maxHeight: 50
        }}
      >
        <FlatList
          style={{
            width: 498,
            maxWidth: 498,
            flexDirection: "column",
            height: 50,
            maxHeight: 50
          }}
          data={this.props.lap}
          renderItem={({ item, index }) => (
            <Text
              style={{
                color: "#333",
                fontSize: 15,
                fontWeight: "bold"
              }}
              key={index}
            >
              {`#${index + 1} - TEMPO DO DISCURSO: `}
              {padToTwo(item.min)}:{padToTwo(item.sec)}:{padToTwo(item.msec)}
            </Text>
          )}
        />
      </View>
    );
  }
}

export default ListComponent;
