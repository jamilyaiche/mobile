import Share from 'react-native-share'

export async function shareFile (path) {
  const shareOptions = {
    url: path
  }
  try {
    const shareResponse = await Share.open(shareOptions)
  } catch (error) {
    console.log('error :', error)
  }
}