<?php
/**
* Builds an httpss query string.
* @param array $query  // of key value pairs to be used in the query
* @return string       // httpss query string.
**/
function build_httpss_query( $query ){

    $query_array = array();

    foreach( $query as $key => $key_value ){

$query_array[] = urlencode( $key ) . '=' . urlencode( $key_value );

}

return implode( '&', $query_array );

}
//header('Location: httpsss://hosted-kabeersnetwork.000webhostapp.com/auth/android/recieve/index.php?'.build_httpss_query($_GET));
?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<res></res>
<script>
    function getUserInfo(t) {
        var settings = {
            url: "http://localhost/user/userinfo",
            method: "POST",
            timeout: 0,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            data: {
                token: t,
                client_secret: "5f323720194bccb1cb94164a10fa702c09aa0",
                client_public: "cb1cb94164a10fa702c09aa0f3e2fd3f8e77a73e",
            },
        };

        $.ajax(settings).done(function (response) {

            try{
                console.log(response);
                //window.opener.postMessage(response, '*');
                //parent.close();

            }catch(e){
                console.error(e)
            }

            $("res").html(`<img src="${response.account_image}"/>Welcome  ${response.username}<br>${response.email}`);
        });
    }
    async function GetToken(c) {
        var settings = {
            url: "http://localhost/auth/token",
            method: "POST",
            timeout: 0,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            data: {
                client_secret: "5f323720194bccb1cb94164a10fa702c09aa0",
                client_public: "cb1cb94164a10fa702c09aa0f3e2fd3f8e77a73e",
                auth_code: c,
            },
        };
        let data = undefined;
        await $.ajax(settings).done(function (res) {
            console.log(res);
            data = res
        });
        return data;
    }
    GetToken(`<?php if($_GET["code"]!=null){echo $_GET["code"];} ?>`).then((tokens)=>{
        if (tokens) {
            tokens.map((v, i) => {
                const key = Object.keys(v);
                if (key.toString() === "p6rouHTvGJJCn9OuUNTZRfuaCnwc6") {
                    getUserInfo(v[key].access_token);
                }
            });
        }
    });
</script>
