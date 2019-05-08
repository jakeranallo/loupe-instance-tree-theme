import React, { Component } from 'react'
import SortableTree, { toggleExpandedForAll } from 'react-sortable-tree'
import CustomTheme from '../index'
import './app.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      treeData: [
        {
          title: 'Departments',
          children: [
            {
              title: 'Categories',
              children: [{ title: 'Products', children: [{ title: 'Views' }] }]
            }
          ]
        }
      ]
    }
    this.updateTreeData = this.updateTreeData.bind(this)
    this.expandAll = this.expandAll.bind(this)
    this.collapseAll = this.collapseAll.bind(this)
  }

  updateTreeData(treeData) {
    this.setState({ treeData })
  }

  expand(expanded) {
    this.setState({
      treeData: toggleExpandedForAll({
        treeData: this.state.treeData,
        expanded
      })
    })
  }

  expandAll() {
    this.expand(true)
  }

  collapseAll() {
    this.expand(false)
  }

  render() {
    const { treeData } = this.state

    return (
      <div
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        <div style={{ flex: '1 0 50%', padding: '0 0 0 15px' }}>
          <SortableTree
            theme={CustomTheme}
            treeData={treeData}
            onChange={this.updateTreeData}
            canDrag={({ node }) => !node.dragDisabled}
            generateNodeProps={() => ({
              buttons: [
                <button
                  style={{
                    padding: 0,
                    borderRadius: '100%',
                    backgroundColor: 'gray',
                    color: 'white',
                    width: 16,
                    height: 16,
                    border: 0,
                    fontWeight: 100
                  }}
                >
                  i
                </button>
              ]
            })}
          />
        </div>
      </div>
    )
  }
}

export default App
