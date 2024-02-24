

const url = "https://api.coinbase.com/v2/currencies/crypto";

async function getDetail() {
    try {
        const res = await axios.get(url);
        const tbody = document.querySelector("tbody");

        for (let i = 0; i < res.data.data.length; i++) {
            const tr = document.createElement("tr");
            tbody.appendChild(tr);

            const columns = ['asset_id', 'code', 'name', 'color', 'sort_index', 'exponent', 'type', 'address_regex'];

            columns.forEach(column => {
                const td = document.createElement("td");
                tr.appendChild(td);
                td.innerText = res.data.data[i][column];
            });
        }
    } catch (e) {
        console.error(e);
    }
}

getDetail();

