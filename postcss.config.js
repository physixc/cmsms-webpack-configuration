module.exports = {
    plugins: [
        require('autoprefixer')({
            'overrideBrowserslist': ['> 1%', 'last 8 versions']
        }),
        require('cssnano')({
            'minimize': true
        })
    ]
};
