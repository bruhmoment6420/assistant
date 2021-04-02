import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';


export default function SubmitBox(props) {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Title>{props.title}</Title>
        <Paragraph>{props.email}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={props.onPress} icon="mail">Submit</Button>
      </Card.Actions>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 1,
    marginBottom: 2
  }
})