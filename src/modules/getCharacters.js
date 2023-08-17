export const getCharacters = async () => {

    try {
        const response = await fetch('https://thronesapi.com/api/v2/Characters');
       
        if(response.ok) {
            const data = await response.json();
            console.log(data);
        }

        console.log('something went wrong' );
    } catch (error) {
        console.log(error);
    }
    return [];
};

