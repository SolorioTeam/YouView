import React from 'react';
import {shallow} from 'enzyme';
import Footer from '../Footer';

describe("Footer", ()=>{
    
    let mountedFooter;

    beforeEach(()=>{
        mountedFooter = shallow(<Footer/>);
    });

    it('renders the Footer Component without crashing', ()=>{
        shallow(<Footer />);
    });

    it('contains a footer element', ()=>{
        const footer = mountedFooter.find('footer');
        expect(footer.length).toBe(1);
    });
    it('contains back to top button', ()=>{
        const backToTopButton = mountedFooter.find('button.backToTop');
        expect(backToTopButton.length).toBe(1);
    });

    it('contains copyrights p', ()=>{
        const copyrights = mountedFooter.find('p.copyrights');
        expect(copyrights.length).toBe(1);
    });

    it('contains about company link', ()=>{
        const companyLink = mountedFooter.find('a.companyLink');
        expect(companyLink.length).toBe(1);
    });
    
    it('contains social media buttons', ()=>{
        expect(mountedFooter.find('span.socialmedia-btns').children()).toHaveLength(4);
    });

});