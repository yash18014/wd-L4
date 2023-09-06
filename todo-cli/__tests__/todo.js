/* eslint-disable no-undef */
const todoList = require("../todo");
// let today = new Date().toLocaleDateString("en-CA");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

const dateobj = new Date();
const today = dateObj.toLocaleDateString("en-CA")


describe("Todolist Testing", () => {
  beforeAll(() => {
    add({
      title: "DAA algorithums",
      completed: false,
      dueDate: today,
    });
    add({
      title: "Complete Assignment",
      completed: false,
      dueDate: new Date(new Date().setDate(dateObj.getDate() - 1)).toLocaleDateString("en-CA"),
    });
    add({
      title: "Complete Wd-201",
      completed: false,
      dueDate: new Date(new Date().setDate(dateObj.getDate() + 1)).toLocaleDateString("en-CA"),
    });
    add({
      title: "node js learning",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Add a new todo in list", () => {
    const todoItemsCount = all.length;

    // let length = all.length;

    add({
      title: "node js learning",
      completed: false,
      // dueDate: new Date().toLocaleDateString("en-CA"),
      duedate: today,
    });

    expect(all.length).toBe(todoItemsCount+1);
  });

  test("Mark todo as a completed", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
    
  });

  test("retrive all todos that are overdue", () => {
    let listOfTodos = overdue();

    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate < today;
      })
    ).toBe(true);
  });

  test("retrive all todos that are dueToday", () => {
    let listOfTodos = dueToday();

    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate === today;
      })
    ).toBe(true);
  });

  test("retrive all todos that are dueLater", () => {
    let listOfTodos = dueLater();

    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate > today;
      })
    ).toBe(true);
  });
});
