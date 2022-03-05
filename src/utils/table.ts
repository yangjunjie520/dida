import { cloneDeep } from 'lodash'

export const getTableColums = tableColumns => {
  if (Array.isArray(tableColumns)) {
    return tableColumns
      .reduce(
        (acc, val) =>
          val.firstlevel
            ? acc.concat(val)
            : acc.concat(
                ...val.children.filter(item => {
                  if (item.checked) {
                    return item
                  }
                }),
              ),
        [],
      )
      .map(item => {
        const copy = cloneDeep(item)
        if (Array.isArray(item.children)) {
          const newChildren = []
          item.children.forEach(node => {
            node.checked && newChildren.push(node)
          })
          copy.children = newChildren
        }
        return copy
      })
  } else {
    throw new Error('tableColumns is must array')
  }
}
