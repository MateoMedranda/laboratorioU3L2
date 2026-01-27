export default [
    {
        files: ['**/*.js'],
        languajesOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        rules: {
            semi: ['error', 'always'],
            quote: ['error', 'single']
        }
    }
]