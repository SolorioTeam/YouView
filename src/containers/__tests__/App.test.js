import React from 'react';
import App from '../App';
import {shallow} from 'enzyme';

describe("App", ()=>{
    it('that app doesnt crash', ()=>{
        shallow(<App/>);
    });
});