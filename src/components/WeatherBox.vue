<template>
    <div class="weather-box">
        <a class="btn btn-weather" :style="radius" @click="toggleWeather(true)"><span class="celsius">23℃</span>天河</a>
        <transition name="fade-in">
            <div class="weather-card" v-if="status">
                <b class="close" @click="toggleWeather(false)">×</b>
                
            </div>
        </transition>
    </div>
</template>

<script>

import { cookie } from '~/js/utils'

export default {
    name: 'WeatherBox',
    data () {
        return {
            status: false,
            param: {
                location: '',
                key: '7f3c55309e6b466fa8ac4ac7c808f34d'
            }
        }
    },
    props: ['radius'],
    methods: {
        toggleWeather (status) {
            this.status = status
        },
        geolocation () {

            
            return new Promise ((resolve, reject) => {
                
                let local = cookie.get('location')
                if(local) resolve(local)

                if(!navigator.geolocation) {
                    reject('你的浏览器不支持自动定位服务！')
                }
                navigator.geolocation.getCurrentPosition(({ coords }) => {

                    let { longitude, latitude } = coords

                    if(longitude === undefined || latitude === undefined) {
                        reject('无法获取到正确位置！')
                    }

                    local = `${longitude},${latitude}`

                    cookie.set('location', local)
                    resolve(local)

                }, ({ message }) => {
                    reject(message || '浏览器拒绝提供位置服务！')
                })
            })
        },
        getWeather () {
            $.get(`${ $.path.weather }`, this.param).then(({ HeWeather6 }) => {
                let { basic, daily_forecast, now, status, update } = HeWeather6.pop()

                if(status == 'ok') {
                    // TODO 获取天气信息之后，显示到页面上
                } else {

                }
            }).catch(() => {

            })
        }
    },
    mounted () {
            this.geolocation().then(coords => {

                // 获取到浏览器提供的位置信息
                this.param.location = coords
                this.getWeather()

            }).catch(err => {

                // 未获取到浏览器提供的位置信息，转入手动设置

                let local = prompt(`${err}请手动输入你的所在位置（留空则自动判断ip）`)
                if(!local) local = 'auto_ip'

                this.param.location = local
                cookie.set('location', local)

                this.getWeather()
            })
    }
}
</script>

<style lang="scss">
    .weather-box {
        font-size: 0;
        .weather-card {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: rgba($color: #000, $alpha: 0.8);
            .close {
                display: block;
                width: 40px;
                height: 20px;
                line-height: 14px;
                margin-left: -20px;
                position: absolute;
                top: 0;
                left: 50%;
                text-align: center;
                text-shadow: 0 0 2px #ccc;
                font-size: 16px;
                border-radius: 0 0 20px 20px;
                box-shadow: 0 0 4px #ccc;
                color: #000;
                background-color: #fff;
                cursor: pointer;
            }
            iframe {
                width: 100%;
                max-width: 750px;
                margin: auto;
                height: 100%;
            }
        }
    }
</style>
