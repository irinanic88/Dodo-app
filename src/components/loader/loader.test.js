import React from "react";
import Enzyme, {mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Loader from '@loader';

Enzyme.configure({ adapter: new Adapter() });

describe('Loader', () => {
   it('should render', () => {
      const wrapper = mount(<Loader />);
      expect(wrapper.find('[data-id="loader"]').length).toBe(1);
   });
});