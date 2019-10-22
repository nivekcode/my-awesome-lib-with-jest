module.exports = {
  globals: {
    'ts-jest': {
      tsConfig:
        '<rootDir>/projects/my-awesome-lib-with-jest-showcase/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        'jest-preset-angular/build/InlineFilesTransformer'
      ]
    }
  },
  rootDir: './projects/my-awesome-lib-with-jest-showcase',
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts']
};
