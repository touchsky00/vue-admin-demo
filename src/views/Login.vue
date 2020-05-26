<template>
    <div class="login-page">
        <canvas id="meteor"></canvas>
        <div class="login-form">
            <div class="form-left">
                <div><p style="font-size: 24px;">登录</p></div>
                <div><p>如果无账号请前往注册和已有账号忘记密码可申请重设密码</p></div>
                <div class="btn-wrapper">
                    <button style="margin-right:10px;" class="btn-login">注册账号</button>
                    <button class="btn-login">忘记密码</button>
                </div>
            </div>
            <div class="form-right">
                <MyInput icon="el-icon-user" placeholder="用户名" type="text"/>
                <MyInput icon="el-icon-key" placeholder="密码" type="password"/>
                <div class="btn-submit"><button class="btn-login" @click="submit">登录</button></div>
            </div>
        </div>
    </div>
</template>

<script>
import MyInput from './components/MyInput'


export default {
    components: {
        MyInput
    },
    data() {
        return {
            checkedState: false,
            userInfo: {
                username:'hello',
                password:'123456',
            }
        }
    },
    methods: {
        changeCheckState() {
            this.checkedState = !this.checkedState
        },
        drawMetetor() {
            let h = window.innerHeight;
            let w = window.innerWidth;
            let can = document.getElementById('meteor');
            can.width = w;
            can.height = h;
            let canContent = can.getContext('2d');
            function random(min,max) {
                return Math.random()*(max - min) + min;
            };
            function Meteor() {};
            Meteor.prototype = {
                init: function() {
                    this.x = random(0,w);
                    this.y = random(0,h/2);
                    this.vx = 1.8;
                    this.vy = 1.5;
                    this.h = random(0.3*h, h); 
                    this.w = random(0,w);
                    
                    this.mx = random(1,2);
                    this.my = random(1,2);
                },
                draw: function() {
                    canContent.fillStyle = '#fff';
                    canContent.fillRect(this.x,this.y,this.mx,this.my);
                },
                move: function() {
                    if(this.y < this.h && this.x > this.w) {
                        this.y += this.vy;
                        this.x -= this.vx;
                    } else {
                        this.init();
                    }
                    this.draw();
                }
            };

            function Star() {}
            Star.prototype = {
                init: function() {
                    this.x = random(0,w);
                    this.y = random(0,h);
                    this.a = 1;
                    this.va = 0.9;
                },
                draw: function() {
                    canContent.fillStyle="rgba(255,255,255"+this.a+")";
                    canContent.fillRect(this.x, this.y, 1,1);
                }
            }
            let starList = [];
            function createStar() {
                let star = new Star;
                star.init();
                star.draw();
                starList.push(star);
            }
            for(let i=0;i<100;i++) {
                setTimeout(createStar,200*i);
            }
            let meteorsArr = [];
            function createMeteor () {
                let meteor = new Meteor;
                meteor.init();
                meteor.draw();
                meteorsArr.push(meteor);
            }
            for(let i=0;i<10;i++) {
                 setTimeout(createMeteor,2000*i);
            }
            
            function moveMeteor () {
                var grd=canContent.createLinearGradient(0,0,w,h);
                grd.addColorStop(0,'rgba(10, 10, 123, 0.2)');
                grd.addColorStop(1,"rgba(10,30,83,0.2)");
                canContent.fillStyle=grd;
                canContent.fillRect(0,0,w,h);
                for(let i=0;i<meteorsArr.length; i++) {
                    meteorsArr[i].move();
                }   
            }
            function timeOut(func,time) {
                func&&func();
                setTimeout(function () {
                    timeOut.call(this,func,time);
                }.bind(this),time);
            }
            timeOut(moveMeteor, 20);
        },
        //提交登录
        submit() {
            // console.log(this.userInfo)
            this.$store.commit('refleshUserInfo',)
            this.$router.push('/')
        }
    },
    mounted() {
        this.drawMetetor();
    }
}
</script>

<style scoped>
.login-page {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}
#meteor {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
}
.login-form {
    width: 600px;
    height: 400px;
    border-radius: 2px;
    box-shadow: 2px 2px 2px 1px rgba(0, 157, 255, 0.1);
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
}

.form-left {
    color: #fff;
    width: 40%;
    background: rgba(2, 20, 92, 0.8);
    height: 100%;
    box-sizing: border-box;
    text-align: left;
    padding: 40px 20px;
}
.form-right {
    width: 60%;
    background: rgba(2, 32, 58,.8);
    height: 100%;
    box-sizing: border-box;
    padding: 80px 20px;
}
.btn-wrapper {
    margin-top: 40px;
    box-sizing: border-box;
}

.btn-login {
    background: transparent;
    outline: none;
    padding: 3px 5px;
    border-radius: 2px;
    font-size: 13px;
    color: #fff;
    border: 1px solid #fff;
    transition: border 1s;
    transition: color .5s;
    -webkit-transition: border 1s;
    -webkit-transition: color .5s;
}
.btn-login:hover {
    color: rgb(43, 145, 255);
    border: 1px solid rgb(43, 145, 255);
}

.btn-submit {
    width: 100%;
}
.btn-submit .btn-login {
    width: 80%;
    margin-top: 20px;
}

.check-label {
    font-size:12px;
    color:#fff;
    cursor: pointer;
}
.check-box:checked {
    border: none;
    background: transparent;
}

</style>