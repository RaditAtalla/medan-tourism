import Geolocation from '@react-native-community/geolocation'
import { useEffect } from 'react'
import { PermissionsAndroid } from 'react-native'
import { useDispatch } from 'react-redux'
import { setLocation } from '../store/features/locationSlice'
import { getLocationName } from './location'

const LocationPermission = () => {
  const dispatch = useDispatch()

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      async (position) => {
        const coords = position.coords
        const address = await getLocationName(coords.latitude, coords.longitude)
        dispatch(setLocation({ ...coords, address }))
      },
      (error) => {
        console.log(error.code, error.message)
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    )
  }

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
        title: 'Medan Tourism Location Permission',
        message: 'Medan Tourism needs access to your location ' + 'so we can help you to work in this app.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK'
      })

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getLocation()
        return true
      } else {
        return false
      }
    } catch (err) {
      console.warn(err)
      return false
    }
  }

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestCameraPermission()
    } else if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization()
      getLocation()
    }
  }, [])

  return null
}

export default LocationPermission
