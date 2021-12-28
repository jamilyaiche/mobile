import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { Text, TouchableOpacity, TextInput as RNTextInput, Pressable } from 'react-native'
import DSCard from './DSCard'
jest.mock('rn-fetch-blob', () => {
    return {
      fs: {
        dirs: {
          DocumentDir: ''
        },
        writeFile: () => Promise.resolve()
      }
    }
  })
  jest.mock('react-native-x2-carousel', () => {
    return {
      fs: {
        dirs: {
          DocumentDir: ''
        },
        writeFile: () => Promise.resolve()
      }
    }
  })
describe('DSCard tests', () => {
  it('test default DSCard snapshot', () => {
    const wrapper = renderer.create(<DSCard></DSCard>)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test default DSCard with text snapshot', () => {
    const wrapper = renderer.create(<DSCard><Text>Test</Text></DSCard>)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
 
})
