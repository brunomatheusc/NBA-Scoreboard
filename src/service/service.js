import Api from './Api';

export async function getAllTeams(){
    try {
        const response = await Api.get(`/teams`);

        if (response.status == 200) {
            return response.data;
        }
    } catch (error) {
        console.log("Erro ao obter times");
        console.log(error.response);
    }
}

export async function getTeamById(teamId){
    try {
        const response = await Api.get(`/teams/${teamId}`);

        if (response.status == 200){
            return response.data;
        }
    } catch (error) {
        console.log("Erro ao obter time");
        console.log(error.response);        
    }
}