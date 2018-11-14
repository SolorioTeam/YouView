import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

describe("App", ()=>{
    const mountedApp = shallow(<App/>);

    it('that app doesnt crash', ()=>{
        shallow(<App/>);
    });

    it('renders the Launch Component when token is empty', ()=>{
        mountedApp.setState({token: ''});

        expect(mountedApp.state()).toHaveProperty('token');
        expect(mountedApp.instance().state.token).toBe('');
        expect(mountedApp.find('Launch').length).toBe(1);    
    });
 
});