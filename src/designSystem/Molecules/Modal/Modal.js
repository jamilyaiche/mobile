import PropTypes from 'prop-types'
import React from "react"
import { TouchableOpacity, View } from "react-native"
import Colors from "../../../assets/styles/Colors"
import Style from "../../../assets/styles/Style"
import DSIcon from "../../Atoms/DSIcon/DSIcon"
import DSModal from "../../Atoms/DSModal/DSModal"


class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false
        }
    }

    open = () => {
        this.setState({ isVisible: true })
    }

    close = () => {
        if (this.props.onCloseAction) {
            this.props.onCloseAction()
        }
        this.setState({ isVisible: false })
    }

    displayCloseButton=()=>{
        if(this.props.displayCloseButton){
            return(
                <View style={Style.modalCloseIconContainer}>
                    <TouchableOpacity onPress={this.close}  style={Style.btnCloseModal} >
                    <DSIcon name="x" size="extra-small" color={Colors.blue()} onPress={this.close} />
                    </TouchableOpacity>
                </View>
            )
        }
        return null
    }

    render() {
        let stModal = Style.centredModal
        let stContainerModal = null
        if (this.props.position === "bottom") {
            stModal = Style.bottomModal
            stContainerModal = Style.bottomModalContainer
        }
        return (

            <DSModal
                animationIn={this.props.animationIn}
                animationOut={this.props.animationOut}
                animationInTiming={this.props.animationInTiming}
                backdropTransitionInTiming={this.props.animationInTiming}
                animationOutTiming={this.props.animationOutTiming}
                backdropTransitionOutTiming={this.props.animationOutTiming}
                avoidKeyboard={this.props.avoidKeyboard}
                hasBackdrop={this.props.hasBackdrop}
                backdropOpacity={this.props.backdropOpacity}
                customBackdrop={this.props.customBackdrop}
                isVisible={this.state.isVisible}
                contentStyle={stModal}
                containerStyle={stContainerModal}
                closeOnBackdropPress={this.props.closeOnBackdropPress}
                closeModal={this.close}
            >
                {this.displayCloseButton()}
                <View style={Style.modalChildrenContainer} >
                {this.props.children}
                </View>
            </DSModal>
        )
    }
}
Modal.defaultProps={
    animationIn:'slideInUp',
    animationOut:'slideOutDown',
    animationInTiming:300,
    animationOutTiming:300,
    avoidKeyboard:false,
    hasBackdrop:true,
    backdropOpacity:0.7,
    customBackdrop:null,
    closeOnBackdropPress:false,
    contentStyle:Style.centredModal,
    displayCloseButton:false,
    position:"centred",
    title:''
}

Modal.PropTypes = {
    animationIn: PropTypes.oneOf([
        "bounceIn",
        "bounceInDown",
        "bounceInUp",
        "bounceInLeft",
        "bounceInRight",
        "fadeIn",
        "fadeInDown",
        "fadeInDownBig",
        "fadeInUp",
        "fadeInUpBig",
        "fadeInLeft",
        "fadeInLeftBig",
        "fadeInRight",
        "fadeInRightBig",
        "flipInX",
        "flipInY",
        "lightSpeedIn",
        "slideInDown",
        "slideInUp",
        "slideInLeft",
        "slideInRight",
        "zoomIn",
        "zoomInDown",
        "zoomInUp",
        "zoomInLeft",
        "zoomInRight",
    ]),
    animationOut: PropTypes.oneOf([
        "bounceOut",
        "bounceOutDown",
        "bounceOutUp",
        "bounceOutLeft",
        "bounceOutRight",
        "fadeOut",
        "fadeOutDown",
        "fadeOutDownBig",
        "fadeOutUp",
        "fadeOutUpBig",
        "fadeOutLeft",
        "fadeOutLeftBig",
        "fadeOutRight",
        "fadeOutRightBig",
        "flipOutX",
        "flipOutY",
        "lightSpeedOut",
        "slideOutDown",
        "slideOutUp",
        "slideOutLeft",
        "slideOutRight",
        "zoomOut",
        "zoomOutDown",
        "zoomOutUp",
        "zoomOutLeft",
        "zoomOutRight",
    ]),
    animationInTiming:PropTypes.number,
    animationOutTiming:PropTypes.number,
    avoidKeyboard:PropTypes.bool,
    hasBackdrop:PropTypes.bool,
    backdropColor:PropTypes.string,
    backdropOpacity:PropTypes.number,
    customBackdrop:PropTypes.node,
    closeOnBackdropPress:PropTypes.bool,
    closeModal:PropTypes.func,
    displayCloseButton:PropTypes.bool,
    position:PropTypes.oneOf(["centred","bottom"]),
    title: PropTypes.string
}

export default Modal
