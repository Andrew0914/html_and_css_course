function populateHomeIssuesList() {
  const issueItem = document.querySelector(".issues-list-container .issue")

  for (let times = 0; times <= 50; times++) {
    document.querySelector(".issues-list-container").appendChild(issueItem.cloneNode(true))
  }
}

function populateTags() {
  const labels = ["UI", "Enhancement", "UX", "Feature", "Bug"]
  labels.forEach(label => {
    const tag = document.createElement("span")
    tag.innerHTML = label
    tag.className = "tag"
    document.getElementById("tag-box").appendChild(tag)
  })
}


window.addEventListener('load', function () {
  populateHomeIssuesList()
  populateTags()
})
