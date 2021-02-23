import React from "react"
import { Segment } from "semantic-ui-react"
import { Link } from "react-router-dom"

const AdminActions = () => {
  return (
    <div id="adminActionsSegment">
      <Link to="/admin/create">
        <Segment stacked id="AdminActionOption">
          Create a Fuze
        </Segment>
      </Link>
      <Link to="/admin/update">
        <Segment stacked id="AdminActionOption">
          Update a Fuze
        </Segment>
      </Link>
      <Link to="/admin/delete">
        <Segment stacked id="AdminActionOption">
          Delete a Fuze
        </Segment>
      </Link>
    </div>
  )
}
export default AdminActions
