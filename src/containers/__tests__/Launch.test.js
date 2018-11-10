import React from 'react';
import Launch from '../Launch';
import {shallow} from 'enzyme';
import Footer from '../../components/Footer';

describe("Launch", ()=>{
    let mountedLaunch;

    beforeEach(()=>{
        mountedLaunch = shallow(<Launch/>);
    });

    it('that Launch doesnt crash', ()=>{
        shallow(<Launch/>);
    });

    it('renders a button', ()=>{
        let button = mountedLaunch.find('button');
        expect(button.length).toBe(1);
    });

    it('contains a Footer Component', ()=>{
        const footer = mountedLaunch.find('Footer');
        expect(footer.length).toBe(1);
    });
});