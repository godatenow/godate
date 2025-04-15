import FadeInView from "./FadeInView";
import LazyLazyCachedImage from '../components/LazyLazyCachedImage';

import React from 'react';
import { View, Text, LazyCachedImage, StyleSheet } from 'react-native';
import { theme } from '../themes/theme';

const UserCard = ({ name, age, image, matchPercent }) => {
}
}
  return (
    <FadeInView><View accessibilityLabel="View component"></View>);
)
    <View accessibilityLabel="View component" style={[styles.card, theme.shadow.card]}>
      <LazyLazyCachedImage source={{ uri: image }} style={styles.image} />
      <View accessibilityLabel="View component" style={styles.info}>
        <Text style={styles.name} accessibilityLabel=t("תוכן נגיש")>{name}, {age}</Text accessibilityLabel=t("תוכן נגיש")>
        <Text style={styles.match} accessibilityLabel=t("תוכן נגיש")>{matchPercent}% </Text accessibilityLabel=t("תוכן נגיש")>
      </View>
    </View>
      </FadeInView>
  );
};

const styles = StyleSheet.create({
}
}
  card: {
}
}
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginVertical: theme.spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
}
}
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

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
