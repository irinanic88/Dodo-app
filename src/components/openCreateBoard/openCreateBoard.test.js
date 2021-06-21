import React from "react";
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {OpenCreateBoard} from "./openCreateBoard";

Enzyme.configure({ adapter: new Adapter() });

const simulateBoardId = '123456789';
const newBoardDispatch = jest.fn();

describe('OpenCreateBoard', () => {
   it('should render', () => {
       const wrapper = mount(<OpenCreateBoard createNewBoardDispatch={newBoardDispatch} />);
       expect(wrapper.find(`[data-id="open-create-board"]`).length).toBe(1);
   });
   it('should show Create button if there`s no boardId', () => {
       const wrapper = mount(<OpenCreateBoard createNewBoardDispatch={newBoardDispatch} />);
       expect(wrapper.find(`[data-id="create-new-board"]`).length).toBe(1);
       expect(wrapper.find(`[data-id="new-board-link"]`).length).toBe(0);
   });
    it('should show of new board if there is boardId', () => {
        const wrapper = shallow(<OpenCreateBoard newBoardId={simulateBoardId} createNewBoardDispatch={newBoardDispatch} />);
        expect(wrapper.find(`[data-id="new-board-link"]`).length).toBe(1);
        expect(wrapper.find(`[data-id="create-new-board"]`).length).toBe(0);
    });

});