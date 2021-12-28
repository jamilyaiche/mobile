import React, { useState } from 'react'
import { TouchableOpacity, View, Text, Platform, Modal as ReactModal, SafeAreaView } from 'react-native'
import Style from '../../src/assets/styles/Style'
import DocumentPicker from 'react-native-document-picker'
import PropTypes from 'prop-types'
import ImagePicker from 'react-native-image-crop-picker'
import { Label, Icon,Modal,Button } from '../designSystem/index'
import Colors from '../../src/assets/styles/Colors'
import { RNCamera } from 'react-native-camera'

const Upload = (props) => {
  const [takingPic, setTakingPic] = useState(false)
  const refCamera = React.createRef()
  const [openCamera, setOpenCamera] = useState(false)
  const [isInvalid, setIsInvalid] = useState(false)
  const selectedModeModal = React.createRef()
  const onUpload = async () => {
    let allowed = []
    if (props.allowedTypes.includes('allFiles')) {
      allowed = [DocumentPicker.types.allFiles]
    } else {
      if (props.allowedTypes.includes('images')) {
        allowed.push(DocumentPicker.types.images)
      }
      if (props.allowedTypes.includes('doc')) {
        allowed.push(DocumentPicker.types.doc)
      }
      if (props.allowedTypes.includes('docx')) {
        allowed.push(DocumentPicker.types.docx)
      }
      if (props.allowedTypes.includes('xls')) {
        allowed.push(DocumentPicker.types.xls)
      }
      if (props.allowedTypes.includes('xlsx')) {
        allowed.push(DocumentPicker.types.xlsx)
      }
      if (props.allowedTypes.includes('pdf')) {
        allowed.push(DocumentPicker.types.pdf)
      }
      if (props.allowedTypes.includes('plainText')) {
        allowed.push(DocumentPicker.types.plainText)
      }
    }

    let res = []
    let file
    try {
      if (props.mulitple) {
        res = await DocumentPicker.pickMultiple({
          type: allowed,
          readContent: true,
          copyTo: 'documentDirectory'
        })

        props.handelData && props.handelData(res)
      } else if (!(props.allowedTypes.includes('images'))) {
        file = await DocumentPicker.pick({
          type: allowed,
          readContent: true,
          copyTo: 'documentDirectory'
        })
        let res = {}
        if (Platform.OS === 'ios') {
          res = {
            fileCopyUri: file.fileCopyUri,
            name: file.name,
            size: file.size,
            type: file.type,
            uri: file.fileCopyUri
          }
        } else {
          res = file
        }
        props.handelData && props.handelData(res)
      } else {
        selectedModeModal.current.open()
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        res = []
        props.handelData && props.handelData(res)
      } else {
        setIsInvalid(true)
      }
    }
  }
  const uploadImage = (mode) => {
    selectedModeModal.current.close()
    setTimeout(() => {
      if (mode === 'camera') {
        setOpenCamera(true)
      } else if (mode === 'galerie') {
        ImagePicker.openPicker({
          width: props.imageWidth,
          height: props.imageHeight,
          cropping: true
        }).then(image => {
          const path = image.path
          const aux = path.split('/')
          const res = {
            fileCopyUri: image.path,
            name: aux[aux.length - 1],
            size: image.size,
            type: image.mime,
            uri: image.path
          }
          props.handelData && props.handelData(res)
        })
      }
    }, 500)
  }
  const takePicture = async () => {
    if (refCamera && !takingPic) {
      const options = {
        quality: 0.85,
        fixOrientation: true,
        forceUpOrientation: true
      }
      setTakingPic(true)
      try {
        const data = await refCamera.current.takePictureAsync(options)
        openCropper(data)
      } catch (err) {
        console.log('Error', 'Failed to take picture: ' + (err.message || err))
        return
      } finally {
        setTakingPic(false)
        setOpenCamera(false)
      }
    }
  }
  const openCropper = (data) => {
    setTimeout(() => {
      ImagePicker.openCropper({
        path: data.uri,
        width: props.imageWidth,
        height: props.imageHeight
      }).then(image => {
        const path = image.path
        const aux = path.split('/')
        const res = {
          fileCopyUri: image.path,
          name: aux[aux.length - 1],
          size: image.size,
          type: image.mime,
          uri: image.path
        }
        props.handelData && props.handelData(res)
      })
    }, 800)
  }
  return (
    <>
      <TouchableOpacity
        onPress={onUpload}
      >
        {props.children}
      </TouchableOpacity>
      <Modal ref={selectedModeModal} closeOnBackdropPress={true} displayCloseButton={true} >
        <View>
          <Button
            theme='transparent'
            text='Prendre une photo'
            onPress={() => uploadImage('camera')}
          />
          <Button
            theme='transparent'
            text='Choisissez une image de votre galerie'
            onPress={() => uploadImage('galerie')}
          />
        </View>
      </Modal>
      <ReactModal
        animationType="slide"
        transparent={true}
        visible={openCamera}
      >
        <SafeAreaView style={{ flex: 1 }} >
          <RNCamera
            ref={refCamera}
            captureAudio={false}
            style={{ flex: 1 }}
            type={RNCamera.Constants.Type.back}
          />
          <View style={Style.btnCameraBackGround} >
            <Icon name='camera' size='medium' color={Colors.white()} style={{ justifyContent: 'center' }} onPress={() => takePicture()} />
          </View>
        </SafeAreaView>
      </ReactModal>
    </>
  )
}

Upload.propTypes = {
  allowedTypes: PropTypes.arrayOf(PropTypes.PropTypes.oneOf(['allFiles', 'images', 'plainText', 'audio', 'pdf', 'zip', 'csv', 'doc', 'docx', 'xls', 'xlsx'])),
  children: PropTypes.any,
  imageHeight: PropTypes.number,
  imageWidth: PropTypes.number,
  mulitple: PropTypes.bool,
  handelData: PropTypes.func
}

Upload.defaultProps = {
  allowedTypes: ['allFiles'],
  mulitple: false,
  imageHeight: 645,
  imageWidth: 933,
  handelData:(data)=> console.log(data)
}

export default Upload