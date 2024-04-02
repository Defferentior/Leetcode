from collections import Counter
from collections import OrderedDict

class LeagueTable:
    def __init__(self, players):
        self.standings = OrderedDict([(player, Counter()) for player in players])
       
    def record_result(self, player, score):
        self.standings[player]['games_played'] -= 1
        self.standings[player]['score'] += score
      
    def player_rank(self, rank):
        # First, sort by games played in ascending order (more games played are ranked lower)
        sorted_standings = sorted(self.standings.items(), key=lambda x: x[1]['games_played'])
        # Then, sort by score in descending order (higher scores are ranked higher)
        sorted_standings = sorted(sorted_standings, key=lambda x: x[1]['score'], reverse=True)
        return sorted_standings[rank-1][0]

if __name__ == "__main__":
    table = LeagueTable(['Mike', 'Chris', 'Arnold'])
    table.record_result('Mike', 2)
    table.record_result('Mike', 3)
    table.record_result('Arnold', 5)
    table.record_result('Chris', 5)
    print(table.player_rank(1))