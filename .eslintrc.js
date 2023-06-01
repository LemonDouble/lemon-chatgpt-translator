module.exports = {
    env: {
        browser: true,
    },
    extends: ["standard-with-typescript", "plugin:prettier/recommended"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json"],
    },
};