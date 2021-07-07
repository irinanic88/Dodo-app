import React from "react";
import Enzyme, {mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { MemoryRouter } from 'react-router-dom';
import { CreateTicketWindow } from './createTicketWindow';


Enzyme.configure({ adapter: new Adapter() });

const simulateBoardId = '123456789';
const simulateStatuses = ['one', 'two', 'three'];
const createTicketRequestMock = jest.fn();


describe('CreateTicketWindow', () => {
    it('should render', () => {
       const wrapper = mount(
         <MemoryRouter>
             <CreateTicketWindow boardId={simulateBoardId}
                                 statuses={simulateStatuses}
                                 createTicketRequest={createTicketRequestMock}/>
         </MemoryRouter>
       );
       expect(wrapper.find('[data-id="create-ticket-window"]').length).toBe(1);
    });

    it('disables button if title input is empty', () => {
        const wrapper = mount(
            <MemoryRouter>
                <CreateTicketWindow boardId={simulateBoardId}
                                    statuses={simulateStatuses}
                                    createTicketRequest={createTicketRequestMock}/>
            </MemoryRouter>
        );
        wrapper.find('input').simulate('change', { target: {value: ''}});
        expect(wrapper.find('[data-id="button"]').props().disabled).toEqual(true);
    });

    it('enables button if title input is not empty', () => {
        const wrapper = mount(
            <MemoryRouter>
                <CreateTicketWindow boardId={simulateBoardId}
                                    statuses={simulateStatuses}
                                    createTicketRequest={createTicketRequestMock}/>
            </MemoryRouter>
        );
        wrapper.find('input').simulate('change', { target: {value: '1'}});
        expect(wrapper.find('[data-id="button"]').props().disabled).toEqual(false);
    });

    it('constructs select options from given array', () => {
        const wrapper = mount(
            <MemoryRouter>
                <CreateTicketWindow boardId={simulateBoardId}
                                    statuses={simulateStatuses}
                                    createTicketRequest={createTicketRequestMock}/>
            </MemoryRouter>
        );
        expect(wrapper.find('option')).toHaveLength(3);
        expect(wrapper.findWhere(node => {
            return node.type() === 'option' && node.text() === 'one'
        })).toHaveLength(1);
    });

});
