module.exports = {
    base: '/wandou/',
    title: '豌豆UI',
    description: '一个简单的UI框架',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: 'GitHub', link: 'https://github.com/rhj706722539/wandou' },
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/',
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button',
                ]
            },

        ]
    }
};