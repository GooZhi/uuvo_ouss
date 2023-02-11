var child_process = require('child_process')
setTimeout(() => {
    child_process.exec('node index.js', (err, stdout, stderr) => {
        if(err){
            console.error(err)
        }else{
            console.log(stdout)
            console.error(stderr)
        }
    })
}, 2000)