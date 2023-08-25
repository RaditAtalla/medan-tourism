import { View, Image, Text, StyleSheet } from 'react-native'
import { useState } from 'react'

export default function BeritaDanEventCard({ CardContent, CardImage, CardTitle, CardDescription, CardDate }) {
  let height
  {
    CardContent == 'news' ? (height = 98) : (height = 120)
  }

  const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 24
    },
    cardImg: {
      width: 131,
      height: height,
      borderRadius: 4
    },
    cardData: {
      width: 230,
      height: height,
      marginLeft: 10,
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    cardTitle: {
      fontSize: 14,
      fontWeight: '700',
      fontFamily: 'Poppins-Bold',
      color: '#252525'
    },
    cardDescription: {
      fontSize: 10,
      fontWeight: '500',
      fontFamily: 'Poppins-Medium',
      color: '#3b4949'
    },
    cardDate: {
      fontSize: 10,
      fontWeight: '500',
      fontFamily: 'Poppins-Medium',
      color: '#828282'
    }
  })

  return (
    <View style={styles.card}>
      <Image style={styles.cardImg} source={CardImage} />
      <View style={styles.cardData}>
        <View>
          <Text style={styles.cardTitle}>{CardTitle}</Text>
        </View>
        <View>
          <Text style={styles.cardDescription}>{CardDescription}</Text>
        </View>
        <View>
          <Text style={styles.cardDate}>{CardDate}</Text>
        </View>
      </View>
    </View>
  )
}
