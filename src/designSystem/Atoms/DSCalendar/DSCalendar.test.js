import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { Text, TouchableOpacity, TextInput as RNTextInput, Pressable } from 'react-native'
import DSCalendar from './DSCalendar'
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
describe('DSCalendar tests', () => {
  it('test default DSCalendar snapshot', () => {
    const wrapper = renderer.create(<DSCalendar />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test default DSCalendar Agneda snapshot', () => {
    const wrapper = renderer.create(<DSCalendar type={'Agenda'} />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('test  DSCalendar all props snapshot', () => {
    const wrapper = renderer.create(<DSCalendar 
  current={'2012-03-01'}
  minDate={'2012-05-10'}
  maxDate={'2012-05-30'}
  monthFormat={'yyyy MM'}
  hideArrows={true}
  renderArrow={(direction) => (<Arrow/>)}
  hideExtraDays={true}
  disableMonthChange={true}
  firstDay={1}
  hideDayNames={true}
  showWeekNumbers={true}
  disableArrowLeft={true}
  disableArrowRight={true}
  disableAllTouchEventsForDisabledDays={true}
  enableSwipeMonths={true}
    />)
      .toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
