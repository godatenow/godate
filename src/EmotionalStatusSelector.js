
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const moods = ['שמח', 'רגוע', 'מבולבל', 'מחפש חיבור'];

export default function EmotionalStatusSelector({ onSelect }) {
  return (
    <View style={{ padding: 10 }}>
      <Text>איך אתה מרגיש היום?</Text>
      {moods.map((mood) => (
        <TouchableOpacity key={mood} onPress={() = accessibilityLabel="כפתור פעולה" accessible={true}> onSelect(mood)}>
          <Text style={{ fontSize: 18, marginVertical: 5 }}>{mood}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
