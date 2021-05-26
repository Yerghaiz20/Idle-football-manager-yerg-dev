app.component("game-header", {
    methods: {
        changeTab(tab){
            game.tab = tab;
        },
        formatNumber: functions.formatNumber
    },
    computed:{
        logo(){
            return this.$root.team.logo;
        },
        term(){
            return this.$root.settings.term;
        },
        stadiumUnlocked(){
            return Stadium.isUnlocked;
        },
        countriesUnlocked(){
            return Country.isUnlocked;
        },
        trainingUnlocked(){
            return PlayerTraining.isUnlocked;
        },
        tvUnlocked(){
            return game.tv.isUnlocked();
        },
        money(){
            return game.money;
        },
        totalAttack(){
            return game.team.getCombinedAttack();
        },
        totalDefense(){
            return game.team.getCombinedDefense();
        },
        averageStamina(){
            return (game.team.getAverageStamina() * 100);
        },
        currentMatch(){
            return game.currentMatch;
        },
        nextMatch(){
            return game.nextMatch;
        }
    },
    template: `<header>
<nav>
    <ul>
        <label class="icon-flex"><img src="images/icons/money.png"/>$ {{formatNumber(money)}}</label>
    </ul>
</nav>
<nav>
    <ul>
        <label class="icon-flex"><img src="images/icons/strategy/offensive.png"/>{{formatNumber(totalAttack)}}</label>
        <label class="icon-flex"><img src="images/icons/strategy/defensive.png"/>{{formatNumber(totalDefense)}}</label>
        <label class="icon-flex"><img src="images/icons/stamina.png"/>{{formatNumber(averageStamina)}}%</label>
    </ul>
</nav>
<ul>

</ul>
<nav>
    <ul>
        <label><match2 v-if="currentMatch" :match="currentMatch"></match2></label>
        <label><match2 v-else-if="nextMatch" :match="nextMatch"></match2></label>
    </ul>
</nav>

<nav>
    <ul>
        <li class="icon-flex" @click="changeTab('tab-team')"><team-logo :logo="logo"></team-logo> Team</li>
        <li class="icon-flex" @click="changeTab('tab-player-market')"><img src="images/icons/player-market.png"/> Market</li>
        <li class="icon-flex" @click="changeTab('tab-upgrades')"><img src="images/icons/upgrades.png"/> Upgrades</li>
        <li class="icon-flex" @click="changeTab('tab-league')"><img src="images/icons/league.png"/> League</li>
        <li class="icon-flex" @click="changeTab('tab-match')"><img src="images/icons/football.png"/> Match</li>
        <li v-if="stadiumUnlocked" class="icon-flex" @click="changeTab('tab-stadium')"><img src="images/icons/stadium.png"/> Stadium</li>
        <li v-if="trainingUnlocked" class="icon-flex" @click="changeTab('tab-player-training')"><img src="images/icons/player-training.png"/> Training</li>
        <li v-if="tvUnlocked" class="icon-flex" @click="changeTab('tab-tv-channels')"><img src="images/tv-filled.png"/> TV</li>
        <li v-if="countriesUnlocked" class="icon-flex" @click="changeTab('tab-countries')"><img src="images/icons/country.png"/> Countries</li>
        <li class="icon-flex" @click="changeTab('tab-achievements')"><img src="images/icons/achievements.png"/> Achievements</li>
        <li class="icon-flex" @click="changeTab('tab-settings')"><img src="images/icons/settings.png"/> Settings</li>
    </ul>
</nav>

</header>`
});
