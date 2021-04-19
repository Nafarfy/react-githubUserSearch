export const SearchForm = ({ value, onValueChange, onSearchSubmit, disabled }) => {
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
          onValueChange(e.target.value.trim());
        }}
        className="name-form-input"
        placeholder="Any GitHub User"
      />
      <button type="submit" disabled={disabled} className="name-form-btn">
        Search
      </button>
    </form>
  );
};
