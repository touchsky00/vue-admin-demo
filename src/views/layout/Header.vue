<template>
    <div class="header-page">
        <div class="header-left">
            <div class="hover-active">
                <i class="el-icon-s-fold"></i>
            </div>
        </div>
        <div class="header-right">
            <div class="hover-user-active">
                <div>用户名<i class="el-icon-arrow-down"/></div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.header-page {
    height: 68px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.hover-active {
    width: 30px;
    height: 30px;
    text-align: center;
    padding: 5px;
    border-radius: 50%;
    line-height: 34px;
    font-size: 18px;
    color: #333;
}

.hover-active:hover {
    transition:all .2s;
    background-color: #d1d7e1;
}

.hover-user-active {
    height: 34px;
    padding: 0 14px;
    display: flex;
    align-items: center;
    margin-right: 5px;
    border-radius: 17px;
}
.hover-user-active:hover {
    transition:all .2s;
    background-color: #d1d7e1;
}
</style>