let pattern = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/
let reg = new RegExp(pattern)
let str = "/\\"

let re1 = null;
for(let i = 0; i < 4; i++) {
    re1 = /cat/g;
    //console.log(re1.test("catastrophe"))
}

function formatDate(fmt = 'y-MM-dd') {
    let date = new Date()
    let o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "S" : date.getMilliseconds(),
    }
    let reg = /(y+)/;
    if(reg.test(fmt)) {
        console.log('RegExp.$1', RegExp.$1)
        fmt = fmt.replace(RegExp.$1, `${date.getFullYear()}`.substr(4 - RegExp.$1.length))
    }
    for(let k in o) {
        let reg = new RegExp(`(${k})`)
        if(reg.test(fmt)) {
            console.log(reg)
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)))
        }
    }
    return fmt
}
console.log(formatDate())