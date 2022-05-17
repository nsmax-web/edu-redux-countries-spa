import { baseTheme } from "./styles/theme";

// import original module declarations
import "styled-components";

type ITheme = typeof baseTheme;

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
