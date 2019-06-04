import React from 'react';
import { shallow } from 'enzyme';
import SignUpForm from '../src/components/presentational/SignUpForm';

describe('<SignUpForm />', () => {
  it('it renders SignUpForm component', () => {
    const h = shallow(<SignUpForm />);
    expect(h.find('div').length).toEqual(1);
  });
  it('it has a form', () => {
    const h = shallow(<SignUpForm />);
    expect(h.find('form').length).toEqual(1);
  });
});
