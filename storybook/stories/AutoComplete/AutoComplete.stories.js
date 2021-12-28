import { action } from '@storybook/addon-actions'
import { text, boolean, select, number, color, array } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import CenterView from '../CenterView'
import { Container, AutoComplet } from '../../../src/designSystem/'

const TestAutoComplet = (props) => {
  const data = [
    { key: 0, label: 'Red Apples' },
    { key: 1, label: 'Cherries' },
    { key: 2, label: 'Cranberries' },
    { key: 3, label: 'Vegetable' }
  ]

  return (
        <Container>
                <AutoComplet
                    data={array('valididtyCriterias', data, ',', 'Options')}
                    placeholder={text('placeholder', 'Select', 'Options')}
                    onChange={(e) => {
                      action('onChange')
                    }}
                    selected={array('selected',[],',', 'Options')}
                    label={text('label', 'label', 'Options')}
                    selectableLabel={boolean('selectableLabel', false, 'Options')}
                    isInvalid={boolean('isInvalid', false, 'Options')}
                    errorMessage="this is an error message"
                    multiselect={boolean('multiselect', false, 'Options')}
                />
        </Container>
  )
}

storiesOf('AutoComplet', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('AutoComplet', () => (
    <TestAutoComplet
        selected={array('selected',[],',', 'Options')}
        onChange={text('onChange', 'a callback function', 'Callbacks')}
        onLabelLayout={text('onLabelLayout', 'a callback function', 'Callbacks')}
        onLabelLongPress={text('onLabelLongPress', 'a callback function', 'Callbacks')}
        onLabelPress={text('onLabelPress', 'a callback function', 'Callbacks')}
        onLabelTextLayout={text('onLabelTextLayout', 'a callback function', 'Callbacks')}
    />
  ))
