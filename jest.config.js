module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        compiler: 'ttypescript',
      },
    ],
  },
}
