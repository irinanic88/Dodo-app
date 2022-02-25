import React from "react";
import Enzyme, {mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import configureMockStore from 'redux-mock-store';
import { Provider } from "react-redux";

import { Board }  from '@board';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({
    tickets: {1: {}},
});
const simulateBoardId = "123456789";
const loadTicketsDispatchMock = jest.fn();
const loadColumnsDispatchMock = jest.fn();
const changeStatusDispatchMock = jest.fn();


describe('Board', () => {
    it('should render', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Board boardId={simulateBoardId}
                       loadTicketsDispatch={loadTicketsDispatchMock}
                       loadColumnsDispatch={loadColumnsDispatchMock}
                       changeStatusDispatch={changeStatusDispatchMock}/>
            </Provider>
            );
        expect(wrapper.find('[data-id="board"]').length).toBe(1);
    });

    it('should render given column quantity', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Board boardId={simulateBoardId}
                       loadTicketsDispatch={loadTicketsDispatchMock}
                       loadColumnsDispatch={loadColumnsDispatchMock}
                       changeStatusDispatch={changeStatusDispatchMock}/>
            </Provider>
        );
        expect(wrapper.find('[data-id="column-wrapper"]').length).toBe(4);
    });

    it('should load tickets only once', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Board boardId={simulateBoardId}
                       loadTicketsDispatch={loadTicketsDispatchMock}
                       loadColumnsDispatch={loadColumnsDispatchMock}
                       changeStatusDispatch={changeStatusDispatchMock}/>
            </Provider>
        );
    expect(loadTicketsDispatchMock.mock.calls.length).toBe(1);
    });

});