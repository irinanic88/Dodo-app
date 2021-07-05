import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import {BoardPage} from "./boardPage";
import React from "react";

Enzyme.configure({adapter: new Adapter()});

const simulateBoardInfo = '123456789';
const simulateMatch = {params: {
        boardId: '123456789',
        ticketId: '1',
        }
    };
const mockStore = configureMockStore();
const store = (loading) => {
    return mockStore({
        loader: {
            loading: loading,
        },
        tickets: { '123456789': {
                '1': {
                    status: 'to do',
                    id: '1',
                    title: 'test',
                    description: 'render Description window',
                }
            }
        },
        columnsWithTickets: {
            'to do': {
                title: 'to do',
                boardId: '123456789',
                tickets: ['1'],
            },
            'in progress': {
                title: 'to do',
                boardId: '123456789',
                tickets: [],
            },
            'in review': {
                title: 'to do',
                boardId: '123456789',
                tickets: [],
            },
            'done': {
                title: 'to do',
                boardId: '123456789',
                tickets: [],
            },

        },
        columns: ['to do', 'in progress', 'in review', 'done'],
        board: {
            '123456789': '123456789'
        }
    });
}
const checkBoardIdDispatchMock = jest.fn();

describe('BoardPage', () => {
    it('should render', () => {
       const wrapper = mount(
           <MemoryRouter>
               <Provider store={store(false)}>
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
                <Provider store={store(false)}>
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