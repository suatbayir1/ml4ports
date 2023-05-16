// ** React Imports
import { useState, useEffect } from 'react'
import ReactJson from 'react-json-view'
import { useCallback } from 'react'
import ReactFlow, {
  MiniMap,
  MarkerType,
  Position,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge
} from 'reactflow'
import 'reactflow/dist/style.css'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Types
import { MLModelType, ModelInput } from 'src/types/components/mlTypes'

interface IProps {
  open: boolean
  model: MLModelType
  handleClose: () => void
}

const initialNodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { label: 'x' },
    sourcePosition: Position.Right,
    targetPosition: Position.Left
  },
  {
    id: '2',
    position: { x: 0, y: 50 },
    data: { label: 'y' },
    sourcePosition: Position.Right,
    targetPosition: Position.Left
  },
  {
    id: '3',
    position: { x: 200, y: 25 },
    data: { label: 'ML Model' },
    sourcePosition: Position.Right,
    targetPosition: Position.Left
  },
  {
    id: '4',
    position: { x: 400, y: 25 },
    data: { label: 'output' },
    sourcePosition: Position.Right,
    targetPosition: Position.Left
  }
]

const initialEdges = [
  {
    id: 'e1',
    source: '1',
    target: '3',
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  },
  {
    id: 'e2',
    source: '2',
    target: '3',
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  },
  {
    id: 'e3',
    source: '3',
    target: '4',
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  }
]

const UsedFeaturesDialog = (props: IProps) => {
  const { open, model, handleClose } = props
  const [json, setJson] = useState<MLModelType | Object>(model)

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(params => setEdges(eds => addEdge(params, eds)), [setEdges])

  useEffect(() => {
    createNodesAndEdges()

    return () => {
      model
    }
  }, [model])

  const createNodesAndEdges = () => {
    let tempNodes: any[] = []
    let tempEdges: any[] = []

    model.inputs.forEach((input, idx) => {
      tempNodes.push({
        id: input.name,
        position: { x: 0, y: idx * 50 },
        data: { label: input.name },
        sourcePosition: Position.Right,
        targetPosition: Position.Left
      })

      tempEdges.push({
        id: input.name,
        source: input.name,
        target: model.modelName,
        markerEnd: {
          type: MarkerType.ArrowClosed
        }
      })
    })

    tempNodes.push({
      id: model.modelName,
      position: { x: 200, y: model.inputs.length > 1 ? ((model.inputs.length - 1) * 50) / 2 : 50 },
      data: { label: model.modelName },
      sourcePosition: Position.Right,
      targetPosition: Position.Left
    })

    model.outputs.forEach((output, idx) => {
      tempNodes.push({
        id: output.name,
        position: { x: 400, y: model.outputs.length > 1 ? idx * 50 : 50 },
        data: { label: output.name },
        sourcePosition: Position.Right,
        targetPosition: Position.Left
      })

      tempEdges.push({
        id: output.name,
        source: model.modelName,
        target: output.name,
        markerEnd: {
          type: MarkerType.ArrowClosed
        }
      })
    })

    setNodes(tempNodes)
    setEdges(tempEdges)
  }

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open} fullWidth>
        <DialogTitle id='customized-dialog-title' sx={{ p: 4 }}>
          <Typography variant='h6' component='span'>
            Used Features of {model.modelName}
          </Typography>
          <IconButton
            aria-label='close'
            onClick={handleClose}
            sx={{ top: 10, right: 10, position: 'absolute', color: 'grey.500' }}
          >
            <Icon icon='mdi:close' />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ p: 4 }}>
          <div
            style={{
              height: 400
            }}
          >
            <ReactFlow
              nodes={nodes}
              edges={edges}
              // onNodesChange={onNodesChange}
              // onEdgesChange={onEdgesChange}
              onConnect={onConnect}
            >
              <MiniMap />
              {/* <Controls /> */}
              <Background />
            </ReactFlow>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default UsedFeaturesDialog
