export const EditButton = (props) => {
    const onEditHandler = () => {
        props.onEditHandler();
    }
    return (
        <button className="transform-view hover:scale-110 cursor-pointer ml-2 mr-2" onClick={onEditHandler}>
            <span>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-gray-800 w-10 h-10 mb-3.5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {" "}
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />{" "}
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            </span>
        </button>
    );
};

export const DeleteButton = (props) => {
    const onDeleteHandler = (event) => {
        props.onDeleteHandler(event);
    }
    return (
        <button className="transform-view hover:scale-110 cursor-pointer ml-2 mr-4" onClick={onDeleteHandler}>
            <span>
            <svg
                className="text-red-700 dark:text-red-700 w-11 h-11 mb-3.5 mx-auto"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
                />
            </svg>
            </span>
        </button>
    );
};
