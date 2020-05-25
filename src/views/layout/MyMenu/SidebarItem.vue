<template>
    <div class="sidebar-wrapper" >
        <SubMenu :path="item.path" :name="item.name" :title="item.meta.title" :icon="item.meta.icon" @changeSubState="changeSubState">
            <!-- 判断是否有子路由 -->
            <div v-if="item.children" class="items-wrapper">
                <SideBarItem 
                    v-for="(child,index) in item.children"
                    :key="index"
                    :item="child"
                />
            </div>
        </SubMenu>
    </div>
</template>

<script>
import SubMenu from './SubMenu'

export default {
    name: 'SideBarItem',
    components: {
        SubMenu
    },
    props: {
        item: {
            type: Object,
            required: true,
            default() {
                return { title :'', icon: ''}
            }
        },
    },
    data() {
      return {
          currentChildId:''
      }  
    },
    methods: {
        changeSubState(childName) {
            let children =this.$parent.$children
            children.forEach(child => {
                if(child.item) {
                    if(childName !== child.$children[0].name) {
                        child.$children[0].isChangeItemState = false
                    }
                }
            })
            this.$emit('changeSubState',childName)
        }
    }
}
</script>


<style scoped>
.items-wrapper {
    background: #f0f2f5;
    box-sizing: border-box;
    padding: 0 5px;
}
</style>