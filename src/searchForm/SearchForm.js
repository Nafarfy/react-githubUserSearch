export const SearchForm = ({ value, onValueChange, onSearchSubmit }) => {
  return (
    <form
      className="name-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSearchSubmit();
      }}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => {
          onValueChange(e.target.value);
        }}
        className="name-form-input"
        placeholder="Any GitHub User"
      />
      <button type="submit" className="name-form-btn">
        Search
      </button>
    </form>
  );
};
