const findShortestPath = require('../shortestPathFinder');
const trip = require('../trip');
module.exports = {
    getPath: (req, res) => {
        try {
            const { BerlinDestinations } = trip;  
            const {
                findShortestPath,
                graphBuilder,
                minutesToTime,
            } =  require('../shortestPathFinder');
            
            const IndianaPathFinder = (input) => {
                const {
                departureCity: startNode,
                arrivalCity: endNode,
                departureTime: adventureTime,
                graph,
                } = graphBuilder(input);
                return minutesToTime(
                findShortestPath(graph, startNode, endNode, adventureTime)
                );
            };
            res.status(200).send(IndianaPathFinder(BerlinDestinations));
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
}