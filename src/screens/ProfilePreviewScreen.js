
import { theme } from '../../theme/theme';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import dummyProfiles from '../../data/dummyProfiles';
import TagList from '../components/TagList';
import { useUserData } from '../hooks/useUserData';

const profile = dummyProfiles[0]; // לדוגמה: נועה

const ProfilePreviewScreen = () => {
  const { isPremium } = useUserData();
  return (
    <View style={styles.container}>
      <Image source={{ uri: profile.image }} style={styles.image} />
      <Text style={styles.name}>{profile.name}, {profile.age}</Text>
      {isPremium && <Text style={styles.premiumTag}>PREMIUM</Text>}
      <Text style={styles.location}>{profile.location} - {profile.job}</Text>
      <Text style={styles.description}>{profile.description}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>שלח הודעה</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#ff5a5f' }]}>
          <Text style={styles.buttonText}>Match Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 16,
    marginBottom: 20,
  },
  name: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  location: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18,
    color: '#666',
    marginBottom: 12,
  },
  description: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    backgroundColor: '#4a90e2',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
  },
});

export default ProfilePreviewScreen;
