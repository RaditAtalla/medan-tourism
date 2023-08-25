export const checkFormValid = (validations, message) => {
  if (validations) {
    if (Platform.OS === 'android') {
      return ToastAndroid.show(message, ToastAndroid.SHORT)
    }
    return Alert(message)
  }
}
