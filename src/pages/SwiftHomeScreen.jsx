import React from 'react';
import {StyleSheet, ImageBackground, FlatList, Text} from 'react-native';
import SwiftHeader from '../components/SwiftHeader';
import SwiftMenuComponent from '../components/SwiftMenuComponent';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {burgerApp4} from '../assets/products';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderProduct = ({item, index}) => (
    <SwiftMenuComponent item={item} index={index} />
  );
  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <SwiftHeader />

      <Text style={styles.title}>Главная</Text>

      <FlatList
        data={burgerApp4}
        renderItem={renderProduct}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.main}
        numColumns={1}
        horizontal={false}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  main: {
    paddingBottom: 100,
    alignItems: 'center',
    width,
  },
  image: {
    width: '100%',
    height: 80,
    objectFit: 'contain',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    paddingVertical: 5,
    backgroundColor: COLORS.main,
  },
});
