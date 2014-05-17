define(["./core","./var/strundefined","./var/rnotwhite","./var/hasOwn","./var/slice","./event/support","./data/var/data_priv","./core/init","./data/accepts","./selector"],function(e,t,n,r,i,s,o){function c(){return!0}function h(){return!1}function p(){try{return document.activeElement}catch(e){}}var u=/^key/,a=/^(?:mouse|contextmenu)|click/,f=/^(?:focusinfocus|focusoutblur)$/,l=/^([^.]*)(?:\.(.+)|)$/;return e.event={global:{},add:function(r,i,s,u,a){var f,c,h,p,d,v,m,g,y,b,w,E=o.get(r);if(!E)return;s.handler&&(f=s,s=f.handler,a=f.selector),s.guid||(s.guid=e.guid++),(p=E.events)||(p=E.events={}),(c=E.handle)||(c=E.handle=function(n){return typeof e!==t&&e.event.triggered!==n.type?e.event.dispatch.apply(r,arguments):undefined}),i=(i||"").match(n)||[""],d=i.length;while(d--){h=l.exec(i[d])||[],y=w=h[1],b=(h[2]||"").split(".").sort();if(!y)continue;m=e.event.special[y]||{},y=(a?m.delegateType:m.bindType)||y,m=e.event.special[y]||{},v=e.extend({type:y,origType:w,data:u,handler:s,guid:s.guid,selector:a,needsContext:a&&e.expr.match.needsContext.test(a),namespace:b.join(".")},f),(g=p[y])||(g=p[y]=[],g.delegateCount=0,(!m.setup||m.setup.call(r,u,b,c)===!1)&&r.addEventListener&&r.addEventListener(y,c,!1)),m.add&&(m.add.call(r,v),v.handler.guid||(v.handler.guid=s.guid)),a?g.splice(g.delegateCount++,0,v):g.push(v),e.event.global[y]=!0}},remove:function(t,r,i,s,u){var a,f,c,h,p,d,v,m,g,y,b,w=o.hasData(t)&&o.get(t);if(!w||!(h=w.events))return;r=(r||"").match(n)||[""],p=r.length;while(p--){c=l.exec(r[p])||[],g=b=c[1],y=(c[2]||"").split(".").sort();if(!g){for(g in h)e.event.remove(t,g+r[p],i,s,!0);continue}v=e.event.special[g]||{},g=(s?v.delegateType:v.bindType)||g,m=h[g]||[],c=c[2]&&new RegExp("(^|\\.)"+y.join("\\.(?:.*\\.|)")+"(\\.|$)"),f=a=m.length;while(a--)d=m[a],(u||b===d.origType)&&(!i||i.guid===d.guid)&&(!c||c.test(d.namespace))&&(!s||s===d.selector||s==="**"&&d.selector)&&(m.splice(a,1),d.selector&&m.delegateCount--,v.remove&&v.remove.call(t,d));f&&!m.length&&((!v.teardown||v.teardown.call(t,y,w.handle)===!1)&&e.removeEvent(t,g,w.handle),delete h[g])}e.isEmptyObject(h)&&(delete w.handle,o.remove(t,"events"))},trigger:function(t,n,i,s){var u,a,l,c,h,p,d,v=[i||document],m=r.call(t,"type")?t.type:t,g=r.call(t,"namespace")?t.namespace.split("."):[];a=l=i=i||document;if(i.nodeType===3||i.nodeType===8)return;if(f.test(m+e.event.triggered))return;m.indexOf(".")>=0&&(g=m.split("."),m=g.shift(),g.sort()),h=m.indexOf(":")<0&&"on"+m,t=t[e.expando]?t:new e.Event(m,typeof t=="object"&&t),t.isTrigger=s?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=i),n=n==null?[t]:e.makeArray(n,[t]),d=e.event.special[m]||{};if(!s&&d.trigger&&d.trigger.apply(i,n)===!1)return;if(!s&&!d.noBubble&&!e.isWindow(i)){c=d.delegateType||m,f.test(c+m)||(a=a.parentNode);for(;a;a=a.parentNode)v.push(a),l=a;l===(i.ownerDocument||document)&&v.push(l.defaultView||l.parentWindow||window)}u=0;while((a=v[u++])&&!t.isPropagationStopped())t.type=u>1?c:d.bindType||m,p=(o.get(a,"events")||{})[t.type]&&o.get(a,"handle"),p&&p.apply(a,n),p=h&&a[h],p&&p.apply&&e.acceptData(a)&&(t.result=p.apply(a,n),t.result===!1&&t.preventDefault());return t.type=m,!s&&!t.isDefaultPrevented()&&(!d._default||d._default.apply(v.pop(),n)===!1)&&e.acceptData(i)&&h&&e.isFunction(i[m])&&!e.isWindow(i)&&(l=i[h],l&&(i[h]=null),e.event.triggered=m,i[m](),e.event.triggered=undefined,l&&(i[h]=l)),t.result},dispatch:function(t){t=e.event.fix(t);var n,r,s,u,a,f=[],l=i.call(arguments),c=(o.get(this,"events")||{})[t.type]||[],h=e.event.special[t.type]||{};l[0]=t,t.delegateTarget=this;if(h.preDispatch&&h.preDispatch.call(this,t)===!1)return;f=e.event.handlers.call(this,t,c),n=0;while((u=f[n++])&&!t.isPropagationStopped()){t.currentTarget=u.elem,r=0;while((a=u.handlers[r++])&&!t.isImmediatePropagationStopped())if(!t.namespace_re||t.namespace_re.test(a.namespace))t.handleObj=a,t.data=a.data,s=((e.event.special[a.origType]||{}).handle||a.handler).apply(u.elem,l),s!==undefined&&(t.result=s)===!1&&(t.preventDefault(),t.stopPropagation())}return h.postDispatch&&h.postDispatch.call(this,t),t.result},handlers:function(t,n){var r,i,s,o,u=[],a=n.delegateCount,f=t.target;if(a&&f.nodeType&&(!t.button||t.type!=="click"))for(;f!==this;f=f.parentNode||this)if(f.disabled!==!0||t.type!=="click"){i=[];for(r=0;r<a;r++)o=n[r],s=o.selector+" ",i[s]===undefined&&(i[s]=o.needsContext?e(s,this).index(f)>=0:e.find(s,this,null,[f]).length),i[s]&&i.push(o);i.length&&u.push({elem:f,handlers:i})}return a<n.length&&u.push({elem:this,handlers:n.slice(a)}),u},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return e.pageX==null&&t.clientX!=null&&(n=e.target.ownerDocument||document,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),!e.which&&s!==undefined&&(e.which=s&1?1:s&2?3:s&4?2:0),e}},fix:function(t){if(t[e.expando])return t;var n,r,i,s=t.type,o=t,f=this.fixHooks[s];f||(this.fixHooks[s]=f=a.test(s)?this.mouseHooks:u.test(s)?this.keyHooks:{}),i=f.props?this.props.concat(f.props):this.props,t=new e.Event(o),n=i.length;while(n--)r=i[n],t[r]=o[r];return t.target||(t.target=document),t.target.nodeType===3&&(t.target=t.target.parentNode),f.filter?f.filter(t,o):t},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==p()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===p()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(this.type==="checkbox"&&this.click&&e.nodeName(this,"input"))return this.click(),!1},_default:function(t){return e.nodeName(t.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(t,n,r,i){var s=e.extend(new e.Event,r,{type:t,isSimulated:!0,originalEvent:{}});i?e.event.trigger(s,null,n):e.event.dispatch.call(n,s),s.isDefaultPrevented()&&r.preventDefault()}},e.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},e.Event=function(t,n){if(!(this instanceof e.Event))return new e.Event(t,n);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||t.defaultPrevented===undefined&&t.getPreventDefault&&t.getPreventDefault()?c:h):this.type=t,n&&e.extend(this,n),this.timeStamp=t&&t.timeStamp||e.now(),this[e.expando]=!0},e.Event.prototype={isDefaultPrevented:h,isPropagationStopped:h,isImmediatePropagationStopped:h,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=c,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=c,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=c,this.stopPropagation()}},e.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(t,n){e.event.special[t]={delegateType:n,bindType:n,handle:function(t){var r,i=this,s=t.relatedTarget,o=t.handleObj;if(!s||s!==i&&!e.contains(i,s))t.type=o.origType,r=o.handler.apply(this,arguments),t.type=n;return r}}}),s.focusinBubbles||e.each({focus:"focusin",blur:"focusout"},function(t,n){var r=function(t){e.event.simulate(n,t.target,e.event.fix(t),!0)};e.event.special[n]={setup:function(){var e=this.ownerDocument||this,i=o.access(e,n);i||e.addEventListener(t,r,!0),o.access(e,n,(i||0)+1)},teardown:function(){var e=this.ownerDocument||this,i=o.access(e,n)-1;i?o.access(e,n,i):(e.removeEventListener(t,r,!0),o.remove(e,n))}}}),e.fn.extend({on:function(t,n,r,i,s){var o,u;if(typeof t=="object"){typeof n!="string"&&(r=r||n,n=undefined);for(u in t)this.on(u,n,r,t[u],s);return this}r==null&&i==null?(i=n,r=n=undefined):i==null&&(typeof n=="string"?(i=r,r=undefined):(i=r,r=n,n=undefined));if(i===!1)i=h;else if(!i)return this;return s===1&&(o=i,i=function(t){return e().off(t),o.apply(this,arguments)},i.guid=o.guid||(o.guid=e.guid++)),this.each(function(){e.event.add(this,t,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(t,n,r){var i,s;if(t&&t.preventDefault&&t.handleObj)return i=t.handleObj,e(t.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof t=="object"){for(s in t)this.off(s,n,t[s]);return this}if(n===!1||typeof n=="function")r=n,n=undefined;return r===!1&&(r=h),this.each(function(){e.event.remove(this,t,r,n)})},trigger:function(t,n){return this.each(function(){e.event.trigger(t,n,this)})},triggerHandler:function(t,n){var r=this[0];if(r)return e.event.trigger(t,n,r,!0)}}),e});