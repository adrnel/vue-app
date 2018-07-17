import { shallow } from '@vue/test-utils';
import Hello from '../../src/views/Home.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Adrian`s Store Adrian`s Store sells all kinds of climbing stuff and rubiks cube like puzzles';
    
    const wrapper = shallow(Hello);

    expect(wrapper.text()).toMatch(msg);
  });
});
