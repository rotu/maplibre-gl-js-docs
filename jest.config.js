const config = {
    roots: [
        '<rootDir>/docs/util/__tests__',
        '<rootDir>/test',
    ],
    testMatch: [
        '**/__tests__/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)'
    ],
    // testEnvironment: 'jsdom',
    preset: 'ts-jest/presets/js-with-ts-esm',
    globals: {
        'ts-jest': {
            isolatedModules: true
        }
    },
    setupFiles: [],
};
export default config;
//# sourceMappingURL=jest.config.js.map