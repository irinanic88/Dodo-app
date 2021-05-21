import Enzyme, {mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import configureMockStore from 'redux-mock-store';
import { Provider } from "react-redux";
import { Board }  from './board';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({
    tickets: {1: {}},
});

const titles = ['1', '2', '3'];
const loadTicketsMock = jest.fn();

describe('Board', () => {
    it('should render', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Board titles={titles} loadTickets={jest.fn()} changeStatusDispatcher={jest.fn()}/>
            </Provider>
            );
        expect(wrapper.find('[data-id="board"]').length).toBe(1);
    });

    it('should render given column quantity', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Board titles={titles} loadTickets={jest.fn()} changeStatusDispatcher={jest.fn()}/>
            </Provider>
        );
        expect(wrapper.find('[data-id="column-wrapper"]').length).toBe(3);
    });

    it('should load tickets only once', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Board titles={titles} loadTickets={loadTicketsMock} changeStatusDispatcher={jest.fn()}/>
            </Provider>
        );
    expect(loadTicketsMock.mock.calls.length).toBe(1);
    });

});