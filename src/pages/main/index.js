import React from 'react';

import {
  View, Text, Image, StyleSheet, Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#7159c1',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  instructions: {
    color: '#DDD',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  logo: {
    height: Dimensions.get('window').height * 0.1,
    marginBottom: 40,
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Main = () => (
  <View style={styles.container}>
    <Image
      source={require('~/images/rocketseat_logo.png')}
      style={styles.logo}
      resizeMode="contain"
    />
    <Text style={styles.welcome}>Bem-vindo ao Template Avançado!</Text>
    <Text style={styles.instructions}>
      Essa é a tela principal da sua aplicação =)
    </Text>
    <Text style={styles.instructions}>Você pode editar a tela no arquivo:</Text>
    <Text style={[styles.instructions, styles.fileName]}>
      src/pages/Main/index.js
    </Text>
  </View>
);

export default Main;
