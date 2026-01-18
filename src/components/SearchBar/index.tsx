import { useState } from "react";
import "./styles.css";

type Props = {
  onSearch: (searchText: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [text, setText] = useState<string>("");


  function handleChange(event: any) {
    setText(event.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    onSearch(text);
  }

  function handleResetClick() {
    setText("");
    onSearch(text);
  }

  return (
    <form className="dsc-search-bar" onSubmit={handleSubmit}>
      <button type="submit">🔍︎</button>
      <input value={text} type="text" placeholder="Nome do produto" onChange={handleChange}/>
      <button onClick={handleResetClick}>X</button>
    </form>
  );
}
