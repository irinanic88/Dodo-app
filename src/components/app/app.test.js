import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './app';
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';

Enzyme.configure({adapter: new Adapter()});

const titles = [];
const mockStore = configureMockStore();
const store = (displayCreateTicketWindow, displayDescriptionWindow, loading) => {
    return mockStore({
        modal: {
            displayCreateTicketWindow: {
                display: displayCreateTicketWindow
            },
            displayDescriptionWindow: {
                display: displayDescriptionWindow,
                ticketId: 1,
            },
        },
        loader: {
            loading: loading,
        },
        tickets: {1: {}},
    });
}

describe('App', () => {
    it('should render', () => {
       const wrapper = mount(
           <Provider store={store(false, false, false)}>
               <App titles={titles} />
           </Provider>);
       expect(wrapper.find('[data-id="app"]').length).toBe(1);
    });

    it('should render CreateTicketWindow when it`s display is true', () => {
        const wrapper =  mount(
            <Provider store={store(true, false, false,)}>
                <App titles={titles} />
            </Provider>);
        expect(wrapper.find('[data-id="createTicketWindow"]').length).toBe(1);
    });

    it('should not render CreateTicketWindow when it`s display is false', () => {
        const wrapper =  mount(
            <Provider store={store(false, false, false,)}>
                <App titles={titles} />
            </Provider>);
        expect(wrapper.find('[data-id="createTicketWindow"]').length).toBe(0);
    });

    it('should render DescriptionWindow when it`s display is true', () => {
        const wrapper =  mount(
            <Provider store={store(false, true, false,)}>
                <App titles={titles} />
            </Provider>);
        expect(wrapper.find('[data-id="descriptionWindow"]').length).toBe(1);
    });

    it('should not render DescriptionWindow when it`s display is false', () => {
        const wrapper =  mount(
            <Provider store={store(false, false, false,)}>
                <App titles={titles} />
            </Provider>);
        expect(wrapper.find('[data-id="descriptionWindow"]').length).toBe(0);
    });

    it('should render Loader when it`s display is true', () => {
        const wrapper =  mount(
            <Provider store={store(false, false, true,)}>
                <App titles={titles} />
            </Provider>);
        expect(wrapper.find('[data-id="loader"]').length).toBe(1);
    });

    it('should not render Loader when it`s display is false', () => {
        const wrapper =  mount(
            <Provider store={store(false, false, false,)}>
                <App titles={titles} />
            </Provider>);
        expect(wrapper.find('[data-id="loader"]').length).toBe(0);
    });
});