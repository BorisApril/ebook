module.exports = {
    title: 'Электронный учебник',
    description: '',
    themeConfig: {
        // nav: [
        //     {
        //         text: 'Topics',
        //         link: '/topics/'
        //     },
        //     {
        //         text: 'Test',
        //         link: '/test/'
        //     }
        // ],
        sidebar: 'auto',
    },
    plugins: [
        [
          'vuepress-plugin-navigation', {
            // опции плагина
          }
        ]
    ]
}