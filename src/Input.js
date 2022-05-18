import { useState } from "react";

function Input({ onAdd }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("name");
      return;
    }
    onAdd({ name, date, image });
    setDate("");
    setImage("");
    setName("");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input
              type="date"
              value={date}
              placeholder="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Image Url:
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
          <p>
            convert your image to url{" "}
            <a href="https://i-converter.com/files/jpg-to-url">here</a>
          </p>
        </div>
        <div>
          <input type="submit" value="Add" className="button" />
        </div>
      </form>
    </>
  );
}
export default Input;
