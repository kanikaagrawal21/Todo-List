import { useReducer } from "react";
import ListContext from "./list-context";

const defaultListState = {
    items: [],
};

const listReducer = (state, action) => {
    if (action.type === 'ADD'){
        const updatedList = [...state.items];
        updatedList.push(
            {
                task: action.item,
                id: Math.floor(Math.random()*1000)+1,
                taskStatus: false,
            }
        );

        return {
            items: updatedList
        }
    } else if (action.type === 'TODO'){
        const updatedList = [...state.items];
        
        for (let i=0; i<updatedList.length; i++){
            if (updatedList[i].id === action.id){
                updatedList[i].taskStatus = false;
                break;
            }
        }

        return {
            items: updatedList
        }
    } else if (action.type === 'DONE'){
        const updatedList = [...state.items];
        
        for (let i=0; i<updatedList.length; i++){
            if (updatedList[i].id === action.id){
                updatedList[i].taskStatus = true;
                break;
            }
        }

        return {
            items: updatedList
        }
    } else if (action.type === 'CLEAR_DONE'){
        let updatedList = [...state.items];
        updatedList = updatedList.filter(item => item.taskStatus !== true);

        return {
            items: updatedList
        }
    }


    return defaultListState;
}

const ListProvider = (props) => {
    const [listState, dispatchListAction] = useReducer(listReducer, defaultListState);

    const addItemToList = (item) => {
        dispatchListAction({type: "ADD", item: item});
    }

    const todoTask = (id) => {
        dispatchListAction({type: "TODO", id: id});
    }

    const doneTask = (id) => {
        dispatchListAction({type: "DONE", id: id});
    }

    const clearDoneTasks = () => {
        dispatchListAction({type: "CLEAR_DONE"});
    }

    const listContext = {
        items: listState.items,
        addItem: addItemToList,
        todo: todoTask,
        done: doneTask,
        clear: clearDoneTasks,
    }

    return (
        <ListContext.Provider value={listContext}>
            {props.children}
        </ListContext.Provider>
    )

}

export default ListProvider;