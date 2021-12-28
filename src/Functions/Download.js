import RNFetchBlob from 'rn-fetch-blob'
import {readAndWrite} from './AndroidPermissions'
const downloadFile = (path,fileName,extension) => {
    const { fs } = RNFetchBlob
    const { DownloadDir } = fs.dirs
    if (Platform.OS === 'ios') {
      const dir = fs.dirs.DocumentDir
      RNFetchBlob.config({
        fileCache: true,
        path: `${dir}/${fileName}.${extension}`,
        appendExt: extension

      })
        .fetch('GET', path, {})
        .then((res) => {
          RNFetchBlob.ios.openDocument(res.data)
        }).catch(error => {
          console.log(error)
        })
    } else {
      RNFetchBlob.config({
        fileCache: true,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path: `${DownloadDir}/${fileName}.${extension}`,
          description: 'Downloading.'
        }
      })
        .fetch('GET', path, {})
        .then((res) => {
          RNFetchBlob.android.actionViewIntent(res.path())
        }).catch(error => {
          console.log(error)
        })
    }
  }

  export  async function  requestStroragePermission(path,fileName,extension){
    if (Platform.OS === 'ios') {
      downloadFile(path,fileName,extension)
    } else {
      try {
        const isGranted = await readAndWrite()
        if (isGranted) {
          downloadFile(path,fileName,extension)
        }
      } catch (err) {
        console.warn(err)
      }
    }
  }