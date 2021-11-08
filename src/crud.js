const addTask = (arrList, itemList) => {
  return [...arrList, itemList]
}

const delTask = (arrList, itemId) => {
  return arrList.filter(({ id }) => id !== itemId)
}

const editTask = (arrList, itemId, taskEdited) => {
  const newList = arrList.map((task) => { 
    if (task.id === itemId) {
      return taskEdited
    }
    return task
  })
  return newList
}

module.exports = { addTask, delTask, editTask }
