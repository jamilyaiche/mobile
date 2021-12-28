import { action } from '@storybook/addon-actions'
import { text, boolean, select, number, color, array } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import CenterView from '../CenterView'
import { Container, DatePicker } from '../../../src/designSystem/'

const TestDatePicker = (props) => {


  return (
        <Container>
                <DatePicker
                    placeholder={text('placeholder', 'Select', 'Options')}
                    onChange={(e) => {
                      action('onChange')
                    }}
                    label={text('label', 'label', 'Options')}
                    isInvalid={boolean('isInvalid', false, 'Options')}
                    errorMessage="this is an error message"
                    selectedDate={text('selectedDate', '', 'Options')} // format dd/mm/yyyy,
                />
        </Container>
  )
}

storiesOf('DatePicker', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('DatePicker', () => (
    <TestDatePicker
        selectedDate={text('selectedDate', '', 'Options')} 
        onChange={text('onChange', 'a callback function', 'Callbacks')}
    />
  ))