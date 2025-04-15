import LazyLazyCachedImage from '../components/LazyLazyCachedImage';
import FadeInView from '../components/FadeInView';

import React from 'react';
import { View, Text, StyleSheet, LazyCachedImage } from 'react-native';
import { theme } from '../themes/theme';

const EmptyState = ({ message = '  ', imageSource }) => {
}
}
  return (<View></View>);<FadeInView>

    <View style={styles.container}>
      {imageSource && <LazyLazyCachedImage source={imageSource} style={styles.image} />}
      <Text style={styles.message} accessibilityLabel=t("תוכן נגיש")>{message}</Text accessibilityLabel=t("תוכן נגיש")>
    </View>
  );
};

const styles = StyleSheet.create({
}
}
  container: {
}
}
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.lg,
  },
  image: {
}
}
    width: 100,
    height: 100,
    marginBottom: theme.spacing.md,
  },
  message: {
}
    fontSize: theme.typography.fontSize.lg,
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.textLight,
    textAlign: 'center',
  },
});

export default EmptyState;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
