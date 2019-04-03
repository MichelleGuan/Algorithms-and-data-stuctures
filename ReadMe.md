# React Docs Note #

----------

## Main Concept ##
1. **camelCase on React Dom:** Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.For example, class becomes className in JSX, and tabindex becomes tabIndex.
2. **Note: Always start component names with a capital letter.**React treats components starting with lowercase letters as DOM tags. For example, `<div />` represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.
3. **Props are Read-Only:**All React components must act like pure functions with respect to their props.  
4. **Do Not Modify State Directly.**The only place where you can assign this.state is the constructor. In case to change element in an Array or Map, use **object.assign**.
5. **State Updates May Be Asynchronous**,write setState this way.
    >   this.setstate((state, props) =({
    >   counter: state.counter + props.increment
    >   }));
6. You cannot return false to prevent default behavior in React. Y**ou must call preventDefault explicitly.** 
    > function ActionLink() {
    >   function handleClick(e) {
    > e.preventDefault();
    > console.log('The link was clicked.');
    >   }
7.   Three ways to **bind this**: 
    > - this.handleClick = this.handleClick.bind(this);
    > - onClick={(e) =this.deleteRow(id, e)}
    > - onClick={this.deleteRow.bind(this, id)}
8. Returning null from a component’s render method does not affect the firing of the component’s lifecycle methods. For instance componentDidUpdate will still be called.
9. Keys help React identify which items have changed, are added, or are removed. **Keys should be given to the elements inside the array** to give the elements a stable identity:We **don’t recommend using indexes for keys** if the order of items may change. This can negatively impact performance and may cause issues with component state. 
>     function ListItem(props) {
>       // Correct! There is no need to specify the key here:
>       return <li>{props.value}</li>;
>     }
>     function NumberList(props) {
>       const numbers = props.numbers;
>       const listItems = numbers.map((number) =>
>     // Correct! Key should be specified inside the array.
>     <ListItem key={number.toString()}
>       value={number} />
>       );