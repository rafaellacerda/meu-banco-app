export default {
	preset: 'ts-jest',
	rootDir: 'src/tests/unit',
	testEnvironment: 'jest-environment-jsdom',
	transform: { '^.+\\.tsx?$': 'ts-jest' },
	moduleNameMapper: { '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js' },
};
