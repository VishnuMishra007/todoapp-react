import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDoItem, deleteItem, updateItem } from "./store/todoListSlice";
import { DeleteButton, EditButton } from "./components/UXComponents";
import ListItem from "./components/ListItem";

function App() {
  const [listInput, setListInput] = useState('');
  const [listState, setListState] = useState([]);
  const [listItemUpdate, setListItemUpdate] = useState('');
  const inputRef = useRef();
  const dispatch = useDispatch();
  const listItems = useSelector((state)=> state.todoList);

  useEffect(() => {
    setListState(listItems);
  },[listItems]);

  const listInputHandler = (event) => {
    setListInput(event.target.value);
  }
  const addListHandler = () => {
    try{
      const uniqueId = Math.floor(100000 + Math.random()*900000);
      const listState = {id: uniqueId, value: listInput};
      console.log(listState);
      listInput.length>0 && dispatch(addToDoItem(listState));
      setListInput('');
    }catch(err){
      console.log(err);  
    }
  };

  const keyEventHandler = (event) => {
    if(event.key ==='Enter'){
      !!listItemUpdate ? updateListHandler() : addListHandler();
    }
  }

  const onEditHandler = (itemId) => {
    console.log('EditHandler Called');
    const ListItem = listState.find((item)=>item.id==itemId);
    setListInput(ListItem.value);
    setListItemUpdate(itemId);
    inputRef.current.focus();
  };

  const updateListHandler = () => {
    console.log('updateListHandler called');
    dispatch(updateItem({id: listItemUpdate, value: listInput}));
    setListInput('');
    setListItemUpdate('');
  };

  const onDeleteHandler = (itemId) => {
    console.log('DeleteHandler Called');
    dispatch(deleteItem(itemId));
    if(itemId===listItemUpdate){
      setListInput('');
      setListItemUpdate('');
    }
  };

  return (
    <div className="appcontainer">
      <div className="flex flex-col justify-center p-3 text-center m-2 mt-8 pb-8 rounded">
        <p className="text-6xl w-12/12 flex justify-center p-8 rounded font-semibold shadow-lg">📝 To Do List 📝</p>
        <div className="mt-16 mb-16 flex gap-0.5 justify-center overflow-auto">
          <input ref={inputRef} value={listInput} type="text" className="w-4/12 border rounded mr-1 p-1 focus:border-b-emerald-800" placeholder=" Type Your List Name Here ...  " onChange={listInputHandler} onKeyDown={ keyEventHandler}/>
          { !!!listItemUpdate && 
            <button className="border font-semibold bg-green-600 font-stretch-50% text-white w-18 rounded cursor-pointer hover:scale-x-105" onClick={addListHandler}>Add</button>
          }
            { !!listItemUpdate && 
            <button className="border font-semibold bg-green-600 font-stretch-50% text-white w-18 rounded cursor-pointer hover:scale-x-105" onClick={updateListHandler}>Update</button>
          }
          </div>
        <div className="flex flex-col justify-center self-center text-center w-8/12 shadow-lg p-10 rounded ">
          {listState.length>0 && listState.map((item)=>{
            return <ListItem key={item.id} item={item.value}><EditButton onEditHandler={() => onEditHandler(item.id)}/><DeleteButton onDeleteHandler={() => onDeleteHandler(item.id)}/></ListItem>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
