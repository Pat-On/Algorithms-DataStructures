/*
            Graphs - Topological Sort

        return specific order of vertexes of the given graph, when the graph satisfy some specific condition




        Graph need to be directed to have indegree value
            indegree - represent how many connections coming into that vertex
            indegree = how many edges pointing to the vertex

        x               indegree: 0

        x <- y          indegree: 1

        y --> x <-- y   indegree: 3
              ^
              |
              y


        It is always applicable in directed graphs

        DAG:
        Directed 
        Acyclic 
        Graph

        That can be no cycles to perform the topological sort
            Because topological sort can only take vertexes with indegree number equal 0
        
        acyclic graph - a graph with no cycle in
        cyclic graph - a graph with at least one cycle

        -------------------- logical solution with topological sort --------------------

                prerequisites: [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]]
                n: 6
                                3 -> 4 <
                          < /   ^       \
                        0       \       |           No cycle
                         \        \     |           
                          \         \   |           Return: true
                            \          \
                              > 1       5
                                    \   | 
                                        v
                                      > 2

                    inDegree:

                    0 [  0,
                    1    0,
                    2    0,
                    3    0,
                    4    0,
                    5    0   ]









*/
