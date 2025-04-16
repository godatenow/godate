import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FadeInView from './FadeInView';
import LazyCachedImage from '../components/LazyCachedImage'; // ייבוא תקין
import { theme } from '../themes/theme';

const UserCard = ({ name, age, image, matchPercent }) => {
  return (
    <FadeInView>
      <View accessibilityLabel="כרטיס משתמש" style={[styles.card, theme.shadow.card]}>
        <LazyCachedImage source={{ uri: image }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name} accessibilityLabel="שם וגיל">{name}, {age}</Text>
          <Text style={styles.match} accessibilityLabel="אחוז התאמה">{matchPercent}% התאמה</Text>
        </View>
      </View>
    </FadeInView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginVertical: theme.spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: theme.spacing.md,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: theme.typography.fontSize.lg,
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.text,
  },
  match: {
    fontSize: theme.typography.fontSize.sm,
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.secondary,
  },
});

export default UserCard;
