import React from "react"
import Style from "../../../assets/styles/Style"
import { View, Text, Dimensions } from "react-native"
import PropTypes from 'prop-types'
import Carousel from 'react-native-x2-carousel'
import DSCarouselPagination from "./DSCarouselPagination"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BottomZero = (props) => {
  return (
    <DSCarouselPagination customConatainerStyle={{ bottom: 0 }} {...props} />
  )
}
const DSCarousel = (props) => {


  return (
    <View style={props.style}>
      <Carousel
        pagination={props.withoutMarginBottom ? BottomZero : DSCarouselPagination}
        renderItem={props.renderItem}
        data={props.data}
      />
    </View>
  )
}

DSCarousel.defaultProps = {
  style: Style.carousel,
  withoutMarginBottom: false
}

DSCarousel.propTypes = {
  style: PropTypes.object,
  renderItem: PropTypes.func,
  data: PropTypes.array,
  withoutMarginBottom: PropTypes.bool
}

export default DSCarousel