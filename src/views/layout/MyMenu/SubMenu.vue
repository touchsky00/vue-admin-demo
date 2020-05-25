<template>
    <div>
        <div class="sub-wrapper" @click="changeItemState">
            <div :class="isChangeItemState?'sub-icon-active':'sub-icon'"><i :class="icon"></i></div>
            <div class="sub-link">
                <router-link :to="path"><span :class="isChangeItemState?'sub-label-active':'sub-label'">{{title}}</span></router-link>
            </div>
        </div>
        <transition name="fold-animation">
            <div v-show="isChangeItemState">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>


<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        path: {
            type: String,
            required: true
        }
    }, 
    computed: {},
    data() {
        return {
            isChangeItemState: false,
        }
    },
    methods: {
        changeItemState() {
            // console.log('path',this.path)
            this.$emit('changeSubState',this.name);
            this.isChangeItemState = !this.isChangeItemState;
            // this.getRouterPath();
        },
        getRouterPath() {
            let pathArr = this.$route.path.split('/')
            // console.log(pathArr)
        }
    },
    mounted() {
        
    },
    watch: {
    }
}
</script>


<style>
.fold-animation-enter-active {
    transition: all .3s ease;
}
.fold-animation-leave-active {
    transition: all .1s ease;
}
.fold-animation-enter, .fold-animation-leave-to {
    transform: translateY(-5px);
    opacity: 0;
}
</style>

<style scoped>
.sub-wrapper {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding: 10px 20px;
    border-bottom: 1px solid #f3f3f3;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.sub-icon {
    width: 10%;
}
.sub-wrapper:hover .sub-label{
    color: #000000;
}
.sub-wrapper:hover .sub-icon {
    color: #3f9ce8;
}
.sub-label-active {
    color: #000000;
    font-size: 14px;
}
.sub-icon-active {
    width: 10%;
    color: #3f9ce8;

}


.sub-link {
    width: 90%;
    text-align: left;
    box-sizing: border-box;
    padding: 0 10px;
    overflow: hidden;
}

.sub-label {
    font-size: 14px;
    color: rgb(102, 102, 102);
}

.sub-link a { 
    text-decoration: none;
}
.sub-link a:link {
    text-decoration: none;
}
.sub-link a:visited {
    text-decoration: none;
}
.sub-link a:hover {
    text-decoration: none;
}
.sub-item a:active {
    text-decoration: none;
}
</style>