import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { Provider as PaperProvider, DarkTheme, DefaultTheme, Switch, Banner, Button, Dialog, Paragraph } from 'react-native-paper';
import email from 'react-native-email';
import Constants from 'expo-constants';

import SubmitBox from './components/SubmitBox'

const DATA = [
  { id: 1, email: 'rominaaidah@gmail.com', title: 'Bangla-1' },
  { id: 2, email: 'shumi.nusrat04@gmail.com', title: 'English-1' },
  { id: 3, email: 'bishojid231@gmail.com', title: 'Bangla-2' },
  { id: 4, email: 'mahima.huq29@yahoo.com', title: 'English-2' },
  { id: 5, email: 'emdad525@yahoo.com', title: 'General Maths' },
  { id: 6, email: 'ictbiscnatl@gmail.com', title: 'ICT' },
  { id: 7, email: 'giasbis@gmail.com', title: 'Religion' },
  { id: 8, email: 'mahafuzure@yahoo.com', title: 'Physics' },
  { id: 9, email: 'arjuman.084@gmail.com', title: 'Chemistry' },
  { id: 10, email: 'shanti.bisc08@gmail.com', title: 'Biology' },
  { id: 11, email: 'tanimmoon1979@gmail.com', title: 'BDGS' },
  { id: 12, email: 'bisjalil@gmail.com', title: 'Higher Maths' },
];

function emailHandler(sendUser, classSubject) {
  email(sendUser, {
    subject: 'WEEKLY ASSIGNMENT',
    body: 'Name: \nClass: \nSec: \nRoll: \nSub: ' + classSubject,
  }).catch(console.error);
}

export default function App() {
  const [theme, setTheme] = useState(DefaultTheme)
  const [background, setBackGround] = useState('#f6f6f6')
  const [helpVisible, setHelpVisible] = useState(true)
  const [aboutVisible, setAboutVisible] = useState(false)

  return (
    <PaperProvider theme={theme}>
      <Banner visible={helpVisible} actions={[{ label: 'Understood', onPress: () => setHelpVisible(false) }]}>Help: The main goal of this app is to simplify the process of sending your assignments. You can use this app or website to send your assignments in one click. Choose the subject you want to send the assignment of and click on submit. It should automatically open your email client. Just fill out your name, roll, section and other misc information and attach your assignment (VERY IMPORTANT).</Banner>
      <View style={{ flex: 1, flexDirection: 'row-reverse', justifyContent: 'center', alignItems: 'center', backgroundColor: background, marginTop: Constants.statusBarHeight }}>
        <Switch
          value={theme}
          style={styles.themeChanger}
          onValueChange={() => {
            if (theme === DarkTheme) {
              setTheme(DefaultTheme)
              setBackGround('#f6f6f6')
            } else if (theme === DefaultTheme) {
              setTheme(DarkTheme)
              setBackGround('#121212')
            }
          }}
        />
        <Text style={styles.animationBrokenText}>Dark Mode</Text>
      </View>
      <View style={{ backgroundColor: background }}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => {
            return (
              <SubmitBox
                title={item.title}
                email={item.email}
                onPress={() => emailHandler(item.email, item.title)}
              />
            )
          }}
        />
        <Button onPress={() => setAboutVisible(true)}>About</Button>
        <Dialog visible={aboutVisible} onDismiss={() => setAboutVisible(false)}>
          <Dialog.Title>About</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Developed by Tahlil with some Design choices by Nehan.</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setAboutVisible(false)}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </View>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  themeChanger: {
    marginTop: 10,
    marginBottom: 10,
  },
  animationBrokenText: {
    marginRight: 15,
    paddingBottom: 4,
    color: '#6200ee',
    fontWeight: 'bold'
  }
});
