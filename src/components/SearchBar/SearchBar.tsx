import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FormEvent } from "react";

const notify = () => toast.error("Please enter text to search for images");

interface SearchBarProps {
  onSearch: (data: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = (e.target as HTMLFormElement).elements.namedItem(
      "search"
    ) as HTMLInputElement;
    if (!query) {
      notify();
      return;
    }
    onSearch(query.value);
    if ("reset" in e.target) {
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          name="search"
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          🔍
        </button>
        <Toaster position="top-left" />
      </form>
    </header>
  );
};

export default SearchBar;
