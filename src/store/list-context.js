import React from "react";

const ListContext = React.createContext(
    {
        items: [],
        addItem: (item) => {},
        todo: (id) => {},
        done: (id) => {},
        clear: () => {},
    }
)

export default ListContext;