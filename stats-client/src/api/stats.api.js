export class StatAPI {
    static async getAll() {
        const response = await fetch("http://localhost:3000/statistics", {
            method: "GET"
        });

        const data = await response.json();

        return data;
    }

    static async getRange(startDate, endDate) {
        const response = await fetch("http://localhost:3000/statistics/" + startDate + "/" + endDate, {
            method: "GET"
        });

        const data = await response.json();

        return data;
    }

    static async addStats(data){
        await fetch("http://localhost:3000/statistics",{
            method:"POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    static async clearStats(data){
        await fetch("http://localhost:3000/statistics/clear",{
            method:"POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
}