app.component("division", {
    emits: ["team-selected"],
    props: ["division"],
    computed: {
        sortedTeams(){
            return this.division.getSortedTeams();
        },
        promotion(){
            return this.division.getPromotionRanks();
        },
        relegation(){
            return this.division.getRelegationRanks();
        }
    },
    methods: {
        getStatsDisplay(team){
            return "ATT " + functions.formatNumber(team.getCombinedAttack()) + "  DEF " + functions.formatNumber(team.getCombinedDefense());
        },
        selectTeam(team){
            this.$emit("team-selected", team);
        },
        formatNumber: functions.formatNumber
    },
    template: `<table class="division">
<thead>
    <th>Pos</th>
    <th>Team</th>
    <th>ATT</th>
    <th>DEF</th>
    <th>Games</th>
    <th>W</th>
    <th>D</th>
    <th>L</th>
    <th>Goals</th>
    <th>GD</th>
    <th>pts</th>
</thead>
<tr :class="{promotion: i < promotion, relegation: i > sortedTeams.length - relegation - 1}" v-for="(team, i) in sortedTeams" :key="i">
    <td class="pos">{{i + 1}}</td>
    <td class="icon-flex team" :title="getStatsDisplay(team)"><team-logo :logo="team.logo"></team-logo> <span @click="selectTeam(team)">{{team.name}}</span></td>
    <td>{{formatNumber(team.getCombinedAttack())}}</td>
    <td>{{formatNumber(team.getCombinedDefense())}}</td>
    <td>{{team.getTotalGames()}}</td>
    <td>{{team.divisionStats.win}}</td>
    <td>{{team.divisionStats.draw}}</td>
    <td>{{team.divisionStats.lose}}</td>
    <td>{{team.divisionStats.goalsShot}} - {{team.divisionStats.goalsOpponent}}</td>
    <td>{{team.getGoalDifference()}}</td>
    <td>{{team.getPoints()}}</td>
</tr>
</table>`
});
