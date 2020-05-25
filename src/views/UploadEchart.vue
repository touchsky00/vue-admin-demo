<template>
    <div class="table-warpper">
        <div class="block-content">
            <el-upload
                    action
                    :auto-upload="false"
                    :on-change="handleUpload"
                    :show-file-list="false"
                >
                <el-button type="primary">点击传表格</el-button>
            </el-upload>
        </div>
    </div>
</template>

<script>
import { readFile, charActer } from '../assets/libs/ultis'
import xlsx from 'xlsx'

export default {
    methods: {
        async handleUpload(ev) {
            let file = ev.raw;
            if(!file) return;
            //读取数据变成json格式
            let data = await readFile(file);
            let workbook = xlsx.read(data,{ type: 'binary'});
            workbook = workbook.Sheets[workbook.SheetNames[0]];
            data = xlsx.utils.sheet_to_json(workbook)

            //处理数据，为数据添加name
            let arr = []
            data.forEach(item => {
                let obj = {};
                for(let key in charActer) {
                if(!charActer.hasOwnProperty(key)) break;
                let value = charActer[key]
                let text = value.text, type = value.type
                let prop = item[text] || '';
                type === 'string'?(prop = String(prop)):null;
                obj[key] = prop
                }
                arr.push(obj);
            });
            console.log(arr)
        },
    }
}
</script>