async function downloadExchangeData() {
    const response = await fetch("ENTER THE API_KEY HERE", {
        method:"GET",
    });
    const exchangeData = await response.json();
    console.log(exchangeData)
    }

    downloadExchangeData();
