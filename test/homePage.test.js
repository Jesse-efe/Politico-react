import React from 'react';
import { shallow } from 'enzyme';
import Home from '../src/components/cotainers/Home';
import Header from '../src/components/presentational/Header';
import Body from '../src/components/presentational/Body';
import Navbar from '../src/components/presentational/Navbar';
import Footer from '../src/components/presentational/Footer';
import LinkButtons from '../src/components/presentational/LinkButtons';

describe('<Home />', () => {
  it('it renders Header component', () => {
    const h = shallow(<Header />);
    expect(h.find('div').length).toEqual(1);
  });
  it('it renders Header with props component', () => {
    const h = shallow(<Header isHomepage />);
    expect(h.find('div').length).toEqual(2);
  });
  it('it renders Body component', () => {
    const h = shallow(<Body />);
    expect(h.find('section').length).toEqual(2);
  });
  it('it renders Footer component', () => {
    const h = shallow(<Footer />);
    expect(h.find('footer').length).toEqual(1);
  });
  it('it renders LinkButtons component', () => {
    const h = shallow(<LinkButtons value={'button'} location={'/'} className={'big'} />);
    expect(h.find('button').length).toEqual(1);
  });
  it('it renders Navbar component', () => {
    const h = shallow(<Navbar />);
    expect(h.find('li').length).toEqual(3);
  });
  it('it renders home component', () => {
    const h = shallow(<Home />);
    expect(h.find('div').length).toEqual(1);
  });
});
