const teamsProfile = [
    {
        name: "Atlanta Hawks",
        img: "https://www.nba.com/assets/logos/teams/primary/web/ATL.svg"
    },
    {
        name: "Boston Celtics",
        img: "https://www.nba.com/assets/logos/teams/primary/web/BOS.svg"
    },
    {
        name: "Brooklyn Nets",
        img: "https://www.nba.com/assets/logos/teams/primary/web/BKN.svg"
    },
    {
        name: "Charlotte Hornets",
        img: "https://www.nba.com/assets/logos/teams/primary/web/CHA.svg"
    },
    {
        name: "Chicago Bulls",
        img: "https://www.nba.com/assets/logos/teams/primary/web/CHI.svg"
    },
    {
        name: "Cleveland Cavaliers",
        img: "https://www.nba.com/assets/logos/teams/primary/web/CLE.svg"
    },
    {
        name: "Dallas Mavericks",
        img: "https://www.nba.com/assets/logos/teams/primary/web/DAL.svg"
    },
    {
        name: "Denver Nuggets",
        img: "https://www.nba.com/assets/logos/teams/primary/web/DEN.svg"
    },
    {
        name: "Detroit Pistons",
        img: "https://www.nba.com/assets/logos/teams/primary/web/DET.svg"
    },
    {
        name: "Golden State Warriors",
        img: "https://www.nba.com/assets/logos/teams/primary/web/GSW.svg"
    },
    {
        name: "Houston Rockets",
        img: "https://www.nba.com/assets/logos/teams/primary/web/HOU.svg"
    },
    {
        name: "Indiana Pacers",
        img: "https://www.nba.com/assets/logos/teams/primary/web/IND.svg"
    },
    {
        name: "LA Clippers",
        img: "https://www.nba.com/assets/logos/teams/primary/web/LAC.svg"
    },
    {
        name: "Los Angeles Lakers",
        img: "https://www.nba.com/assets/logos/teams/primary/web/LAL.svg"
    },
    {
        name: "Memphis Grizzlies",
        img: "https://www.nba.com/assets/logos/teams/primary/web/MEM.svg"
    },
    {
        name: "Miami Heat",
        img: "https://www.nba.com/assets/logos/teams/primary/web/MIA.svg"
    },
    {
        name: "Milwaukee Bucks",
        img: "https://www.nba.com/assets/logos/teams/primary/web/MIL.svg"
    },
    {
        name: "Minnesota Timberwolves",
        img: "https://www.nba.com/assets/logos/teams/primary/web/MIN.svg"
    },
    {
        name: "New Orleans Pelicans",
        img: "https://www.nba.com/assets/logos/teams/primary/web/NOP.svg"
    },
    {
        name: "New York Knicks",
        img: "https://www.nba.com/assets/logos/teams/primary/web/NYK.svg"
    },
    {
        name: "Oklahoma City Thunder",
        img: "https://www.nba.com/assets/logos/teams/primary/web/OKC.svg"
    },
    {
        name: "Orlando Magic",
        img: "https://www.nba.com/assets/logos/teams/primary/web/ORL.svg"
    },
    {
        name: "Philadelphia 76ers",
        img: "https://www.nba.com/assets/logos/teams/primary/web/PHI.svg"
    },
    {
        name: "Phoenix Suns",
        img: "https://www.nba.com/assets/logos/teams/primary/web/PHX.svg"
    },
    {
        name: "Portland Trail Blazers",
        img: "https://www.nba.com/assets/logos/teams/primary/web/POR.svg"
    },
    {
        name: "Sacramento Kings",
        img: "https://www.nba.com/assets/logos/teams/primary/web/SAC.svg"
    },
    {
        name: "San Antonio Spurs",
        img: "https://www.nba.com/assets/logos/teams/primary/web/SAS.svg"
    },
    {
        name: "Toronto Raptors",
        img: "https://www.nba.com/assets/logos/teams/primary/web/TOR.svg"
    },
    {
        name: "Utah Jazz",
        img: "https://www.nba.com/assets/logos/teams/primary/web/UTA.svg"
    },
    {
        name: "Washington Wizards",
        img: "https://www.nba.com/assets/logos/teams/primary/web/WAS.svg"
    }
];

export default teamsProfile;

export function getTeamInfo(name){
    for (let item of teamsProfile) {
        if (item.name == name) {
            // team = item;
            return item;
        }
    }
}