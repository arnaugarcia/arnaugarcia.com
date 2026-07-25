import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  prettier,
  {
    rules: {
      // Pre-existing patterns; React Compiler rules are stricter in eslint-plugin-react-hooks v7+.
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/immutability": "warn",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "node_modules/**"]),
]);

export default eslintConfig;
