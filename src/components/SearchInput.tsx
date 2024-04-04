import SearchIcon from "../assets/icons/search-icon-gray.svg";
import { ComponentProps } from "react";

interface SearchInputProps extends ComponentProps<"input"> {}

export function SearchInput(props: SearchInputProps) {
  return (
    <div className="search-container">
      <input
        {...props}
        type="text"
        placeholder="Pesquisar"
        className="h3"
        id="search-input"
      />
      <img src={SearchIcon} alt="search-icon" />
    </div>
  );
}
