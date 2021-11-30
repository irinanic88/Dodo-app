import React from "react";
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';

import { MemoryRouter } from 'react-router-dom';

import {BoardPage} from "./boardPage";

Enzyme.configure({adapter: new Adapter()});

const simulateBoardInfo = '123456789';
const simulateMatch = {params: {
        boardId: '123456789',
        ticketId: '1',
        }
    };
const mockStore = configureMockStore();
const store = mockStore({
        tickets: { '123456789': {
                '1': {
                    status: 'To Do',
                    id: '1',
                    title: 'test',
                    description: 'render Description window',
                }
            }
        },
        columnsWithTickets: {
            'To Do': {
                title: 'To Do',
                boardId: '123456789',
                tickets: ['1'],
            },
            'In Progress': {
                title: 'To Do',
                boardId: '123456789',
                tickets: [],
            },
            'In Review': {
                title: 'To Do',
                boardId: '123456789',
                tickets: [],
            },
            'Done': {
                title: 'To Do',
                boardId: '123456789',
                tickets: [],
            },

        },
        columns: ['To Do', 'In Progress', 'In Review', 'Done'],
        board: {
            '123456789': '123456789'
        }
    });

const checkBoardIdDispatchMock = jest.fn();

describe('BoardPage', () => {
    it('should render', () => {
       const wrapper = mount(
           <MemoryRouter>
               <Provider store={store}>
                   <BoardPage boardInfo={simulateBoardInfo}
                              match={simulateMatch}
                              checkBoardIdDispatch={checkBoardIdDispatchMock}
                   />
               </Provider>
           </MemoryRouter>
       );
       expect(wrapper.find('[data-id="board-page"]').length).toBe(1);
    });

    it('should run checkBoardIdDispatch when renders', () => {
        const wrapper = mount(
            <MemoryRouter>
                <Provider store={store}>
                    <BoardPage boardInfo={simulateBoardInfo}
                               match={simulateMatch}
                               checkBoardIdDispatch={checkBoardIdDispatchMock}
                    />
                </Provider>
            </MemoryRouter>
        );
        expect(checkBoardIdDispatchMock.mock.calls.length).toBe(1);
    })
});