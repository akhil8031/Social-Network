var app = angular.module("timewaste", ['ui.router','navcontroller','ngFileUpload'])
                    .config(function($stateProvider,$urlRouterProvider){
                        $urlRouterProvider.otherwise('/');
                        
                        $stateProvider.state('signUp',{
                            url:'/signup',
                            templateUrl:'signup.html',
                            controller:'Formcont'
                        })
                        .state('editprofile',{
                            url:'/editprof',
                            templateUrl:'edit-profile-view.html',
                            controller:'EditProfCont'
                        })
                        .state('main',{
                            url:'/',
                            templateUrl:'main.html',
                            controller:'MainController'
                        })
                        .state('follow',{
                            url:'/follow-users',
                            templateUrl:'/follow/follow.html',
                            controller:'followController'
                        })
                    });

