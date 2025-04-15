import { theme } from '../../theme/theme';
import * as apiService from '@services/apiService';
import FadeInView from '../components/FadeInView';
  const auth = getAuth();
  const currentUser = auth.currentUser;
  if (!currentUser) return;
import { db } from '../firebase/firebase';
        setLoading(false);
      } catch (error) {
}
        console.error(t("  :"), error);
      }
    };
    fetchAnswers();
  }, []);
  const analyzeAnswers = (answers) => {
}
    const filled = answers.filter(a => a && a.length > 10).length;
    const score = Math.round((filled / answers.length) * 100);
    let summary = t("      .");
    if (score < 50) summary = t("         .");
    else if (score > 80) summary = t("/ /      .");
    return {
}
      readiness: score,
      summary
    };
  };
  if (loading) return <ActivityIndicator size=t("large") color=t("#d81b60") style={{
} textAlign: 'right', writingDirection: 'rtl', { marginTop: 50 }}} />;
  return (<View>
  {!loading && data?.length === 0 && (
    <View style={{ alignItems: 'center', marginTop: 30 }}>
      <Text style={{ fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16, color: '#888' }}>
        אין עדיין תוכן כאן – זה הזמן ליצור חיבורים חדשים!
      </Text>
    
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
  )}


  {!loading && (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <Text style={{ fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 18, fontWeight: 'bold', color: '#ff4081' }}>
        התחל/י עכשיו – החיבור הבא שלך מחכה כאן!
      </Text>
    </View>
  )}

</View>);<FadeInView>

    <ScrollView style={{
} textAlign: 'right', writingDirection: 'rtl', styles.container }}>
      <LazyImage
        source={require('../../assets/logo/GoDate_Logo_compressed.webp')}
        style={{
}
          width: 160,
          height: 160,
          resizeMode: 'contain',
          alignSelf: 'center',
          marginVertical: 20
        }}
      />

      <Text accessibilityLabel=" t(" style={{
} textAlign: 'right', writingDirection: 'rtl', styles.title }}>{t(")LovePath    ")}</Text>
      <Text accessibilityLabel=" t(" style={{
} textAlign: 'right', writingDirection: 'rtl', styles.label }}>{t(")  :")}</Text>
      <Text accessibilityLabel=" " style={{
} textAlign: 'right', writingDirection: 'rtl', styles.score }}>{analysis.readiness}%</Text>
      <Text accessibilityLabel=" " style={{
} textAlign: 'right', writingDirection: 'rtl', styles.summary }}>{analysis.summary}</Text>
      <Text accessibilityLabel=" t(" style={{
} textAlign: 'right', writingDirection: 'rtl', styles.next }}>{t(")      1  ")}</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#d81b60',
    marginBottom: 20
  },
  label: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
    marginBottom: 8
  },
  score: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4caf50',
    textAlign: 'center',
    marginBottom: 12
  },
  summary: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20
  },
  next: {
    fontFamily: theme.fonts.regular,
    textAlign: theme.textAlign,
    fontSize: 16,
    textAlign: 'center',
    color: '#1976d2'
  }
});

export default LovePathResults;

// Firestore collection reference: users
// collection(db, "users")

// Firestore collection reference: matches
// collection(db, "matches")

// Firestore collection reference: messages
// collection(db, "messages")

// Firestore collection reference: notifications
// collection(db, "notifications")
