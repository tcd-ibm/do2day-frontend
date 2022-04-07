import React from "react";
import Tasks from "./Tasks";
import { ReactComponent as AppLogo } from './assets/logo.svg';
import './App.css';


class App extends Tasks {

  state = { tasks : [], currentTask: ""};

  render(){

    const { tasks } = this.state;
    return(

      <div className="App flex">
        <div className="appContainer">

        <div class="container taskContainer bg-white rounded-xxl">

          <div class="centerSVG">
            <AppLogo class="" data-testid="logo"/>
          </div>

            <div class="flex justify-center pb-1">
            
              <form onSubmit={this.handleSubmit} class="flex input-group relative flex-wrap items-stretch w-full mb-4 mt-5 mr-10 ml-10">

                <input type="text" class=" font-sans form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none" placeholder="Add new task..." style={{ width: "75%" }} value={this.state.currentTask} onChange={this.handleChange} required={true}/>

                <button type="submit" class="bg-accent transition duration-400 hover:bg-indigo-700 hover:scale-105 text-white font-bold py-2 px-2 ml-2  rounded-full"> 

                  <svg class="w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>

                </button>
              </form>
          </div>


        </div>
          
    

          <div class="pt-1">

            { tasks.map((task) => (

              <div key={ task._id } className="taskflex taskContainer fade-in ">
                <div class="block">
                  <label class="inline-flex items-center">
                    <input type="checkbox" class="w-6 h-6 ml-3 rounded-full focus:ring-0 text-emerald-400" checked={task.completed} onClick={() => this.handleUpdate(task._id)} />
                    <span class="select-none"className={ task.completed ? "task completed" : "task"}> { task.task } </span>             
                  </label>
                </div>

                <button type="button" class="delbtn text-gray-300 hover:text-red-500 hover:scale-110 transition duration-300 " onClick={() => this.handleDelete(task._id)}> 
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                 </button>

              </div>


            ))}

          </div>
        </div>
      </div>


    );
  }
}

export default App;
