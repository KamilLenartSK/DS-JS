import ArrayStack from "../Stack.js";
import __ from "hamjest";

describe("Stack behaviour using Array", function () {
  let stack = null;
  beforeEach(() => {
    stack = new ArrayStack();
    stack.push("kamil");
    stack.push("joe");
    stack.push("jenna");
    stack.push("stephen");
  });

  it("contains elements", () => {
    __.assertThat(stack.isEmpty(), __.strictlyEqualTo(false));
  });

  it("is empty", () => {
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    __.assertThat(stack.isEmpty(), __.strictlyEqualTo(true));
  });

  it("correctly adds multiple elements into the stack", () => {
    __.assertThat(stack.size(), __.strictlyEqualTo(4));
  });

  it("correctly returns  the topmost element", () => {
    __.assertThat(stack.peek(), __.strictlyEqualTo("stephen"));
  });

  it("correctly removes  elements from the stack ", () => {
    stack.pop();
    stack.pop();
    __.assertThat(stack.size(), __.strictlyEqualTo(2));
  });

  afterEach(() => {
    stack = null;
  });
});
