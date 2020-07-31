
module.exports = {
	"transform": {
		"^.+\\.jsx?$": "babel-jest"
	},
	globals: {
		'__DEV__': true,
		'__TEST__': true
	},
	verbose: true,
	testURL: 'http://localhost',
	"moduleNameMapper": {
		"^.+\\.(css|less|scss)$": "<rootDir>/src/__tests__/CSSStub.js"
	},
	transformIgnorePatterns: [
		"/node_modules/(?!lodash-es).+\\.js$",
	],
	moduleDirectories: [
		'node_modules',
		'/src',
	],
	testPathIgnorePatterns: [
		// '<rootDir>/src/__tests__/mocks/',
		// '<rootDir>/src/__tests__/variables.js',
		// '<rootDir>/src/__tests__/setupTest.js',
		// '<rootDir>/src/__tests__/CSSStub.js',
		// '<rootDir>/src/__tests__/variables/*',
	],
	setupFiles: [
		'<rootDir>/src/__tests__/setupTest.js',
	],
	// setupTestFrameworkScriptFile: 'jest-extended',
	// setupFilesAfterEnv: [
	// 	'jest-extended'
	// ],
	snapshotSerializers: ["enzyme-to-json/serializer"],
}
