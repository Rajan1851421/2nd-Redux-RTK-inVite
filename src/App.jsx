import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { ShowTodos } from './features/TodoSlice';
import Navbar from './components/Navbar';

function App() {
  const dispatch = useDispatch();
  const { Todos } = useSelector((state) => state.Todo);

  console.log(Todos);

  useEffect(() => {
    dispatch(ShowTodos());
  }, [dispatch]);

  return (
    <>
      <Navbar />     

      <div className='bg-yellow-200 w-full p-4'>
        {Todos &&
          Todos.map((ele) => (
            <div key={ele.id} className='flex items-center'>
              <p>{ele.title}</p>
              {ele.completed ? (
                <input checked id="checked-checkbox" type="checkbox" value=""
                class="w-4 h-4 ml-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        
              ) : (
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 ml-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

              )}
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
