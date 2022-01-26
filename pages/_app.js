import "../styles/globals.css";
import { IntlProvider } from "react-intl";
import { messages } from "../components/translate";
import { createContext, useReducer } from "react";

export const LangContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_LANG":
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};

const initialState = { lang: "pl" };

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LangContext.Provider value={{ state, dispatch }}>
      <IntlProvider locale={state.lang} messages={messages[state.lang]}>
        <Component {...pageProps} />{" "}
      </IntlProvider>
    </LangContext.Provider>
  );
}

export default MyApp;
