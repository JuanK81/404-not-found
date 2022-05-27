import Button from './Button';

const Error = (props) => {
  const clickHandler = () => {
    console.log('Tried');
  };

  return (
    <div className="error">
      <div className="error_container">
        <div className="error_code">
          <div className="error_code-number">
            <h1 className="error_code-number--1">4</h1>
            <h1 className="error_code-number--2">0</h1>
            <h1 className="error_code-number--3">4</h1>
          </div>
          <h2>oops!</h2>
          <p>page not found</p>
        </div>
        <div className="error_actions">
          <Button text="Go home" onClick={clickHandler} />
          <Button text="Go back" onClick={clickHandler} />
        </div>
      </div>
    </div>
  );
};

export default Error;
