import Enzyme, {mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Board from './board';

Enzyme.configure({ adapter: new Adapter() });

const boardInfo = {titles: ['1', '2', '3'], tickets: null};

describe('Board', () => {
    it('should render', () => {
        const wrapper = mount(<Board boardInfo={boardInfo}/>);
        expect(wrapper.find('[data-id="board"]').length).toBe(1);
    });

    it('should render given column quantity', () => {
        const wrapper = mount(<Board boardInfo={boardInfo}/>);
        expect(wrapper.find('[data-id="column"]').length).toBe(3);
    });

});