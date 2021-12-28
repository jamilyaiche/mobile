import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { Text, TouchableOpacity, TextInput as RNTextInput, Pressable } from 'react-native'
import DSHR from './DSHR'
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
describe('DSHR tests', () => {
  it('test default DSHR snapshot', () => {
    const wrapper = renderer.create(<DSHR/>)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test DSHR props snapshot', () => {
    const wrapper = renderer.create(<DSHR  
    size= 'medium'
    theme = 'primary'
    width= '50%'
    />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  
 
})
