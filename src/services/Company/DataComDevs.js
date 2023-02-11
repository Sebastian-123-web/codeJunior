
export const DataComDev = async(data) => {
    // try {
        const response = await fetch(`https://63e1176059bb472a74308398.mockapi.io/api/v1/${data}`);
        const DataDevCom = await response.json();
        return DataDevCom;
    // } catch (error) {
        // console.log(error.message);
    // }
}

export const DataComDev2 = async(data, id) => {
    // try {
        const response = await fetch(`https://63e1176059bb472a74308398.mockapi.io/api/v1/${data}/${id}`);
        const DataDevCom = await response.json();
        return DataDevCom;
    // } catch (error) {
        // console.log(error.message);
    // }
}