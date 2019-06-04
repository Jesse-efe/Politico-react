import React from 'react';
import { shallow } from 'enzyme';
import SignUpForm from '../src/components/presentational/SignUpForm';
import TextInput from '../src/components/presentational/TextInput';

describe('<SignUpForm />', () => {
  it('it renders SignUpForm component', () => {
    const h = shallow(<SignUpForm />);
    expect(h.find('TextInput').length).toEqual(7);
  });
  it('it has a form', () => {
    const h = shallow(<SignUpForm />);
    expect(h.find('form').length).toEqual(1);
  });
});
