import React from "react";
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {OpenCreateBoard} from "./openCreateBoard";
import {MemoryRouter} from "react-router-dom";
import {CreateTicketWindow} from "@createTicketWindow";

Enzyme.configure({ adapter: new Adapter() });

const simulateBoardId = '0123456789';
const newBoardDispatch = jest.fn();

describe('OpenCreateBoard', () => {
    it('should render', () => {
        const wrapper = mount(<OpenCreateBoard createNewBoardDispatch={newBoardDispatch} />);
        expect(wrapper.find(`[data-id="open-create-board"]`).length).toBe(1);
    });

    it('should disable Open button if the input is empty', () => {
        const wrapper = mount(<OpenCreateBoard createNewBoardDispatch={newBoardDispatch} />);
        wrapper.find('input').simulate('change', {target: {value: ''}});
        expect(wrapper.find('[data-id="open-button"]').find('[data-id="button"]').props().disabled).toEqual(true);
    });

    it('should enable Open button if the input is filled', () => {
        const wrapper = mount(<OpenCreateBoard createNewBoardDispatch={newBoardDispatch} />);
        wrapper.find('input').simulate('change', {target: {value: simulateBoardId}});
        expect(wrapper.find('[data-id="open-button"]').find('[data-id="button"]').props().disabled).toEqual(false);
    });

});