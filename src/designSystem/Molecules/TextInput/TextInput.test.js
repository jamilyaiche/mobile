import React from 'react';
import renderer from 'react-test-renderer'
import TextInput from "./TextInput"
import DSTextInput from "../../Atoms/DSTextInput/DSTextInput"
import DSIcon from "../../Atoms/DSIcon/DSIcon"
import { shallow } from 'enzyme'

describe("TextInput tests",()=>{
    it('test render text input snapshot',()=>{
        const wrapper=renderer.create(<TextInput value="test" lable="Label" placeholder="Placeholder" />)
        .toJSON()
        expect(wrapper).toMatchSnapshot()
    })

    it('test text input value',()=>{
        const wrapper=shallow(<TextInput value="test" lable="Label" placeholder="Placeholder" />)
        expect(wrapper.find(DSTextInput).first().props().value===`test`)
        .toEqual(true)
    })

    it('test render password text input snapshot',()=>{
        const wrapper=renderer.create(<TextInput type='password' value="" lable="Label" placeholder="Placeholder" />)
        .toJSON()
        expect(wrapper).toMatchSnapshot()
    })

    it('test password type',()=>{
        const wrapper=shallow(<TextInput type='password' value="" lable="Label" placeholder="Placeholder" />)
        expect(wrapper.find(DSTextInput).first().props().secureTextEntry===true)
        .toEqual(true)
    })

    it('test render text input width right icon camera snapshot',()=>{
        const wrapper=renderer.create(<TextInput rightIcon="camera" value="" lable="Label" placeholder="Placeholder" />)
        .toJSON()
        expect(wrapper).toMatchSnapshot()
    })




    it('test render multiliane text input snapshot',()=>{
        const wrapper=renderer.create(<TextInput multiline value="" lable="Label" placeholder="Placeholder" />)
        .toJSON()
        expect(wrapper).toMatchSnapshot()
    })
    it('test render text input with error message snapshot',()=>{
        const wrapper=renderer.create(<TextInput errorMessage="error" value="" lable="Label" placeholder="Placeholder" />)
        .toJSON()
        expect(wrapper).toMatchSnapshot()
    })
    it('test all props Text Left input snapshot',()=>{
        const wrapper=renderer.create(
        <TextInput 
            autoCorrect={true}
            defaultValue='test'
            editable={false}
            errorMessage='test error msg'
            isInvalid='true'
            keyboardType='phone-pad'
            label='test'
            maxLength={10}
            multiline={true}
            numberOfLines={1}
            placeholder='test'
            placeholderTextColor='red'
            rightIcon='x'
            selectTextOnFocus={true}
            showIconOnleft={true}
            styleType='default'
            type='password'
            valididtyCriterias={[]}
            value='test'
             />)
        .toJSON()
        expect(wrapper).toMatchSnapshot()
    })
    it('test all props Right Icon Text input snapshot',()=>{
        const wrapper=renderer.create(
        <TextInput 
            autoCorrect={true}
            defaultValue='test'
            editable={false}
            errorMessage='test error msg'
            isInvalid='true'
            keyboardType='phone-pad'
            label='test'
            maxLength={10}
            multiline={true}
            numberOfLines={1}
            placeholder='test'
            placeholderTextColor='red'
            rightIcon='x'
            selectTextOnFocus={true}
            showIconOnleft={false}
            styleType='default'
            type='password'
            value='test'
            valididtyCriterias={[{text:"> 8 caractères" ,valid:false},{text:"1 majuscule" ,valid:true},{text:"> 1 caractère spécial" ,valid:false}]}
             />)
        .toJSON()
        expect(wrapper).toMatchSnapshot()
    })
    
})