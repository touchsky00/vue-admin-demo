<template>
    <div>
        <SidebarItem @changeSubState="changeSubState" v-for="(item,index) in itemList" :key="index" :item="item"/>
    </div>
</template>

<script>
import SidebarItem from './SidebarItem'

export default {
    components: {
        SidebarItem
    },
    data() {
        return {
            itemList: [],
        }
    },
    methods: {
        changeSubState(childName) {
            //限制于二级菜单
            this.$children.forEach(child => {
                if(childName !== child.$children[0].name) {
                    child.$children[0].isChangeItemState = false
                }
            })
        },
        //获取路由信息
        getRouterList() {
            let routes = this.$router.options.routes;
            let sibarItems = [];
            routes.forEach((item) => {
                if(item.meta) {
                    sibarItems.push(item);
                }
            });
            this.itemList = sibarItems;
        }
    },
    mounted() {
        this.getRouterList();
    }
}
</script>