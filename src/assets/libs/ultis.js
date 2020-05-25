//二进制读取文件
export function readFile(file) {
    return new Promise((resolve,reject) => {
        let reader = new FileReader;
        reader.readAsBinaryString(file);
        reader.onload = (ev) => {
            resolve(ev.target.result)
        };
    });
}

//处理excel字段
export let charActer = {
    name : {
        text:'姓名',
        type:'string'
    },
    birthtime : {
        text:'出生日期',
        type:'string'
    },
    birthplace : {
        text:'出生地',
        type:'string'
    },
    carrer : {
        text:'职业',
        type:'string'
    },
    phone : {
        text:'电话',
        type:'string'
    }
}