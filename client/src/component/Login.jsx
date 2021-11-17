import "../css/Login.css";
import { useRef } from "react";
import { v4 as uuidV4 } from "uuid";

export const Login = ({ onIdSubmit }) => {
  const idRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  };

  const createId = (e) => {
    e.preventDefault();

    let randomId = uuidV4();
    onIdSubmit(randomId);
  };
  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="id">Enter the Id</label>
        <input
          id="id"
          type="text"
          name="id"
          placeholder="1234-3456-1234-45454"
          ref={idRef}
        />
        <button onClick={handleSubmit} className="button">
          Login
        </button>
        <button onClick={createId}>Generate new Id</button>
      </form>
    </div>
  );
};
