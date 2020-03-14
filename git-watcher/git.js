const git = require('simple-git')('../');

function watch(){
    git.exec(() => console.log('starting pull...'))
    .pull((err, update) => {
    if(update && update.summary.changes) {
            console.log('updating vue build...')
            require('child_process').exec('cd .. & npm run build')
            console.log('vue built.')
            setTimeout(function(){
                watch()
            }, 30000)
    }
    })
    .exec(() => {
        console.log('pull done.')
        setTimeout(function(){
            watch()
        }, 30000)
    })
}

watch()