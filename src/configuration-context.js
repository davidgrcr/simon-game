import {createContext} from "react";

import { defaultValues } from "./CONSTANTS";

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const ConfigurationContext = createContext({
  ...defaultValues,
});
