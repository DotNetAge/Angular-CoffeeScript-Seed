'use strict'

###*
 # @description
 # 路由配置
###
uiRoutes = ($stateProvider)->

  $stateProvider.state 'home',
    url: '/home'
    templateUrl: 'scripts/home/welcome.html'
    controller: 'HomeCtrl'

angular.module('myApp').config(uiRoutes)
