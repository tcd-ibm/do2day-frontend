import React from "react";
import Tasks from "./Tasks";
import './App.css';

class App extends Tasks {

  state = { tasks : [], currentTask: ""};

  render(){

    const { tasks } = this.state;
    return(

      <div className="App flex">
        <div className="appContainer">

          <h1 className="title">Do2Day</h1>

          <form onSubmit={this.handleSubmit} className="flex" style={{ margin: "15px 0" }}>

            <input type="text" placeholder="New task..." style={{ width: "75%" }} value={this.state.currentTask} onChange={this.handleChange} required={true}/>
            <button type="submit" style={{ height: "30px" }}> ➕ </button>

          </form>

          <div>

            { tasks.map((task) => (

              <div key={ task._id } className="taskflex taskContainer">

                <input type="checkbox" className="checkbox" checked={task.completed} onClick={() => this.handleUpdate(task._id)} />
                <span className={ task.completed ? "task completed" : "task"}> { task.task } </span>
                <button type="button" className="btn" onClick={() => this.handleDelete(task._id)}> delete </button>

              </div>


            ))}

          </div>
        </div>
      </div>


    );
  }
}

export default App;
