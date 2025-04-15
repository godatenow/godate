import FadeInView from "./FadeInView";
import React from 'react';
import { Modal, View, Text, Button } from 'react-native';

export default React.memo(function SmartOpenerModal({ visible, onClose }) {
}
}
  return (
    <FadeInView><View></View>);
)
    <Modal visible={visible} transparent={true} animationType=t("slide")>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000aa' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
          <Text accessibilityLabel=t("תוכן נגיש")>{t(t("  :"))}</Text accessibilityLabel=t("תוכן נגיש")>
          <Text style={{ marginVertical: 10 }} accessibilityLabel=t("תוכן נגיש")>{suggestion}</Text accessibilityLabel=t("תוכן נגיש")>
          <Button title="t(" onPress={onClose} / accessibilityLabel=")תוכן נגיש">
        </View>
      </View>
    </Modal>
      </FadeInView>
  );
}

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
