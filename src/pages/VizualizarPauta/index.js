import React, { useEffect, useState } from "react";
import { getUserToken } from "../../services/auth";
import PDFReader from "rn-pdf-reader-js";

export default function VizualiarPauta({ navigation }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    async function verifySession() {
      let token = await getUserToken();

      if (!token) {
        setVisible(true);
      }
    }
    verifySession();
  }, []);
  return (
    <PDFReader
      source={{ uri: "http://www.africau.edu/images/default/sample.pdf" }}
    />
  );
}
