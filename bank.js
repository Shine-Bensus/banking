balance = 0.00;

users = [];

function register()
{
    user = document.getElementById("user").value;
    upass = document.getElementById("upass").value;
    confirm_pass = document.getElementById("confirm_pass").value;
    div1 = document.getElementById("div1");
    div2 = document.getElementById("div2");
    if(user==="")
    {
        alert("Please enter the username");
        return;
    }
    if(upass==="")
    {
        alert("Please enter the password");
        return;
    }
    if(confirm_pass==="")
    {
        alert("Please enter the confirm password");
        return;
    }
    if(upass!=confirm_pass)
    {
        alert("Confirm Password Incorrect !!!\nPlease do check ")
        return;
    }
    if(user!="" && upass!="" && confirm_pass!="")
    {
        users.push([user,confirm_pass]);
        alert("Registration Successfull\nHurray!!!!");
    }
    document.getElementById("div1").style.visibility="hidden";
    document.getElementById("div2").style.visibility="visible";
}

function login()
{
    username = document.getElementById("user1").value;
    password = document.getElementById("upass1").value;
    bal = document.getElementById("balance").innerHTML=balance;

    count = 0,j=0;
    for(i=0;i<users.length;i++)
    {
        if(users[i][j]==username && users[i][j+1]==password)
            {
                alert("Login Successful");
                count++;
            } 
    }
    if(count==0)
    {
        alert("Incorrect username or password\nIf not registered, please register");
        return;
    }
    document.getElementById("div2").style.visibility="hidden";
    document.getElementById("div3").style.visibility="visible";
}

function depit() // Withdrawal
{
    withdraw = parseFloat(document.getElementById("withdraw").value);

    if(withdraw=="" || withdraw == 0 )
    {
        alert("Please enter a valid amount");
        return;
    }
    if(balance<=0)
    {
        alert("Zero balance\nPlease deposit amount first");
        return;
    }
    if(withdraw<=balance)
    {
        balance = (balance - withdraw).toFixed(2);
        document.getElementById("balance").innerHTML=balance;
        
        if(balance == 0)
        {
            balance = 0.00;
        }
        return;
    }
    if(withdraw>balance)
    {
        alert("Withdrawal amount is more than balance amount");
        return;
    }
}

function credit() // Deposit
{
    deposit = parseFloat(document.getElementById("deposit").value);

    if(deposit==="" || deposit == 0)
    {
        alert("Please enter a valid amount");
        return;
    }
    balance = balance+deposit;
    document.getElementById("balance").innerHTML=balance;
}

function logout()
{
    document.getElementById("div3").style.visibility="hidden";
    document.getElementById("div2").style.visibility="visible";
}
function login_page()
{
    document.getElementById("div1").style.visibility="hidden";
    document.getElementById("div2").style.visibility="visible";
}
function register_page()
{
    document.getElementById("div2").style.visibility="hidden";
    document.getElementById("div1").style.visibility="visible";
}
