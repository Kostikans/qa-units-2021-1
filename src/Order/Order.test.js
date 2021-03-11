import React from 'react'
import Order from './Order';
import { getDate } from '../utils/getDate';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import {fakeOrders} from "../data/fakeOrders";

jest.mock("../utils/getDate")
configure({ adapter: new Adapter() });

describe('Order.js', () => {

  afterEach(() => {
    jest.clearAllMocks();
  })


  it('render with no items', () => {
    const wrapper = shallow(<Order/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('default render', () => {
    const wrapper = shallow(<Order order={fakeOrders[0]}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('getDate call', () => {
    const wrapper = shallow(<Order order={fakeOrders[0]}/>);
    expect(getDate).toHaveBeenCalled()
  });


  it('no date and shops', () => {
    const order = {}
    const wrapper = shallow(<Order order={order}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });


  it('no items in order', () => {
    const order = {
      date: 243,
      shop: 'shop'
    }
    const wrapper = shallow(<Order order={order}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

