import React from "react"
import { Dropdown } from "semantic-ui-react"
import "../stylesheets/Dropdown.css"
import "semantic-ui-css/semantic.min.css"
import { useState } from "react"

const options = [
  {
    key: "softwaredevelopment",
    text: "Software Development",
    value: "Software Development",
  },
  { key: "webdevelopment", text: "Web Development", value: "Web Development" },
  { key: "hardware", text: "Hardware", value: "Hardware" },
  {
    key: "it",
    text: "Information Technology",
    value: "Information Technology",
  },
  {
    key: "ip",
    text: "Information Processing",
    value: "Information Processing",
  },
  { key: "is", text: "Information Systems", value: "Information Systems" },
  { key: "design", text: "Design", value: "Design" },
  { key: "uxui", text: "UX & UI", value: "UX-UI" },
  { key: "animation", text: "Animation", value: "Animation" },
  {
    key: "gamedevelopment",
    text: "Game Development",
    value: "Game Development",
  },
  { key: "startup", text: "Start Up", value: "Start Up" },
  { key: "entrepreneurial", text: "Entrepreneurial", value: "Entrepreneurial" },
  { key: "investment", text: "Investment", value: "Investment" },
  {
    key: "educationandtraining",
    text: "Education and Training",
    value: "Education and Training",
  },
  {
    key: "productmanagement",
    text: "Product Management",
    value: "Product Management",
  },
  {
    key: "projectmanagement",
    text: "Project Management",
    value: "Project Management",
  },
  { key: "funding", text: "Funding", value: "Funding" },
  {
    key: "customerserviceandengagement",
    text: "Customer Service and Engagement",
    value: "Customer Service and Engagement",
  },
  { key: "marketing", text: "Marketing", value: "Marketing" },
  {
    key: "qualityassurance",
    text: "Quality Assurance",
    value: "Quality Assurance",
  },
  { key: "security", text: "Security", value: "Security" },
  {
    key: "ai",
    text: "Artificial Intelligence",
    value: "Artificial Intelligence",
  },
  { key: "vr", text: "Virtual Reality", value: "Virtual Reality" },
  { key: "nanotechnology", text: "Nano-Technology", value: "Nano-Technology" },
  { key: "innovation", text: "Innovation", value: "Innovation" },
  { key: "networking", text: "Networking", value: "Networking" },
  { key: "social", text: "Social", value: "Social" },
  {
    key: "networkadministration",
    text: "Network Administration",
    value: "Network Administration",
  },
  { key: "womenintech", text: "Women in Tech", value: "Women in Tech" },
  { key: "fintech", text: "Fintech", value: "Fintech" },
]

const DropdownExampleMultipleSelection = (props) => {
  // const Dropdown = (props) => { ----- Tried changing name an export but as it is a semantic-ui-react module I do not think it can be as it stops rendering
  const [categoryName, setCategoryName] = useState([])

  const createBlock = (e, data) => {
    let selectedCategory = data.value
    // console.log(data.value)
    setCategoryName(selectedCategory)
    props.updateFilter(selectedCategory)
  }

  return (
    <Dropdown
      placeholder="Filter Categories"
      style={{
        color: "paleGreen",
        borderColor: "paleGreen",
        borderWidth: 4,
        width: "40vw",
      }}
      fluid
      multiple={true}
      selection
      options={options}
      onChange={createBlock}
    />
  )
}
// export default Dropdown tried changing name but then the dropdown module stops rendering
export default DropdownExampleMultipleSelection
