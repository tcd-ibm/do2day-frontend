import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
import { addTask, getTasks, updateTask, deleteTask } from "./services/taskServices";


jest.mock("./services/taskServices");

test("Title is being displayed", () => {
  render(<App />);
  expect(screen.getByRole('heading', {level:1})).toBeInTheDocument();
  // highlight-star
  // highlight-end
});

test("New task input is being displayed", () => {
  render(<App />);
  expect(screen.getByRole("textbox")).toBeInTheDocument();
  // highlight-star
  // highlight-end
});

test("Get tasks is being called", () => {
  render(<App />);
  // highlight-start
  expect(getTasks).toHaveBeenCalledTimes(1);
  // highlight-end
});


// describe("Testing App", () => {
//
//     it("renders basic elements", () => {
//       render(<App />);
//
//       expect(
//         screen.getByRole('heading', {level: 1})
//       ).toHaveTextContent("Do2Day");
//
//       expect(
//         screen.getByRole("textbox")
//       ).toBeInTheDocument();
//
//       expect(
//         screen.getByRole("button", { name: /➕/i })
//       ).toBeInTheDocument();
//
//
//     });
// });

const request = require('supertest');                          //already installed with npm i or not?
// const app = require("../App");                              //The folder where the app is maybe?

// describe('Test handleUpdate', () => {
//   it('tests endpoints', async() => {
//     const response = await request(app).handleUpdate("");
//     expect(response.statusCode).toBe("arbitrary number")    //Does our API return status codes?
//   })
// })

// describe('Test handleSubmit', () => {
//   it('tests endpoints', async() => {
//     const response = await request(app).handleSubmit("");   //Is request(app) correct?
//     expect(response.statusCode).toBe("arbitrary number")    //Does our API return status codes?
//   })
// })

// describe('Test handleDelete', () => {
//   it('tests endpoints', async() => {
//     const response = await request(app).handleDelete("");   //Is request(app) correct?
//     expect(response.statusCode).toBe("arbitrary number")    //Does our API return status codes?
//   })
// })

// describe('Test handleChange', () => {
//   it('tests endpoints', async() => {
//     const response = await request(app).handleDelete("");   //Is request(app) correct?
//     expect(response.statusCode).toBe("arbitrary number")    //Does our API return status codes?
//   })
// })
