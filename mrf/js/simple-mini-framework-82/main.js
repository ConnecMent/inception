/**
 * create an object representing a DOM element
 * e.g. for <div class="foo">hello world!</div> DOM element, we get { type: 'div', props: [{ className: 'foo' }], children: ['hello world!] } JS object
 * but we may also use our own "type"s, which are functions returning another element
 * e.g. we could write a function returning the about hello world element, call it `HelloWorld`, and use it as type for createElement: { type: HelloWorld, ... }
 * @param elementType string | function
 * @param props props array
 * @param children children array
 */
const createElement = (elementType, props, children) => {
    // implement it here
    // hint: start by checking elementType. Is it a string or function?
  
    // then return such an object:
    const element = {
      type: '',
      props: [],
      children: [],
    };
    return element;
  };
  
  /**
   * "render" an element into a domNode. In other words, get a JS object (= the element), which represents a tree of DOM nodes. Then create DOM elements for leaves and nodes, one by one, as you did in your dom manipulation tasks.
   * @param element an element created by `createElement`
   * @param domNode a node to render the element into
   */
  const render = (element, domNode) => {
    // implement it here
  };
  
  // Sample usage:
  
  // a custom "type" for our createElement
  const Greet = (props) => {
    /**
     * we want such a tree for our greet text:
     * <span class="awesome-class">Hello, <b>{props.name}</b>!</span>
     */
    return createElement('span', [{ class: 'awesome-class' }], [
      'Hello, ',
      createElement('b', [], props.name),
      '!'
    ]);
  }
  
  // another custom type, which uses the previous custom type
  const GreetConnecMentAndUniverse = () => {
    /**
     * we want such a tree for our text:
     * <div>
     *   <span>Hello, <b>ConnecMent</b>!</span>
     *   <span>Hello, <b>Universe</b>!</span>
     * </div>
     */
    return createElement('div', [], [
      createElement(Greet, [{ name: 'ConnecMent' }], []),
      createElement(Greet, [{ name: 'Universe' }], []),
    ]);
  }
  
  render(createElement(
    GreetConnecMentAndUniverse,
    [],
    [],
  ), document.getElementById('app-root'));