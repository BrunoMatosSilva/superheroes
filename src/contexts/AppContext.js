import { createContext, useEffect, useState } from "react";
import usePersistedTheme from "../utils/usePersistedTheme";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [theme, setTheme] = usePersistedTheme("theme", light);
  const [listHeroe, setListHeroe] = useState([]);
  const [initialHeroe, setInitialHeroe] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await fetch(
          "https://akabab.github.io/superhero-api/api/all.json"
        );
        const data = await response.json();
        setInitialHeroe(data);
        setListHeroe(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHeroes();
  }, []);

  const handleChange = ({ target }) => {
    const lowerBusca = target.value.toLowerCase();

    if (!target.value) {
      setListHeroe(initialHeroe);
      return;
    }

    const filterHeroes = listHeroe.filter((heroe) =>
      heroe.name.toLowerCase().includes(lowerBusca)
    );

    setListHeroe(filterHeroes);
  };

  return (
    <AppContext.Provider
      value={{
        toggleTheme,
        handleChange,
        theme,
        setTheme,
        listHeroe,
        setListHeroe,
        initialHeroe,
        setInitialHeroe,
        loading,
        setLoading
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
