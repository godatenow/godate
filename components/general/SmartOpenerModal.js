import FadeInView from "./FadeInView";
import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

export default React.memo(function SmartOpenerModal({ visible, onClose, suggestion }) {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <FadeInView>
        <View style={styles.overlay}>
          <View style={styles.modalContent}>
            <Text style={styles.title} accessibilityLabel="פתיח חכם">הצעה לפתיחה חכמה:</Text>
            <Text style={styles.suggestion} accessibilityLabel="תוכן הפתיח">{suggestion}</Text>
            <Button title="סגור" onPress={onClose} accessibilityLabel="כפתור סגירה" />
          </View>
        </View>
      </FadeInView>
    </Modal>
  );
});

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000aa',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  suggestion: {
    fontSize: 14,
    marginBottom: 20,
  },
});
