import React from "react";
import Enzyme, {mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import configureMockStore from 'redux-mock-store';
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import { Provider } from "react-redux";
import {MemoryRouter} from 'react-router-dom';
import {Column} from "./column";

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({
    tickets: { '123456789': {
            '1': {
                status: 'To Do',
                id: '1',
                title: 'test',
                description: 'pass the test',
            },
            '2': {
                status: 'In Review',
                id: '2',
                title: 'test2',
                description: 'not pass the test',
            },
            '3': {
                status: 'To Do',
                id: '3',
                title: 'test3',
                description: 'pass the test',
            },
        }
    },

});

const simulateTickets = ['1', '2', '3'];

describe('Column', () => {
   it('should render', () => {
      const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <DragDropContext>
                        <Column columnTitle={'To Do'}
                                boardId={'123456789'}
                                tickets={simulateTickets} />
                    </DragDropContext>
                </MemoryRouter>
            </Provider>
      );
      expect(wrapper.find('[data-id="column"]').length).toBe(1);
   });

    it('should render with given amount of tickets', () => {
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <DragDropContext>
                        <Column columnTitle={'To Do'}
                                boardId={'123456789'}
                                tickets={simulateTickets} />
                    </DragDropContext>
                </MemoryRouter>
            </Provider>
        );
        expect(wrapper.find('[data-id="ticket"]').length).toBe(3);
    });
});