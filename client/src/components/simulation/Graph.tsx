// ** Next Import
import dynamic from 'next/dynamic'

// ** Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'
const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false })

// ** Store
import { getHierarchy } from 'src/store/pages/simulation'

type Props = {
  hierarchy: any
  getHierarchy: () => void
}

type State = {
  prunedTree: any
  nodesById: any
  graphWidth: number
  root: { id: string; name: string }
  docks: any[]
  ships: any[]
  cranes: any[]
  siteCranes: any[]
  trucks: any[]
}

class Graph extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      prunedTree: {
        nodes: [],
        links: []
      },
      nodesById: {
        nodes: [],
        links: []
      },
      graphWidth: 0,
      root: { id: 'PORT', name: 'Assan Port' },
      docks: [
        { id: 'rihtim1', name: 'Rıhtım 1', parent: 'PORT' },
        { id: 'rihtim2', name: 'Rıhtım 2', parent: 'PORT' }
      ],
      ships: [
        { id: 'ship1', name: 'ship1', parent: 'rihtim1' },
        { id: 'ship2', name: 'ship2', parent: 'rihtim1' },
        { id: 'ship3', name: 'ship3', parent: 'rihtim2' },
        { id: 'ship4', name: 'ship4', parent: 'rihtim2' }
      ],
      cranes: [
        { id: 'crane1', name: 'Crane 1', parent: 'ship1' },
        { id: 'crane2', name: 'Crane 2', parent: 'ship1' },
        { id: 'crane3', name: 'Crane 3', parent: 'ship1' },
        { id: 'crane4', name: 'Crane 4', parent: 'ship2' },
        { id: 'crane5', name: 'Crane 5', parent: 'ship2' },
        { id: 'crane6', name: 'Crane 6', parent: 'ship2' }
      ],
      siteCranes: [
        { id: 'siteCrane1', name: 'Site Crane 1', parent: 'crane1' },
        { id: 'siteCrane2', name: 'Site Crane 2', parent: 'crane2' },
        { id: 'siteCrane3', name: 'Site Crane 3', parent: 'crane3' }
      ],
      trucks: [
        { id: 'truck1', name: 'Truck 1', parent: 'crane1' },
        { id: 'truck2', name: 'Truck 2', parent: 'crane2' },
        { id: 'truck3', name: 'Truck 3', parent: 'crane3' }
      ]
    }
  }

  async componentDidMount() {
    await this.createGraph()
    await this.props.getHierarchy()
    this.responsiveConfiguration()
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.hierarchy !== prevProps.hierarchy) {
      this.createGraph()
    }
  }

  async componentWillUnmount() {
    window.removeEventListener('resize', () => {
      this.setState({
        graphWidth: document.querySelector('#graphDiv')!.clientWidth - 30
      })
    })
  }

  handleNodeRightClick = (node: any) => {
    node.collapsed = !node.collapsed
    this.getPrunedTree()
  }

  handleNodeClick = (node: any) => {}

  getPrunedTree = () => {
    const { hierarchy } = this.props
    const rootId = hierarchy.root.id
    const nodesById = this.state.nodesById
    const visibleNodes = []
    const visibleLinks = []

    ;(function traverseTree(node = nodesById[rootId]) {
      visibleNodes.push(node)
      if (node['collapsed']) return
      visibleLinks.push(...node['childLinks'])
      node['childLinks']
        .map((link: any) => (typeof link.target === 'object' ? link.target : nodesById[link.target]))
        .forEach(traverseTree)
    })()

    let visibleData = {
      nodes: visibleNodes,
      links: visibleLinks
    }

    this.setState({ prunedTree: visibleData })
  }

  responsiveConfiguration = () => {
    this.setState({
      graphWidth: document.querySelector('#graphDiv')!.clientWidth - 30
    })
    window.addEventListener('resize', () => {
      if (document.querySelector('#graphDiv') !== null) {
        this.setState({
          graphWidth: document.querySelector('#graphDiv')!.clientWidth - 30
        })
      }
    })
  }

  createGraph = async () => {
    const { hierarchy } = this.props
    let tempHierarchy = JSON.parse(JSON.stringify(hierarchy))
    let nodes: any = []
    let links: any = []

    if (tempHierarchy.root === undefined) {
      this.setState({
        prunedTree: { nodes: [], links: [] },
        nodesById: { nodes: [], links: [] }
      })
      return
    }

    nodes = [
      tempHierarchy.root,
      ...tempHierarchy.docks,
      ...tempHierarchy.ships,
      ...tempHierarchy.cranes,
      ...tempHierarchy.siteCranes,
      ...tempHierarchy.trucks
    ]

    tempHierarchy.docks.forEach((dock: any) => {
      links.push({ source: dock.parent, target: dock.id })
    })

    tempHierarchy.ships.forEach((ship: any) => {
      links.push({ source: ship.parent, target: ship.id })
    })

    tempHierarchy.cranes.forEach((crane: any) => {
      links.push({ source: crane.parent, target: crane.id })
    })

    tempHierarchy.siteCranes.forEach((siteCrane: any) => {
      links.push({ source: siteCrane.parent, target: siteCrane.id })
    })

    tempHierarchy.trucks.forEach((truck: any) => {
      links.push({ source: truck.parent, target: truck.id })
    })

    let returnData = {
      nodes,
      links
    }

    // Set NodesById for collapse / expand
    const rootId = 'PORT'
    const nodesById = Object.fromEntries(returnData['nodes'].map((node: any) => [node.id, node]))

    returnData['nodes'].forEach((node: any) => {
      node['collapsed'] = node.id !== rootId
      node['childLinks'] = []
    })

    returnData['links'].forEach((link: any) => {
      nodesById[link.source]['childLinks'].push(link)
    })

    this.setState({
      prunedTree: returnData,
      nodesById: nodesById
    })
  }

  render() {
    const { prunedTree, graphWidth } = this.state

    return (
      <div id={'graphDiv'}>
        <ForceGraph2D
          onNodeClick={this.handleNodeClick}
          onNodeRightClick={this.handleNodeRightClick}
          linkColor={() => 'rgb(6, 111, 197)'}
          linkWidth={3}
          width={graphWidth}
          height={600}
          linkDirectionalParticles={2}
          linkDirectionalParticleWidth={3}
          linkDirectionalArrowRelPos={1}
          dagMode={'td'}
          dagLevelDistance={50}
          graphData={prunedTree}
          d3VelocityDecay={0.3}
          nodeCanvasObject={(node, ctx) => {
            const img = new Image()
            img.src = node.imgSource
            img.style.padding = '50px'
            img.style.margin = '50px'
            console.log(node)

            ctx.drawImage(img, node.x - 4, node.y - 4, 8, 8)
          }}
        />
      </div>
    )
  }
}

const mstp = (state: any) => {
  return {
    hierarchy: state.simulation.hierarchy
  }
}

const mdtp = (dispatch: any) => {
  return {
    getHierarchy: () => dispatch(getHierarchy())
  }
}

export default connect(mstp, mdtp)(Graph)
