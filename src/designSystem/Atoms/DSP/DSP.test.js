import React from 'react';
import renderer from 'react-test-renderer'
import DSP from "./DSP"

describe("DSP tests",()=>{
    it('test render DSP',()=>{
        const wrapper=renderer.create(<DSP></DSP>)
        .toJSON()
        expect(wrapper).toMatchSnapshot()
    })
    it('test render DSP text',()=>{
        const wrapper=renderer.create(<DSP>test</DSP>)
        .toJSON()
        expect(wrapper).toMatchSnapshot()
    })
    it('test render DSP text left',()=>{
        const wrapper=renderer.create(<DSP textAlign={'left'}>test</DSP>)
        .toJSON()
        expect(wrapper).toMatchSnapshot()
    })
})