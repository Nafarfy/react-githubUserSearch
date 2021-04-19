import React, { useState, useEffect } from "react";
import { fetchUser } from "./api/fetchUser";
import { UserEmptyPreview, UserError, UserPreview } from "./userPreviews/UserPreviews";
import { SearchForm } from "./searchForm/SearchForm";
import { Preloader } from "./preloader/Preloader";

export const User = () => {
  const [state, setState] = useState({
    type: "not_requested",
  });
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (state.type === "loading") {
      fetchUser(state.params.name)
        .then((data) => {
          setState({
            type: "loaded",
            user: data,
          });
        })
        .catch((e) => {
          setState({
            type: "error",
            error: `${e}`,
          });
        });
    }
  }, [state]);

  const onSearchSubmit = () => {
    setState({
      type: "loading",
      params: {
        name: inputValue,
      },
    });
  };

  switch (state.type) {
    case "not_requested":
      return (
        <>
          <UserEmptyPreview />
          <SearchForm
            value={inputValue}
            onValueChange={setInputValue}
            onSearchSubmit={onSearchSubmit}
          />
        </>
      );

    case "loading":
      return (
        <>
          <Preloader />
          <SearchForm
            value={inputValue}
            onValueChange={setInputValue}
            onSearchSubmit={onSearchSubmit}
            disabled
          />
        </>
      );

    case "loaded":
      return (
        <>
          <UserPreview user={state.user} />
          <SearchForm
            value={inputValue}
            onValueChange={setInputValue}
            onSearchSubmit={onSearchSubmit}
          />
        </>
      );

    case "error":
      return (
        <>
          <UserError error={state.error} />
          <SearchForm
            value={inputValue}
            onValueChange={setInputValue}
            onSearchSubmit={onSearchSubmit}
          />
        </>
      );
    default:
      return;
  }
};
