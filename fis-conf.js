fis.config.set("project.watch.usePolling", true)
fis.require('parser-babel6').parser = require('babel-core');

// 设置占位符
var query = '?v='+Date.now();
var name = 'hz-lottery';

//配置
var conf = {
    //发包
    build : {
        // useHash: true,
        query: query,
        release: '/static/$0',
        // url:'/out-put/static$0',
        url:'/Public/Activity/Turntable/static$0'
    }
}


// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
    spriter: fis.plugin('csssprites')
});

fis.match('*.{css,less}', {
    // css补全
    preprocessor: fis.plugin('autoprefixer', {
        "browsers": ["Android >= 2.1", "iOS >= 4", "ie >= 8", "firefox >= 15"],
        "cascade": true
    }),
    // 对 css 进行图片合并
    useSprite: true,
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')
});

fis.match('src/js/**.js', {
    parser: fis.plugin('babel6', {
        // babel options
        presets : ['es2015']
    })
});

fis.match('*.js', {
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin('uglify-js')
});


fis.match('*.png', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
});

//转码less
fis.match('*.less', {
    // fis-parser-less 插件进行解析
    parser: fis.plugin('less'),
    // .less 文件后缀构建后被改成 .css 文件
    rExt: '.css'
})

fis.set('project.ignore', ['node_modules/**','bower_components/**', 'output/**', 'fis-conf.js','package.json','bower.json','README.md'])

// 开发模式
fis.media('dev')
    .match('*.{js,css,png,less,jpg,gif,mp3,wav}', {
        query: query,
        useHash: false,
        useSprite: false,
        optimizer: null,
        url:'/'+name+'$0'
    })
    .match('*', {
        deploy: fis.plugin('local-deliver', {
            to: 'C:/wamp/www/'+name
        })
    })

fis.media('www')
    .match('*.{js,css,png,less,jpg,gif,html,mp4,mp3}', {
        query: query,
        useHash: false,
        useSprite: false,
        optimizer: null,
        url:'/www/'+name+'$0'
    })
    .match('*', {
        deploy: fis.plugin('local-deliver', {
            to: 'F:/htdocs/www/'+name
        })
    })

// 构建发布
fis.media('build')
    // 合并散列文件
    /*.match('::package', {
        postpackager: fis.plugin('loader', {
            allInOne: true,
        })
    })*/
    // 加md5和文件前缀路径
    .match('*.{js,css,png,less,jpg,gif,map,wav,mp4,eot,mp3}', conf.build)
    // .match('page/**.html', conf.build)

    // 发布地址
    .match('*', {
        deploy: fis.plugin('local-deliver', {
            to: 'D:/xampp/htdocs/h5/v18/'+name
            // to: 'dist'
        })
    })

    /*.match('**.js', {
        packTo: '/src/pkg.js'
    })*/

