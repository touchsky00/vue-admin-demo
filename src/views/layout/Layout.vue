<template>
    <div class="layout-wrapper">
        <div class="side-bar">
            <div class="logo-wrapper"><img src="../../assets/logo-my.png"/><span>My Admin</span></div>
            <Menu />
        </div>
        <div class="content-wrapper">
            <div class="header"><Header /></div>
            <div class="content"><router-view></router-view></div>
        </div>
    </div>  
</template>

<script>
import Menu from './sidebar/Index'
import Header from './Header'

export default {
    components: { Menu, Header },
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
.layout-wrapper {
    background: #f3f3f3;
    height: 100%;
    width: 100%;
}

.side-bar {
    background: #fff;
    width: 180px;
    position: fixed;
    box-shadow: 5px 0 10px #e4e7ed;
    height: 100%;
}

.content-wrapper {
    padding-left: 180px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start; 
    flex-wrap: wrap;
    width: 100%;
}
.header {
    width: 100%;
}
.content {
    width: 100%;
}
.logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 20px 0;
}
.logo-wrapper img {
    width: 28px;
    height: 28px;
    margin-right: 10px;
}
</style>