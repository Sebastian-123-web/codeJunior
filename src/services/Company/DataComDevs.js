
export const DataComDev = async() => {
    // try {
        const response = await fetch(`https://63e1176059bb472a74308398.mockapi.io/api/v1/developers`);
        const DataDevCom = await response.json();
        return DataDevCom;
    // } catch (error) {
        // console.log(error.message);
    // }
}