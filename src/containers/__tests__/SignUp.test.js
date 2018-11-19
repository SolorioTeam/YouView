import React from 'react';
import { shallow } from 'enzyme';
import SignUp from '../SignUp';

describe("Sign Up Form", () => {
    it("doesn't crash", () => {
        shallow(<SignUp />);
    });

    let mountedSignUp;
    beforeEach( () => {
        mountedSignUp = shallow(<SignUp/>);
    });

    it("includes a form", () => {
        let form = mountedSignUp.find('form');
        expect(form.length).toBe(1);
    });

    it("includes a submit button", () => {
        let button = mountedSignUp.find('button');
        expect(button.length).toBe(1);
    });

});