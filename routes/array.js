var express = require('express');
var router = express.Router();
router.get('/:id', function(req, res, next) {
    let arr=newFunction();
    console.log(req.params.id);
    let p=req.params.id
    console.log(p);
 //res.json({ Array:arr})
 let data;
 for(let i=0;i<arr.length;i++){
   console.log(arr[i].id);
   if(arr[i].id==p){
     console.log(p);
     data=arr[i]
     
   }

  console.log(arr);
}
console.log(data,"data");
if(data){
  res.json({arr:data})
}else{
  res.json({reslut:"no result found"})
}
});

router.get("/",function(req,res){
  let r=newFunction();
  res.json({arr:r})
})


const newFunction=()=>{
    return arr=[
        {id:1,name:"apple",type:"fruit"},
    {id:2,name:"dates",type:"dryfruit"},
    {id:3,name:"orange",type:"fruit"},
    {id:4,name:"wallnut",type:"dryfruit"},
    {id:5,name:"grapes",type:"fruit"},
    {id:6,name:"almond",type:"dryfruit"}
    ]
}

module.exports = router;
