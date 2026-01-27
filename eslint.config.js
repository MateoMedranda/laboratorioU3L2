export default [
    {
        files: ['**/*.js'],
        languagesOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        rules: {
            semi: ['error', 'always'],
            quote: ['error', 'single']
        }
    }
]