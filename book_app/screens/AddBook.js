import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View
} from "react-native";

import { TextField, ErrorText } from "../components/Form";
import { Button } from "../components/Button";

const isValidInputs = state => {
  const fields = ["bookTitle", "bookDesc", "version", "p_year", "author", "email"];
  const validArray = fields.map(field => {
    if (!state[field] || state[field].length === 0) {
      return false;
    }
    return true;
  });

  const validFields = validArray.filter(valid => valid);
  return validFields.length === fields.length;
};

export default class CreateAccount extends React.Component {
  state = { errorMessage: null };

  onSubmit = () => {
    if (!isValidInputs(this.state)) {
      this.setState({ errorMessage: "An error occured." });
    } else {
      this.setState({ errorMessage: null });
      const { bookTitle, bookDesc, version, p_year, author, email } = this.state;

      fetch("https://postman-echo.com/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          bookTitle, 
          bookDesc, 
          version, 
          p_year, 
          author, 
          email
        })
      })
        .then(res => res.json())
        .then(res => {
		  alert("Done Added");
          console.log("res", res);
        })
        .catch(err => {
          console.log("err", err);
        });
    }
  };

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView
        contentContainerStyle={{ paddingVertical: 20 }}
        style={{ backgroundColor: "#fff" }}
      >
        <TextField
          label="Book Title"
          onChangeText={bookTitle => this.setState({ bookTitle })}
        />
        <TextField
          label="Description"
          onChangeText={bookDesc => this.setState({ bookDesc })}
        />
        <TextField
          label="Version"
          onChangeText={version => this.setState({ version })}
        />
        <TextField
          label="Published Year"
          onChangeText={p_year => this.setState({ p_year })}
        />
        <TextField
          label="Author Name"
          placeholder="John Doe"
          onChangeText={author => this.setState({ author })}
        />
        <TextField
          label="Email"
          placeholder="john.doe@example.com"
          onChangeText={email => this.setState({ email })}
        />
        
                
        <ErrorText text={this.state.errorMessage} />
        
        <Button text="Add Book" onPress={this.onSubmit} />
        
        
      </ScrollView>
    );
  }
}
