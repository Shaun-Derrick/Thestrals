import React from 'react'
import { Link } from 'react-router-dom';

const AdminActions = () => {
  return (
    <div id="adminActionsSegment">
      <Link to="/admin/create" id="AdminActionOption">Create a Fuze</Link>
      <Link to="/admin/update" id="AdminActionOption">Update a Fuze</Link>
      <Link to="/admin/delete" id="AdminActionOption">Delete a Fuze</Link>
    </div>
  );
}
export default AdminActions