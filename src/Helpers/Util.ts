export const debounce = (callback: Function, delay: number) => {
  let timeout: ReturnType<typeof setTimeout>
  return function (this: any, ...args: any[]) {
    clearTimeout(timeout)
    timeout = setTimeout(() => callback.apply(this, args), delay)
  }
}

export const xpathSelector = (xpathExpression: string, targetNode: Node) => {
  let results = []
  const resultType = XPathResult.ORDERED_NODE_SNAPSHOT_TYPE
  const xpathResult = document.evaluate(xpathExpression, targetNode, null, resultType, null)
  for (let i = 0; i < xpathResult.snapshotLength; i++) {
    results.push(xpathResult.snapshotItem(i))
  }
  return results
}
