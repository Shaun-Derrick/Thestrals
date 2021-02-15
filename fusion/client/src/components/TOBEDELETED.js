<Table.Body>
              
{fuzes.map((fuze, index) => (
  <tr>
    {/* <th scope ="row">{index + 1}</th> */}

    <td>{fuze.startDate}</td>
    <td>{fuze.endDate}</td>
    {/* <td>{fuze.startTime}</td>
    <td>{fuze.endTime}</td> */}
    <td>{fuze.Title}</td>
    <td>{fuze.description}</td>
    <td>{fuze.venue}</td>
    {/* <td>{fuze.tags}</td>
    <td>{fuze.organizer}</td>
    <td>{fuze.whereIFoundThisEvent2}</td> */}
    <td>
      <Segment inverted>
      {/* <Button size='tiny'as={Link} to={`/fuzes/edit/${fuze._id}`}>Edit Fuze</Button> */}

      <Button inverted color='red' animated='fade' as={Link} to={`/fuzes/edit/${fuze._id}`}>
        <Button.Content visible>Edit Fuze</Button.Content>
        <Button.Content hidden >Are you sure?</Button.Content>
      </Button>

      <Button inverted color='green' size='tiny'as={Link} to={`/view fuzes/${fuze._id}`}>View Fuze</Button>

       {/* \delete button below. UnComment only when required */}
       {/* <Button size='tiny' color='red' 
        onClick={() => deleteFuze(fuze._id)}
         >Delete Fuze</Button> 
        */}
       </Segment>
      
    
    </td>

  </tr>

))}

</Table.Body>