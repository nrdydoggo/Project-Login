
function Login()
{
    var id = document.getElementById("idinpt").value;
    var pw = document.getElementById("pwinpt").value;
    var logcount = 0;
    var inptcount = 0;
    event.preventDefault();
    if(id == "test" && pw == "1234")
    {
        alert("Signed in successfully.");
    // It goes to SubmitPage.html in the end.
        window.location.assign("SubmitPage.html");
        return false;
    }
    else
    {
        ++inptcount;
        alert("You've entered wrong ID or PW, after" + inptcount + "times later, sign in session will be disabled.");
        if(inptcount == 3)
        {
            inptcount = 0;
            document.getElementById("idinpt").disabled = true;
            document.getElementById("pwinpt").disabled = true;
            document.getElementById("enter").disabled = true;
            return false;
        }
    }
}