class Country{
    constructor(name, description, flag){
        this.name = name;
        this.description = description;
        this.flag = flag;
    }

    static get isUnlocked(){
        return game.team.divisionRank >= game.league.divisions.length - 1 || game.country >= 1;
    }
}