import Enzyme, {mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Ticket } from './ticket';
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import {MemoryRouter} from 'react-router-dom';
import React from "react";

Enzyme.configure({ adapter: new Adapter() });

const ticket = {
    id: "100",
    title: "Show ticket",
    status: "to do",
}

describe('Ticket', () => {
    it('should render', () => {
        const wrapper = mount(
            <MemoryRouter>
                <DragDropContext onDragEnd={()=>{}}>
                    <Droppable droppableId={'id'}>
                        {(provided) => {
                            return (
                            <div ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                <Ticket ticket={ticket} index={1} />
                            </div>)
                        }
                        }
                    </Droppable>
                </DragDropContext>
            </MemoryRouter>
        );
        expect(wrapper.find('[data-id="ticket"]').length).toBe(1);
    });

    it('should display given ticket information', () => {
        const wrapper = mount(
            <MemoryRouter>
                <DragDropContext onDragEnd={()=>{}}>
                    <Droppable droppableId={'id'}>
                        {(provided) => {
                            return (
                                <div ref={provided.innerRef}
                                     {...provided.droppableProps}
                                >
                                    <Ticket ticket={ticket} index={1} />
                                </div>)
                        }
                        }
                    </Droppable>
                </DragDropContext>
            </MemoryRouter>
        );
        expect(wrapper.find('[data-id="title"]').text()).toBe(ticket.title);
        expect(wrapper.find('[data-id="number"]').text()).toBe(ticket.id);
    });

});