"use client"
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
export default function Home() {

  
  return (
<Provider store={Store}>  
<AddTodo/>
<Todo/>
</Provider>
  );
}
