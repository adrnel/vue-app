import { shallow } from '@vue/test-utils';
import Product from '../../src/components/Product.vue';

describe('Product.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallow(Product, {propsData: { product: {
      name: 'Cube',
      currency: '£',
      price: 4.99,
      image: 'cube.jpg',
      long_desc: 'Cube Text'
    }}})
    const componentText = "Name: Cube Price: £4.99 Description: Cube Text Add to Basket"
    expect(wrapper.text()).toMatch(componentText);
  });
  it('matches snapshot', () => {
    const wrapper = shallow(Product, {propsData: { product: {
      name: 'Cube',
      currency: '£',
      price: 4.99,
      image: 'cube.jpg',
      long_desc: 'Cube Text'
    }}})
    expect(wrapper.html()).toMatchSnapshot()
  })

});
