<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript</title>
</head>
<body>
    <script>
        let form=document.getElementsByTagName("form")[0];
        form.addEventListener("submit", (e)=> {
            e.preventDefault();
            alert("Subscribed!");
        });
      </script>
</body>
</html>