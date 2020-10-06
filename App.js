import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts, Gabriela_400Regular } from '@expo-google-fonts/gabriela';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

export default function App() {

  i18n.translations = {
    en: { appName: 'Answer & Find', descText: 'Dating app. Answer the questions - just choose one of two options and we will find another user, that answered like you or near that.' },
    ru: { appName: 'Ответь и найди', descText: 'Приложение для знакомств. Отвечай на вопросы, выбирая один из двух вариантов и мы подберем тебе человека, который ответил также или максимально близко' },
  };

  i18n.locale = Localization.locale;

  i18n.fallbacks = true;

  let [fontsLoaded] = useFonts({
    Gabriela_400Regular,
  });

  if (!fontsLoaded) {
    <AppLoading />
  }
    
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainHeader}>{i18n.t('appName')}</Text>
      <Text>{i18n.t('descText')}</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  mainHeader: {
    fontSize: 40,
    fontFamily: 'Gabriela_400Regular'
  },
});