define(["angular"],function(e){"use strict";e.module("webDirectives",[]).directive("structureDataInput",function(){return{restrict:"EA",scope:{structureData:"=",structureType:"@?"},templateUrl:"/partials/data-forms/structure-data-input.html",link:function(t,n,r){t.dataColumns=2,t.newRow={},t.newRowTypes=["Number","Number"],t.$watch("structureData",function(n){e.forEach(n,function(e,n){t.newRow[n]=[]})},!0),t.dataInputs=[];for(var i=0;i<t.dataColumns;i++)t.dataInputs.push(i);t.addRow=function(e){if(!t.newRow[e].length)return!1;t.structureData[e].values.push(t.newRow[e])},t.removeRow=function(e,n){t.structureData[e].values.splice(n,1)}}}})});