import React from "react";
import Enzyme, {mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { MemoryRouter } from 'react-router-dom';
import { DescriptionWindow } from './descriptionWindow';
import {CreateTicketWindow} from "../createTicketWindow/createTicketWindow";

Enzyme.configure({ adapter: new Adapter() });

const simulateColumns = ['one', 'two', 'three'];
const simulateBoardId = '123456789';
const simulateTicketId = '01';
const simulateTicket = {
    status: 'one',
    id: '01',
    title: 'first',
    description: 'first ticket description',
}
const changeStatusDispatcherMock = jest.fn();
const deleteTicketDispatcherMock = jest.fn();

describe('DescriptionWindow', () => {
   it('should render', () => {
       const wrapper = mount(
         <MemoryRouter>
             <DescriptionWindow columns={simulateColumns}
                                boardId={simulateBoardId}
                                ticketId={simulateTicketId}
                                ticket={simulateTicket}
                                changeStatusDispatcher={changeStatusDispatcherMock}
                                deleteTicketDispatcher={deleteTicketDispatcherMock}
             />
         </MemoryRouter>
       );
       expect(wrapper.find('[data-id="description-window"]')).toHaveLength(1);
   }) ;

    it('shouldn`t render if there`s no ticket in store', () => {
        const wrapper = mount(
            <MemoryRouter>
                <DescriptionWindow columns={simulateColumns}
                                   boardId={simulateBoardId}
                                   ticketId={simulateTicketId}
                                   ticket={undefined}
                                   changeStatusDispatcher={changeStatusDispatcherMock}
                                   deleteTicketDispatcher={deleteTicketDispatcherMock}
                />
            </MemoryRouter>
        );
        expect(wrapper.find('[data-id="description-window"]')).toHaveLength(0);
    });

    it('should display given ticket title', () => {
        const wrapper = mount(
            <MemoryRouter>
                <DescriptionWindow columns={simulateColumns}
                                   boardId={simulateBoardId}
                                   ticketId={simulateTicketId}
                                   ticket={simulateTicket}
                                   changeStatusDispatcher={changeStatusDispatcherMock}
                                   deleteTicketDispatcher={deleteTicketDispatcherMock}
                />
            </MemoryRouter>
        );
        expect(wrapper.find('h2').text()).toBe(simulateTicket.title);
    });

    it('should display given ticket number', () => {
        const wrapper = mount(
            <MemoryRouter>
                <DescriptionWindow columns={simulateColumns}
                                   boardId={simulateBoardId}
                                   ticketId={simulateTicketId}
                                   ticket={simulateTicket}
                                   changeStatusDispatcher={changeStatusDispatcherMock}
                                   deleteTicketDispatcher={deleteTicketDispatcherMock}
                />
            </MemoryRouter>
        );
        expect(wrapper.find('p').at(0).text()).toBe(simulateTicket.id);
    });

    it('should display given ticket description', () => {
        const wrapper = mount(
            <MemoryRouter>
                <DescriptionWindow columns={simulateColumns}
                                   boardId={simulateBoardId}
                                   ticketId={simulateTicketId}
                                   ticket={simulateTicket}
                                   changeStatusDispatcher={changeStatusDispatcherMock}
                                   deleteTicketDispatcher={deleteTicketDispatcherMock}
                />
            </MemoryRouter>
        );
        expect(wrapper.find('p').at(1).text()).toBe(simulateTicket.description);
    });

    it('constructs select options from given array', () => {
        const wrapper = mount(
            <MemoryRouter>
                <DescriptionWindow columns={simulateColumns}
                                   boardId={simulateBoardId}
                                   ticketId={simulateTicketId}
                                   ticket={simulateTicket}
                                   changeStatusDispatcher={changeStatusDispatcherMock}
                                   deleteTicketDispatcher={deleteTicketDispatcherMock}
                />
            </MemoryRouter>
        );
        expect(wrapper.find('option')).toHaveLength(3);
        expect(wrapper.findWhere(node => {
            return node.type() === 'option' && node.text() === 'one'
        })).toHaveLength(1);
    });

    it('ticket`s status option should be selected by default', () => {
        const wrapper = mount(
            <MemoryRouter>
                <DescriptionWindow columns={simulateColumns}
                                   boardId={simulateBoardId}
                                   ticketId={simulateTicketId}
                                   ticket={simulateTicket}
                                   changeStatusDispatcher={changeStatusDispatcherMock}
                                   deleteTicketDispatcher={deleteTicketDispatcherMock}
                />
            </MemoryRouter>
        );
        expect(wrapper.find('select').props().value).toBe(simulateTicket.status);
    });
});

