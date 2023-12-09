import './polyfills.server.mjs';
import{A as u,B as T,C as De,D as be,E as p,F as Me,G as m,H as j,I as S,J as Ee,Q as Ae,R as te,T as we,U as Fe,V as G,W as Ie,X as Se,_ as xe,a as pe,b as me,c as ge,d as I,e as k,ea as ie,f as K,g as h,h as E,i as V,j as f,k as v,l as ye,m as ve,n as _e,o as Y,p as J,q as Q,r as _,s,t as Ce,u as C,v as D,w as b,x as ee,y as Ve,z as l}from"./chunk-7NBSD73F.mjs";import{a as y,b as M}from"./chunk-KRLCULJA.mjs";var pt=[],Ne=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({imports:[ie.forRoot(pt),ie]});let t=e;return t})();import mt from"crypto";var U=new Uint8Array(256),H=U.length;function ne(){return H>U.length-16&&(mt.randomFillSync(U),H=0),U.slice(H,H+=16)}var c=[];for(let t=0;t<256;++t)c.push((t+256).toString(16).slice(1));function Oe(t,e=0){return c[t[e+0]]+c[t[e+1]]+c[t[e+2]]+c[t[e+3]]+"-"+c[t[e+4]]+c[t[e+5]]+"-"+c[t[e+6]]+c[t[e+7]]+"-"+c[t[e+8]]+c[t[e+9]]+"-"+c[t[e+10]]+c[t[e+11]]+c[t[e+12]]+c[t[e+13]]+c[t[e+14]]+c[t[e+15]]}import gt from"crypto";var re={randomUUID:gt.randomUUID};function yt(t,e,n){if(re.randomUUID&&!e&&!t)return re.randomUUID();t=t||{};let i=t.random||(t.rng||ne)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,e){n=n||0;for(let r=0;r<16;++r)e[n+r]=i[r];return e}return Oe(i)}var A=yt;var Pe=(()=>{let e=class e{constructor(){this.characters=[{id:A(),name:"Goku",power:63e3},{id:A(),name:"Krilin",power:42e3},{id:A(),name:"Vegeta",power:3e4}]}addCharacter(i){let r=y({id:A()},i);this.characters.push(r)}onDeleteCharacterById(i){this.characters=this.characters.filter(r=>r.id!==i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=K({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var _t=(t,e)=>({"list-group-item-dark":t,"list-group-item-primary":e});function Ct(t,e){if(t&1){let n=De();l(0,"li",2)(1,"div")(2,"span",3),m(3),u(),l(4,"span"),m(5),u(),l(6,"strong"),m(7,"Power:"),u(),l(8,"span"),m(9),u()(),l(10,"button",4),p("click",function(){let o=ve(n).$implicit,d=Me();return _e(d.onDeleteCharacter(o.id))}),m(11,"X"),u()()}if(t&2){let n=e.$implicit,i=e.index,r=e.last,o=e.even;b("ngClass",Ee(4,_t,r,o)),_(3),j("",i+1,". "),_(2),j("",n.name," - "),_(4),j(" ",n.power,"")}}var ke=(()=>{let e=class e{constructor(){this.characterList=[{name:"Trunks",power:10}],this.onDelete=new C}onDeleteCharacter(i){i&&this.onDelete.emit(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=V({type:e,selectors:[["dbz-list"]],inputs:{characterList:"characterList"},outputs:{onDelete:"onDelete"},decls:4,vars:1,consts:[[1,"list-group"],["class","list-group-item d-flex justify-content-between align-items-center",3,"ngClass",4,"ngFor","ngForOf"],[1,"list-group-item","d-flex","justify-content-between","align-items-center",3,"ngClass"],[1,"text-primary"],[1,"btn","btn-danger",3,"click"]],template:function(r,o){r&1&&(l(0,"h4"),m(1,"Listado"),u(),l(2,"ul",0),Ve(3,Ct,12,7,"li",1),u()),r&2&&(_(3),b("ngForOf",o.characterList))},dependencies:[we,Fe],styles:["[_nghost-%COMP%]{display:block}"]});let t=e;return t})();var Le=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(s(Q),s(J))},e.\u0275dir=v({type:e});let t=e;return t})(),$e=(()=>{let e=class e extends Le{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=Y(e)))(o||e)}})(),e.\u0275dir=v({type:e,features:[D]});let t=e;return t})(),se=new E("NgValueAccessor");var Dt={provide:se,useExisting:I(()=>q),multi:!0};function bt(){let t=te()?te().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Mt=new E("CompositionEventMode"),q=(()=>{let e=class e extends Le{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!bt())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(s(Q),s(J),s(Mt,8))},e.\u0275dir=v({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&p("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},features:[S([Dt]),D]});let t=e;return t})();var We=new E("NgValidators"),ze=new E("NgAsyncValidators");function qe(t){return t!=null}function Ze(t){return be(t)?pe(t):t}function Xe(t){let e={};return t.forEach(n=>{e=n!=null?y(y({},e),n):e}),Object.keys(e).length===0?null:e}function Ke(t,e){return e.map(n=>n(t))}function Et(t){return!t.validate}function Ye(t){return t.map(e=>Et(e)?e:n=>e.validate(n))}function At(t){if(!t)return null;let e=t.filter(qe);return e.length==0?null:function(n){return Xe(Ke(n,e))}}function ae(t){return t!=null?At(Ye(t)):null}function wt(t){if(!t)return null;let e=t.filter(qe);return e.length==0?null:function(n){let i=Ke(n,e).map(Ze);return ge(i).pipe(me(Xe))}}function le(t){return t!=null?wt(Ye(t)):null}function Te(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Ft(t){return t._rawValidators}function It(t){return t._rawAsyncValidators}function oe(t){return t?Array.isArray(t)?t:[t]:[]}function R(t,e){return Array.isArray(t)?t.includes(e):t===e}function je(t,e){let n=oe(e);return oe(t).forEach(r=>{R(n,r)||n.push(r)}),n}function Ge(t,e){return oe(e).filter(n=>!R(t,n))}var L=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ae(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=le(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},F=class extends L{get formDirective(){return null}get path(){return null}},P=class extends L{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},$=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},St={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Ui=M(y({},St),{"[class.ng-submitted]":"isSubmitted"}),Je=(()=>{let e=class e extends ${constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(s(P,2))},e.\u0275dir=v({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&ee("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[D]});let t=e;return t})(),Qe=(()=>{let e=class e extends ${constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(s(F,10))},e.\u0275dir=v({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&ee("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[D]});let t=e;return t})();var x="VALID",B="INVALID",w="PENDING",N="DISABLED";function et(t){return(Z(t)?t.validators:t)||null}function xt(t){return Array.isArray(t)?ae(t):t||null}function tt(t,e){return(Z(e)?e.asyncValidators:t)||null}function Nt(t){return Array.isArray(t)?le(t):t||null}function Z(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Ot(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new k(1e3,"");if(!i[n])throw new k(1001,"")}function Pt(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new k(1002,"")})}var W=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===x}get invalid(){return this.status===B}get pending(){return this.status==w}get disabled(){return this.status===N}get enabled(){return this.status!==N}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(je(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(je(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ge(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ge(e,this._rawAsyncValidators))}hasValidator(e){return R(this._rawValidators,e)}hasAsyncValidator(e){return R(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=w,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=N,this.errors=null,this._forEachChild(i=>{i.disable(M(y({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(M(y({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=x,this._forEachChild(i=>{i.enable(M(y({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(M(y({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===x||this.status===w)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?N:x}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=w,this._hasOwnPendingAsyncValidator=!0;let n=Ze(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new C,this.statusChanges=new C}_calculateStatus(){return this._allControlsDisabled()?N:this.errors?B:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(w)?w:this._anyControlsHaveStatus(B)?B:x}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Z(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=xt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Nt(this._rawAsyncValidators)}},z=class extends W{constructor(e,n,i){super(et(n),tt(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){Pt(this,!0,e),Object.keys(e).forEach(i=>{Ot(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ue=new E("CallSetDisabledState",{providedIn:"root",factory:()=>ce}),ce="always";function kt(t,e){return[...e.path,t]}function it(t,e,n=ce){nt(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),jt(t,e),Ht(t,e),Gt(t,e),Tt(t,e)}function He(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Tt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function nt(t,e){let n=Ft(t);e.validator!==null?t.setValidators(Te(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=It(t);e.asyncValidator!==null?t.setAsyncValidators(Te(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();He(e._rawValidators,r),He(e._rawAsyncValidators,r)}function jt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&rt(t,e)})}function Gt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&rt(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function rt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Ht(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function Ut(t,e){t==null,nt(t,e)}function Bt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Rt(t){return Object.getPrototypeOf(t.constructor)===$e}function Lt(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function $t(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===q?n=o:Rt(o)?i=o:r=o}),r||i||n||null}var Wt={provide:F,useExisting:I(()=>de)},O=(()=>Promise.resolve())(),de=(()=>{let e=class e extends F{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._directives=new Set,this.ngSubmit=new C,this.form=new z({},ae(i),le(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(i){O.then(()=>{let r=this._findContainer(i.path);i.control=r.registerControl(i.name,i.control),it(i.control,i,this.callSetDisabledState),i.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(i)})}getControl(i){return this.form.get(i.path)}removeControl(i){O.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name),this._directives.delete(i)})}addFormGroup(i){O.then(()=>{let r=this._findContainer(i.path),o=new z({});Ut(o,i),r.registerControl(i.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(i){O.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name)})}getFormGroup(i){return this.form.get(i.path)}updateModel(i,r){O.then(()=>{this.form.get(i.path).setValue(r)})}setValue(i){this.control.setValue(i)}onSubmit(i){return this.submitted=!0,Lt(this.form,this._directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(i){return i.pop(),i.length?this.form.get(i):this.form}};e.\u0275fac=function(r){return new(r||e)(s(We,10),s(ze,10),s(ue,8))},e.\u0275dir=v({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,o){r&1&&p("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[S([Wt]),D]});let t=e;return t})();function Ue(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Be(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var zt=class extends W{constructor(e=null,n,i){super(et(n),tt(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Z(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Be(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ue(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ue(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Be(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var qt={provide:P,useExisting:I(()=>he)},Re=(()=>Promise.resolve())(),he=(()=>{let e=class e extends P{constructor(i,r,o,d,a,ft){super(),this._changeDetectorRef=a,this.callSetDisabledState=ft,this.control=new zt,this._registered=!1,this.name="",this.update=new C,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=$t(this,d)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),Bt(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){it(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){Re.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&Ae(r);Re.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?kt(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(s(F,9),s(We,10),s(ze,10),s(se,10),s(Ce,8),s(ue,8))},e.\u0275dir=v({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[S([qt]),D,ye]});let t=e;return t})(),ot=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=v({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})(),Zt={provide:se,useExisting:I(()=>fe),multi:!0},fe=(()=>{let e=class e extends $e{writeValue(i){let r=i??"";this.setProperty("value",r)}registerOnChange(i){this.onChange=r=>{i(r==""?null:parseFloat(r))}}};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=Y(e)))(o||e)}})(),e.\u0275dir=v({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(r,o){r&1&&p("input",function(a){return o.onChange(a.target.value)})("blur",function(){return o.onTouched()})},features:[S([Zt]),D]});let t=e;return t})();var Xt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({});let t=e;return t})();var Kt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({imports:[Xt]});let t=e;return t})();var st=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:ue,useValue:i.callSetDisabledState??ce}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({imports:[Kt]});let t=e;return t})();var at=(()=>{let e=class e{constructor(){this.onNewCharacter=new C,this.character={name:"",power:0}}emitCharacter(){console.log(this.character),this.character.name.length!==0&&(this.onNewCharacter.emit(this.character),this.character={name:"",power:0})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=V({type:e,selectors:[["dbz-add-character"]],outputs:{onNewCharacter:"onNewCharacter"},decls:7,vars:2,consts:[[1,"row"],["type","text","name","name","placeholder","Nombre",1,"form-control","mb-2",3,"ngModel","ngModelChange"],["type","number","name","power","placeholder","Poder",1,"form-control","mb-2",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary",3,"click"]],template:function(r,o){r&1&&(l(0,"h4"),m(1,"Agregar Personaje"),u(),l(2,"form",0)(3,"input",1),p("ngModelChange",function(a){return o.character.name=a}),u(),l(4,"input",2),p("ngModelChange",function(a){return o.character.power=a}),u(),l(5,"button",3),p("click",function(){return o.emitCharacter()}),m(6," Agregar "),u()()),r&2&&(_(3),b("ngModel",o.character.name),_(1),b("ngModel",o.character.power))},dependencies:[ot,q,fe,Je,Qe,he,de]});let t=e;return t})();var lt=(()=>{let e=class e{constructor(i){this.dbzService=i}get characters(){return[...this.dbzService.characters]}onDeleteCharacter(i){this.dbzService.onDeleteCharacterById(i)}onNewCharacter(i){this.dbzService.addCharacter(i)}};e.\u0275fac=function(r){return new(r||e)(s(Pe))},e.\u0275cmp=V({type:e,selectors:[["app-dbz-main-page"]],decls:8,vars:1,consts:[[1,"row"],[1,"col"],[3,"characterList","onDelete"],[3,"onNewCharacter"]],template:function(r,o){r&1&&(l(0,"h1"),m(1,"Personajes"),u(),T(2,"hr"),l(3,"div",0)(4,"div",1)(5,"dbz-list",2),p("onDelete",function(a){return o.onDeleteCharacter(a)}),u()(),l(6,"div",1)(7,"dbz-add-character",3),p("onNewCharacter",function(a){return o.onNewCharacter(a)}),u()()()),r&2&&(_(5),b("characterList",o.characters))},dependencies:[ke,at],encapsulation:2});let t=e;return t})();var X=(()=>{let e=class e{constructor(){this.title="Hola mundo",this.counter=10}increaseBy(i){this.counter+=i}reset(){this.counter=10}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=V({type:e,selectors:[["app-root"]],decls:2,vars:0,template:function(r,o){r&1&&T(0,"hr")(1,"app-dbz-main-page")},dependencies:[lt],encapsulation:2});let t=e;return t})();var ut=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({});let t=e;return t})();var ct=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({imports:[G]});let t=e;return t})();var dt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e}),e.\u0275inj=h({imports:[G,st]});let t=e;return t})();var ht=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e,bootstrap:[X]}),e.\u0275inj=h({providers:[Se()],imports:[Ie,Ne,ut,ct,dt]});let t=e;return t})();var ei=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=f({type:e,bootstrap:[X]}),e.\u0275inj=h({imports:[ht,xe]});let t=e;return t})();export{ei as a};
