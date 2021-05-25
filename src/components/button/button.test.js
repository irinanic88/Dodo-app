import Enzyme, {mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Button } from './button';

Enzyme.configure({adapter: new Adapter});
const buttonName = 'Button name';
const onButtonClick = jest.fn();

describe('Button', () => {
   it('should render', () => {
        const wrapper = mount(<Button name={buttonName} onClick={onButtonClick} />);
        expect(wrapper.find('[data-id="button"]').length).toBe(1);
   });

   it('performs onButtonClick function when the button is clicked', () => {
      const wrapper = mount(<Button onClick={onButtonClick} />);
      wrapper.find('[data-id="button"]').simulate('click');
      expect(onButtonClick.mock.calls.length).toBe(1);
   });
});