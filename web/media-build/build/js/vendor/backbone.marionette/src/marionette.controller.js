Marionette.Controller=function(e){this.triggerMethod=Marionette.triggerMethod,this.options=e||{},_.isFunction(this.initialize)&&this.initialize(this.options)},Marionette.Controller.extend=Marionette.extend,_.extend(Marionette.Controller.prototype,Backbone.Events,{close:function(){this.stopListening();var e=Array.prototype.slice.call(arguments);this.triggerMethod.apply(this,["close"].concat(e)),this.off()}});