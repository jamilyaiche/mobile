import PropTypes from "prop-types";
import React from 'react'
import { Image, View } from 'react-native'
import { SvgUri } from 'react-native-svg'
import { usePrevious } from '../../../customHooks'
import RNFetchBlob from 'rn-fetch-blob'

const DSImage = (props) => {
  const [imageData, setImageData] = React.useState({
    width: 0,
    height: 0,
    ratio: 0,
    ext: ''
  })

  const prevSource = usePrevious(props.source)

  React.useEffect(() => {
    if (prevSource != props.source) {
      setImageData({
        width: 0,
        height: 0,
        ratio: 0,
        ext: ''
      })
    }
    if (typeof props.source === 'number') {
      const w = Image.resolveAssetSource(props.source).width
      const h = Image.resolveAssetSource(props.source).height
      const ratio = w / h
      setImageData({
        width: w,
        height: h,
        ratio: ratio,
        ext: ''
      })
    } else if (props.source.uri !== undefined) {
      Image.getSize(props.source.uri, (w, h) => {
        const ratio = w / h
        setImageData({
          width: w,
          height: h,
          ratio: ratio,
          ext: ''
        })
      })
    } else {
      setImageData({
        width: 0,
        height: 0,
        ratio: 1,
        ext: ''
      })
    }
  }, [])
  
  if (imageData.ratio != 0) {
    if (props.ratio == -1 )
    return (
      <View>
      <Image source={props.source} style={{ width:props.width?props.width: '100%' ,height:props.height?props.height: '100%',borderRadius:4}} />
      </View>
    )
    if (typeof props.source === 'number') {
      return (
        <View style={{ width: props.width ? props.width : '100%', aspectRatio: imageData.ratio }}>
          <Image source={props.source} style={{ width: props.width ? props.width : '100%', height:props.height?props.height: '100%', aspectRatio: imageData.ratio }} />
        </View>
      )
    }else if(props.source.uri !== undefined){
      return (
        <View style={{ width: props.width ? props.width : '100%', aspectRatio: imageData.ratio }}>
          <Image source={props.source} style={{ width: props.width ? props.width : '100%', height:props.height?props.height: '100%', aspectRatio: imageData.ratio }} />
        </View>
      )
    }
     else {
      const SVG = props.source.default
      return (

        <SVG/>
      )
    }
  } else {
    return null
  }
}
DSImage.defaultProps = {
  width:'100%'
}
DSImage.propTypes = {
  source: PropTypes.object,
  width: PropTypes.any
}

export default DSImage
