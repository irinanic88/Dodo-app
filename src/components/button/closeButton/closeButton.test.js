import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { CloseButton } from './closeButton';

Enzyme.configure({adapter: new Adapter});

describe('CloseButton', () => {
    it('should render', () => {
        const wrapper = mount(<CloseButton />);
        expect(wrapper.find('[data-id="closeButton"]').length).toBe(1);
    });

});