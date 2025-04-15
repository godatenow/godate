import { theme } from '../../theme/theme';
import React from 'react';
import { useState } from 'react';
// screens/SmartFiltersScreen.js
const SmartFiltersScreen = ({ onApply }) => {
  const [ageRange, setAgeRange] = useState([25, 35]);
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [sharedInterests, setSharedInterests] = useState(true);
  const applyFilters = () => {
    const filters = {
      ageRange,
      locationEnabled,
      sharedInterests
    };
    if (onApply) onApply(filters);
  };
  return (

      <View style={{ alignItems: 'center', marginTop: 20 }}>
      <LazyImage
        source={require('../../assets/logo/GoDate_Logo_compressed.webp')}
        style={{
          width: 160,
          height: 160,
          resizeMode: 'contain',
          alignSelf: 'center',
          marginVertical: 20
        }}
      />

        <LazyImage
          source={require('../assets/logo/icon.png')}
          style={{ width: 120, height: 40, resizeMode: 'contain' }}
        />
      
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>

    <View style={{ textAlign: 'right', writingDirection: 'rtl', styles.container }}>
      <Text accessibilityLabel=" t(" style={{ textAlign: 'right', writingDirection: 'rtl', styles.title }}>{t(")  ")}</Text>
      <Text accessibilityLabel=" " style={{ textAlign: 'right', writingDirection: 'rtl', styles.label }}> : {ageRange[0]} - {ageRange[1]}</Text>
      {/*   -slider     */}
      <Slider
        minimumValue={18}
        maximumValue={60}
        step={1}
        value={ageRange[0]}
        onValueChange={(value) => setAgeRange([value, ageRange[1]])}
      />
      <Slider
        minimumValue={18}
        maximumValue={60}
        step={1}
        value={ageRange[1]}
        onValueChange={(value) => setAgeRange([ageRange[0], value])}
      />
      <View style={{ textAlign: 'right', writingDirection: 'rtl', styles.option }}>
        <Text accessibilityLabel=t("תוכן נגיש")>{t("  t(")}</Text accessibilityLabel=")תוכן נגיש">
        <Switch value={locationEnabled} onValueChange={setLocationEnabled} />
      
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>
      <View style={{ textAlign: 'right', writingDirection: 'rtl', styles.option }}>
        <Text accessibilityLabel=t("תוכן נגיש")>{t("  t(")}</Text accessibilityLabel=")תוכן נגיש">
        <Switch value={sharedInterests} onValueChange={setSharedInterests} />
      
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>
      <Button title=" t(" accessibilityRole=")buttont(" accessibilityLabel=") " onPress={applyFilters} />
    
  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>
  );
};
const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  label: { marginTop: 10 },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12
  }
});
export default SmartFiltersScreen;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
