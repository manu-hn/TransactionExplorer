


export function threeApiCreator(search , page , limitPerPage , selectedMonth) {
    console.log("ThreeAPI", search, page, limitPerPage, selectedMonth)
    const threeApiUrls = [
        `http://localhost:5000/api/transactions/search-query?search=${search}&page=${page}&perPage=${limitPerPage}`,
        `http://localhost:5000/api/transactions/statistics?month=${selectedMonth}`,
        `http://localhost:5000/api/transactions/bar-chart?month=${selectedMonth}`,
    ]


    return threeApiUrls;

}
