/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);
  
  // console.log(tagName, props, ...children);

  Object.entries(props || {}).forEach(([key, value] )=> {
    element[key.toLowerCase()] = value;
  })

  children.flat().forEach((child) => {
    if(child instanceof Node) {
      element.appendChild(child);
      return;
    } 
    element.appendChild(document.createTextNode(child));
  });
  return element;
}

let count = 0;

function handleClick(){
  count+=1;
  console.log(count);
  render();
}

function handleClickNumber(num) {
  count = num;
  render();
}

function render(){
  const element = (
    <div>
      <p id="hello" className="title">hello world</p>
      <button type="button" onClick={handleClick}>click!{count}</button>
      {
        [1, 2 ,3].map((i) => (
          <button type="button" onClick={() => handleClickNumber(i)}>{i}</button>
        ))
      }
    </div>
  )
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(
    element
  );
}

render();