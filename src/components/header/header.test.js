import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Header } from './header';

Enzyme.configure({adapter: new Adapter});

describe('Header', () => {
    it('should render', () => {
        const wrapper = mount(<Header />);
        expect(wrapper.find('[data-id="header"]').length).toBe(1);
    });

});