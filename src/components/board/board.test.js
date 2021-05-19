import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Board } from './board';

Enzyme.configure({ adapter: new Adapter() });

const titles = ['1', '2', '3'];

describe('Board', () => {
    it('should render', () => {
        const wrapper = shallow(<Board titles={titles}/>);
        expect(wrapper.find('[data-id="board"]').length).toBe(1);
    });

    it('should render given column quantity', () => {
        const wrapper = shallow(<Board titles={titles}/>);
        expect(wrapper.find('[data-id="column"]').length).toBe(3);
    });

});