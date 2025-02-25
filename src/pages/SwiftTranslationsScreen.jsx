import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import SwiftHeader from '../components/SwiftHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <SwiftHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('UFC', '04.05 22:00', 'Israel Adesanya \n' + 'Dricus du Plessis')}
        {renderBroadcast('Bellator', '06.05 19:45', 'AJ McKee \n' + 'Patricio Pitbull')}
        {renderBroadcast('ONE Championship', '08.05 18:30', 'Demetrious Johnson \n' + 'Adriano Moraes')}
        {renderBroadcast('PFL', '10.05 20:00', 'Brendan Loughnane \n' + 'Movlid Khaybulaev')}
        {renderBroadcast('WBC Boxing', '12.05 21:15', 'Tyson Fury \n' + 'Oleksandr Usyk')}
        {renderBroadcast('WBO Boxing', '14.05 17:30', 'Naoya Inoue \n' + 'Stephen Fulton')}
        {renderBroadcast('K-1 Kickboxing', '16.05 19:00', 'Takeru \n' + 'Superlek Kiatmoo9')}
        {renderBroadcast('BKFC', '18.05 18:45', 'Mike Perry \n' + 'Eddie Alvarez')}
        {renderBroadcast('Glory Kickboxing', '20.05 20:30', 'Rico Verhoeven \n' + 'Jamal Ben Saddik')}
        {renderBroadcast('ROAD FC', '22.05 17:00', 'Seo Hee Ham \n' + 'Ayaka Hamasaki')}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.main,
    elevation: 5,
    paddingLeft: 20,
  },
  league: {
    fontSize: 30,
    fontFamily: FONTS.black,
    color: COLORS.white,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    width: '40%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.white,
    marginTop: 5,
    marginLeft: 5,
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
