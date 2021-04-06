const boardInfo = {
    columns: ['to do', 'in progress', 'on review', 'done'],
    tickets: [
        {
        id: 101,
        name: 'Create React app',
        status: 'done',
        description: 'Create folder for React-app. Use `create-react-app` in this folder',
        },
        {
        id: 102,
        name: 'Add structure',
        status: 'in progress',
        description: 'Add all necessary folders and files to the app folder: components folder, congig file, css file and so on',
        },
        {
        id: 103,
        name: 'Create Board Component',
        status: 'to do',
        description: 'Create Board component with props: columns and tickets, to take from config file for the moment',
        }
    ]
};

export {boardInfo};