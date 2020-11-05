<script src="http://docs-kabeersnetwork-kview-app-sta.rf.gd/Private/uploads/5f3c3255e75c7jquery.js"></script>
<script>
var settings = {
  "url": "http://localhost:3000/auth/token",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  "data": {
    "client_secret": "5s323720194bccb1cb94164a10fa702c09aa0",
    "client_public": "cascb94164a10fa702c09aa0f3e2fd3f8e77a73e",
    "auth_code": "<?php if(isset($_GET['code'])){ echo $_GET['code'];} ?>",
    "grant_types": "FB17A89BB32F42AA1DFAA59D27637:charts_data|A5YWEwZjNlMmZkM2Y4ZTc3YTczZSI:email|A5YWEwZjNlMmZkM2Y4ZTc3YTczZSI:username|p6rouHTvGJJCn9OuUNTZRfuaCnwc6:upload|p6rouHTvGJJCn9OuUNTZRfuaCnwc6:files"
  }
};

$.ajax(settings).done(function (response) {
  console.log('Token:', response);
  const res = response;
  
  res.map((v,i)=>{
	  if(Object.keys(v) === "p6rouHTvGJJCn9OuUNTZRfuaCnwc6"){
		fetch('http://localhost:3000/test/drive/'+res[Object.keys(v)]).then((v)=>{
			console.log(v);
		})
	  }
  });

});
</script>