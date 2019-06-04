import React from 'react';
import { shallow } from 'enzyme';
import SignInForm from '../src/components/presentational/SignInForm';
import TextInput from '../src/components/presentational/TextInput';

describe('<SignInForm />', () => {
  it('it renders SignInForm component', () => {
    const h = shallow(<SignInForm />);
    expect(h.find('div').length).toEqual(1);
  });
  it('it renders TextInput component', () => {
    const h = shallow(<TextInput />);
    expect(h.find('input').length).toEqual(1);
  });
});
