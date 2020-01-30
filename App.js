import React, { useEffect, useState } from "react";
import Routes from "./src/routes";

import AppContext from "./src/context";
import { getUrl } from "./src/services/url";

export default function App() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const getUrlSaved = async () => {
      const isUrl = await getUrl();
      setUrl(isUrl);
    };

    getUrlSaved();
  }, []);

  return (
    <AppContext.Provider value={{ url }}>
      <Routes />
    </AppContext.Provider>
  );
}
