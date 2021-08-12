module.exports = {
    purge: ['./pages/**/*.ts', './pages/**/*.tsx', './components/**/*.ts', './components/**/*.tsx', './styles/**/*.css'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily: {
            'kai': '楷体, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
