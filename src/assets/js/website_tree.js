// NOTE: website tree
// specify each page can be published

const website_tree = {
  "root": {
    index: true,
    "about-me": {
      index: true
    },
    "development": {
      index: true
    },
    "research": {
      index: true
    },
    "study": {
      index: true
    }
  }
}

function find_in_website_tree(path) {

  let is_published = false;
  let is_under_construction = false;
  let is_not_found = false;

  let obj = website_tree["root"]
  let dirs = path.split("/")
  for (let d=0; d<dirs.length; d++) {
    let dir = dirs[d]
    if (dir.length == 0) { continue }
    if (dir in obj) {
      obj = obj[dir]
    } else {
      is_not_found = true
      break
    }
  }
  if (!is_not_found) {
    if (typeof(obj) == Boolean) {
      is_published = obj
      is_under_construction = !is_published
    } else {
      is_published = obj["index"]
      is_under_construction = !is_published
    }
  }
  return [is_published, is_under_construction, is_not_found]
}

function is_under_construction(path) {
  let [is_pub, is_uc, is_nf] = find_in_website_tree(path)
  return is_uc
}

function add_alias(routes) {
  let idx_uc = routes.findIndex(
    function(e) {
      return e["path"] === "/under-construction"
    }
  )
  let aliases = []
  routes.forEach(function(route) {
    let path = route["path"]
    if (!(path in ["/under-construction", "/not-found", "*"]) && is_under_construction(path)) {
      aliases.push(path)
    }
  })
  routes[idx_uc]["alias"] = aliases
}

module.exports = {
  add_alias
}
